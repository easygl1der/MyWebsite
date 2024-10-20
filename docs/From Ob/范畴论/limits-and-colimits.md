---
UID: 20240709105951 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-07-09
---

## ✍内容
### Motivation
Limit constructions build newobjects in a category by “imposing equations” on existing ones. For instance, the diagram of quotient homomorphisms
$$
\cdots \rightarrow \mathbb{Z} / p^n \rightarrow \cdots \rightarrow \mathbb{Z} / p^3 \rightarrow \mathbb{Z} / p^2 \rightarrow \mathbb{Z} / p
$$
By contrast, colimit constructions build new objects by “gluing together” existing ones. The colimit of the sequence of inclusions
$$
\mathbb{Z} / p \hookrightarrow \mathbb{Z} / p^2 \hookrightarrow \mathbb{Z} / p^3 \hookrightarrow \cdots \hookrightarrow \mathbb{Z} / p^n \hookrightarrow \cdots
$$

### 定义
[[Riehl-CTC.pdf#page=92|Riehl-CTC, p.74]]
- @ 定义常函子 $\displaystyle c:\mathsf{J}\to \mathsf{C}$ ,其中 $\displaystyle c$ 为任意 $\displaystyle \mathsf{C}$ 中的对象, $\displaystyle \mathsf{J}$ 为任意范畴.
- 常函子 $\displaystyle c$ 将 $\displaystyle \mathsf{J}$ 中任意对象映到 $\displaystyle c$，任意函子映到 $\displaystyle 1_{c}$.
- 常函子定义了一个嵌入 $\displaystyle \Delta:\mathsf{C}\to \mathsf{C}^{\mathsf{J}}$ ,将 $\displaystyle c\in \mathsf{C}$ 映到常函子 $\displaystyle c$, 将 $\displaystyle \mathsf{C}$ 中态射 $\displaystyle f:c\to c'$ 映到常自然变换.
- @ 图表 $\displaystyle F:\mathsf{J}\to \mathsf{C}$ ==上==以 $\displaystyle c\in \mathsf{C}$ 为顶点的**锥**是一个自然变换:

$$
\lambda:\underbrace{ c }_{ 常函子 }\Rightarrow F
$$
- 其成员 $\displaystyle (\lambda_{j}:c\to Fj)_{j\in \mathsf{J}}$ 被称为锥的脚.
- @ 对偶的, 图表 $\displaystyle F:\mathsf{J}\to \mathsf{C}$ ==上==以 $\displaystyle c\in \mathsf{C}$ 为顶点的**锥**(余锥)是一个自然变换:

$$
\lambda:F\Rightarrow\underbrace{ c }_{ 常函子 }
$$
- 其成员 $\displaystyle (\lambda_{j}:Fj\to c)_{j\in \mathsf{J}}$ 被称为锥的脚.

>To understand limits and colimits.

![[Riehl-CTC.pdf#page=93&rect=115,493,500,653|Riehl-CTC, p.75]]

- $ 对于任意图表 $\displaystyle F:\mathsf{J}\to \mathsf{C}$, 有一个函子

$$
\text{Cone}(-,F):\mathsf{C}^{\text{op}}\to \mathsf{ Set }
$$
将 $\displaystyle c\in \mathsf{C}$ 映到集合 $\displaystyle \{\text{以}c\text{为顶点的}F\text{上的锥}\}$ 
- $\displaystyle F$ 的极限是 $\displaystyle\text{Cone}(-,F)$ 的一个表示.
- 由米田引理, 一个极限包含了对象 $\displaystyle \text{lim}F\in \mathsf{C}$ 和一个泛锥 $\displaystyle \lambda:\text{lim}F\Rightarrow F$, 也叫极限锥, 定义了自然同构

$$
\mathsf{C}(-,\text{lim}F)\cong \text{Cone}(-,F)
$$
对偶的, 可以给出余极限的情况.
- ~ 群同态 $\displaystyle \phi :G\to H$ 和平凡同态 $\displaystyle e:G\to H,g\mapsto e(H\text{的单位元})$ 的等化子为 $\displaystyle \text{ker}\phi$
- 