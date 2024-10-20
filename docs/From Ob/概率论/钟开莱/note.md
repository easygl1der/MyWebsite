---
UID: 20240927173541 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-27
---

## ✍内容
[[26690917_概率论教程-钟开莱-概率论经典书籍.pdf]]
增函数只可能有跳跃间断点。

一个增函数的跳跃间断点可以是稠密的，比如
$$
f(x)=\sum_{n=1}^{\infty} b_{n}\delta_{a_{n}}(x)
$$
其中 $\displaystyle \delta_{t}(x)\coloneqq \chi_{\{ x\geq t \}}(x)$, $\displaystyle \{ a_{n} \}_{n\geq1}$ 表示所有有理数. 可取 $\displaystyle b_{n}=2^{-n}$. 可以验证 $\displaystyle f(x)$ 在所有有理点处跳跃。

增函数 $f$ 的不连续点是至多可数的。
利用拓扑性质，对于 $f$ 的任意两间断点 $\displaystyle x< x'$，存在 $\displaystyle \widetilde{x}$ 使得 $\displaystyle x<\widetilde{x}<x'$，于是由 $f$ 单调性：$\displaystyle f(x+)\leq f(\widetilde{x})\leq f(x'-)$，于是开区间族 $\displaystyle \{ (f(x-),f(x+)) \}_{x\in \{ f\text{的间断点集} \}}$ 两两无交
$$
\begin{gather}
\phi:  \{ f\text{的间断点集} \}\hookrightarrow\mathbb{Q}  \\
x\longmapsto q\in(f(x-),f(x+))
\end{gather}
$$

(v) 设 $f_1$ 与 $f_2$ 是两个增函数, $D$ 是在 $(-\infty,+\infty)$ 中（到处）稠密的一个集合。设
$$
\forall x \in D: f_1(x)=f_2(x)
$$
则 $f_1$ 与 $f_2$ 具有相同大小的同样的跳跃点, 且除了在某些跳跃点可能例外, $f_1$ 与 $f_2$ 相等.
证明考虑子列极限，于是是显然的
$$
f(x-)=\lim_{ n \to \infty } f(t_{n})\qquad \text{for some }\{ t_{n} \}_{n\geq 1}\in D,t_{n}\uparrow x
$$
> 对于增函数，只需要考虑在一个 $\displaystyle \mathbb{R}$ -稠密集上的性质。


（vii）设 $f$ 是 $D$ 上的增函数, 在 $(-\infty,+\infty)$ 上定义 $f$ 如下:
$$
\forall x: \tilde{f}(x)=\inf _{t \in (x,+\infty)\cap D} f(t)
$$
则 $f$ 是增函数且处处右连续.
由 $\displaystyle \epsilon$ 语言是显然的。
> [!NOTE]
> 似乎和此题类似：
> ![[第八届吧赛大学组试题-纯数.pdf#page=3&rect=66,662,543,700|第八届吧赛大学组试题-纯数, p.2]]


> 定理 1.2.3 每个分布函数可以写成一个离散分布函数和一个连续分布函数的凸组合. 这样的分解是唯一的.


定义函数 $F$ 称为绝对连续（在 $(-\infty, \infty)$ 中相对勒贝格测度而言）, 如果在 $L^1$ 中存在一个函数 $f$, 使得对于每个 $x<x^{\prime}$ 有
$$
F\left(x^{\prime}\right)-F(x)=\int_a^{\alpha^{\prime}} f(t) d t .
$$
由众所周知的命题可知, 这种函数具有几乎处处等于 $f$ 的导数. 特别是, 如果 $F$ 是一分布函数, 则
$$
f \geqslant 0 \text { a. ө. 且 } \int_{-\infty}^{\infty} f(t) d t=1 \text {. }
$$
反之, 对于任意给定的 $L^1$ 中满足条件 (2) 的函数 $f$, 容易看出, 由
$$
\forall x: F(x)=\int_{-\infty}^{\infty} f(t) d t
$$
定义的函数是绝对连续的分布函数。
定义：如果函数 $F$ 不恒等于零而 $F^{\prime}$ (存在且) 几乎处处等于零, 则称 $F$ 是奇异的.

> 定理 1.3.2 每个分布函数 $F$ 可以写成==一个离散的, 一个奇异连续的和一个绝对连续==的分布函数的凸组合，且这样的分解是唯一的.


---

## 随机变量
(i) $E \in \mathscr{A} \Rightarrow E^c \in \mathscr{A}$.
(ii) $E_1 \in \mathscr{A}, E_2 \in \mathscr{A} \Rightarrow E_1 \cup E_2 \in \mathscr{A}$.
(iii) $E_1 \in \mathscr{A}, E_2 \in \mathscr{A} \Rightarrow E_1 \cap E_2 \in \mathscr{A}$.
(iv) $\forall n \geqslant 2: E_j \in \mathscr{A}, 1 \leqslant j \leqslant n \Rightarrow \bigcup_{j=1}^n E_j \in \mathscr{A}$.
(v) $\forall n \geqslant 2: E_j \in \mathscr{A}, 1<j \leqslant n \Rightarrow \prod_{j=1}^n E_j \in \mathscr{A}$.
(vi) $E_j \in \mathscr{A} ; E_j \subset E_{j+1}, 1 \leqslant j<\infty \Rightarrow \bigcup_{j=1}^{\infty} E_j \in \mathscr{A}$.
(vii) $E_j \in \mathscr{A} ; E_j \supset E_{j+1}, 1 \leqslant j<\infty \Rightarrow \bigcap_{j=1}^{\infty} E_j \in \mathscr{A}$.
(viii) $E_j \in \mathscr{A}, 1 \leqslant j<\infty \Rightarrow \bigcup_{j=1}^{\infty} E_j \in \mathscr{A}$.
(ix) $E_j \in \mathscr{A}, 1 \leqslant j<\infty \Rightarrow \bigcap_{j=1}^{\infty} E_j \in \mathscr{A}$.
(x) $E_1 \in \mathscr{A}, E_2 \in \mathscr{A}, E_1 \subset E_2 \Rightarrow E_2 \backslash E_1 \in \mathscr{A}$.
其中有一些蕴含关系：详见 [[26690917_概率论教程-钟开莱-概率论经典书籍.pdf#page=20|26690917_概率论教程-钟开莱-概率论经典书籍, p.17]]

> [!def]
> 定义设 $\mathscr{F}$ 是 $\Omega$ 的子集的一个非空类, 当且仅当 (i) 与 (ii) 成立时， $\mathscr{F}$ 称为域。当且仅当 $(\mathrm{vi})$ 与（vii）成立时， $\mathscr{F}$ 称为单调类 （简记为 M. O.）。当且仅当（i）与（viii）成立时， $\mathscr{F}$ 称为波莱尔域 (简记为 B. F.).

> 波莱尔 (Borel) 域的定义好像范畴的 completion，将 limit 囊括进来。


定理 2.1.1 一个域为波莱尔域的充分必要条件是它也是一个单调类.

随机变量的定义一个广义实值随机变量是一个函数 $X$ ，其定义域是 $\mathscr{F}$ 中的一个集 $\Delta$, 值域包含在 $\mathscr{R}^*=[-\infty,+\infty]$ 之中，使得对于 $\mathscr{B}^*$ 中的每个 $B$, 有
$$
\{\omega: X(\omega) \in B\} \in \Delta \cap \mathscr{F},
$$
其中 $\Delta \cap \mathscr{F}$ 是 $\mathscr{F}$ 在 $\Delta$ 上的迹。一个复值随机变量是一个定义在 $\mathscr{F}$.中的一个集 $\Delta$ 上而在复平面中取值的函数, 其实部和虚部都是实的有限值随机变量.
> 由于 $\displaystyle X^{-1}(B)\in \mathscr{F}$，故随机变量 $X$ ==其实就是== $\displaystyle \Omega$ 到 $\displaystyle \mathbb{R}^{1}$ 的可测函数.


> [!def]
> 定义如果存在一个可数集 $B \subset \mathscr{R}^1$ 使得 $\mathscr{P}(X \in B)=1$, 则称随机变量 $X$ 为离散的 (或取可数值的).


## 数学期望的性质
下面的随机变量默认为处处有限的，以避免平凡的复杂性。
对于加权划分 $\displaystyle \{ \Lambda_{j},b_{j} \}$ 的每个正值离散随机变量 $X$, 我们定义它的期望为
$$
\mathscr{E}(X)=\sum_{j}b_{j}\mathscr{P}\{ \Lambda _{j} \}
$$
更一般地，对 $\displaystyle \mathscr{F}$ 中的每个 $\displaystyle \Lambda$，定义
$$
\int _{\Lambda}X(\omega)\mathscr{P}(d\omega)=\mathscr{E}(X\cdot I_{A})\tag{4}
$$
并称它为“$X$ 在集 $\displaystyle \Lambda$ 上 (关于 $\displaystyle \mathscr{P}$ ) 的积分”.
在 $\displaystyle (\mathscr{R}^{1},\mathscr{B}^{1},\mu)$ 的情况，如果我们写 $\displaystyle X=f,\omega=x$，则积分
$$
\int_{\Lambda}X(\omega)\mathscr{P}(d\omega)=\int_{\Lambda}f(x)\mu(dx)
$$
就是 $f$ 关于 $\displaystyle \mu$ 的常义 Lebesgue-Stieltjes 积分. 如果 $F$ 为 $\displaystyle \mu$ 的分布函数且 $\displaystyle \Lambda=\left(a,b\right]$，则此积分也写为
$$
\int_{(a,b]}f(x)dF(x)
$$
在 $\displaystyle (\mathscr{U},\mathscr{B},m)$ 的情况，此积分化为通常的勒贝格积分
$$
\int_{a}^{b} f(x) \, m(dx)=\int_{a}^{b} f(x) \, dx
$$
作为一般的记号，(4) 的左边简写为 $\displaystyle \int_{\Lambda}Xd\mathscr{P}$.

## 独立性
独立性的定义：随机变量 $\left\{X_j, 1-j \leqslant n\right\}$ 称为 (完全) 独立的, 如果对于任何线性波莱尔集 $\left\{B_j, 1 \leqslant j \leqslant n\right\}$ 我们有
$$
\mathscr{P}\left\{\bigcap_{j=1}^n\left(X_j \in B_i\right)\right\}=\prod_{j=1}^n \mathscr{S}^n\left(X_j \in B_j\right)
$$

一个无限族的随机变量称为是独立的, 如果每一个有限子族的随机变量是独立的. 它们称为两两独立,如果它们中的每两个是独立的.