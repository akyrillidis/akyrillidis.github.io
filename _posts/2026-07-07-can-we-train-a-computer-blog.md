---
layout: post
disqus_comments: false
date: 2026-07-07 12:00:00 UTC
title: "Can we train a computer? Two ways to point at a memory"
---

We put up a new blog post on our [AI-OWLS](https://akyrillidis.github.io/aiowls/blogs.html) page — the first of a short series of small, ground-truthed observations about how trained networks *actually* compute.

The setup is deliberately clean. We hand-wired a transformer to *be* a Turing-complete computer — using SUBLEQ, a language with a single instruction — and then trained a second transformer, from scratch, to do the identical job. Both run the machine perfectly. The question is whether they work the same way underneath, and here two standard tests flatly disagree. Weight-space mode connectivity says "different algorithms" — every straight-line interpolation between the two networks collapses. A mechanistic probe says the opposite: the trained network has independently rediscovered the same content-addressing primitives the hand-built one uses. Same job, same building blocks.

We reconcile the two verdicts by naming the mechanism. The hand-built circuit points at memory with strongly correlated, "Gaussian" position keys; gradient descent instead settles on near-*orthogonal* keys — functionally identical, but far apart in magnitude. That magnitude gap, not any real disagreement, is exactly what makes the weight-space test misread them as different algorithms. The practical lesson is small and useful: when two networks might differ in scale, trust the probe over the interpolation.

We are just as explicit about the edges. The effect is robust — it holds across roughly eighteen networks, several one-instruction variants, and a range of architectural perturbations — but the precise numbers are specific to this family of tasks, the mechanistic overlap between the two networks is partial rather than total, and the trained network's success on longer multi-step programs is emergent generalization, not something we guarantee. It is one clean, ground-truthed case where the field's usual "did these two networks learn the same thing?" test misleads, and where looking inside settles it.

This one is early and exploratory, and the main reason I'm sharing it is to hear what the community makes of it. If you can spare a few minutes, please [give it a read](https://akyrillidis.github.io/aiowls/can_we_train_a_computer.html) and send along your honest feedback — more posts in this vein will follow.

The paper and the code are available on request at anastasios@rice.edu. In collaboration with Microsoft Research.

*This line of work was inspired by Dimitris Papailiopoulos's essay ["Can You Train a Computer?"](https://x.com/DimitrisPapail/status/2028669695344148946).*
