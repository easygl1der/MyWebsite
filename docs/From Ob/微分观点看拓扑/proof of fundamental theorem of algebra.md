---
UID: 20240912101914 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-12
---
## ✍内容
As an application of these notions, we prove the fundamental theorem of algebra: every nonconstant complex polynomial $P(z)$ must have a zero.
For the proof it is first necessary to pass from the plane of complex numbers to a compact manifold. Consider the unit sphere $S^2 \subset R^3$ and the stereographic projection
$$
h_{+}: S^2-\{(0,0,1)\} \rightarrow R^2 \times 0 \subset R^3
$$
from the "north pole" $(0,0,1)$ of $S^2$. (See Figure 3.) We will identify $R^2 \times 0$ with the plane of complex numbers. The polynomial map $P$ from $R^2 \times 0$ itself corresponds to a map $f$ from $S^2$ to itself; where
$$
\begin{aligned}
f(x) & =h_{+}^{-1} P h_{+}(x) \text { for } x \neq(0,0,1) \\
f(0,0,1) & =(0,0,1)
\end{aligned}
$$
![[Topology from the Differentiable Viewpoint (John Willard Milnor) (Z-Library).pdf#page=20&rect=77,430,315,546|Topology from the Differentiable Viewpoint (John Willard Milnor) (Z-Library), p.20]] It is well known that this resulting map $f$ is smooth, even in a neighborhood of the north pole. To see this we introduce the stereographic projection $h_{-}$ from the south pole $(0,0,-1)$ and set
$$
Q(z)=h_{-} f h_{-}^{-1}(z)
$$
Note, by elementary geometry, that
$$
h_{+} h_{-}^{-1}(z)=z /|z|^2=1 / \bar{z}
$$
Now if $P(z)=a_0 z^n+a_1 z^{n-1}+\cdots+a_n$, with $a_0 \neq 0$, then a short computation shows that
$$
Q(z)=z^n /\left(\bar{a}_0+\bar{a}_1 z+\cdots+\bar{a}_n z^n\right) .
$$
Thus $Q$ is smooth in a neighborhood of 0 , and it follows that $f=h_{-}^{-1} Q h_{-}$ is smooth in a neighborhood of $(0,0,1)$.
Next observe that $f$ has only a finite number of critical points; for $P$ fails to be a local diffeomorphism only at the zeros of the derivative polynomial $P^{\prime}(z)=\sum a_{n-i} j z^{i-1}$, and there are only finitely many zeros since $P^{\prime}$ is not identically zero. The set of regular values of $f$, being a sphere with finitely many points removed, is therefore connected. Hence the locally constant function $\# f^{-1}(y)$ must actually be constant on this set. Since $\# f^{-1}(y)$ can't be zero everywhere, we conclude that it is zero nowhere. Thus $f$ is an onto mapping, and the polynomial $P$ must have a zero.
