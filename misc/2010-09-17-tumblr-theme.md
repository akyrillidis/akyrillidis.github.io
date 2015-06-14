---
layout: post
categories: [tumblr, theme]
tumblr_id: 1137689240
disqus_comments: true
date: 2010-09-17 14:48:00 UTC
title: Tumblr theme
---

By popular demand I am releasing the Tumblr theme I've created for this site. You can grab the source at [github.com/rsms/tumblr-theme-hunch](http://github.com/rsms/tumblr-theme-hunch). Please respect the MIT license (and remember to make love, not war).

**Disclaimer:** *You need to modify the theme before using it, since I have my Google Analytics and 404 redirect magic embedded in the code*.

Grab the source:

    git clone git://github.com/rsms/tumblr-theme-hunch.git
    open -t tumblr-theme-hunch/index.html

Make your modifications to the theme code (like replacing the Google Analytics code and Disqus comments), then copy all text and paste it into "Theme" on [your Tumblr customization web site](http://www.tumblr.com/customize).

<!-- more -->

## Disqus comments

I use [Disqus](http://disqus.com/) for comments. If you like to make use of Disqus you need to change a few bits. Disabling Disqus is also an option.

Locate the code between:

    <!-- start disqus -->
    about 50 lines of code here...
    <!-- end disqus -->

If you want to disable Disqus comments, simply remove the code. But if you want to use Disqus, make a note of your [Disqus channel name](http://disqus.com/comments/settings/) (mine is "hunch") and modify the following line to match your channel name:

    var disqus_shortname = 'hunch';

## Disabling syntax highlighting

Another thing this theme makes use of is [Google Prettify](http://code.google.com/p/google-code-prettify/), enabling syntax highlighting of computer code. If you do not wish to have all preformatted text highlighted, locate the following line:

    // Comment out or remove the following to disable Prettify

And remove the statement which follows that line (a call to `loadScriptAsync`).

## Google Analytics

The theme code comes pre-configured for my Google Analytics account and unless you steal my domain name it's useless to you (it will even make your site slower), so there are basically two options here: configure your own Analytics account or disable it.

Locate the `<script>` tag which include the following line:

    var _gaq = _gaq || [];

Remove the whole `<script>` block or replace it with your own Analytics "tracking code".

## Redirection from old URLs

As I've migrated many posts from my previous blog I have a need to support and redirect old URLs. This is accomplished using code outside of Tumblr, which is lazily loaded. *You want to remove this code* (or possibly provide the URL to a redirect script of your own).

Locate the following line:

    // Comment-out or remove the following to disable redirection

And remove the statement which follows that line (a call to `loadScriptAsync`).