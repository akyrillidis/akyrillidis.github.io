---
layout: dirindex
fb_comments: 3
---

## Github available software packages

+ **Exploiting Low-Rank Structure in Max-K-Cut Problems (Python/PyTorch)**

  <img src="/public/maxkcut_hyper.png" width="220" align="right" style="margin-left:12px; margin-bottom:8px;">

  <a href="https://arxiv.org/abs/2602.20376"><button>Paper</button></a>
  <a href="https://github.com/barbara-su/MaxKCutParallel/tree/public-release"><button>Code</button></a>
  <a href="https://akyrillidis.github.io/explore-quantum/MaxKCut.html"><button>Blog #1: Overview</button></a>
  <a href="https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_GPU.html"><button>Blog #2: 15 GPUs</button></a>
  <a href="https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_Rank1.html"><button>Blog #3: Rank-1</button></a>
  <a href="https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_RandR2.html"><button>Blog #4: Rand Rank-2</button></a>
  <a href="https://akyrillidis.github.io/explore-quantum/LowRankMaxCut_DSatur.html"><button>Blog #5: Spectral vs Combinatorial</button></a>

  <p><i>Ria Stevens, Fangshuo Liao, Barbara Su, Jianqiang Li, Anastasios Kyrillidis</i></p>

  <p><i>We approach the Max-3-Cut problem through the lens of maximizing complex-valued quadratic forms and demonstrate that low-rank structure in the objective matrix can be exploited, leading to alternative algorithms to classical semidefinite programming (SDP) relaxations and heuristic techniques. We propose an algorithm for maximizing these quadratic forms over a domain of size K that enumerates and evaluates a set of O(n<sup>2r−1</sup>) candidate solutions, where n is the dimension of the matrix and r represents the rank of an approximation of the objective. We prove that this candidate set is guaranteed to include the exact maximizer when K=3 (corresponding to Max-3-Cut) and the objective is low-rank, and provide approximation guarantees when the objective is a perturbation of a low-rank matrix. This construction results in a family of novel, inherently parallelizable and theoretically-motivated algorithms for Max-3-Cut. Extensive experimental results demonstrate that our approach achieves performance comparable to existing algorithms across a wide range of graphs, while being highly scalable.</i></p>

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