---
layout: post
categories: [timeline, visualization, aggregation, hunch]
tumblr_id: 1121196449
disqus_comments: true
date: 2008-09-07 20:05:50 UTC
title: Hunch Timeline
---

<a href="/attachments/2008/09/hunch-aggregator-timeline.png"><img src="/attachments/2008/09/hunch-aggregator-timeline-500.png" alt="" title="hunch-aggregator-timeline-500" width="500" height="325" class="alignnone size-full wp-image-715" /></a>
<small>Hunch Timeline displays events in the beginning of <a href="http://hunch.se/timeline/#2008-08-07">August 2008</a></small>

Since the first deployment of <a href="http://rsms.me/2008/08/14/hunch-aggregator">Hunch Aggregator</a> I've had the idea of visualizing the aggregated data in a timeline. Since then I've written some timeline visualizations and backends – none of them really good. Today I found out about <a href="http://simile.mit.edu/timeline/">MIT <abbr title="Semantic Interoperability of Metadata and Information in unLike Environments">SIMILE</abbr> Timeline</a>. I've used this piece of open source software to create the <a href="http://hunch.se/timeline/">Hunch Timeline</a>.

By passing any <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date with the URL hash/anchor, you can initiate the viewport at a specific time. Examples:
<ul>
<li><a href="http://hunch.se/timeline/#2008-08-07">#2008-08-07</a></li>
<li><a href="http://hunch.se/timeline/#2007">#2007</a></li>
<li><a href="http://hunch.se/timeline/#2008-02">#2008-02</a></li>
<li><a href="http://hunch.se/timeline/#2006-05-06%2009:00">#2006-05-06 09:00</a></li>
</ul>

Please note that the timeline data sets are huge, which might result in long loading times.

You navigate and scroll the timeline simply by clicking and dragging with your mouse, or by using the arrow keys on your keyboard.



