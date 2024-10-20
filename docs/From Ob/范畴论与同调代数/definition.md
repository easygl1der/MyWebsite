---
UID: 20240924153510 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-24
---

## $Diff(\mathcal{C})$
Let $\displaystyle \mathcal{C}$ denote an additive category.
A differential object $\displaystyle (X^{\bullet},d_{X}^{\bullet})$ in $\displaystyle \mathcal{C}$ is a sequence of objects $\displaystyle X^{k}$ and morphisms $\displaystyle d^{k}$ ($\displaystyle k\in \mathbb{Z}$):
$$
\begin{CD}
\dots@>>>X^{k-1}@>d^{k-1}>>X^{k}@>d^{k}>>X^{k+1}@>>>\dots
\end{CD}
$$
A morphism of differential objects $\displaystyle f^{\bullet}:X^{\bullet}\to Y^{\bullet}$ is visualized by a commutative diagram:
$$
\begin{CD}
\dots@>>>X^{n}@>d^{n}_{X}>>X^{n+1}@>>>\dots\\
& @VVf^{n}V @VVf^{n+1}V\\
\dots@>>>Y^{n}@>d^{n}_{Y}>>Y^{n+1}@>>>\dots
\end{CD}
$$
Hence, the category $\displaystyle Diff(\mathcal{C})$ of differential objects in $\displaystyle \mathcal{C}$ is nothing but the category $\displaystyle \mathrm{Fct}(\mathbb{Z},\mathcal{C})$. In particular, it is an additive category.
## Additive category
A category $\displaystyle \mathcal{C}$ is additive if it satisfies condition (i)-(v) below:
(i) for any $\displaystyle X, Y\in \mathcal{C}$, $\displaystyle \text{Hom}_{\mathcal{C}}(X, Y)\in \mathsf{ Mod }(\mathbb{Z})$.
(ii) the compsition law $\displaystyle \circ$ is bilinear.
(iii) there exists a zero object in $\displaystyle \mathcal{C}$.
(iv) the category $\displaystyle \mathcal{C}$ admits finite coproducts.
(v) the category $\displaystyle \mathcal{C}$ admits finite products.
### Notation 3.1.2.
If $X$ and $Y$ are two objects of $\displaystyle \mathcal{C}$, one denotes by $\displaystyle X\oplus Y$ (instead of $\displaystyle X\sqcup Y$) their coproduct, and calls it their direct sum. One denotes as usual by $\displaystyle X\times Y$ their product. This change of notations is motivated by the fact that if $\displaystyle A$ is a ring, the forgetful functor $\displaystyle \mathsf{ Mod }(A)\to \mathsf{ Set }$ does not commute with coproducts. 
## Abelian categroy
Let $\displaystyle \mathcal{C}$ be an additive category. One says that $\displaystyle \mathcal{C}$ is abelian if:
(i) any $\displaystyle f:X\to Y$ admits a kernel and a cokernel,
(ii) for any morphism $f$ in $\displaystyle \mathcal{C}$, the natural morphism $\displaystyle \mathrm{Coim}f\to \mathrm{Im}f$ is an isomorphism .
### Kernels and Cokernels
One defines:
$$
\begin{aligned}
\mathrm{Coim}f & \coloneqq  \mathrm{Coker}h,\text{ where }h:\mathrm{Ker}f\to X  \\
\mathrm{Im}f & \coloneqq \mathrm{Ker}k,\text{ where }k:Y\to \mathrm{Coker}f.
\end{aligned}
$$
Consider the diagram:
![[Category and Homological Algebra(Schapira).pdf#page=57&rect=143,168,405,240|Category and Homological Algebra(Schapira), p.57]]


## Kernels, Cokernels, exact
Let $\displaystyle \mathcal{C}$ be a category and consider two parallel arrows $\displaystyle f, g: X_{0}\rightrightarrows X_{1}$ in $\displaystyle \mathcal{C}$. Consider the two functors:
$$
\tag1\mathcal{C}^{op}\to \mathsf{ Set },Y\mapsto \mathrm{Ker}(\mathrm{Hom}_{\mathcal{C}}(Y,X_{0})\rightrightarrows \mathrm{Hom}_{\mathcal{C}}(Y,X_{1}))
$$
$$
\tag 2 \mathcal{C}\to \mathsf{ Set },Y\mapsto \mathrm{Ker}(\mathrm{Hom}_{\mathcal{C}}(X_{1},Y)\rightrightarrows \mathrm{Hom}_{\mathcal{C}}(X_{0},Y))
$$
Assume that the functor in (1) is representable. In this case one denotes by $\displaystyle \mathrm{Ker}(f,g)$ a representative and calls this object a kernel (one also says a equalizer) of $\displaystyle (f,g)$.
Assume that the functor in (2) is representable. In this case one denotes by $\displaystyle \mathrm{Coker}(f,g)$ a representative and calls this object a cokernel (one also says a equalizer) of $\displaystyle (f,g)$.
A sequence $\displaystyle Z\to X_{0}\rightrightarrows X_{1}$ (resp. $\displaystyle X_{0}\rightrightarrows X_{1}\to Z$) is exact if $Z$ is isomorphic to the kernel (resp. Cokernel) of $\displaystyle X_{0}\rightrightarrows X_{1}$.
[[Category and Homological Algebra(Schapira).pdf#page=28|Category and Homological Algebra(Schapira), p.28]]
https://en.wikipedia.org/wiki/Cokernel
The **cokernel** of a [linear mapping](https://en.wikipedia.org/wiki/Linear_mapping "Linear mapping") of [vector spaces](https://en.wikipedia.org/wiki/Vector_spaces "Vector spaces") _f_ : _X_ → _Y_ is the [quotient space](https://en.wikipedia.org/wiki/Quotient_space_(linear_algebra) "Quotient space (linear algebra)") _Y_ / im (_f_) of the [codomain](https://en.wikipedia.org/wiki/Codomain "Codomain") of f by the image of f. The dimension of the cokernel is called the _corank_ of f.
> In many situations in [abstract algebra](https://en.wikipedia.org/wiki/Abstract_algebra "Abstract algebra"), such as for [abelian groups](https://en.wikipedia.org/wiki/Abelian_group "Abelian group"), [vector spaces](https://en.wikipedia.org/wiki/Vector_space "Vector space") or [modules](https://en.wikipedia.org/wiki/Module_(mathematics) "Module (mathematics)"), the cokernel of the [homomorphism](https://en.wikipedia.org/wiki/Homomorphism "Homomorphism") _f_ : _X_ → _Y_ is the [quotient](https://en.wikipedia.org/wiki/Quotient_set "Quotient set") of Y by the [image](https://en.wikipedia.org/wiki/Image_(mathematics) "Image (mathematics)") of f. In [topological](https://en.wikipedia.org/wiki/Topology "Topology") settings, such as with bounded linear operators between Hilbert spaces, one typically has to take the [closure](https://en.wikipedia.org/wiki/Closure_(mathematics) "Closure (mathematics)") of the image before passing to the quotient.

