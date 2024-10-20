---
UID: 20240918111715 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-18
---
## ✍内容
It is well known that Minkowski's (or the triangle) inequality
$$
\|f+g\|_{L^p(X, \mu)} \leq\|f\|_{L^p(X, \mu)}+\|g\|_{L^p(X, \mu)}
$$
holds for all $f, g$ in $L^p=L^p(X, \mu)$, whenever $1 \leq p \leq \infty$. Since in addition $\|f\|_{L^p(X, \mu)}=0$ implies that $f=0$ ( $\mu$ -a.e. $)$, the $L^p$ spaces are normed linear spaces for $1 \leq p \leq \infty$. For $0<p<1$, inequality (1.1.3) is reversed when $f, g \geq 0$. However, the following substitute of (1.1.3) holds:
$$
\|f+g\|_{L^p(X, \mu)} \leq 2^{\frac{1-p}{p}}\left(\|f\|_{L^p(X, \mu)}+\|g\|_{L^p(X, \mu)}\right)
$$
Definition 1.1.1. For $f$ a measurable function on $X$, the distribution function of $f$ is the function $d_f$ defined on $[0, \infty)$ as follows:
$$
d_f(\alpha)=\mu(\{x \in X:|f(x)|>\alpha\})
$$
Example 1.1.2. For pedagogical reasons we compute the distribution function $d_f$ of a nonnegative simple function
$$
f(x)=\sum_{j=1}^N a_j \chi_{E_j}(x)
$$
where the sets $E_j$ are pairwise disjoint and $a_1>\cdots>a_N>0$. If $\alpha \geq a_1$, then clearly $d_f(\alpha)=0$. However, if $a_2 \leq \alpha<a_1$ then $|f(x)|>\alpha$ precisely when $x \in E_1$, and in general, if $a_{j+1} \leq \alpha<a_j$, then $|f(x)|>\alpha$ precisely when $x \in E_1 \cup \cdots \cup E_j$. Setting
$$
B_j=\sum_{k=1}^j \mu\left(E_k\right)
$$
for $j \in\{1, \ldots, N\}, B_0=a_{N+1}=0$, and $a_0=\infty$, we have
$$
d_f(\alpha)=\sum_{j=0}^N B_j \chi_{\left[a_{j+1}, a_j\right)}(\alpha)
$$
Note that these formulas are valid even when $\mu\left(E_i\right)=\infty$ for some $i$. Figure 1.1 presents an illustration of this example when $N=3$ and $\mu\left(E_j\right)<\infty$ for all $j$.
Proposition 1.1.4. Let $(X, \mu)$ be a $\sigma$ -finite measure space. Then for $f$ in $L^p(X, \mu)$, $0<p<\infty$, we have
$$
\|f\|_{L^p}^p=p \int_0^{\infty} \alpha^{p-1} d_f(\alpha) d \alpha
$$
Moreover, for any increasing continuously differentiable function $\varphi$ on $[0, \infty)$ with $\varphi(0)=0$ and every measurable function $f$ on $X$ with $\varphi(|f|)$ integrable on $X$, we have
$$
\int_X \varphi(|f|) d \mu=\int_0^{\infty} \varphi^{\prime}(\alpha) d_f(\alpha) d \alpha
$$
Proof: use Fubini's thm.
Definition 1.1.5. For $0<p<\infty$, the space <font color="#2DC26B">weak</font> $L^p(X, \mu)$ is defined as the set of all $\mu$ -measurable functions $f$ such that
$$
\begin{aligned}
\|f\|_{L^{p, \infty}} & =\inf \left\{C>0: d_f(\alpha) \leq \frac{C^p}{\alpha^p} \quad \text { for all } \quad \alpha>0\right\} \\
& =\sup \left\{\gamma d_f(\gamma)^{1 / p}: \gamma>0\right\}
\end{aligned}
$$
is finite. The space weak $L^{\infty}(X, \mu)$ is by definition $L^{\infty}(X, \mu)$.
Proposition 1.1.6. For any $0<p<\infty$ and any $f$ in $L^p(X, \mu)$ we have
$$
\|f\|_{L^{p, \infty}} \leq\|f\|_{L^p} .
$$
Hence the embedding $L^p(X, \mu) \subseteq L^{p, \infty}(X, \mu)$ holds.
Proof. This is just a trivial consequence of Chebyshev's inequality:
$$
\alpha^p d_f(\alpha) \leq \int_{\{x:|f(x)|>\alpha\}}|f(x)|^p d \mu(x) \leq\|f\|_{L^p}^p
$$
Using (1.1.9) we obtain that $\|f\|_{L^{p, \infty}} \leq\|f\|_{L^p}$.
> [!NOTE]
> The embedding is strict.

