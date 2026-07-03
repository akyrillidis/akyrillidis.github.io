---
layout: post
disqus_comments: false
date: 2026-06-24 12:00:00 UTC
title: "Two ways to slim a model: remember vs recompute"
---

We published a new blog post on our [AI-OWLS](https://akyrillidis.github.io/aiowls/) page, on how to shrink a neural network without making it dumber — and why the *right* way to prune depends on what a given part of the model is actually doing.

Here is the idea. Model compression offers two very different pruning rules, and they are usually pitched as rivals. Output-aware pruning (as in GHOST) is careful: it scores a component by how much removing it changes the output, which is accurate but more expensive. Magnitude pruning is cheap: drop the smallest weights and move on. The post argues they are each *right about their own half* of a model. A part that **remembers** — that carries information forward, like a recurrent state — must be pruned carefully, because a cheap magnitude rule is blind to what it destroys. A part that **recomputes** — disposable scratch-work, like much of a feed-forward block — can be pruned cheaply, because there is nothing to preserve. Match the rule to the role.

To make this checkable rather than a slogan, the post runs a capability test (with confidence intervals) that shows exactly where the cheap rule silently breaks — reconciling GHOST's output-aware state pruning with recent activation-sparsity results (Sakana). Five models across three datasets, forward-only.

Read the full post [here](https://akyrillidis.github.io/aiowls/magnitude_safety.html).

Building on [Michael Menezes](https://github.com/Menezmic21)'s GHOST (Rice CS).
