---
layout: post
categories: [essay, web, hunch, python, aggregation, php, software]
tumblr_id: 1121196228
disqus_comments: true
date: 2008-08-14 17:19:44 UTC
title: Hunch Aggregator
---

<a href="/attachments/2008/08/hunch-aggregator-ui.png"><img src="/attachments/2008/08/hunch-aggregator-ui-small.png" alt="" title="hunch-aggregator-ui-small" width="500" height="224" class="alignnone size-full wp-image-641" /></a>

I've never written about this piece of software before, but have gotten a few questions about it recently, so I thought I'd shed some light on things.

The <a href="http://hunch.se/">Hunch Aggregator</a> is a pretty simple thing – it keeps a central state of many addressable online services. Once upon a time, I created and managed most services myself, like hosting images, blogging, chatting, etc. Suddenly better services than those which I have written popped up – <a href="http://flickr.com/">Flickr</a>, <a href="http://jaiku.com/">Jaiku</a>/<a href="http://twitter.com/">Twitter</a>, <a href="http://facebook.com/">Facebook</a>, <a href="http://wordpress.org/">Wordpress</a>, <a href="http://www.google.com/reader/">Google Reader</a> and so on. So like any pragmatic tech-savvy user would do, I distributed the tasks. Outsourced the pain in the ass of keeping things up to date and working. Now, a new problem arouse: I am one person, but to the outside, the myriad of services did express several different users. Different "persons" or identities. All I want is my friends to be able to hear me, not spend all their time surfing around this myriad of specialized websites.

So I came up with the simple idea of presenting my stuff as a singular stream of events, occurring over time. The first versions of the aggregation software was clumsy and hard to extend. It was unable to synchronize (only add new things) and the presentation was not very sexy. A few years later I blew off the dust from the idea and began from scratch. The result was what is now running on <a href="http://hunch.se/">hunch.se</a>.

<!--more-->
<h2>The concept is simple</h2>
<ul>
<li>There are several sources</li>
<li>Each source has items</li>
<li>Each item has
<ul>
<li>A class – picture, text, sound, recommendation etcetera.</li>
<li>A globally uniqe identifier</li>
<li>A title and possibly a body with content</li>
<li>A URL</li>
<li>Tags</li>
<li>Information about which source produced it</li>
</ul>
</li>
<li>State saved in a <a href="http://en.wikipedia.org/wiki/Relational_database_management_system">RDBMS</a></li>
<li>Synchronization and updates scheduled with fixed time interval</li>
<li>Front/UI orthogonally independent from the back-end</li>
<li>Robust – withstands state loss and high concurrency</li>
</ul>

<h2>Back-end</h2>
<a href="/attachments/2008/08/hunch-aggregator-debug.png"><img src="/attachments/2008/08/hunch-aggregator-debug-150x150.png" alt="Hunch Aggregator back-end tool used for debugging" title="Hunch Aggregator back-end tool used for debugging" width="150" height="150" class="alignright size-thumbnail wp-image-629" /></a>The back-end is written in <a href="http://python.org/">Python</a> and is easy to extend with <a href="http://svn.hunch.se/rasmus/hunch-aggregator/aggregator/sources/">plugin-like source controllers</a>. SQLite 3 is used for storage. The entry-point is a program called sync.py which has some debugging features.

<h2>Front-end</h2>
The front-end, or the user web interface, is written in PHP and presents the current state of sources and items. Filters are used for grouping items, like photos from Flickr or Facebook. There is also a URL-based interface for performing arbitrary queries, which is explained further in this article.

<h2>Item query language</h2>
Because of the nature of the content, one possibly want to display, or subscribe to, only a subset of items. This problem was solved by adding a simple query language and interface.

<tt><a href="http://hunch.se/tags/source:flickr+color+autumn">http://hunch.se/tags/source:flickr+color+autumn</a></tt>

This means "Give me things from the flickr source tagged with color and autumn". This query apparently is constructed of three different criteria: we want to limit results to items from a particular source (flickr). We also only want items labeled, or tagged, with two free-text tags.

At the point of writing this, the presentation of queries are almost unusable (because I'm lazy and have little time for stuff like this) but on the other hand, you can subscribe to a feed of items matching your criteria:

<tt><a href="http://hunch.se/feed/source:flickr+color+autumn">http://hunch.se/feed/source:flickr+color+autumn</a></tt>

Query fragments, or criteria, of the same kind (source, free-text tags, type) are grouped and AND-ed. The borders between criteria groups are OR-ed. There is also a third URL installation for displaying queries:

<tt><a href="http://hunch.se/explain/source:visualizeus+source:stuff+type:picture+color">http://hunch.se/explain/source:visualizeus+source:stuff+type:picture+color</a></tt>

The <em>explain</em> URL presents the compiled <a href="http://en.wikipedia.org/wiki/SQL">SQL</a> that is executed in <a href="http://en.wikipedia.org/wiki/Relational_database_management_system">RDBMS</a>. In other words, the <em>Item query language</em> is a pre-processor to SQL. The <a href="http://svn.hunch.se/rasmus/hunch-aggregator/lib/hunch_aggregator/HunchItemSQL.php">HunchItemSQL source</a> goes into more detail.

<h2>Source and license</h2>
I rarely see any point in keeping software closed-source. The Hunch Aggregator is no exception as it's licensed under <a href="http://www.opensource.org/licenses/mit-license.php">MIT</a> and freely available from my <a href="http://svn.hunch.se/rasmus/hunch-aggregator/" title="Grab a copy by doing: svn co http://svn.hunch.se/rasmus/hunch-aggregator/">Subversion repository</a>.
