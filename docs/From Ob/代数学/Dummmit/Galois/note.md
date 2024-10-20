---
UID: 20240903160228 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-03
---

## ✍内容
> [!proposition]
> Proposition 2. Let $K / F$ be a field extension and let $\alpha \in K$ be algebraic over $F$. Then for any $\sigma \in \operatorname{Aut}(K / F), \sigma \alpha$ is a root of the minimal polynomial for $\alpha$ over $F$ i.e., Aut $(K / F)$ permutes the roots of irreducible polynomials. Equivalently, any polynomial with coefficients in $F$ having $\alpha$ as a root also has $\sigma \alpha$ as a root.

Pf: for $\displaystyle \alpha$ as a root of the minimal polynomial for $\displaystyle \alpha$ over $F$.
$$
\alpha^{n}+a_{n-1}\alpha^{n-1}+\dots+a_{0}=0,a_{i}\in F
$$
Act the field automorphism $\displaystyle \sigma$ on both sides:
$$
(\sigma\alpha)^{n}+a_{n-1}(\sigma\alpha)^{n-1}+\dots+a_{0}=0,\ \sigma\text{ fix }a_{i}\in F
$$
Then $\displaystyle \sigma\alpha$ is a root of the minimal polynomial.
> We have associated to each field extension $K / F$ (equivalently, with a subfield $F$ of $K)$ a group, Aut $(K / F)$, the group of automorphisms of $K$ which fix $F$. One can also reverse this process and associate to each group of automorphisms a field extension.

> [!proposition]
> Proposition 3. Let $H \leq \operatorname{Aut}(K)$ be a subgroup of the group of automorphisms of $K$. Then the collection $F$ of elements of $K$ fixed by all the elements of $H$ is a subfield of $K$.

The proof is routine.
> [!def]
> Definition. If $H$ is a subgroup of the group of automorphisms of $K$, the subfield of $K$ fixed by all the elements of $H$ is called the <font color="#2DC26B">fixed field</font> of $H$.

> [!proposition]
> Proposition 4. The association of groups to fields and fields to groups defined above is inclusion reversing, namely
(1) if $F_1 \subseteq F_2 \subseteq K$ are two subfields of $K$ then $\operatorname{Aut}\left(K / F_2\right) \leq \operatorname{Aut}\left(K / F_1\right)$, and
(2) if $H_1 \leq H_2 \leq \operatorname{Aut}(K)$ are two subgroups of automorphisms with associated fixed fields $F_1$ and $F_2$, respectively, then $F_2 \subseteq F_1$.

>The number of extensions of $\varphi$ to an isomorphism $\tau$ is equal to the number of distinct roots $\beta$ of $p^{\prime}(x)$. 

> [!proposition]
> Proposition 5. Let $E$ be the splitting field over $F$ of the polynomial $f(x) \in F[x]$. Then
$$|\operatorname{Aut}(E / F)| \leq[E: F]$$ with equality if $f(x)$ is separable over $F$.

> [!def]
> Definition. Let $K / F$ be a finite extension. Then $K$ is said to be Galois over $F$ and $K / F$ is a <font color="#2DC26B">Galois extension</font> if $|\operatorname{Aut}(K / F)|=[K: F]$. If $K / F$ is Galois the group of automorphisms $\operatorname{Aut}(K / F)$ is called the Galois group of $K / F$, denoted $\operatorname{Gal}(K / F)$.

> [!cor]
> Corollary 6. If $K$ is the splitting field over $F$ of a separable polynomial $f(x)$ then $K / F$ is Galois.

> The converse is also true.

> [!NOTE]
> Every quadratic extension over field with characteristic $\displaystyle \neq2$ is a galois extension.

> A Galois extension of a Galois extension is not necessarily Galois.






