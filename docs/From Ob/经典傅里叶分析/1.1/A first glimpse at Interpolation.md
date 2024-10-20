---
UID: 20240918122452 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-18
---
## ✍内容
It is a useful fact that if a function $f$ is in $L^p(X, \mu)$ and in $L^q(X, \mu)$, then it also lies in $L^r(X, \mu)$ for all $p<r<q$. The usefulness of the spaces $L^{p, \infty}$ can be seen from the following sharpening of this statement:
Proposition 1.1.14. Let $0<p<q \leq \infty$ and let $f$ in $L^{p, \infty}(X, \mu) \cap L^{q, \infty}(X, \mu)$, where $X$ is a $\sigma$ -finite measure space. Then $f$ is in $L^r(X, \mu)$ for all $p<r<q$ and
$$
\|f\|_{L^r} \leq\left(\frac{r}{r-p}+\frac{r}{q-r}\right)^{\frac{1}{r}}\|f\|_{L^{p, \infty}}^{\frac{\frac{1}{r}-\frac{1}{q}}{\frac{1}{p}-\frac{1}{q}}}\|f\|_{L^{q, \infty}}^{\frac{\frac{1}{p}-\frac{1}{r}}{\frac{1}{r}-\frac{1}{q}}}
$$
with the interpretation that $1 / \infty=0$.
If $\displaystyle q=\infty$, then
$$
\|f\|_{L^r}^r \leq \frac{r}{r-p}\|f\|_{L^{p, \infty}}^p\|f\|_{L^{\infty}}^{r-p}
$$Proof: $\displaystyle q=\infty$ 的情况简单，若 $\displaystyle q\neq \infty$，利用
$$
d_f(\alpha)=\mu(\{x \in X:|f(x)|>\alpha\})\leq \frac{\lVert f \rVert ^{p}_{L^{p,\infty}}}{\alpha^{p}}=\int _{X} \left\lvert  \frac{f(x)}{\alpha} \right\rvert^{p} \, d\mu
$$
类似地有
$$
d_{f}(\alpha)\leq \min\left( \frac{\lVert f \rVert ^{p}_{L^{p,\infty}}}{\alpha^{p}},\frac{\lVert f \rVert ^{q}_{L^{q,\infty}}}{\alpha^{q}} \right)
$$
将 $\displaystyle \lVert f \rVert_{L^{r}}$ 展开，利用该不等式，再按 $\displaystyle \frac{\lVert f \rVert ^{p}_{L^{p,\infty}}}{\alpha^{p}},\frac{\lVert f \rVert ^{p}_{L^{p,\infty}}}{\alpha^{q}}$ 的大小分段积分即可得到结果。
Definition 1.1.15. For $0<p<\infty$, the space $L_{\mathrm{loc}}^p\left(\mathbf{R}^n,|\cdot|\right)$ or simply $L_{\mathrm{loc}}^p\left(\mathbf{R}^n\right)$ is the set of all Lebesgue-measurable functions $f$ on $\mathbf{R}^n$ that satisfy
$$
\int_K|f(x)|^p d x<\infty
$$
for any compact subset $K$ of $\mathbf{R}^n$. Functions that satisfy (1.1.26) with $p=1$ are called locally integrable functions on $\mathbf{R}^n$.
The union of all $L^p\left(\mathbf{R}^n\right)$ spaces for $1 \leq p \leq \infty$ is contained in $L_{\mathrm{loc}}^1\left(\mathbf{R}^n\right)$. More generally, for $0<p<q<\infty$ we have the following:
$$
L^q\left(\mathbf{R}^n\right) \subseteq L_{\mathrm{loc}}^q\left(\mathbf{R}^n\right) \subseteq L_{\mathrm{loc}}^p\left(\mathbf{R}^n\right)
$$
Functions in $L^p\left(\mathbf{R}^n\right)$ for $0<p<1$ may not be locally integrable. For example, take $f(x)=|x|^{-n-\alpha} \chi_{|x| \leq 1}$, which is in $L^p\left(\mathbf{R}^n\right)$ when $\alpha>0$ and $p<n /(n+\alpha)$, and observe that $f$ is not integrable over any open set in $\mathbf{R}^n$ containing the origin.