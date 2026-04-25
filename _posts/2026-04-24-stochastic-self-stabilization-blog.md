---
layout: post
disqus_comments: false
date: 2026-04-24 12:00:00 UTC
title: "Why Stochastic Gradient Descent Stops Just Short of the Edge"
---

We published a new blog post on our [AI-OWLS](https://akyrillidis.github.io/aiowls/) page, summarising our recent paper with Fangshuo (Jasper) Liao and Afroditi Kolomvaki on the Edge of Stochastic Stability.

Here is the puzzle. Train a neural network with full-batch gradient descent and the largest eigenvalue of its loss Hessian — the *sharpness* — climbs to a specific value, *2/η*, and pins itself there. This is the well-known *Edge of Stability* (Cohen et al. 2021), and it has a clean mechanistic explanation thanks to Damian, Nichani & Lee (2023): a cubic restoring force from the third derivative of the loss prevents drift above the threshold. Replace gradient descent with mini-batch SGD and the same quantity sits *below* *2/η*, with the gap widening as the batch shrinks. *Why*, and *by how much*, were left as an open problem in follow-up work.

Our paper closes this. The core idea is that mini-batch noise inflates the variance of the oscillation along the unstable Hessian direction; the same cubic restoring force, applied to a larger oscillation, becomes stronger than it needs to be to hold the equilibrium at *2/η*; the system relaxes downward until rebalanced. Making this rigorous extends Damian's coupling theorem to the stochastic case and yields a closed-form sharpness gap

\\[ \Delta S \approx \frac{\eta\,\beta\,\sigma_u^{2}}{4\alpha}, \\]

inversely proportional to batch size and depending on three landscape quantities — progressive sharpening rate *α*, self-stabilisation strength *β*, and the noise variance projected onto the top Hessian eigenvector *σ²<sub>u</sub>*. Experiments on CIFAR-10 confirm the *1/b* scaling (fitted slope &minus;1.27, *R²* = 0.98) across MLP and small-CNN architectures with squared-error loss. The mechanism is also sharply scoped: with cross-entropy on the same small dataset, the network never reaches the Edge of Stability regime in the first place, the sharpness collapses, and — correctly — the gap formula does not apply.

The blog walks through the mechanism, the formula, the experiments that confirm it, and the boundary where the claim stops. Read the full post [here](https://akyrillidis.github.io/aiowls/stochastic_self_stabilization.html), and the paper at [arXiv:2604.21016](https://arxiv.org/abs/2604.21016). Code: [github.com/akyrillidis/stochastic-eos](https://github.com/akyrillidis/stochastic-eos).

Joint work with [Fangshuo (Jasper) Liao](https://jasperliao.github.io/) and Afroditi Kolomvaki.
