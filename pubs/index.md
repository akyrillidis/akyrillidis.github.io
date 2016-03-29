---
layout: dirindex
fb_comments: 3
---

## Journals
+ Quoc Tran Dinh, Anastasios Kyrillidis and Volkan Cevher, [*``Composite self-concordant minimization"*](/pubs/Journals/TranDinhKyrillidisCevher_ComSelfMin2013.pdf), Journal of Machine Learning Research, 16(Mar):371−416, 2015.
  
  <button id="b_abs_j6"> Abstract </button>
  <button id="b_bib_j6"> Bibtex </button>
  <button id="b_pre_j6"> Presentation </button>
  <button id="b_pos_j6"> Poster </button>
   <p id="abs_j6"> <i> We propose a variable metric framework for minimizing the sum of a self-concordant function and a possibly non-smooth convex 
function, endowed with an easily computable proximal operator. We theoretically establish the convergence of our framework 
without relying on the usual Lipschitz gradient assumption on the smooth part. An important highlight of our work is a new 
set of analytic step-size selection and correction procedures based on the structure of the problem. We describe concrete 
algorithmic instances of our framework for several interesting applications and demonstrate them numerically on both 
synthetic and real data. </i> </p>
   
   <pre id="bib_j6"><samp>
   		@article{tran2015composite,
  		  		 title={Composite Self-Concordant Minimization},
		  	     author={Tran-Dinh, Quoc and Kyrillidis, Anastasios and Cevher, Volkan},
	    		 journal={Journal of Machine Learning Research},
			     volume={16},
			     pages={371--416},
			     year={2015}
		}
   </samp></pre>
   
+ Michail Vlachos, Nikolaos Freris and Anastasios Kyrillidis, [*``Compressive mining: fast and optimal data mining in the compressed domain"*](/pubs/Journals/optimalBounds_VLDB.pdf), Very Large Data Bases (VLDB) Journal, Volume 24 Issue 1, February 2015.

  <button id="b_abs_j5"> Abstract </button>
  <button id="b_bib_j5"> Bibtex </button>
  <p id="abs_j5"> <i> Real-world data typically contain repeated and periodic patterns. This suggests that they 
  can be effectively represented and compressed using only a few coefficients of an appropriate basis (e.g., 
  Fourier and wavelets). However, distance estimation when the data are represented using different sets of 
  coefficients is still a largely unexplored area. This work studies the optimization problems related to 
  obtaining the tightest lower/upper bound on Euclidean distances when each data object is potentially compressed 
  using a different set of orthonormal coefficients. Our technique leads to tighter distance estimates, which 
  translates into more accurate search, learning and mining operations directly in the compressed domain. We 
  formulate the problem of estimating lower/upper distance bounds as an optimization problem. We establish 
  the properties of optimal solutions and leverage the theoretical analysis to develop a fast algorithm to 
  obtain an exact solution to the problem. The suggested solution provides the tightest estimation of the 
  Euclidean norm or the correlation. We show that typical data analysis operations, such as nearest-neighbor 
  search or k-Means clustering, can operate more accurately using the proposed compression 
  and distance reconstruction technique. We compare it with many other prevalent compression and 
  reconstruction techniques, including random projections and PCA-based techniques. We highlight a 
  surprising result, namely that when the data are highly sparse in some basis, our technique may 
  even outperform PCA-based compression. The contributions of this work are generic as our methodology 
  is applicable to any sequential or high-dimensional data as well as to any orthogonal data transformation 
  used for the underlying data compression scheme. </i> </p>
   
   <pre id="bib_j5"><samp>
   		@article{vlachos2015compressive,
  				 title={Compressive mining: fast and optimal data mining in the compressed domain},
  				 author={Vlachos, Michail and Freris, Nikolaos M and Kyrillidis, Anastasios},
			     journal={The VLDB Journal—The International Journal on Very Large Data Bases},
  				 volume={24},
  				 number={1},
  			 	 pages={1--24},
  				 year={2015},
  				 publisher={Springer-Verlag New York, Inc.}
		}
   </samp></pre>

+ Quoc Tran-Dinh, Anastasios Kyrillidis and Volkan Cevher, [*``An inexact proximal path-following algorithm for constrained convex minimization"*](/pubs/Journals/TranDinh_etal_PFPN_2013.pdf), SIAM Journal on Optimization (SIOPT), vol. 24, num. 4, p. 1718-1745, 2014.

  <button id="b_abs_j4"> Abstract </button>
  <button id="b_bib_j4"> Bibtex </button>
  <p id="abs_j4"> <i> Many scientific and engineering applications feature nonsmooth convex minimization 
  problems over convex sets. In this paper, we address an important instance of this broad class where we 
  assume that the nonsmooth objective is equipped with a tractable proximity operator and that the convex 
  constraint set affords a self-concordant barrier. We provide a new joint treatment of proximal and 
  self-concordant barrier concepts and illustrate that such problems can be efficiently solved, without 
  the need of lifting the problem dimensions, as in disciplined convex optimization approach. We propose 
  an inexact path-following algorithmic framework and theoretically characterize the worst-case analytical 
  complexity of this framework when the proximal subproblems are solved inexactly. To show the merits 
  of our framework, we apply its instances to both synthetic and real-world applications, where it shows 
  advantages over standard interior point methods. As a byproduct, we describe how our framework can 
  obtain points on the Pareto frontier of regularized problems with self-concordant objectives in a 
  tuning free fashion. </i> </p>

  <pre id="bib_j4"><samp>
   		@article{tran2014inexact,
  				 title={An inexact proximal path-following algorithm for constrained convex minimization},
			     author={Tran-Dinh, Quoc and Kyrillidis, Anastasios and Cevher, Volkan},
 				 journal={SIAM Journal on Optimization},
 				 volume={24},
 				 number={4},
 				 pages={1718--1745},
 				 year={2014},
 				 publisher={SIAM}
		}
   </samp></pre>
   
+ Anastasios Kyrillidis and George. N. Karystinos, [*``Fixed-rank Rayleigh quotient maximization by an M-PSK sequence"*](/pubs/Journals/05_journal_rankDcomplex_final_v21.pdf), IEEE Trans. on Communications, Volume:62, Issue:3, pages 961-975, 2014.

  <button id="b_abs_j3"> Abstract </button>
  <button id="b_bib_j3"> Bibtex </button>
  <p id="abs_j3"> <i> Certain optimization problems in communication systems, such as limited-feedback 
  constant-envelope beamforming or noncoherent M-ary phase-shift keying (MPSK) sequence detection, result 
  in the maximization of a fixed-rank positive semidefinite quadratic form over the MPSK alphabet. 
  This form is a special case of the Rayleigh quotient of a matrix and, in general, its maximization 
  by an MPSK sequence is NP-hard. However, if the rank of the matrix is not a function of its size, then 
  the optimal solution can be computed with polynomial complexity in the matrix size. In this work, 
  we develop a new technique to efficiently solve this problem by utilizing auxiliary continuous-valued 
  angles and partitioning the resulting continuous space of solutions into a polynomial-size set of 
  regions, each of which corresponds to a distinct MPSK sequence. The sequence that maximizes the 
  Rayleigh quotient is shown to belong to this polynomial-size set of sequences, thus efficiently 
  reducing the size of the feasible set from exponential to polynomial. Based on this analysis, we 
  also develop an algorithm that constructs this set in polynomial time and show that it is fully 
  parallelizable, memory efficient, and rank scalable. The proposed algorithm compares favorably with 
  other solvers for this problem that have appeared recently in the literature. </i> </p>
    
  <pre id="bib_j3"><samp>
  		@article{kyrillidis2014fixed,
  				 title={Fixed-rank Rayleigh quotient maximization by an MPSK sequence},
 				 author={Kyrillidis, Anastasios and Karystinos, George N},
 				 journal={Communications, IEEE Transactions on},
 				 volume={62},
 				 number={3},
 				 pages={961--975},
 				 year={2014},
 				 publisher={IEEE}
		}
  </samp></pre>
  
+ Anastasios Kyrillidis and Volkan Cevher, [*``Matrix recipes for hard thresholding methods"*](/pubs/Journals/MatrixALPS_JMVI_v2.pdf), Journal of Mathematical Imaging and Vision (JMIV), April 2013, Springer.

  <button id="b_abs_j2"> Abstract </button>
  <button id="b_bib_j2"> Bibtex </button>
  <p id="abs_j2"> <i> In this paper, we present and analyze a new set of low-rank recovery algorithms for 
  linear inverse problems within the class of hard thresholding methods. We provide strategies on how 
  to set up these algorithms via basic ingredients for different configurations to achieve complexity 
  vs. accuracy tradeoffs. Moreover, we study acceleration schemes via memory-based techniques and 
  randomized, ϵ-approximate matrix projections to decrease the computational costs in the recovery 
  process. For most of the configurations, we present theoretical analysis that guarantees convergence 
  under mild problem conditions. Simulation results demonstrate notable performance improvements as 
  compared to state-of-the-art algorithms both in terms of reconstruction accuracy and computational 
  complexity. </i> </p>
    
  <pre id="bib_j2"><samp>
  		@article{kyrillidis2014matrix,
  				 title={Matrix recipes for hard thresholding methods},
 				 author={Kyrillidis, Anastasios and Cevher, Volkan},
 				 journal={Journal of mathematical imaging and vision},
 				 volume={48},
 				 number={2},
 				 pages={235--265},
 				 year={2014},
	 			 publisher={Springer}
		}
  </samp></pre>
  
+ Nikolaos D. Sidiropoulos and Anastasios Kyrillidis, [*``Multi-way compressed sensing for sparse low rank tensors"*](/pubs/Journals/MWCSR1twocol.pdf), IEEE Signal Processing Letters, 19(11):757-760, Oct. 2012.

  <button id="b_abs_j1"> Abstract </button>
  <button id="b_bib_j1"> Bibtex </button>
  <p id="abs_j1"> <i> For linear models, compressed sensing theory and methods enable recovery of 
  sparse signals of interest from few measurements - in the order of the number of nonzero
  entries as opposed to the length of the signal of interest. Results of similar flavor have more 
  recently emerged for bilinear models, but no results are available for multilinear models of 
  tensor data. In this contribution, we consider compressed sensing for sparse and low-rank 
  tensors. More specifically, we consider low-rank tensors synthesized as sums of outer products 
  of sparse loading vectors, and a special class of linear dimensionality-reducing transformations 
  that reduce each mode individually. We prove interesting `oracle' properties showing that it 
  is possible to identify the uncompressed sparse loadings directly from the compressed tensor 
  data. The proofs naturally suggest a two-step recovery process: fitting a low-rank model 
  in compressed domain, followed by per-mode $\ell_0$ / $\ell_1$ de-compression. This two-step
  process is also appealing from a computational complexity and memory capacity point of view, 
  especially for big tensor datasets. </i> </p>
 
  <pre id="bib_j1"><samp>
  		@article{sidiropoulos2012multi,
 				 title={Multi-way compressed sensing for sparse low-rank tensors},
 				 author={Sidiropoulos, Nicholas D and Kyrillidis, Anastasios},
 				 journal={Signal Processing Letters, IEEE},
 				 volume={19},
 				 number={11},
 				 pages={757--760},
 				 year={2012},
 				 publisher={IEEE}
		}
  </samp></pre>
  
## Conference papers
+ Anastasios Kyrillidis, Bubacarr Bah, Rouzbeh Hasheminezhad, Quoc Tran-Dinh, Luca Baldassarre, and Volkan Cevher, [*``Convex block-sparse linear regression with expanders, provably"*](), AI & Statistics Conference (AISTATS), 2016.

  <button id="b_abs_c1"> Abstract </button>
  <button id="b_bib_c1"> Bibtex </button>
  <p id="abs_c1"> <i> For linear models, compressed sensing theory and methods enable recovery of 
  sparse signals of interest from few measurements - in the order of the number of nonzero
  entries as opposed to the length of the signal of interest. Results of similar flavor have more 
  recently emerged for bilinear models, but no results are available for multilinear models of 
  tensor data. In this contribution, we consider compressed sensing for sparse and low-rank 
  tensors. More specifically, we consider low-rank tensors synthesized as sums of outer products 
  of sparse loading vectors, and a special class of linear dimensionality-reducing transformations 
  that reduce each mode individually. We prove interesting `oracle' properties showing that it 
  is possible to identify the uncompressed sparse loadings directly from the compressed tensor 
  data. The proofs naturally suggest a two-step recovery process: fitting a low-rank model 
  in compressed domain, followed by per-mode $\ell_0$ / $\ell_1$ de-compression. This two-step
  process is also appealing from a computational complexity and memory capacity point of view, 
  especially for big tensor datasets. </i> </p>
 
  <pre id="bib_c1"><samp>
  		@article{sidiropoulos2012multi,
 				 title={Multi-way compressed sensing for sparse low-rank tensors},
 				 author={Sidiropoulos, Nicholas D and Kyrillidis, Anastasios},
 				 journal={Signal Processing Letters, IEEE},
 				 volume={19},
 				 number={11},
 				 pages={757--760},
 				 year={2012},
 				 publisher={IEEE}
		}
  </samp></pre>
  
+ Hemant Tyagi, Anastasios Kyrillidis, Bernd Gartner, and Andreas Krause, [*``Learning sparse additive models with interactions in high dimensions"*](), AI & Statistics Conference (AISTATS), 2016.
+ Megasthenis Asteris, Anastasios Kyrillidis, Dimitris Papailiopoulos, and Alex Dimakis, [*``Bipartite correlation clustering -- Maximizing agreements"*](), AI & Statistics Conference (AISTATS), 2016.
+ Megasthenis Asteris, Dimitris Papailiopoulos, Anastasios Kyrillidis, and Alex Dimakis, [*``Space PCA via bipartite matchings"*](/pubs/Conferences/Sparse_PCA_Bipartite.pdf), Neural Information Processing Systems (NIPS), 2015.
+ Megasthenis Asteris, Anastasios Kyrillidis, Alex Dimakis, Han-Gyol Yi and Bharath Chandrasekaran, [*``Stay on path: PCA along graph paths"*](/pubs/Conferences/Stay_on_path.pdf),  International Conference on Machine Learning (ICML), 2015.
+ Michail Vlachos, Francesco Fusco, Harry Mavroforakis, Anastasios Kyrillidis and Vassilis Vasileiadis, [*``Scalable and robust co-clustering of large customer-product graphs"*](/pubs/Conferences/km0049-vlachosA.pdf), ACM CIKM International Conference on Information and Knowledge Management, 2014.
+ Dimitris Papailiopoulos, Anastasios Kyrillidis and Christos Boutsidis, [*``Provable deterministic leverage scores sampling"*](/pubs/Conferences/frp0826.pdf), ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2014.
+ Anastasios Kyrillidis, Rabeeh Karimi Mahabadi, Quoc Tran-Dinh and Volkan Cevher, [*``Scalable sparse covariance estimation via self-concordance"*](/pubs/Conferences/covselect_final.pdf), AAAI Conference on Artificial Intelligence (AAAI-14), 2014.
+ Anastasios Kyrillidis, Michail Vlachos and Anastasios Zouzias, [*``Approximate matrix multiplication with application to linear embeddings"*](/pubs/Conferences/ApproxMM_arxiv.pdf), IEEE ISIT Symposium, 2014.
+ Anastasios Kyrillidis and Anastasios Zouzias, [*``Non-uniform feature sampling in decision tree ensembles"*](/pubs/Conferences/RandDecisionTrees_arxiv.pdf), IEEE ICASSP, 2014.
+ George Skoumas, Dieter Pfoser and Anastasios Kyrillidis, [*``On quantifying qualitative geospatial data: A probabilistic approach"*](/pubs/Conferences/geocrowd.pdf), ACM GEOCROWD, 2013.
+ Stephen Becker, Volkan Cevher and Anastasios Kyrillidis, [*``Randomized low-memory singular value projection"*](/pubs/Conferences/RandomizedSVP_fixed.pdf), 10th International Conference on Sampling Theory and Applications (SampTA), 2013. *(Authors listed in alphabetical order.)*
+ Anastasios Kyrillidis, Stephen Becker, Volkan Cevher and Christoph Koch, [*``Sparse projections onto the simplex"*](http://jmlr.org/proceedings/papers/v28/kyrillidis13.pdf), International Conference on Machine Learning (ICML), 2013.
+ Quoc Tran Dinh, Anastasios Kyrillidis and Volkan Cevher, [*``A proximal Newton framework for composite minimization: Graph learning without Cholesky decompositions and matrix inversions"*](http://jmlr.csail.mit.edu/proceedings/papers/v28/trandinh13.pdf), International Conference on Machine Learning (ICML), 2013.
+ Anastasios Kyrillidis and Volkan Cevher, [*``Fast proximal algorithms for self-concordant minimization with application to sparse graph selection"*](/pubs/Conferences/FirstOrderCovSel.pdf), IEEE ICASSP, 2013.
+ Anastasios Kyrillidis and Volkan Cevher, [*``Matrix ALPS: Accelerated low rank and sparse matrix reconstruction"*](/pubs/Conferences/lowrank_sparse_v2.pdf), IEEE SSP, 2012.
+ Anastasios Kyrillidis and Volkan Cevher, [*``Combinatorial selection and least absolute shrinkage via the CLASH algorithm"*](/pubs/Conferences/CLASH_ISIT.pdf), IEEE ISIT, 2012.
+ Anastasios Kyrillidis, Gilles Puy and Volkan Cevher, [*``Hard thresholding with norm constraints"*](/pubs/Conferences/HardThreshNormCon.pdf), IEEE ICASSP, 2012.
+ Anastasios Kyrillidis and Volkan Cevher, [*``Recipes on hard thresholding methods"*](/pubs/Conferences/CAMSAP_Recipes_for_HTM.pdf), 4th IEEE CAMSAP, 2011.
+ Anastasios Kyrillidis and George. N. Karystinos, [*``Rank-deficient quadratic-form maximization over M-phase alphabet: Polynomial-complexity solvability and algorithmic developments"*](/pubs/Conferences/RankD_Conf_v1.pdf), IEEE ICASSP, 2011.

## Book chapters
+ Volkan Cevher, Sina Jafarpour and Anastasios Kyrillidis, [*``Linear inverse problems with norm and sparsity constraints"*](), in Practical Applications of Sparse Modeling, Sept. 2014, MIT Press, *(Authors listed in alphabetical order)*.
+ Anastasios Kyrillidis, Luca Baldassarre, Marwa El-Halabi, Quoc Tran-Dinh and Volkan Cevher, [*``Structured sparsity: discrete and convex approaches"*](), submitted as book chapter to ``Compressed sensing and its application", Springer, 2014.

## Theses
+ Anastasios Kyrillidis, [*``Rigorous optimization recipes for sparse and low rank inverse problems with applications in data sciences"*](/pubs/Theses/Rigorous_optimization_recipes.pdf), Ph.D. Thesis, School of Computer and Communications, EPFL, September 2014.
+ Anastasios Kyrillidis, [*``Polynomial-complexity computation of the M-phase vector that maximizes a rank-deficient quadratic form"*](/pubs/Theses/RankD_Thesis.pdf), M.Sc. Thesis, Dept. Electronic Engineering and Computer Science, Technical University of Crete, July 2010.

