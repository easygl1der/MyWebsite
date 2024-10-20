---
UID: 20240721204530 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-07-21
---

## ✍内容
### Motivation 
计算 $\displaystyle f$ 在上半圆弧 $\displaystyle \gamma_{R}^{+}$ 上的积分时，会遇到正常用模放缩失效的情况，这时候 Jordan's lemma 告诉我们：
> 若 $\displaystyle \lim_{ R \to \infty }\lvert f(R e^{ i\theta }) \rvert=0,a>0$，则 $\displaystyle \lim_{ R \to \infty }\int_{\gamma_{R}^{+}}\lvert  f(z) \rvert e^{ iaz } dz=0$.

或者一个经常用到的推论：
> $\displaystyle P, Q\in \mathbb{C}[z]$，且 $\displaystyle\deg Q (z)\geq \deg P(z)+1$，则 $$
\lim_{ R \to \infty } \int_{\gamma_{R}^{+}} \frac{P(z)e^{iz}}{Q(z)}dz=0
$$

### 证明
对于任意给定的 $\displaystyle \epsilon>0$，令 $\displaystyle R$ 充分大，使得 $\displaystyle \lvert f(R e^{ i\theta }) \rvert<\epsilon$，于是
$$
\begin{align}
\left\lvert  \int_{\gamma_{R}^{+}}\lvert f(z) \rvert e^{ iaz }dz  \right\rvert  & =\left\lvert  \int_{0}^{2\pi} \lvert f(R e^{ i\theta }) \rvert e^{ iaR e^{ i\theta } } \, dRe^{ i\theta }  \right\rvert   \\
 & =\left\lvert  \int_{0}^{2\pi} \lvert f(R e^{ i\theta }) \rvert e^{ iaR(\cos\theta+i\sin\theta) } \, R\cdot i e^{ i\theta }d\theta \right\rvert  \\
 & \leq R\cdot\epsilon\cdot \left\lvert  \int_{0}^{2\pi} e^{ -aR\sin\theta } \, d\theta   \right\rvert  \\
 & \overset{ \sin\theta\geq \frac{2}{\pi}\theta }{ \leq } R\cdot\epsilon\cdot \left\lvert  \int_{0}^{2\pi} e^{ - 2aR\theta/\pi } \, d\theta   \right\rvert \\
 & =2\epsilon\cdot R \frac{1-e^{ -aR }}{\frac{2aR}{\pi}} \\
 & \leq \frac{\pi\epsilon}{a}(1-e^{ -aR })
\end{align}
$$
显然有
$$
\lim_{ R \to \infty } \int_{\gamma_{R}^{+}}\lvert f(z) \rvert e^{iaz}dz=0
$$

