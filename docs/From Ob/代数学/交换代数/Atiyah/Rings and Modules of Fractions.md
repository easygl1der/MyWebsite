---
UID: 20240901132817 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-01
---
## ✍内容
>The formation of rings of fractions and the associated process of localization are perhaps the most important technical tools in commutative algebra. They correspond in the algebro-geometric picture to concentrating attention on an open set or near a point, and the importance of these notions should be self-evident.

类似于分式域，也可以对整环进行分式化，只需要模掉 $\displaystyle A\times S$ ($S$ 是 $\displaystyle A$ 的乘法闭子集) 上的等价关系 $\displaystyle \equiv$
$$
(a,s)\equiv (b,t)\iff(at-bs)u=0,\text{ for some }u\in S.
$$
容易验证这是一个等价关系。
用 $\displaystyle a/s$ 表示 $\displaystyle (a,s)$ 的等价类，用 $\displaystyle S^{-1}A$ 表示等价类的集合。
有自然的环同态 $\displaystyle f:A\to S^{-1}A,x\mapsto x/1$，但<u>不一定是单射</u>，因为 $\displaystyle f (x)=0\iff \exists s\in S,\text{s.t. }x\cdot s=0$，故 $\displaystyle x\in\text{Ann}(S)\coloneqq\{ x \in A: \exists s\in S,\text{s.t. }s\cdot x=0 \}$. 但 $\displaystyle\text{Ann}(S)$ 不一定平凡。例如
> [!EXAMPLE]
> Suppose $A=\mathbb{Z} / 6 \mathbb{Z}$ and $S=\left\{2^n \mid n \geq 0\right\} \subseteq A$. Then $2 \in A$ is non-zero, but $2 \cdot 3=6=0$ in $\mathbb{Z} / 6 \mathbb{Z}$, so $f(3)=\frac{3}{1}=0$, showing $f$ is not injective.

若 $\displaystyle S=A-{0}$，则 $\displaystyle S^{-1}A$ 是 $\displaystyle A$ 的分式域。


