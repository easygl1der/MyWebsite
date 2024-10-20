---
UID: 20240903171922 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-03
---

## ✍内容
>To determine the galois group of the splitting field of $\displaystyle x^{3}-2$ in $\displaystyle \mathbb{Q}.$


The roots of $\displaystyle x^{3}-2$ are $\displaystyle \sqrt[3]{ 2 },\rho\sqrt[3]{ 2 },\rho^{2}\sqrt[3]{ 2 }$, where $\displaystyle \rho=\zeta_{3}=\frac{-1+i\sqrt{ 3 }}{2}$. Hence the splitting field can be written $\mathbb{Q}(\sqrt[3]{2}, \rho \sqrt[3]{2})$. Any automorphism maps each of these two elements to one of the roots of $x^3-2$, giving 9 possibilities, but since the Galois group has order 6 not every such map is an automorphism of the field.

Remark: This example shows that some care must be exercised in determining Galois groups from the actions on generators. As mentioned, not every map taking $\sqrt[3]{2}$ and $\rho \sqrt[3]{2}$ to roots of $x^3-2$ gives rise to an automorphism of the field (for example, the map

$$
\begin{array}{r}
\sqrt[3]{2} \mapsto \rho \sqrt[3]{2} \\
\rho \sqrt[3]{2} \mapsto \rho \sqrt[3]{2} 
\end{array}
$$

clearly cannot be an automorphism since it is evidently not an injection). The point is that there may be (sometimes very subtle) algebraic relations among the generators and these relations must be respected by an automorphism. For example, the quotient of the generators here is $\rho$, which is mapped to 1 and not to a root of the minimal polynomial for $\rho$. Put another way, the quotient of these generators satisfies a quadratic equation and this map does not respect that property.

