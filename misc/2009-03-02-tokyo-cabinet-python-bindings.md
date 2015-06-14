---
layout: post
categories: [python, code, dbm, tokyocabinet, software]
tumblr_id: 1102106108
disqus_comments: true
date: 2009-03-02 09:48:00 UTC
title: Tokyo Cabinet Python bindings
---

Today I released <a href="http://github.com/rsms/tc">tc</a> – Python bindings to the <a href="http://tokyocabinet.sourceforge.net/index.html">Tokyo Cabinet</a> database library. The code is heavily based on that of Tasuku Suenagas <a href="http://coderepos.org/share/wiki/PyTC">pytc</a> and improves in many ways (documentation, code structure, python 2.6 and 3.0 compatibility, robust setup.py, etc).

It's currently available for Python 2.4, 2.5, 2.6 and 3.0 in <a href="http://www.macports.org/">MacPorts</a> and <a href="http://pypi.python.org/pypi/tc">PyPI</a>. Source <a href="http://github.com/rsms/tc">resides in the 'Hub</a>.

<!--more-->

## Example

This assumes Mac OS X with MacPorts

    $ sudo port sync
    $ sudo port install py25-tc
    $ python2.5

    >>> import tc
    >>> db = tc.HDB('casket.hdb', tc.HDBOWRITER | tc.HDBOCREAT)
    >>> db.put('potato', 'potatis')
    >>> db.put('carrot', 'morot')
    >>> db.put('banana', 'banan')
    >>> db.get('carrot')
    'morot'
