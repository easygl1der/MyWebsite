---
UID: 20240729222255 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-07-29
---

## ✍内容
Gamma 函数：
$$
\Gamma(s)=\int_{0}^{\infty} e^{ -t }t^{s-1} \, dt,\ \ \ \ \mathrm{Re}(s)>0.
$$
Gamma 函数到 $\displaystyle \mathbb{C}$ 的解析延拓可以考虑使用公式：
$$
\Gamma(s)=\frac{\Gamma(s+1)}{s}
$$
来补充定义虚轴及其左侧，同时 $\displaystyle \Gamma(s)$ 在 $\displaystyle 0,-1,\dots,-\boldsymbol{m},\dots$ 处有简单极点 (1 阶), 在 $\displaystyle s=-n$ 处的留数为 $\displaystyle (-1)^{n}/n!$. 而且形式上还有
$$
\text{res}_{s=-n}\Gamma(s+1)=-n\cdot\text{res}_{s=-n}\Gamma(s),且\Gamma(1)=\lim_{ s \to 0 } s\Gamma(s).
$$
进一步，余元公式：
$$
\Gamma(s)\Gamma(1-s)=\frac{\pi}{\sin(\pi a)}
$$
其中由解析延拓可知， $\displaystyle \Gamma(s)\Gamma(1-s)$ 在所有 $\displaystyle \mathbb{Z}$ 点处都有简单极点.
> Gamma 函数的性态

$\displaystyle 1/\Gamma(s)$ 是 $\displaystyle \mathbb{C}$ 上的整函数，在 $\displaystyle 0,-1,-2,\dots$ 具有简单零点，此外非零. 同时
$$
\left\lvert  \frac{1}{\Gamma(s)}  \right\rvert \leq c_{1}e^{ c_{2}\lvert s \rvert \log \lvert s \rvert  }
$$
因此 $\displaystyle 1/\Gamma(s)$ 是 1 阶的.
> [!IMPORTANT]
> 由 Hadamard 分解定理，再带入 $\displaystyle 0,1,\mathbb{R}_{+}$ 可知：
> $$
\frac{1}{\Gamma(s)}=e^{\gamma s} s \prod_{n=1}^{\infty}\left(1+\frac{s}{n}\right) e^{-s / n}
$$

> [!thm]
> Theorem 2.2 If $\operatorname{Re}(s)>1$, then
> $$
\pi^{-s / 2} \Gamma(s / 2) \zeta(s)=\frac{1}{2} \int_0^{\infty} u^{(s / 2)-1}[\vartheta(u)-1] d u .
$$

全部展开即得证明.
定义
$$
\xi(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s),\ \ \ \ \mathrm{Re}(s)>1.
$$
$\displaystyle \xi$ 在 $\displaystyle \mathrm{Re}(s)>1$ 上全纯，且具有到 $\displaystyle \mathbb{C}$ 上的解析延拓，在 $\displaystyle 0,1$ 处有简单极点，且
$$
\xi(s)=\xi(1-s),\forall s\in \mathbb{C}
$$
从 $\displaystyle \xi$ 函数我们可以得到 $\displaystyle \zeta$ 函数的性质：
$\displaystyle \zeta(s)$ 可以亚纯延拓到 $\displaystyle \mathbb{C}$，在 $\displaystyle 1$ 处有唯一的简单极点.
在 $\displaystyle \mathrm{Re}(s)=1$ 上：
$$
\zeta(1+it)=O(\lvert t \rvert ^{\epsilon}),\ \ \ \ \text{as }\  t\to \infty
$$
> [!thm] Proposition 2.7
> Suppose $\displaystyle s=\sigma+it, s, t\in \mathbb{R}$. Then for each $\displaystyle \sigma_{0}$, $\displaystyle 0\leq\sigma_{0}\leq1$, and every $\displaystyle \epsilon>0$, there exists a constant $\displaystyle c_{\epsilon}$ so that
> 1. $\displaystyle \lvert \zeta (s) \rvert\leq c_{\epsilon}\lvert t \rvert^{1-\sigma_{0}+\epsilon}, if\  \sigma_{0}\leq\sigma\ and \lvert t\rvert\geq1$ 
> 2. $\displaystyle \lvert \zeta' (s) \rvert\leq c_{\epsilon}\lvert t \rvert^{\epsilon}, if\ 1\leq\sigma \ and\  \lvert t \rvert\geq1$




