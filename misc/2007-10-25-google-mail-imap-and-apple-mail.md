---
layout: post
categories: [google, work, functional, sought-after, connectivity, mail, imap, gmail]
tumblr_id: 1133087113
disqus_comments: true
date: 2007-10-25 09:32:26 UTC
title: Google Mail, IMAP and Apple Mail
---

<a class="right" href='/attachments/2007/10/picture-15.png' title='Gmail IMAP'><img src='/attachments/2007/10/picture-15.thumbnail.png' alt='Gmail IMAP' /></a>Yesterday Google premiered IMAP connectivity for their mail platform Google Mail. It turned out pretty good but far from perfect.

<h2>Pros</h2>
<ul>
<li>Synchronizing protocol gives me the same state on all my devices. (workstation, cellphone, web interface, laptop, etc)</li>
<li>Centralized means backup means reliable and time-saving. (and I feel a bit safer. Once in a while computers crash and burn)</li>
<li>Labels are treated as folders, the IMAP way. Hierarchy is achieved through <tt>/</tt> (slash) separator.</li>
<li>Starring or un-starring a message is as simple as setting or unsetting the "important" flag. Very clever.</li>
</ul>

<h2>Cons</h2>
<ul>
<li>Very slow connection. This is a real pain in the ass. My private IMAP account and server interfaces in speeds of about 1-50 MB/s while the Gmail IMAP-connections has a <em>burst</em> rate of about 150 KB/s</li>
<li>Seems like Google caches folder/label indexes and only refreshes this cache when a new IMAP connection is made. IMAP clients does not disconnect very often which has a side-effect – labels created or modified in Gmail does not update in the client. The trick is to reconnect (restart Apple Mail) to do a refresh.</li>
<li>The IMAP interface is under <em>testing</em> and Gmail is still in <em>beta</em> mode, so there is no insurance whatsoever for Google not to pull the plug on IMAP. I may have to go back to POPing into my own IMAP again, which really is bit of a hack.</li>
</ul>

<h2>Further reading</h2>
<a href="http://mail.google.com/support/bin/answer.py?answer=77695">Google Mail Help Center: How do I enable IMAP?</a>
<a href="http://blog.wired.com/monkeybites/2007/10/google-adds-ima.html">Wired: Google Adds IMAP Support To GMail</a>
