---
layout: page
fb_comments: 3
title: A short note on the Adagrad algorithm.
---

## **The AdaGrad algorithm**

In this note, I briefly describe the main points of the [AdaGrad algorithm](http://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf). 

*Disclaimer: These notes assume that the reader can build up the story by just looking into the mathematical expressions.*

### **Problem setting**

The original Adagrad algorithm was designed for convex objectives with an empirical loss form:

$$
\begin{equation*}
\begin{aligned}
\underset{x}{\text{min}} ~F(x) := \sum_{i = 1}^n f_i(x)
\end{aligned}
\end{equation*}
$$

*For simplicity, we have removed any constraints on $x$, and we assume $f_i(\cdot)$ are differentiable with gradient $\nabla f_i(x)$.*

Gradient descent (GD) follows the recursion:

$$
x_{t+1} = x_{t} - \eta \nabla F(x_{t}),
$$

and stochastic gradient descent (SGD) satisfies:

$$
x_{t+1} = x_{t} - \eta_{t} \nabla f_{i_t}(x_{t}),
$$ 

where the difference lies in the gradient calculation (*i.e.*, using all $f_i(\cdot)$ or a subset of them).

### **Using preconditioners in gradient descent**

Another method, that is usually deprecated due to its increased computational complexity, is Newton's method.
Newton's method favors a much faster convergence rate (number of iterations) at the cost of being more expensive per iteration (trade-off).
For convex problems, the recursion is similar to GD:

$$
x_{t+1} = x_{t} - \eta H^{-1} \nabla F(x_{t}),
$$

where $\eta$ is often close to one (damped-Newton) or one, and $H^{-1}$ denotes the Hessian of $F$ at the current point.

The above suggest a general rule in optimization: find any preconditioner (in convex optimization it has to be positive semi-definite) that improves --at least in practice-- the performance of gradient descent (in terms of iterations to get to an $\varepsilon$-close solution), but without wasting too much "energy" to compute that precoditioner. 
The above result into:

$$
x_{t+1} = x_{t} - \eta B^{-1} \nabla F(x_{t}),
$$

where preconditioner = $B$.

These ideas date back to 50's; look for the DFP method, the BFGS method and the Dennis and More analysis.


### The AdaGrad variation

The AdaGrad algorithm is just a variant of preconditioned stochastic gradient descent, where $B$ is cleverly selected and updated regularly, and the gradient calculation follows SGD.

In particular, $B_t$ is selected to be a *diagonal* preconditioner matrix and is updated using the stochastic gradient information, as follows:

$$
B_t := \texttt{diag}\left(\sum_{j = 1}^j \nabla f_{i_j}(x_{j}) \cdot \nabla f_{i_j}(x_{j})^\top \right)^{1/2};
$$

*i.e.*, it is the diagonal approximation of the inverse of the square roots of gradient outer products, until the $t$-th iteration. 
This way we obtain different weights for each variable component (that's why we have the $\texttt{diag}(\cdot)$ part), and hopefully we can keep the step size $\eta$ constant.

The above lead to the recursion:

$$
x_{t+1} = x_{t} - \eta B_t^{-1} \nabla f_{i_t}(x_{t}) = x_{t} - \frac{\eta}{(B_t)_{jj}} \odot \nabla f_{i_t}(x_{t}),
$$

where $(B_t)_{jj}$ is when we focus only the diagonal elements of the matrix.

#### **Practical variant**

In order to avoid divisions with zeros, one adds a very small quantity $\zeta > 0$ in the denominator (with a slight abuse of notation):

$$
x_{t+1} = x_{t} - \eta B_t^{-1} \nabla f_{i_t}(x_{t}) = x_{t} - \frac{\eta}{(B_t)_{jj} + \zeta} \odot \nabla f_{i_t}(x_{t}).
$$


<!--## Some experiments


Recently, I started revisiting the zoo of neural network training algorithms, but from an "ancient" point of view. 
Which are these algorithms and what I mean by "ancient"?

### "Ancient" point of view
Let me start reverse-wise and explain what I mean by "ancient" point of view. 

Machine learning has evolved over the past 2 decades with great pace, so that many things evolved: Theory became stronger and wider, new algorithms have been developed and new problem settings have emerged.

The "ancient" point of view has to do with the last part.
Writing a paper with just linear regression as an application was ok for research: one could get in NIPS/ICML with some theory + algorithms, and with experiments on real data and boilerplate ordinary least-squares objectives.
Nowadays, any paper that just has least-squares experiments most probably is going to be criticized as weak since this does not "...mirror current advances and real-world problems"[the last part implies that it is just not neural networks].

Nevertheless, I will here follow a more "ancient" route: I will use linear regression to compare some of the recent algorithms used in neural networks.

The setting is given in the code below - it is written in Maltab (another deprecated choice but personally I believe Matlab is still at the top for algorithmic protoyping...)

### A zoo full of algorithms

I finished my Ph.D. when Nesterov acceleration was the method of choice in large-scale optimization, and stochastic algorithms were (almost) just starting to become the norm for machine learning problems.

Since 2010-2011, there are several variants of Gradient Descent/Stochastic Gradient Descent, that have attracted A LOT of attention, mostly due to their reported performance in training neural networks. Here, we will test their ability in simple problems, such as Linear Regression and Logistic Regression.
The settings are going to be synthetic (random data), but with properties that we can control.

In the discussion below, I assume that you understand this expression:
$$
x_{t+1} = x_{t} - \eta \cdot \nabla f(x_{t}).
$$

Let's start:

* AdaGrad

*Describe algorithm succinctly*

*Describe the setting where the step size increases and maybe then decreases, because G_t is actually <= 1*

*Describe that actually you need a parameter to tune - maybe it is less prone to errors than GD or SGD.*

*Provide plots for different condition numbers, and different alpha*

* Adagrad with plain Nesterov acceleration

One of the simplest extensions to algorithms one can have is to rely on Nesterov acceleration: it will most probably give a great boost in your algorithm; the difficult part is to prove that your algorithm:

1. converges: for some cases, especially in non-convex settings, proving convergence is a major step.
2. converges faster than the algorithm without the acceleration.
-->

