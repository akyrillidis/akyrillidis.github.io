---
layout: post
tumblr_id: 1133086037
disqus_comments: true
date: 2007-04-22 14:15:13 UTC
title: Changing upload path in Wordpress
---

When I first set up Wordpress, I went with the default path for uploading and storing files (images, etc). Now, that isn't a very nice path, so later I decided to move it from <tt>wp-content/uploads/</tt> to simply <tt>resources/</tt>. First thing up was of course to move the actual files and keep old references alive:
<code>$ mv wp-content/uploads resources;ln -s ../resources wp-content/uploads</code>
(I did this as a one-liner to avoid any 404's)
Then modified the Wordpress config to use <tt>resources/</tt> for future actions.

Now the tricky part was to change all references in the database to point to the new directory, as I don't want to keep the symlink. This is how I did it:
<code>mysql> UPDATE wp_postmeta SET meta_value = replace(meta_value,"wp-content/uploads","resources") WHERE meta_value LIKE '%wp-content/uploads%';
mysql> UPDATE wp_posts SET post_content = replace(post_content,"wp-content/uploads","resources") WHERE post_content LIKE '%wp-content/uploads%';</code>
