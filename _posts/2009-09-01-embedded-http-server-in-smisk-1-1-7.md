---
layout: post
categories: [smisk, software]
tumblr_id: 1102105450
disqus_comments: true
date: 2009-09-01 13:33:00 UTC
title: Embedded HTTP server in Smisk 1.1.7
---

<a href="http://python-smisk.org/">Smisk</a> 1.1.7 will not bring many new features, but one of them is a built-in HTTP server which can be used for local development, removing the need for a "real" HTTP server (e.g. Lighttpd or Apache httpd).

Simply give your application the <code>--http</code> flag:

    $ ./app.py --http
    httpd listening on localhost:8080 backed by application 6056

You can explicitly specify which host and/or what port the HTTP server should bind and listen to by instead using the <code>--http-addr</code> and <code>--http-port</code> flags.

    $ ./app.py --http-port 8888
    httpd listening on localhost:8888 backed by application 6034

    $ ./app.py --http-port 8888 --http-addr 0.0.0.0
    httpd listening on 0.0.0.0:8888 backed by application 6034

Your application will be started in a separate process as a stand-alone FastCGI server listening on <code>127.0.0.1:5990</code> and a smisk.util.httpd.Server is started on the main thread, connecting to your application.

Trying out the <a href="http://github.com/rsms/smisk/tree/67a791c031aba195f1c337a3381a81e5ca8a03b7/examples/mvc/key-value-store">key-value store example application</a>:

    $ examples/mvc/key-value-store/app.py --http
    httpd listening on localhost:8080 backed by application 6126
    rmbp.local - - [01/Sep/2009 15:32:19] "GET / HTTP/1.1" 200 -
    rmbp.local - - [01/Sep/2009 15:32:19] "GET /entry/ HTTP/1.1" 200 -
    rmbp.local - - [01/Sep/2009 15:32:26] "GET /entry/my%20key HTTP/1.1" 404 -
    rmbp.local - - [01/Sep/2009 15:32:27] "PUT /entry/my%20key HTTP/1.1" 204 -
    rmbp.local - - [01/Sep/2009 15:32:29] "GET /entry/my%20key HTTP/1.1" 200 -
    rmbp.local - - [01/Sep/2009 15:32:30] "DELETE /entry/my%20key HTTP/1.1" 204 -
    rmbp.local - - [01/Sep/2009 15:32:31] "GET /entry/my%20key HTTP/1.1" 404 -
    rmbp.local - - [01/Sep/2009 15:32:32] "GET /entry/ HTTP/1.1" 200 -

It's currently being tested in <a href="http://github.com/rsms/smisk/tree/master"><code>smisk/master</code></a> and can thus be checked out, built and tested.
