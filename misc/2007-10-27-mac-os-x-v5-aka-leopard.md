---
layout: post
categories: [opinion, review, leopard, osx]
tumblr_id: 1133087173
disqus_comments: true
date: 2007-10-27 17:33:15 UTC
title: Mac OS X v5, aka Leopard
---

<img src='/attachments/2007/10/macosx_index_leopardishere20071026.png' alt='macosx_index_leopardishere20071026.png' class="right" />The new version of Mac OS X has been released and here's my somewhat incomplete review.

<ul>
<li>Spell-check can now operate multilingual, using several languages at once. Very appreciated as I write in both English and Swedish. Sometimes in the same dokument. Context-menu › Spelling and Grammar › Show Spelling and Grammar › now choose "multilingual" in the bottom drop down.</li>
<li>Spotlight has gone from totally worthless to fully usable, or even a great, feature. It's fast (new mdimporter) and much "smarter" than before. Apple has even added <a href="http://www.usingmac.com/2007/11/22/leopard-optimizing-spotlight-search">keywords</a>. I still use <a href="http://blacktree.com/?quicksilver">Quicksilver</a> for launching applications but now using Spotlight to find e-mails, open files, looking up words and doing simple math.</li>
<li>Apple listened to the community and provided an alternative dock-style to the ugly "Shelf-dock". To make it look better while in bottom-of-the-screen mode, write a setting to the Dock defaults: <tt>defaults write com.apple.dock no-glass -boolean YES;killall Dock</tt></li>
<li><img src='/attachments/2007/10/title_dictionary_20071016.png' alt='title_dictionary_20071016.png' class="right"/>The Dictionary is a great tool and version 2 adds wikipedia, apple-tech and more to the list of queryable sources. It also integrates nicely with Spotlight; typing in spotlight queries the dictionary and displays the first hit as a spotlight-hit. Very neat. Dictionary also accepts the dict-protocol. Test it here: <a href="dict://hunch">dict://hunch</a>.</li>
<li>Screen Sharing in iChat works <em>better</em> than Apple Remote Desktop. And you get voice at the same time. Very neat. The only thing missing is a clear way to abort a session, if it's your computer that's being shared/controlled.</li>
<li>Spaces is neat but I need more time to evaluate it.</li>
<li>The default desktop picture is horrible. WTF Apple?! That's Microsofts trademark, to fuck things up with ugly desktops. I instantly changed back to my greyscale version of "Aqua.jpg"</li>
<li>Dashboard sucks big-time, as usual. Just disable the whole thing and move on with a smile!</li>
<li><img src='/attachments/2007/10/title_finder_20071016.png' alt='title_finder_20071016.png' class="right"/>I'm not religious, but .mac synchronization feels like a blessing from above. It's improved and now synchronizes <em>all</em> settings in *Library/Preferences. However, it's not perfect. Some settings is best not synchronized. I would like to have greater control of what specific applications, or <em>default domains</em> to sync. Also missing synchronization of Library/Application Support as well as syncing arbitrary files.</li>
<li>The new Terminal.app may also induce religious feelings as it now has tabs (finally!), window styles, inspection panel and Cocoa-ish preferences. highly appreciated as it's a tool in constant use every day.</li>
<li>Time Machine should have been in OS X since version 10.0. Not a day too late.</li>
<li>Partial screenshooting now features coordinates and size of the part being captured. Very useful in my line of work.</li>
</ul>

<h2>Time Machine</h2>
<img src='/attachments/2007/10/timemachine_hdicon20071016.png' alt='timemachine_hdicon20071016.png' class="right" style="margin-left:20px" />In my workstation I have several disks. Prior to Leopard I had the system installed on a 2-disk mirrored RAID-set. (If one disk dies, the other one has a copy of the data) Leopard features <a href="http://www.apple.com/macosx/features/timemachine.html">The Time Machine</a>, which basically is an automated backup system. When a file changes, is added or deleted, the modifications are recorded to another disk. Time Machine also keeps a backlog of changes as far as the disk space on the backup drive permits.

Time Machine makes the following statement as how to prioritize backup:
<ol>
<li>Hourly backups for the past 24 hours</li>
<li>Daily backups for the past month</li>
<li>Weekly backups until your backup disk is full</li>
</ol>

I dedicated one of my previously mirrored disks to Time Machine and thus did not want to see it on my desktop. If you're a true hackintosh user you have the developer tools installed which includes a nice utility for setting magic flags on files.
To make the drive <em>TimeMachine</em> hidden from the Finder, do this:
<code>/Developer/Tools/SetFile -a V /Volumes/TimeMachine</code>It will not show up anywhere in normal find windows, but do show up in Time Machines "select drive" window. Very neat. Works like a charm.



