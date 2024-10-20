---
UID: 20240814182818 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-08-14
---
## Conformal equivalence and examples
Conformal map is holomorphic bijection.
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=225&rect=138,165,488,230|Stein-II-Complex Analysis, p.206]]
反证假设 $\displaystyle f (z_{0})=0, z_{0}\in U$. 于是
$$
f(z)-f(z_{0})=a(z-z_{0})^{k}+G(z),k\geq 2,G(z)\text{在}z_{0}\text{有}n+1\text{阶零点}
$$
对于足够小的 $\displaystyle w$，
$\displaystyle f (z)-f (z_{0})-w=F (z)+G (z), where\ F(z)=a(z-z_{0})^{k}-w$
由于 $\displaystyle F$ 被 $w$ 顶起来了，且 $G$ 在 $\displaystyle z_{0}$ 的零点阶数更高 . 所以存在 $\displaystyle z_{0}$ 周围的一个小圆盘，<font color="#2DC26B">其中</font>有 $F$ 至少有 2 个零点，且<font color="#2DC26B">其上</font> $\displaystyle \lvert G(z) \rvert<\lvert F(z) \rvert$. 由 [[Rouché's theorem]]，$\displaystyle f(z)-f(z_{0})-w$ 在该圆盘内至少有两个零点. 这与 $f$ 单射矛盾！故 $\displaystyle f' (z)\neq0,\forall z\in U$.
再验证单射解析函数 $f$ 的逆也是解析函数，记 $\displaystyle g=f^{-1}$.
对于 $\displaystyle w_{0}\in V$，$w$ 附近的 $\displaystyle w_{0}$，记 $\displaystyle w=f(z),w_{0}=f(z_{0})$, $\displaystyle w\neq w_{0}$，则
$$
\frac{g(w)-g(w_{0})}{w-w_{0}}=\frac{1}{\frac{w-w_{0}}{g(w)-g(w_{0})}}=\frac{1}{\frac{f(z)-f(z_{0})}{z-z_{0}}}
$$
由于 $\displaystyle f'(z_{0})\neq0$, 令 $\displaystyle z\to z_{0}$，就有 $\displaystyle g'(w_{0})=1/f'(g(w_{0}))$ 有定义. 于是 $f$ 的无穷可微性保证了 $g$ 的无穷可微性.
> [!IMPORTANT]
> The condition $\displaystyle f'(z)\neq0$ is tantamount to $f$ being a local bijection.

> [!EXAMPLE]
> $\displaystyle f(z)=z^{2}$ is not bijection but local bijection.
> 

> [!IMPORTANT]
> In geometry, the condition $\displaystyle f'(z)\neq0$ and $f$ holomophic implies that $f$ preserves angles.

### The disc and upper half-plane
We denote the upper half-plane by $\displaystyle \mathbb{H}=\{ z\in \mathbb{C}:\mathrm{Im}(z)>0 \}$.
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=227&rect=142,497,491,530|Stein-II-Complex Analysis, p.208]]
考虑
$$
F:\left\{\begin{array}{l}
\mathbb{H}\to \mathbb{D} \\
z\mapsto\frac{i-z}{i+z}
\end{array}\right. ,G:\left\{\begin{array}{l}
\mathbb{D}\to \mathbb{H} \\
z\mapsto i\frac{1-w}{1+w}
\end{array}\right.
$$
简单验证得：$\displaystyle F(G(z))=z,G(F(z))=z$.
> [!IMPORTANT]
> 将 $F$ 写作 $\displaystyle F(x)=\frac{i-x}{i+x}=\frac{1-x^{2}}{1+x^{2}}+i\frac{2x}{1+x^{2}}$，并记 $\displaystyle x=\tan t, t\in (-\pi/2,\pi/2)$. 我们就有 $\displaystyle F(x)=\cos_{2}t++i\sin_{2}t=e^{ i2t }$. 于是实数轴的 image 就是除去 $\displaystyle -1$ 的单位圆周的弧. 而 $\displaystyle -1$ 就是 $\displaystyle \pm \infty$.

### Further examples
平移、伸缩、旋转都是 conformal map
> [!EXAMPLE]
> $n$ 为正整数，则映射 $\displaystyle z\mapsto z^{n},S=\{ z\in \mathbb{C}:0<\arg(z)<\pi/n \}\to\mathbb{H}$ 是 conformal map. 其逆映射是 $\displaystyle w\mapsto w^{1/n}$.

> [!EXAMPLE]
> $\displaystyle f(z)=(1+z)/(1-z)$, 将单位上半圆盘映 $\displaystyle \{ z=x+iy:\lvert z \rvert<1,y>0 \}$ 映到第一象限 $\displaystyle \{ w=u+iv:u>0,v>0 \}$，是 conformal map. 其逆映射为 $\displaystyle g(w)=(w-1)/(w+1)$.

> [!EXAMPLE]
> $\displaystyle z\mapsto \log z,\mathbb{H}\to \{ w=u+i v:u\in \mathbb{R},0<v<\pi \}$. 其逆映射为 $\displaystyle w\mapsto e^{ w }$.

> [!EXAMPLE]
> $\displaystyle z\mapsto \log z,\{ z=x+iy:\lvert z \rvert<1,y>0 \}\to \{ w=u+iv:u<0,0<v<\pi \}$ 是 conformal map.

> [!EXAMPLE]
> $\displaystyle f(z)=e^{ iz }$ 将半条带 $\displaystyle \{ z=x+iy:-\pi/2<x<\pi/2,y>0 \}$ 映到半圆盘 $\displaystyle \{ w=u+^{-1}:\lvert w \rvert<1,u>0 \}$, conformally.

> [!EXAMPLE]
> $\displaystyle f(z)=-\frac{1}{2}(z+1/z)$ 是从半圆盘 $\displaystyle \{ z=x+iy:\lvert z \rvert<1,y>0 \}$ 到上半平面 $\displaystyle \mathbb{H}$ 的 conformal map.

> [!EXAMPLE]
> $\displaystyle f(z)=\sin z$ 将上半平面 $\displaystyle \mathbb{H}$ 映到半条带 $\displaystyle \{ w=x+iy:-\pi/2<x<\pi/2,y>0 \}$, conformally.

### The Dirichlet problem in a  strip
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=232&rect=127,279,479,732|Stein-II-Complex Analysis, p.213]]
我们在 [[Stein-I-Fourier Analysis.pdf]] 中讨论过单位圆盘和上半平面上的 Dirichlet 问题
$$
\left\{\begin{array}{l}
  & \Delta u & = & 0\  & in\ \Omega \\
 &\ \ \  u & = & f & on\ \partial \Omega
\end{array}\right.
$$
这些问题可以通过与 Poisson 核进行卷积得到解.
> [!IMPORTANT]
> 在这里，我们的目的是将 Dirichlet 问题与 conformal map 练习在一起.

![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=233&rect=143,598,493,642|Stein-II-Complex Analysis, p.214]]
首先调和函数 $\displaystyle \circ$ 解析函数 $\displaystyle \Rightarrow$ 调和函数
由 chap 2 Ex 12，存在解析函数 $G$ ，使得 $\displaystyle u=\mathrm{Re}(G)$，于是 $\displaystyle u\circ F=\mathrm{Re}(G\circ F)$ 是解析函数的实部，故调和.
> [!IMPORTANT]
> 为了解决条带 $\displaystyle \Omega=\{ x+iy:x\in R,0<y<1 \}$ 上的 Dirichlet 问题，考虑双射 $\displaystyle F:\mathbb{D}\to \Omega,G:\Omega\to \mathbb{D}$，将边界条件 $\displaystyle f_{0},f_{1}$ 转化为 $\displaystyle \mathbb{D}$ 上的边界条件 $\displaystyle \widetilde{f}_{0},\widetilde{f}_{1}$，卷积解出 $\displaystyle \widetilde{u}$，再映回 $\displaystyle \Omega$.

最后得到 $\displaystyle \Omega$ 上的解：
$$
u(x,y)=\frac{\sin \pi y}{2}\left( \int_{-\infty}^{\infty }\frac{f_{0}(x-t)}{\cosh \pi t-\cos \pi y}  \,dt  +\int_{-\infty}^{\infty} \frac{f_{1}(x-t)}{\cosh \pi t+\cos \pi y } \, dt \right)
$$
于是我们有了两个问题：
- 是否存在任意 $\displaystyle \Omega$ 到 $\displaystyle \mathbb{D}$ 的保角映射？(Riemann mapping thm)
- 这个映射是否是从 $\displaystyle \partial \Omega$ 到 $\displaystyle \partial \mathbb{D}$ 的连续双射？(require some regularity of $\displaystyle \partial \Omega$)

## The schwarz lemma; automorphisms of the disc and upper half-plane
<u>Schwarz lemma:</u>
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=237&rect=142,402,486,481|Stein-II-Complex Analysis, p.218]]
(i) 将 $f$ 在 0 处展开为幂级数 (在 $\displaystyle \mathbb{D}$) 内收敛
$$
f(z)=\overset{ =0 }{ a_{0} }+a_{1}z+a_{2}z^{2}+\dots
$$
于是 $\displaystyle f(z)/z$ 在 $\displaystyle \mathbb{D}$ 中是解析函数，由最大模定理，$\displaystyle \lvert f(z)/z \rvert\leq \lvert f(z)/z \rvert_{z\in \partial \mathbb{D}}=\lvert f(z)/1 \rvert\leq1$，故 $\displaystyle \lvert f(z) \rvert\leq \lvert z \rvert$.
(ii) 由于 $\displaystyle \mathbb{D}$ 开，结合 $\displaystyle f(z_{0})=z_{0}$ 与 (i)，可知 $\displaystyle f(z)/z$ 在 $\displaystyle \mathbb{D}$ 内部达到最大值，则 $\displaystyle f(z)=cz$，考虑 $\displaystyle f(z_{0})=z_{0}$，故 $\displaystyle \lvert c \rvert=1$. $\displaystyle c=e^{ i\theta }$，for some $\displaystyle \theta$，故 $\displaystyle f$ 是旋转.
(iii) 记 $\displaystyle g(z)=f(z)/z$. 则 $\displaystyle \lvert g (z) \rvert\leq1,\forall z\in \mathbb{D}$
$$
g(0)=\lim_{ z \to 0 } \frac{f(z)-f(0)}{z}=f'(0)
$$
于是 $\displaystyle \lvert f'(0) \rvert\leq1$, 若等号成立，则由 (ii) 可知 $f$ 为旋转.
### Automorphisms of the disc
A conformal map from an open set $Ω$ to itself is called an automorphism of $Ω$.
一个特殊的 automorphism 为
$$
\psi_\alpha(z)=\frac{\alpha-z}{1-\bar{\alpha} z}, \quad \text { where } \alpha \in \mathbb{C} \text { with }|\alpha|<1 \text {. }
$$
它将出现在很多复分析的问题中，它有很多性质，其一为 $\displaystyle \psi_{\alpha}\circ\psi_{\alpha}(z)=z$.
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=239&rect=142,422,490,491|Stein-II-Complex Analysis, p.220]]
> [!IMPORTANT]
> 这个定理说明：旋转与 $\displaystyle \psi_{\alpha}$ 的复合是所有的 $\displaystyle \mathbb{D}$ 上自同构.

由于 $f$ 是 $\displaystyle \mathbb{D}$ 自同构，故存在 $\displaystyle \alpha\in \mathbb{D}$，使得 $\displaystyle f(\alpha)=0$，记 $\displaystyle g=f\circ\psi_{\alpha}$，有 $\displaystyle g(0)=0$，$g$ 是 $\displaystyle \mathbb{D}$ 自同构，则 $\displaystyle g^{-1}(0)=0$，由 Schwarz 引理：
$$
\lvert g(z) \rvert \leq \lvert z \rvert ,\lvert g^{-1}(w) \rvert \leq \lvert w \rvert ,\forall z,w\in \mathbb{D}
$$
由于 $g$ 是自同构，于是 $\displaystyle w$ 唯一对应一个 $\displaystyle g(z)$，故
$$
\lvert z \rvert \leq \lvert g(z) \rvert \implies \lvert g(z) \rvert =\lvert z \rvert ,\forall z\in \mathbb{D}
$$
由 Schwarz 引理：$\displaystyle g(z)=e^{ i\theta }z$  for some $\displaystyle \theta\in \mathbb{R}$. 用 $\displaystyle \psi_{\alpha}(z)$ 替换 $z$ ，并结合 $\displaystyle \psi_{\alpha}\circ\psi_{\alpha}(z)=z$，可知 $\displaystyle g(z)=e^{ i\theta }\psi_{\alpha}(z)$.
再令 $\displaystyle \alpha=0$ 就有如下推论：
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=240&rect=130,689,476,721|Stein-II-Complex Analysis, p.221]]
> [!NOTE]
> $\displaystyle \mathbb{D}$ 上的自同构群作用 transitively，利用 $\displaystyle \psi_{\alpha}$，可知对于任意 $\displaystyle \alpha,\beta\in \mathbb{D}$ 存在自同构 $\displaystyle \psi=\psi_{\beta}\circ\psi_{\alpha}$，将 $\displaystyle \alpha$ 映到 $\displaystyle \beta$.

> [!IMPORTANT]
> 事实上，$\displaystyle \mathrm{Aut}(\mathbb{D})\cong\mathrm{SU}(1,1)$，这是一个 $\displaystyle 2\times 2$ 复矩阵，特殊酉矩阵.

### Automorphisms of the upper half-plane
通过 $\displaystyle \mathrm{Aut}(\mathbb{D})$ 和保角映射 $\displaystyle F:\mathbb{H}\to \mathbb{D}$，我们可以决定 $\displaystyle \mathrm{Aut}(\mathbb{H})$.
考虑映射
$$
\begin{aligned}
\Gamma:  \mathrm{Aut}(\mathbb{D}) & \overset{ \text{双射} }{ \to } \mathrm{Aut}(\mathbb{H}) \\
  \varphi  & \mapsto F^{-1}\circ \varphi \circ F
\end{aligned}
$$
可以验证 $\displaystyle \mathrm{Aut}(\mathbb{H})$ 包含所有如下映射
$$
z\mapsto\frac{az+b}{cz+d},where\ a,b,c,d\in \mathbb{R},ad-bc=1.
$$
定义矩阵群 (特殊线性群)
$$
SL_{2}(\mathbb{R})\coloneqq \left\{ M=\begin{pmatrix}
a & b \\
c & d 
\end{pmatrix}:\ a,b,c,d\in \mathbb{R},\det(M)=ad-bc=1\right\}
$$
给定一个矩阵 $\displaystyle M\in SL_{2}(\mathbb{R})$，就可以定义映射 $\displaystyle f_{M}=\frac{az+b}{cz+d}$.
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=241&rect=142,412,491,466|Stein-II-Complex Analysis, p.222]]
> [!NOTE]
> 事实上 $\displaystyle \mathrm{Aut}(\mathbb{H})$ 并不同构有 $\displaystyle SL_{2}(\mathbb{R})$ ，因为显然矩阵 $\displaystyle \pm M$ 对应相同的函数 $\displaystyle f_{M}=f_{-M}$，因此，若我们粘合 $\displaystyle M$ 和 $\displaystyle -M$ ，就会得到新的群 $\displaystyle PSL_{2}(\mathbb{R})$，叫做 **projective special linear group**，这个群同构于 $\displaystyle \mathrm{Aut}(\mathbb{H})$.

## The Riemann mapping thm
### Necessary conditions and statement of the thm
问题是什么情况下存在从 $\displaystyle \Omega$ 到 $\displaystyle \mathbb{D}$ 的保角映射 $F$ .
首先若 $\displaystyle \Omega=\mathbb{C}$，这是不存在的，因为 $F$ 有界，由 Liouville 定理，$F$ 是常函数，矛盾！
由于 $\displaystyle \mathbb{D}$ 是简单连通的，这要求 $\displaystyle \Omega$ 也是简单连通的，而这就是充分条件.
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=243&rect=147,406,492,488|Stein-II-Complex Analysis, p.224]]
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=243&rect=146,368,493,407|Stein-II-Complex Analysis, p.224]]
Riemann mapping thm 的唯一性是显然的，若 $F$ 和 $G$ 都是 $\displaystyle \Omega\to \mathbb{D}$ 的保角映射，则 $\displaystyle H=F\circ G^{-1}$ 是圆盘上的自同构，且固定原点，则 $\displaystyle H=e^{ i\theta }z$，由于 $\displaystyle H'(0)>0$，有 $\displaystyle e^{ i\theta }=1$，故 $\displaystyle F=G$.
### Montel's thm
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=244&rect=131,269,473,347|Stein-II-Complex Analysis, p.225]]
Normal 意味着所有 $\displaystyle \mathcal{F}$ 的序列在 $\displaystyle \Omega$ 的任意紧子集中有收敛子列.
> [!def]
> A sequence $\displaystyle \{ K_{l} \}_{l=1}^{\infty}$ of compact subsets of $\displaystyle \Omega$ is called an **exhaustion** if 
> (a) $\displaystyle K_{l}$ is contained in the interior of $\displaystyle K_{l+1}$ for all $\displaystyle l=1,2,\dots$
> (b) Any compact set $\displaystyle K\subset \Omega$ is contained in $\displaystyle K_{l}$ for some $l$. In particular $\displaystyle \Omega=\bigcup_{l=1}^{\infty}K_{l}$.

![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=245&rect=137,472,486,498|Stein-II-Complex Analysis, p.226]]
若 $\displaystyle \Omega$ 有界，则取 $\displaystyle K_{l}=\{ z\in \Omega:d(\partial \Omega,z)\geq1/l \}$. 若 $\displaystyle \Omega$ 无界，则取 $\displaystyle K_{l}=\{ z\in \Omega:d(\partial \Omega,z)\geq1/l,\lvert z \rvert\leq l \}$.
>我们接下来开始证明 Montel's thm.

给定 $\displaystyle \Omega$ 内紧子集 $K$, 由紧性，存在 $r>0$，使得 $\displaystyle D_{3r}(z)\subset \Omega,\forall z\in K$. 令 $\displaystyle z, w\in K,\lvert z-w \rvert<r$, 令 $\displaystyle \gamma$ 表示 $\displaystyle D_{2r}(w)$ 的边界. 于是由 Cauchy's integral formula：
$$
f(z)-f(w)=\frac{1}{2\pi i}\int _{\gamma}f(\zeta)\left[ \frac{1}{\zeta-z}-\frac{1}{\zeta-w} \right] \, d\zeta
$$
注意到
$$
\left\lvert  \frac{1}{\zeta-z}-\frac{1}{\zeta-w}  \right\rvert =\frac{\lvert z-w \rvert }{\lvert \zeta-z \rvert \lvert \zeta-w \rvert }\overset{ \zeta\in \gamma }{ \leq } \frac{\lvert z-w \rvert }{r^{2}}
$$
因此
$$
\lvert f(z)-f(w) \rvert \leq \frac{1}{2\pi}\frac{2\pi r}{r^{2}}B\lvert z-w \rvert ,\text{其中}B\text{是}\mathcal{F}\text{一致有界的界}
$$
于是 $\displaystyle \mathcal{F}$ 等度连续.
接着用 Ascoli 的对角线方法证明一致收敛.
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=246&rect=135,168,478,203|Stein-II-Complex Analysis, p.227]]
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=247&rect=146,689,488,722|Stein-II-Complex Analysis, p.228]]
反证而设 $f$ 不是单射，即存在 $\displaystyle z_{1}, z_{2}\in \Omega$ 使得 $\displaystyle f(z_{1})=f(z_{2})$. 定义序列 $\displaystyle g_{n}(z)=f_{n}(z)-f_{n}(z_{1})$ 使得 $\displaystyle g_{n}$ 没有除 $\displaystyle z_{1}$ 以外的零点，且 $\displaystyle \{ g_{n} \}$ 在 $\displaystyle \Omega$ 的紧子集上一致收敛到 $\displaystyle g(z)=f(z)-f(z_{1})$. 若 $\displaystyle g$ 不是 0，由于 $g$ 解析，$\displaystyle \Omega$ 连通，则 $\displaystyle z_{2}$ 是 $\displaystyle g$ 的孤立零点，因此
$$
1=\frac{1}{2\pi i}\int _{\gamma}\frac{g'(\zeta)}{g(\zeta)} \, d\zeta
$$
其中 $\displaystyle \gamma$ 是以 $\displaystyle z_{2}$ 为心的小圈，使得 $g$ 在 $\displaystyle \gamma$ 上非零，且在 $\displaystyle \gamma$ 内除 $\displaystyle z_{2}$ 外非零。这是可以做到的，因为若对于任意以 $\displaystyle z_{2}$ 为心的小圈，其内都有除 $\displaystyle z_{2}$ 外的零点，那么 $\displaystyle z_{2}$ 不是 $g$ 的孤立零点，这是矛盾。
同时，由于 $\displaystyle g_{n}$ 一致收敛到 $g$ ，就有 $\displaystyle 1/g_{n}$ 在 $\displaystyle \gamma$ 上一致收敛到 $\displaystyle 1/g$，$\displaystyle g_{n}'$ 一致收敛到 $\displaystyle g$（$g$ 解析），于是
$$
\frac{1}{2\pi i}\int _{\gamma}\frac{g_{n}'(\zeta)}{g_{n}(\zeta)} \, d\zeta \to\frac{1}{2\pi i}\int _{\gamma}\frac{g'(\zeta)}{g(\zeta)} \, d\zeta
$$
但是由 $\displaystyle g_{n}$ 定义，$\displaystyle g_{n}$ 在 $\displaystyle \gamma$ 内没有零点，于是
$$
\frac{1}{2\pi i}\int_{\gamma}\frac{g_{n}'(\zeta)}{g_{n}(\zeta)}\, d\zeta=0,\forall n
$$
矛盾！
### Proof of the Riemann mapping thm
[[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=247|Stein-II-Complex Analysis, p.228]]