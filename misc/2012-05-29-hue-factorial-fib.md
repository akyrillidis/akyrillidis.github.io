---
title: "Factorial and Fib in Hue"
layout: post
tags: programming
category: hue
description: "The 'Hello World' of functional programming, in Hue"
comments: yes
---

As I slowly make progress on my little functional programming language [Hue](https://github.com/rsms/hue), I'd just wanted to share the "Hello World" of functional programming — `factorial` and `fib`.

The [factorial function](http://en.wikipedia.org/wiki/Recursion_%28computer_science%29#Factorial) calculates the factorial of a natural number:

    factorial = func (n Int) if n == 0 1 else n * factorial n - 1
    factorial 10  # -> 3628800

The [fib function](http://en.wikipedia.org/wiki/Recursion_%28computer_science%29#Fibonacci) computes Fibonacci numbers:

    fib = func (n Int)
      if n < 2
        n
      else
        (fib n-1) + fib n-2

    fib 32  # -> 2178309

Hue compiles the above functions into very efficient [tail calls](http://en.wikipedia.org/wiki/Tail_call). The `factorial` function is even unrolled, eliminating all but one call.

## Function result type inference and multiple implementations

Since Hue [94441d9](https://github.com/rsms/hue/tree/94441d9b31157d712c078faa63c741d78ca3fba2/) functions have their result types inferred, as well as the ability to define multiple implementations.

To understand why the ability to provide multiple function implementations is interesting, let's define a slightly more versatile `factorial` function:

    factorial = func (n Int) if n == 0 1 else n * factorial n - 1
    factorial = func (n Float) if n == 0.0 1.0 else n * factorial n - 1.0

Here, we provide implementations for factorial to operate on both integers and floating point numbers. We can now invoke `factorial` with both Ints and Floats:

    factorial 10    # -> 3628800
    factorial 10.0  # -> 3628800.0

Since Hue is strongly typed, simply providing a single implementation would only allow `factorial` to be available for either integers or floating point numbers (unless we gave the function different names, but that becomes awkward.)

Result type inference is another important hygiene factor.

This basically means that the parser will parse a function's body before it finalizes the function's result type. Since all functions in Hue return something, we know that whatever is returned is the result value of the function. If there's any ambiguity the compiler will complain with an error, avoiding unexpected behavior at runtime.

Consider the following trivial functions:

    foo = func (a, b Int) Int a * b * b
    bar = func (a, b Float) Float a * a * b

Defining the result type of these functions is _redundant_ and _unnecessary_, since we can without a doubt say that "the result type of function F is the type of the value returned". As Hue infers the type not only for functions, but for any other non-primary expression (like conditionals), when we after a decent-first reach the surface of an expression (i.e. the last expression of a function body), we will know the type of that expression, thus we can bubble the type upwards.

    foo = func (a, b Int) a * b * b
    bar = func (a, b Float) a * a * b

As seen here above, we were able to write the same two functions in a more efficient manner.

If a function references itself (i.e. is recursive), Hue will assume the type of the function based on other known types and later update those functions calls when the function's result type has been finalized.

Deferring the resolution of a recursive function type is possible since the only case where we are unable to do so, is the case where a recursive function is an infinite loop (which is currently not applicable to anything in Hue.) For instance:

    foo = func (n Int) foo n

...would yield an error when compiled since it defines a function that is guaranteed to crash/block in all eternity. Any recursive function needs some kind of conditional, thus making our stupid `foo` function a little more useful:

    foo = func (n Int) if n > 5 (foo n * n) else n

This will compile, although the program will still crash when `foo` is given a value higher than 5. That's the balance between being helpful and telling you what to do. In this example, the result type of the conditional (the "if..else") is inferred from the one concrete branch ("n"), which in turn completes the `foo` function's result type.

## Tail recursive calls FTW

Let's get all nerdy and look at the IR produced by Hue for the `factorial` function example from the beginning of this article:

    define i64 @main() nounwind readnone {
      br label %tailrecurse.i

    tailrecurse.i:                                    ; preds = %else.i, %0
      %accumulator.tr.i = phi i64 [ 1, %0 ], [ %multmp.i, %else.i ]
      %n.tr.i = phi i64 [ 10, %0 ], [ %subtmp.i, %else.i ]
      %eqtmp.i = icmp eq i64 %n.tr.i, 0
      br i1 %eqtmp.i, label %"hello:factorial$x$x.exit", label %else.i

    else.i:                                           ; preds = %tailrecurse.i
      %subtmp.i = add i64 %n.tr.i, -1
      %multmp.i = mul i64 %accumulator.tr.i, %n.tr.i
      br label %tailrecurse.i

    "hello:factorial$x$x.exit":                       ; preds = %tailrecurse.i
      ret i64 0
    }

Note how there's actually _no function calls_ involved here. The compiler (mostly thanks to LLVM) were able to optimize the recursive call by unrolling the calls. The above code is very efficient.

Let's have look at what Hue does with the `fib` example function (from earlier in this article):

    define i64 @main() nounwind readnone {
      %fib_res = tail call i64 @"hello:fib$x$x"(i64 32)
      ret i64 0
    }

    define private i64 @"hello:fib$x$x"(i64 %n) nounwind readnone {
      %lttmp = icmp slt i64 %n, 2
      br i1 %lttmp, label %endif, label %else

    else:                                             ; preds = %0
      %subtmp = add i64 %n, -1
      %fib_res = tail call i64 @"hello:fib$x$x"(i64 %subtmp)
      %subtmp1 = add i64 %n, -2
      %fib_res2 = tail call i64 @"hello:fib$x$x"(i64 %subtmp1)
      %addtmp = add i64 %fib_res2, %fib_res
      ret i64 %addtmp

    endif:                                            ; preds = %0
      ret i64 %n
    }

We didn't get the royal unroll treatment, but the calls became tail recursive and the true-branch of the conditional expression was short-circuited into the end of the conditional ("endif"), saving us a "PHI" virtual instruction. This code is also very efficient and has linear time complexity.

[Hue](https://github.com/rsms/hue) continues to be my computer programming muse (and TV substitute) as a low intensity hobby project. The intention is to experiment with performant functional programming and to learn stuff, of course. Hue's source code is free and open at [https://github.com/rsms/hue](https://github.com/rsms/hue).

See previous introduction to Hue: ["Hue — a functional programming language for fun & play"](http://rsms.me/2012/05/14/hue.html).