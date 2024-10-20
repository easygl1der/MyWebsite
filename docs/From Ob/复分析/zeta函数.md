## Motivation
[[解析数论|欧拉公式]]的直接推论是 $\displaystyle \sum_{p}1/p$ 发散. 自然会问这些素数是怎么分布的，考虑函数
$$
\pi(x)=大小不超过x的素数个数
$$
事实上，$\displaystyle \pi (x)\sim x/\log x, as\ x\to \infty$. 此证明依赖于复分析，而素数理论的核心在于 zeta 函数 $\displaystyle \zeta(z)$ 在 $\displaystyle \mathrm{Re}(z)=1$ 上非零. 
## Zeros of zeta function
之前在 $\displaystyle \mathrm{Re}(z)>1$ 上证明了欧拉公式，为了进一步考虑 $\displaystyle \zeta(z)$ 的性质，需要用到 [[Gamma-and-Zeta-function|解析延拓]] 中使用的 gamma 函数和 zeta 函数的恒等式
$$
\zeta(s)=\pi^{s-1 / 2} \frac{\Gamma((1-s) / 2)}{\Gamma(s / 2)} \zeta(1-s) .
$$
考虑 $\displaystyle \Gamma$ 和 $\displaystyle \zeta$ 的零点，显然有
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=203&rect=145,336,494,365|Stein-II-Complex Analysis, p.184]]
## Reduction to the function $\psi,\psi_{1}$
### 定义 $\psi(x)$
Tchebychev's $\displaystyle \psi$ -funciton is defined by
$$
\psi(x)=\sum_{p^{m}\leq x}\log p
$$
If we define 
$$
\Lambda(x)=\left\{\begin{array}{l}
\log p & \text{if }n=p^{m}\text{ for some prime } \\
0 & \text{otherwise}
\end{array}\right.
$$
Then it is clear that
$$
\psi(x)=\sum_{1\leq n\leq x}\Lambda(n)
$$
Also it is immediate that
$$
\psi(x)=\sum_{p\leq x}\left[ \frac{\log x}{\log p} \right]\log p
$$
> [!IMPORTANT]
> Proposition 2.1 If $\psi(x) \sim x$ as $x \rightarrow \infty$, then $\pi(x) \sim x / \log x$ as $x \rightarrow \infty$.

### 定义 $\psi_{1}(x)$
To estimate the property of $\displaystyle \psi(x)$, we define
$$
\psi_{1}(x)=\int_{1}^{x} \psi(u) \, du
$$
> [!IMPORTANT]
> Proposition 2.2 If $\psi_1(x) \sim x^2 / 2$ as $x \rightarrow \infty$, then $\psi(x) \sim x$ as $x \rightarrow \infty$, and therefore $\pi(x) \sim x / \log x$ as $x \rightarrow \infty$.

The proof is given by showing
$$
\liminf_{ x \to \infty }\frac{\psi(x)}{x}\geq1,\ \limsup_{ x \to \infty } \frac{\psi(x)}{x}\leq1 
$$
Since $\displaystyle \psi(x)$ is increasing, we have 
$$
\frac{\psi(x)}{x}\overset{ \beta>1 }{ \leq } \frac{1}{(\beta-1)x^{2}}\int_{x}^{\beta x} \psi(x) \, dx \sim \frac{(\beta x)^{2}-x^{2}}{2(\beta-1)x^{2}}=\frac{\beta+1}{2}(\text{as }x\to \infty)
$$
Since $\displaystyle \beta$ is arbitrary, $\displaystyle \limsup_{ x \to \infty }\frac{\psi(x)}{x}\leq1$. Similarly, $\displaystyle \liminf_{ x \to \infty }\frac{\psi(x)}{x}\geq1$.
### Relate $\psi_{1}$ and $\zeta$
We proved in lemma 1.3 that for $\displaystyle \mathrm{Re}(s)>1$
$$
\log\zeta(s)=\sum_{m,p}\frac{p^{-ms}}{m}
$$
Differentiating this expression gives
$$
\frac{\zeta'(s)}{\zeta(s)}=-\sum_{m,p}(\log p)p^{-ms}=-\sum_{n=1}^{\infty} \frac{\Lambda(n)}{n^{s}}
$$
where $\displaystyle \psi(x)=\sum_{1\leq n\leq x}\Lambda(n)$. 
### 证明 proposition 2.3
![[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=211&rect=144,646,489,723|Stein-II-Complex Analysis, p.192]]
Proof:
记 $\displaystyle a=e^{ \beta }$, $\displaystyle f(s)=\frac{e^{ s\beta }}{s(s+1)}$, 考虑 $\textcolor{red} {\displaystyle a\geq1}$, 即 $\displaystyle \beta\geq0$ 时
轨道 [[数学/分析/Stein系列/Stein系列/Stein-II-Complex Analysis.pdf#page=211&rect=170,313,465,541|Stein-II-Complex Analysis, p.192]]
$\displaystyle T$ 充分大时，由留数定理
$$
\frac{1}{2\pi i}\int _{\Gamma(T)}f(s) \, ds =\text{res}_{0}f+\text{res}_{-1}f=1-1/a
$$
而 $\displaystyle \int _{\Gamma(T)}f(s) \, ds=\int _{S(T)}f(s) \, ds+\int _{C(T)}f(s) \, ds$, 只需证 $\displaystyle \int _{C(T)}f(s) \, ds\to0(T\to \infty)$.
由于 $\displaystyle\lvert e^{ s\beta } \rvert\leq \lvert e^{ c\beta }\rvert$, 且 $T$ 充分大时, 有 $\displaystyle \lvert s(s+1) \rvert\geq T^{2}/2$. 于是
$$
\begin{align}
\left\lvert  \int _{C(T)}f(s) \, ds   \right\rvert  & \leq \int _{C(T)}\lvert f(s) \rvert  \, ds  \\
 & \leq \int _{C(T)}\frac{2\lvert e^{ c\beta } \rvert }{T^{2}} \, ds  \\
 & =\frac{2\pi \lvert e^{ c\beta } \rvert }{T}\to0(T\to \infty)
\end{align}
$$
考虑 $\displaystyle \textcolor{red}{0<a\leq1}$, 考虑 $\displaystyle \mathrm{Re}(z)=c$ 右侧的半圆轨道, 内部没有极点, 留数为 0. 
且 $\displaystyle \beta=\ln a<0$，于是 $\displaystyle \lvert e^{ s\beta } \rvert\leq \lvert e^{ \mathrm{Re}(s)\beta } \rvert\overset{ \mathrm{Re}(s)\geq c>0 }{ \leq }1$，于是
$$
\left\lvert   \int _{C (T)}f (s) \, ds  \right\rvert\leq \int _{C(T)}\lvert f(s) \rvert \, ds\leq \int _{C(T)}\left\lvert  \frac{1}{s(s+1)}  \right\rvert \, ds\leq\frac{\pi}{T}\to0(T\to \infty)
$$
> [!NOTE]
> 我们现在足以证明 Proposition 2.3.

> [!important]
> Proposition 2.3 For all $c>1$
$$\psi_1(x)=\frac{1}{2 \pi i} \int_{c-i \infty}^{c+i \infty} \frac{x^{s+1}}{s(s+1)}\left(-\frac{\zeta^{\prime}(s)}{\zeta(s)}\right) d s .$$

记
$$
\psi(x)=\sum_{1\leq n\leq x}\Lambda(n)=\sum_{n=1}^{\infty} \Lambda(n)\mathbb{1}_{n\leq x}
$$
于是
$$
\begin{aligned}
\psi_{1}(x) & =\int_{1}^{x} \psi(u) \, du=\int_{0}^{x} \psi(u) \, du \\
   & =\sum_{n=1}^{\infty} \int_{0}^{x} \Lambda(n)\mathbb{1}_{n\leq u} \, du \\
  &=\underbrace{ \sum_{n\leq x}\Lambda(u)\int_{u}^{x}  \, du  }_{ \text{用另一种方式写} }=\sum_{u\leq x}\Lambda(u)(x-n)
\end{aligned}
$$
运用 Proposition 2.4 就有
$$
\begin{aligned}
\frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty} \frac{x^{s+1}}{s(s+1)}\left( -\frac{\zeta'(s)}{\zeta(s)} \right) \, ds  & =\frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty} \frac{x^{s+1}}{s(s+1)}\sum_{n=1}^{\infty} \frac{\Lambda(n)}{n^{s}} \, ds   \\
 & =\frac{1}{2\pi i}\sum_{n=1}^{\infty} \Lambda(n)x\int_{c-i\infty}^{c+i\infty} \frac{(x/n)^{s}}{s(s+1)} \, ds \\
  & =\frac{1}{2\pi i}\sum_{n=1}^{\infty} \Lambda(n)x\cdot \mathbb{1}_{\frac{x}{n}\geq  1}\left( 1-\frac{n}{x} \right) \\
 & =\frac{1}{2\pi i}\sum_{n\leq x}\Lambda(n)(x-n)=\textcolor{pink}{\psi_{1}(x)}
\end{aligned}
$$
### 证明 $\psi_{1}(x)\sim x^{2}/2$
The key ingredients are 
- % The relation between $\displaystyle \psi_{1}$ and $\displaystyle \zeta$ in proposition 2.3 $$\psi_{1}(x)=\frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty} \frac{x^{s+1}}{s(s+1)}\left( -\frac{\zeta'(s)}{\zeta(s)} \right) \, ds$$
- $ the non-vanishing of the zeta function on $\displaystyle \mathrm{Re}(z)=1$


