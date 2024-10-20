---
UID: 20240726163734 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-07-26
---

## ✍内容
### Jensen's formula
Let $\displaystyle \Omega$ be an open set that contains the closure of a disc $\displaystyle D_{R}$ and suppose that $\displaystyle f$ is holomorphic in $\displaystyle \Omega$, $\displaystyle f(0)\neq_{0}$, and $\displaystyle f$ vanishes nowhere on the circle $\displaystyle C_{R}$.  If $\displaystyle z_{1},\dots,z_{n}$ denote the zeros of $\displaystyle f$ inside the disc (counted with multiplicities)^[That is, each zero appears in the sequence as many times as its order.], then
$$
\log \lvert f(0) \rvert =\sum_{k=1}^{N} \log\left( \frac{\lvert z_{k} \rvert }{R} \right)+\frac{1}{2\pi}\int_{0}^{2\pi} \log \lvert f(R e^{ i\theta }) \rvert  \, d\theta
$$
Proof:
1. 若 $\displaystyle f_{1}，f_{2}$ 满足上式，则 $\displaystyle f_{1}f_{2}$ 也满足.
2. 考虑去掉零点，化为全纯函数.

令
$$
g(z)=\frac{f(z)}{(z-z_{1})\dots(z-z_{N})}
$$
即 $\displaystyle f(z)=(z-z_{1})\dots(z-z_{N})g(z)$, 其中 $\displaystyle g$ 在 $\displaystyle \Omega$ 解析，在 $\displaystyle D_{R}$ 闭包非零. 而 $\displaystyle z-z_{j}$ 显然满足所欲证，故由 1. 只需对 $\displaystyle g$ 证明.
3. 将 $\displaystyle g(z)$ 写作 $\displaystyle e^{ h(z) }$. 于是

$$
\lvert g(z) \rvert =\lvert e^{ h(z) } \rvert =\lvert e^{ \mathrm{Re}(h(z)) +i\mathrm{Im}(h(z))} \rvert=e^{ \mathrm{Re}(h(z)) }
$$
于是 $\displaystyle \log \lvert g(z) \rvert=\mathrm{Re}(h(z))$, 故由平均值公式：
$$
\log \lvert g(0) \rvert =\frac{1}{2\pi}\int_{0}^{2\pi} \log \lvert g(R e^{ i\theta }) \rvert  \, d\theta 
$$
4. 最后对函数 $\displaystyle f (z)=z-w, w\in D_{R}$ 证明.

只需证
$$
\int_{0}^{2\pi} \log \lvert 1-a e^{ i\theta } \rvert  \, d\theta=0\ \ \ \text{whenever }\lvert a \rvert <1. 
$$
考虑函数 $\displaystyle F(z)=1-az$, 在单位圆闭包内非零，于是存在略大于单位圆上的解析函数 $\displaystyle G$ 使得 $\displaystyle F(z)=e^{ G(z) }$, 且 $\displaystyle \lvert F(z) \rvert=e^{ \mathrm{Re}(G(z)) }$, 因此 $\displaystyle \log \lvert F(z) \rvert=\mathrm{Re}(G(z))$.
由于 $\displaystyle \lvert F(0) \rvert=1\Rightarrow \log \lvert F(0) \rvert=0$，由平均值原理即可得证.
> [!NOTE]
> 从 Jensen's formula，我们可以得到解析函数**增长性**与其在圆盘内**零点个数**的联系.

> [!cor]
> $$
 \overbrace{ \int_{0}^{R} \underbrace{ \mathfrak{n}(r) }_{ f在D_{r}内零点个数 } \, \frac{dr}{r} }^{ 等于\sum_{k=1}^{N} \log(\lvert z_{k} \rvert /R) } =\frac{1}{2\pi}\int_{0}^{2\pi} \log \lvert f(R e^{ i\theta }) \rvert  \, d\theta -\log \lvert f(0) \rvert
$$

[[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=156|Stein-II-Complex Analysis, p.137]]
### Functions of finite order
The order of growth of $\displaystyle f$:
$$
\rho_{f}=\inf\{\rho:\lvert f(z) \rvert \leq Ae^{ B\lvert z \rvert ^{\rho} },\text{for all }z\in \mathbb{C}\}
$$
- ~ the order of growth of $\displaystyle e^{ z^{2} }$ is $\displaystyle 2$.

![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=157&rect=144,408,492,531|Stein-II-Complex Analysis, p.138]]
- & (ii) is a noteworthy fact! And $\displaystyle s>\rho$ cannot be improved.
- ~ consider $\displaystyle f(z)=\sin \pi z$, with $\displaystyle \lvert f(z) \rvert\leq e^{ \pi \lvert z \rvert }$, and its order equals to 1. What's more, $\displaystyle f$ vanishes to order 1 at $\displaystyle z=n$ for each $\displaystyle n\in \mathbb{Z}$, and $\sum_{n\neq 0}1/\lvert n \rvert^{s}<\infty$ precisely when $\displaystyle s>1$.

### Infinite products
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=160&rect=136,676,475,721&color=yellow]]
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=160&rect=133,210,483,389&color=red]]

![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=161&rect=142,258,487,301|Stein-II-Complex Analysis, p.142]]
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=161&rect=225,343,400,383&color=yellow|Stein-II-Complex Analysis, p.142]]
### Weierstrass infinite products
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=164&rect=133,606,473,669&color=yellow|Stein-II-Complex Analysis, p.145]]

![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=164&rect=132,248,470,314&color=important|Stein-II-Complex Analysis, p.145]]

![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=165&rect=149,460,486,533&color=important|Stein-II-Complex Analysis, p.146]]
[[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=165&selection=196,0,216,22&color=yellow|We claim that this function has the required properties; that is, f is entire with a zero of order m at the origin, zeros at each point of the sequence {an}, and f vanishes nowhere else.]]
首先对于任意给定的 $\displaystyle R>0$, 在圆盘 $\displaystyle \lvert z \rvert<R$ 中考虑 $\displaystyle f$ 具有如上性质，再由 $\displaystyle R$ 任意性，给出 $\displaystyle f$ 在 $\displaystyle \mathbb{C}$ 中有如上性质.
分别考虑 $\displaystyle \lvert a_{n} \rvert\leq2R$ 和 $\displaystyle \lvert a_{n} \rvert>2R$，前者的 $\displaystyle a_{n}$ 项数是有限的，后者满足 $\displaystyle \lvert z/a_{n} \rvert\leq1/2$，于是
$$
\lvert 1-E_{n}(z/a_{n}) \rvert\leq c\left\lvert  \frac{z}{a_{n}}  \right\rvert ^{n+1}\leq \frac{c}{2^{n+1}}
$$
因此，乘积
$$
\prod _{\lvert a_{n} \rvert \geq 2R}E_{n}(z/a_{n})
$$
定义了 $\displaystyle \lvert z \rvert<R$ 上的解析函数，并且在 $\displaystyle \lvert z \rvert<R$ 非零. 于是 $\displaystyle f(z)$ 满足所需性质.
### Hadamard’s factorization theorem
[[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=166&selection=11,0,13,9&color=yellow|The theorem of this section combines the results relating the growth of a function to the number of zeros it possesses, and the above product theorem.]]
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=166&rect=128,215,488,343|Stein-II-Complex Analysis, p.147]]
#### Main lemmas
关于典范乘积 $\displaystyle E_{k}(z)$ 的阶的下估计：
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=167&rect=139,625,490,722|Stein-II-Complex Analysis, p.148]]
证明直接大胆放缩.
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=167&rect=144,237,494,341|Stein-II-Complex Analysis, p.148]]
证明考虑分段
$$
\prod_{n=1}^{\infty} E_{k}(z/a_{n})=\prod_{\lvert a_{n} \rvert \leq 2\lvert z \rvert }E_{k}(z/a_{n})\cdot \prod_{\lvert a_{n} \rvert >2\lvert z \rvert }E_{k}(z/a_{n}).
$$
由于 $\displaystyle a_{1},a_{2},\dots$ 是 $\displaystyle f$ 的非零零点，$\displaystyle s>\rho$，故由 Thm 2.1
$$
\sum \lvert a_{n} \rvert ^{-s}<\infty
$$
于是
$$
\begin{align}
\left\lvert  \prod_{\lvert a_{n} \rvert >2\lvert z \rvert }E_{k}(z/a_{n})  \right\rvert  & =\prod_{\lvert a_{n} \rvert >2\lvert z \rvert }\lvert E_{k}(z/a_{n}) \rvert \\
 & \geq \prod_{\lvert a_{n} \rvert >2\lvert z \rvert }e^{ -c\lvert z/a_{n} \rvert^{k+1}  } \\
 & \geq e^{ -c\lvert z \rvert ^{k+1}\sum_{\lvert a_{n} \rvert >2\lvert z \rvert } \lvert a_{n} \rvert ^{-k-1}  }  \\
 & \geq e^{ -c\lvert z \rvert ^{s}\sum \lvert a_{n} \rvert ^{-s} } 
\end{align}
$$
为了估计前一部分，我们使用 lemma 5.2 的第二部分，写作
$$
\left\lvert  \prod_{\lvert a_{n} \rvert \leq 2\lvert z \rvert }E_{k}(z/a_{n})  \right\rvert\geq \underbrace{ \prod_{\lvert a_{n} \rvert \leq 2\lvert z \rvert }\left\lvert  1-\frac{z}{a_{n}}  \right\rvert }_{ \geq \prod_{\lvert a_{n} \rvert \leq 2\lvert z \rvert }\lvert a_{n} \rvert ^{-k-2} }\cdot\underbrace{  \prod_{\lvert a_{n} \rvert \leq 2\lvert z \rvert }e^{ -c'\lvert z/a_{n} \rvert ^{k} } }_{ \geq e^{ -c\lvert z \rvert ^{s} } }
$$
而
$$
\begin{align}
(k+2)\sum_{\lvert a_{n} \rvert   \leq 2\lvert z \rvert }\log \lvert a_{n} \rvert  & \leq(k+2)\mathfrak{n}(2\lvert z \rvert )\log 2\lvert z \rvert  \\
 & \overset{ \mathfrak{n}(2\lvert z \rvert )\leq c\lvert z \rvert ^{s} }{ \leq } c\lvert z \rvert ^{s}\log 2\lvert z \rvert  \\
 & \leq c'\lvert z \rvert ^{s'}\ \ \ \text{      for all }s'>s
\end{align}
$$
得证！
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=169&rect=145,338,486,411|Stein-II-Complex Analysis, p.150]]
#### Proof of Hadamard's thm
由于 $\displaystyle E (z)\coloneqq z^{m}\prod_{n=1}^{\infty}E_{k}(z/a_{n})$ 具有 $\displaystyle f(z)$ 的所有零点，所以 $\displaystyle f/E$ 是全纯函数且非零. 于是
$$
\frac{f(z)}{E(z)}=e^{ g(z) },g全纯
$$
同时
$$
e^{ \mathrm{Re}(g(z)) }=\underset{ \lvert E(z) \rvert \geq e^{ -c\lvert z \rvert ^{s} } }{ \underbrace{ \overbrace{ \left\lvert  \frac{f(z)}{E(z)}  \right\rvert  }^{ f\text{ has growth order }\rho_{0}<s<k+1 } }_{ \lvert f(z) \rvert\leq Ae^{ B\lvert z \rvert ^{\rho_{0}} }\overset{ \rho_{0}\leq s }{ \leq } Ae^{ B\lvert z \rvert ^{s} }  } }\leq c'e^{ c\lvert z \rvert ^{s} }
$$
- & 注意这里不等号放缩时指数上时相加不是相乘，即 $\displaystyle \left\lvert  \frac{f (z)}{E (z)}  \right\rvert\leq \frac{Ae^{ B\lvert z \rvert^{s} }}{e^{ -c\lvert z \rvert^{s} }}\leq Ae^{ (B+c)\lvert z \rvert^{s} }$.

于是
$$
\mathrm{Re}(g(z))\leq C\lvert z \rvert ^{s},\ \ \ \ \text{for }\lvert z \rvert =r_{m}
$$
接下来断言 $\displaystyle g$ 是 $\displaystyle \leq s$ 次多项式, 就证明了 hadamard 定理.
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=171&rect=143,487,487,562|Stein-II-Complex Analysis, p.152]]
