---
layout: post
disqus_comments: false
date: 2026-05-19 12:00:00 UTC
title: "One model, two roles: emergent specialization in a shared recurrent Transformer"
---

We published a new blog post on our [AI-OWLS](https://akyrillidis.github.io/aiowls/) page, summarising our recent [arXiv preprint](https://arxiv.org/abs/2605.17811) with [Jucheng Shen](https://juchengshen.github.io/) and [Barbara Su](https://www.linkedin.com/in/barbara-su-966314268/) on whether a *shared-weight* recurrent Transformer can develop multiple internal roles on its own.

The setup. A recent line of work on small recurrent reasoning models — the Hierarchical Reasoning Model (HRM, Wang et al. 2025) and the Tiny Recursive Model (TRM, Jolicoeur-Martineau et al. 2025) — has shown that surprisingly small architectures, allowed to recur for a fixed number of cycles, can solve hard combinatorial puzzles like Sudoku-Extreme and 30×30 mazes. HRM carries two latent recurrent states $\mathbf{z}_H$ and $\mathbf{z}_L$ and assigns each to its own Transformer with its own parameters. TRM observes that you don't need two networks; one shared Transformer called twice per cycle is enough. The natural follow-up is: if the two latent states are now driven by *identical* parameters, do they still develop distinct roles, or does the shared model treat the two updates as essentially the same operation?

The architectural move. We propose AIR — *Asymmetric Input Recurrence* — which keeps TRM's shared block and HRM's truncated-gradient training, and makes the *only* built-in difference between the two update types whether the encoded input $\tilde{\mathbf{x}}$ is injected. The L-update receives the input; the H-update does not. Nothing else distinguishes them; both call the same Transformer with the same parameters.

What emerges. When we decode each latent state at every sub-step with the same output head used at test time, the picture is consistent across puzzles and across seeds. The H-state behaves like a *fully committed proposal*: at every sub-step it decodes to a complete candidate board (or maze), even when several of those decisions are still wrong. The L-state behaves like a *shifting scratchpad*: some positions are held back as undecided (a `BLANK` for Sudoku, a `PAD` for Maze), and the locations of those held-back positions shift across sub-steps. Freeze interventions confirm that the two states are doing complementary work — collapsing one immediately collapses task accuracy to zero — and attention analysis shows that L-updates put about 47% more attention mass inside the local constraint neighbourhood than H-updates do at the deepest layer. On Sudoku, deeper layers additionally develop a violation-specific routing signal.

The numbers. Asymmetric AIR variants average about 59% on Sudoku and 73% on Maze, while symmetric variants (input in both updates, or neither) collapse to about 51% on Sudoku and 70% on Maze. The best AIR variants match or exceed the original two-network HRM baseline (55.0% Sudoku, 74.5% Maze) using *half* the Transformer parameters. A level-token control shows that the load-bearing requirement is a *structurally separable* state-identity signal: prepending a learned token to the sequence, letting it participate in self-attention, then stripping it before the next sub-step recovers most of the asymmetric-injection gap. Mixing the level signal into every content token does nothing.

Honest scope: this is two synthetic grid-structured combinatorial tasks, a 4-layer Transformer, two recurrent latent states, $C_L = C_H = 2$ sub-steps per cycle. Whether the same role split persists under deeper blocks, language-model regimes, partial observability, or continuous domains is open. What the paper does show, cleanly and reproducibly, is that the assumption that specialization needs parameter-level modularity is more relaxed than it seems: in this controlled setting, a single shared computation specializes when it has a clean per-invocation state-identity signal, and the signal can be very thin.

Read the full post [here](https://akyrillidis.github.io/aiowls/asymmetric_input.html). Paper on [arXiv:2605.17811](https://arxiv.org/abs/2605.17811). Code: [github.com/juchengshen/air](https://github.com/juchengshen/air).

Joint work with [Jucheng Shen](https://juchengshen.github.io/) and [Barbara Su](https://www.linkedin.com/in/barbara-su-966314268/).
