---
layout: post
disqus_comments: false
date: 2026-03-26 12:00:00 UTC
title: "New blog post: What Can 15 Obsolete GPUs Do for Combinatorial Optimization?"
---

We published a follow-up blog post on our [explore-quantum](https://akyrillidis.github.io/explore-quantum/) page, describing our GPU-parallel implementation of the low-rank Max-K-Cut solver.

Using a heterogeneous cluster of 15 NVIDIA P100 GPUs from 2016 -- spread across four machines, two of which run PowerPC -- we scaled our low-rank Max-K-Cut algorithm to solve large graph instances with up to 1,500 vertices. The implementation uses a coordinator/worker architecture that distributes work across machines via SSH, with each worker exploiting multiple GPUs through PyTorch. No tensor cores or modern hardware features are needed.

Read the full blog post [here](https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_GPU.html), and check out the paper on [arXiv](https://arxiv.org/pdf/2602.20376).

Joint work with Ria Stevens, Fangshuo Liao, Barbara Su, and Jianqiang Li.
