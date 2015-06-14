---
layout: post
categories: [gitblog, ui, ux, software]
tumblr_id: 1102105142
disqus_comments: true
date: 2009-10-12 00:11:46 UTC
title: Manage posts in Gitblog web admin UI
---

The latest version of Gitblog got a new posts manager, which has been inspired by the inbox of Google Mail.

<a href="http://farm3.static.flickr.com/2445/4002358763_550724f3de_o.png"><img src="http://farm3.static.flickr.com/2657/4002358777_4e642cfce1_o_d.png" width="600"></a>

As a post can be in several states (and versions) at the same time, I had to use multiple dimensions of visual cues -- row colors, labels ("Draft", the "scheduled" clock) and hierarchical rows in the case when there is a work version alongside a cached version.

 - <span style="background-color:#fffb91">Yellow</span> marks a modified, uncommitted (but tracked) working copy with an older cached version live.
 - <span style="background-color:#cfd">Green</span> marks a scheduled, tracked post (which will appear live once it's future publish date is reached).
 - <span style="background-color:#fcc">Red</span> marks a post which has been removed in the working stage, but is still tracked (previous version is still live).
 - <span style="background-color:#ddd">Grey</span> marks a uncommitted (untracked) post, a post which does not have a record in the repository.

To get this feature, simply perform a git pull in your gitblog directory:

    cd path/to/my/blog/gitblog
    git pull
