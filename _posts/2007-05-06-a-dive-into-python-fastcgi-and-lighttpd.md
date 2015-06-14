---
layout: post
categories: [python, lighttpd, fastcgi]
tumblr_id: 1133086125
disqus_comments: true
date: 2007-05-06 21:44:20 UTC
title: A dive into Python, FastCGI and Lighttpd
---

I decided to do some performance analysis on python and fcgi.
As I've been reading about, testing, coding alot and using FastCGI for quite a while, I have my doubts and wonders. But one question remains:

<p class="big">Do you gain from FCGI connection multiplexing?</p>

After a few hours, I have a very clear answer:
No. You don't. Multiplexing will just slow things down. To get you up to speed; multiplexing is as "simple" as one process handling several network connections simultaneous. In the case of Allan Saddis <tt>fcgi</tt> module, this is done using <tt>select()</tt> and threads.

The overhead of creating and destroying threads, locking stuff and using asynchronous network i/o is simply too big to be overseen.

Before we totally discard the multiplexed, threaded model, I want to make it very clear that a multiplexed, threaded model MAY HAVE positive performance impact in certain applications. If for example a process (application) require considerable amount of startup time (when the process is spawned), it may be quicker to run few, or one single, process and instead make it spawn threads, thus avoiding any startup processing overhead each time it needs more connection handlers.

I have run two tests on two different machines. The X-axis specifies the number of processes being run by lighttpd. (real computer processes) In the case of multiplexing, thread count is not included and may be high. The Y-axis displays requests/second (How much throughput a setup can handle. Higher is better.).
First up is an iMac 24" featuring a Intel Core Duo 2.16 GHz processor with 2 cores.

<img src='/attachments/2007/05/rasmusim_i686-1x2c_darwin.png' alt='rasmusim_i686-1×2c_darwin.png' style="margin-top:25px;margin-bottom:20px" />

We clearly see how both the multiplexed and non-multiplexed variant runs optimally on 2 cores. The Multiplexed variant experiences much less fluctuation in process count, but requires more time due to threading and locking overhead.
Next up is a mac pro sporting 2 x 2.66 GHz Dual-Core Intel Xeon processors. That makes it a total 4 cores.

<img src='/attachments/2007/05/apple2_i686-2x2c_darwin.png' alt='apple2_i686-2×2c_darwin.png' style="margin-top:25px;margin-bottom:20px" />

Not a big surprise – this machine is speedier. Here we also see the optimal 4-core-line. However, a very interesting pattern occurs with the, much better, non-multiplexed version of our program. Another strange notation is the performance is slightly better when running 13 processes than running theoretically optimal 4 processes. May be due to BSD/Darwin process handling, lighttpd or a number of other things. I have no idéa what causes this phenomenon.


<h2>Test setup</h2>
I generally have the idea of not getting to down in to geeky details, but in this case it's unfortunately hard to avoid.
<ul>
<li><b>lighttpd</b> 1.4.15 built from source on each machine</li>
<li><b>PCRE</b> 7.0 was also built from source on each machine</li>
<li><b>Apache Bench</b> 1.73</li>
<li><b>Python</b> 2.5 from <a href="http://macpython.org/packages/py25-fat/">macpython.org</a></li>
<li><b>FCGI python module</b> r2025 by <a href="saddi.com">Allan Saddi</a> (run as FCGI, not WSGI)</li>
<li><b>FCGI application</b> <a href="/attachments/2007/05/handler-prof.txt">handler-prof.fcgi</a></li>
<li><b>Lighttpd configuration</b> <a href="/attachments/2007/05/lighttpd-prof.txt">lighttpd-prof.conf</a></li>
<li><b>Profiling script</b> <a href="/attachments/2007/05/run-prof.txt">run-prof.sh</a></li>
</ul>

