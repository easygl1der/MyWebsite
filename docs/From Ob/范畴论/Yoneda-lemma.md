---
UID: 20240709105142 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-07-09
---

## ✍内容
> [!NOTE]
The Yoneda lemma implies that a general mathematical object can be represented as a functor valued in the category of sets.


![[Riehl-CTC.pdf#page=75&rect=123,578,491,652|Riehl-CTC, p.57]]
- @ 证明双射：

![[Drawing 2024-07-17 15.35.38.excalidraw|700]]
$$
\Phi \Psi(x)=\Psi(x)_{c}(1_{c})\overset{ 在右图中显然,因为是C(c,c)中平凡元的像 }{ = }x
$$
要证明 $\displaystyle \Psi\Phi(\alpha)=\alpha$，只需要考虑 $\displaystyle \Psi$ 在每个对象 $\displaystyle d$ 上的作用
$$
\begin{align}
\Psi(\Phi(\alpha))_{d}(f) & \overset{ 由\Phi(\alpha)的定义 }{ = }\Psi(\alpha_{c}(1_{c}))_{d}(f) \\
 & \overset{ 由右图下方给出 }{ = }Ff(\alpha_{c}(1_{c})) \\
 & \overset{ 由左图下方给出 }{ = } \alpha_{d}(f)
\end{align}
$$
于是双射得证!
- @ 证明自然性

见 [[Riehl-CTC.pdf#page=76|Riehl-CTC, p.58]]
- $ Yoneda 引理联系了对象及其表示函子，也就是说任何局部小范畴 $\displaystyle \mathrm{C}$ 都同构于 $\displaystyle \mathsf{ Set }^{\mathrm{C}^{\text{op}}}$ 的满子范畴，其中 $\displaystyle \mathsf{ Set }^{\mathrm{C}^{\text{op}}}$ 由逆变表示函子生成.
- & 表示函子之间的自然变换对应到代表对象之间的态射

> [!cor]
> 考虑局部小范畴 $\displaystyle \mathrm{C}$ 中的对象 $\displaystyle x,y$
> - 若 $\displaystyle x,y$ 的表示函子 (逆变或协变) 是自然同构的, 那么 $\displaystyle x,y$ 是同构的.
> - 特别地, 若 $\displaystyle x,y$ 有相同的表示函子, 那么 $\displaystyle x,y$ 是同构的.

