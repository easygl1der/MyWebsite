---
UID: 20240710182628 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-07-10
---

## ✍内容
Contravariant functor $\displaystyle F$:
![[Riehl-CTC.pdf#page=35&rect=255,353,358,435|Riehl-CTC, p.17|303]]
Examples of functors:
- The contravariant power set functor $\displaystyle P$ 
- The functor  $\displaystyle (-)^{*}:\text{Vect}_{\mathbb{k}}^{\text{op}}\to\text{Vect}_{\mathbb{k}}$ carries a vector space to its dual vector space: $\displaystyle V^{*}=\text{Hom}(V,\mathbb{k})$. A vector in $\displaystyle V^{*}$ is a linear functional in $\displaystyle V$.
- The functor $\displaystyle X:\text{B}G\to \mathrm{C}$ defines an **action of the group** $\displaystyle G$ on the object $\displaystyle X\in \mathrm{C}$.
> [!NOTE]
> The above functor $\displaystyle X:\text{B}G\to \mathrm{C}$ is sometimes called a left action, while the functor $\displaystyle X:\text{B}G^{\text{op}}\to \mathrm{C}$ is called right action, which explain the material [[Lecture5.pdf#page=2|Lecture5, p.2]]

> [!SUMMARY]
> In summary, when a group $\displaystyle G$ acts functorially on an object $\displaystyle X$ in a category $\displaystyle \mathrm{C}$, its elements $\displaystyle g$ must act by automorphism $\displaystyle G_{*}:X\to X$ and, moreover, $\displaystyle (g_{*})^{-1}=(g^{-1})_{*}$.
- 

> [!lem]
> Functors preserve isomorphisms. But functors don't reflect isomorphisms.

> [!NOTE]
> 取共轭 (op) 等于取逆 (-1). [[Riehl-CTC.pdf#page=38&rect=125,115,498,260|Riehl-CTC, p.20]]

> [!NOTE]
> 转置是一个 functor. [[Riehl-CTC.pdf#page=39&rect=123,649,492,679|Riehl-CTC, p.21]]

> [!NOTE]
> A category is not typically isomorphic to its opposite category.

> [!def]
> $\displaystyle G:=\text{Aut}(E/F)$ is called the Galois group of the Galois extension $\displaystyle E/F$.

> [!def]
> 轨道范畴 (orbit category) $\displaystyle \mathcal{O}_{G}$：对象是 $\displaystyle G$ 的子群，即 $\displaystyle H\subset G$. 态射 $\displaystyle G/H\to G/K$ 是 G-equivalent maps. 即态射都在 $\displaystyle G$ 左作用下可交换. 所有映射 $\displaystyle G/H\to G/K$ 都有这样的形式: $\displaystyle gH\mapsto g\gamma K$, 其中 $\displaystyle \gamma$ 使得 $\displaystyle \gamma^{-1}H\gamma \in K$.

> [!def]
> 范畴 $\displaystyle \text{Field}_{F}^{E}$：对象是 $\displaystyle E$ 和 $\displaystyle F$ 的中间域, 即 $\displaystyle K$ , 使得 $\displaystyle F\subset K\subset E$. 态射 $\displaystyle K\to L$ 是逐点固定 $\displaystyle F$ 中元素的域同态.

> [!NOTE]
> Note that the automorphisms of the object  $\displaystyle E\in \text{Field}^{E}_{F}$ is the Galios group $\displaystyle G=\text{Aut}(E/F)$.

> [!NOTE]
> 定义函子 $\displaystyle \Phi:\mathcal{O}_{G}^{\text{op}}\to\text{Field}_{F}^{E}$ 将 $\displaystyle H\subset G$ 映到 $\displaystyle E$ 的子域, 该子域在 Galios 群作用下被 $\displaystyle H$ 固定. 若态射 $\displaystyle G/H\to G/K$ 被 $\displaystyle \gamma$ 诱导, 那么域同态 $\displaystyle x\mapsto\gamma x$ 将元素 $\displaystyle x\in E$ ($\displaystyle x$ 被 Galois 群 $\displaystyle K$ 固定) 映到 $\displaystyle \gamma x\in E$ ($\displaystyle \gamma x$ 被 Galois 群 $\displaystyle H$ 固定). 于是 fundamental theorem of Galois theory 说明 $\displaystyle \Phi$ 定义了这两个范畴之间的双射 (事实上是同构)
> $$
\mathcal{O}_{G}^{\text{op}}\cong \text{Field}_{F}^{E}
$$






