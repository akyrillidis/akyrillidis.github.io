---
layout: post
categories: [programming, kod, ux]
tumblr_id: 2051094800
disqus_comments: true
date: 2010-11-30 20:11:49 UTC
title: Natural document grouping with Levenstein distance
---

When you edit many files where there are natural pairs (for instance, interface + implementation pairs when dealing with C source code) I tend to get lost in the maze of open documents and often end up doing a project-wide search or similar to find my way between the messy graph.

So I got this idea that you could group documents (or rather *sort documents*) with respect to their [Levenstein distance][]. I implemented this into an application I'm working on and it turns out to be a really neat feature. Here's a quick demo screencast:

<iframe title="YouTube video player" class="youtube-player" type="text/html" width="640" height="450" src="http://www.youtube.com/embed/jHUp3sdKYJw?rel=0" frameborder="0"></iframe>

[Levenstein distance]: http://en.wikipedia.org/wiki/Levenshtein_distance