---
layout: post
categories: [url, spotify, link, uri, links]
tumblr_id: 1133086804
disqus_comments: true
date: 2007-07-18 08:02:39 UTC
title: An Introduction to Spotify URI:s
---

Version 0.1.3 of <a href="http://spotify.com/">Spotify</a> introduces <a href="http://en.wikipedia.org/wiki/Uniform_Resource_Identifier">Uniform Resource Identifiers</a> for sharing and locating artists, albums, searches, playlists and songs within the Spotify library.

For example, this is <em><a href="spotify:artist:37uLId6Z5ZXCx19vuruvv5">Hot Chips'</a></em> album <em>The Warning</em>:

<p class="big"><a href="spotify:album:4AZpJ7WG1RFcimSggc05ZC">spotify:album:4AZpJ7WG1RFcimSggc05ZC</a></p>

You create these location strings by drag-and-drop or simply by accessing the context menu of certain items, like albums, tracks or playlists.

Spotify also introduces a <a href="http://en.wikipedia.org/wiki/Uniform_Resource_Locator">URL</a> in order to support clickable links dragged into for example MSN messenger, Adium Instant Messenger or an E-mail. This is how <em><a href="spotify:album:4AZpJ7WG1RFcimSggc05ZC">The Warning</a></em> looks like in URL form:

<p class="medium"><a href="http://open.spotify.com/album/4AZpJ7WG1RFcimSggc05ZC">http://open.spotify.com/album/4AZpJ7WG1RFcimSggc05ZC</a></p>

Referencing to a search is just as easy:

<p class="big"><a href="spotify:search:The%20Warning">spotify:search:The%20Warning</a></p>

The search URI has a long line of options. For example year, genre, artist and album. Options, or keywords, like these are written just like you would write them in the search box within Spotify, but with some extra details for reasons of technical restriction:

<ul>
<li><a href="spotify:search:genre:jazz">spotify:search:genre:jazz</a> - Everything in the Jazz genre.</li>
<li><a href="spotify:search:genre:jazz+dizzy">spotify:search:genre:jazz+dizzy</a> - Search for <em>dizzy</em> within Jazz</li>
<li><a href="spotify:search:genre:hip-hop+year:1980-1989">spotify:search:genre:hip-hop+year:1980-1989</a> - Hip-hop from the eighties rock</li>
<li><a href="spotify:search:artist:h%C3%A4xor">spotify:search:artist:h%C3%A4xor</a> - Unicode characters should be <a href="http://en.wikipedia.org/wiki/Percent-encoding">percent-encoded</a></li>
</ul>

<h2>Applications built with Spotify URI support</h2>
<ul>
<li><a href="http://adiumx.com/">Adium 1.3</a></li>
<li><a href="http://hunch.se/stuff/Colloquy-2.1-r3777-spotify.zip">Colloquy 2.1</a></li>
</ul>
These applications has been patched and will hopefully include Spotify URI support in future official releases. (Update: Adium 1.3 is now released with Spotify URI support)
