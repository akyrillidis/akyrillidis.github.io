---
layout: post
disqus_comments: false
date: 2026-04-05 12:00:00 UTC
title: "Rank-1 as a Building Block for Million-Node Max-3-Cut"
---

We published a new blog post on our [explore-quantum](https://akyrillidis.github.io/explore-quantum/) page, describing how three algorithmic insights make rank-1 spectral methods practical at extreme scale for Max-3-Cut.

The key ideas: (1) incremental scoring reduces the phase sweep from O(n^2) to O(n*degree), enabling million-node graphs on a single CPU; (2) 2-eigenvector complex rounding fixes a degeneracy that was losing one-third of the solution space for K=3; (3) using the rank-1 solution as a warm-start for greedy local search (the "hybrid" solver) beats greedy on 100% of the 45 instances tested, from 10K to 1M nodes across synthetic and real-world graphs.

Read the full blog post [here](https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_Rank1.html), check out the [code](https://github.com/barbara-su/MaxKCutParallel), and the paper on [arXiv](https://arxiv.org/pdf/2602.20376).

Joint work with Ria Stevens, Fangshuo Liao, Barbara Su, and Jianqiang Li.
