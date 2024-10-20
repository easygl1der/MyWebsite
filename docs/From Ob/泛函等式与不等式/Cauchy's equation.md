---
UID: 20241020232513 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-10-20
---

## Cauchy and Pexider Equations
### Additive equations
The Cauchy's equation is 
$$
A(x+y)=A(x)+A(y)
$$
If $\displaystyle A:\mathbb{R}\to \mathbb{R}$ satisfies the above equation, then $A$ is said to be additive. And it implies that
$$
A(r)=A(1)\cdot r\qquad \text{for }r\in \mathbb{Q}
$$
> [!thm]
> The following conditions are equivalent:
> - $A$ is continuous at a point $\displaystyle x_{0}$.
> - $A$ is monotonically increasing.
> - $A$ is nonnegative for nonnegative $x$.
> - $A$ is bounded above on a finite interval.
> - $A$ is bounded below on a finite interval.
> - $A$ is bounded above (below) on a bounded set of positive Lebesgue measure.
> - $A$ is bounded on a bounded set of positive measure (Lebesgue).
> - $A$ is bounded on a finite interval.
> - $\displaystyle A(x)=cx$.
> - $A$ is locally Lebesgue integrable.
> - $A$ is differentiable.
> - $A$ is Lebesgue measurable.

> [!NOTE]
> The discontinuous solutions of Cauchy's equation exists, using Hamel basis. It's unbounded on any interval.

### Algebraic Conditions-Derivation
$$
D(xy)=xD(y)+yD(x)\qquad \text{for all }x,y\in \mathbb{R}\tag{D}
$$
> [!proposition]
> Suppose $\displaystyle D:\mathbb{R}\to \mathbb{R}$ is additive. Then the following are equivalent:
> - $D$ satisfies ($D$).
> - $\displaystyle D\left( \frac{1}{x} \right)=-\frac{1}{x^{2}}D(x)$.
> - $\displaystyle D(x^{2})=2xD(x)$ for $\displaystyle x\in \mathbb{R}$.
> - $\displaystyle D(x^{2})^{2}=4x^{2}D(x)^{2}$.


### Pexider's Equations

The functional equations are known as *Pexider's equations*, which are generalizations of the Cauchy equations.
$$
\begin{aligned}
f(x+y) & =g(x)+h(y), \\
f(x+y) & =g(x) h(y), \\
f(x y) & =g(x)+h(y), \\
f(x y) & =g(x) h(y),
\end{aligned}
$$





