---
UID: 20240918125421 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-18
---
## ✍内容
The notion of convolution can be defined on measure spaces endowed with a group structure. It turns out that the most natural environment to define convolution is the context of topological groups. Although the focus of this book is harmonic analysis on Euclidean spaces, we develop the notion of convolution on general groups. This allows us to study this concept on $\mathbf{R}^n, \mathbf{Z}^n$, and $\mathbf{T}^n$, in a unified way. Moreover, since the basic properties of convolutions and approximate identities do not require commutativity of the group operation, we may assume that the underlying groups are not necessarily abelian. Thus, the results in this section can be also applied to nonabelian structures such as the Heisenberg group.
A topological group $G$ is a Hausdorff topological space that is also a group with law
$$
(x, y) \mapsto x y
$$
such that the maps $(x, y) \mapsto x y$ and $x \mapsto x^{-1}$ are continuous. The identity element of the group is the unique element $e$ with the property $x e=e x=x$ for all $x \in G$. We adopt the standard notation
$$
A B=\{a b: a \in A, b \in B\}, \quad A^{-1}=\left\{a^{-1}: a \in A\right\}
$$
for subsets $A$ and $B$ of $G$. Note that $(A B)^{-1}=B^{-1} A^{-1}$. Every topological group $G$ has an open basis at $e$ consisting of symmetric neighborhoods, i.e., open sets $U$ satisfying $U=U^{-1}$. A topological group is called<font color="#2DC26B"> locally compact </font>if there is an open set $U$ containing the identity element such that $\bar{U}$ is compact. Then every point in the group has an open neighborhood with compact closure.
Let $G$ be a locally compact group. It is known that $G$ possesses a positive measure $\lambda$ on the Borel sets that is nonzero on all nonempty open sets, finite on compact sets, and is left invariant, meaning that
$$
\lambda(t A)=\lambda(A)
$$
for all measurable sets $A$ and all $t \in G$. Such a measure $\lambda$ is called a (left) Haar measure on $G$. Similarly, $G$ possesses a right Haar measure which is right invariant, i.e., $\lambda(A t)=\lambda(A)$ for all measurable $A \subseteq G$ and all $t \in G$. For the existence of Haar measure we refer to $[152, \S 15]$ or $[213, \S 16.3]$. Furthermore, Haar measure is unique up to positive multiplicative constants. If $G$ is abelian then any left Haar measure on $G$ is a constant multiple of any given right Haar measure on $G$. A locally compact group which is a countable union of compact subsets is a $\sigma$ -finite measure space under left or right <font color="#2DC26B">Haar measure</font>. This is case for connected locally compact groups.
Example 1.2.1. The standard examples are provided by the spaces $\mathbf{R}^n$ and $\mathbf{Z}^n$ with the usual topology and the usual addition of $n$ -tuples. Another example is the space $\mathbf{T}^n=\mathbf{R}^n / \mathbf{Z}^n$ defined as follows:
$$
\mathbf{T}^n=\underbrace{[0,1) \times \cdots \times[0,1)}_{n \text { times }}
$$
With the usual topology and group law:
$$
\left(x_1, \ldots, x_n\right)+\left(y_1, \ldots, y_n\right)=\left(\left(x_1+y_1\right) \bmod 1, \ldots,\left(x_n+y_n\right) \bmod 1\right)
$$
Example 1.2.2. Let $G=\mathbf{R}^*=\mathbf{R} \backslash\{0\}$ with group law the usual multiplication. It is easy to verify that the measure $\lambda=d x /|x|$ is invariant under multiplicative translations, that is,
$$
\int_{-\infty}^{\infty} f(t x) \frac{d x}{|x|}=\int_{-\infty}^{\infty} f(x) \frac{d x}{|x|}
$$
for all $f$ in $L^1(G, \mu)$ and all $t \in \mathbf{R}^*$. Therefore, $d x /|x|$ is a Haar measure. (Taking $f=\chi_A$ gives $\lambda (t A)=\lambda (A)$.)
Example 1.2.3. Similarly, on the multiplicative group $G=\mathbf{R}^{+}$, a Haar measure is $d x / x$.
Example 1.2.4. Counting measure is a Haar measure on the group $\mathbf{Z}^n$ with the usual addition as group operation.
Example 1.2.5. The Heisenberg group $\mathbf{H}^n$ is the set $\mathbf{C}^n \times \mathbf{R}$ with the group operation
$$
\left(z_1, \ldots, z_n, t\right)\left(w_1, \ldots, w_n, s\right)=\left(z_1+w_1, \ldots, z_n+w_n, t+s+2 \operatorname{Im} \sum_{j=1}^n z_j \overline{w_j}\right)
$$
It can easily be seen that the identity element $e$ of this group is $0 \in \mathbf{C}^n \times \mathbf{R}$ and $\left(z_1, \ldots, z_n, t\right)^{-1}=\left(-z_1, \ldots,-z_n,-t\right)$. Topologically the Heisenberg group is identified with $\mathbf{C}^n \times \mathbf{R}$, and both left and right Haar measure on $\mathbf{H}^n$ is Lebesgue measure.
The norm
$$
\left|\left(z_1, \ldots, z_n, t\right)\right|=\left[\left(\sum_{j=1}^n\left|z_j\right|^2\right)^2+t^2\right]^{\frac{1}{4}}
$$
introduces balls $B_r(x)=\left\{y \in \mathbf{H}^n:\left|y^{-1} x\right|<r\right\}$ on the Heisenberg group that are quite different from Euclidean balls. For $x$ close to the origin, the balls $B_r(x)$ are not far from being Euclidean, but for $x$ far away from $e=0$ they look like slanted truncated cylinders. The Heisenberg group can be naturally identified as the boundary of the unit ball in $\mathbf{C}^n$ and plays an important role in quantum mechanics.
