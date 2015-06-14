---
layout: post
categories: [osx, plugin, xcode, programming, cocoa, objective-c, software]
tumblr_id: 1121194691
disqus_comments: true
date: 2008-05-04 20:21:00 UTC
title: Extending Xcode
---

A lot of software enables the user to extend it in order to enhance productivity and customize her work environment. An excellent example of this kind of software is <a href="http://macromates.com/">TextMate</a>. But I'm not going to talk about TextMate today, but instead another very popular development tool for the Mac OS – Apple Xcode.

Xcode have had plug-in support during most of it's life time so far, but the means for creating new plugins has been (and is still in many ways) something only Apple has. Documentation is extremely sparse and most of that which is available is outdated. If you bring up the "New project..." (CMD+SHIFT+N) you will find "AppleScript Xcode Plug-in" inside the "Standard Apple Plug-ins" category. However great this might sound, it restricts you to only fiddle with AppleScript, which in my point of view is just a pain in the ass. (AppleScript, that is. One might call it <em>a necessary evil</em>)

Writing a "real" plugin (using Cocoa, AppKit aso.) should be as easy as writing a normal Application, since a <em>xcplugin</em> is just a simple <em>bundle</em> like any other OS X bundle. What <em>is</em> different though, is that you probably want to fiddle with Xcode itself. (i.e. change the color of some text based on some rules, which for instance a language extension would do) Doing so requires knowledge (i.e. headers) about how to poke around. Unfortunately Apple does not expose these interfaces. <a href="http://maxao.free.fr/">Damien Bobillot</a> maintains a (somewhat outdated) document called <em><a href="http://maxao.free.fr/xcode-plugin-interface/">Xcode's Plugin Interface</a></em> in which he provides <a href="http://maxao.free.fr/xcode-plugin-interface/Xcode%203.x%20plugin%20API%20-%20headers.zip">a package of private headers</a> one must have, in order to use the <em>DevToolCore</em> framework.
<!--more-->

<h2>A template to the rescue</h2>
I have created a Xcode 3 template for creating new Xcode plugins in Objective-C. There are currently two ways of getting a copy of the template:
<ul>
<li>Make a clone of the repository:<br/><tt>hg clone http://hg.hunch.se/xcode-templates/</tt></li>
<li>Downloading a snapshot of the repository above: <a href="http://hg.hunch.se/xcode-templates/archive/tip.tar.bz2">xcode-templates.tar.bz2</a></li>
</ul>

Install the template by copying or moving the "Xcode Plugin for Objective-C" directory into <tt>/Developer/Library/Xcode/Project Templates/Standard Apple Plug-ins/</tt> (i.e. <em>not</em> in your home directory).

After the template has been installed, just (re)start Xcode, activate "File" → "New project..." (CMD+SHIFT+N) and you will find "Xcode Plugin for Objective-C" in the "Standard Apple Plug-ins" category. Select it and create a new project with a name of your choice. Do not include the suffix <em>Plugin</em>, as this is automatically added. (Note: do <b>not</b> use spaces in the name. This is a bug.)

Hit "Build", wait a few seconds for it to create you new plugin and then copy your newly built <em>xcplugin</em> into <tt>/Developer/Library/Xcode/Plug-ins</tt> (You can simply drag the NameOfYourPlugin.xcplugin from "Products" and drop it in the Plug-ins directory)

Restart Xcode and you should see a new menu item at the rightmost position in the main menu. This is just something that comes with the template to get you started. Open NameOfYourPlugin.m (in the "Classes" group) and you should be on the right track. (I assume you're familiar with Objective-C and Cocoa)

Here is a minimal version of the principal class: (If you're like me, you probably want a clean slate)

    #!m
    #import "NameOfYourPlugin.h"
    @implementation NameOfYourPlugin
    - (void)awakeFromNib {
      // Setup plugin. If it takes time, use a separate thread.
    }
    @end

<h2>Interfacing with DevToolCore</h2>
Linking against and using the <em>DevToolCore</em> framework is not something I'm going to talk about here. I suggest you read <em><a href="http://maxao.free.fr/xcode-plugin-interface/">Xcode's Plugin Interface</a></em>.

<h2>Other alternatives</h2>
Xcode sports a somewhat obscure user scripting menu. (has the looks of a small scroll) You can add your own helpers or modify any of the scripts already included by Apple.

Cocoa-wiz-and-best-friend <a href="http://arrelid.com/">Mattias Arrelid</a> and I sat up real late this morning trying to create a <a href="http://www.selenic.com/mercurial/">Mercurial</a> commit script with a graphical interface. We tried <em>everything</em>. And I mean everything – PyObjC, AppleScript, RubyCocoa... But none enabled us to manage a simple window with text input. We ended up using <a href="http://github.com/kballard/textmate-bundles/tree/master/Tools/CommitWindowProject">CommitWindow</a> (a tool included with TextMate, which we both use in parallel to Xcode)

Here is the script, which brings up a <a href="/attachments/2008/05/xcode-hg-commit-script-screenshot.png">commit window that can display diffs</a>:

    #!/bin/sh
    path="%%%{PBXFilePath}%%%"
    dir="$(dirname "$path")"
    filename="$(basename "$path")"
    TM_SUPPORT_PATH="$(echo 'POSIX path of (path to application "TextMate")'|osascript)Contents/SharedSupport/Support"
    
    cd "$dir"
    
    r=$(TM_SUPPORT_PATH="$TM_SUPPORT_PATH" \
        "$TM_SUPPORT_PATH/bin/CommitWindow.app/Contents/MacOS/CommitWindow" \
        --diff-cmd "/usr/local/bin/hg,diff" "$filename")
    
    if (echo "$r" | grep 'commit window: cancel' >/dev/null); then
      exit 0
    else
      sh -c "hg --verbose commit $r"
      exit $?
    fi

To install it, copy the source from above, select [script icon] → "Edit User Scripts..." in Xcode. Create a new group if you want (the bottom-left "+" button) and and a new "Shell Script" by clicking the same "+" button. Paste the code. Rename it and assign a keyboard shortcut by double-clicking the appropriate fields in the command table view.

To round things up, you might be able to <a href="http://www.culater.net/wiki/moin.cgi/CocoaReverseEngineering#head-44c10b1f0da64ecad303c947b1823518f2682bae">Create a SIMBL Plugin Bundle</a> if that's more like your cup of tea.
