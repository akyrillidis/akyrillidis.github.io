---
layout: post
categories: [spotify, mac, ux, software]
tumblr_id: 1102105108
disqus_comments: true
date: 2009-10-24 12:10:44 UTC
title: Improving the Spotify installation experience
---

At the time of writing this, we distribute [Spotify for Mac OS X](http://www.spotify.com/download/mac/) as a regular DMG (disk image). The user experience is not really what I would call smooth:

- Download the DMG file.
- Open the DMG (implicitly mounting the disk image. Safari does this for you, BTW).
- Move Spotify to the Applications folder.

Now, for a unexperienced user double clicking the app icon inside the DMG feels like a natural action. It's there, I'll just open it then. Later, she restarts her computer, the DMG gets unmounted and *"Hey, where's Spotify?"*.

Our solution is to use an *[internet-enabled](http://developer.apple.com/mac/library/documentation/DeveloperTools/Conceptual/SoftwareDistribution/Containers/Containers.html#//apple_ref/doc/uid/10000145i-CH4-SW4) disk image* which automatically unpacks Spotify upon download. We then [use some magic](http://github.com/rsms/lets-move-cocoa) in the app to check if it was launched from another place than the Applications folder.

<!--more-->

## The new Spotify installation experience

<img src="http://farm3.static.flickr.com/2472/4038969017_62e3d63669_o.png" width="250" alt="Screenshot of the Downloads window in Safari" align="right">

1. Initiate the Spotify download.
2. When download completes, Safari will unpack the disk image, 
   throw away the dmg file, and show a Spotify icon in its 
   download window -- as well as selecting it in the Finder 
   in the background.
3. When you double-click the Spotify icon, it gives you the 
   option to move Spotify to the Applications folder.
   This is of course optional.

The user double-clicks the icon -- Spotify launches and detects it's running from the Downloads folder, asking the user if Spotify should move itself into the Applications folder.

<img src="http://farm4.static.flickr.com/3505/4038968837_61f1fde485_o.png" width="554" height="245" alt="Screenshot of the Move to Applications dialog" class="center">

Selecting "Move to Application folder" causes Spotify to automatically move itself into `/Applications` (or `~/Applications` if it exists) while still running.

The "move" logic is based on [free code](http://github.com/potionfactory/LetsMove/) by [Andy Kim at Potion Factory](http://www.potionfactory.com/node/251).

But what happens when the DMG is not downloaded and automatically unpacked? 

> Ie. manually mounting the disk image.<br>
> Example: when using a browser that does not handle internet-enabled DMGs.

Well, we need to handle that case too, of course. [We created a version of Lets Move](http://github.com/rsms/lets-move-cocoa) which supports moving applications launched from a disk image.

Manually mounting the Spotify DMG will look like this:

<img src="http://farm4.static.flickr.com/3064/4038968917_606f616863_o.png" width="580" height="402" alt="Screenshot of the new Spotify disk image while mounted" class="center">

Double-clicking the app will show the same "Move to Applications folder?" dialog.


## Background

Recently [Alexander Limi](http://limi.net/) (interaction designer at [Mozilla](http://www.mozilla.com/)) wrote about ["Improving the Mac installer for Firefox"](http://limi.net/articles/improving-the-mac-installer-for-firefox/) where he outlines the problems. [John Gruber quickly responded](http://daringfireball.net/2009/09/how_should_mac_apps_be_distributed) by highlighting the problems with an installer, which was Alexanders initial idea of a solution. Alexander and Mozilla [revisited their solution](http://limi.net/articles/firefox-mac-installation-experience-revisited), aiming to use [LetsMove](http://github.com/potionfactory/LetsMove/) by [Andy Kim](http://www.potionfactory.com/node/251).

We have published our modified version of LetsMove here: [http://github.com/rsms/lets-move-cocoa](http://github.com/rsms/lets-move-cocoa). It includes the ability to move applications launched from read-only disk images as well as Spanish and French language translations.

For the record, this is how the previous Spotify disk image looked like:

<img src="http://farm3.static.flickr.com/2564/4038968767_706240b9ae_o.png" width="580" height="402" alt="Screenshot of the previous Spotify disk image" class="center">
