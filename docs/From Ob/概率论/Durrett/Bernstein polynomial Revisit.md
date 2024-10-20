---
UID: 20241008200753 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-10-08
---

## ✍内容
Example 2.2.4. Polynomial approximation. Let $f$ be a continuous function on $[0,1]$, and let

$$
f_n(x)=\sum_{m=0}^n\binom{n}{m} x^m(1-x)^{n-m} f(m / n) \quad \text { where }\binom{n}{m}=\frac{n!}{m!(n-m)!}
$$

be the Bernstein polynomial of degree $n$ associated with $f$. Then as $n \rightarrow \infty$

$$
\sup _{x \in[0,1]}\left|f_n(x)-f(x)\right| \rightarrow 0
$$


Proof. First observe that if $S_n$ is the sum of $n$ independent random variables with $P\left(X_i=1\right)=p$ and $P\left(X_i=0\right)=1-p$ then $E X_i=p$, $\operatorname{var}\left(X_i\right)=p(1-p)$ and

$$
P\left(S_n=m\right)=\binom{n}{m} p^m(1-p)^{n-m}
$$

so $E f\left(S_n / n\right)=f_n(p)$. Theorem 2.2 .3 tells us that as $n \rightarrow \infty, S_n / n \rightarrow p$ in probability. The last two observations motivate the definition of $f_n(p)$, but to prove the desired conclusion we have to use the proof of Theorem 2.2.3 rather than the result itself.

Combining the proof of Theorem 2.2.3 with our formula for the variance of $X_i$ and the fact that $p(1-p) \leq 1 / 4$ when $p \in[0,1]$, we have

$$
P\left(\left|S_n / n-p\right|>\delta\right) \leq \frac{\operatorname{var}\left(S_n / n\right)}{\delta^2}=\frac{p(1-p)}{n \delta^2} \leq \frac{1}{4 n \delta^2}
$$


To conclude now that $E f\left(S_n / n\right) \rightarrow f(p)$, let $M=\sup _{x \in[0,1]}|f(x)|$, let $\epsilon>0$, and pick $\delta>0$ so that if $|x-y|<\delta$ then $|f(x)-f(y)|<\epsilon$. (This is possible since a continuous function is uniformly continuous on each bounded interval.) Now, using Jensen's inequality, Theorem 1.6.2, gives

$$
\left|E f\left(S_n / n\right)-f(p)\right| \leq E\left|f\left(S_n / n\right)-f(p)\right| \leq \epsilon+2 M P\left(\left|S_n / n-p\right|>\delta\right)
$$


Letting $n \rightarrow \infty$, we have $\limsup _{n \rightarrow \infty}\left|E f\left(S_n / n\right)-f(p)\right| \leq \epsilon$, but $\epsilon$ is arbitrary so this gives the desired result.

