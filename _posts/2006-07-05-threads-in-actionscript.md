---
layout: post
tumblr_id: 1133083206
disqus_comments: true
date: 2006-07-05 09:00:00 UTC
title: Threads in ActionScript
---

Yesterday I made <a href="http://pub.flajm.se/actionscript/thread/">this thread implementation in ActionScript 2</a>. Needed it for a multiple file upload app.</p>

<strong>Example 1</strong>

<codeblock lang="as">
var t:Thread = new Thread();
t.run = function(arg) {
  trace("Wehoo! I'm from the thread");
}
t.start();
</codeblock>

<strong>Example 2</strong>

<codeblock lang="as">
for(var i:Number = 0; i&lt;5; i++)
{
  var delay:Number = Math.round(Math.random()*1000);
  var t:Thread = new Thread();
  t.run = function(name) {
   trace("Wehoo! I'm from " + name);
  }
  t.start("Thread " + i, delay);
}
</codeblock>

<strong>Example 3</strong>

<codeblock lang="as">
class MyStuff implements Runnable {
  public function run(a):Void {
    // do stuff...
  }
}
...
var myStuff:MyStuff = new MyStuff();
var t:Thread = new Thread(myStuff);
t.start();
</codeblock>
