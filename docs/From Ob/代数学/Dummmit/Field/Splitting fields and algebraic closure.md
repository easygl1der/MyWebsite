---
UID: 20240831204340 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-08-31
---

## ✍内容
Let $F$ be a field.
If $f(x)$ is any polynomial in $F[x]$ then we have seen in Section 2 that there exists a field $K$ which can (by identifying $F$ with an isomorphic copy of $F$ ) be considered an extension of $F$ in which $f(x)$ has a root $\alpha$. This is equivalent to the statement that $f(x)$ has a <u>linear factor</u> $x-\alpha$ in $K[x]$ (this is Proposition 9 of Chapter 9).
> [!def]
> Definition. The extension field $K$ of $F$ is called a splitting field for the polynomial $f(x) \in F[x]$ if $f(x)$ <u>factors completely into linear factors</u> (or splits completely) in $K[x]$ and $f(x)$ does not factor completely into linear factors over any proper subfield of $K$ containing F .

> [!thm]
> Theorem 25. For any field $F$, if $f(x) \in F[x]$ then there exists an extension $K$ of $F$ which is a splitting field for $f(x)$.

> [!proposition]
> Proposition 26. A splitting field of a polynomial of degree $n$ over $F$ is of degree at most $n!$ over $F$.

> [!def]
> Definition. The field $\mathbb{Q}\left(\zeta_n\right)$ is called the cyclotomic field of $n^{\text {th }}$ roots of unity, which is the splitting field of $\displaystyle x^{n}-1$ over $\displaystyle \mathbb{Q}$.

> We shall see later that $\displaystyle [\mathbb{Q}(\zeta_{n}):\mathbb{Q}]=\varphi(n)$.

> [!def]
> Definition. The field $\bar{F}$ is called an algebraic closure of $F$ if $\bar{F}$ is algebraic over $F$ and if every polynomial $f(x) \in F[x]$ splits completely over $\bar{F}$ (so that $\bar{F}$ can be said to contain all the elements algebraic over $F$ ).

> [!def]
> Definition. A field $K$ is said to be algebraieally closed if every polynomial with coefficients in $K$ has a root in $K$.

> [!proposition]
> Proposition 29. Let $\bar{F}$ be an algebraic closure of $F$. Then $\bar{F}$ is algebraically closed.

Pf: Let $\displaystyle f (x)\in \overline{F}[x]$ and let $\displaystyle \alpha$ be a root of $\displaystyle f(x)$. So $\displaystyle \overline{F}(\alpha)$ is an algebraic extension over $\displaystyle \overline{F}$, and since $\displaystyle \overline{F}$ is algebraic over $F$, then $\displaystyle \overline{F}(\alpha)$ is algebraic over $\displaystyle F$. Then $\displaystyle \alpha$ is algebraic over $F$, by definition of $\displaystyle \overline{F}$, $\displaystyle \alpha\in \overline{F}$. Hence $\displaystyle \overline{F}=\overline{\overline{F}}$.

