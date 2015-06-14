---
layout: post
categories: [osx, application, open source, scrup, software]
tumblr_id: 1102105253
disqus_comments: true
date: 2009-11-21 11:39:49 UTC
title: Take a screenshot, paste the URL
---

[<img src="http://farm3.static.flickr.com/2567/4121191747_3002198bb5_o.png" width="251" height="192" alt="Scrup icon" align="right">](http://github.com/rsms/scrup)

I'm a big fan of integrated non-intrusive, productivity-enhanching applications. One category which is especially useful for me is the automatic publishing of screenshots, making conversations about looks and state so much easier.

> **Mr Bulgur:** The label of the "More" button looks totally skewed.<br>
> **Jean-Claude** Which button?! You mean the home one? Looks good for me on Windows.<br>
> **Mr Bulgur** See, it looks like the v-centering algo is broken on OS X: [http://hunch.se/s/8y/9sd0h2fcow8gs.png](http://hunch.se/s/8y/9sd0h2fcow8gs.png)<br>
> **Jean-Claude** Ah! Yes, I'll fix it in a blink of an eye.

I once purchased a license for [Grab Up](http://images.google.com/images?q=grabup) but the team bailed on us when the software broke. Moved on to [TinyGrab](http://tinygrab.com/) but it's too slow and often not working.

Since this functionality is rather trivial I looked around if someone had written an open source version, which I could simply adjust to my needs. None found. So I wrote one myself -- [Scrup](http://github.com/rsms/scrup).

[Scrup](http://github.com/rsms/scrup) is a simple little OS X application, or system plug-in, which sits in your menu bar:

[<img src="http://farm3.static.flickr.com/2522/4122092624_b2a9450bfe_o.png" width="220" alt="Scrup in the menu bar" align="right" />](http://farm3.static.flickr.com/2522/4122092624_b2a9450bfe_o.png)

When you take a screenshot, Scrup sends it to a web server of your choice. The web server then do something with the image (saves it, doh!) and returns a URL to the new image. That URL is then placed in your pasteboard, ready to be pasted somewhere. Scrup also keeps a list of the most recent scrups in it's menu, for easy access at a later date.

<!--more-->

## Download & install

[Visit Scrup on GitHub](http://github.com/rsms/scrup#readme) and read the *Download & install* section.

## Demo video

<object width="600" height="365"><param name="movie" value="http://www.youtube.com/v/hSSr3fUScAM&hl=en_US&fs=1&rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/hSSr3fUScAM&hl=en_US&fs=1&rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="600" height="365"></embed></object>
