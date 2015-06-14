---
layout: post
categories: [feed, presence, pipes, yahoo pipes, atom, tool, rss]
tumblr_id: 1121200959
disqus_comments: true
date: 2008-12-02 17:36:02 UTC
title: Universal presence pipe
---

<a href="http://pipes.yahoo.com/pipes/pipe.info?_id=d0a66b6ca2b1dbd74a157ef909171775"><img src="/attachments/2008/12/up-pipe-overview.png" alt="up-pipe-overview" width="180" height="173" class="alignright size-full wp-image-932" /></a>About two years ago I created a simple <a href="http://pipes.yahoo.com/pipes/pipe.info?_id=eCESRQti3BGEibnMl7okhQ">presence/alert/observer Yahoo! Pipe for Spotify</a>. Now, that pipe works pretty OK for that specific task, but as soon as I wanted to try something else the need for a modified pipe clone stopped me. Later I thought: "well, shouldn't be too much hustle designing a universal pipe...".

So one not-so-sunny day I created a new Pipe from scratch. This probably too complex little thing of bits n' bytes is called <a href="http://pipes.yahoo.com/pipes/pipe.info?_id=d0a66b6ca2b1dbd74a157ef909171775">Universal Presence</a>. The purpose of this Pipe is to gather and mark/highlight content from the web which concerns a certain subject.

<h2>A what-pipe!?</h2>

<a href="http://pipes.yahoo.com/">Yahoo! Pipes</a> is an amazing tool and a great example of a modern web application. Pipes is a powerful composition tool to aggregate, manipulate, and mashup content from around the web.
<!--more-->

Basically, you manipulate <a href="http://en.wikipedia.org/wiki/Web_feed">feeds of items</a> by using a thought-through <a href="http://www.jumpcut.com/fullscreen?id=F4396574585311DC87A2000423CF0184&type=clip">graphical user interface</a>.

<h2>Advanced features of the Universal Presence pipe</h2>

<div class="alignright" style="margin-top:2em"><a href="/attachments/2008/12/up-example-conf.png"><img src="/attachments/2008/12/up-example-conf-small.png" alt="" title="up-example-conf-small" width="180" height="64" class="alignnone size-medium wp-image-945" /></a><br/><br/><a href="/attachments/2008/12/up-google-reader.png"><img src="/attachments/2008/12/up-google-reader-small.png" alt="up-google-reader-small" width="180" height="103" class="alignnone size-full wp-image-939" /></a></div>In order for this pipe to be really useful, I put alot of time into adding three different filters:
<ul>
<li>Filters for skipping items containing certain data</li>
<li>Filter for skipping items <em>not</em> containing certain data</li>
<li>Filter for highlighting items which matches one or more criteria</li>
</ul>

The way it works is that you go to <a href="http://pipes.yahoo.com/pipes/pipe.info?_id=d0a66b6ca2b1dbd74a157ef909171775">http://pipes.yahoo.com/pipes/pipe.info?_id=d0a66b6ca2b1dbd74a157ef909171775</a>, fill in at least one <em>Query keyword</em> and hit the rather small "Run Pipe"-button.

Now, try messing with the other options, like highlighting terms and content.
