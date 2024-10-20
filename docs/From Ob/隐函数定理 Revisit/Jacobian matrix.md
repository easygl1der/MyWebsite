---
UID: 20240909081302 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-09
---
## Fundamental idea of Jacobian matrix
[[(Modern BirkhÃ¤user Classics) Steven G. Krantz, Harold R. Parks (auth.) - The Implicit Function Theorem_ History, Theory, and Applications-BirkhÃ¤user Basel (2013).pdf]]
The Jacobian matrix represents the aggregate of information about the firstorder behavior of a function near a point. As such, we apply the matrix to a (not necessarily unit) vector $\mathbf{v}$ to obtain information about a directional derivative in the direction of that vector. Then we denote the directional derivative of the function $G$ in the direction $\mathbf{v}$ at the point $p$ by
$$
\langle D G(p), \mathbf{v}\rangle
$$
This notation is to be read as the matrix $D G(p)$ applied to the vector v using ordinary matrix multiplication.
> [!NOTE]
> We can compare the classical proof of implicit function theorem with the Banach space proof given in the section 3.4.

> [!proposition]
> The implicit function thm and inverse function thm are equivalent.

The proof of implicit function thm is divided into there steps:
- The mapping $G$ is locally univalent.
- The set $\displaystyle G(\widehat{W})$ is open.
- The mapping $\displaystyle (\left.G\right|_{W})^{-1}$ is of class $\displaystyle C^{1}$.

