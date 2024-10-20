---
UID: 20240912111424 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-12
---
## ✍内容
The lemmas above can be sharpened so as to apply to a map defined on a smooth "manifold with boundary." Consider first the closed half-space
$$
H^m=\left\{\left(x_1, \cdots, x_m\right) \varepsilon R^m \mid x_m \geq 0\right\}
$$
The boundary $\partial H^m$ is defined to be the hyperplane $R^{m-1} \times 0 \subset R^m$.
> [!def]
> Definition. A subset $X \subset R^k$ is called a smooth m-manifold with boundary if each $x \in X$ has a neighborhood $U \cap X$ diffeomorphic to an open subset $V \cap H^m$ of $H^m$. The boundary $\partial X$ is the set of all points in $X$ which correspond to points of $\partial H^m$ under such a diffeomorphism.

![[Topology from the Differentiable Viewpoint (John Willard Milnor) (Z-Library).pdf#page=23&rect=14,67,338,96|Topology from the Differentiable Viewpoint (John Willard Milnor) (Z-Library), p.23]]

![[Topology from the Differentiable Viewpoint (John Willard Milnor) (Z-Library).pdf#page=24&rect=25,409,363,467|Topology from the Differentiable Viewpoint (John Willard Milnor) (Z-Library), p.24]]
Proof: 因为我们要证明局部性质，所以只需要对 $\displaystyle f:H^{m}\to \mathbb{R}^{n}$ 这个特殊情况验证。记 $\displaystyle y\in \mathbb{R}^{n}$ 是 regular value，令 $\displaystyle \overline{x}\in f^{-1}(y)$，若 $\displaystyle \overline{x}$ 是纤维 $\displaystyle f^{-1}(y)$ 的内点，则 $\displaystyle f^{-1}(y)$ 是 $\displaystyle \overline{x}$ 附近的光滑流形。
>这里 $f$ 自动是光滑映射，由于 regular value 的定义。

假设 $\displaystyle \overline{x}$ 是纤维 $\displaystyle f^{-1}(y)$ 的边界上的点，因为 $f$ 是光滑映射，可以选取光滑映射 $\displaystyle g:U\to \mathbb{R}^{n}$ 定义在 $\displaystyle \overline{x}$ 在 $\displaystyle \mathbb{R}^{m}$ 中的<u>附近</u> $\displaystyle U$，且 $g$ 与 $f$ 在 $\displaystyle U\cap H^{m}$ 中重合。
>以上是光滑函数的定义

不妨设 $U$ 充分小，使得 $g$ 没有 critical points. 于是 $\displaystyle g^{-1}(y)$ 是 $\displaystyle m-n$ 维光滑流形。
>以上由 lemma 1 可得 [[Topology from the Differentiable Viewpoint (John Willard Milnor) (Z-Library).pdf#page=22&rect=37,374,366,421|Topology from the Differentiable Viewpoint (John Willard Milnor) (Z-Library), p.22]]

令 $\displaystyle \pi:g^{-1}(y)\to \mathbb{R}$ 为坐标投影
$$
\pi(x_{1},\dots,x_{m})=x_{m}
$$
我们断言：$\displaystyle \pi$ 具有 0 作为 regular value. 
>即 $\displaystyle \pi ^{-1}(0)=\partial H^{m}$ 没有 critical point. 即不存在 $\displaystyle x\in \pi ^{-1}(0)$ 使得 $\displaystyle d\pi_{x}$ 非奇异。

纤维 $\displaystyle g^{-1}(y)$ 在 $\displaystyle x\in \pi ^{-1}(0)$ 处的切空间等于 $\displaystyle dg_{x}=df_{x}:\mathbb{R}^{m}\to \mathbb{R}^{n}$ 的零空间，但是

> [!QUESTION]
> 没搞懂捏


