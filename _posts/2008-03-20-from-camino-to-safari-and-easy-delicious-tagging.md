---
layout: post
categories: [keywurl, del.icio.us, camino, safari, functional]
tumblr_id: 1111978907
disqus_comments: true
date: 2008-03-20 15:45:00 UTC
title: From Camino to Safari and easy Del.icio.us tagging
---

I've been using Mozilla Camino for a long time, mostly due to my heavy keyword usage. I don't even have any bookmarks in the classic sense, only tags on del.icio.us (keyword <tt>t TAGS...</tt>) and frequently used sites as short keywords. (i.e. <tt>http://www.facebook.com/home.php</tt> becomes <tt>fb</tt>)

Until recently, Safari and keywords has not computed. Sure, there are stuff like Saft, but it breaks often and I really do rely on my keywords. Today I got a tip from my friend Dan about <a href="http://purefiction.net/keywurl/">Keywurl</a>, a tool which gives the Safari keywords, and do not break (what I've heard) on minor updates or patches. It uses SIMBL and is pretty easy to install.

<img src='/attachments/2008/03/keywurl.png' alt='Keywurl preferences interface' />

<ol>
 <li>Grab a fresh version of <a href="http://www.culater.net/software/SIMBL/SIMBL.php">SIMBL</a><small>[1]</small></li>
 <li>Now, head over to <a href="http://purefiction.net/keywurl/">Keywurls homepage</a> and click the big "Download and install" button</li>
 <li>Restart Safari if it's running and go into Safari Preferences. You will have a new preference pane at the rightmost side of the toolbar. That's where you manage keywords.</li>
</ol>

<h2>Tagging to Del.icio.us</h2>
I thought it might be appropriate to introduce a small tool me and <a href="http://arrelid.com/">Mattias</a> has been using for a while to tag bookmarks.

<embed type="video/quicktime" scale="aspect" src="/attachments/2008/03/tagging-w-delicious.mov" width="500" height="366" pluginspage="http://www.apple.com/quicktime/download/" autoplay="false" controller="true" style="margin-bottom:.4em"></embed>
<small><a href='/attachments/2008/03/tagging-w-delicious.mov' title='tagging-w-delicious.mov'>Download tagging-w-delicious.mov »</a></small>

<h3>Just tag something</h3>
Saving this as a keyword, let's say <b><tt>t</tt></b>, will allow you to tag the web site your visiting by simply typing <tt>t tag1 tag2 ...</tt> in the address field.
<textarea style="width:500px;font-family:monospace;" onfocus="setTimeout('this.select()',100)" onmouseup="this.select()">javascript:void(delicious=open('http://utils.hunch.se/post-to-del.icio.us/?description='+encodeURIComponent(document.title)+'&tags=@@@'+'&url='+window.location.href,'delicious','toolbar=no,width=200,height=250,top=0,left=0'),window.focus())</textarea>

<h3>Tag with description</h3>
This works like the snippet above, except from before being sent, it will put up a input box and ask you for a description.
<textarea style="width:500px;font-family:monospace;" onfocus="setTimeout('this.select()',100)" onmouseup="this.select()">javascript:void(delicious=open('http://utils.hunch.se/post-to-del.icio.us/?description='+encodeURIComponent(document.title)+'&extended='+encodeURIComponent(prompt('Description',''))+'&tags=@@@&url='+window.location.href,'delicious','toolbar=no,width=200,height=250,top=0,left=0'),window.focus());</textarea>

<h3>Searching your bookmarks</h3>
<textarea style="width:500px;font-family:monospace;" onfocus="setTimeout('this.select()',100)" onmouseup="this.select()">javascript:void(document.location.href="http://del.icio.us/USERNAME/"+"@@@".replace(/%20/g,"+"));</textarea>

You might wonder <em>"Hey, you guys probably save my password, no way."</em> So here's the source, so you can see for yourself that we do <b>not</b> log any information using the script and we promise we do not log user nor password using any other means (i.e. httpd access log, curl log, etc)
<a href="http://utils.hunch.se/post-to-del.icio.us/?view_source">http://utils.hunch.se/post-to-del.icio.us/?view_source</a>

<hr />
<em>[1] The SIMBL package that comes with Keywurl 1.3.4 is broken, so better get the real deal.</em>
