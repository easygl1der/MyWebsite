---
UID: 20240720224917 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-07-20
---

## ✍内容
### Motivation
我们开始考虑奇点：
- 可去奇点
	- 可以在奇点处简单延拓得到全纯函数
- 极点
	- 产生了留数定理
- 本性奇点
	- 很难完全搞懂这个点处的性质

Logarithm:
为了理解其自然的多值性，我们引入同伦.
### 零点
> [!NOTE]
> 非平凡全纯函数的零点是孤立的. 否则由连续性方法可知：该函数 $\displaystyle \equiv0$ 平凡.

- @ 零点的阶数表示函数 vanish 的速率
- @ 极点的阶数表示函数 grow 的速率

$$
\text{res}_{z_{0}}f=a_{-1}
$$
而
$$
\frac{a_{-n}}{\left(z-z_0\right)^n}+\frac{a_{-n+1}}{\left(z-z_0\right)^{n-1}}+\cdots+\frac{a_{-1}}{\left(z-z_0\right)}
$$
被称为 $\displaystyle f$ 在极点 $\displaystyle z_{0}$ 处的 principal part.
### 留数定理
$\displaystyle f$ 在包含 $\displaystyle C$ 的开集中解析，除了 $\displaystyle C$ 内极点 $\displaystyle z_{0}$，则
$$
\int_{C}f(z)dz=2\pi i\cdot\text{res}_{z_{0}}f
$$
- $ 留数计算方法

### 奇点和亚纯函数
> [!thm]
> 可去奇点的黎曼定理：
> $\displaystyle f$ 在开集 $\displaystyle \Omega$ 除 $\displaystyle z_{0}$ 处解析，若 $\displaystyle f$ 在 $\displaystyle \Omega-\{z_{0}\}$ 有界，那么 $\displaystyle z_{0}$ 是可去奇点.

> [!cor]
> $\displaystyle f$ 在 $\displaystyle z_{0}$ 有孤立奇点，则 $\displaystyle z_{0}$ 是极点当且仅当 $\displaystyle \lvert f (z) \rvert\to \infty\text{ as }z\to z_{0}$.

Proof:
$\displaystyle (\Rightarrow)$ 若 $\displaystyle z_{0}$ 是极点，则 $\displaystyle 1/f$ 在 $\displaystyle z_{0}$ 处有零点，于是 $\displaystyle \lvert f(z) \rvert\to \infty\text{ as }z\to z_{0}$.
$\displaystyle (\Leftarrow)$ 若 $\displaystyle \lvert f(z) \rvert\to \infty\text{ as }z\to z_{0}$，则 $\displaystyle 1/f$ 在 $\displaystyle z_{0}$ 附近有界，$\displaystyle 1/\lvert f \rvert\to0\text{ as }z\to z_{0}$，因此 $\displaystyle 1/f$ 在 $\displaystyle z_{0}$ 有可去奇点且必须在 $\displaystyle z_{0}$ vanish，故 $\displaystyle f$ 在 $\displaystyle z_{0}$ 有孤立奇点.
> [!thm]
> Casorati-Weierstrass:
> 若 $\displaystyle f$ 在去心圆盘 $\displaystyle D_{r}(z_{0})-\{z_{0}\}$ 解析，且 $\displaystyle z_{0}$ 是本性奇点. 那么 $\displaystyle f(D_{r}(z_{0})-\{z_{0}\})$ 在 $\displaystyle \mathbb{C}$ 中稠密.

Proof:
若 $\displaystyle f(D_{r}(z_{0})-\{z_{0}\})$ 在 $\displaystyle \mathbb{C}$ 中不稠密，则存在 $\displaystyle w\in \mathbb{C},\delta>0$，使得
$$
\lvert f(z)-w \rvert >\delta,\forall z\in D_{r}(z_{0})-\{z_{0}\}
$$
考虑 $\displaystyle g(z)=\frac{1}{f(z)-w}$，$\displaystyle \lvert g (z) \rvert=\frac{1}{\lvert f (z)-w \rvert}< \frac{1}{\delta}$ 有界.
- 若 $\displaystyle g(z_{0})\neq0$，则 $\displaystyle g(z)$ 在 $\displaystyle z_{0}$ 解析，$\displaystyle f$ 在 $\displaystyle z_{0}$ 解析，矛盾！
- 若 $\displaystyle g(z_{0})=0$，则 $\displaystyle f(z)-w$ 在 $\displaystyle z_{0}$ 处有极点，这与 $\displaystyle f(z)$ 在 $\displaystyle z_{0}$ 有本性奇点矛盾！

> [!NOTE]
> The function $\displaystyle f$ takes on every complex value infinitely many times with at most one exception.

> [!def]
> 亚纯函数：
> $\displaystyle f$ 在一列无极限的 $\displaystyle \{z_{0},z_{1},\dots,z_{n},\dots\}$ 上有极点，在 $\displaystyle \Omega-\{z_{0},z_{1},\dots\}$ 上解析，则称 $\displaystyle f$ 是开集 $\displaystyle \Omega$ 上的亚纯函数.

- % 我们可以考察 $\displaystyle f$ 在*延拓的复平面*处的性质.

若 $\displaystyle f$ 对于所有很大的 $\displaystyle z$ 都解析，考察 $\displaystyle F(z)=f(1/z)$，若 $\displaystyle F(z)$ 在 0 处有极点，则称 $\displaystyle f(1/z)$ 在无穷远处有极点. 对其它奇点也类似.
- @ 若 $\displaystyle \mathbb{C}$ 上亚纯函数 $\displaystyle f$ 在无穷远处解析或者有极点，则称 $\displaystyle f$ 是延拓的复平面上的亚纯函数.

> [!thm]
> 延拓复平面上的亚纯函数是有理函数.

> [!NOTE]
> 特别地，一个亚纯函数可以视为黎曼球到自身的映射.

### 辐角讨论
如果 $\displaystyle f$ 是亚纯的，则函数 $\displaystyle f'/f$ 在 $\displaystyle f$ 的零点和极点处有极点，且阶数等于零点的阶数或极点的阶数的相反数.
> [!thm]
> 辐角准则：
> $\displaystyle f$ 在包含 $\displaystyle C$ 及其内点的开集中亚纯，若 $\displaystyle f$ 在 $\displaystyle C$ 上没有极点和零点，则
> $$
\frac{1}{2\pi i}\int_{C} \frac{f'(z)}{f(z)}dz=\underbrace{ (f\text{在}C\text{内零点数})-(f\text{在}C\text{内极点数}) }_{ 个数要乘以阶数 }
$$

![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=110&rect=133,510,477,586|Stein-II-Complex Analysis, p.91]]
开映射定理
最大模定理
### 同伦
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=112&rect=131,233,473,314|Stein-II-Complex Analysis, p.93]]
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=115&rect=145,689,485,719|Stein-II-Complex Analysis, p.96]]
### 复 logarithm
对于 $\displaystyle z=re^{i\theta}$，定义 $\displaystyle \log z=\log r+i\theta$，其中 $\displaystyle \theta\in [-\pi,\pi]$ 表示辐角主值.
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=117&rect=144,441,491,562|Stein-II-Complex Analysis, p.98]]
> [!NOTE]
> 负数 $\displaystyle -r$ 的 logarithm，是取 $\displaystyle z=re^{ i\pi }$，这样复数的 logarithm 就有定义了.

- ! $$
\log(z_{1}+z_{2})\neq \log z_{1}+\log z_{2}
$$

比如取 $\displaystyle z_{1}=e^{2\pi i/3}=z_{2}$，则
$$
\displaystyle \log (z_{1}+z_{2})=-2\pi i/3\neq 4\pi i/3=\log z_{1}+\log z_{2}
$$
有了复 logarithm 的定义，我们就可以定义复数次方：
$$
z^{\alpha}=e^{\alpha \log z}, \ for\ \alpha\in \mathbb{C}
$$
因为任何非零复数 $\displaystyle w$ 都可以写作 $\displaystyle w=e^{z}$. 于是
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=119&rect=144,223,488,327|Stein-II-Complex Analysis, p.100]]
### 傅里叶级数和调和函数
> [!NOTE]
> The motivation for this study comes in part from the simple and direct relation between Fourier series on the circle and power series expansions of holomorphic functions in the disc, which we now investigate.

![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=120&rect=129,172,480,324|Stein-II-Complex Analysis, p.101]]
- @ 这是 [[Cauchy's thm]] 的直接结论.

平均值原理：
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=121&rect=144,202,491,277|Stein-II-Complex Analysis, p.102]]
取 $\displaystyle u=\mathrm{Re}(f)$，显然是调和函数，则
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=122&rect=127,654,478,722|Stein-II-Complex Analysis, p.103]]
Exercise 12 in Chapter 2 说明所有圆盘上的调和函数都是某个圆盘上解析函数的实部.
