---
layout: page
fb_comments: 3
title: Introduction to quantum computing: Complex vector space.
---

## Introduction to quantum computing: Complex vector space.

> Sources: "Quantum computing for computer scientists", N. Yanofsky and M. Mannucci, Cambridge Press, 2008.


This post is part of a (probably) long list of posts regarding quantum computing. In this post, we will delve into the basics of complex vector spaces. 

*Disclaimer: while the material below might seem too simple, I suggest not skimming over this post - personally, I always enjoy reading something that I believe I own, since επαναληψη μητηρ πασης μαθησεως (repetition is the mother of any knowledge).*

### **The space of $\mathbb{C}^n$**

States of quantum systems are described as vectors in the complex space. Thus, it is important, before we delve into the details of what is a quantum state, to have a crystal clear idea of what complex vectors are.

Let $\mathbf{c} \in \mathbb{C}^n$ denote a complex vector in $n$ complex dimensions, such that:

$$
\mathbf{c} = 
\begin{bmatrix} 
a_1 + i b_1 \\
a_2 + i b_2 \\
\vdots \\
a_n + i b_n \\
\end{bmatrix}.
$$

Observe that a complex vector is a vector where each entry is a complex number.

Let $\mathbf{c}_1$ and $\mathbf{c}_2$ be two vectors in such a $n$-dimensional complex space. The following hold:

* Addition $\mathbf{c}_1 + \mathbf{c}_2$: one adds the corresponding real and imaginary parts of the corresponding elements, in an entrywise fashion. Addition is commutative and associative; similar notions hold for subtraction.
* For every complex vector $\mathbf{c}$, there is its inverse, $-\mathbf{c}$, such that $\mathbf{c} + (-\mathbf{c}) = \mathbf{0}$.
* Given a complex vector $\mathbf{c}$ and a scalar $x = a_x + i b_x \in \mathbb{C}$, one can perform the scalar-vector multiplication, as follows:

$$
x \cdot \mathbf{c} = (a_x + i b_x) \cdot \begin{bmatrix} 
a_1 + i b_1 \\
a_2 + i b_2 \\
\vdots \\
a_n + i b_n \\
\end{bmatrix} = \begin{bmatrix} 
(a_x + i b_x)(a_1 + i b_1) \\
(a_x + i b_x)(a_2 + i b_2) \\
\vdots \\
(a_x + i b_x)(a_n + i b_n) \\
\end{bmatrix}
$$

* Some general rules are:
	* $x_1 \cdot (x_2 \cdot \mathbf{c}) = (x_1 \cdot x_2) \cdot \mathbf{c}$.
	* $x \cdot (\mathbf{c}_1 + \mathbf{c}_2) = x \cdot \mathbf{c}_1 + x \cdot \mathbf{c}_2$.

### Inner products

An inner product between two complex vectors, $\mathbf{c}_1 \in \mathbb{C}^n$ and $\mathbf{c}_2 \in \mathbb{C}^n$, is a bi-nary operation that takes two complex vectors as an input and give back a --possibly-- complex scalar value. In math terms, we denote this operation as:

$$
\left\langle \mathbf{c}_1, \mathbf{c}_2 \right \rangle = \mathbf{c}_1^\dagger \cdot \mathbf{c}_2 \in \mathbb{C}.
$$

Some properties of the inner product are as follows:

* $\left\langle \mathbf{c}, \mathbf{c} \right \rangle = \|\mathbf{c}\|_2^2 \geq 0$; it is zero only if $\mathbf{c}$ is zero. Here, we can also define the notion of a norm as $\|\mathbf{c}\|_2 := \sqrt{\left\langle \mathbf{c}, \mathbf{c} \right\rangle}.$
* $\left\langle \mathbf{c}_1, \mathbf{c}_2 + \mathbf{c}_3 \right \rangle = \left\langle \mathbf{c}_1, \mathbf{c}_2 \right \rangle + \left\langle \mathbf{c}_1, \mathbf{c}_3 \right \rangle $. Similarly, when we have $\left\langle \mathbf{c}_1 + \mathbf{c}_3, \mathbf{c}_2 \right \rangle$.
* $\left\langle x \cdot \mathbf{c}_1, \mathbf{c}_2 \right \rangle = \bar{x} \cdot \left\langle \mathbf{c}_1, \mathbf{c}_2 \right \rangle,$ and 
$\left\langle \mathbf{c}_1, x \cdot \mathbf{c}_2 \right \rangle = x \cdot \left\langle \mathbf{c}_1, \mathbf{c}_2 \right \rangle.$
* $\left\langle \mathbf{c}_1, \mathbf{c}_2 \right \rangle = \mathbf{c}_1^\dagger \cdot \mathbf{c}_2 = \left(\mathbf{c}_2^\dagger \cdot \mathbf{c}_1\right)^\dagger = \left(\left\langle \mathbf{c}_1, \mathbf{c}_2 \right \rangle\right)^\dagger$.
* Orthogonal vectors: two complex vectors $\mathbf{c}_1, \mathbf{c}_2$ are orthogonal iff $\left\langle \mathbf{c}_1, \mathbf{c}_2 \right \rangle = 0$.

### **The space of $\mathbb{C}^{m \times n}$**

The above rules naturally generalize to matrix complex spaces $\mathbb{C}^{m \times n}$. Beyond the above:

* Transpose of a : Given a matrix $\mathbf{C} \in \mathbb{C}^{m \times n}$, its transpose is a matrix $\mathbf{C}^\top \in \mathbb{C}^{n \times m}$, where 

$$(\mathbf{C}^\top)_{jk} = (\mathbf{C})_{kj}$$.

* Conjugate: *Disclaimer: Here, we slightly abuse our notation of conjugation.* Given a matrix $\mathbf{C} \in \mathbb{C}^{m \times n}$, its conjugate is a matrix $\overline{\mathbf{C}} \in \mathbb{C}^{m \times n}$, where 

$$(\overline{\mathbf{C}})_{jk} = \overline{(\mathbf{C})_{jk}}$$.

* Adjoint: Given a matrix $\mathbf{C} \in \mathbb{C}^{m \times n}$, its adjoint is a matrix $\mathbf{C}^\dagger\in \mathbb{C}^{n \times m}$, where 

$$(\mathbf{C}^\dagger)_{jk} = \overline{(\mathbf{C})_{kj}}$$.

Some other properties (the following hold also for conjugate operations):

* $\left(\mathbf{C}^\dagger\right)^\dagger = \mathbf{C}$.
* $\left(\mathbf{C}_1 + \mathbf{C}_2\right)^\dagger = \mathbf{C}_1^\dagger + \mathbf{C}_2^\dagger$.
* $\left(x \cdot \mathbf{C}\right)^\dagger = \bar{x} \cdot \mathbf{C}^\dagger$.

Matrix multiplication is an operation of the form:

$$
\mathbb{C}^{m \times n} \times \mathbb{C}^{n \times q} \mapsto \mathbb{C}^{m \times q}
$$

where, for matrices $\mathbf{A} \in \mathbb{C}^{m \times n}$ and $\mathbf{B} \in \mathbb{C}^{n \times q}$, we have:

$$
\left(\mathbf{A} \cdot \mathbf{B}\right)_{jk} = \sum_{h = 0}^{n-1} (\mathbf{A})_{jh} \cdot (\mathbf{B})_{hk}.
$$

Matrix multiplication satisfies (beyond the standard associative, distributive, etc. rules):

* $\overline{\mathbf{A} \cdot \mathbf{B}} = \overline{\mathbf{A}} \cdot \overline{\mathbf{B}}$.
* $\left(\mathbf{A} \cdot \mathbf{B}\right)^{\dagger} = \mathbf{B}^{\dagger} \cdot \mathbf{A}^{\dagger}$.

Let us consider the square case $\mathbb{C}^{n \times n}$. Then, a matrix $\mathbf{C} \in \mathbb{C}^{n \times n}$ is called Hermitian if $\mathbf{C} = \mathbf{C}^\dagger$; this translates into an entrywise rule that 

$$(\mathbf{C})_{jk} = \overline{(\mathbf{C})_{kj}}$$. 

By definition, the entries on the diagonal of a Hermitian matrix are real. 

If $\mathbf{C}$ is a Hermitian matrix, then all its eigenvalues are real.
To see this, let $(\lambda, \mathbf{v})$ be an eigenvalue-eigenvector pair of $\mathbf{C}$. Then:

$$
\lambda \left\langle \mathbf{v}, \mathbf{v} \right \rangle = 
\left\langle \lambda \mathbf{v}, \mathbf{v} \right \rangle = 
\left\langle \mathbf{C} \mathbf{v}, \mathbf{v} \right \rangle = 
\left\langle \mathbf{v}, \mathbf{C} \mathbf{v} \right \rangle = 
\left\langle \mathbf{v}, \lambda \mathbf{v} \right \rangle = 
\bar{\lambda}\left\langle \mathbf{v}, \mathbf{v} \right \rangle.
$$

Hermitian matrices and their eigendecompositions play a critical role in quantum information and processing.
As we will see later in our posts, every physical observable of a quantum system is associated with a Hermitian matrix. When we measure, the resulting state is represented as one of the eigenvectors of the corresponding Hermitian matrix.

One can define inner products beyond vectors: in the case of matrices, the inner product is defined as:

$$
\left\langle \mathbf{C}_1, \mathbf{C}_2 \right \rangle = \text{Trace}\left(\mathbf{C}_1^\dagger \cdot \mathbf{C}_2\right) \in \mathbb{C}.
$$


Finally, we will introduce the notion of an invertible matrix: a matrix $\mathbf{C} \in \mathbb{C}^{n \times n}$ is invertible, if there is a matrix $\mathbf{C}^{-1} \in \mathbb{C}^{n \times n}$ such that:

$$
\mathbf{C} \cdot \mathbf{C}^{-1} = I.
$$

An important class of matrices is that of unitary matrices. In that case, the inverse of a matrix is its adjoint. A fundamental property is the following:

> Unitary matrices preserve inner products.

*I.e.*, for a unitary matrix $\mathbf{U}$,

$$
\left \langle \mathbf{U} \mathbf{C}_1, \mathbf{U} \mathbf{C_2} \right \rangle = \left \langle \mathbf{C}_1, \mathbf{C}_2 \right \rangle.
$$

And, because unitary matrices preserve inner products, they also preserve norms.

### **Linear indepedence and basis of complex vectors**

> Let us focus on the complex space $\mathbb{C}^n$. A set of vectors $\mathbf{c}_1, \dots \mathbf{c}_n$ in $\mathbb{C}^n$ is linearly indepedent if:
> 
> $$
> w_1 \mathbf{c}_1 + w_2 \mathbf{c}_2 + \dots + w_n \mathbf{c}_n = 0,
> $$
>
> implies that $w_i = 0, ~\forall i$.

In other words, any vector on that set cannot be described as a linear combination of the other vectors in that set. 

The case of a basis of vectors is somewhat different:
> A set of vectors $\mathbf{c}_1, \dots \mathbf{c}_n$ in $\mathbb{C}^n$ form a basis, if the vector set is linear independent and, at the same time, any other vector in $\mathbb{C}^n$ can be written as a linear combination of vectors that in that set.

The dimension of the complex vector space, defined by a basis, is equal to the number of vectors that define the basis.

Using the notion of orthogonality, we can extend the notion of a basis as follows:

> A basis, comprised of vectors $n$-dimensional vectors $\mathbf{c}_1, \mathbf{c}_2, \dots, \mathbf{c}_n$, is an orthogonal basis in $n$-dimensions, if and only if, $\left \langle \mathbf{c}_i, \mathbf{c}_j \right\rangle, \forall i \neq j$. In the case where, in addition $\left \langle \mathbf{c}_i, \mathbf{c}_i \right \rangle = 1$, the basis is called orthonormal.

### **Hilbert space**
> A Hilbert space is a complex inner product space that is complete. *I.e.*, it is accompanied with an inner product operation (*e.g.*, in vector space $\mathbb{C}^n$, $\left \langle \mathbf{c}_1, \mathbf{c}_2 \right \rangle$, in matrix space $\mathbb{C}^{m \times n}$, $\left \langle \mathbf{C}_1, \mathbf{C}_2 \right \rangle$, etc.); it is complete in the sense that any sequence accumulating somewhere, converges to a point.

In our case --that of finite dimensional complex spaces-- the inner products we consider so far are automatically complete. Thus, every space we defined above is a Hilbert space, and we don't have to worry about it.

For the moment, we will skip the definition of tensor product, since it is a crucial notion by its own and I prefer to describe when we have already started discussing about quantum systems. Stay tuned!