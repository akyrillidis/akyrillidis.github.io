---
layout: dirindex
fb_comments: 3
---

## Github available software packages

+ **ORAT: One Rank at a Time &mdash; Cascading Error Dynamics in Sequential Learning (Python / NumPy / SciPy)**

  <img src="https://akyrillidis.github.io/aiowls/assets/img/one_rank_thumbnail.svg" width="220" align="right" style="margin-left:12px; margin-bottom:8px;">

  <a href="https://arxiv.org/abs/2505.22602"><button>Paper</button></a>
  <a href="https://github.com/MahiAV/ORAT"><button>Code</button></a>
  <a href="https://akyrillidis.github.io/aiowls/one_rank_at_a_time.html"><button>Blog</button></a>

  <p><i>Mahtab Alizadeh Vandchali, Fangshuo (Jasper) Liao, Anastasios Kyrillidis. Transactions on Machine Learning Research (TMLR), 2026 (in press). arXiv:2505.22602.</i></p>

  <p><i>When low-rank models are fit one rank-1 component at a time &mdash; the canonical mode of LoRA fine-tuning, deflation PCA, and orthogonal matching pursuit &mdash; per-step numerical errors compound geometrically through every later step. The amplification is governed by the spectral gaps of the output matrix <strong>Y</strong>. We prove this for fixed-design linear regression (three theorems on training error, noiseless parameter recovery, and Gaussian-noise recovery) and derive a one-parameter family of compute-allocation schedules; the "more-first" schedule with &alpha;&nbsp;&asymp;&nbsp;1.5 saturates the empirical optimum. Exploratory probes on vision LoRA (MNIST / CIFAR-10 / CIFAR-100) and language LoRA (DistilBERT / SST-2) show the qualitative pattern transfers across domains. The first sequential rank-1 component on SST-2 already matches jointly trained rank-3 LoRA at 0.872 accuracy. Honest scope: an explanatory framework, not a benchmark-beating method.</i></p>

---

+ **AIR: Asymmetric Input Recurrence &mdash; One Model, Two Roles in a Shared Recurrent Transformer (Python/PyTorch)**

  <img src="https://akyrillidis.github.io/aiowls/assets/img/air_thumbnail.svg" width="220" align="right" style="margin-left:12px; margin-bottom:8px;">

  <a href="https://arxiv.org/abs/2605.17811"><button>Paper</button></a>
  <a href="https://github.com/juchengshen/air"><button>Code</button></a>
  <a href="https://akyrillidis.github.io/aiowls/asymmetric_input.html"><button>Blog</button></a>

  <p><i>Jucheng Shen, Barbara Su, Anastasios Kyrillidis. Preprint, arXiv:2605.17811, 2026.</i></p>

  <p><i>Can a shared-weight recurrent Transformer develop distinct internal roles without being partitioned into separate modules? AIR is a minimal two-state reasoning architecture in which the <em>same</em> Transformer block is reused for both updates, and the only built-in asymmetry is that the encoded input is injected during L-updates but not H-updates. Across Sudoku-Extreme and 30&times;30 mazes, decoded rollouts show a stable split: <strong>z<sub>H</sub></strong> behaves like a fully-committed proposal state while <strong>z<sub>L</sub></strong> retains local uncertainty and shifting intermediate structure. Freeze experiments confirm the two states are coupled (collapsing either drops final accuracy to zero), and attention analysis shows L-updates are ~47% more local than H-updates at the deepest layer. With half the parameters of the two-network HRM baseline, AIR matches or exceeds it on both tasks (60.0% vs 55.0% on Sudoku, 75.6% vs 74.5% on Maze). A level-token control further shows the load-bearing requirement is a structurally separable state-identity signal, not input injection specifically.</i></p>

---

+ **AdaPaD: Adaptive Parallel Deflation for PEFT with Self-Correcting Rank Discovery (Python/PyTorch)**

  <img src="https://akyrillidis.github.io/aiowls/assets/img/adapad_thumbnail.svg" width="220" align="right" style="margin-left:12px; margin-bottom:8px;">

  <a href="https://arxiv.org/abs/2605.10741"><button>Paper</button></a>
  <a href="https://github.com/barbara-su/ParallelLinearRegression"><button>Code</button></a>
  <a href="https://akyrillidis.github.io/aiowls/adapad.html"><button>Blog</button></a>

  <p><i>Barbara Su, Fangshuo (Jasper) Liao, Anastasios Kyrillidis. Preprint, arXiv:2605.10741, 2026.</i></p>

  <p><i>For ninety-two years the convention has been to extract rank-one components sequentially &mdash; Hotelling's 1933 deflation, in essence. We show that running all r workers in parallel, with each worker rebuilding its deflation target from the latest estimates of its predecessors every round, makes the deflation mismatch vanish exponentially rather than freezing at predecessor finish. The proof carries from PCA to bilinear regression &mdash; the setting that underlies LoRA &mdash; via Wedin's theorem. On top of the parallel backbone, AdaPaD adds advance learning and per-module dynamic rank discovery, so the rank distribution is an output rather than an input. On the eight tasks of GLUE with DeBERTaV3-base at matched 0.34M-parameter budget, AdaPaD achieves the best average score (89.34); on four H200 GPUs at rank 64, the per-batch wall-clock speedup is 3.62&times;.</i></p>

---

+ **GHOST: Grouped Hidden-state Output-aware Selection and Truncation &mdash; State Pruning for Mamba2 Selective State-Space Models (Python/PyTorch)**

  <img src="https://akyrillidis.github.io/aiowls/assets/img/ghost_main_diagram.png" width="220" align="right" style="margin-left:12px; margin-bottom:8px;">

  <a href="https://arxiv.org/abs/2602.11408"><button>Paper</button></a>
  <a href="https://github.com/Menezmic21/mamba2_ghost"><button>Code</button></a>
  <a href="https://akyrillidis.github.io/aiowls/ghost_mamba2.html"><button>Blog</button></a>

  <p><i>Michael Menezes, Anastasios Kyrillidis. ICML 2026 (Seoul).</i></p>

  <p><i>While Mamba2's expanded state dimension enhances temporal modeling, it incurs substantial inference overhead that saturates bandwidth during autoregressive generation. Standard pruning methods fail to address this bottleneck: unstructured sparsity leaves activations dense, magnitude-based selection ignores runtime dynamics, and gradient-based methods impose prohibitive costs. We introduce GHOST (Grouped Hidden-state Output-aware Selection and Truncation), a structured pruning framework that approximates control-theoretic balanced truncation using only forward-pass statistics. By jointly measuring controllability and observability, GHOST rivals the fidelity of gradient-based methods without requiring backpropagation. On models ranging from 130M to 2.7B parameters, our approach achieves a 50% state-dimension reduction with approximately 1 perplexity point increase on WikiText-2.</i></p>

---

+ **Stochastic Self-Stabilization at the Edge of Stability (Python/PyTorch)**

  <img src="https://akyrillidis.github.io/aiowls/assets/img/seos_fig1_trajectories.png" width="220" align="right" style="margin-left:12px; margin-bottom:8px;">

  <a href="https://arxiv.org/abs/2604.21016"><button>Paper</button></a>
  <a href="https://github.com/akyrillidis/stochastic-eos"><button>Code</button></a>
  <a href="https://akyrillidis.github.io/aiowls/stochastic_self_stabilization.html"><button>Blog</button></a>

  <p><i>Fangshuo (Jasper) Liao, Afroditi Kolomvaki, Anastasios Kyrillidis.</i></p>

  <p><i>Train a neural network with full-batch gradient descent and the largest eigenvalue of its loss Hessian &mdash; the sharpness &mdash; climbs to a specific value, 2/&eta;, and pins itself there: the well-known Edge of Stability. Replace gradient descent with mini-batch SGD and the same quantity sits below 2/&eta;, with the gap widening as the batch shrinks. We close this. Our analysis extends Damian's coupling theorem to the stochastic case and yields a closed-form sharpness gap &Delta;S &asymp; (&eta;&beta;&sigma;<sub>u</sub><sup>2</sup>)/(4&alpha;), inversely proportional to batch size and depending on three landscape quantities &mdash; progressive sharpening rate &alpha;, self-stabilisation strength &beta;, and the noise variance projected onto the top Hessian eigenvector. Experiments on CIFAR-10 confirm the 1/b scaling (fitted slope &minus;1.27, R<sup>2</sup> = 0.98) across MLP and small-CNN architectures.</i></p>

---

+ **Multiplicative Gaussian Input Noise for Two-Layer ReLU Networks (Python/PyTorch)**

  <img src="https://akyrillidis.github.io/aiowls/assets/img/mgi_thumbnail.png" width="220" align="right" style="margin-left:12px; margin-bottom:8px;">

  <a href="https://arxiv.org/abs/2602.17423"><button>Paper</button></a>
  <a href="https://github.com/akyrillidis/multiplicative-gaussian-input-noise"><button>Code</button></a>
  <a href="https://akyrillidis.github.io/aiowls/multiplicative_gaussian_input.html"><button>Blog</button></a>

  <p><i>Afroditi Kolomvaki, Fangshuo (Jasper) Liao, Evan Dramko, Ziyun Guang, Anastasios Kyrillidis.</i></p>

  <p><i>What happens when every input to a two-layer ReLU network is multiplied by an independent Gaussian random number &mdash; centered at 1, standard deviation &kappa;, with a fresh draw at every iteration? The training loss does not blow up: it converges linearly to a target whose distance from the global minimum we can write down as a function of &kappa;, the network width m, and the number of samples n. The technical move is a closed-form expectation: when the argument of a ReLU is Gaussian, the expected output has a clean expression z&middot;&Phi;(z/&sigma;) + &sigma;&middot;&phi;(z/&sigma;). Plugged back into the loss, the expected loss decomposes into a smoothed-network MSE plus a &kappa;<sup>2</sup>-scaled regularizer, both clean enough to admit an NTK-style convergence proof. Underneath the result is a general SGD theorem for biased gradient estimators with a relaxed smoothness condition.</i></p>

---

+ **Exploiting Low-Rank Structure in Max-K-Cut Problems (Python/PyTorch)**

  <img src="/public/maxkcut_hyper.png" width="220" align="right" style="margin-left:12px; margin-bottom:8px;">

  <a href="https://arxiv.org/abs/2602.20376"><button>Paper</button></a>
  <a href="https://github.com/barbara-su/MaxKCutParallel/tree/public-release"><button>Code</button></a>
  <br><br>
  <a href="https://akyrillidis.github.io/explore-quantum/MaxKCut.html"><button>Blog #1: Overview</button></a>
  <a href="https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_GPU.html"><button>Blog #2: 15 GPUs</button></a>
  <a href="https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_Rank1.html"><button>Blog #3: Rank-1</button></a>
  <br><br>
  <a href="https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_RandR2.html"><button>Blog #4: Rand Rank-2</button></a>
  <br><br>
  <a href="https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_DSatur.html"><button>Blog #5: Spectral vs Combinatorial</button></a>

  <p><i>Ria Stevens, Fangshuo Liao, Barbara Su, Jianqiang Li, Anastasios Kyrillidis</i></p>

  <p><i>We approach the Max-3-Cut problem through the lens of maximizing complex-valued quadratic forms and demonstrate that low-rank structure in the objective matrix can be exploited, leading to alternative algorithms to classical semidefinite programming (SDP) relaxations and heuristic techniques. We propose an algorithm for maximizing these quadratic forms over a domain of size K that enumerates and evaluates a set of O(n<sup>2r−1</sup>) candidate solutions, where n is the dimension of the matrix and r represents the rank of an approximation of the objective. We prove that this candidate set is guaranteed to include the exact maximizer when K=3 (corresponding to Max-3-Cut) and the objective is low-rank, and provide approximation guarantees when the objective is a perturbation of a low-rank matrix. This construction results in a family of novel, inherently parallelizable and theoretically-motivated algorithms for Max-3-Cut. Extensive experimental results demonstrate that our approach achieves performance comparable to existing algorithms across a wide range of graphs, while being highly scalable.</i></p>

---

+ **Provable Model-Parallel Distributed PCA with Parallel Deflation (Python/PyTorch)**

  <img src="https://akyrillidis.github.io/aiowls/assets/img/ParallelDeflationDiagram.png" width="220" align="right" style="margin-left:12px; margin-bottom:8px;">

  <a href="https://openreview.net/pdf?id=n3SpSUzGi0"><button>Paper</button></a>
  <a href="https://github.com/JLiao980706/ParallelDeflation"><button>Code</button></a>
  <a href="https://akyrillidis.github.io/aiowls/parallel_deflation.html"><button>Blog</button></a>

  <p><i>Fangshuo (Jasper) Liao, Wenyi Su, Anastasios Kyrillidis. CPAL 2025.</i></p>

  <p><i>We introduce Parallel Deflation, a distributed PCA framework where K workers compute all K principal components simultaneously, with no sequential dependencies. Unlike prior approaches that require components to be extracted one at a time, our method provides the first provable convergence guarantees for model-parallel PCA: each component converges at a geometric rate that depends on the spectral gap, and crucially, errors from early imprecise estimates self-correct as later components improve. The algorithm achieves substantial speedups over sequential deflation while maintaining theoretical optimality, with applications including LoRA fine-tuning and large-scale matrix factorization.</i></p>

---

## Code packages (*before moving to Github*)

+ **(Bi-) Factored Gradient Descent algorithm for low-rank recovery (Matlab)**
  
  <!---<button id="b_des_s8"> Description </button>-->
  <button id="b_dow_s8"> Download </button>
  <button id="b_pap_s8"> Paper </button>
   <p id="des_s8"> <i> This software package is a proof of concept for $UV^\top$ parameterization 
   in optimization and focuses on first-order, gradient descent algorithmic solutions for the case
   of matrix sensing. The algorithm proposed is named as Bi-Factored Gradient Descent (BFGD) algorithm, 
   an efficient first-order method that operates on the $U, V$ factors. 
   
   Subsequent versions will include more involved applications such as 1-bit matrix completion (logistic
   regression objective), low-rank image recovery from limited measurements, quantum state tomography
   settings, etc.   
    </i> </p>

+ **A simple, but yet efficient, algorithm for Bipartite Correlation Clustering (Matlab)**
  
  <!---<button id="b_des_s10"> Description </button>-->
  <button id="b_dow_s10"> Download </button>
  <button id="b_pap_s10"> Paper </button>
   <p id="des_s10"> <i> In this code, we implement a simple, yet efficient, algorithm for the problem
   of Bipartite Correlation Clustering (BCC). Our algorithm solves a more generalized problem of 
   maximizing a bilinear form, a specific instance of which is the BCC problem. In the demo included,
   we run our algorithm on a small movie lense dataset, in order to automatically extract useful clusters
   between users that have similar movie preferences.
    </i> </p>


+ **ALgebraic PursuitS (ALPS) for sparse signal recovery (Matlab)**
  
  <!---<button id="b_des_s1"> Description </button>-->
  <button id="b_dow_s1"> Download </button>
  <button id="b_pap_s1"> Paper </button>
   <p id="des_s1"> <i> This software package implements the ALgebraic PursuitS class of methods for sparse signal recovery.
   ALPS framework includes some of the fastest Iterative Hard Thresholding (IHT) variants, 
   utilizing optimal subspace exploration, cheap and adaptive step size selection and Nesterov-style accelerations.
   ALPS are also backed with strong theoretical guarantees, based on RIP assumptions in compressed sensing settings.
    </i> </p>
   
   
+ **Matrix ALgebraic PursuitS (Matrix ALPS) for low rank recovery (Matlab)**
  
  <!---<button id="b_des_s2"> Description </button>-->
  <button id="b_dow_s2"> Download </button>
  <button id="b_pap_s2"> Paper </button>
   <p id="des_s2"> <i> This software package implements the Matrix ALgebraic PursuitS class of methods for low rank recovery.
   This set of problems includes the affine rank minimization, matrix completion and PCA settings.
   Similar to the vectors case, the Matrix ALPS framework includes some of the fastest Iterative Hard Thresholding (IHT) variants
   for low rank matrix reconstruction, 
   utilizing optimal subspace exploration, cheap and adaptive step size selection and Nesterov-style accelerations.
   Matrix ALPS are also backed with strong theoretical guarantees, based on RIP assumptions in compressed sensing settings.
    </i> </p>
   

+ **Matrix ALgebraic PursuitS (Matrix ALPS) for low rank + sparse recovery (Matlab)**
  
  <!---<button id="b_des_s3"> Description </button>-->
  <button id="b_dow_s3"> Download </button>
  <button id="b_pap_s3"> Paper </button>
   <p id="des_s3"> <i> This software package is the extension of the Matrix ALPS software package for the case of
   low rank and sparse recovery. Applications include background video subtraction and robust PCA, among others.
    </i> </p>
    
+ **Self-Concordant OPTimization (SCOPT) for composite convex problems (Matlab)**
  
  <!---<button id="b_des_s4"> Description </button>-->
  <button id="b_dow_s4"> Link to software </button>
  <button id="b_pap_s4a"> Paper #1</button>
  <button id="b_pap_s4b"> Paper #2</button>
   <p id="des_s4"> <i> SCOPT is a MATLAB implementation of the proximal gradient, proximal 
   quasi-Newton, proximal Newton, and path-following interior-point algorithms for solving 
   composite convex minimization problems involving self-concordant and self-concordant-like functions.
    </i> </p>
    
+ **CLASH and Normed Pursuits: Hard thresholding with norm constraints (Matlab)**
  
  <!---<button id="b_des_s13"> Description </button>-->
  <button id="b_dow_s13"> Download </button>
  <button id="b_pap_s13a"> Paper #1</button>
  <button id="b_pap_s13b"> Paper #2</button>
   <p id="des_s13"> <i> CLASH (Combinatorial selection and Least Absolute SHrinkage) and 
      Normed Pursuits are new sparse signal approximation algorithm that leverages prior 
      information beyond sparsity to obtain approximate solutions to the Lasso problem. 
      These algorithms alters the selection process of Lasso algorithm by exploiting 
      additional signal structure, dubbed as combinatorial sparsity model, and introduces 
      approximate combinatorial selection with provable convergence guarantees.
    </i> </p>    
    
    
+ **Sparse projections onto the simplex (Matlab)**
    
   <!---<button id="b_des_s12"> Description </button>-->
  <button id="b_dow_s12"> Download </button>
  <button id="b_pap_s12"> Paper </button>
   <p id="des_s12"> <i> In this snippet of code, we compute sparse projections onto the simplex.
   Our approach is greedy, i.e., sequentially and greedily we construct the solution that $(i)$
   minimizes the euclidean distance to an anchor given point, $(ii)$ "lives" on the simplex and, 
   $(iii)$ is $k$-sparse. (The code is to be updated with some demo files).
    </i> </p>
    
     
+ **Provable deterministic leverage scores sampling (Matlab)**

  <!---<button id="b_des_s11"> Description </button>-->
  <button id="b_dow_s11"> Download </button>
  <button id="b_pap_s11"> Paper </button>
   <p id="des_s11"> <i> Here, we explain in practice the curious empirical phenomenon: 
    “Approximating a matrix by deterministically selecting a subset of its columns with 
    the corresponding largest leverage scores results in a good low-rank matrix surrogate”. 
    In this demo, we demonstrate empirically the 
    performance of deterministic leverage score sampling, which many times
    matches or outperforms the state-of-the-art techniques.
    </i> </p>
    
+ **Generalized Sparse Additive Models (GSPAM) with interactions in high-dimensions (Matlab)**

  <!---<button id="b_des_s9"> Description </button>-->
  <button id="b_dow_s9"> Download </button>
  <button id="b_pap_s9"> Paper </button>
   <p id="des_s9"> <i> This software package solves a d-dimensional GSPAM instance, where
   univariate and bivariate set of indices ($S_1$ and $S_2$, respectively) are unknowns. 
   The code follows the steps indicated by the main algorithm, described in the conference paper.
    </i> </p>
    
+ **Expanders and group sparse recovery (Matlab)**

  <!---<button id="b_des_s5"> Description </button>-->
  <button id="b_dow_s5"> Download </button>
  <button id="b_pap_s5"> Paper </button>
   <p id="des_s5"> <i> Proof of concept why expanders accelerate execution time of convex solvers for group sparse
   recovery. The problem setting is that of group sparse convex norm minimization over linear constraints.
   The experiments include both synthetic and real data settings. 
    </i> </p>
    
+ **Finding the M-PSK vector that maximizes a rank-deficient complex quadratic form (Matlab)**

  <!---<button id="b_des_s6"> Description </button>-->
  <button id="b_dow_s6"> Download </button>
  <button id="b_pap_s6"> Paper </button>
   <p id="des_s6"> <i> Given a rank-deficient PSD complex matrix as an input, computes the 
   polynomial-sized set of candidate M-PSK solutions, among which the
   optimal M-PSK vector --that maximizes the rank-deficient quadratic form-- lies. 
  </i> </p>
  
+ **Multiway (tensor) compressed sensing for sparse and low rank tensors (Matlab)**

  <!---<button id="b_des_s7"> Description </button>-->
  <button id="b_dow_s7"> Download </button>
  <button id="b_pap_s7"> Paper </button>
   <p id="des_s7"> <i> In this contribution, we consider
	compressed sensing for sparse and low-rank tensors. More specifically,
	we consider low-rank tensors synthesized as sums of outer products
	of sparse loading vectors, and a special class of linear dimensionality-reducing
	transformations that reduce each mode individually. We prove
	interesting "oracle" properties showing that it is possible to identify
	the uncompressed sparse loadings directly from the compressed tensor data.
	
	This Matlab demo works as a proof of concept for the main ideas in the paper.
  </i> </p>  