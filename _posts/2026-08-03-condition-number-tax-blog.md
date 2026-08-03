---
layout: post
disqus_comments: false
date: 2026-08-03 12:00:00 UTC
title: "The condition-number tax: same matrix, same condition number, three iterations or three thousand"
---

We published a new blog post on our [quantum research](https://akyrillidis.github.io/explore-quantum/) page (QuanTAS), about the symbol that every quantum linear solver quotes its cost in — the condition number $$\kappa$$ — and what it is actually measuring.

Solving $$Ax=b$$ sits underneath quantum algorithms for differential equations, optimization, and machine learning. The advertised prize is an exponential speedup in the dimension. The fine print is always $$\kappa$$: runtimes are quoted in it, lower bounds are proved in it, and preconditioning exists to reduce it. But $$\kappa$$ is a worst case over right-hand sides, and the worst case is usually nothing like the instance in front of you. Fix a matrix with $$\kappa=10^5$$ and change only $$b$$: conjugate gradients takes anywhere from 1 iteration to 3188, a factor of three thousand, while the condition number never moves.

That much is old news classically and, recently, on the quantum side too — several groups now have solvers whose cost is governed by an *effective* condition number rather than $$\kappa$$. The post concedes all of that up front. What seems not to have been said is what happens when you put the two discounts side by side: **they do not discount the same thing.** The quantum effective condition number forgives you for having no weight on *small* singular values. Krylov methods forgive you for having weight on *few* eigenvalues, wherever they sit. These sets come apart, and they come apart in the direction that hurts. Put $$b$$ on four eigen-directions at the small end of the spectrum and CG finishes in **3 iterations** while the effective condition number stays at its worst-case **100,000** — classically trivial, quantum worst-case. Instance-easiness erodes the axis where quantum was already behind, and leaves the dimension axis, where the real speedup lives, untouched.

We also report a negative result about our own method. Our Catalyst framework ([arXiv:2406.13879](https://arxiv.org/abs/2406.13879), AAAI 2026) wraps a linear solver in a proximal-point loop, replacing $$A$$ by the better-conditioned $$I+\eta A$$ at the cost of more outer steps. Swept against a classical inner solver, the trade-off has no interior optimum: total work falls with $$\eta$$ and flattens onto plain CG without ever crossing it. The optimum sits on the boundary, and the boundary is "do not precondition." This is not a contradiction of the paper — it is the paper's own stated ceiling, observed — and it sharpens the claim into a rule. Proximal preconditioning pays only when the inner solver is at least *linearly* sensitive to $$\kappa$$, which is exactly the quantum regime and exactly not CG's. Wrapping CG in a proximal loop is wrapping a $$\sqrt{\kappa}$$ method in machinery designed to rescue a $$\kappa$$ one.

Every number in the post comes from classical numerical experiments, sanity-gated and run over five seeds. No quantum solver was executed, and the post says so plainly: the question it answers is what the shared cost axis measures, and that question is answered with linear algebra. The obvious next step — running the quantum solvers end-to-end on the same instance families, so the comparison is measured rather than computed — is stated as an open problem rather than a promise.

Read the full post [here](https://akyrillidis.github.io/explore-quantum/QLSP_ConditionNumber.html).
