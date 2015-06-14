---
layout: post
categories: [spotify, real-time, visualization, cocui, software]
tumblr_id: 1102105223
disqus_comments: true
date: 2009-11-25 23:21:39 UTC
title: Easy data visualization with WebKit
---

At Spotify, we recently put up two large TV screens on the walls of our Stockholm office (most R&D is done there). The idea is to visualize & communicate that *"stuff is happening"* without actually revealing any critical data (since a lot of external people are visiting the office).

Today me, [Andreas Öman](http://www.lonelycoder.com/) and [Emil Hesslow](http://hesslow.se/) -- fellow Spotifiers -- kicked off a cozy little Hack Night at the office, trying to create something simple yet impressive to have running on one of the TV screens.

We ended up writing a real-time search query visualization in just about a few hours. It looks like this and is smoothly animated:

[<img src="http://farm3.static.flickr.com/2683/4134842328_5f28afb5c9_b.jpg" alt="Screen shot">](http://hunch.se/tmp/091126-sptv1demo/)

*[Try a demo version here...](http://hunch.se/tmp/091126-sptv1demo/)* (Tested in Safari, iPhone, Firefox and Chrome).

How did we manage to build a real-time scalable system and high-performance viz in such an awfully short time?!

<img src="http://farm3.static.flickr.com/2509/4134104571_69eda37643_m.jpg" width="240" height="180" alt="Hack night" align="right" title="Hacking in style with lit candles and beer">Well, for starters we used WebKit through [Cocui](http://rsms.me/2009/09/16/introduction-to-cocui.html) which instantly gave us full screen high-performance hardware-accelerated drawing (yes, it's a long sentence with cool words but those things shouldn't be taken for granted).

*But... where does the data come from? From the internets?* -- Not really, but it sure travels in internets-style. We use a [dumb pub/sub message queue](/2009/10/comethttp-push-with-nginx). In one end a client (the WebKit/[Cocui](/2009/09/introduction-to-cocui) app in HTML/JavaScript) is listening (subscribing). In the other end one of our search servers are pushing messages into the queue in batches.

              	[batch of search queries during last minute]
              	                   ||
              	                   ||
              	                   \/
              	             [message queue]
              	              ||        ||
              	              ||        ||
              	              \/        \/
              	           [client]  [client]

The client simply enqueues these search queries when they are delivered while at the same time dequeueing search queries. We do it this way (batches and a queue) because we simply have too high rate of searches. It would be almost impossible to read anything if we actually sent every single message. To give the feeling of real time we use a random delay when dequeueing queries.

When a query is dequeued it's formatted into a chunk of HTML (a `div` and an `a` tag) and then prepended to the body using [jQuery](http://jquery.com/) with animated effects.

Don't forget to [try the demo version](http://hunch.se/tmp/091126-sptv1demo/) (Does not work in Internet Explorer) which is simply the client without any real-time data. <small>Note that this demo uses *static data* for demonstration purposes, not an actual real-time stream. The real-time data stream is only available within our office and thus not available for public use.</small>

*Update:* Successfully tested with iPhone, Firefox and Chrome -- thank you readers!

Here's the full [Cocui](/2009/09/introduction-to-cocui) demo application: [sptv1-demo-cocui-app.zip](http://hunch.se/tmp/091126-sptv1demo/sptv1-demo-cocui-app.zip) (for Mac OS X 10.5 and newer).
