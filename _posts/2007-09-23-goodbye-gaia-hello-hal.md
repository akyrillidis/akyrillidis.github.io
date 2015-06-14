---
layout: post
categories: [hal, gaia, alles, debian, mail]
tumblr_id: 1133087046
disqus_comments: true
date: 2007-09-23 22:25:20 UTC
title: Goodbye Gaia, hello HAL
---

<img src="/attachments/2007/09/apache2-scary-errors.png" style="margin: 0pt 0pt 10px 10px; float: right" />Today our old server, <em>Gaia</em>, begun to crash in havoc. HTTP/S is out and the file system is trash beyond repair. It's been on it's way down for quite some time now and we have luckily invested in a replacement machine, which we have given the extremely cool name <em>HAL</em>.

Spent most of the day getting the most critical web sites up again on HAL, since Apache 2 on <em>Gaia</em> simply hangs, in a very peculiar way. (See the little screenshot to the right)

Mighty <em>HAL</em> is a Dell PowerEdge situated in Stockholm, featuring <strong>much</strong> hotter stuff than <em>Gaia</em> do. We run <a href="http://debian.org/">Debian</a>, of course and for HTTP we place our bets on <a href="http://www.lighttpd.net/">Lighttpd</a>.

Next big step will be to seamlessly (yeah, right...) move the somewhat complex <a href="http://trac.hunch.se/alles">mail server setup</a> from <em>Gaia</em> to <em>HAL</em> without peoples mail disappearing into the void of cyberspace. That'll be a really hard nut to crack.

Me, <a href="http://arrelid.com/">Mattias</a> and <a href="http://bonk.se/">Miken</a> will take on this glorious task!
