---
layout: post
disqus_comments: false
date: 2026-04-11 12:00:00 UTC
title: "Randomized Rank-2 for Max-3-Cut — When Two Eigenvectors Beat One"
---

We published a new blog post on our [explore-quantum](https://akyrillidis.github.io/explore-quantum/) page, introducing a 3-phase spectral pipeline for Max-3-Cut that outperforms simulated annealing on half of the graph families tested.

The method — eigensolve, randomized rank-2 sampling, greedy refinement — beats SA on 6 out of 12 real-world and synthetic graph families, including social networks (+1.96% on soc-Epinions1), web graphs (+1.90% on web-Google), and product networks (+0.12% on Amazon). The sample complexity appears constant in n: the same 10^6 random samples work from n=250 to n=1,400,000. We also tested rank-3 (negligible improvement over rank-2 at 7x the cost) and verified the rank-2 ceiling via partial exact enumeration.

Read the full blog post [here](https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_RandR2.html), check out the [code](https://github.com/barbara-su/MaxKCutParallel), and the paper on [arXiv](https://arxiv.org/pdf/2602.20376).

Joint work with Ria Stevens, Fangshuo Liao, Barbara Su, and Jianqiang Li.
