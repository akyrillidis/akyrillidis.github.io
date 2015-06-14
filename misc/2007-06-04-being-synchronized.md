---
layout: post
categories: [life, synchronisation, productiveness, sync]
tumblr_id: 1133086411
disqus_comments: true
date: 2007-06-04 15:10:32 UTC
title: Being synchronized
---

I have three computers which I need to have in sync; my Mac Pro at work, my stationary iMac at home and the portable MacBook. Except from those excellent tools of the 21:st century, I also have my cellphone which address book needs to be synchronized.

At work, we use Google for mail & calendar. My own business (or: private setup) uses IMAP and has no centralized calendaring system.

Being the OS X lover I am, using the Google Mail html interface is a royal pain in the ass. Alot of files being attached, often larger than permitted so I have to send through my private mail. Text area dows not work like rest of OS X, gmail fails to read &lt;url in brackets&gt;'s, and so on.

The solution was pretty simple: Use gmail POP-access with the (new?) option "Archive" and have Apple Mail retrieve and store everything on central server over IMAP.

<img src="/attachments/2007/06/mail-sync-setup.png" alt="" style="margin:2em 0;" />

Gmail is one-way; we can pull stuff out if it, but never put them back (into it's current state). The central server is based on IMAP which is a synchronizing protocol. Good for us. We use it as the central storage, with clients having their own local cache.

<h3>Pros:</h3>
<ul>
<li>Easy to use</li>
<li>Scalable</li>
<li>Extensible</li>
<li>Integrates nicely (clients)</li>
<li>Easy backup</li>
<li>Portable</li>
</ul>

<h3>Cons:</h3>
<ul>
<li>Gmail inbox not synchronizing</li>
<li>Single-point of failure (server dies everything dies)</li>
<li>Complex to set up</li>
<li>Gmail web interface will not be part of the synchronization (yet still you will be able to access all mail and see which has been moved to the central server and which has not been)</li>
<li>Needs at least one Apple Mail client to do the synchronization</li>
</ul>

This setup fits me well and deploying a new Apple Mail client on a new (or old) computer is as easy as tar-ing and scp-ing a folder from A to B. I can as well seamlessly combine my different accounts.

<h2>Next step...</h2>
...will be to do the POP import directly on the central server and setup a separate account (which will be a proxy-like "rasmus-gmail@myhost.com" account) for retrieving mail.
