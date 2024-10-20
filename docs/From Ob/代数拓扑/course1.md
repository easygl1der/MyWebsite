---
UID: 20240910143312 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-10
---

## ✍内容
[[Elements of algebraic topology (Munkres, James R) (Z-Library).pdf]]
线性空间中
$$
\begin{CD}
0@>i>>U@>f>>V@>g>>W@>\pi>>0
\end{CD}
$$
正合：[[Category and Homological Algebra(Schapira).pdf#page=61|Category and Homological Algebra(Schapira), p.61]]
- $g$ 满
- $f$ 单
- $\displaystyle V/\mathrm{ker}g=\mathrm{Im}g\cong W$


前一个的 image 等于后一个的 kernel
$$
\mathrm{Im}f_{j}=\mathrm{ker}f_{j+1}
$$
$$
g\circ f=0
$$
> [!question]
> $\displaystyle \mathrm{ker}g/\mathrm{Im}f=?$

For example, $\displaystyle C^{\infty}(\mathbb{R})$
For $\displaystyle f\in C^{\infty}(\mathbb{R})$, $\displaystyle df=f'(x)dx$
$$
V=\underbrace{ \Omega^{0}(\mathbb{R}) }_{ C^{\infty}(\mathbb{R})\text{with} \ dx\cdot dx=0 }\oplus \underbrace{ \Omega^{1}(\mathbb{R}) }_{ C^{\infty}(\mathbb{R})dx }
$$
$$
\begin{CD}
0@>>>\Omega^{0}(\mathbb{R})@>d^{(0)}>>\Omega^{1}(\mathbb{R})@>d^{(1)}>>0
\end{CD}
$$
$$
d(g(x)dx)=dg\cdot dx=g(x)dx\cdot dx
$$
$$
\implies d\circ d=0,\mathrm{Im}d^{(0)}=\mathrm{ker}d^{(1)}
$$
令 $\displaystyle G(x)=\int_{0}^{x} g(t) \, dt$ ，则 $\displaystyle dG(x)=G'(x)dx=g(x)dx\implies \mathrm{ker}d^{(1)}/\mathrm{Im}d^{(0)}=0$
$\displaystyle df(x)=0\implies f\equiv C$，$\displaystyle \mathrm{ker}d^{(0)}=\mathbb{R}$
$\displaystyle X=\mathbb{R}$ 则 $\displaystyle H^{1}(x)\coloneqq\mathrm{ker}d^{(1)}/\mathrm{Im}d^{(0)}=0,H^{0}(X)=\mathrm{ker}d^{(0)}/\mathrm{Im}d^{(-1)}=\mathbb{R}$
$$
H^{*}(X)=H^{0}(X)\oplus H^{1}(X)
$$
$X$ 的 dR上同调
$$
X=\{ V_{1}\subseteq V_{2}\subseteq \mathbb{C}^{3}:\dim_{\mathbb{C}} V_{1}=1,\dim_{\mathbb{C}} V_{2}=2 \}
$$
A natural map $\displaystyle X\to Y$，$\displaystyle Y\coloneqq\{ V_{2}\subseteq \mathbb{C}^{3}: \dim V_{2}=2\}$, which is the dual of complex projective space. The kernel of the above map is $\displaystyle \mathbb{P}=F=\{ V_{1}\subseteq V_{2}\subseteq \mathbb{C}^{3}:\dim V_{1}=1 \}$
The real projective space is $\displaystyle (\mathbb{R}^{n}-{(0,0,\dots,0)})/\{ \text{antipolar point} \}$.
以上只是说课程结束的时候会算

---
$X$ is a top space，$\displaystyle H_{*}(X)=?$
$$
\begin{CD}
X@>>>\overset{ \text{线性空间} }{ V(X) }@>>>(\begin{CD}
V_{0}(X)@>\partial_{0}>>V_{1}(X)@>\partial_{1} >>V_{2}(X)@>\partial_{2} >>\dots
\end{CD})
\end{CD}
$$
$$
\partial \circ \partial =0
$$
$$
\implies H_{j}(X,\partial )\coloneqq \mathrm{ker}\partial _{j}/\mathrm{Im}\partial _{j+1}=?
$$

---
$$
\begin{CD}
\text{单纯性}@>>>\overset{ K }{ \text{单纯复形} }@>>>\underset{\underset{ \partial _{p-1}\circ \partial _{p}=0 }{  \dots\to C_{p}\overset{ \partial _{p} }{ \to }C_{p-1}\overset{ \partial _{p-1} }{ \to }C_{p-2}\to\dots  }}{ C_{p}(K)=C_{p} }
\end{CD}
$$
$\displaystyle \overset{ \text{定义} }{ \implies }H_{p}(K)=Z_{p}(K)/B_{p}(K)$



