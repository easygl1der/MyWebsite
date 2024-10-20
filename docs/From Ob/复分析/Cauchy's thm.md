---
UID: 20240714161930 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-07-14
---

## ✍内容
If $\displaystyle f$ is holomorphic in an open set containing a circle $\displaystyle C$ and its interior, then for all $\displaystyle z$ inside $\displaystyle C$,
$$
f(z)=\frac{1}{2\pi i}\int_{C} \frac{f(\zeta)}{\zeta-z}d\zeta
$$
> [!thm]
> If $\displaystyle \Omega$ is an open set in $\displaystyle \mathbb{C}$, and $\displaystyle T\subset \Omega$ a triangle whose interior is also contained in $\displaystyle \Omega$, then 
> $$
\int_{T}f(z)dz=0
$$

whenever $\displaystyle f$ is holomorphic in $\displaystyle \Omega$.
Proof:
想法是把 $\displaystyle T$ 不断从各边中点分成四个小三角形.
记 $\displaystyle T^{(0)}=T$, $\displaystyle T^{(n)}$ 是 $\displaystyle T^{(n-1)}$ 的一个子三角形, 使得 $\displaystyle \int_{T^{(n)}}f(z)dz$ 比其它三个大, 于是分出来的序列为
$$
T^{(0)}\supset T^{(1)}\supset\dots \supset T^{(n)}\supset\dots 
$$
必然有 $\displaystyle \{z_{0}\}=\cup_{n\in \mathbb{N}}T^{(n)}$.
每个三角形的周长记为 $\displaystyle p^{(n)}$, 外接圆直径记为 $\displaystyle d^{(n)}$.
于是 $\displaystyle p^{(n)}=2^{-n}p^{(0)},d^{(n)}=2^{-n}d^{(0)}$.
由于 $\displaystyle f(z)=f(z_{0})+f'(z_{0})(z-z_{0})+\psi(z)(z-z_{0})$, 其中 $\displaystyle \psi(z)\to0(当z\to z_{0})$.
于是
$$
\begin{align}
\lvert  \int_{T^{(0)}}f(z)dz \rvert  & \leq 4^{n}\lvert  \int_{T^{(n)}}f(z)dz \rvert \\
 & =4^{n}\lvert  \int_{T^{(n)}}[f(z_{0})+f'(z_{0})(z-z_{0})+\psi(z)(z-z_{0})]dz\rvert  \\
 & =4^{n}\lvert \int_{T^{(n)}}\psi(z)(z-z_{0})dz \rvert  \\
 & \leq 4^{n} \sup_{z\in T^{(n)}}\lvert \psi(z) \rvert d^{(n)} p^{(n)} \\
 & =\sup_{z\in T^{(n)}}\lvert \psi(z) \rvert d^{(0)}p^{(0)} \to 0 (\text{as }n\to \infty)
\end{align}
$$
> [!NOTE]
> 只要图形可以分割成一堆三角形, 上述性质都成立.


![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=56&rect=138,616,474,654|Stein-II-Complex Analysis, p.37]]

> [!EXAMPLE]
> ![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=61&rect=170,427,458,723|Stein-II-Complex Analysis, p.42]]



Application of Cauchy's integration formula:
Calculate the integral using complex analysis approach:
$$
		e^{-\pi \xi^{2}}=\int_{-\infty}^{\infty}e^{-\pi x^{2}}e^{ -2\pi ix \xi }  \, dx 
$$
Solution:
It's already known that
$$
		1=\int_{-\infty}^{\infty}e^{ -\pi x^{2} }  \, dx 
$$
See this toy contour: ![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=62&rect=167,592,444,724|Stein-II-Complex Analysis, p.43]]
$$
\int_{\gamma_{R}}f(z)dz=0
$$
Then we can split the integral into four parts.
$$
	\int_{-R}^{R}e^{ -\pi x^{2} }  \, dx \to1(\text{ as }R\to \infty)
$$
The integral on the vertical side on the right is 
$$
I(R)=\int_{0}^{\xi} f(R+iy)i \, dy =\int_{0}^{\xi} e^{ -\pi(R^{2}+2iRy-y^{2}) }i \, dy 
$$
Obviously, $\displaystyle \lvert I(R) \rvert<Ce^{ -\pi R^{2} }$ for some $\displaystyle C>0$. Thus $\displaystyle I(R)\to0$ as $\displaystyle R\to \infty$.
Moreover
$$
\int_{-R}^{R} e^{ -\pi(x+i\xi)^{2} } \, dx=-e^{ \pi \xi^{2} }\int_{-R}^{R} e^{ -\pi x^{2} }e^{-2\pi ix \xi} \, dx 
$$
Therefore, by the Cauchy's formula:
$$
		0=1-e^{ \pi \xi^{2} }\int_{-\infty}^{\infty}e^{ -\pi x^{2} }e^{ -2\pi ix \xi }  \, dx 
$$

Another classic example is 
$$
\int_{0}^{\infty}  \frac{1-\cos x}{x^{2}} \, dx =\frac{\pi}{2}
$$
We extend this funciton $\displaystyle  \frac{1-\cos x}{x^{2}}$ to the plane, then we get $\displaystyle  \frac{1-e^{ iz }}{z^{2}}$.
Consider this toy contour:
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=63&rect=189,372,441,510|Stein-II-Complex Analysis, p.44]]
The Cauchy's formula implies that:
$$
\begin{matrix}
\int_{C}f(z)dz=0 \\
\int_{-R}^{-\epsilon} f(z)  \, dz+\int_{\gamma_{\epsilon}^{+}}f(z)dz+\int_{\epsilon}^{R} f(z) \, dz +\int_{\gamma_{R}^{+}}f(z)dz=0 
\end{matrix}
$$
Firstly, consider $\displaystyle \gamma_{R}^{+}$, let $\displaystyle R\to \infty$
$$
\lvert f(z) \rvert =\left\lvert   \frac{1-e^{ iz }}{z^{2}}  \right\rvert \leq \frac{2}{\lvert z \rvert ^{2}}
$$
So the integral over $\displaystyle \gamma_{R}^{+}$ goes to zero.
Then consider $\displaystyle \gamma_{\epsilon}^{+}$, let $\displaystyle \epsilon\to 0$
$$
f(z)= \frac{1-e^{iz}}{z^{2}}= \frac{-iz}{z^{2}}+ \underbrace{ E(z) }_{ \text{bdd as } z\to0  }
$$
On $\displaystyle \gamma_{\epsilon}^{+}$ we have $\displaystyle z=\epsilon e^{ i\theta }$ and $\displaystyle dz=i\epsilon e^{ i\theta }d\theta$. Thus
$$
\begin{align}
\int_{\gamma_{\epsilon}^{+}} \frac{1-e^{iz}}{z}dz  & =\int_{\pi}^{0} \left[ -\frac{i}{\epsilon e^{ i\theta }}+E(\epsilon e^{ i\theta }) \right] i\epsilon e^{ i\theta }d\theta \\
 & \to \int_{\pi}^{0} (-ii) \, d\theta =-\pi(\text{ as }\epsilon\to_{0})
\end{align}
$$
Therefore
$$
\int_{-\infty}^{\infty} f(z) \, dz=\pi\implies \int_{0}^{\infty}  \frac{1-\cos x}{x^{2}} \, dx =\frac{\pi}{2}
$$
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=64&rect=134,208,475,297|Stein-II-Complex Analysis, p.45]]
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=66&rect=134,164,482,276|Stein-II-Complex Analysis, p.47]]
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=67&rect=147,171,487,274|Stein-II-Complex Analysis, p.48]]

解析函数有幂级数表示
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=68&rect=135,378,488,531|Stein-II-Complex Analysis, p.49]]
全纯有界函数一定是常函数
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=69&rect=143,293,492,420|Stein-II-Complex Analysis, p.50]]

![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=69&rect=141,230,489,263|Stein-II-Complex Analysis, p.50]]
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=70&rect=133,488,475,566|Stein-II-Complex Analysis, p.51]]

![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=71&rect=148,641,487,717|Stein-II-Complex Analysis, p.52]]

![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=72&rect=133,443,479,579|Stein-II-Complex Analysis, p.53]]

![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=72&rect=133,305,481,368|Stein-II-Complex Analysis, p.53]]
证明考虑用 $\displaystyle \int_{T}f_{n}(z)dz$ 一致逼近 $\displaystyle \int_{T}f(z)dz$，使得 $\displaystyle \int_{T}f(z)dz=0,\forall T$.
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=73&rect=149,421,485,471|Stein-II-Complex Analysis, p.54]]
证明考虑隔开边界
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=74&rect=136,442,477,523|Stein-II-Complex Analysis, p.55]]
构造解析函数

---
积分下的解析函数：
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=75&rect=145,515,487,663|Stein-II-Complex Analysis, p.56]]

---
有理多项式逼近：
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=80&rect=133,502,480,576|Stein-II-Complex Analysis, p.61]]
[[Runge's approximation thm]]