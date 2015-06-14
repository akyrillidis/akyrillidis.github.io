---
layout: post
categories: [markdown, gitblog, software]
tumblr_id: 1102104716
disqus_comments: true
date: 2009-10-05 07:24:16 UTC
title: Gitblog says it in Markdown
---

Yesterday [Markdown](http://daringfireball.net/projects/markdown/) support was introduced in a new version of [Gitblog](http://gitblog.se/). [Markdown](http://daringfireball.net/projects/markdown/) is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format.

Simply give your post a file extension of `.md`, `.mdown` or `.markdown` and you're done.

For example, have a look at [this post from yesterday](http://rsms.me/2009/10/05/10k-comet-connections.html) and compare it to it's Markdown source: [content/posts/2009/10-10k-comet-connections.md](http://hunch.se/stuff/hunch-digest-blog-archive/posts/2009/10-10k-comet-connections.md).

The *[Mardown Extra](http://michelf.com/projects/php-markdown/extra/)* flavour is used, adding structures like tables and header id tags. There are also a few Gitblog specific things, most notably the support for *code-blocks* (syntax highlight). Language can be explicitly specified using a *shebang*:

    #!language
    actual code...

To get this feature, simply perform a `git pull` in your gitblog directory:

    cd path/to/my/blog/gitblog
    git pull
