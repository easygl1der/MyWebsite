---
UID: 20240918113015 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-18
---
## ✍内容
Definition 1.1.7. Let $f, f_n, n=1,2, \ldots$, be measurable functions on the measure space $(X, \mu)$. The sequence $f_n$ is said to converge in measure to $f$ if for all $\varepsilon>0$ there exists an $n_0 \in \mathbf{Z}^{+}$ such that
$$
n>n_0 \Longrightarrow \mu\left(\left\{x \in X:\left|f_n(x)-f(x)\right|>\varepsilon\right\}\right)<\varepsilon
$$
Remark 1.1.8. The preceding definition is equivalent to the following statement:
For all $\varepsilon>0 \quad \lim _{n \rightarrow \infty} \mu\left(\left\{x \in X:\left|f_n(x)-f(x)\right|>\varepsilon\right\}\right)=0$.
> Use $\displaystyle \mu (\{ x\in X:\lvert f_{n}(x)-f (x) \rvert>\varepsilon \})\leq \mu (\{ x\in X:\lvert f_{n}(x)-f (x) \rvert<\delta \}),\forall\delta<\varepsilon$.

Proposition 1.1.9. Let $0<p \leq \infty$ and $f_n$, $f$ be in $L^{p, \infty}(X, \mu)$.
(1) If $f_n, f$ are in $L^p$ and $f_n \rightarrow f$ in $L^p$, then $f_n \rightarrow f$ in $L^{p, \infty}$.
(2) If $f_n \rightarrow f$ in $L^{p, \infty}$, then $f_n$ converges to $f$ in measure.
Proof. Fix $0<p<\infty$. Proposition 1.1.6 gives that for all $\varepsilon>0$ we have
$$
\mu\left(\left\{x \in X:\left|f_n(x)-f(x)\right|>\varepsilon\right\}\right) \leq \frac{1}{\varepsilon^p} \int_X\left|f_n-f\right|^p d \mu .
$$
This shows that convergence in $L^p$ implies convergence in weak $L^p$. The case $p=\infty$ is tautological.
Given $\varepsilon>0$ find an $n_0$ such that for $n>n_0$, we have
$$
\left\|f_n-f\right\|_{L^{p, \infty}}=\sup _{\alpha>0} \alpha \mu\left(\left\{x \in X:\left|f_n(x)-f(x)\right|>\alpha\right\}\right)^{\frac{1}{p}}<\varepsilon^{\frac{1}{p}+1}
$$
Taking $\alpha=\varepsilon$, we conclude that convergence in $L^{p, \infty}$ implies convergence in measure.
> [!IMPORTANT]
> The convergence in measure and $\displaystyle L^{p,\infty}$ may be distinct.

Example 1.1.10. Note that there is no general converse of statement (2) in the preceding proposition. Fix $0<p<\infty$ and on $[0,1]$ define the functions
$$
f_{k, j}=k^{1 / p} \chi_{\left(\frac{j-1}{k}, \frac{j}{k}\right)}, \quad k \geq 1,1 \leq j \leq k
$$
Consider the sequence $\left\{f_{1,1}, f_{2,1}, f_{2,2}, f_{3,1}, f_{3,2}, f_{3,3}, \ldots\right\}$. Observe that
$$
\left|\left\{x: f_{k, j}(x)>0\right\}\right|=1 / k
$$
Therefore, $f_{k, j}$ converges to 0 in measure. Likewise, observe that
$$
\left\|f_{k, j}\right\|_{L^{p, \infty}}=\sup _{\alpha>0} \alpha\left|\left\{x: f_{k, j}(x)>\alpha\right\}\right|^{1 / p} \geq \sup _{k \geq 1} \frac{(k-1 / k)^{1 / p}}{k^{1 / p}}=1
$$
which implies that $f_{k, j}$ does not converge to 0 in $L^{p, \infty}$.
It turns out that every sequence convergent in $L^p(X, \mu)$ or in $L^{p, \infty}(X, \mu)$ has a subsequence that converges a.e. to the same limit.
> [!NOTE]
> In many situations we are given a sequence of functions and we would like to extract a convergent subsequence.

Definition 1.1.12. We say that a sequence of measurable functions $\left\{f_n\right\}$ on the measure space $(X, \mu)$ is Cauchy in measure if for every $\varepsilon>0$, there exists an $n_0 \in \mathbf{Z}^{+}$ such that for $n, m>n_0$ we have
$$
\mu\left(\left\{x \in X:\left|f_m(x)-f_n(x)\right|>\varepsilon\right\}\right)<\varepsilon
$$
Theorem 1.1.13. Let $(X, \mu)$ be a measure space and let $\left\{f_n\right\}$ be a complex-valued sequence on $X$ that is Cauchy in measure. Then some subsequence of $f_n$ converges $\mu$ -a.e.
> The proof is very similar to that of Theorem 1.1.11.

