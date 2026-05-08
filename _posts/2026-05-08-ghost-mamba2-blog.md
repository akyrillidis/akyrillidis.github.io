---
layout: post
disqus_comments: false
date: 2026-05-08 12:00:00 UTC
title: "GHOST: pruning Mamba2 by what each channel actually does"
---

We published a new blog post on our [AI-OWLS](https://akyrillidis.github.io/aiowls/) page, summarising our [ICML 2026 paper](https://arxiv.org/abs/2602.11408) with [Michael Menezes](https://github.com/Menezmic21) on state pruning for Mamba2 selective state-space models.

Here is the puzzle. Between Mamba1 and Mamba2 the state-space dimension $N$ jumped from 16 to 128. For Mamba2-1.3B that pushed the recurrent state from about 12 MB to roughly 100 MB, which is now the bottleneck during autoregressive decoding. Each existing pruning tool brings a tradeoff. Unstructured weight pruners (SparseGPT, Wanda) leave activations dense and don't actually shrink the recurrent state. Magnitude pruning on the input/output projections is cheap but blind to runtime dynamics — at 50% sparsity, the static rank and the runtime rank disagree on 41% of channels. Gradient-based Taylor scoring is more accurate at moderate sparsity but needs to backprop through the full graph (45+ GB VRAM on a 1.3B model — beyond an A100 40 GB) and runs into the masked-distribution-shift issue at higher sparsity, where upstream pruning lands before the downstream gradients are computed.

The technical move is to bring back a forty-year-old idea from system identification: *balanced truncation*. For a linear time-invariant system you can rank internal states by the product of empirical *controllability* (how strongly inputs drive each state) and *observability* (how strongly each state drives the output). Mamba2 is not LTI — the recurrence is selective — but the input- and output-side energies can still be estimated from forward-pass statistics over a calibration corpus. The resulting saliency score has two independent readings: it is the empirical analogue of a Hankel singular value, *and* it is exactly the local mean-squared error from zeroing that channel. Two perspectives, same scoring rule. We call the resulting pruner GHOST. Two forward passes per layer, sequential layer-by-layer recalibration, hard-pruned weight matrices.

The headline empirical numbers: GHOST runs in roughly 15 GB peak VRAM on Mamba2-1.3B; reaches 50% sparsity at +1 perplexity on WikiText-2; stays at perplexity 16.16 at 70% sparsity (where one-shot gradient methods run into the masked-distribution-shift problem most sharply); and is the only structured method we tested that's usable across the full 130M–2.7B scale. It also generalises to longer sequences (calibrated at length 128, evaluated up to 2048) and to out-of-distribution tasks (HumanEval code, MMLU math).

Honest scope: GHOST degrades meaningfully at >90% sparsity (perplexity 25), takes a sharper relative hit on small models (130M loses 12% perplexity vs 8% for 1.3B), and trades 14 Lambada accuracy points for state compression — exact-match retrieval is a real cost we don't paper over. It is also Mamba2-specific; transferring the principle to S4 / H3 / Mamba1 requires re-deriving the Gramians, though we do show one cross-architecture experiment on Zamba2 (Mamba2 + Transformer hybrid) where GHOST continues to work.

Read the full post [here](https://akyrillidis.github.io/aiowls/ghost_mamba2.html), and the paper at [arXiv:2602.11408](https://arxiv.org/abs/2602.11408). Code: [github.com/Menezmic21/mamba2_ghost](https://github.com/Menezmic21/mamba2_ghost).

Joint work with [Michael Menezes](https://github.com/Menezmic21).
