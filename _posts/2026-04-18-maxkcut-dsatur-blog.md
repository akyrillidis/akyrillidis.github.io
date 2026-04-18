---
layout: post
disqus_comments: false
date: 2026-04-18 12:00:00 UTC
title: "New blog post: Spectral vs. Combinatorial for Max-3-Cut"
---

We published a new blog post on our [explore-quantum](https://akyrillidis.github.io/explore-quantum/) page, comparing spectral and combinatorial construction heuristics for Max-3-Cut.

The key finding: DSatur (a combinatorial, quasi-linear heuristic inspired by graph coloring) and rank-2 spectral sampling have complementary strengths — DSatur excels on spatial and geometric graphs, while spectral methods win on social and web networks. An ensemble that runs both and picks the better starting partition for greedy local search beats simulated annealing on 11 of 13 graph families tested, and beats the previous best spectral method (Hybrid) on all of them.

We also include a systematic sweep over stochastic block models and random geometric graphs, showing that R2G consistently outperforms DSatur at scale (n ≥ 3,000) on graphs with planted community structure.

Read the full blog post [here](https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_DSatur.html), check out the [code](https://github.com/barbara-su/MaxKCutParallel/tree/public-release), and the paper on [arXiv](https://arxiv.org/pdf/2602.20376).

Joint work with Ria Stevens, Fangshuo Liao, Barbara Su, and Jianqiang Li.
