---
layout: post
disqus_comments: false
date: 2026-05-14 12:00:00 UTC
title: "From PCA to LoRA: why fine-tuning could have been parallel all along"
---

We published a new blog post on our [AI-OWLS](https://akyrillidis.github.io/aiowls/) page, summarising our recent [arXiv preprint](https://arxiv.org/abs/2605.10741) with [Barbara Su](https://github.com/barbara-su) and [Fangshuo (Jasper) Liao](https://jasperliao.github.io/) on parallel rank-one deflation for low-rank fine-tuning.

The setup. Hotelling's 1933 deflation procedure — extract the leading rank-one component of a matrix, subtract its outer product, and ask the same question of the residual — has been the default for ninety-two years. It powers principal component analysis, animates the power method, and underwrites the rank-one updates that animate LoRA. The convention has always been *sequential*: the $k$-th component depends on the $(k-1)$-th, which depended on the $(k-2)$-th, and so on. Sequential ordering is convenient, but in practice each rank-one solver is approximate, and the errors *propagate*: the residual handed to the second component carries the first's slip, the third inherits the second's compounded error, and so on. There is no theorem of mathematics requiring sequence.

The technical move is to run all $r$ workers simultaneously and have each worker rebuild its deflation target from the *latest* estimates of its predecessors at every communication round. As predecessors converge to their true values, the targets seen by their descendants improve, and early imprecision *self-corrects* rather than compounding. We prove this rigorously for the bilinear regression objective that underlies LoRA — distinct from Hotelling's matrix-approximation objective in that we have both inputs $\mathbf{X}$ and outputs $\mathbf{Y}$ rather than a single matrix to compress. The deflation mismatch $\|\mathbf{Y}_{k,\ell} - \mathbf{Y}_k^\star\|_F$ vanishes exponentially, not merely asymptotically. The argument extends [Liao et al.'s 2025 parallel-PCA result](https://openreview.net/pdf?id=n3SpSUzGi0) via Wedin's theorem (the rectangular analogue of Davis-Kahan); the constants change in the move from PCA to regression, but the self-correction property survives.

On top of the parallel backbone, AdaPaD adds two practical mechanisms. *Advance learning* — a worker privately refines its component during its formal idle period before activation, tightening the leading constant in the convergence bound by roughly a third. *Per-module dynamic rank discovery* — an importance-uncertainty signal grows the rank where capacity matters, leaving low-saliency modules at rank one and reaching the maximum only on the modules that earn it. The rank distribution becomes an *output* of training rather than an input.

The headline numbers. On the eight tasks of GLUE with DeBERTaV3-base at matched 0.34M-parameter budget, AdaPaD achieves the best average (89.34), ahead of AdaLoRA (89.03) and our IncreLoRA reproduction (88.99). Head-to-head against IncreLoRA at matched seed and budget, AdaPaD wins on six of eight tasks. On four NVIDIA H200 GPUs at rank 64, the per-batch wall-clock speedup is $3.62\times$ — close to the ideal of $4\times$ — with communication accounting for under one per cent of total time.

Honest scope: the convergence proof is for bilinear regression, while LoRA's training loss composes the adapter output with the pretrained network's nonlinear forward pass and a task head. The empirical results confirm that AdaPaD's behaviour persists, but the formal extension via neural-tangent-kernel arguments or local linearization around the converged backbone is the natural next step. Synchronous communication is assumed; bounded-staleness asynchrony with provable guarantees remains open.

Read the full post [here](https://akyrillidis.github.io/aiowls/adapad.html). Paper on [arXiv:2605.10741](https://arxiv.org/abs/2605.10741). Code: [github.com/barbara-su/ParallelLinearRegression](https://github.com/barbara-su/ParallelLinearRegression).

Joint work with [Barbara Su](https://github.com/barbara-su) and [Fangshuo (Jasper) Liao](https://jasperliao.github.io/).
