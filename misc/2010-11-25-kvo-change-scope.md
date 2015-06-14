---
layout: post
categories: [programming, cocoa, kvo]
tumblr_id: 1675311839
disqus_comments: true
date: 2010-11-25 01:48:00 UTC
title: A more convenient approach to manual KVO notifications
---

[Key-Value Observing (KVO)](http://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html) in Cocoa programming is for the most part a dance on roses -- less code, less confusion, higher portability and ultimately converts your code into othogonal "modules" of awesomeness.

However, as soon as you use [manual observer notification](developer.apple.com/library/mac/documentation/Cocoa/Conceptual/KeyValueObserving/Concepts/AutoVsManual.html#//apple_ref/doc/uid/20001844-BAJEAIEE) things get a little messy -- you need to bracket every change in a pair of `willChangeValueForKey:` and `didChangeValueForKey:`.

*KVOChangeScope* provides a convenient way to mark manually managed properties as edited and consequently notify observers:

    - (void)doingSomething {
       kvo_scoped_change(foo);
       // code which manipulate foo, which might return at any moment
    }

This works by placing a C++ KVOChangeScope object on the stack, which will take
care of sending |willChangeValueForKey| when created and automatically send
|didChangeValueForKey| as soon as the method return. Note that you need to
compile your source as Objective-C++ (file suffix ".mm" instead of ".m").

There are also some convenience macros available, like |kvo_scoped_change| used
in the example above. The same example, without using any macros, is equivalent
to the following code:

    - (void)doingSomething {
       KVOChangeScope change_scope(self, @"foo");
       // code which manipulate foo, which might return at any moment
    }

Another useful macro is the limited scope |kvo_change| used for a more fine-
grained control of the "will"-to-"did" scope. Here's an illustrating example:

    - (void)doSomethingComplex {
       // modify value of foo
       kvo_change(foo) {
         foo_ = @"Foo value 1";
         if (bar)
           foo_ = @"Foo value 2";
       } // <-- didChangeValueForKey:@"foo" called here
       // maybe perform slow, blocking I/O here
       // modify value of interwebs
       kvo_change(interwebs) interwebs_ = @"awesome";
       // didChangeValueForKey:@"interwebs" called here
       // maybe do some more slow stuff, not holding "edit locks" thus
       // avoiding other threads to wait on edit completion.
    }

The whole thing is contained within a single small header which can be grabbed here:

<https://gist.github.com/714763#file_kvo_change_scope.hh>

*You're free to use this code for fun or profit with the only restriction of retaining the embedded copyright notice.*
