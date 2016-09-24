---
layout:     post
title:      Non-convex workshop at ICML 2016 - Part I
date:       2016-09-16 9:00:00
disqus_comments: false
summary:    Overview of ICML 2016 workshop "Advances in non-convex analysis and optimization"
---

With this blog post, I want to summarize the key points presented at the ICML 2016 workshop 
[*Advances in non-convex analysis and optimization*](https://sites.google.com/site/noncvxicml16/),
hosted by [Animashree Anandkumar](https://newport.eecs.uci.edu/anandkumar/),
[Sivaraman Balakrishnan](http://www.stat.cmu.edu/~siva/),
[Srinadh Bhojanapalli](http://ttic.uchicago.edu/~srinadh/),
[Kamalika Chaudhuri](http://cseweb.ucsd.edu/~kamalika/),
[Yudong Chen](https://people.orie.cornell.edu/yudong.chen/),
[Percy Liang](https://cs.stanford.edu/~pliang/), 
[Praneeth Netrapalli](https://www.microsoft.com/en-us/research/people/praneeth/),
[Sewoong Oh](http://web.engr.illinois.edu/~swoh/),
[Zhaoran Wang](http://www.princeton.edu/~zhaoran/), and 
[me](http://akyrillidis.github.io/about/).
Our motivation for organizing this workshop was to highlight some of the very recent 
developments on non-convex analysis and optimization.
We were lucky to have a great line-up of speakers, coming from diverse research fields: from machine learning and statistics, 
to learning theory and theoretical computer science. 
In what follows, I will try to summarize key points raised by the speakers; discussion 
can be facilitated at the "Comments" section.

## Improved linear algebra algorithms for the Big Data regime

[Sham Kakade](https://homes.cs.washington.edu/~sham/) presented some new perspectives to linear algebra routines,
that improve upon state of the art in large scale settings. The question Sham focused on is *"how can 
we speed up classic numerical schemes?"*, with the answer (partially) laying at the use of 
modern approximate linear system solvers. Three motivating linear algebra examples were presented:
principal component and canonical correlation analysis (PCA and CCA), as well as 
the task of computing the matrix square root. See works [here](http://arxiv.org/pdf/1605.08754v1.pdf), 
[here](http://arxiv.org/pdf/1604.03930v2.pdf) and [here](http://arxiv.org/abs/1507.05854). 

For the PCA case, Sham showed how to compute an $\epsilon$-approximation of the top eigenvector 
of a matrix $\Sigma$ with linear total runtime complexity $\widetilde{O}\left(C \cdot \log \frac{1}{\epsilon}\right)$.
Key property of such analysis is the separation of the spectral gap and the problem dimension 
in multiplicative factor $C$. Such a result improves upon classic schemes such as power and Lanzcos methods. 
Related work on this matter can be found [here](http://arxiv.org/abs/1507.08788).
To achieve the desideratum, Sham showed $(i)$ how reductions to better, gap-dependent subproblems, 
based on the [“shift and invert” pre-conditioning method](http://www-users.cs.umn.edu/~saad/eig_book_2ndEd.pdf) can help, and $(ii)$ how we can exploit
recent [stochastic algorithms](https://papers.nips.cc/paper/4937-accelerating-stochastic-gradient-descent-using-predictive-variance-reduction.pdf) for fast solutions to linear systems.
In sequence, he showed connections of CCA with the [generalized eigenvalue problem](https://en.wikipedia.org/wiki/Eigendecomposition_of_a_matrix#Generalized_eigenvalue_problem):
computational bottleneck of this reduction is the exact computation of large matrix inverses.
one surpass this obstacle by using inexact linear system solvers, with warm start initialization for faster convergence rate.
Putting these pieces together, and with a careful error analysis, Sham showed global linear convergence rate guarantees
for the CCA problem.
For both cases, what emerges as a key factor is re-designing classic linear algebra routines using advances in linear system solvers.

As a last example, Sham succinctly described how basic non-convex gradient descent algorithms can be used for 
iteratively refining estimates of the matrix square root; see also [here](http://arxiv.org/abs/1507.08366).
Instead of taking square roots of eigenvalues---which assumes huge EVD computations in the large scale regime---the main 
idea is to directly optimize over the square root factor, which imputes non-convexity in the optimization.
This work is inspired by matrix factorization techniques, popularized by [SDP efficient solvers](http://www2.isye.gatech.edu/people/faculty/Renato_Monteiro/publications/tech_reports/lr.pdf) and later
used for non-convex low rank- or PSD- constrained optimization; see works [here](http://arxiv.org/abs/1507.03566), [here](https://arxiv.org/abs/1506.06081) for specific 
problem settings, as well [here](http://arxiv.org/abs/1509.03917), [here](https://arxiv.org/abs/1509.03025), and [here](https://arxiv.org/abs/1606.03168) for generic problem settings.

## Probing the Pareto frontier of computational-statistical tradeoffs

What is the optimal statistical performance we can achieve under limited computational budgets?
This is the question raised by [Zhaoran Wang](https://www.princeton.edu/~zhaoran/), Ph.D. student of [Han Liu](https://www.princeton.edu/~hanliu/people.html). 
He discussed the fundamental tradeoffs between computational efficiency and statistical accuracy in big data. 
In contrast to the common approach, where the hardness of statistical tasks is characterized by 
reductions from computationally hard problems (see for example [here](https://arxiv.org/pdf/1304.0828.pdf)), he presented a different path that establishes
a connection between computational "bugdets" and the intrinsic combinatorial structures of the problem
at hand. See [here](http://arxiv.org/abs/1512.08861).

The main idea is roughly as follows: the total number of rounds interacting with data is a good proxy for quantifying the algorithmic
complexity of statistical problems. Based on this intuition, the oracle model is defined by specifying
a protocol on the way algorithms interact with data.
For such an oracle computational model, Zhaoran introduced a systematic hypothesis-free 
approach for developing minimax lower bounds, mirroring the classical [Le Cam’s method](https://web.stanford.edu/class/stats311/Lectures/lec-03.pdf).
Under this framework, he sharply characterized the statistical-computational phase
transition for two testing problems, namely, "contaminated" mean detection and sparse principal component
analysis. 

For more information, see [here](http://arxiv.org/pdf/1512.08861v1.pdf).

## Provably faster, nonconvex variance reduced stochastic gradient descent

[Suvrit Sra](http://suvrit.de/) presented some of his recent findings on non-convex stochastic gradient methods.
See slides [here](https://www.dropbox.com/s/f8dp0zs65nupbiv/SuvritSra.pdf?dl=0). Stochastic gradient descent (SGD) is the *de facto* algorithm for most machine learning tasks, 
including empirical risk minimization (ERM) and deep learning. Stochasticity origins from the 
assumption of the *Incremental First-order Oracle* (IFO), where we only observe a randomly selected
data example per iteration to update our estimate. This "simplification" removes 
the dependence on the problem sample size $n$ from the analytical complexity of SGD 
(*i.e.*, assuming convexity, its complexity is $O(1/\epsilon^2)$, 
compared to $O(n/\epsilon)$ for standard gradient descent), but introduces variance (= error) in the gradient direction. 
Fortunately, by now we have witnessed a variety of variance-reduced SGD alternatives, such as 
[SVRG](http://papers.nips.cc/paper/4937-accelerating-stochastic-gradient-descent-using-predictive-variance-reduction.pdf), 
[SAG](https://arxiv.org/abs/1309.2388), [SAGA](https://papers.nips.cc/paper/5258-saga-a-fast-incremental-gradient-method-with-support-for-non-strongly-convex-composite-objectives.pdf), 
[S2GD](https://arxiv.org/abs/1312.1666), among others. In the particular case of SVRG, the complexity turns out to be
$O(n + \frac{\sqrt{n}}{\epsilon})$, *i.e.*, up to square root factors, we can turn the multiplicative dependence on 
$n$ and $\epsilon$ into additive.

Suvrit looks into such stochastic settings from a non-convex perspective:
while most problems of interest are convex (or forced to be such after "convexification"),
there are still several problems that are purely non-convex.
The most popularized example is that of training neural networks. What can we say for such cases?
Suvrit discussed how one can get fast non-convex optimization, when dealing 
with finite-sum objectives and uses variance-reduced SGD for optimization.
See [here](https://arxiv.org/pdf/1603.06160v2.pdf) for details. 
Assuming a different notion of $\epsilon$-approximate solution (convergence to global optimum is no 
longer guaranteed, of course), he shows similar improvements by using variance-reduced schemes, over
[standard non-convex SGD](http://arxiv.org/abs/1309.5549). In particular, one can show total complexity of
the order $O(n + \frac{n^{2/3}}{\epsilon})$ in order to achieve $\mathbb{E}[\|\nabla f(x)\|_2^2] \leq \epsilon$, as compared
to state of the art $O(\frac{n}{\epsilon})$. To accomplish this, he uses Lyapunov functions to measure expected 
descent, with a careful realization of the problem's parameters. As a bonus result, one can show
linear convergence to the *global* minimizer, assuming the [gradient dominated functions](http://www.mathnet.ru/links/810b79304e0b21bfcb241f8fa7b57f7f/zvmmf7813.pdf).

## Do algorithms believe in unicorns?

Consider the following problem: assume there is a given graph $G$ with $n$ vertices. 
Then, someone tells us that there is a unique [maximum clique](https://en.wikipedia.org/wiki/Clique_problem), planted in there, of size $k = n^{0.49}$
(but be careful, s/he might be lying!).
Such a clique can be characterized with a vector $w \in \{0, 1\}^n$, where $w_i = 1$ denotes that
node $i$ is in the clique; otherwise not.
TCS people (let's call them frequentists) most of the time are worried 
about devising efficient algorithms that find solutions $w$ within (as much as possible) reasonable time
and come with worst-case-scenario guarantees: the algorithm should have assurance for good performance
on a large subset of possible graphs (if not all). 

[Boaz Barak](http://www.boazbarak.org/) discussed such problems from a more Bayesian point of view. See also [this work](http://eccc.hpi-web.de/report/2016/058/) and [his blog post](http://www.boazbarak.org/Papers/bayesian.pdf)
for a more detailed description and discussion, than this blog post. In particular, he is interested in what happens
to the (whatever) knowledge an algorithm has gathered during his execution, even if the algorithm failed 
to provide an assured answer to the initial problem. As he mentions at his [blog post](http://www.boazbarak.org/Papers/bayesian.pdf), his ultimate goal is "...to
obtain general heuristic methods that, [...], would allow us to *predict* the right answer to many questions in complexity,
even if we can't rigorously prove it". This is inspired by classic methods used in machine learning, signal processing and optimization:
MCMC methods, gradient descent, etc. accumulate information as they progress, even if they are not that much close to the 
optimum solution. Going back to TCS problems (such as the planted clique problem),
it would might make sense for algorithms that are computationally bounded to--at least--assign a probability on events 
*e.g.*, "is node $w_i$ in the clique?", given the information they gathered so far, like number of edges, counting triangles, etc.
And this should apply even if the initial assumption (that there is a clique) is *not true*: the algorithm could 
still assign a probability to each node of the graph, even though the clique $w$ does not exist.
In other words, the algorithms would believe in unicorns and would have "beliefs" about *e.g.* their shape,
even if unicorns don't exist! Boaz and his colleagues propose using [Sum of Squares](https://blogs.princeton.edu/imabandit/2013/04/05/guest-post-by-amir-ali-ahmadi-sum-of-squares-sos-techniques-an-introduction-part-ii/) (SoS) algorithm as the method of
choice to define the different rules of inference, in order to define beliefs from algorithms (*i.e.*, probabilities) 
in a proper way. Overall, SoS captures the beliefs of all computationally bounded algorithm, it is a natural proof system -- relevant 
to low degree polynomials --- and tractable (compared to others).

## Slime molds and sparse recovery

I conclude this blog post with the presentation of [Nisheeth Vishnoi](http://theory.epfl.ch/vishnoi/Home.html).
Nisheeth has been studying connections between evolution in nature and complexity theory; see [here](http://www.offconvex.org/2015/12/21/dynamical-systems-1/), 
[here](http://www.offconvex.org/2016/03/07/evolution-markov-chains/) and [here](http://www.offconvex.org/2016/04/04/markov-chains-dynamical-systems/).
At our workshop, he presented two seemingly different dynamical systems and how they are connected:
The [*Physarum polycephalum*](https://en.wikipedia.org/wiki/Physarum_polycephalum) dynamics and the 
[Iterative Reweighted Least Squares](https://en.wikipedia.org/wiki/Iteratively_reweighted_least_squares) (IRLS) problem, 
which can also described as an discrete dynamical system.

Let's first start with IRLS: IRLS finds applications in sparse recovery, among others. In particular, consider the 
compressed sensing scenario, where we want to recover the ground truth unknown *sparse* vector that generated 
a few linear observations. As the name "compressed" suggests, the number of measurements
is not sufficient to naively solve the linear system of equations; something more clever needs to be done. 
IRLS is one way to accomplish this task (actually, is one methods out of a huge list of available solvers for compressed sensing - see also [here](http://dsp.rice.edu/cs)):
it can find the point of minimum $\ell_1$-norm in an affine subspace; see [here](https://web.stanford.edu/~boyd/papers/pdf/rwl1.pdf) for the $\ell_1$-norm reweighted case. 
The algorithm can be described as a sequence of re-weighted $\ell_2$-norm minimization subproblems, 
where the way we weigh the unknown coefficients depends on the solution from the previous iteration.
However, from a theoretical point of view, not many things are known regarding why the algorithm performs well in practice
(*e.g.*, no global convergence guarantee is known).

This is where the Physarum dynamics kick in: researchers in Japan showed that a slime mold can solve the shortest 
path problem; see [here](http://goose.ycp.edu/~kkleiner/fieldnaturalhistory/fnhimages/l12images/Maze-solving%20amoeboid.asp_files/cs_client_data/3636046.pdf)
and [here](https://www.youtube.com/watch?v=czk4xgdhdY4) for an impressive video.
The explanation why this happens resulted in a new dynamical system model, that found applications to many graph problems.
In his presentation, Nisheeth proposed an extension of the Physarum dynamics for solving the aforementioned compressed sensing problem.
After connecting the dynamics found in IRLS and Physarum slime mold, he presented a *global convergence* analysis 
for the Physarum dynamics, which further implies convergence guarantees for a damped version of IRLS.
Such a result can be considered as a first step towards understanding the mechanics behind IRLS, and, eventually,
finding the conditions under which it provably converges to the ground truth solution.