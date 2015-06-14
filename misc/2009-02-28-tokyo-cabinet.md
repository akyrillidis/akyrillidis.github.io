---
layout: post
categories: [dbm, database, python, tokyocabinet, tyrant, performance, software]
tumblr_id: 1102106058
disqus_comments: true
date: 2009-02-28 16:20:00 UTC
title: Tokyo Cabinet
---

Lately I've been researching some into the holy grail of keyed data storage – best combination of performance, scalability, efficiency and availability. There are many, many options available ranging from the <a href="http://en.wikipedia.org/wiki/Berkeley_DB">Berkeley DB</a> to <a href="http://labs.google.com/papers/bigtable.html">BigTable</a> implementations like <a href="http://hypertable.org/">Hypertable</a>.

Last weekend I spent some time looking into using <a href="http://en.wikipedia.org/wiki/Berkeley_DB">BDB</a> in a BigTable fashion for managing schema-free tables. However my tests revealed many problems with a solution like that. For instance, BDB is really slow when writing random keys into databases of >100k row size. In the beginning of this week I had a chat with <a href="http://jon.aslund.org/">Jon Åslund</a> regarding this idea and he introduced me to <a href="http://tokyocabinet.sourceforge.net/index.html">Tokyo Cabinet</a> – a modern, battle-tested and extremely high-performance DBM.

Despite the somewhat uncool name, Tokyo Cabinet is a silent beast developed by <a href="http://alpha.mixi.co.jp/blog/?author=3">Mikio Hirabayashi</a> and used in the high-load environment of Japanese Facebook-equivalent <a href="http://mixi.co.jp/">Mixi</a>. TC (short for Tokyo Cabinet) is written in C99 C, sporting a clean and modern API.

Mikio states TC improves on other DBMs in the following areas:
<ul>
<li>Improves space efficiency – smaller size of database file.</li>
<li>Improves time efficiency – faster processing speed.</li>
<li>Improves parallelism – higher performance in multi-thread environment.</li>
<li>Improves usability – simplified API.</li>
<li>Improves robustness – database file is not corrupted even under catastrophic situation.</li>
<li>Supports 64-bit architecture – enormous memory space and database file are available.</li>
</ul>

<!--more-->

## Python bindings

As you might know Python lies close to my heart, so despite the multitude of language bindings available for TC I will only talk about the Python bindings <a href="http://coderepos.org/share/wiki/PyTC">pytc</a> by Tasuku Suenaga.

At the time writing this pytc is only available from <a href="http://pypi.python.org/pypi/pytc/">PyPI</a> and the <a href="http://svn.coderepos.org/share/lang/python/pytc/">main repository</a>, thus you need to build this trivial module yourself.

    $ svn co http://svn.coderepos.org/share/lang/python/pytc/trunk/ pytc
    $ cd pytc
    $ sudo python setup.py install

Unfortunately there is no documentation of pytc – you need to look through <a href="http://svn.coderepos.org/share/lang/python/pytc/trunk/pytc.c">pytc.c</a> manually, which might give you pleasure or pain, depending on if you have a life or not :P. Anyhow, Tasuku have created two examples giving you most clues needed. Good thing is the Python API is almost a clean port of the C API, meaning you can refer to the <a href="http://tokyocabinet.sourceforge.net/spex-en.html">C library reference</a> and apply some common sense.

Here's a very simple program using a hash database, setting three pairs and asserting one of them are retrieved in a proper manner:

    import pytc
    db = pytc.HDB('casket.hdb', pytc.HDBOWRITER | pytc.HDBOCREAT)
    db.put('potato', 'potatis')
    db.put('carrot', 'morot')
    db.put('banana', 'banan')
    assert db.get('carrot') == 'morot'

As the data is mapped into shared memory and the library is thread-safe (locking per row or per database), multiple processes and/or threads of control can operate on the database at the same time. By default whole-database locking is performed, in which case there can be only one writer at any given moment, blocking any other readers or writers. Unless a writer is doing its thing, there can be multiple concurrent readers without any locking.

The performance of the library is very good – almost as fast as working directly with the C API – randomly reading 2 000 000 records took less than 15 seconds (~140 000 reads/sec) using a single thread of control. The database read from was a hash database with 10M records with a variable key length of 10-15 characters.

<b>Update:</b> I'm now working on the Python bindings under the name <a href="http://github.com/rsms/tc">tc</a> – currently available for Python 2.4, 2.5, 2.6 and 3.0 in <a href="http://www.macports.org/">MacPorts</a> and <a href="http://pypi.python.org/pypi/tc">PyPI</a>. Source <a href="http://github.com/rsms/tc">resides in the 'Hub</a>.

## Server – Tokyo Tyrant

While Tokyo Cabinet is best thought of as an API to the native database routines, you'll be happy to know that you can, in fact, run Tokyo Cabinet in stand alone mode with the help of <a href="http://tokyocabinet.sourceforge.net/tyrantdoc/">Tokyo Tyrant</a> - a high concurrency network interface to the underlying database. <a href="http://tokyocabinet.sourceforge.net/tyrantdoc/#tutorial">Backup, replication, and failover</a> are all part of the package.

I ran a few benchmark tests of Tyrant, which proved that this solution indeed provide extremely high performance. This test was run on a MacPro with 8x2.8 GHz Intel Xeon processors with almost no other load, reserving 4 threads for the server.

Server started like this:

    # Server with 4 threads, using a hash table with 10M buckets
    $ ttserver -thnum 4 "*#bnum=1000000"

<b>Test 1</b> – 1 000 000 records, 4 threads:
(Result: About 22 000 operations per second for any of reading, writing or deleting records)

<img src="/attachments/2009/02/tc-tyrant-4threads-1mrecs.png" alt="tc-tyrant-4threads-1mrecs" title="tc-tyrant-4threads-1mrecs" width="500" height="165" class="alignnone size-full wp-image-1248" />

Using the <tt>mget</tt> we can fetch several records in one call, drastically increasing performance:

<a href="/attachments/2009/02/tc-tyrant-mget-performance.pdf"><img src="/attachments/2009/02/tc-tyrant-mget-performance.png" alt="tc-tyrant-mget-performance" title="tc-tyrant-mget-performance" width="500" height="242" class="alignnone size-full wp-image-1251" /></a>

The above numbers was aquired by running <tt>tcrmttest read</tt> against the local Tyrant server with 1M records:

    $ tcrmttest read -tnum 4 -mul X localhost

<h2>Library benchmark</h2>
Mikio provides a pretty good <a href="http://tokyocabinet.sourceforge.net/benchmark.pdf">benchmark document</a> in which he has compared many DBMs with Tokyo Cabinet:

<b>Write performance</b> <small>(Writing 1 000 000 records)</small>
<a class="img" href="http://tokyocabinet.sourceforge.net/benchmark.pdf"><img src="/attachments/2009/02/tc-bench-write.png" alt="tc-bench-write" title="tc-bench-write" width="500" height="178" class="alignnone size-full wp-image-1242" /></a>

<b>Read performance</b> <small>(Fetch all 1 000 000 records)</small>
<a class="img" href="http://tokyocabinet.sourceforge.net/benchmark.pdf"><img src="/attachments/2009/02/tc-bench-read.png" alt="tc-bench-read" title="tc-bench-read" width="500" height="172" class="alignnone size-full wp-image-1241" /></a>

## Conclusion

A very interesting project which state imo. are in the transition between "new and experimental" and "good old reliable software". I've tried to contact Tasuku Suenaga (without any success) about getting his Python bindings into MacPorts. Tokyo Cabinet and Tyrant are perfect complements to my <a href="http://python-smisk.org/">Smisk web services framework</a> – maybe I'll continue working on Tasuku Suenaga Python bindings and bring TC to Debian and MacPorts as well as Smisk.

## Further reading

<a href="http://www.igvita.com/">Ilya Grigorik</a> has a pretty good <a href="http://www.igvita.com/2009/02/13/tokyo-cabinet-beyond-key-value-store/">introduction to Tokyo Cabinet</a> covering parts of TC not mentioned in this article (for instance the array and table engine).
