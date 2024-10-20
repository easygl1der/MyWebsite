---
UID: 20241018114927 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-10-18
---

## ✍内容
[[A categorical version of Caratheodory Theorem.pdf]]
### Statement of Caratheodory's Extension Theorem
If we want to define a measure on a measurable space $\displaystyle (X,\Sigma)$, we need to assign to every subset $\displaystyle A\in\Sigma$ an element of $\displaystyle [0,\infty]$. However, we often work with $\displaystyle \sigma$ -algebras of the form $\displaystyle \sigma(\mathcal{B})$, where $\displaystyle \mathcal{B}$ is an algebra of subsets of $X$, i.e. closed under finite unions and complements. 
In this case it can be very difficult to know what a general measuable subset looks like and to assign real numbers to them in a $\displaystyle \sigma$ -additive way. This problem is solved by the Caratheodory extension theorem. 
It states that a $\displaystyle \sigma$ -additive map $\displaystyle \mathcal{B}\to[0,\infty ]$ can be extended to a $\displaystyle \sigma$ -additive map $\displaystyle \sigma(\mathcal{B})\to[0,\infty]$. Here, $\displaystyle \sigma$ -additive should be interpreted as ' $\displaystyle \sigma$ -additive whenever unions of countable pairwise disjoint collections exist'. Moreover, this extension is very often, but not always, unique.
> What I'm interested in is the uniqueness of this extension.

### Comparision
The classical proof for this result is relatively long and technical. It consists of different steps of extending and restricting back and requires severalsmart 'tricks' and constructions. In this paper we will give a categorical proof for the Caratheodory extension theorem using results on extensions of lax, colax and strict transformations between functors. Several parts of this proof look similar to steps in the classical proof. 
However, in our proof all constructions follow form the Kan extension formulas. Moreover, viewing the Carathrodory extension theorem in this categorical framework, allows us to <u>compare it to extension results in other areas of mathematics</u>.
Furthermore, this technique allows us to easily generalize Caratheodory 's result to measures taking values in other posets or spaces.
### Ideas of the paper
To do this we start byb studying categories of certain tranformations between functors and extensions of transformations along transformations. In section $\displaystyle 2$ and $\displaystyle 3$ we do this on a fairly abstract level. We discuss (co) laxification (co) monads and are in particular interested in the case that their (co) algebras are strict transformations. We give several abstract conditions for extensions of certain transformations to exist.
In section $\displaystyle 4$ and $\displaystyle 5$, we give concrete constructions for the operations and extensions discussed in $\displaystyle 2$ and $\displaystyle 3$. In this part (co) lax coends and (co) lax morphism classifiers play an important role.
In the last two sections of the paper we apply the previous sections to measure theory. We start by representing inner and outer premeasures by certain transformations between certain functors.
By applying the extension results to these functors, we obtain our categorical proof for Caratheodory's extension result. We furthermore, make a distinction between *left* and *right* Caratheodory extensions. The right one always exists and is the same as the extension in the classical proof, the left one however does not always exist. 
This is also related to the fact that inner measures and outer measures can behave surprisingly different from each other. Moreover, we immediately obtain a wau to chracterize these extensions by a universal property, namely as a maximal or minimal extension. This is interesting when uniqueness is not guaranteed.
### Posets of (co) lax transformations
This section focuses on abstract existense results of (co) reflection operations.
> The (co) reflection operations described in this section will then correspond to operations that turn inner (outer) premeasures into premeasures.

> Some abstract definition and propositions...

### Extensions of transformations






