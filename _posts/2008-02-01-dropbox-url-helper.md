---
layout: post
categories: [utility, dropbox, productive, helper, osx]
tumblr_id: 1111976106
disqus_comments: true
date: 2008-02-01 10:22:31 UTC
title: Dropbox URL helper
---

<embed type="video/quicktime" scale="aspect" src="/attachments/2008/02/finder001.mov" width="300" height="206" pluginspage="http://www.apple.com/quicktime/download/" autoplay="false" controller="true" style="float:right;clear:right;margin-left:2em;margin-bottom:2em"></embed>I communicate a lot using files. Images, videos, screencaps, pdfs, etc - and there's <em>always</em> problems sharing files over techniques like instant messaging, e-mail, etc.

My solution is very simple: I make them temporarily available over HTTP. Everyone can receive the file, where there they are behing file million firewalls or not.

So I run a simple web server, have a folder called <tt>tmp</tt> and put a softlink to it on my desktop. Then when I need to send a file, I simply drop it in the folder (move or copy) and then send the link to the receiver(s). The only tricky and time-consuming part here is that you have to construct the URL yourself. And you cant really put sensitive material with names like <em>Picture 1.png, Picture 2.png, ...</em>.

Well, <a href="http://svn.hunch.se/rasmus/folder-action-url-in-clipboard/">this little AppleScript</a>, which you attach to the <tt>tmp</tt>-folder as a Folder Action, creates a nice link for you and put it in the clipboard. It also adds a crc32 checksum to the beginning of the filename, just to add some security-by-obscurity as well as avoiding "file already exists..." dialogs.
