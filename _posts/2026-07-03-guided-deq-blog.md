---
layout: post
disqus_comments: false
date: 2026-07-03 12:00:00 UTC
title: "Which valley, and how deep: training atomic relaxation at a fraction of the memory"
---

We published a new blog post on our [AI-OWLS](https://akyrillidis.github.io/aiowls/) page, on training machine-learned interatomic potentials to *relax* atomic structures — the expensive inner loop of materials discovery — without the usual accuracy-versus-memory trade-off.

Here is the puzzle. Relaxing a candidate structure to its nearest stable configuration means iterating a learned force field for many steps, until the net force on every atom vanishes — a fixed-point map. To train *through* that relaxation you can backpropagate through the whole rollout (accurate: it can steer which energy basin the structure falls into, but it stores every step, and because each step is a full neural-network evaluation over every atom, memory grows into the tens of GB), or you can use the implicit-function theorem (constant memory, but it only sharpens whichever minimum the solver already reached — from a poor start, the wrong one). Accuracy or efficiency, not both.

The move is to notice that a relaxation quietly does *two separable jobs*. *Which* basin it falls into is decided early and needs only a short differentiated window; *how precisely* it settles is a fixed-point problem that implicit differentiation solves at constant memory. We pair a brief unrolled **guidance** phase (basin selection) with an implicit **equilibrium** phase (precision) — differentiate first, go implicit last. The memory footprint becomes a knob you set, not a cost you pay.

On silicon point defects the decomposition matches full backprop-through-time at **3.5× less memory** (2.1 GB vs 7.5 GB, five seeds) and reaches **85 of 100 correct basins vs backprop's 79** — while the path-blind implicit gradient alone reaches just 25, worse than the untrained model. The advantage is basin *selection*, not a memory optimization. We also map exactly *when* the method has leverage — correct base forces, genuinely competing minima, a base that lands in the wrong one, and a short-enough relaxation — turning "regime of validity" into a checkable guide across materials datasets, with a shared vocabulary bridging the machine-learning and materials-science names for the same objects.

Read the full post [here](https://akyrillidis.github.io/aiowls/guided_deq.html), and the report at [akyrillidis.github.io/pubs/Preprints/G-DEQ.pdf](https://akyrillidis.github.io/pubs/Preprints/G-DEQ.pdf). Code: [github.com/akyrillidis/G-DEQ](https://github.com/akyrillidis/G-DEQ).

Joint work with Yifei Zhang and Evan Dramko.
