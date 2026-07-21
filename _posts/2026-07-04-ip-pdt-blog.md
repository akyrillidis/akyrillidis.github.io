---
layout: post
disqus_comments: false
date: 2026-07-04 12:00:00 UTC
title: "When trainability outlasts expressibility: training quantum eigensolvers with far fewer gates"
---

We published a new blog post on our [quantum research](https://akyrillidis.github.io/explore-quantum/) page (QuanTAS), on a small structural trick that makes variational quantum eigensolvers easier to train — and a theorem that explains why it keeps helping long after it "should" have stopped.

Here is the tension. To make a variational quantum circuit more powerful you make it deeper, but deeper circuits are notoriously hard to *train* — gradients vanish, the landscape flattens. The standard remedy is to grow the circuit gradually: train shallow, then append layers. The catch is hardware. In hardware-efficient circuits the entangling CNOT gates are fixed — there is no parameter that turns them off — so every new layer irreversibly commits to more entanglement and, the moment it is added, spikes the energy you just spent effort minimizing. This *initialization shock* can erase the progress of every prior stage.

The move is to append not a layer but a *matched pair* — a block followed by its exact inverse — that composes to the identity at initialization. Each stage therefore begins precisely where the previous one succeeded (no shock), and because the two CNOT rings are adjacent they cancel exactly, leaving a single entangling layer wrapped in overparameterized single-qubit rotations. We then prove something we did not expect: the circuit's reachable set **saturates** after the very first expansion — deeper circuits are provably no more expressive — and yet progressive training keeps improving the result. Expressibility flatlines; trainability keeps climbing. We call it *trainability beyond expressibility*, and we pair it with a monotone-energy guarantee (the energy never jumps up at an expansion) and spectral-gap fidelity bounds.

On ground states that are structurally simple, the method (**IP-PDT**) matches or beats full-depth baselines using about **5× fewer two-qubit gates** — the expensive, error-prone resource on real hardware — winning on 7 of 9 benchmark Hamiltonians and staying trainable at 16 qubits where the standard baseline collapses. We are just as explicit about where it does *not* help: the training gains come mostly from the progressive curriculum (identity-pairing is the enabling architecture, not a trainability serum), the convergence guarantee is an inheritance result that says nothing in the barren regime, there is no advantage on global cost functions, and near criticality — where the ground state leaves the single-entangler reachable set — deeper entangling circuits are still required. The contribution is a useful method with a clearly mapped regime of validity.

Read the full post [here](https://akyrillidis.github.io/explore-quantum/IP-PDT.html), with code at [github.com/tanihad/PDT-VQE](https://github.com/tanihad/PDT-VQE). The paper is on arXiv: [arxiv.org/abs/2607.16800](https://arxiv.org/abs/2607.16800).

Joint work with Athanasios Hadjidimoulas and Tirthak Patel.
