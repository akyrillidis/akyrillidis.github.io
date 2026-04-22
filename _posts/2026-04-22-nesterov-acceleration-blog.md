---
layout: post
disqus_comments: false
date: 2026-04-22 12:00:00 UTC
title: "Provable Acceleration of Nesterov's Momentum for Deep ReLU Networks"
---

We published a new blog post on our [AI-OWLS](https://akyrillidis.github.io/aiowls/) page, summarising our ALT 2024 paper with Fangshuo (Jasper) Liao on provable accelerated convergence of Nesterov's momentum for deep ReLU neural networks.

The key result: on a new class of non-convex objectives — the "partition model", where parameters split into a strongly-convex part and a controlled non-convex part — Nesterov's momentum provably achieves the accelerated rate 1 − Θ(1/√κ), versus 1 − Θ(1/κ) for gradient descent. The class includes deep fully-connected ReLU networks trained with MSE loss under standard Gaussian initialization. To our knowledge, this is the first accelerated convergence rate proven for a non-trivial (non-shallow, non-linear) neural-network architecture.

The blog walks through why this has been a stubborn open problem (Yue et al. 2022's rate-optimality of gradient descent under the PL condition; Goujaud et al. 2023's negative result for Heavy Ball), the two core proof difficulties and the Lyapunov function that resolves them, and three experimental regimes showing where the guarantee holds and where it breaks. It also includes an interactive √κ slider so you can see the speedup as a function of the condition number.

The result is deterministic (full gradients); the hope is to carry the machinery of convex-optimization theory an ε-step beyond the class of convex functions while keeping the accelerated rate.

Read the full blog post [here](https://akyrillidis.github.io/aiowls/accelerated_nesterov_deepReLU.html), and the paper on [PMLR](https://proceedings.mlr.press/v237/liao24a/liao24a.pdf).

Joint work with Fangshuo (Jasper) Liao.
