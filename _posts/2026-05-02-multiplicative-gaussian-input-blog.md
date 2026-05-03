---
layout: post
disqus_comments: false
date: 2026-05-02 12:00:00 UTC
title: "How a little Gaussian dust changes how a network learns"
---

We published a new blog post on our [AI-OWLS](https://akyrillidis.github.io/aiowls/) page, summarising our recent paper with Afroditi Kolomvaki, [Fangshuo (Jasper) Liao](https://jasperliao.github.io/), Evan Dramko, and Ziyun Guang on training two-layer ReLU networks under multiplicative Gaussian input noise.

Here is the question. Take a two-layer ReLU network and, before the network ever sees the input, multiply every coordinate by an independent Gaussian random number — centered at $1$, standard deviation $\kappa$. A fresh draw at every iteration. The training loss does not blow up. It converges, *linearly*, to a target whose distance from the global minimum we can write down as a function of $\kappa$, the network width $m$, and the number of samples $n$.

The technical move that unlocks the analysis is a closed-form expectation: when the argument of a ReLU is a Gaussian random variable, the expected output has a clean expression — $z\,\Phi(z/\sigma) + \sigma\,\varphi(z/\sigma)$, with $z = \mathbf{w}^\top\mathbf{x}$ and $\sigma = \kappa\|\mathbf{w}\odot\mathbf{x}\|_2$. For the convergence theorems we work with the slightly simpler proxy $\hat\sigma(\mathbf{w},\mathbf{x}) = z\,\Phi(z/\sigma)$, which agrees with the exact expectation up to an $O(\sigma\,\varphi(z/\sigma))$ correction near $z = 0$. Either way, the non-smooth, randomness-inside-the-nonlinearity object turns into a smooth, deterministic function of $z$ and $\sigma$. Plug it back into the loss and the expected loss decomposes into a smoothed-network MSE plus a data-dependent regularizer, both clean enough to admit an NTK-style convergence argument.

The deeper contribution sits one level beneath the headline. To make the convergence proof go through under a *biased* gradient estimator (mask randomness sits inside the nonlinearity, so the resulting gradient is not unbiased), we proved a general SGD theorem for biased estimators with a relaxed smoothness condition (Theorem 5.1 in the paper, in the body — not the appendix). That theorem is application-agnostic — drop in a different mask, a different smoothing, a different family of input perturbations, and the same machinery applies. It is what we expect to outlive this specific paper.

Honest scope: the proof is two layers, the bound is meaningful for small $\kappa$, and the privacy connection we explore in the appendix is empirical, not formal differential privacy. We did not want to oversell those edges.

Read the full post [here](https://akyrillidis.github.io/aiowls/multiplicative_gaussian_input.html), and the paper at [arXiv:2602.17423](https://arxiv.org/abs/2602.17423). Code: [github.com/akyrillidis/multiplicative-gaussian-input-noise](https://github.com/akyrillidis/multiplicative-gaussian-input-noise).

Joint work with Afroditi Kolomvaki, [Fangshuo (Jasper) Liao](https://jasperliao.github.io/), Evan Dramko, and Ziyun Guang.
