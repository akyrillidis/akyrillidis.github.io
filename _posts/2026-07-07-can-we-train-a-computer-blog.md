---
layout: post
disqus_comments: false
date: 2026-07-07 12:00:00 UTC
title: "Can we train a computer? Two ways to point at a memory"
---

We put up a new blog post on our [AI-OWLS](https://akyrillidis.github.io/aiowls/blogs.html) page — the first of a short series of small, ground-truthed observations about how trained networks *actually* compute.

The setup is deliberately clean. We wired a transformer by hand to run SUBLEQ, a language with a single instruction that is Turing-complete given unbounded memory, and then trained a second transformer of the same architecture, from scratch, to do the same job. Training works: on states it has never seen, drawn from its training distribution, the trained network executes an instruction exactly 99.9% of the time. The question is whether the two work the same way underneath. Comparing their weights says "different": on every line between them that we measured, the networks in the middle fail. Looking inside says something more precise: the trained network has heads that read exactly the same two memory cells as the hand-built one.

The two networks find those cells differently. Our hand-built heads *search*: the query carries the address, and the attention scores form a steep parabola over positions, about 10^5 logits wide. The trained pointer heads read a *mark*: earlier layers mark the target cell, the head picks out the mark, and its scores span only tens of logits. A swap test, which asks whether the address travels with the query or with the keys, tells the two apart. The weight comparison, with the matchings we tested, is the wrong tool for this question: it also calls two trained networks that differ only in their random seed different. The practical lesson is small and useful: check a comparison tool on a pair whose answer you know before trusting its verdict.

We are just as explicit about the edges. The same holds in all twelve trained networks of our main study, over seeds, instruction-set variants, a deeper and a narrower network. But this is one family of tasks and small networks; the probe looks only for what the hand-built network does, and part of each step happens where it does not look; we show what each score shape costs, not why training picks the cheaper one; and the trained network runs programs reliably for 16 steps while they run, but has not learned to stay put once a program halts.

This one is early and exploratory, and the main reason I'm sharing it is to hear what the community makes of it. If you can spare a few minutes, please [give it a read](https://akyrillidis.github.io/aiowls/can_we_train_a_computer.html) and send along your honest feedback — more posts in this vein will follow.

The paper and the code are available on request at anastasios@rice.edu. In collaboration with Microsoft Research.

*This line of work was inspired by Dimitris Papailiopoulos's essay ["Can You Train a Computer?"](https://x.com/DimitrisPapail/status/2028669695344148946).*

*Updated November 2026: an earlier version of this note said the trained network uses nearly orthogonal keys and runs the machine perfectly. Later checks did not support either claim, and the text now follows the paper.*
