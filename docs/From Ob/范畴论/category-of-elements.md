---
UID: 20240718181417 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-07-18
---
## ✍内容
- $ Universal element is either initial or terminal in an appropriate category, called the category of elements, which can be constructed canonically from the data of the representable functor $\displaystyle F$.
- @ the main result is that any universal property can be understood as defining an initial or terminal object.

- ? The category of elements $\displaystyle \int F$of a covariant functor $\displaystyle F:\mathrm{C}\to \mathsf{ Set }$ has
	- as objects, pairs $\displaystyle (c,x)$^[这样的构造是自然的] where $\displaystyle c\in \mathrm{C}$ and $\displaystyle x\in Fc$, and
	- a morphism $\displaystyle (c, x)\to(c',x')$ is a morphism $\displaystyle f:c\to c'$ in $\displaystyle \mathrm{C}$ so that $\displaystyle Ff(x)=x'$.
- The category of elements has a evident forgetful functor $\displaystyle \prod:\int F\to \mathrm{C}$.

- ~ recall the functor $\displaystyle n\text{-Color}:\mathsf{ Graph }^{\text{op}}\to \mathsf{ Set }$, that carries a graph to the set of $\displaystyle n$ -colorings of its vertices. 
	- $\displaystyle \int n\text{-color}$ is the category of $\displaystyle n$ -colored graphs and color-preserving graph homomorphisms.

A version from Yoneda lemma:
![[Riehl-CTC.pdf#page=86&rect=118,475,499,637|Riehl-CTC, p.68]]
- Slice category
![[Pasted image 20240718185933.png]]
> [!thm]
> ![[Riehl-CTC.pdf#page=86&rect=123,194,493,248|Riehl-CTC, p.68]]

- ! A natural isomorphism $\displaystyle C (c,-)\cong F$ induces an isomorphism of categories $\displaystyle \int F\cong \int \mathrm{C}(c,-) \cong c/\mathrm{C}$.  And the latter has an initial object: the identity $\displaystyle 1_{c}\in c/\mathrm{C}$. Thus if $\displaystyle F$ is representable, then $\displaystyle \int F$ has an initial object.

Proof:
- % 考虑函子: $\displaystyle F:\mathrm{C}\to \mathsf{ Set }$ 并取 $\displaystyle (c, x)\in \int F$ 为始对象
- & 我们将要证明: 由米田引理定义的自然变换 $\displaystyle \Psi (x):\mathrm{C}(c,-)\Rightarrow F$ 是自然同构
- @ 对于任意 $\displaystyle y\in Fd$,  $\displaystyle x\in Fc$ 的始对象性说明存在唯一态射 $\displaystyle (c,x)\to(d,y)$ ,即存在 $\displaystyle \mathrm{C}$ 中唯一态射 $\displaystyle f:c\to d$ 使得 $\displaystyle Ff(x)=y$.
- $ 让 $\displaystyle y$ 遍历集合 $\displaystyle Fd$, 这说明组成部分 $\displaystyle \Psi(x)_{d}:\mathrm{C}(c,d)\to Fd$ 是一个同构: 因为在米田引理的证明中，$\displaystyle \Psi(x)_{d}(f)$ 被定义为 $\displaystyle Ff(x)$.
	- $\displaystyle \int F$ 中态射 $\displaystyle (c,x)\to(d,y)$ 的存在性说明 $\displaystyle \Psi(x)_{d}$ 是满的
	- 态射的唯一性说明它是单的
- 因此, 把所有 $\displaystyle \Psi(x)_{d}$ 拼起来, 就有 $\displaystyle \Psi(x)$ 是双射, 于是 $\displaystyle F\cong \mathrm{C}(c,-)$, $\displaystyle F$ 可表.

考虑反方向
- % 自然同构 $\displaystyle \alpha:\mathrm{C}(c,-)\cong F$ 定义了一个 $\displaystyle \int F$ 中的对象 $\displaystyle \alpha_{c}(1_{c})\in Fc$.
- & 接着证明 $\displaystyle \alpha_{c}(1_{c})$ 是始对象
- @ 双射 $\displaystyle \alpha_{d}:\mathrm{C}(c,d)\overset{ \cong }{ \longrightarrow } Fd$ 说明对于任意 $\displaystyle y\in Fd$ 有**唯一**态射 $\displaystyle f:c\to d$ 使得 $\displaystyle Ff(\alpha_{c}(1_{c}))=y$.
- $ 该唯一性说明, 对于每个 $\displaystyle (d, y)\in \int F$, 存在 $\displaystyle \int F$ 中的唯一态射 $\displaystyle f:(c,\alpha_{c}(1_{c}))\to(d,y)$, 这就是始对象的定义.
- 于是我们构造性证明了 $\displaystyle \int F$ 中有始对象 $\displaystyle \alpha_{c}(1_{c})$.

> [!NOTE]
> 回忆函子 $\displaystyle F:\mathrm{C}\to \mathsf{ Set }$ 的表示是一个对象 $\displaystyle c\in \mathrm{C}$, 使得有自然同构 $\displaystyle \mathrm{C}(c,-)\cong F$. 根据上面的证明, 我们也可以说 $\displaystyle F$ 的表示是 $\displaystyle \int F$ 中的一个始对象.

