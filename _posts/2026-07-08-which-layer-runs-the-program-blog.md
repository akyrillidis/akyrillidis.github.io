---
layout: post
disqus_comments: false
date: 2026-07-08 12:00:00 UTC
title: "Which layer runs the program? What decides where a transformer computes"
---

We put up a new blog post on our [AI-OWLS](https://akyrillidis.github.io/aiowls/blogs.html) page, riding a question that is suddenly everywhere.

This month Anthropic reported that a large language model's computation is organized *by depth* — an intermediate band of layers acts as a "global workspace" that holds and broadcasts concepts, between an early "sensory" region and a late "motor" region aligned with the output. It is a striking map of *where* computation lives inside a transformer, read off a fixed, pretrained model. The obvious next question is what *puts* the workspace there.

We have been studying the controlled version of that question. On a tiny transformer trained to execute a one-instruction, Turing-complete language (SUBLEQ), we hold something the pretrained-model studies do not: a hand-built circuit that tells us, in advance, which layer *ought* to compute each step. Read against that answer key, one ordinary component decides the whole depth layout — **normalization**, the thing practitioners add for training stability. Remove it and the network banks its real work in the final layer (last-block "update share" ≈ 0.88); add LayerNorm or RMSNorm and the same computation surfaces early, at the layer the hand-built circuit uses (≈ 0.38). Same task, same accuracy, one line of the recipe.

Because it is a cause and not a correlation, it is a *knob*: place the normalizer at a chosen block and the computation relocates to that depth; the contrast follows a clean 1/L law from 2 to 12 layers; a norm-free stand-in (Dynamic Tanh) does not reproduce it. We are careful about the honest scope — the raw metric partly rides the growing residual stream (0.88 → 0.61 once corrected), so the load-bearing claim is a metric-free test: remove the last block and the unnormalized executor collapses while the normalized one survives. The same signature shows up on modular addition, a circuit we did not build by hand.

The two lines of work meet from opposite ends: Anthropic reads, off a model we cannot hand-build, that computation is depth-organized; we show, on a model we understand completely, what *sets* that organization. We are not claiming to explain their workspace — only that, measured against ground truth, an architectural choice made for other reasons is one honest handle on where computation lands.

If you can spare a few minutes, please [give it a read](https://akyrillidis.github.io/aiowls/which_layer_runs_the_program.html) and send along your honest feedback.

The paper and the code are available on request at anastasios@rice.edu. In collaboration with Microsoft Research.

*This line of work was inspired by Dimitris Papailiopoulos's essay ["Can You Train a Computer?"](https://x.com/DimitrisPapail/status/2028669695344148946).*
