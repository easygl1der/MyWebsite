---
UID: 20240718195544 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-07-18
---

## ✍内容
> [!def]
> A category is **skeletal** if it contains just one object in each isomorphism class. The **skeleton** $\displaystyle \mathsf{skC}$ of a category $\displaystyle \mathsf{C}$ is the unique (up to isomorphism) skeletal category that *is equivalent to* $\displaystyle \mathsf{C}$.

[[Riehl-CTC.pdf#page=52|Riehl-CTC, p.34]]
> [!thm]
> 一个函子定义了范畴等价，当且仅当它是 full, faithful and essentially surjective on objects.

- % 范畴 $\displaystyle \mathsf{skC}$ 可以通过选取每个 $\displaystyle \mathsf{C}$ 中同构类中的一个对象, 并定义 $\displaystyle \mathsf{skC}$ 为这堆对象上的满子范畴. 由上述定理可知, 嵌入 $\displaystyle \mathsf{skC}\hookrightarrow\mathsf{C}$ ^[嵌入本身就是 faithful, 且满子范畴定义就是 fully faithfully ] **定义了一个范畴等价**......

- ~ The skeleton of a connected groupoid is the group of any of its objects .
- ~ The skeleton of the category defined by a preorder^[A set with a binary relation only reflexive and transitive] is a poset^[A antisymmetric preorder].
- ~ The skeleton of the category $\displaystyle \mathsf{ Vect }^{\text{fd}}_{\mathbb{k}}$ is the category $\displaystyle \mathsf{ Mat }_{\mathbb{k}}$.
- ~ The skeleton of the category $\displaystyle \mathsf{Fin}_{\text{iso}}$ is the category whose objects are positive integers and with $\text{ Hom }(n,n)=\sum_{n}$, the group of permutations of $\displaystyle n$ elements. The hom-sets between distinct natural numbers are all empty.

> [!NOTE]
> 两个范畴是等价的当且仅当它们的 skeleton 是同构的.

[[categorification-of-orbit-stablizer-thm]]