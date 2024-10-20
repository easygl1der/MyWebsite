---
UID: 20240916140117 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-16
---
## ✍内容
[[Elementary Numerical Analysis An Algorithmic Approach (Samuel Daniel Conte) (Z-Library).pdf]]
避免***相近数相减***可以减少误差，比如计算 $\displaystyle 1-\cos x$，在 $x$ 很大的时候可以直接计算，但是在 $\displaystyle x\to0$ 的时候，直接计算属于相近数相减，误差较大，可以考虑使用变换
$$
1-\cos x=\frac{1-\cos ^{2}x}{1+\cos x}=\frac{\sin ^{2}x}{1+\cos x}
$$
或者使用泰勒展开
$$
1-\cos x=\frac{x^{2}}{2}-\frac{x^{4}}{24}+\dots
$$
对于二次方程 $\displaystyle ax^{2}+bx+c=0$，利用求根公式计算出
$$
x_{1}=\frac{-b+\sqrt{ b^{2}-4ac }}{2a}\tag{1}
$$
当 $\displaystyle ac$ 很小的时候，$\displaystyle \sqrt{ b^{2}-4ac }\approx \lvert b \rvert$ ，对于方程
$$
x^{2}+111.11x+1.2121=0
$$
来说，使用公式 (1) 直接计算得到 
$$
x_{1}=-0.01000
$$
但是事实上
$$
x_{1}=-0.010910
$$
于是我们考虑变换
$$
x_{1}=\frac{-2c}{b+\sqrt{ b^{2}-4ac }}
$$
同样可以计算出
$$
x_{1}=-0.010910
$$
精度更高。
## Condition and instability
### Condition
初始误差会导致整个序列都产生误差，于是就要分析误差的 condition and instablility.
**condition**指的是函数值 $\displaystyle f(x)$ 关于 $\displaystyle x$ 变化的敏感性，condition off at $x=$
$$
\max\left\{  \left\lvert  \frac{f(x)-f(x^{*})}{f(x)}  \right\rvert  /\left\lvert  \frac{x-x^{*}}{x}  \right\rvert :\lvert x-x^{*} \rvert \text{small}  \right\}\approx \left\lvert  \frac{f'(x)x}{f(x)}  \right\rvert 
$$
The larger the condition, the more ill-conditioned the function is said to be.
例如对于 $\displaystyle f(x)=\sqrt{ x }$，$\displaystyle f'(x)=1/(2\sqrt{ x })$，the condition of $f$ is, approximately,
$$
\lvert f'(x)x/f(x) \rvert =\frac{x/(2\sqrt{ x })}{\sqrt{ x }}=1/2
$$
This says that taking square roots is a well-conditioned process since it actually reduces the relative errors. By contrast, if 
$$
f(x)=\frac{10}{1-x^{2}}
$$
Then the condition is, approxmiately
$$
\lvert f'(x)x/f(x) \rvert=\frac{2x^{2}}{\lvert 1-x^{2} \rvert } 
$$
And this number will be very large for $\displaystyle \lvert x \rvert\to1$. For $\displaystyle x$ near 1 or -1, the function is quite ill-conditioned.
### Instablility
We use $\displaystyle x_{i}$ to describe the steps to compute $\displaystyle x\to f(x)$, and $\displaystyle f_{i}$ to denote the relationship $\displaystyle x_{i}\to f(x)$.
To give a simple example, consider the function
$$
f(x)=\sqrt{ x+1 }-\sqrt{ x }
$$
For large $x\approx10^{4}$, the condition of $\displaystyle f(x)$ is nearly $\displaystyle 1/2$.
But if we calculate $\displaystyle f(12345)$ in six-decimial arithmetic, we find
$$
\begin{aligned}
f(12345) & =\sqrt{12346}-\sqrt{12345} \\
& =111.113-111.108=0.005
\end{aligned}
$$
while, actually, $f(12345)=0.00450003262627751 \ldots$
So our calculated answer is in error by 10 percent. We analyze the computational process. It consists of the following four computational steps:
$$
\begin{aligned}
& x_0:=12345 \\
& x_1:=x_0+1 \\
& x_2:=\sqrt{x_1} \\
& x_3:=\sqrt{x_0} \\
& x_4:=x_2-x_3
\end{aligned}\tag{2}
$$
The condition of $\displaystyle f_{3}:t\mapsto x_{2}-t$ is nearly <u>22,222</u>, when $\displaystyle t\approx111.11$.
We conclude that the process described in (2) is unstable way to evaluate $f$.
### Exercise
1.4-5 A dramatically unstable way to calculate $f(x)=e^x$ for negative $x$ is provided by its Taylor series (1.36). Calculate $e^{-12}$ by evaluating the Taylor series (1.36) at $x=-12$ and compare with the accurate value $e^{-12}=0.000006144212354 \cdots$
> [!HINT]
> By (1.36), the difference between $e^x$ and the partial sum $\displaystyle s_n=\Sigma_0^n x^j / j$ ! Is less than the next term $\mid x^{n+1} /(n$ $+1)!\mid$ in absolute value, in case $x$ is negative. So, it would be all right to sum the series until $s_n=s_{n+1}$.

1.4-6 Explain the result of Exercise 1.4-5 by comparing the condition of $f(x)=e^x$ near $x=-12$ with the condition of some of the functions $f_i$ involved in the computational process. Then find a stable way to calculate $\mathrm{e}^{-12}$ from the Taylor series (1.36). (Hint: $e^{-x}=1 / e^x$.)
## Convergence of series
The order notation appears customarily only on the right-hand side of an equation and serves the purpose of describing the essential feature of an error term without bothering about multiplying constants or other detail. For instance, we can state concisely the unsatisfactory state of affairs in the earlier example by saying that
But also
$$
\begin{aligned}
& 1-\sum_{j=2}^n 1 /\left(j^2-1\right)=\pi / 4+\mathcal{O}(1 / n) \\
& 1-\sum_{j=2}^n 1 /\left(j^2-1\right) \neq \pi / 4+o(1 / n)
\end{aligned}
$$
i.e., the series converges to $\pi / 4$ as fast as $1 / n$ (goes to zero) but no faster. A convergence order or rate of $1 / n$ is much too slow to be useful in calculations.
[[difference between A and NA]]

