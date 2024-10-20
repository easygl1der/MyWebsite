---
UID: 20240916202918 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-16
---
## ✍内容
A functor $\displaystyle x:\mathbb{N}\to \mathbb{R}$ defines a sequence $\displaystyle (x_{n})_{n\in \mathbb{N}}$ of real numbers.
The $\displaystyle \lim\sup$ and $\displaystyle \lim\inf$ is defined by regarding the sequences as a bifunctor $\displaystyle \mathbb{N}\times \mathbb{N}\overset{ + }{ \to }\mathbb{N}\overset{ x }{ \to }\mathbb{R}$ indexed by the discrete category $\displaystyle \mathbb{N}\times \mathbb{N}$:
$$
\begin{aligned}
& \liminf _{n \rightarrow \infty} x_n=\sup _{n \geq 0} \inf_{m\geq n} x_m=\sup _{n \geq 0} \inf_{m\geq 0} x_{n+m}=\underset{ n }{ \operatorname{colim} } \lim _m x_{n+m} \\
& \limsup _{n \rightarrow \infty} x_n=\inf_{n\geq 0} \sup _{m\geq n} x_{m }=\inf_{m\geq 0} \sup _{n \geq 0} x_{n+m}=\lim _n \underset{ m }{ \operatorname{colim} } x_{n+m}
\end{aligned}
$$
Having translated these analytic notions into categorical ones, Lemma 3.8.3 applies in the form of an inequality:
$$
\liminf _{n \rightarrow \infty} x_n \leq \limsup _{n \rightarrow \infty} x_n
$$
The limit of this sequence exists if and only if this inequality is an equality.
