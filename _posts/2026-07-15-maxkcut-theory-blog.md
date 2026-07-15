---
layout: post
disqus_comments: false
date: 2026-07-15 12:00:00 UTC
title: "The Sample-Complexity Theory Behind Randomized Max-3-Cut Rounding"
---

We published a new blog post on our [explore-quantum](https://akyrillidis.github.io/explore-quantum/) page, working out the theory behind the randomized sampling algorithm used elsewhere in our low-rank Max-K-Cut series.

The key result: for a rank-r objective, drawing a single random direction from the unit sphere and rounding it already recovers a constant fraction of the optimum, and the number of draws needed to get arbitrarily close never depends on the size of the graph. We prove this three ways &mdash; an exact "rounding margin" at rank 1, an unconditional Beta-distributed tail at general rank, and a polynomial-in-rank tail via the Paley&ndash;Zygmund inequality &mdash; trading off differently between how strong a guarantee each gives and how much structure it assumes.

Experimentally, a single random draw already lands within 87&ndash;98% of the true rank-r optimum (about 7&times; the guaranteed worst-case floor), and the sample budget needed for a near-optimal cut stays flat as we scale graphs from a thousand to a million nodes &mdash; exactly the n-independence the theory predicts.

Read the full blog post [here](https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_Theory.html), and check out the [code](https://github.com/barbara-su/MaxKCutParallel/tree/public-release).

Joint work with Ria Stevens and Jasper Liao.
