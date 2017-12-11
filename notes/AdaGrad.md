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


### **The AdaGrad variation**

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


### **Some experiments**

Recently, I started revisiting the zoo of neural network training algorithms 
(that's the reason of this post: to have it reminding me the performance of each algorithm).
I will follow both a "modern" and an "ancient" point of view of comparing algorithm. 
Which are these algorithms and what I mean by "modern and "ancient"?

#### **"Modern" and "ancient" point of view**

Let me start reverse-wise and explain what I mean by "ancient" point of view. 

Machine learning has evolved over the past 2 decades with great pace, 
so that many things have been (re)invented and changed: Theory became stronger and wider, 
new algorithms have been developed, and new problem settings have emerged.

The "modern" vs. "ancient" point of view has to do with the last part.
Writing a paper with just linear regression as an application was ok for research a decade ago: 
one could get in NIPS/ICML with some theory + algorithms, and with experiments on real data 
and boilerplate ordinary least-squares objectives.
Nowadays, any paper that just has least-squares experiments most probably 
is going to be criticized as weak since this does not "...mirror current advances 
and real-world problems". The last part implies in most cases that it is just not neural networks.

Nevertheless, here, I will follow both "ancient" and "modern" routes: I will use linear/logistic
regression to compare some of the recent algorithms used in neural networks, since 
we have to understand the strengths and weaknesses of each algorithm, even for simple settings.
Later on, I will consider simple settings of neural networks and apply the same algorithms there.

#### **Well-conditioned linear regression**

Let $x^\star$ be the unknown vector in $\mathbb{R}^p$, assuming $|| x^\star ||_2 = 1$.
In standard linear regression, we observe $x^\star$ via the linear mapping:

$$
y = A x^\star + w,
$$

where $A \in \mathbb{R}^{n \times p}$ is the set of features, and $w \in \mathbb{R}^n$ is an additive noise term. 
For simplicity we can assume that $w$ is i.i.d. according to a Gaussian distribution, with mean zero and standard deviation $\sigma$.

Given the above, the problem we want to solve is:

$$
\begin{equation} \begin{aligned} \underset{x}{\text{min}} ~\left\{F(x) := \sum_{i = 1}^n \frac{1}{2} \left(y_i - a_i^\top x \right)^2\right\} \end{aligned} \end{equation}
$$

for $a_i^\top$ being the rows of the matrix $A$. 

It is well known that a key component for characterizing the convergence of an algorithm on such problems is the *condition number* $\kappa(F)$ of the problem. By definition, the condition number is the ratio:

$$
\kappa(F) = \frac{L(F)}{\mu(F)} := \frac{L}{\mu}.
$$

Here, $L$ is the Lipschitz gradient constant of $F$ and $\mu$ its strong convexity parameter (afterall, we are still in the convex world). The largest the condition number, the harder (=more number of iterations to get a specific error tolerance $\|\widehat{x} - x^\star\|_2 \leq \varepsilon$) the problem is. For the case of least squares, the condition number of the problem is proportional to the condition number of $A^\top A$: 

$$
\kappa(A^\top A) = \frac{\lambda_{\max}(A^\top A)}{\lambda_{\min}(A^\top A)} = \frac{\sigma_{\max}^2(A)}{\sigma_{\min}^2(A)}.
$$

The setting is given in the code below - it is written in Maltab 
(another deprecated choice but personally I believe Matlab is still at 
the top of the list for algorithmic protoyping...).



```
%% Problem setting

% Dimension
p = 50;								

% Number of measurements
n = 200;							

% Noise std
sigma = 1e-3;						

% This will vary below.
kappa = 10^2;						

log_smin = -1;
log_smax = log10(sqrt(kappa) * 10^log_smin);

% Measurement matrix
A = 1/sqrt(n) * randn(n, p); 		
[U, ~, V] = svd(A, 'econ');

% Force condition number be kappa
S = logspace(log_smin, log_smax, p);
S = S(end:-1:1);					

A = U * diag(S) * V';

% Ground truth
x_star = randn(p, 1);				
x_star = x_star./norm(x_star);

% Noise
w = randn(n, 1);					
w = sigma * w./norm(w); 

% Measurements in y
y = A*x_star + w;					
```

* AdaGrad vs. plain Gradient Descent with step size $\tfrac{1}{L}$.

For gradient descent, we use the recursion:

$$
x_{t+1} = x_{t} - \frac{1}{L} \nabla F(x_{t}), 
$$

and we compare it to:

$$
x_{t+1} = x_{t} - \frac{\tfrac{1}{L}}{(B_t)_{jj} + \zeta} \odot \nabla F(x_{t}).
$$

where $\zeta$ is set to a small number (say, $10^{-10}$).

The result looks something like this:

![alt text](/notes/AdaGrad/GDvsAdaGrad.png)

Both algorithms start at the same all-zero starting point; AdaGrad diverges the first 
couple of iterations, but then it "covers" quickly the lost ground.
There are also cases that plain gradient descent is slightly better than AdaGrad, but overall
with this step size, $\text{AdaGrad} > \text{Gradient Descent}$.

Let us try another standard step size: $\eta = 0.1$.

> *Selecting step size is one of the most important subroutines in optimization. Claiming that one algorithm is better than another, for a given problem, is a very strong statement: we need to push the boundaries of $\eta$ values, until the point the algorithm starts "harming" itself, and pick that step size as the step size for comparison. Each algorithm has a different range of $\eta$ values that best works for them. However, since this is often an expensive search, people rely on standard selected step sizes, such as $\eta = 0.1$.*

The result looks something like this:

![alt text](/notes/AdaGrad/GDvsAdaGrad2.png)

This also justifies that AdaGrad is kind-of immune to the $\eta$ selection: after a few iterations, the weights from the gradient calculation in $B$ pay-off.

But, what if we jack up the step size a bit, to find the boundaries of the algorithms. For this particular setting, step size $\eta = 1.9$ works pretty well for gradient descent; step size $\eta \in [0.1, 0.2] $ also works the best for AdaGrad. The result is as follows:

![alt text](/notes/AdaGrad/GDvsAdaGrad3.png)

*I.e.*, the secret sauce of AdaGrad is not on necessarily accelerating gradient descent with a better step size selection, but making gradient descent more stable to not-so-good $\eta$ choices.

#### **Ill-conditioned linear regression**

Let us repeat the above experiment for $\kappa(A^\top A)$ much larger.

```
% New condition number
kappa = 10^6;						
```

Following the same steps, for $\eta = \frac{1}{L}$ we get:

![alt text](/notes/AdaGrad/GDvsAdaGrad4.png)

For $\eta = 0.1$, we get:

![alt text](/notes/AdaGrad/GDvsAdaGrad5.png)

where Gradient Descent diverges (and this is expected since guaranteed convergence is attained if the step size is less than $\approx \frac{2}{L} \approx 2 \cdot 10^{-4}$); and finally:

![alt text](/notes/AdaGrad/GDvsAdaGrad6.png){:height="36px" width="36px"}.

for carefully selected step sizes. In the last part, I want to stress out that, for ill-conditioned problems, AdaGrad is not that "immune" of the $\eta$ selection: various $\eta$'s lead to various behaviors, with most of them being inferior of gradient descent, and few of them leading to superior performance.