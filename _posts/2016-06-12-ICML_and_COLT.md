---
layout: post
disqus_comments: false
date: 2016-06-12 20:00:00 UTC
title: Papers in ICML 2016 & COLT 2016
photo_url: "/public/ny.jpg"
---

Two papers are accepted in ICML and COLT conferences this year (both held in New Tork).

- *A simple and provable algorithm for sparse diagonal CCA*: 
Joint work with [*Megasthenis Asteris*](), [*Olumsanmi Koyejo*]() 
and [*Russell Poldrack*]() - to be presented in ICML.

>**Abstract.** 
>Given two sets of variables, derived from a common set of samples,
sparse Canonical Correlation Analysis (CCA)
seeks linear combinations of a small number of variables in each set,
such that the induced canonical variables are maximally correlated.
Sparse CCA is NP-hard.

>We propose a novel combinatorial algorithm for sparse diagonal CCA, 
i.e., sparse CCA under the additional assumption that variables within each set are standardized and uncorrelated.
Our algorithm operates on a low rank approximation of the input data and its computational complexity scales linearly with the number of input variables.
It is simple to implement, and parallelizable.
In contrast to most existing approaches, 
our algorithm administers precise control on the sparsity of the extracted canonical vectors,
and comes with theoretical data-dependent global approximation guarantees, that hinge on the spectrum of the input data.
Finally, it can be straightforwardly adapted to other constrained variants of CCA enforcing structure beyond sparsity.

>We empirically evaluate the proposed scheme
and apply it on a real neuroimaging dataset to investigate associations between brain activity and behavior measurements.

- *Dropping convexity for faster semidefinite optimization*:
Joint work with [*Srinadh Bhojanapalli*]() and [*Sujay Sanghavi*]() - to be presented in COLT.

>**Abstract.** 
>We study the minimization of a convex function $f(X)$ over the set of $n\times n$ positive semi-definite matrices, 
but when the problem is recast as $\min_U g(U) :=  f(UU^\top)$, with $U \in \mathbb{R}^{n \times r}$ and $r\leq n$. 
We study the performance of gradient descent on $g$---which we refer to as Factored Gradient Descent (FGD)---under standard assumptions on the original function $f$.

>We provide a rule for selecting the step size and, with this choice, show that the local convergence rate of FGD mirrors that of standard gradient descent on the original $f$: i.e., after $k$ steps, the error is $O(1/k)$ for smooth $f$, and exponentially small in $k$ when $f$ is (restricted) strongly convex. 
In addition, we provide a procedure to initialize FGD for (restricted) strongly convex objectives and when one only has access to $f$ via a first-order oracle; for several problem instances, such proper initialization leads to global convergence guarantees.

>FGD and similar procedures are widely used in practice for problems that can be posed as matrix factorization.
To the best of our knowledge, this is the first paper to provide precise convergence rate guarantees for general convex functions under standard convex assumptions.