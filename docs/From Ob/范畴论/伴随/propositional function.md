---
UID: 20240817002929 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-08-17
---

## ✍内容
![[Riehl-CTC.pdf#page=136&rect=121,86,496,181|Riehl-CTC, p.118]]
![[Riehl-CTC.pdf#page=137&rect=120,561,492,677|Riehl-CTC, p.119]]
一个 Bool 型的函数，又结合了逻辑运算：$\displaystyle P\implies Q$.
我们举例验证 $\displaystyle \forall_{X}$ 是 $\displaystyle \Delta_{X}$ 的右伴随，由于存在偏序关系，只需证
$$
\Delta_{X}(\overset{ a\in \Omega }{ a })\leq P\Leftrightarrow a\leq \forall_{X}P
$$
按定义验证即可：
$$
\Delta_{X}(a)\leq P\Leftrightarrow\overbrace{ \Delta_{X}(a) }^{ 平凡 }(x)=P (x),\forall x\in X\Leftrightarrow a=P (x),\forall x\in X\Leftrightarrow a\leq\forall_{X}P
$$
