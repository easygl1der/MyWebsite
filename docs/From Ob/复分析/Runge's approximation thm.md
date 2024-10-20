---
UID: 20240720125440 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-07-20
---

## ✍内容
### Motivation
在 $\displaystyle \mathbb{R}$ 上有 Weierstrass 逼近定理，说明紧区间上的连续函数可以被多项式函数一致逼近.
那么什么条件可以保证紧集 $\displaystyle K\subset \mathbb{C}$ 上的解析函数可以被多项式函数一致逼近呢？
> 圆盘 $\displaystyle D$ 上解析函数有幂级数形式 $\displaystyle \sum _{n=1}^{\infty}a_{n}z^{n}$ 在紧集 $\displaystyle K$ 上一致收敛，故可以被多项式函数 $\displaystyle \sum_{n=1}^{N}a_{n}z^{n}$ 一致逼近.

但是考虑 $\displaystyle f(z)=\frac{1}{z}$ 在 $\displaystyle K=C$ 单位圆上，由 Cauchy'thm，$\displaystyle \int_{C}f(z)dz=2\pi i$，但若 $\displaystyle p$ 是一个多项式，则 $\displaystyle \int_{C}p(z)dz=0$. 这说明 $\displaystyle f$ 不能被多项式一致逼近.
因此，我们需要更强的条件，这个条件是：$\displaystyle K^{c}$ 是连通的.
这就是 Runge 定理：
> [!thm]
> 紧集 $\displaystyle K$ 附近的任何解析函数可以被奇点在 $\displaystyle K^{c}$ 的有理函数在 $\displaystyle K$ 上一致逼近，若 $\displaystyle K^{c}$ 是连通的，则可被多项式一致逼近.

- @ 当 $\displaystyle K^{c}$ 是连通的时候，可以将奇点推向无穷远点，从而将有理函数转化为多项式.









