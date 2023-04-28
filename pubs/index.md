---
layout: dirindex
fb_comments: 3
---

*(Only peer-reviewed and accepted papers; for the most recent drafts, please check my [Google Scholar](https://scholar.google.com/citations?user=TEGzkZMAAAAJ&hl=en&oi=ao) profile)*

## Conference papers

+ Qihan Wang, Chen Dun, Fangshuo Liao, Chris Jermaine, Anastasios Kyrillidis, [*``LOFT: Finding Lottery Tickets through Filter-wise Training"*](https://proceedings.mlr.press/v206/wang23f/wang23f.pdf), Twenty-sixth International Conference on Artificial Intelligence and Statistics (AISTATS-23), 2023.
   
  <button id="b_abs_c50"> Abstract </button>
  <button id="b_bib_c50"> Bibtex </button>
  <button id="b_pos_c50"> Poster </button>
  <button id="b_sof_c50"> Link to software </button>
  <p id="abs_c50"> <i> Recent work on the Lottery Ticket Hypothesis (LTH) shows that there exist “winning tickets” in large neural networks. These tickets represent “sparse” versions of the full model that can be trained independently to achieve comparable accuracy with respect to the full model. However, finding the winning tickets requires one to pretrain the large model for at least a number of epochs, which can be a burdensome task, especially when the original neural network gets larger. In this paper, we explore how one can efficiently identify the emergence of such winning tickets, and use this observation to design efficient pretraining algorithms. For clarity of exposition, our focus is on convolutional neural networks (CNNs). To identify good filters, we propose a novel filter distance metric that well-represents the model convergence. As our theory dictates, our filter analysis behaves consistently with recent findings of neural network learning dynamics. Motivated by these observations, we present the LOttery ticket through Filter-wise Training algorithm, dubbed as LoFT. LoFT is a model-parallel pretraining algorithm that partitions convolutional layers by filters to train them independently in a distributed setting, resulting in reduced memory and communication costs during pretraining. Experiments show that LoFT i) preserves and finds good lottery tickets, while ii) it achieves non-trivial computation and communication savings, and maintains comparable or even better accuracy than other pretraining methods.
  </i> </p>
 
  <pre id="bib_c50"><samp>  		
	@article{loft2023wang,
  title = 	 {LOFT: Finding Lottery Tickets through Filter-wise Training},
  author =       {Wang, Qihan and Dun, Chen and Liao, Fangshuo and Jermaine, Chris and Kyrillidis, Anastasios},
  booktitle = 	 {Proceedings of The 26th International Conference on Artificial Intelligence and Statistics},
  pages = 	 {6498--6526},
  year = 	 {2023},
  editor = 	 {Ruiz, Francisco and Dy, Jennifer and van de Meent, Jan-Willem},
  volume = 	 {206},
  series = 	 {Proceedings of Machine Learning Research},
  month = 	 {25--27 Apr},
  publisher =    {PMLR}
}
  </samp></pre>


+ Chen Dun, Mirian Hipolito, Chris Jermaine, Dimitrios Dimitriadis, Anastasios Kyrillidis, [*``Efficient and Light-Weight Federated Learning via Asynchronous Distributed Dropout"*](https://proceedings.mlr.press/v206/dun23a/dun23a.pdf), Twenty-sixth International Conference on Artificial Intelligence and Statistics (AISTATS-23), 2023.
   
  <button id="b_abs_c49"> Abstract </button>
  <button id="b_bib_c49"> Bibtex </button>
  <button id="b_pos_c49"> Poster </button>
  <button id="b_sof_c49"> Link to software </button>
  <p id="abs_c49"> <i> Asynchronous learning protocols have regained attention lately, especially in the Federated Learning (FL) setup, where slower clients can severely impede the learning process. Herein, we propose AsyncDrop, a novel asynchronous FL framework that utilizes dropout regularization to handle device heterogeneity in distributed settings. Overall, AsyncDrop achieves better performance compared to state of the art asynchronous methodologies, while resulting in less communication and training time overheads. The key idea revolves around creating “submodels” out of the global model, and distributing their training to workers, based on device heterogeneity. We rigorously justify that such an approach can be theoretically characterized. We implement our approach and compare it against other asynchronous baselines, both by design and by adapting existing synchronous FL algorithms to asynchronous scenarios. Empirically, AsyncDrop reduces the communication cost and training time, while matching or improving the final test accuracy in diverse non-i.i.d. FL scenarios.
  </i> </p>
 
  <pre id="bib_c49"><samp>  		
	@article{asyncdrop2023dun,
  title = 	 {Efficient and Light-Weight Federated Learning via Asynchronous Distributed Dropout},
  author =       {Dun, Chen and Hipolito, Mirian and Jermaine, Chris and Dimitriadis, Dimitrios and Kyrillidis, Anastasios},
  booktitle = 	 {Proceedings of The 26th International Conference on Artificial Intelligence and Statistics},
  pages = 	 {6630--6660},
  year = 	 {2023},
  editor = 	 {Ruiz, Francisco and Dy, Jennifer and van de Meent, Jan-Willem},
  volume = 	 {206},
  series = 	 {Proceedings of Machine Learning Research},
  month = 	 {25--27 Apr},
  publisher =    {PMLR}
 }
  </samp></pre>


+ Zheyang Xiong, Fangshuo Liao, Anastasios Kyrillidis, [*``Strong Lottery Ticket Hypothesis with perturbation"*](https://proceedings.mlr.press/v206/xiong23a/xiong23a.pdf), Twenty-sixth International Conference on Artificial Intelligence and Statistics (AISTATS-23), 2023.
   
  <button id="b_abs_c48"> Abstract </button>
  <button id="b_bib_c48"> Bibtex </button>
  <button id="b_pre_c48"> Presentation </button>
  <button id="b_pos_c48"> Poster </button>
  <button id="b_sof_c48"> Link to software </button>
  <p id="abs_c48"> <i> The strong Lottery Ticket Hypothesis (LTH) (Ramanujan et al., 2019; Zhou et al., 2019) claims the existence of a subnetwork in a sufficiently large, randomly initialized neural network that approximates some target neural network without the need of training. We extend the theoretical guarantee of the strong LTH literature to a scenario more similar to the original LTH, by generalizing the weight change in the pre-training step to some perturbation around initialization. In particular, we focus on the following open questions: By allowing a perturbation on the random initial weights, can we reduce the over-parameterization requirement for the candidate network in the strong LTH? Furthermore, does the weight change by SGD coincide with a good set of such perturbation? We answer the first question by first extending the theoretical result on subset sum problem (Lueker, 1998) to allow perturbation on the candidates. Applying this result to the neural network setting, we show that by allowing scale perturbation, we can reduce the over-parameterization requirement of the strong LTH. To answer the second question, we show via experiments that the perturbed weight achieved by the projected SGD shows better performance under the strong LTH pruning.
  </i> </p>
 
  <pre id="bib_c48"><samp>  		
	@article{slth2023xiong,
  title = 	 {Strong Lottery Ticket Hypothesis with epsilon–perturbation},
  author =       {Xiong, Zheyang and Liao, Fangshuo and Kyrillidis, Anastasios},
  booktitle = 	 {Proceedings of The 26th International Conference on Artificial Intelligence and Statistics},
  pages = 	 {6879--6902},
  year = 	 {2023},
  editor = 	 {Ruiz, Francisco and Dy, Jennifer and van de Meent, Jan-Willem},
  volume = 	 {206},
  series = 	 {Proceedings of Machine Learning Research},
  month = 	 {25--27 Apr},
  publisher =    {PMLR}
}
  </samp></pre>
  
+ Carlos Quintero-Pena, Zachary Kingston, Tianyang Pan, Rahul Shome, Anastasios Kyrillidis, and Lydia E. Kavraki, [*``Optimal Grasps and Placements for Task and Motion Planning in Clutter"*](https://www.kavrakilab.rice.edu/publications/quintero2023-optimal-tmp.pdf), IEEE International Conference on Robotics and Automation (ICRA), 2023.
   
  <button id="b_abs_c47"> Abstract </button>
  <button id="b_bib_c47"> Bibtex </button>
  <p id="abs_c47"> <i> Many methods that solve robot planning problems, such as task and motion planners, employ discrete symbolic search to find sequences of valid symbolic actions that are grounded with motion planning. Much of the efficacy of these planners lies in this grounding—bad placement and grasp choices can lead to inefficient planning when a problem has many geometric constraints. Moreover, grounding methods such as naive sampling often fail to find appropriate values for these choices in the presence of clutter. Towards efficient task and motion planning, we present a novel optimization-based approach for grounding to solve cluttered problems that have many constraints that arise from geometry. Our approach finds an optimal grounding and can provide feedback to discrete search for more effective planning. We demonstrate our method against baseline methods in complex simulated environments.
  </i> </p>
 
  <pre id="bib_c47"><samp>
  		@article{quinterooptimal,
  title={Optimal Grasps and Placements for Task and Motion Planning in Clutter},
  author={Quintero-Pena, Carlos and Kingston, Zachary and Pan, Tianyang and Shome, Rahul and Kyrillidis, Anastasios and Kavraki, Lydia E}
}
  </samp></pre>


+ Syed Rizvi, Chen Dun, Anastasios Kyrillidis, [*``PCRIST: Variance Reduction through Periodic Centralized Training in Distributed Subnetwork Training of Residual Networks"*](), IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), in proceedings of “Timely and Private Machine Learning over Networks” workshop, 2023.
   
  <button id="b_abs_c46"> Abstract </button>
  <button id="b_bib_c46"> Bibtex </button>
  <p id="abs_c46"> <i> In this work, we propose Periodic Centralized ResIST (PCRIST), a distributed training protocol for residual Convolutional Neural Networks which reduces variance during training in order to recover model performance in distributed settings. PCRIST introduces short periods of centralized training into the ResIST distributed training protocol, which aims to reduce the variance among distributed workers each training subnets of the global Resnet. PCRIST improves on the performance of ResIST while maintaining many of its  advantages in terms of communication efficiency compared to baseline distributed training protocols. We evaluate PCRIST on two benchmark image classification tasks, and demonstrate superior performance to the ResIST training protocol while maintaining the benefits of communication efficiency seen with the ResIST protocol.
  </i> </p>
 
  <pre id="bib_c46"><samp>
  		@article{rivzi2023pcrist,
  title={PCRIST: Variance Reduction through Periodic Centralized Training in Distributed Subnetwork Training of Residual Networks},
  author={Syed Rizvi, Chen Dun, Anastasios Kyrillidis},
  journal={preprint},
  year={2023}
}
  </samp></pre>
 
 
 + Junhyung Lyle Kim, Mohammad Taha Toghani, Cesar A. Uribe, Anastasios Kyrillidis, [*``Local Stochastic Factored Gradient Descent for Distributed Quantum State Tomography"*](https://arxiv.org/pdf/2203.11579.pdf), IEEE Conference on Decision and Control (CDC), 2022.
   
  <button id="b_abs_c45"> Abstract </button>
  <button id="b_bib_c45"> Bibtex </button>
  <p id="abs_c45"> <i> We propose a distributed Quantum State Tomography (QST) protocol, named Local Stochastic Factored Gradient Descent (Local SFGD), to learn the low-rank factor of a density matrix over a set of local machines. QST is the canonical procedure to characterize the state of a quantum system, which we formulate as a stochastic nonconvex smooth optimization problem. Physically, the estimation of a low-rank density matrix helps characterizing the amount of noise introduced by quantum computation. Theoretically, we prove the local convergence of Local SFGD for a general class of restricted strongly convex/smooth loss functions, i.e., Local SFGD converges locally to a small neighborhood of the global optimum at a linear rate with a constant step size, while it locally converges exactly at a sub-linear rate with diminishing step sizes. With a proper initialization, local convergence results imply global convergence. We validate our theoretical findings with numerical simulations of QST on the Greenberger-Horne-Zeilinger (GHZ) state.
  </i> </p>
 
  <pre id="bib_c45"><samp>
  		@article{kim2022local,
  title={Local Stochastic Factored Gradient Descent for Distributed Quantum State Tomography},
  author={Kim, Junhyung Lyle and Toghani, Mohammad Taha and Uribe, C{\'e}sar A and Kyrillidis, Anastasios},
  journal={arXiv preprint arXiv:2203.11579},
  year={2022}
}
  </samp></pre>
 
 
 + Cheng Wan, Youjie Li, Cameron R. Wolfe, Anastasios Kyrillidis, Nam Sung Kim, Yingyan Lin, [*``PipeGCN: Efficient Full-Graph Training of Graph Convolutional Networks with Pipelined Feature Communication"*](https://akyrillidis.github.io/pubs/Conferences/PipeGCN.pdf), International Conference on Learning Representations (ICLR), 2022.
   
  <button id="b_abs_c44"> Abstract </button>
  <button id="b_bib_c44"> Bibtex </button>
  <button id="b_sof_c44"> Link to software </button>
  <p id="abs_c44"> <i> Graph Convolutional Networks (GCNs) is the state-of-the-art method for learning graph-structured data, and training large-scale GCNs requires distributed training across multiple accelerators such that each accelerator is able to hold a partitioned subgraph. However, distributed GCN training incurs prohibitive overhead of communicating node features and feature gradients among partitions for every GCN layer in each training iteration, limiting the achievable training efficiency and model scalability. To this end, we propose PipeGCN, a simple-yet-effective scheme that hides the communication overhead by pipelining inter-partition communication with intra-partition computation. It is non-trivial to pipeline for efficient GCN training, as communicated node features/gradients will become stale and thus can harm the convergence, negating the pipeline benefit. Notably, little is known regarding the convergence rate of GCN training with both stale features and stale feature gradients. This work not only provides a theoretical convergence guarantee but also finds the convergence rate of PipeGCN to be close to that of the vanilla distributed GCN training without staleness. Furthermore, we develop a smoothing method to further improve PipeGCN’s convergence. Extensive experiments show that PipeGCN can largely boost training throughput (up to 2.2x) while achieving the same accuracy as its vanilla counterpart and outperforming existing full-graph training methods. All code will be released publicly upon acceptance.
  </i> </p>
 
  <pre id="bib_c44"><samp>
  		@inproceedings{wan2021pipegcn,
  title={PipeGCN: Efficient Full-Graph Training of Graph Convolutional Networks with Pipelined Feature Communication},
  author={Wan, Cheng and Li, Youjie and Wolfe, Cameron R and Kyrillidis, Anastasios and Kim, Nam Sung and Lin, Yingyan},
  booktitle={International Conference on Learning Representations},
  year={2022}
}
  </samp></pre>
 
+ Binhang Yuan, Cameron Wolfe, Chen Dun, Yuxin Tang, Anastasios Kyrillidis and Chris Jermaine, [*``Distributed Learning of Deep Neural Networks Using Independent Subnet Training"*](https://www.vldb.org/pvldb/vol15/p1581-wolfe.pdf), International Conference on Very Large Databases (VLDB), 2022.
   
  <button id="b_abs_c43"> Abstract </button>
  <button id="b_bib_c43"> Bibtex </button>
  <button id="b_pre_c43a"> Presentation 1 </button>
  <button id="b_pre_c43b"> Presentation 2 </button>
  <button id="b_sof_c43"> Link to software </button>
  <p id="abs_c43"> <i> Distributed machine learning (ML) can bring more computational resources to bear than single-machine learning, thus enabling reductions in training time. Distributed learning partitions models and data over many machines, allowing model and dataset sizes beyond the available compute power and memory of a single machine. In practice though, distributed ML is challenging when distribution is mandatory, rather than chosen by the practitioner. In such scenarios, data could unavoidably be separated among workers due to limited memory capacity per worker or even because of data privacy issues. There, existing distributed methods will utterly fail due to dominant transfer costs across workers, or do not even apply. We propose a new approach to distributed fully connected neural network learning, called independent subnet training (IST), to handle these cases. In IST, the original network is decomposed into a set of narrow subnetworks with the same depth. These subnetworks are then trained locally before parameters are exchanged to produce new subnets and the training cycle repeats. Such a naturally łmodel parallelž approach limits memory usage by storing only a portion of network parameters on each device. Additionally, no requirements exist for sharing data between workers (i.e., subnet training is local and independent) and communication volume and frequency are reduced by decomposing the original network into independent subnets. These properties of IST can cope with issues due to distributed data, slow interconnects, or limited device memory, making IST a suitable approach for cases of mandatory distribution. We show experimentally that IST results in training times that are much lower than common distributed learning approaches.
  </i> </p>
 
  <pre id="bib_c43"><samp>
  		@article{yuan2022distributed,
  title={Distributed learning of fully connected neural networks using independent subnet training},
  author={Yuan, Binhang and Wolfe, Cameron R and Dun, Chen and Tang, Yuxin and Kyrillidis, Anastasios and Jermaine, Chris},
  journal={Proceedings of the VLDB Endowment},
  volume={15},
  number={8},
  pages={1581--1590},
  year={2022},
  publisher={VLDB Endowment}
}
  </samp></pre>
  
+ Ahmed Imtiaz Humayun, Randall Balestriero, Anastasios Kyrillidis, Richard Baraniuk, [*``No More Than 6ft Apart: Robust K-Means via Radius Upper Bounds"*](https://akyrillidis.github.io/pubs/Conferences/Robust_Kmeans.pdf), IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP-22), 2022.
   
  <button id="b_abs_c42"> Abstract </button>
  <button id="b_bib_c42"> Bibtex </button>
  <p id="abs_c42"> <i> Centroid based clustering methods such as k-means, kmedoids and k-centers are heavily applied as a go-to tool
in exploratory data analysis. In many cases, those methods are used to obtain representative centroids of the data
manifold for visualization or summarization of a dataset.
Real world datasets often contain inherent abnormalities e.g.
repeated samples and sampling bias, that manifest imbalanced clustering. We propose to remedy such scenario by
introducing a maximal radius constraint r on the clusters
formed by the centroids i.e. samples from a same cluster
should not be more than 2r apart in term of `2 distance. We
achieve this constraint by solving a semi-definite program,
followed by a linear assignment problem with quadratic
constraints. Through qualitative results, we show that our
proposed method is robust towards dataset imbalances and
sampling artefacts. To the best of our knowledge, ours is the
first constrained k-means clustering method with hard radius
constraints
  </i> </p>
 
  <pre id="bib_c42"><samp>
  		@inproceedings{humayun2022no,
  title={No More Than 6ft Apart: Robust $k$-Means via Radius Upper Bounds},
  author={Humayun, Ahmed Imtiaz and Balestriero, Randall and Kyrillidis, Anastasios and Baraniuk, Richard},
  booktitle={ICASSP 2022-2022 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages={4433--4437},
  year={2022},
  organization={IEEE}
}
  </samp></pre>
  
  
+ John Chen, Cameron Wolfe, Zhao Li Anastasios Kyrillidis, [*``Demon: Decaying momentum helps neural network training"*](https://arxiv.org/pdf/1910.04952.pdf), IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP-22), 2022.
   
  <button id="b_abs_c41"> Abstract </button>
  <button id="b_bib_c41"> Bibtex </button>
  <button id="b_sof_c41"> Link to software </button>
  <p id="abs_c41"> <i> Momentum is a widely used technique for gradient-based optimizers in deep learning. Here, we propose a decaying momentum (DEMON) hyperparameter rule. We conduct large-scale empirical analysis of momentum decay methods for modern neural network optimization and compare to the most popular learning rate decay schedules. Across 28 relevant combinations of models, epochs, datasets, and optimizers, DEMON achieves Top-1 and Top-3 performance in 39\% and 85\% of cases, respectively, almost doubling the second-placed cosine learning rate schedule at 17\% and 60\%, respectively. DEMON consistently outperforms other widely-used schedulers including, but not limited to, the learning rate step schedule, linear schedule, OneCycle schedule, and exponential schedule. Compared with the widely-used learning rate step schedule, DEMON is less sensitive to parameter tuning, which is critical to training neural networks in practice. Results are demonstrated across a variety of settings and architectures, ncluding image classification models, generative models, and language models. DEMON is easy to implement, requires no additional tuning, and incurs almost no extra computational overhead compared to the vanilla counterparts. Code is readily available.
  </i> </p>
 
  <pre id="bib_c41"><samp>
  		@inproceedings{chen2022demon,
  title={Demon: Improved Neural Network Training with Momentum Decay},
  author={Chen, John and Wolfe, Cameron and Li, Zhao and Kyrillidis, Anastasios},
  booktitle={ICASSP 2022-2022 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages={3958--3962},
  year={2022},
  organization={IEEE}
}
  </samp></pre>
  
  
  
+ Chen Dun, Cameron Wolfe, Anastasios Kyrillidis, [*``ResIST: Layer-Wise Decomposition of ResNets for Distributed Training"*](https://openreview.net/pdf?id=rq4v8Ujcec), Conference on Uncertainty in Artificial Intelligence (UAI-22), 2022.
   
  <button id="b_abs_c40"> Abstract </button>
  <button id="b_bib_c40"> Bibtex </button>	
  <button id="b_pos_c40"> Poster </button>
  <button id="b_sof_c40"> Link to software </button>	
  <p id="abs_c40"> <i> We propose ResIST, a novel distributed training protocol for Residual Networks (ResNets). ResIST randomly decomposes a global ResNet into several shallow sub-ResNets that are trained independently in a distributed manner for several local iterations, before having their updates synchronized and aggregated into the global model. In the next round, new sub-ResNets are randomly generated and the process repeats until convergence. By construction, per iteration, ResIST communicates only a small portion of network parameters to each machine and never uses the full model during training. Thus, ResIST reduces the per-iteration communication, memory, and time requirements of ResNet training to only a fraction of the requirements of full-model training. In comparison to common protocols, like data-parallel training and data-parallel training with local SGD, ResIST yields a decrease in communication and compute requirements, while being competitive with respect to model performance.
  </i> </p>
 
  <pre id="bib_c40"><samp>
  		@inproceedings{dun2022resist,
  title={ResIST: Layer-Wise Decomposition of ResNets for Distributed Training},
  author={Dun, Chen and Wolfe, Cameron R and Jermaine, Chris and Kyrillidis, Anastasios},
  booktitle={The 38th Conference on Uncertainty in Artificial Intelligence},
  year={2022}
}
  </samp></pre>
  
  
+ John Chen, Samarth Sinha, Anastasios Kyrillidis, [*``StackMix: A complementary Mix algorithm"*](https://openreview.net/pdf?id=HqIlPIUo5g9), Conference on Uncertainty in Artificial Intelligence (UAI-22), 2022.
   
  <button id="b_abs_c39"> Abstract </button>
  <button id="b_bib_c39"> Bibtex </button>
  <p id="abs_c39"> <i> Techniques combining multiple images as input/output have proven to be effective data augmentations for training convolutional neural networks. In this paper, we present StackMix: each input is presented as a concatenation of two images, and the label is the mean of the two one-hot labels. On its own, StackMix rivals other widely used methods in the Mix’’ line of work. More importantly, unlike previous work, significant gains across a variety of benchmarks are achieved by combining StackMix with existing Mix augmentation, effectively mixing more than two images. E.g., by combining StackMix with CutMix, test error in the supervised setting is improved across a variety of settings over CutMix, including 0.8\% on ImageNet, 3\% on Tiny ImageNet, 2\% on CIFAR-100, 0.5\% on CIFAR-10, and 1.5\% on STL-10. Similar results are achieved with Mixup. We further show that gains hold for robustness to common input corruptions and perturbations at varying severities with a 0.7\% improvement on CIFAR-100-C, by combining StackMix with AugMix over AugMix. On its own, improvements with StackMix hold across different number of labeled samples on CIFAR-100, maintaining approximately a 2\% gap in test accuracy –down to using only 5\% of the whole dataset– and is effective in the semi-supervised setting with a 2\% improvement with the standard benchmark -model. Finally, we perform an extensive ablation study to better understand the proposed methodology.
  </i> </p>
 
  <pre id="bib_c39"><samp>
  		@inproceedings{chen2022stackmix,
  title={StackMix: A complementary {M}ix algorithm},
  author={Chen, John and Sinha, Samarth and Kyrillidis, Anastasios},
  booktitle={The 38th Conference on Uncertainty in Artificial Intelligence},
  year={2022}
}
  </samp></pre>
  
  
 + John Chen, Cameron Wolfe, Anastasios Kyrillidis, [*``REX: Revisiting Budgeted Training with an Improved Schedule"*](https://akyrillidis.github.io/pubs/Conferences/REX.pdf), 5th Conference on Machine Learning and Systems (MLSys-22), 2022.
   
  <button id="b_abs_c38"> Abstract </button>
  <button id="b_bib_c38"> Bibtex </button>
  <p id="abs_c38"> <i> Deep learning practitioners often operate on a computational and monetary budget. Thus, it is critical to design optimization algorithms that perform well under any budget. The linear learning rate schedule is considered the best budget-aware schedule, as it outperforms most other schedules in the low budget regime. On the other hand, learning rate schedules – such as the 30-60-90 step schedule – are known to achieve high performance when the model can be trained for many epochs. Yet, it is often not known a priori whether one’s budget will be large or small; thus, the optimal choice of learning rate schedule is made on a case-by-case basis. In this paper, we frame the learning rate schedule selection problem as a combination of selecting a profile (i.e., the continuous function that models the learning rate schedule), and choosing a sampling rate (i.e., how frequently the learning rate is updated/sampled from this profile). We propose a novel profile and sampling rate combination called the Reflected Exponential (REX) schedule, which we evaluate across seven different experimental settings with both SGD and Adam optimizers. REX outperforms the linear schedule in the low budget regime, while matching or exceeding the performance of several state-of-the-art learning rate schedules (linear, step, exponential, cosine, step decay on plateau, and OneCycle) in both high and low budget regimes. Furthermore, REX requires no added computation, storage, or hyperparameters.
  </i> </p>
 
  <pre id="bib_c38"><samp>
  		@article{chen2022rex,
  title={REX: Revisiting Budgeted Training with an Improved Schedule},
  author={Chen, John and Wolfe, Cameron and Kyrillidis, Tasos},
  journal={Proceedings of Machine Learning and Systems},
  volume={4},
  pages={64--76},
  year={2022}
}
  </samp></pre>
  

+ Cameron R Wolfe, Anastasios Kyrillidis, [*``i-SpaSP: Structured Neural Pruning via Sparse Signal Recovery"*](https://proceedings.mlr.press/v168/wolfe22a/wolfe22a.pdf), 4th Annual Learning for Dynamics & Control Conference (L4DC-22), 2022.
   
  <button id="b_abs_c37"> Abstract </button>
  <button id="b_bib_c37"> Bibtex </button>
  <button id="b_sof_c37"> Link to software </button>
  <p id="abs_c37"> <i> We propose a novel, structured pruning algorithm for neural networks—the iterative, Sparse Structured Pruning algorithm, dubbed as i-SpaSP. Inspired by ideas from sparse signal recovery, i-SpaSP operates by iteratively identifying a larger set of important parameter groups (e.g., filters or neurons) within a network that contribute most to the residual between pruned and dense network output, then thresholding these groups based on a smaller, pre-defined pruning ratio. For both two-layer and multi-layer network architectures with ReLU activations, we show the error induced by pruning with i-SpaSP decays polynomially, where the degree of this polynomial becomes arbitrarily large based on the sparsity of the dense network’s hidden representations. In our experiments, i-SpaSP is evaluated across a variety of datasets (i.e., MNIST, ImageNet, and XNLI) and architectures (i.e., feed forward networks, ResNet34, MobileNetV2, and BERT), where it is shown to discover high-performing sub-networks and improve upon the pruning efficiency of provable baseline methodologies by several orders of magnitude. Put simply, i-SpaSP is easy to implement with automatic differentiation, achieves strong empirical results, comes with theoretical convergence guarantees, and is efficient, thus distinguishing itself as one of the few computationally efficient, practical, and provable pruning algorithms.
  </i> </p>
 
  <pre id="bib_c37"><samp>
  		@inproceedings{wolfe2022spasp,
  title={i-SpaSP: Structured Neural Pruning via Sparse Signal Recovery},
  author={Wolfe, Cameron R and Kyrillidis, Anastasios},
  booktitle={Learning for Dynamics and Control Conference},
  pages={248--262},
  year={2022},
  organization={PMLR}
}
  </samp></pre>
  

+ Junhyung Lyle Kim, Panos Toulis, Anastasios Kyrillidis, [*``Convergence and Stability of the Stochastic Proximal Point Algorithm with Momentum"*](https://proceedings.mlr.press/v168/kim22a/kim22a.pdf), 4th Annual Learning for Dynamics & Control Conference (L4DC-22), 2022.
   
  <button id="b_abs_c36"> Abstract </button>
  <button id="b_bib_c36"> Bibtex </button>
  <p id="abs_c36"> <i> Stochastic gradient descent with momentum (SGDM) is the dominant algorithm in many optimization scenarios, including convex optimization instances and non-convex neural network training. Yet, in the stochastic setting, momentum interferes with gradient noise, often leading to specific step size and momentum choices in order to guarantee convergence, set aside acceleration. Proximal point methods, on the other hand, have gained much attention due to their numerical stability and elasticity against imperfect tuning. Their stochastic accelerated variants though have received limited attention: how momentum interacts with the stability of (stochastic) proximal point methods remains largely unstudied. To address this, we focus on the convergence and stability of the stochastic proximal point algorithm with momentum (SPPAM), and show that SPPAM allows a faster linear convergence to a neighborhood compared to stochastic proximal point algorithm (SPPA) with a better contraction factor, under proper hyperparameter tuning. In terms of stability, we show that SPPAM depends on problem constants more favorably than SGDM, allowing a wider range of step size and momentum that lead to convergence.
  </i> </p>
 
  <pre id="bib_c36"><samp>
  		@inproceedings{kim2022convergence,
  title={Convergence and Stability of the Stochastic Proximal Point Algorithm with Momentum},
  author={Kim, Junhyung Lyle and Toulis, Panos and Kyrillidis, Anastasios},
  booktitle={Learning for Dynamics and Control Conference},
  pages={1034--1047},
  year={2022},
  organization={PMLR}
}
  </samp></pre>
  
  + John Chen, Qihan Wang, Anastasios Kyrillidis, [*``Mitigating deep double descent by concatenating inputs"*](/pubs/Conferences/concat.pdf), ACM International Conference on Information and Knowledge Management (CIKM-21), 2021.
  
  
  <button id="b_abs_c35"> Abstract </button>
  <button id="b_bib_c35"> Bibtex </button>
  <p id="abs_c35"> <i> The double descent curve is one of the most intriguing properties of deep neural networks. It contrasts the classical bias-variance curve with the behavior of modern neural networks, occurring where the number of samples nears the number of parameters. In this work, we explore the connection between the double descent phenomena and the number of samples in the deep neural network setting. In particular, we propose a construction which augments the existing dataset by artificially increasing the number of samples. This construction empirically mitigates the double descent curve in this setting. We reproduce existing work on deep double descent, and observe a smooth descent into the overparameterized region for our construction. This occurs both with respect to the model size, and with respect to the number epochs.
  </i> </p>
 
  <pre id="bib_c35"><samp>
  		@article{chen2021mitigating,
  title={Mitigating deep double descent by concatenating inputs},
  author={Chen, John and Wang, Qihan and Kyrillidis, Anastasios},
  journal={arXiv preprint arXiv:2107.00797},
  year={2021}
}
  </samp></pre>
  
  
  
+ Carlos Quintero-Pena, Anastasios Kyrillidis, Lydia E Kavraki, [*``Robust Optimization-based Motion Planning for high-DOF Robots under Sensing Uncertainty"*](/pubs/Conferences/ROMP.pdf), IEEE International Conference on Robotics and Automation (ICRA-21), 2021.
  
  
  <button id="b_abs_c34"> Abstract </button>
  <button id="b_bib_c34"> Bibtex </button>
  <p id="abs_c34"> <i> Motion planning for high degree-of-freedom (DOF) robots is challenging, especially when acting in complex environments under sensing uncertainty. While there is significant work on how to plan under state uncertainty for low-DOF robots, existing methods cannot be easily translated into the high-DOF case, due to the complex geometry of the robot’s body and its environment. In this paper, we present a method that enhances optimization-based motion planners to produce robust trajectories for high-DOF robots for convex obstacles. Our approach introduces robustness into planners that are based on sequential convex programming: We reformulate each convex subproblem as a robust optimization problem that “protects” the solution against deviations due to sensing uncertainty. The parameters of the robust problem are estimated by sampling from the distribution of noisy obstacles, and performing a first-order approximation of the signed distance function. The original merit function is updated to account for the new costs of the robust formulation at every step. The effectiveness of our approach is demonstrated on two simulated experiments that involve a full body square robot, that moves in randomly generated scenes, and a 7-DOF Fetch robot, performing tabletop operations. The results show nearly zero probability of collision for a reasonable range of the noise parameters for Gaussian and Uniform uncertainty.
  </i> </p>
 
  <pre id="bib_c34"><samp>
  		@inproceedings{quintero2021robust,
  title={Robust Optimization-based Motion Planning for high-DOF Robots under Sensing Uncertainty},
  author={Quintero-Pena, Carlos and Kyrillidis, Anastasios and Kavraki, Lydia E},
  booktitle={2021 IEEE International Conference on Robotics and Automation (ICRA)},
  year={2021}
}
  </samp></pre>
  

+ Jacky Y. Zhang, Rajiv Khanna, Anastasios Kyrillidis, and Oluwasanmi Koyejo, [*``Bayesian Coresets: Revisiting the Optimization Perspective"*](/pubs/Conferences/Bayesian_coresets.pdf), Twenty-fourth International Conference on Artificial Intelligence and Statistics (AISTATS-21), 2021.
  
  
  <button id="b_abs_c33"> Abstract </button>
  <button id="b_bib_c33"> Bibtex </button>
  <p id="abs_c33"> <i> We explore the potential of continuous local search (CLS) in SAT solving by proposing a novel
approach for finding a solution of a hybrid system of Boolean constraints. The algorithm is based on
CLS combined with belief propagation on binary decision diagrams (BDDs). Our framework accepts
all Boolean constraints that admit compact BDDs, including symmetric Boolean constraints and
small-coefficient pseudo-Boolean constraints as interesting families. We propose a novel algorithm
for efficiently computing the gradient needed by CLS. We study the capabilities and limitations of
our versatile CLS solver, GradSAT, by applying it on many benchmark instances. The experimental
results indicate that GradSAT can be a useful addition to the portfolio of existing SAT and MaxSAT
solvers for solving Boolean satisfiability and optimization problems.
  </i> </p>
 
  <pre id="bib_c33"><samp>
  		@inproceedings{zhang2021bayesian,
  title={Bayesian Coresets: Revisiting the Optimization Perspective},
  author={Zhang, Jacky and Khanna, Rajiv and Kyrillidis, Anastasios and Koyejo, Oluwasanmi},
  booktitle={International Conference on Artificial Intelligence and Statistics},
  year={2021}
}
  </samp></pre>
  
  
+ Anastasios Kyrillidis, Moshe Y. Vardi, and Zhiwei Zhang, [*``On Continuous Local BDD-Based Search for Hybrid SAT Solving"*](/pubs/Conferences/GradSAT.pdf), AAAI Conference on Artificial Intelligence (AAAI-21), 2021.
  
  
  <button id="b_abs_c32"> Abstract </button>
  <button id="b_bib_c32"> Bibtex </button>
  <p id="abs_c32"> <i> We explore the potential of continuous local search (CLS) in SAT solving by proposing a novel
approach for finding a solution of a hybrid system of Boolean constraints. The algorithm is based on
CLS combined with belief propagation on binary decision diagrams (BDDs). Our framework accepts
all Boolean constraints that admit compact BDDs, including symmetric Boolean constraints and
small-coefficient pseudo-Boolean constraints as interesting families. We propose a novel algorithm
for efficiently computing the gradient needed by CLS. We study the capabilities and limitations of
our versatile CLS solver, GradSAT, by applying it on many benchmark instances. The experimental
results indicate that GradSAT can be a useful addition to the portfolio of existing SAT and MaxSAT
solvers for solving Boolean satisfiability and optimization problems.
  </i> </p>
 
  <pre id="bib_c32"><samp>
  		@inproceedings{kyrillidis2021continuous,
  title={On Continuous Local BDD-Based Search for Hybrid SAT Solving},
  author={Kyrillidis, Anastasios and Vardi, Moshe and Zhang, Zhiwei},
  booktitle={AAAI Conference on Artificial Intelligence},
  year={2021}
}
  </samp></pre>
  
+ John Chen, Vatsal Shah and Anastasios Kyrillidis, [*``Negative sampling in semi-supervised learning"*](/pubs/Conferences/NS3L.pdf), International Conference on Machine Learning (ICML-20), 2020.
  
  
  <button id="b_abs_c31"> Abstract </button>
  <button id="b_bib_c31"> Bibtex </button>
  <p id="abs_c31"> <i> We introduce Negative Sampling in Semi-Supervised Learning (NS3L), a simple, fast, easy to tune algorithm for semi-supervised learning (SSL). NS3L is motivated by the success of negative sampling/contrastive estimation. We demonstrate that adding the NS3L loss to state-of-the-art SSL algorithms, such as the Virtual Adversarial Training (VAT), significantly improves upon vanilla VAT and its variant, VAT with Entropy Minimization. By adding the NS3L loss to MixMatch, the current state-of-the-art approach on semi-supervised tasks, we observe significant improvements over vanilla MixMatch. We conduct extensive experiments on the CIFAR10, CIFAR100, SVHN and STL10 benchmark datasets. Finally, we perform an ablation study for NS3L regarding its hyperparameter tuning.
  </i> </p>
 
  <pre id="bib_c31"><samp>
  		@inproceedings{chen2020negative,
  title={Negative sampling in semi-supervised learning},
  author={Chen, John and Shah, Vatsal and Kyrillidis, Anastasios},
  booktitle={International Conference on Machine Learning},
  year={2020}
}
  </samp></pre>
  
  
+ Kelly Geyer, Anastasios Kyrillidis, and Amir Kalev, [*``Low-rank regularization and solution uniqueness in over- parameterized matrix sensing"*](/pubs/Conferences/sol_unique_MS.pdf), Twenty-third International Conference on Artificial Intelligence and Statistics (AISTATS-20), 2020.
  
  
  <button id="b_abs_c30"> Abstract </button>
  <button id="b_bib_c30"> Bibtex </button>
  <p id="abs_c30"> <i> We consider the question whether algorithmic choices in over-parameterized linear matrix factorization introduce implicit low-rank regularization.We focus on the noiseless matrix sensing scenario over low-rank positive semi-definite (PSD) matrices over the reals, with a sensing mechanism that satisfies restricted isometry properties.Surprisingly, it was recently argued that for recovery of PSD matrices, gradient descent over a squared, full-rank factorized space introduces implicit low-rank regularization.Thus, a clever choice of the recovery algorithm avoids the need for explicit low-rank regularization. In this contribution, we prove that in fact, under certain conditions, the PSD constraint by itself is sufficient to lead to a unique low-rank matrix recovery, without explicit or implicit regularization.Therefore, under these conditions, the set of PSD matrices that are consistent with the observed data, is a singleton, regardless of the algorithm used. Our numerical study indicates that this result is general and extends to cases beyond the those covered by the proof.
  </i> </p>
 
  <pre id="bib_c30"><samp>
  		@inproceedings{geyer2020low,
  title={Low-rank regularization and solution uniqueness in over-parameterized matrix sensing},
  author={Geyer, Kelly and Kyrillidis, Anastasios and Kalev, Amir},
  booktitle={International Conference on Artificial Intelligence and Statistics},
  pages={930--940},
  year={2020}
}
  </samp></pre>
  
  
+ Anastasios Kyrillidis, Anshumali Shrivastava, Moshe Y. Vardi, Zhiwei Zhang, [*``FourierSAT: A Fourier Expansion-Based Algebraic Framework for Solving Hybrid Boolean Constraints"*](/pubs/Conferences/FourierSAT.pdf), AAAI Conference on Artificial Intelligence (AAAI-20), 2020.
  
  
  <button id="b_abs_c29"> Abstract </button>
  <button id="b_bib_c29"> Bibtex </button>
  <p id="abs_c29"> <i> The Boolean SATisfiability problem (SAT) is of central importance in computer science. Although SAT is known to be NP-complete, progress on the engineering side, especially that of Conflict-Driven Clause Learning (CDCL) and Local Search SAT solvers, has been remarkable. Yet, while SAT solvers aimed at solving industrial-scale benchmarks in Conjunctive Normal Form (CNF) have become quite mature, SAT solvers that are effective on other types of constraints, e.g., cardinality constraints and XORs, are less well studied; a general approach to handling non-CNF constraints is still lacking. In addition, previous work indicated that for specific classes of benchmarks, the running time of extant SAT solvers depends heavily on properties of the formula and details of encoding, instead of the scale of the benchmarks, which adds uncertainty to expectations of running time.
To address the issues above, we design FourierSAT, an incomplete SAT solver based on Fourier analysis of Boolean functions, a technique to represent Boolean functions by multilinear polynomials. By such a reduction to continuous optimization, we propose an algebraic framework for solving systems consisting of different types of constraints. The idea is to leverage gradient information to guide the search process in the direction of local improvements. Empirical results demonstrate that FourierSAT is more robust than other solvers on certain classes of benchmarks
  </i> </p>
 
  <pre id="bib_c29"><samp>
  		@article{kyrillidis2019fouriersat,
  title={FourierSAT: A Fourier Expansion-Based Algebraic Framework for Solving Hybrid Boolean Constraints},
  author={Kyrillidis, Anastasios and Shrivastava, Anshumali and Vardi, Moshe Y and Zhang, Zhiwei},
  journal={arXiv preprint arXiv:1912.01032},
  year={2019}
}
  </samp></pre>

+ Jacky Y. Zhang, Rajiv Khanna, Anastasios Kyrillidis, Oluwasanmi O. Koyejo, [*``Learning Sparse Distributions using Iterative Hard Thresholding"*](/pubs/Conferences/SparseDist.pdf), Advances in Neural Information Processing Systems (NIPS-2019), 2019.

  <button id="b_abs_c28"> Abstract </button>
  <button id="b_bib_c28"> Bibtex </button>
  <p id="abs_c28"> <i> Iterative hard thresholding (IHT) is a projected gradient descent algorithm, known to achieve state of the art performance for a wide range of structured estimation problems, such as sparse inference. In this work, we consider IHT as a solution to the problem of learning sparse discrete distributions. We study the hardness of using IHT on the space of measures. As a practical alternative, we propose a greedy approximate projection which simultaneously captures appropriate notions of sparsity in distributions, while satisfying the simplex constraint, and investigate the convergence behavior of the resulting procedure in various settings. Our results show, both in theory and practice, that IHT can achieve state of the art results for learning sparse distributions.
  </i> </p>
 
  <pre id="bib_c28"><samp>
  		@inproceedings{zhang2019learning,
  title={Learning Sparse Distributions using Iterative Hard Thresholding},
  author={Zhang, Jacky Y and Khanna, Rajiv and Kyrillidis, Anastasios and Koyejo, Oluwasanmi O},
  booktitle={Advances in Neural Information Processing Systems},
  pages={6757--6766},
  year={2019}
}
  </samp></pre>

+ Ryan Spring, Anastasios Kyrillidis, Vijai Mohan, Anshumali Shrivastava, [*``Compressing Gradient Optimizers via Count-Sketches"*](/pubs/Conferences/count_sketch.pdf), International Conference on Machine Learning (ICML-19), 2019.

  <button id="b_abs_c27"> Abstract </button>
  <button id="b_bib_c27"> Bibtex </button>
  <p id="abs_c27"> <i> Many popular first-order optimization methods (eg, Momentum, AdaGrad, Adam) accelerate the convergence rate of deep learning models. However, these algorithms require auxiliary parameters, which cost additional memory proportional to the number of parameters in the model. The problem is becoming more severe as deep learning models continue to grow larger in order to learn from complex, large-scale datasets. Our proposed solution is to maintain a linear sketch to compress the auxiliary variables. We demonstrate that our technique has the same performance as the full-sized baseline, while using significantly less space for the auxiliary variables. Theoretically, we prove that count-sketch optimization maintains the SGD convergence rate, while gracefully reducing memory usage for large-models. On the large-scale 1-Billion Word dataset, we save 25% of the memory used during training (8.6 GB instead of 11.7 GB) by compressing the Adam optimizer in the Embedding and Softmax layers with negligible accuracy and performance loss.
  </i> </p>
 
  <pre id="bib_c27"><samp>
  		@article{spring2019compressing,
  title={Compressing Gradient Optimizers via Count-Sketches},
  author={Spring, Ryan and Kyrillidis, Anastasios and Mohan, Vijai and Shrivastava, Anshumali},
  journal={arXiv preprint arXiv:1902.00179},
  year={2019}
}
  </samp></pre>


+ Anastasios Kyrillidis, [*``Simple and practical algorithms for $\ell_p$-norm low-rank approximation"*](/pubs/Conferences/LpLR.pdf), Conference on Uncertainty in Artificial Intelligence (UAI-18), 2018.

  <button id="b_abs_c26"> Abstract </button>
  <button id="b_bib_c26"> Bibtex </button>
  <button id="b_pos_c26"> Poster </button>
  <p id="abs_c26"> <i> We propose practical algorithms for entrywise $\ell_p$-norm low-rank approximation, 
for $p = 1$ or $p = \infty$. The proposed framework, which is non-convex and gradient-based, 
is easy to implement and typically attains better approximations, faster, than state of 
the art. From a theoretical standpoint, we show that the proposed scheme can attain 
$(1 + \varepsilon)$-OPT approximations. Our algorithms are not hyperparameter-free: they 
achieve the desiderata only assuming algorithm's hyperparameters are known a priori---or 
are at least approximable. I.e., our theory indicates what problem quantities need to 
be known, in order to get a good solution within polynomial time, and does not contradict to
 recent inapproximabilty results. 
  </i> </p>
 
  <pre id="bib_c26"><samp>
  		@article{kyrillidis2018simple,
  				title={Simple and practical algorithms for $\ell_p$-norm low-rank approximation},
				author={Anastasios Kyrillidis},
				journal={Conference on Uncertainty in Artificial Intelligence (UAI-18)},
		    	year={2018}
				}
  </samp></pre>

+ Rajiv Khanna and Anastasios Kyrillidis, [*``IHT dies hard: Provable accelerated Iterative Hard Thresholding"*](/pubs/Conferences/AccIHT.pdf), Twenty-first International Conference on Artificial Intelligence and Statistics (AISTATS-18), 2018.

  <button id="b_abs_c25"> Abstract </button>
  <button id="b_bib_c25"> Bibtex </button>
  <button id="b_pos_c25"> Poster </button>
  <p id="abs_c25"> <i> We study --both in theory and practice-- the use of momentum motions 
    in classic iterative hard thresholding (IHT) methods. By simply modifying plain IHT, 
    we investigate its convergence behavior on convex optimization criteria with non-convex 
    constraints, under standard assumptions. In diverse scenaria, we observe that 
    acceleration in IHT leads to significant improvements, compared to state of the 
    art projected gradient descent and Frank-Wolfe variants. As a byproduct of our 
    inspection, we study the impact of selecting the momentum parameter: similar to 
    convex settings, two modes of behavior are observed --"rippling" and linear-- 
    depending on the level of momentum.
  </i> </p>
 
  <pre id="bib_c25"><samp>
  		@article{khanna2018IHT,
  				title={IHT dies hard: Provable accelerated Iterative Hard Thresholding},
				author={Rajiv Khanna and Anastasios Kyrillidis},
				journal={Twenty-first International Conference on Artificial Intelligence and Statistics (AISTATS-18)},
		    	year={2018}
				}
  </samp></pre>

+ Tianyang Li, Liu Liu, Anastasios Kyrillidis, and Constantine Caramanis, [*``Statistical inference using SGD"*](/pubs/Conferences/StatSGD.pdf), Thirty-Second AAAI Conference on Artificial Intelligence (AAAI-18), 2018.

  <button id="b_abs_c24"> Abstract </button>
  <button id="b_bib_c24"> Bibtex </button>
  <p id="abs_c24"> <i> We present a novel method for frequentist statistical inference in 
  	$M$-estimation problems, based on stochastic gradient descent (SGD) with a fixed step size: 
  	we demonstrate that the average of such SGD sequences can be used for statistical inference, 
  	after proper scaling. An intuitive analysis using the Ornstein-Uhlenbeck process suggests 
  	that such averages are asymptotically normal. From a practical perspective, our SGD-based 
  	inference procedure is a first order method, and is well-suited for large scale problems. 
  	To show its merits, we apply it to both synthetic and real datasets, and demonstrate that its 
  	accuracy is comparable to classical statistical methods, while requiring potentially far 
  	less computation.
  </i> </p>
 
  <pre id="bib_c24"><samp>
  		@article{li2018statistical,
  				title={Statistical inference using SGD},
				author={Tianyang Li, Liu Liu, Anastasios Kyrillidis, and Constantine Caramanis},
				journal={Thirty-Second AAAI Conference on Artificial Intelligence (AAAI-18)},
		    	year={2018}
				}
  </samp></pre>



+ Dohyung Park, Anastasios Kyrillidis, Constantine Caramanis, and Sujay Sanghavi, [*``Non-square matrix sensing without spurious local minima via the Burer-Monteiro approach"*](/pubs/Conferences/MSLocalMinima.pdf), AI & Statistics Conference (AISTATS-17), 2017.

  <button id="b_abs_c23"> Abstract </button>
  <button id="b_bib_c23"> Bibtex </button>
  <button id="b_pos_c23"> Poster </button>
  <p id="abs_c23"> <i> We consider the non-square matrix sensing problem, under restricted isometry property (RIP) assumptions. 
We focus on the non-convex formulation, where any rank-$r$ matrix $X \in \mathbb{R}^{m \times n}$ is represented 
as $UV^\top$, where $U \in \mathbb{R}^{m \times r}$ and $V \in \mathbb{R}^{n \times r}$. 
In this paper, we complement recent findings on the non-convex geometry of the analogous PSD setting [5], 
and show that matrix factorization does not introduce any spurious local minima, under RIP.
  </i> </p>
 
  <pre id="bib_c23"><samp>
  		@article{park2017non,
  				title={Non-square matrix sensing without spurious local minima via the Burer-Monteiro approach},
				author={Dohyung Park, Anastasios Kyrillidis, Constantine Caramanis, and Sujay Sanghavi},
				journal={AI & Statistics Conference (AISTATS)},
		    	year={2017}
				}
  </samp></pre>


+ Srinadh Bhojanapalli, Anastasios Kyrillidis, and Sujay Sanghavi, [*``Dropping convexity for faster semi-definite optimization"*](/pubs/Conferences/FGD.pdf), Conference on Learning Theory (COLT-16), 2016.

  <button id="b_abs_c22"> Abstract </button>
  <button id="b_bib_c22"> Bibtex </button>
  <button id="b_pos_c22"> Poster </button>
  <button id="b_sof_c22"> Link to software </button>
  <p id="abs_c22"> <i> We study the minimization of a convex function $f(X)$ over the set of 
  $n\times n$ positive semi-definite matrices, but when the problem is recast as 
  $\min_U g(U) :=  f(UU^\top)$, with $U \in \mathbb{R}^{n \times r}$ and $r\leq n$. 
  We study the performance of gradient descent on $g$---which we refer to as Factored 
  Gradient Descent (FGD)---under standard assumptions on the original function $f$.

  We provide a rule for selecting the step size and, with this choice, show that the 
  local convergence rate of FGD mirrors that of standard gradient descent on the original 
  $f$: i.e., after $k$ steps, the error is $O(1/k)$ for smooth $f$, and exponentially small 
  in $k$ when $f$ is (restricted) strongly convex. 
  In addition, we provide a procedure to initialize FGD for (restricted) strongly convex 
  objectives and when one only has access to $f$ via a first-order oracle; 
  for several problem instances, such proper initialization leads to global convergence guarantees.

  FGD and similar procedures are widely used in practice for problems that can be posed as matrix factorization.
  To the best of our knowledge, this is the first paper to provide precise convergence 
  rate guarantees for general convex functions under standard convex assumptions.
  </i> </p>
 
  <pre id="bib_c22"><samp>
  		@article{bhojanapalli2016dropping,
  				title={Dropping convexity for faster semi-definite optimization},
				author={Srinadh Bhojanapalli, Anastasios Kyrillidis, and Sujay Sanghavi},
				journal={Conference on Learning Theory (COLT)},
		    	year={2016}
				}
  </samp></pre>

+ Megasthenis Asteris, Anastasios Kyrillidis, Oluwasanmi Koyejo, and Russell Poldrack, [*``A simple and provable algorithm for sparse diagonal CCA"*](/pubs/Conferences/cca.pdf), International Conference on Machine Learning (ICML-16), 2016.

  <button id="b_abs_c21"> Abstract </button>
  <button id="b_bib_c21"> Bibtex </button>
  <button id="b_pre_c21"> Presentation </button>
  <button id="b_pos_c21"> Poster </button>
  <button id="b_sof_c21"> Link to software </button>
  <p id="abs_c21"> <i> Given two sets of variables, derived from a common set of samples,
	sparse Canonical Correlation Analysis (CCA)
	seeks linear combinations of a small number of variables in each set,
	such that the induced canonical variables are maximally correlated.
	Sparse CCA is NP-hard.

	We propose a novel combinatorial algorithm for sparse diagonal CCA, 
	i.e., sparse CCA under the additional assumption that variables within each set are standardized and uncorrelated.
	Our algorithm operates on a low rank approximation of the input data and its computational complexity scales linearly with the number of input variables.
	It is simple to implement, and parallelizable.
	In contrast to most existing approaches, 
	our algorithm administers precise control on the sparsity of the extracted canonical vectors,
	and comes with theoretical data-dependent global approximation guarantees, that hinge on the spectrum of the input data.
	Finally, it can be straightforwardly adapted to other constrained variants of CCA enforcing structure beyond sparsity.

	We empirically evaluate the proposed scheme
	and apply it on a real neuroimaging dataset to investigate associations between brain activity and behavior measurements.
  </i> </p>
 
  <pre id="bib_c21"><samp>
  		@article{asterix2016simple,
  			title={A simple and provable algorithm for sparse diagonal CCA},
			author={Asterix, Megasthenis and Kyrillidis, Anastasios and Koyejo, Oluwasanmi and Poldrack, Russell},
			journal={arXiv preprint arXiv:1605.08961},
		    year={2016}
		}
  </samp></pre>

+ Anastasios Kyrillidis, Bubacarr Bah, Rouzbeh Hasheminezhad, Quoc Tran-Dinh, Luca Baldassarre, and Volkan Cevher, [*``Convex block-sparse linear regression with expanders, provably"*](/pubs/Conferences/cvx_block_expanders.pdf), AI & Statistics Conference (AISTATS-16), 2016.

  <button id="b_abs_c20"> Abstract </button>
  <button id="b_bib_c20"> Bibtex </button>
  <button id="b_pos_c20"> Poster </button>
  <button id="b_sof_c20"> Link to software </button>
  <p id="abs_c20"> <i> Sparse matrices are favorable objects in machine learning and optimization. 
  When such matrices are used, in place of dense ones, the overall complexity requirements in optimization 
  can be significantly reduced in practice, both in terms of space and run-time. 
  Prompted by this observation, we study a convex optimization scheme for block-sparse recovery from linear measurements. 
  To obtain linear sketches, we use expander matrices, i.e., sparse matrices containing only few 
  non-zeros per column. Hitherto, to the best of our knowledge, such algorithmic solutions have been only 
  studied from a non-convex perspective. Our aim here is to theoretically characterize the performance of 
  convex approaches under such setting. 
  Our key novelty is the expression of the recovery error in terms of the model-based norm, while assuring 
  that solution lives in the model. 
  To achieve this, we show that sparse model-based matrices satisfy a group version of the null-space property. 
  Our experimental findings on synthetic and real applications support our claims for faster recovery 
  in the convex setting -- as opposed to using dense sensing matrices, while showing a 
  competitive recovery performance.  
  </i> </p>
 
  <pre id="bib_c20"><samp>
  		@article{kyrillidis2016convex,
  			title={Convex block-sparse linear regression with expanders--provably},
			author={Kyrillidis, Anastasios and Bah, Bubacarr and Hasheminezhad, Rouzbeh and Tran-Dinh, Quoc and Baldassarre, Luca and Cevher, Volkan},
			journal={arXiv preprint arXiv:1603.06313},
			year={2016}
		}
  </samp></pre>
  
+ Hemant Tyagi, Anastasios Kyrillidis, Bernd Gartner, and Andreas Krause, [*``Learning sparse additive models with interactions in high dimensions"*](/pubs/Conferences/GSPAM.pdf), AI & Statistics Conference (AISTATS-16), 2016.

  <button id="b_abs_c19"> Abstract </button>
  <button id="b_bib_c19"> Bibtex </button>
  <button id="b_pos_c19"> Poster </button>
  <button id="b_sof_c19"> Link to software </button>
  <p id="abs_c19"> <i> A function $f: \mathbb{R}^d \rightarrow \mathbb{R}$ is referred to as a Sparse Additive Model (SPAM), if it is of the
form $f(\mathbf{x}) = \sum_{l \in \mathcal{S}}\phi_{l}(x_l)$, where $\mathcal{S} \subset [d]$, $|\mathcal{S}| \ll d$.
Assuming $\phi_l$'s and $\mathcal{S}$ to be unknown, the problem of estimating $f$ from its samples has been
studied extensively. In this work, we consider a generalized SPAM, allowing for *second order* interaction terms.
For some $\mathcal{S}_1 \subset [d], \mathcal{S}_2 \subset {[d] \choose 2}$, the function $f$ is assumed to be of the form: 
$f(\mathbf{x}) = \sum_{p \in \mathcal{S}_1}\phi_{p} (x_p) + \sum_{(l_1, l_2) \in \mathcal{S}_2}\phi_{(l_1, l_2)} \mathbf{x}_{(l_1, l_2)}.$
Assuming $\phi_{p},\phi_{(l_1, l_2)}$, $\mathcal{S}_1$ and, $\mathcal{S}_2$ to be unknown,
we provide a randomized algorithm that queries $f$ and *exactly recovers* $\mathcal{S}_1,\mathcal{S}_2$. Consequently, this also enables us to estimate the underlying 
$\phi_p, \phi_{(l_1, l_2)}$. We derive sample complexity bounds for our scheme and also extend our analysis
to include the situation where the queries are corrupted with noise -- either stochastic, 
or arbitrary but bounded. Lastly, we provide simulation results on synthetic data, that
validate our theoretical findings. 
  </i> </p>
 
  <pre id="bib_c19"><samp>
  		@article{kyrillidis2016convex,
  			title={Learning Sparse Additive Models with Interactions in High Dimensions},
			author={Tyagi, Hemant and Kyrillidis, Anastasios and Gartner, Bernd and Krause, Andreas},
			journal={arXiv preprint arXiv:1604.05307},
			year={2016}
		}
  </samp></pre>

+ Megasthenis Asteris, Anastasios Kyrillidis, Dimitris Papailiopoulos, and Alex Dimakis, [*``Bipartite correlation clustering: Maximizing agreements"*](/pubs/Conferences/BCC.pdf), AI & Statistics Conference (AISTATS-16), 2016.

  <button id="b_abs_c18"> Abstract </button>
  <button id="b_bib_c18"> Bibtex </button>
  <button id="b_pos_c18"> Poster </button>
  <button id="b_sof_c18"> Link to software </button>
  <p id="abs_c18"> <i> In Bipartite Correlation Clustering (BCC) we are given a complete bipartite graph 
  G with `+' and `-' edges, and we seek a vertex clustering that maximizes the number of agreements: 
  the number of all `+' edges within clusters plus all `-' edges cut across clusters. BCC is known to be NP-hard. 
  
  We present a novel approximation algorithm for k-BCC, a variant of BCC with an upper bound k 
  on the number of clusters. Our algorithm outputs a k-clustering that provably achieves a 
  number of agreements within a multiplicative (1−δ)-factor from the optimal, for any desired 
  accuracy δ. It relies on solving a combinatorially constrained bilinear maximization on 
  the bi-adjacency matrix of G. It runs in time exponential in k and δ−1, but linear in the size of the input. 
  Further, we show that, in the (unconstrained) BCC setting, an (1−δ)-approximation can be 
  achieved by O(δ−1) clusters regardless of the size of the graph. In turn, our k-BCC 
  algorithm implies an Efficient PTAS for the BCC objective of maximizing agreements.
  </i> </p>
 
  <pre id="bib_c18"><samp>
  		@article{asteris2016bipartite,
  			title={Bipartite Correlation Clustering--Maximizing Agreements},
  			author={Asteris, Megasthenis and Kyrillidis, Anastasios and Papailiopoulos, Dimitris and Dimakis, Alexandros G},
  			journal={arXiv preprint arXiv:1603.02782},
  			year={2016}
		}
  </samp></pre>

+ Megasthenis Asteris, Dimitris Papailiopoulos, Anastasios Kyrillidis, and Alex Dimakis, [*``Space PCA via bipartite matchings"*](/pubs/Conferences/Sparse_PCA_Bipartite.pdf), Neural Information Processing Systems (NIPS-15), 2015.

  <button id="b_abs_c17"> Abstract </button>
  <button id="b_bib_c17"> Bibtex </button>
  <button id="b_pos_c17"> Poster </button>
  <p id="abs_c17"> <i> We consider the following multi-component sparse PCA problem:
   given a set of data points, we seek to extract a small number of sparse components with 
   disjoint supports that jointly capture the maximum possible variance.
   Such components can be computed one by one, repeatedly solving the single-component problem 
   and deflating the input data matrix, but this greedy procedure is suboptimal.
   We present a novel algorithm for sparse PCA that jointly optimizes multiple disjoint components. 
   The extracted features capture variance that lies within a multiplicative factor 
   arbitrarily close to $1$ from the optimal.
   Our algorithm is combinatorial and computes the desired components by solving multiple 
   instances of the bipartite maximum weight matching problem.
   Its complexity grows as a low order polynomial in the ambient dimension of the input data, 
   but exponentially in its rank.
   However, it can be effectively applied on a low-dimensional sketch of the input data.
   We evaluate our algorithm on real datasets and empirically demonstrate that 
   in many cases it outperforms existing, deflation-based approaches.
  </i> </p>
 
  <pre id="bib_c17"><samp>
  		@inproceedings{asteris2015sparse,
  			title={Sparse pca via bipartite matchings},
  			author={Asteris, Megasthenis and Papailiopoulos, Dimitris and Kyrillidis, Anastasios and Dimakis, Alexandros G},
  			booktitle={Advances in Neural Information Processing Systems},
  			pages={766--774},
  			year={2015}
		}
  </samp></pre>

+ Megasthenis Asteris, Anastasios Kyrillidis, Alex Dimakis, Han-Gyol Yi and Bharath Chandrasekaran, [*``Stay on path: PCA along graph paths"*](/pubs/Conferences/Stay_on_path.pdf),  International Conference on Machine Learning (ICML-15), 2015.

  <button id="b_abs_c16"> Abstract </button>
  <button id="b_bib_c16"> Bibtex </button>
  <button id="b_pre_c16"> Presentation </button>
  <button id="b_pos_c16"> Poster </button>
  <p id="abs_c16"> <i> We introduce a variant of (sparse) PCA
	in which the set of feasible support sets is determined by a graph.
	In particular, we consider the following setting:
	given a directed acyclic graph~$G$ on $p$ vertices corresponding to variables,
	the non-zero entries of the extracted principal component must coincide with vertices lying along a path in $G$.

	From a statistical perspective, 
	information on the underlying network may potentially reduce the number of observations 
	required to recover the population principal component.
	We consider the canonical estimator which optimally exploits the prior knowledge by solving 
	a non-convex quadratic maximization on the empirical covariance. 
	We introduce a simple network and analyze the estimator under the spiked covariance model.
	We show that side information potentially improves
	the statistical complexity.

	We propose two algorithms to approximate the solution of the constrained quadratic maximization,
	and recover a component with the desired properties.
	We empirically evaluate our schemes on synthetic and real datasets. 
  </i> </p>
 
  <pre id="bib_c16"><samp>
  		@inproceedings{asteris2015stay,
  			title={Stay on path: PCA along graph paths},
  			author={Asteris, Megasthenis and Kyrillidis, Anastasios and Dimakis, EDU Alexandros G and Yi, Han-Gyol and Chandrasekaran, Bharath},
  			booktitle={Proceedings of the 32nd International Conference on Machine Learning (ICML-15)},
  			volume={37},
  			year={2015}
		}	
  </samp></pre>

+ Michail Vlachos, Francesco Fusco, Harry Mavroforakis, Anastasios Kyrillidis and Vassilis Vasileiadis, [*``Improving Co-Cluster Quality with Application to Product Recommendations"*](/pubs/Conferences/km0049-vlachosA.pdf), ACM CIKM International Conference on Information and Knowledge Management, 2014.

  <button id="b_abs_c15"> Abstract </button>
  <button id="b_bib_c15"> Bibtex </button>
  <p id="abs_c15"> <i> Businesses store an ever increasing amount of historical customer
	sales data. Given the availability of such information, it is advantageous
	to analyze past sales, both for revealing dominant buying patterns,
	and for providing more targeted recommendations to clients.
	In this context, co-clustering has proved to be an important datamodeling
	primitive for revealing latent connections between two
	sets of entities, such as customers and products.


	In this work, we introduce a new algorithm for co-clustering that
	is both scalable and highly resilient to noise. Our method is inspired
	by $k$-Means and agglomerative hierarchical clustering approaches:
	$(i)$ first it searches for elementary co-clustering structures and $(ii)$
	then combines them into a better, more compact, solution. The
	algorithm is flexible as it does not require an explicit number of
	co-clusters as input, and is directly applicable on large data graphs.
	We apply our methodology on real sales data to analyze and visualize
	the connections between clients and products. We showcase
	a real deployment of the system, and how it has been used
	for driving a recommendation engine. Finally, we demonstrate that
	the new methodology can discover co-clusters of better quality and
	relevance than state-of-the-art co-clustering techniques.
  </i> </p>
 
  <pre id="bib_c15"><samp>
  		@inproceedings{vlachos2014improving,
  			title={Improving co-cluster quality with application to product recommendations},
			author={Vlachos, Michail and Fusco, Francesco and Mavroforakis, Charalambos and Kyrillidis, Anastasios and Vassiliadis, Vassilios G},
  			booktitle={Proceedings of the 23rd ACM International Conference on Conference on Information and Knowledge Management},
  			pages={679--688},
  			year={2014},
  			organization={ACM}
		}	
  </samp></pre>
  
+ Dimitris Papailiopoulos, Anastasios Kyrillidis and Christos Boutsidis, [*``Provable deterministic leverage scores sampling"*](/pubs/Conferences/frp0826.pdf), ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD-14), 2014.

  <button id="b_abs_c14"> Abstract </button>
  <button id="b_bib_c14"> Bibtex </button>
  <button id="b_sof_c14"> Link to software </button>
  <p id="abs_c14"> <i> We explain theoretically a curious empirical phenomenon: 
    “Approximating a matrix by deterministically selecting a subset of its columns with 
    the corresponding largest leverage scores results in a good low-rank matrix surrogate”. 
    In this work, we provide a novel theoretical analysis of deterministic leverage score 
    sampling. We show that such sampling can be provably as accurate as its randomized 
    counterparts, if the leverage scores follow a moderately steep power-law decay. We 
    support this power-law assumption by providing empirical evidence that such decay 
    laws are abundant in real-world data sets. We then demonstrate empirically the 
    performance of deterministic leverage score sampling, which many times
    matches or outperforms the state-of-the-art techniques.
  </i> </p>
 
  <pre id="bib_c14"><samp>
  		@inproceedings{papailiopoulos2014provable,
  			title={Provable deterministic leverage score sampling},
  			author={Papailiopoulos, Dimitris and Kyrillidis, Anastasios and Boutsidis, Christos},
  			booktitle={Proceedings of the 20th ACM SIGKDD international conference on Knowledge discovery and data mining},
  			pages={997--1006},
  			year={2014},
  			organization={ACM}
		}
  </samp></pre>
  
+ Anastasios Kyrillidis, Rabeeh Karimi Mahabadi, Quoc Tran-Dinh and Volkan Cevher, [*``Scalable sparse covariance estimation via self-concordance"*](/pubs/Conferences/covselect_final.pdf), AAAI Conference on Artificial Intelligence (AAAI-14), 2014.

  <button id="b_abs_c13"> Abstract </button>
  <button id="b_bib_c13"> Bibtex </button>
  <button id="b_pos_c13"> Poster </button>
  <button id="b_sof_c13"> Link to software </button>
  <p id="abs_c13"> <i> We explain theoretically a curious empirical phenomenon: 
    “Approximating a matrix by deterministically selecting a subset of its columns with 
    the corresponding largest leverage scores results in a good low-rank matrix surrogate”. 
    In this work, we provide a novel theoretical analysis of deterministic leverage score 
    sampling. We show that such sampling can be provably as accurate as its randomized 
    counterparts, if the leverage scores follow a moderately steep power-law decay. We 
    support this power-law assumption by providing empirical evidence that such decay 
    laws are abundant in real-world data sets. We then demonstrate empirically the 
    performance of deterministic leverage score sampling, which many times
    matches or outperforms the state-of-the-art techniques.
  </i> </p>
 
  <pre id="bib_c13"><samp>
  		@inproceedings{kyrillidis2014scalable,
  			title={Scalable Sparse Covariance Estimation via Self-Concordance},
  			author={Kyrillidis, Anastasios and Mahabadi, Rabeeh Karimi and Dinh, Quoc Tran and Cevher, Volkan},
  			booktitle={Twenty-Eighth AAAI Conference on Artificial Intelligence},
  			year={2014}
		}
  </samp></pre>
  
+ Anastasios Kyrillidis, Michail Vlachos and Anastasios Zouzias, [*``Approximate matrix multiplication with application to linear embeddings"*](/pubs/Conferences/ApproxMM_arxiv.pdf), IEEE ISIT Symposium, 2014.

  <button id="b_abs_c12"> Abstract </button>
  <button id="b_bib_c12"> Bibtex </button>
  <p id="abs_c12"> <i> In this paper, we study the problem of approximately computing the 
    product of two real matrices. In particular, we analyze a dimensionality-reduction-based 
    approximation algorithm due to Sarlos, introducing the notion of nuclear rank as the ratio
    of the nuclear norm over the spectral norm. The presented bound has improved dependence 
    with respect to the approximation error (as compared to previous approaches), whereas 
    the subspace – on which we project the input matrices – has dimensions proportional to 
    the maximum of their nuclear rank and it is independent of the input dimensions.
    In addition, we provide an application of this result to linear low-dimensional embeddings. 
    Namely, we show that any Euclidean point-set with bounded nuclear rank is amenable to 
    projection onto number of dimensions that is independent of the
    input dimensionality, while achieving additive error guarantees.
  </i> </p>
  
  <pre id="bib_c12"><samp>
  		@inproceedings{kyrillidis2014approximate,
  			title={Approximate matrix multiplication with application to linear embeddings},
  			author={Kyrillidis, Anastasios and Vlachos, Michail and Zouzias, Anastasios},
  			booktitle={2014 IEEE International Symposium on Information Theory},
  			pages={2182--2186},
  			year={2014},
  			organization={IEEE}
		}
  </samp></pre>
  
+ Anastasios Kyrillidis and Anastasios Zouzias, [*``Non-uniform feature sampling in decision tree ensembles"*](/pubs/Conferences/RandDecisionTrees_arxiv.pdf), IEEE ICASSP, 2014.

  <button id="b_abs_c11"> Abstract </button>
  <button id="b_bib_c11"> Bibtex </button>
  <p id="abs_c11"> <i> We study the effectiveness of non-uniform randomized feature selection
   in decision tree classification. We experimentally evaluate two feature selection 
   methodologies, based on information extracted from the provided dataset: $(i)$ leverage scores-based 
   and $(ii)$ norm-based feature selection. Experimental evaluation of the proposed
   feature selection techniques indicate that such approaches might be more effective compared to naive uniform
   feature selection and moreover having comparable performance to the random forest algorithm.
  </i> </p>
  
  <pre id="bib_c11"><samp>
  		@inproceedings{kyrillidis2014non,
  			title={Non-uniform feature sampling for decision tree ensembles},
  			author={Kyrillidis, Anastasios and Zouzias, Anastasios},
  			booktitle={2014 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  			pages={4548--4552},
  			year={2014},
  			organization={IEEE}
		}
  </samp></pre>
  
+ George Skoumas, Dieter Pfoser and Anastasios Kyrillidis, [*``On quantifying qualitative geospatial data: A probabilistic approach"*](/pubs/Conferences/geocrowd.pdf), ACM GEOCROWD, 2013.

  <button id="b_abs_c10"> Abstract </button>
  <button id="b_bib_c10"> Bibtex </button>
  <p id="abs_c10"> <i> Living in the era of data deluge, we have witnessed a web content explosion,
largely due to the massive availability of User-Generated Content
(UGC). In this work, we specifically consider the problem of geospatial
information extraction and representation, where one can exploit diverse
sources of information (such as image and audio data, text data, etc), going
beyond traditional volunteered geographic information. Our ambition
is to include available narrative information in an effort to better explain
geospatial relationships: with spatial reasoning being a basic form of human
cognition, narratives expressing such experiences typically contain
qualitative spatial data, i.e., spatial objects and spatial relationships.
To this end, we formulate a quantitative approach for the representation
of qualitative spatial relations extracted from UGC in the form
of texts. The proposed method quantifies such relations based on multiple
text observations. Such observations provide distance and orientation
features which are utilized by a greedy Expectation Maximization-based
(EM) algorithm to infer a probability distribution over predefined spatial
relationships; the latter represent the quantified relationships under
user-defined probabilistic assumptions. We evaluate the applicability and
quality of the proposed approach using real UGC data originating from
an actual travel blog text corpus. To verify the result quality, we generate
grid-based “maps” visualizing the spatial extent of the various relations.
  </i> </p>
  
  <pre id="bib_c10"><samp>
  		@inproceedings{skoumas2013quantifying,
  			title={On quantifying qualitative geospatial data: a probabilistic approach},
  			author={Skoumas, Georgios and Pfoser, Dieter and Kyrillidis, Anastasios},
  			booktitle={Proceedings of the Second ACM SIGSPATIAL International Workshop on Crowdsourced and Volunteered Geographic Information},
  			pages={71--78},
  			year={2013},
  			organization={ACM}
		}
  </samp></pre>
  
+ Stephen Becker, Volkan Cevher and Anastasios Kyrillidis, [*``Randomized low-memory singular value projection"*](/pubs/Conferences/RandomizedSVP_fixed.pdf), 10th International Conference on Sampling Theory and Applications (SampTA), 2013. *(Authors listed in alphabetical order.)*
 
  <button id="b_abs_c09"> Abstract </button>
  <button id="b_bib_c09"> Bibtex </button>
  <button id="b_pos_c09"> Poster </button>
  <p id="abs_c09"> <i> Affine rank minimization algorithms typically rely on calculating 
    the gradient of a data error followed by a singular value decomposition at every iteration. 
    Because these two steps are expensive, heuristic approximations are often used to reduce 
    computational burden. To this end, we propose a recovery scheme that merges the two 
    steps with randomized approximations, and as a result, operates on space proportional 
    to the degrees of freedom in the problem. We theoretically establish the estimation 
    guarantees of the algorithm as a function of approximation tolerance. While the theoretical 
    approximation requirements are overly pessimistic, we demonstrate that
    in practice the algorithm performs well on the quantum tomography recovery problem.
  </i> </p>
  
  <pre id="bib_c09"><samp>
  		@inproceedings{becker2013randomized,
  			title={Randomized Low-Memory Singular Value Projection},
  			author={Becker, Stephen and Cevher, Volkan and Kyrillidis, Anastasios},
  			booktitle={10th International Conference on Sampling Theory and Applications (Sampta)},
  			year={2013}
		}
  </samp></pre>


+ Anastasios Kyrillidis, Stephen Becker, Volkan Cevher and Christoph Koch, [*``Sparse projections onto the simplex"*](http://jmlr.org/proceedings/papers/v28/kyrillidis13.pdf), International Conference on Machine Learning (ICML-13), 2013.

  <button id="b_abs_c08"> Abstract </button>
  <button id="b_bib_c08"> Bibtex </button>
  <button id="b_pre_c08"> Presentation </button>
  <button id="b_pos_c08"> Poster </button>
  <button id="b_sof_c08"> Link to software </button>
  <p id="abs_c08"> <i> Most learning methods with rank or sparsity
    constraints use convex relaxations, which
    lead to optimization with the nuclear norm
	or the $\ell_1$-norm. However, several important
    learning applications cannot benefit from this
    approach as they feature these convex norms
    as constraints in addition to the non-convex
    rank and sparsity constraints. In this setting,
    we derive efficient sparse projections onto
    the simplex and its extension, and illustrate
    how to use them to solve high-dimensional
    learning problems in quantum tomography,
    sparse density estimation and portfolio selection
    with non-convex constraints.
  </i> </p>
  
  <pre id="bib_c08"><samp>
  		@inproceedings{kyrillidis2013sparse,
  			title={Sparse projections onto the simplex},
  			author={Kyrillidis, Anastasios and Becker, Stephen and Cevher, Volkan and Koch, Christoph},
  			booktitle={Proceedings of The 30th International Conference on Machine Learning},
  			pages={235--243},
  			year={2013}
			}
  </samp></pre>
  
+ Quoc Tran Dinh, Anastasios Kyrillidis and Volkan Cevher, [*``A proximal Newton framework for composite minimization: Graph learning without Cholesky decompositions and matrix inversions"*](http://jmlr.csail.mit.edu/proceedings/papers/v28/trandinh13.pdf), International Conference on Machine Learning (ICML-13), 2013.

  <button id="b_abs_c07"> Abstract </button>
  <button id="b_bib_c07"> Bibtex </button>
  <button id="b_sof_c07"> Link to software </button>
  <p id="abs_c07"> <i> We propose an algorithmic framework for
    convex minimization problems of composite
    functions with two terms: a self-concordant
    part and a possibly nonsmooth regularization
    part. Our method is a new proximal Newton
    algorithm with local quadratic convergence
    rate. As a specific problem instance,
    we consider sparse precision matrix estimation
    problems in graph learning. Via a careful
    dual formulation and a novel analytic stepsize
    selection, we instantiate an algorithm
    within our framework for graph learning that
    avoids Cholesky decompositions and matrix
    inversions, making it attractive for parallel
    and distributed implementations.
  </i> </p>
  
  <pre id="bib_c07"><samp>
  		@inproceedings{dinh2013proximal,
  			title={A proximal Newton framework for composite minimization: Graph learning without Cholesky decompositions and matrix inversions},
  			author={Dinh, Quoc T and Kyrillidis, Anastasios and Cevher, Volkan},
  			booktitle={Proceedings of the 30th International Conference on Machine Learning (ICML-13)},
  			pages={271--279},
  			year={2013}
				}
  </samp></pre>

+ Anastasios Kyrillidis and Volkan Cevher, [*``Fast proximal algorithms for self-concordant minimization with application to sparse graph selection"*](/pubs/Conferences/FirstOrderCovSel.pdf), IEEE ICASSP, 2013.

  <button id="b_abs_c06"> Abstract </button>
  <button id="b_bib_c06"> Bibtex </button>
  <button id="b_pos_c06"> Poster </button>  
  <p id="abs_c06"> <i> The convex $\ell_1$-regularized log det divergence criterion has been
    shown to produce theoretically consistent graph learning. However,
   	this objective function is challenging since the $\ell_1$-regularization is
	nonsmooth, the log det objective is not globally Lipschitz gradient
	function, and the problem is high-dimensional. Using the selfconcordant
	property of the objective, we propose a new adaptive
	step size selection and present the (F)PS ((F)ast Proximal algorithms
	for Self-concordant functions) algorithmic framework which
	has linear convergence and exhibits superior empirical results as
	compared to state-of-the-art first order methods.
  </i> </p>
  
  <pre id="bib_c06"><samp>
  		@inproceedings{kyrillidis2013fast,
  			title={Fast proximal algorithms for self-concordant function minimization with application to sparse graph selection},
  			author={Kyrillidis, Anastasios and Cevher, Volkan},
  			booktitle={2013 IEEE International Conference on Acoustics, Speech and Signal Processing},
  			pages={6585--6589},
  			year={2013},
  			organization={IEEE}
			}
  </samp></pre>
  
+ Anastasios Kyrillidis and Volkan Cevher, [*``Matrix ALPS: Accelerated low rank and sparse matrix reconstruction"*](/pubs/Conferences/lowrank_sparse_v2.pdf), IEEE SSP, 2012.

  <button id="b_abs_c05"> Abstract </button>
  <button id="b_bib_c05"> Bibtex </button>
  <button id="b_pos_c05"> Poster </button>
  <button id="b_sof_c05"> Link to software </button>
  <p id="abs_c05"> <i> We propose Matrix ALPS for recovering a sparse plus low-rank 
  	decomposition of a matrix given its corrupted and incomplete linear measurements. 
  	Our approach is a first-order projected gradient method over non-convex sets, and it 
  	exploits a well-known memory-based acceleration technique. We theoretically characterize 
  	the convergence properties of Matrix ALPS using the stable embedding properties of the
  	linear measurement operator. We then numerically illustrate that our algorithm 
  	outperforms the existing convex as well as non-convex state-of-the-art algorithms in 
  	computational efficiency without sacrificing stability.
  </i> </p>
  
  <pre id="bib_c05"><samp>
  		@inproceedings{kyrillidis2012matrix,
  			title={Matrix {ALPS}: {A}ccelerated low rank and sparse matrix reconstruction},
  			author={Kyrillidis, Anastasios and Cevher, Volkan},
  			booktitle={2012 IEEE Statistical Signal Processing Workshop (SSP)},
  			pages={185--188},
  			year={2012},
 	 		organization={IEEE}
			}
  </samp></pre>
  
+ Anastasios Kyrillidis and Volkan Cevher, [*``Combinatorial selection and least absolute shrinkage via the CLASH algorithm"*](/pubs/Conferences/CLASH_ISIT.pdf), IEEE ISIT, 2012.

  <button id="b_abs_c04"> Abstract </button>
  <button id="b_bib_c04"> Bibtex </button>
  <button id="b_pre_c04"> Presentation </button>
  <button id="b_sof_c04"> Link to software </button>
  <p id="abs_c04"> <i> The least absolute shrinkage and selection operator (LASSO) for 
     linear regression exploits the geometric interplay of the $\ell_2$-data error objective 
     and the $\ell_1$-norm constraint to arbitrarily select sparse models. Guiding this 
     uninformed selection process with sparsity models has been precisely the center of 
     attention over the last decade in order to improve learning performance. To this end, 
     we alter the selection process of LASSO to explicitly leverage combinatorial sparsity 
     models (CSMs) via the combinatorial selection and least absolute shrinkage (CLASH) operator. 
     We provide concrete guidelines how to leverage combinatorial constraints within CLASH, 
     and characterize CLASH’s guarantees as a function of the set restricted isometry constants 
     of the sensing matrix. Finally, our experimental results show that CLASH can outperform 
     both LASSO and model-based compressive sensing in sparse estimation.
  </i> </p>
  
  <pre id="bib_c04"><samp>
  		@inproceedings{kyrillidis2012combinatorial,
  			title={Combinatorial selection and least absolute shrinkage via the {CLASH} algorithm},
  			author={Kyrillidis, Anastasios and Cevher, Volkan},
  			booktitle={Information Theory Proceedings (ISIT), 2012 IEEE International Symposium on},
  			pages={2216--2220},
  			year={2012},
  			organization={IEEE}
				}
  </samp></pre>

+ Anastasios Kyrillidis, Gilles Puy and Volkan Cevher, [*``Hard thresholding with norm constraints"*](/pubs/Conferences/HardThreshNormCon.pdf), IEEE ICASSP, 2012.

  <button id="b_abs_c03"> Abstract </button>
  <button id="b_bib_c03"> Bibtex </button>
  <button id="b_pos_c03"> Poster </button>
  <button id="b_sof_c03"> Link to software </button>
  <p id="abs_c03"> <i> We introduce a new sparse recovery paradigm, called Normed
	Pursuits, where efficient algorithms from combinatorial and convex
	optimization interface for interpretable and model-based solutions.
	Synthetic and real data experiments illustrate that Normed
	Pursuits can significantly enhance the performance of both hard
	thresholding methods and convex solvers in sparse recovery.
  </i> </p>
  
  <pre id="bib_c03"><samp>
  		@inproceedings{kyrillidis2012hard,
  			title={Hard thresholding with norm constraints},
  			author={Kyrillidis, Anastasios and Puy, Gilles and Cevher, Volkan},
  			booktitle={2012 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  			pages={3645--3648},
  			year={2012},
  			organization={IEEE}
				}
  </samp></pre>
  
+ Anastasios Kyrillidis and Volkan Cevher, [*``Recipes on hard thresholding methods"*](/pubs/Conferences/CAMSAP_Recipes_for_HTM.pdf), 4th IEEE CAMSAP, 2011.

  <button id="b_abs_c02"> Abstract </button>
  <button id="b_bib_c02"> Bibtex </button>
  <button id="b_pre_c02"> Presentation </button>
  <button id="b_sof_c02"> Link to software </button>
  <button id="b_med_c02"> ALPS in GAGA </button>
  <p id="abs_c02"> <i> Compressive sensing (CS) is a data acquisition and recovery
	technique for finding sparse solutions to linear inverse problems from
	sub-Nyquist measurements. CS features a wide range of computationally
	efficient and robust signal recovery methods, based on sparsity
	seeking optimization. In this paper, we present and analyze a class
	of sparse recovery algorithms, known as hard thresholding methods.
	We provide optimal strategies on how to set up these algorithms via
	basic “ingredients” for different configurations to achieve complexity vs.
	accuracy tradeoffs. Simulation results demonstrate notable performance
	improvements compared to state-of-the-art algorithms both in terms of
	data reconstruction and computational complexity.
  </i> </p>
  
  <pre id="bib_c02"><samp>
  		@inproceedings{kyrillidis2011recipes,
  			title={Recipes on hard thresholding methods},
  			author={Kyrillidis, Anastasios and Cevher, Volkan},
  			booktitle={4th IEEE International Workshop on Computational Advances in Multi-Sensor Adaptive Processing (CAMSAP)},
  			year={2011}
				}
  </samp></pre>
  
+ Anastasios Kyrillidis and George. N. Karystinos, [*``Rank-deficient quadratic-form maximization over M-phase alphabet: Polynomial-complexity solvability and algorithmic developments"*](/pubs/Conferences/RankD_Conf_v1.pdf), IEEE ICASSP, 2011.

  <button id="b_abs_c01"> Abstract </button>
  <button id="b_bib_c01"> Bibtex </button>
  <button id="b_pre_c01"> Presentation </button>
  <button id="b_sof_c01"> Link to software </button>
  <p id="abs_c01"> <i> The maximization of a positive (semi)definite complex
	quadratic form over a finite alphabet is NP-hard and
	achieved through exhaustive search when the form has full rank.
	However, if the form is rank-deficient, the optimal solution can
	be computed with only polynomial complexity in the length $N$ of
	the maximizing vector. In this work, we consider the general case
	of a rank-$D$ positive (semi)definite complex quadratic form and
	develop a method that maximizes the form with respect to a $M$-phase
	vector with polynomial complexity. The proposed method
	efficiently reduces the size of the feasible set from exponential
	to polynomial. We also develop an algorithm that constructs the
	polynomial-size candidate set in polynomial time and observe
	that it is fully parallelizable and rank-scalable.
  </i> </p>
  
  <pre id="bib_c01"><samp>
  		@inproceedings{kyrillidis2011rank,
  			title={Rank-deficient quadratic-form maximization over $M$-phase alphabet: Polynomial-complexity solvability and algorithmic developments},
  			author={Kyrillidis, Anastasios and Karystinos, George},
  			booktitle={2011 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  			pages={3856--3859},
  			year={2011},
  			organization={IEEE}
				}
  </samp></pre>

## Journals

+ Fangshuo Liao, Anastasios Kyrillidis, [*``On the Convergence of Shallow Neural Network Training with Randomly Masked Neurons"*](https://arxiv.org/pdf/2112.02668.pdf), Transactions on Machine Learning Research (TMLR), 2022. 
  
  <button id="b_abs_j17"> Abstract </button>
  <button id="b_bib_j17"> Bibtex </button>
   <p id="abs_j17"> <i>  With the motive of training all the parameters of a neural network, we study why and when one can achieve this by iteratively creating, training, and combining randomly selected subnetworks. Such scenarios have either implicitly or explicitly emerged in the recent literature: see e.g., the Dropout family of regularization techniques, or some distributed ML training protocols that reduce communication/computation complexities, such as the Independent Subnet Training protocol. While these methods are studied empirically and utilized in practice, they often enjoy partial or no theoretical support, especially when applied on neural network-based objectives. In this manuscript, our focus is on overparameterized single hidden layer neural networks with ReLU activations in the lazy training regime. By carefully analyzing i) the subnetworks’ neural tangent kernel, ii) the surrogate functions’ gradient, and iii) how we sample and combine the surrogate functions, we prove linear convergence rate of the training error –up to a neighborhood around the optimal point– for an overparameterized single-hidden layer perceptron with a regression loss. Our analysis reveals a dependency of the size of the neighborhood around the optimal point on the number of surrogate models and the number of local training steps for each selected subnetwork. Moreover, the considered framework generalizes and provides new insights on dropout training, multi-sample dropout training, as well as Independent Subnet Training; for each case, we provide convergence results as corollaries of our main theorem.
   </i> </p>
   
   <pre id="bib_j17"><samp>
   		@article{liao2021convergence,
  title={On the convergence of shallow neural network training with randomly masked neurons},
  author={Liao, Fangshuo and Kyrillidis, Anastasios},
  journal={arXiv preprint arXiv:2112.02668},
  year={2021}
}
   </samp></pre>
   
   + Junhyung Lyle Kim, Mohammad Taha Toghani, Cesar A. Uribe, Anastasios Kyrillidis, [*``Local Stochastic Factored Gradient Descent for Distributed Quantum State Tomography"*](https://arxiv.org/pdf/2203.11579.pdf), IEEE Control Systems Letters (L-CSS), 2022. 
  
  <button id="b_abs_j16"> Abstract </button>
  <button id="b_bib_j16"> Bibtex </button>
   <p id="abs_j16"> <i>  We propose a distributed Quantum State Tomography (QST) protocol, named Local Stochastic Factored Gradient Descent (Local SFGD), to learn the low-rank factor of a density matrix over a set of local machines. QST is the canonical procedure to characterize the state of a quantum system, which we formulate as a stochastic nonconvex smooth optimization problem. Physically, the estimation of a low-rank density matrix helps characterizing the amount of noise introduced by quantum computation. Theoretically, we prove the local convergence of Local SFGD for a general class of restricted strongly convex/smooth loss functions, i.e., Local SFGD converges locally to a small neighborhood of the global optimum at a linear rate with a constant step size, while it locally converges exactly at a sub-linear rate with diminishing step sizes. With a proper initialization, local convergence results imply global convergence. We validate our theoretical findings with numerical simulations of QST on the Greenberger-Horne-Zeilinger (GHZ) state.
   </i> </p>
   
   <pre id="bib_j16"><samp>
   		@article{kim2022local,
  title={Local Stochastic Factored Gradient Descent for Distributed Quantum State Tomography},
  author={Kim, Junhyung Lyle and Toghani, Mohammad Taha and Uribe, C{\'e}sar A and Kyrillidis, Anastasios},
  journal={arXiv preprint arXiv:2203.11579},
  year={2022}
}
   </samp></pre>
   
   + Anastasios Kyrillidis, Anshumali Shrivastava, Moshe Y Vardi, Zhiwei Zhang, [*``Solving hybrid Boolean constraints in continuous space via multilinear Fourier expansions"*](/pubs/Journals/fourierSAT.pdf), Artificial Intelligence, Elsevier, 2021. 
  
  <button id="b_abs_j15"> Abstract </button>
  <button id="b_bib_j15"> Bibtex </button>
   <p id="abs_j15"> <i>  The Boolean SATisfiability problem (SAT) is of central importance in computer science. Although SAT is known to be NP-complete, progress on the engineering side—especially that of Conflict-Driven Clause Learning (CDCL) and Local Search SAT solvers—has been remarkable. Yet, while SAT solvers, aimed at solving industrial-scale benchmarks in Conjunctive Normal Form (CNF), have become quite mature, SAT solvers that are effective on other types of constraints (e.g., cardinality constraints and XORs) are less well-studied; a general approach to handling non-CNF constraints is still lacking. To address the issue above, we design FourierSAT,1 an incomplete SAT solver based on Fourier Analysis (also known as Walsh-Fourier Transform) of Boolean functions, a technique to represent Boolean functions by multilinear polynomials. By such a reduction to continuous optimization, we propose an algebraic framework for solving systems consisting of different types of constraints. The idea is to leverage gradient information to guide the search process in the direction of local improvements. We show this reduction enjoys interesting theoretical properties. Empirical results demonstrate that FourierSAT can be a useful complement to other solvers on certain classes of benchmarks.
   </i> </p>
   
   <pre id="bib_j15"><samp>
   		@article{kyrillidis2021solving,
  title={Solving hybrid Boolean constraints in continuous space via multilinear Fourier expansions},
  author={Kyrillidis, Anastasios and Shrivastava, Anshumali and Vardi, Moshe Y and Zhang, Zhiwei},
  journal={Artificial Intelligence},
  volume={299},
  pages={103559},
  year={2021},
  publisher={Elsevier}
}
   </samp></pre>


+ Amir Kalev, Anastasios Kyrillidis, and Norbert M Linke, [*``Validating and certifying stabilizer states"*](/pubs/Journals/stabilizer_states.pdf), Physical Review A, 2019. 
  
  <button id="b_abs_j14"> Abstract </button>
  <button id="b_bib_j14"> Bibtex </button>
   <p id="abs_j14"> <i>  We propose a measurement scheme that validates the preparation of an $n$-qubit stabilizer state. 
     The scheme involves a measurement of $n$ Pauli observables, a priori determined from the stabilizer state and which can be realized using single-qubit gates. 
     Based on the proposed validation scheme, we derive an explicit expression for the worst-case fidelity, i.e., the minimum fidelity between the stabilizer 
     state and any other state consistent with the measured data. We also show that the worst-case fidelity can be certified, with high probability, using $O(n^2)$
     copies of the state.	
   </i> </p>
   
   <pre id="bib_j14"><samp>
   		@article{PhysRevA.99.042337,
  			title = {Validating and certifying stabilizer states},
  			author = {Kalev, Amir and Kyrillidis, Anastasios and Linke, Norbert M.},
  			journal = {Phys. Rev. A},
  			volume = {99},
  			issue = {4},
  			pages = {042337},
  			numpages = {6},
  			year = {2019},
  			month = {Apr},
  			publisher = {American Physical Society}
		} 
   </samp></pre>


+ Ya-Ping Hsieh, Yu-Chun Kao, Rabeeh Karimi Mahabadi, Yurtsever Alp, Anastasios Kyrillidis, Volkan Cevher, [*``A Non-Euclidean Gradient Descent Framework for Non-Convex Matrix Factorization"*](/pubs/Journals/non_euclidean_noncvx.pdf), IEEE Transactions on Signal Processing, 2018. 
  
  <button id="b_abs_j13"> Abstract </button>
  <button id="b_bib_j13"> Bibtex </button>
   <p id="abs_j13"> <i>   We study convex optimization problems that feature low-rank matrix solutions. In such scenarios, non-convex methods offer significant advantages over convex methods due to their lower space complexity, as well as practical faster convergence. Under mild assumptions, these methods feature global convergence guarantees. In this paper, we extend the results on this matter by following a different path. We derive a non-Euclidean optimization framework in the non-convex setting that takes nonlinear gradient steps on the factors. Our framework enables the possibility to further exploit the underlying problem structures, such as sparsity or low-rankness on the factorized domain, or better dimensional dependence of the smoothness parameters of the objectives. We prove that the non-Euclidean methods enjoy the same rigorous guarantees as their Euclidean counterparts under appropriate assumptions. Numerical evidence with Fourier ptychography and FastText applications, using real data, shows that our approach can enhance solution quality, as well as convergence speed over the standard non-convex approaches.
	</i> </p>
   
   <pre id="bib_j13"><samp>
   		@article{hsieh2018non,
  title={A non-Euclidean gradient descent framework for non-convex matrix factorization},
  author={Hsieh, Ya-Ping and Kao, Yu-Chun and Mahabadi, Rabeeh Karimi and Yurtsever, Alp and Kyrillidis, Anastasios and Cevher, Volkan},
  journal={IEEE Transactions on Signal Processing},
  volume={66},
  number={22},
  pages={5917--5926},
  year={2018},
  publisher={IEEE}
}   
  </samp></pre>

+ Dohyung Park, Anastasios Kyrillidis, Constantine Caramanis, and Sujay Sanghavi, [*``Finding low-rank solutions via non-convex matrix factorization, efficiently and provably"*](/pubs/Journals/finding_low_rank.pdf), SIAM Journal on Imaging Sciences, 2018. 
  
  <button id="b_abs_j12"> Abstract </button>
  <button id="b_bib_j12"> Bibtex </button>
   <p id="abs_j12"> <i>   A rank-$r$ matrix $X \in \mathbb{R}^{m \times n}$ can be written as a product $U V^\top$, where $U \in \mathbb{R}^{m \times r}$ and $V \in \mathbb{R}^{n \times r}$. One could exploit this observation in optimization: e.g., consider the minimization of a convex function $f(X)$ over rank-$r$ matrices, where the set of low-rank matrices is modeled via $UV^\top$. Though such parameterization reduces the number of variables and is more computationally efficient (of particular interest is the case $r \ll \min\{m, n\}$), it comes at a cost: $f(U V^\top)$ becomes a nonconvex function w.r.t. $U$ and $V$. We study such parameterization on generic convex objectives $f$ and focus on first-order, gradient descent algorithms. We propose the bifactored gradient descent (BFGD) algorithm, an efficient first-order method that operates directly on the $U, V$ factors. We show that when $f$ is (restricted) smooth, BFGD has local sublinear convergence; when $f$ is both (restricted) smooth and (restricted) strongly convex, it has local linear convergence. For several applications, we provide simple and efficient initialization schemes that provide initial conditions, good enough for the above convergence results to hold, globally. Extensive experimental results support our arguments that BFGD is an efficient and accurate nonconvex method, compared to state-of-the-art approaches.
	</i> </p>
   
   <pre id="bib_j12"><samp>
   		@article{park2018finding,
  title={Finding low-rank solutions via nonconvex matrix factorization, efficiently and provably},
  author={Park, Dohyung and Kyrillidis, Anastasios and Caramanis, Constantine and Sanghavi, Sujay},
  journal={SIAM Journal on Imaging Sciences},
  volume={11},
  number={4},
  pages={2165--2204},
  year={2018},
  publisher={SIAM}
}
   </samp></pre>


+ Anastasios Kyrillidis, Amir Kalev, Dohyung Park, Srinadh Bhojanapalli, Constantine Caramanis and Sujay Sanghavi, [*``Provable compressed sensing quantum state tomography via non-convex methods"*](/pubs/Journals/QST.pdf), Nature Journal on Quantum Information, 2018. 
  
  <button id="b_abs_j11"> Abstract </button>
  <button id="b_bib_j11"> Bibtex </button>
   <p id="abs_j11"> <i>   With nowadays steadily growing quantum processors, it is required to 
   develop new quantum tomography tools that are tailored for high-dimensional systems. In this 
   work, we describe such a computational tool, based on recent ideas from non-convex optimization. 
   The algorithm excels in the compressed sensing setting, where only a few data points are 
   measured from a low-rank or highly-pure quantum state of a high-dimensional system. We show 
   that the algorithm can practically be used in quantum tomography problems that are beyond 
   the reach of convex solvers, and, moreover, is faster and more accurate than other state-of-the-art 
   non-convex approaches. Crucially, we prove that, despite being a non-convex program, under 
   mild conditions, the algorithm is guaranteed to converge to the global minimum of the quantum 
   state tomography problem; thus, it constitutes a provable quantum state tomography protocol.
	</i> </p>
   
   <pre id="bib_j11"><samp>
   		@article{kyrillidis2018provable,
  			title={Provable compressed sensing quantum state tomography via non-convex methods},
  			author={Kyrillidis, Anastasios and Kalev, Amir and Park, Dohyung and Bhojanapalli, Srinadh and Caramanis, Constantine and Sanghavi, Sujay},
  			journal={npj Quantum Information},
  			volume={4},
  			number={1},
  			pages={36},
  			year={2018},
  			publisher={Nature Publishing Group}
		}
   </samp></pre>

+ Quoc Tran Dinh, Anastasios Kyrillidis, and Volkan Cevher, [*``A single-phase, proximal path-following framework"*](/pubs/Journals/TranDinhKyrillidisCevher_PathFollowing_Alg.pdf), Mathematics of Operations Research, 2017. 
  
  <button id="b_abs_j10"> Abstract </button>
  <button id="b_bib_j10"> Bibtex </button>
   <p id="abs_j10"> <i>   We propose a new proximal, path-following framework for a class of constrained convex problems. 
   		We consider settings where the nonlinear—and possibly non-smooth—objective part is endowed with a proximity operator, 
   		and the constraint set is equipped with a self-concordant barrier. Our approach relies on the following two main ideas.
   		 First, we re-parameterize the optimality condition as an auxiliary problem, such that a good initial point is 
   		 available; by doing so, a family of alternative paths towards the optimum is generated. Second, we combine the 
   		 proximal operator with path-following ideas to design a single-phase, proximal, path-following algorithm. We prove 
   		 that our scheme has the same $O(\sqrt{\nu} \log(1/\varepsilon))$ worst-case iteration-complexity with standard 
   		 approaches [34, 38] without requiring an initial phase, where $\nu$ is the barrier parameter and $\varepsilon$ is 
   		 a desired accuracy. Our framework allows errors in the calculation of proximal- Newton directions, 
   		 without sacrificing the worst-case iteration complexity. We demonstrate the merits of our algorithm 
   		 via three numerical examples, where proximal operators play a key role.
	</i> </p>
   
   <pre id="bib_j10"><samp>
   		@article{tran2016single,
  			title={A single-phase, proximal path-following framework},
  			author={Tran-Dinh, Quoc and Kyrillidis, Anastasios and Cevher, Volkan},
  			journal={arXiv preprint arXiv:1603.01681},
  			year={2016}
		}
   </samp></pre>


+ Hemant Tyagi, Anastasios Kyrillidis, Bernd Gartner, and Andreas Krause, [*``Algorithms for Learning Sparse Additive Models with Interactions in High Dimensions"*](/pubs/Journals/GSPAM.pdf), Information and Inference: A journal of the IMA, 2017. 
  
  <button id="b_abs_j9"> Abstract </button>
  <button id="b_bib_j9"> Bibtex </button>
  <button id="b_sof_j9"> Link to software </button>
   <p id="abs_j9"> <i>   A function $f: \mathbb{R}^d \rightarrow \mathbb{R}$ is a Sparse Additive Model (SPAM), if it 
   		is of the form $f(\mathbf{x}) = \sum_{l \in \mathcal{S}}\phi_{l}(x_l)$ where $\mathcal{S} \subset [d]$, $|\mathcal{S}| \ll d$. 
   		Assuming $\phi$'s, $\mathcal{S}$ to be unknown, there exists extensive work for estimating $f$ from its samples. 
   		In this work, we consider a generalized version of SPAMs, that also allows for the presence of a sparse number of 
   		second order interaction terms. For some $\mathcal{S}_1 \subset [d], \mathcal{S}_2 \subset {[d] \choose 2}$, 
   		with $|\mathcal{S}_1| \ll d, |\mathcal{S}_2| \ll d^2$, the function $f$ is now assumed to be of the form:
		$\sum_{p \in \mathcal{S}_1}\phi_{p} (x_p) + \sum_{(l,l^{\prime}) \in \mathcal{S}_2}\phi_{(l,l^{\prime})} (x_l,x_{l^{\prime}})$. 
		Assuming we have the freedom to query $f$ anywhere in its domain, we derive efficient algorithms that provably 
		recover $\mathcal{S}_1,\mathcal{S}_2$ with finite sample bounds. Our analysis covers the noiseless setting where 
		exact samples of $f$ are obtained, and also extends to the noisy setting where the queries are corrupted with noise. 
		For the noisy setting in particular, we consider two noise models namely: i.i.d Gaussian noise and arbitrary but 
		bounded noise. Our main methods for identification of $\mathcal{S}_2$ essentially rely on estimation of sparse 
		Hessian matrices, for which we provide two novel compressed sensing based schemes. Once 
		$\mathcal{S}_1, \mathcal{S}_2$ are known, we show how the individual components $\phi_p$, $\phi_{(l,l^{\prime})}$ 
		can be estimated via additional queries of $f$, with uniform error bounds. Lastly, we provide simulation results 
		on synthetic data that validate our theoretical findings.
	</i> </p>
   
   <pre id="bib_j9"><samp>
   		@article{tyagi2017algorithms,
  			title={Algorithms for Learning Sparse Additive Models with Interactions in High Dimensions},
  			author={Tyagi, Hemant and Kyrillidis, Anastasios and G{\"a}rtner, Bernd and Krause, Andreas},
  			journal={Information and Inference: A journal of the IMA},
  			year={2017}
		}
   </samp></pre>

+ Luca Baldassarre, Nirav Bhan, Volkan Cevher, Anastasios Kyrillidis and Siddhartha Satpathi, [*``Group-sparse model selection: Hardness and relaxations"*](/pubs/Journals/GroupSparse-IT.pdf), IEEE Trans. on Information Theory, 2016. *(Authors listed in alphabetical order.)*
  
  <button id="b_abs_j8"> Abstract </button>
  <button id="b_bib_j8"> Bibtex </button>
   <p id="abs_j8"> <i> Group-based sparsity models are instrumental in linear and non-linear
		regression problems. The main premise of these models is the recovery of “interpretable” 
		signals through the identification of their constituent groups, which can also 
		provably translate in substantial savings in the number of measurements for linear 
		models in compressive sensing. In this paper, we establish a combinatorial framework 
		for group-model selection problems and highlight the underlying tractability issues. 
		In particular, we show that the group-model selection problem is equivalent to the 
		well-known NP-hard weighted maximum coverage problem (WMC). Leveraging a graph-based 
		understanding of group models, we describe group structures which enable correct model 
		selection in polynomial time via dynamic programming. Furthermore, we show that 
		popular groups structures can be explained by linear inequalities involving totally 
		unimodular matrices, which afford other polynomial time algorithms based on relaxations. 
		We also present a generalization of the group-model that allows for within group sparsity, 
		which can be used to model hierarchical sparsity. Finally, we study the Pareto frontier 
		between approximation error and sparsity budget of group- sparse approximations for two 
		tractable models, among which the tree sparsity model, and illustrate selection and 
		computation trade-offs between our framework and the existing convex relaxations. 
		</i> </p>
   
   <pre id="bib_j8"><samp>
   		@article{baldassarre2013group,
  			title={Group-sparse model selection: Hardness and relaxations},
  			author={Baldassarre, Luca and Bhan, Nirav and Cevher, Volkan and Kyrillidis, Anastasios and Satpathi, Siddhartha},
  			journal={arXiv preprint arXiv:1303.3207},
		  	year={2013}
				}
   </samp></pre>

+ Georgios Skoumas, Dieter Pfoser, Anastasios Kyrillidis and Timos Sellis, [*``Location estimation using crowdsourced spatial relations"*](/pubs/Journals/LocationEstimation.pdf), ACM Transactions on Spatial Algorithms and Systems, vol. 2, issue 2, 2016. 
  
  <button id="b_abs_j7"> Abstract </button>
  <button id="b_bib_j7"> Bibtex </button>
   <p id="abs_j7"> <i> The “crowd” has become a very important geospatial data provider. 
   Specifically, nonexpert users have been providing a wealth of quantitative geospatial data 
   (e.g., geotagged tweets or photos, online). With spatial reasoning being a basic form of 
   human cognition, textual narratives expressing user travel experiences (e.g., travel blogs) 
   would provide an even bigger source of geospatial data. Narratives typically contain 
   qualitative geospatial data in the form of objects and spatial relations (e.g., “St. John’s 
   church is to the North of the Acropolis museum.” The scope of this work is (i) to extract 
   these spatial relations from textual narratives, (ii) to quantify (model) them, and (iii) 
   to reason about object locations based only on the quantified spatial relations. We use 
   information extraction methods to identify toponyms and spatial relations, and we formulate 
   a quantitative approach based on distance and orientation features to represent the latter. 
   Probability density functions (PDFs) for spatial relations are determined by means of a 
   greedy expectation maximization (EM)-based algorithm. These PDFs are then used to estimate 
   unknown object locations. Experiments using a text corpus harvested from travel blog sites 
   establish the considerable location estimation accuracy of the proposed approach on synthetic 
   and real-world scenarios. </i> </p>
   
   <pre id="bib_j7"><samp>
   		@article{skoumas2016location,
 			author = {Skoumas, Georgios and Pfoser, Dieter and Kyrillidis, Anastasios and Sellis, Timos},
 			title = {Location Estimation Using Crowdsourced Spatial Relations},
 			journal = {ACM Trans. Spatial Algorithms Syst.},
 			volume = {2},
 			number = {2}, 		
			year = {2016},
 			pages = {5:1--5:23},
 			publisher = {ACM},
		} 
   </samp></pre>

+ Quoc Tran Dinh, Anastasios Kyrillidis and Volkan Cevher, [*``Composite self-concordant minimization"*](/pubs/Journals/TranDinhKyrillidisCevher_ComSelfMin2013.pdf), Journal of Machine Learning Research, 16(Mar):371−416, 2015.
  
  <button id="b_abs_j6"> Abstract </button>
  <button id="b_bib_j6"> Bibtex </button>
  <button id="b_pre_j6"> Presentation </button>
  <button id="b_pos_j6"> Poster </button>
  <button id="b_sof_j6"> Link to software </button>
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
  <button id="b_pre_j4"> Presentation </button>
  <button id="b_sof_j4"> Link to software </button>
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
  <button id="b_pre_j3"> Presentation </button>
  <button id="b_sof_j3"> Link to software </button>
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
  <button id="b_sof_j2"> Link to software </button>
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
  <button id="b_pre_j1"> Presentation (by Mr. Nikos) </button>
  <button id="b_sof_j1"> Link to software </button>
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
  
  
## Book chapters
+ Volkan Cevher, Sina Jafarpour and Anastasios Kyrillidis, [*``Linear inverse problems with norm and sparsity constraints"*](/pubs/Journals/LIP.pdf), in Practical Applications of Sparse Modeling, Sept. 2014, MIT Press, *(Authors listed in alphabetical order)*.

  <button id="b_abs_b02"> Abstract </button>
  <button id="b_bib_b02"> Bibtex </button>
  <button id="b_med_b02"> Link to book </button>
  <p id="abs_b02"> <i> We describe two nonconventional algorithms for linear regression, 
  	called GAME and CLASH. The salient characteristics of these approaches is that they 
  	exploit the convex $\ell_1$-ball and non-convex $\ell_0$-sparsity constraints jointly 
  	in sparse recovery. To establish the theoretical approximation guarantees of GAME and 
  	CLASH, we cover an interesting range of topics from game theory, convex and combinatorial 
  	optimization. We illustrate that these approaches lead to improved theoretical 
  	guarantees and empirical performance beyond convex and non-convex solvers alone.
  </i> </p>
  
  <pre id="bib_b02"><samp>
  		@article{cevher2014linear,
  			title={Linear inverse problems with norm and sparsity constraints},
  			author={Cevher, Volkan and Jafarpour, Sina and Kyrillidis, Anastasios},
  			journal={Practical Applications of Sparse Modeling},
  			pages={179},
  			year={2014},
  			publisher={MIT Press}
				}
  </samp></pre>
  
+ Anastasios Kyrillidis, Luca Baldassarre, Marwa El-Halabi, Quoc Tran-Dinh and Volkan Cevher, [*``Structured sparsity: discrete and convex approaches"*](/pubs/Journals/CS_Book_StructSparse.pdf), in Compressed sensing and its application, Springer, 2014.

  <button id="b_abs_b01"> Abstract </button>
  <button id="b_bib_b01"> Bibtex </button>
  <button id="b_med_b01"> Link to book </button>
  <p id="abs_b01"> <i> Compressive sensing (CS) exploits sparsity to recover sparse or compressible 
  	signals from dimensionality reducing, non-adaptive sensing mechanisms. Sparsity is also 
  	used to enhance interpretability in machine learning and statistics applications: While 
  	the ambient dimension is vast in modern data analysis problems, the relevant information 
  	therein typically resides in a much lower dimensional space. However, many solutions 
  	proposed nowadays do not leverage the true underlying structure. Recent results in CS 
  	extend the simple sparsity idea to more sophisticated structured sparsity models, which 
  	describe the interdependency between the nonzero components of a signal, allowing to 
  	increase the interpretability of the results and lead to better recovery performance. 
  	In order to better understand the impact of structured sparsity, in this chapter we analyze 
  	the connections between the discrete models and their convex relaxations, highlighting 
  	their relative advantages. We start with the general group sparse model and then elaborate 
  	on two important special cases: the dispersive and the hierarchical models. For each, we 
  	present the models in their discrete nature, discuss how to solve the ensuing discrete 
  	problems and then describe convex relaxations. We also consider more general structures 
  	as defined by set functions and present their convex proxies. Further, we discuss efficient 
  	optimization solutions for structured sparsity problems and illustrate structured sparsity 
  	in action via three applications.
  </i> </p>
  
  <pre id="bib_b01"><samp>
  		@incollection{kyrillidis2015structured,
  			title={Structured sparsity: Discrete and convex approaches},
  			author={Kyrillidis, Anastasios and Baldassarre, Luca and El Halabi, Marwa and Tran-Dinh, Quoc and Cevher, Volkan},
  			booktitle={Compressed Sensing and its Applications},
  			pages={341--387},
  			year={2015},
  			publisher={Springer}
				}
  </samp></pre>
  
## Theses
+ Anastasios Kyrillidis, [*``Rigorous optimization recipes for sparse and low rank inverse problems with applications in data sciences"*](/pubs/Theses/Rigorous_optimization_recipes.pdf), Ph.D. Thesis, School of Computer and Communications, EPFL, September 2014.
+ Anastasios Kyrillidis, [*``Polynomial-complexity computation of the M-phase vector that maximizes a rank-deficient quadratic form"*](/pubs/Theses/RankD_Thesis.pdf), M.Sc. Thesis, Dept. Electronic Engineering and Computer Science, Technical University of Crete, July 2010.

