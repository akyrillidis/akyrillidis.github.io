---
layout: page
fb_comments: 3
title: Introduction to quantum computing: Complex numbers.
---

## **Introduction to quantum computing: Complex numbers.**

> Sources: "Quantum computing for computer scientists", N. Yanofsky and M. Mannucci, Cambridge Press, 2008.


This post is part of a (probably) long list of posts regarding quantum computing. My experience on quantum information theory and computing is rather limited, so these blog posts will be kept as much simplistic and clear as possible.

Currently, my knowledge of quantum information and processing starts and ends with quantum state tomography: It is a process (actually just a linear inverse problem), used by quantum scientists, in order to measure the state at which the quantum system lies. Very recently, I also started "playing" with QISKIT toolbox by IBM, which sparked further my interest on the topic (and revealed my complete ignorance of what quantum computing truly is, beyond just a computational tool).

*Disclaimer: while the material below might seem too simple, I suggest not skimming over this post - personally, I always enjoy reading something that I believe I own, as επαναληψη μητηρ πασης μαθησεως (repetition is the mother of any knowledge)*

### **The magical world of imaginary numbers**

Complex numbers appeared (maybe, among other reasons) due to the eager to find solutions to polynomial equations that do not seem to have a solution in the "real world". *E.g.*, 

$$x^2 + 1 = 0,$$

or 

$$x^4 + 2x^2 + 1 = 0 \Rightarrow (x^2 + 1)(x^2 + 1) = 0.$$

Imaginary numbers appear when we assume that there is a solution of the following form:

$$x^2 = -1 \Rightarrow x = i := \sqrt{-1},$$

where $i$ denotes the imaginary part of a number. Its name justifies its purpose: to represent numbers that do not exist in known (*i.e.*, real) numbers. Other than this weird assumption, $i$ behaves like any other number, when we add it or multiply it:

$$i^4 = (i^2) \cdot (i^2) = (-1) \cdot (-1) = 1.$$

or, when we combine it with real numbers:

$$1 + 3i$$, 

where 1 is the real part and $3i$ is the imaginary part.

The combination of real and imaginary parts constitutes the number a complex one. We denote the set of complex, one-dimensional, numbers with the symbol $\mathbb{C}$.

#### **Fundamental theorem in algebra**

While our focus is not per se on solving polynomials, it turns out that using complex numbers:
> Every unit-variable polynomial with complex coefficients has a complex solution.

*I.e.*, the set of complex numbers is algebraically complete.

#### **Adding and multiplying complex numbers**

Some examples of adding and multiplying complex numbers follow:

$$(3 - i) + (1 + 4i) = 4 - 3i,$$

and 

$$(-3 + i) \cdot (2 - 4i) = -6 + 12i + 2i -4i^2 = -2 + 14i.$$

The above reveal a different way of seeing complex numbers: one can stack a scalar complex number as a 2-dimensional real vector. *E.g.*, 

$$ c = a + bi \in \mathbb{C} \Leftrightarrow c \mapsto (a, b) \in \mathbb{R}^2.$$

Then, adding and multiplying leads to the following rules:

$$(a_1, b_1) + (a_2, b_2) = (a_1 + b_1, a_2 + b_2), $$

and 

$$(a_1, b_1) \cdot (a_2, b_2) = (a_1a_2 - b_1b_2, a_1b_2 + a_2b_1).$$

This further result to the fundamental representation of $i$:

$$ i \in \mathbb{C} \leftrightarrow i \mapsto (0, 1) \in \mathbb{R}^2.$$

#### **Properties of scalar complex numbers**

Complex numbers are 

* commutative: $c_1 + c_2 = c_2 + c_1$, and $c_1 \cdot c_2 = c_2 \cdot c_1$, for $c_1, c_2 \in \mathbb{C}$.
* associative: $(c_1 + c_2) + c_3 = c_1 + (c_2 + c_3)$, for $c_i \in \mathbb{C}$.
* distributive: $(c_1 + c_2) \cdot c_3 = c_1 \cdot c_3 + c_2 \cdot c_3$, for $c_i \in \mathbb{C}$.

#### **Dividing complex numbers**

While subtraction of complex numbers is easily inferred by addition, division needs some more work. Let $(a_1, b_1)$ and $(a_2, b_2)$ be two complex numbers and we are interested in computing their ration: $\frac{(a_1, b_1)}{(a_2, b_2)}$.

Starting from parameterizing the result with unknown variables $x, y$:

$$(x, y) = \frac{(a_1, b_1)}{(a_2, b_2)},$$

we solve w.r.t. $(x, y)$:

$$(a_1, b_1) = (x, y) \cdot (a_2, b_2)$$.

This leads to a system of two unknowns with two variables, where the solution is given by the following expressions:

$$x = \frac{a_1a_2 + b_1b_2}{a_2^2 + b_2^2}, \quad  y = \frac{a_2 b_1 - a_1 b_2}{a_2^2 + b_2^2}.$$

#### **Magnitude (or modulus or norm) of complex numbers**

The absolute value of a real number denotes its distance from the origin. 
So, 

$$ |a| := \sqrt{a^2}$$

denotes the number of units we need to traverse in order 
to get to the point 0 (either we start from a negative or a positive point). 
Similarly for complex numbers, 

$$ |a + ib| := \sqrt{a^2 + b^2},$$

*i.e.*, the distance we have to traverse to get to the point zero $(0 + 0i)$ is the "norm" of the two dimensional representation in the reals $(a, b)$.

It is easy to verify that, for $c_1, c_2 \in \mathbb{C}$:

* $|c_1| \cdot |c_2| = |c_1 \cdot c_2|,$
* $|c_1 + c_2| \leq |c_1| + |c_2|$ (not so obvious).

#### **Changing signs and complex conjugation**

The complex number $(-1, 0)$ changes both signs of a given complex number (one can verify it by using the multiplication rule above for $(a_1, b_1)\cdot(-1, 0)$).

An important change-sign operation for complex numbers is the *conjugation* operation: it just changes the sign of the imaginary part.
One can think this as reflection of the complex number w.r.t. the real axis. In math:

$$
c = a + i b \Rightarrow c^\dagger = a - ib
$$

where here we use $\cdot^\dagger$ to denote the conjugation.
We will also use $\bar{\cdot}$ to denote conjugation.

Some properties for $c_i \in \mathbb{C}$:

* $ c_1^\dagger + c_2^\dagger = (c_1 + c_2)^\dagger$.
* $ c_1^\dagger \cdot c_2^\dagger = (c_1 \cdot c_2)^\dagger$.
* $ c_1 \cdot c_1^\dagger = |c_1|^2$.

#### **Polar representation of complex numbers**

Since complex numbers can be represented in the $\mathbb{R}^2$ plane, we can also represent them via the polar coordinates. 
These are the modulus $\rho$ and the angle $\theta$ of a vector; also called magnitude and phase of a complex vector.

Given a complex number $c = a + i b$, we can compute the transformation $(a, b) \mapsto (\rho, \theta)$, where $\rho = \sqrt{a^2 + b^2}$ and $ \theta = \tan^{-1}\left(\frac{b}{a}\right)$. We can go back to cartesian coordinates by using: $a = \rho \cos(\theta)$ and $b = \rho \sin(\theta)$.
Thus, a complex number can be written as:

$ c = \rho \cdot (\cos(\theta) + i \sin(\theta))$,

or using Euler's formula:

$ c = \rho \cdot e^{i\theta}$.

