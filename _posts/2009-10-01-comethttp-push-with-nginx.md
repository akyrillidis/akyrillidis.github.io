---
layout: post
categories: [http, nginx, push, comet, software, pubsub]
tumblr_id: 1102105581
disqus_comments: true
date: 2009-10-01 23:06:00 UTC
title: Comet/HTTP push with nginx
---

One of the most cumbersome problems of implementing some kind of HTTP push a.k.a. <a href="http://en.wikipedia.org/wiki/Comet_(programming)">Comet</a> functionality is that the client (website) need to be served from the same host and on the same port as the actual push (long-polling or multipart response) mechanism. Now, as we need to maintain a high number of concurrent client connections we can <em>not</em> use traditional server-side applications like PHP or Ruby on Rails. Using PHP for instance would require one PHP process per client connection -- the main memory would quickly become saturated and we'll most likely hit some scary limit of fds and processes the kernel handles without being a sad little kernel.

For a little project I'm involved in I needed to have the best of two worlds and to a cheap price...

<!--more-->

Cheap? Yes, as in not expensive. I refrain from running two or more separate hosts exploiting the "iframe domain relaxness" (for instance like Facebook do) because it's expensive. Hey, I don't want to spare a cute little IPv4 address just for this thing.

<a href="http://nginx.net/">Nginx</a> is a russian workhorse (uhm, no actually it's a really neat web server by <a href="http://sysoev.ru/en/">Igor Sysoev</a>) which have become a popular choice for running large websites with high load. And I really like it, both as a user and as a code-pornographer (it's written in a very pretty C).

Now, let's not eat the cream off of the cake. First I'd like to tell you what happened before I settled with nginx. The most apparent solution is to...not solve it. Not by yourself I mean. Let someone else do the job -- find ready-made software. After a night of Googling and evaluation I've read about and tried a few of the most popular choices: <a href="http://orbited.org/">Orbited</a>, <a href="http://meteorserver.org/">Meteor</a>, <a href="http://cometd.com/">CometD</a>, <a href="http://glassfish.dev.java.net/">GlassFish</a>, <a href="http://erlycomet.googlecode.com/">ErlyComet</a>, and numerous others (see end of this article for a few more links). Too complex and all of them basically needs to be running on their own host in an expensive >2-host setup (exploiting the previously mentioned "iframe domain relaxness"). I also refuse to run Java -- call me old and grumpy, I just don't trust a Java app to stay under 1 GB RAM at 10,000 connections.

It's fun to write software, so what the hell -- I wrote my own little comet (pub/sub on HTTP channels, basically) using my fave async I/O library <a href="http://www.monkey.org/~provos/libevent/">libevent</a>. I called it <a href="http://github.com/rsms/cometps">cometps</a>. But... it basically suffered from the first problem mentioned with the "big ones" -- it wasn't a real battle-tested web server at the same time, which is a requirement for the little project I'm working on. At least I discovered how neat it is to use YAML for configuring C apps :).

Let's take a reading break and look at some pretty ASCII art:

                sender
                  ||
                  ||
               [message]
                  ||
                  \/
        ----------------------
          channel {$push_id} 
        ----------------------
          ||      ||      ||
          \/      ||      \/
       listener   ||   listener
                  \/
               listener

Then yesterday I stumbled upon <a href="http://wiki.nginx.org/NginxHttpPushModule">NginxHttpPushModule</a> by <a href="http://github.com/slact">Leo Ponomarev</a>. This module is basically a chat server and I need a broadcast model, where all subscribers to a "channel" gets all messages published in that channel. So <a href="http://github.com/rsms/nginx_http_push_module/tree/dont-push-the-button">I forked it</a>, rewrote some parts and added broadcasting functionality -- voilá! A publish-subscribe server... oh wait, it's <a href="http://nginx.net/">Nginx</a> at the same time! Awesome!

*And it works really well.*

Never write software without a real-life context. To honour that sentence (I just made up) I wrote a simple Cocoa (OS X) application which grabs an image from my laptops camera, POSTs it to a PHP script which saves it to disk and then the Cocoa app publishes the newly created image's URL to a NginxHttpPushModule channel. In the other end there is a ridiculously simple HTML client (<a href="http://jquery.com/">jQuery</a> and <a href="http://en.wikipedia.org/wiki/XMLHttpRequest">XHR</a>) which listens to the same channel and when receiving (JSON) from the camera app, updates an image. Here's a video of the thing, running on a live remote server.

<object width="600" height="400"><param name="movie" value="http://www.youtube.com/v/nMce-ILjSSs&hl=en&fs=1&rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/nMce-ILjSSs&hl=en&fs=1&rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="600" height="400"></embed></object>

I thew in old dirty Internet Explorer 6 just for kicks. Note that 95% of the delay is caused by uploading the photo over my slow connection at home -- the publishing and propagation is faster then both Batman and the Phantom.

## Related reading

- <a href="http://github.com/rsms/nginx_http_push_module/tree/dont-push-the-button">Source code of my NginxHttpPushModule</a>
- <a href="http://cometdaily.com/2008/02/20/benchmarking-comet-servers/">Benchmarking Comet Servers -- what's a good comet server?</a>
- <a href="http://cometdaily.com/maturity.html">Comet Maturity Guide -- overview of popular comet servers and features</a>
