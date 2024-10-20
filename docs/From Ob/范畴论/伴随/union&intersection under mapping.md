---
UID: 20240829150305 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-08-29
---

## ✍内容
![[Riehl-CTC.pdf#page=156&rect=121,375,493,545|Riehl-CTC, p.138]]
这就是为什么 $\displaystyle f^{-1}$ 保任意交、保任意并，但 $\displaystyle f_{*}$ 保任意并、<u>不保任意交</u>。
![[实变函数论【教育部重点教材】 (周民强) (Z-Library).pdf#page=31&rect=31,69,340,291|实变函数论【教育部重点教材】 (周民强) (Z-Library), p.12]]
证明如上简单事实：
(i) $\displaystyle \forall x\in\bigcup_{\alpha\in I}A_{\alpha}$, we have $\displaystyle x\in A_{\alpha}$ for some $\displaystyle \alpha$, then $\displaystyle f (x)\in f (A_{\alpha})\subseteq\bigcup_{\alpha\in I}f(A_{\alpha})$, so $\displaystyle f\left( \bigcup_{\alpha\in I} A_{\alpha}\right)\subseteq \bigcup_{\alpha\in I}f(A_{\alpha})$.
$\displaystyle \forall x\in \bigcup_{\alpha\in I}f(A_{\alpha})$, we have $\displaystyle x\in f(A_{\alpha})\subseteq f\left( \bigcup_{\alpha\in I}A_{\alpha} \right)$ for some $\displaystyle \alpha$, so $\displaystyle \bigcup_{\alpha\in I}f(A_{\alpha})=f\left( \bigcup_{\alpha\in I}A_{\alpha} \right)$.
(ii) $\displaystyle \forall x\in \bigcap_{\alpha\in I}A_{\alpha}$, we have $\displaystyle x\in A_{\alpha},\forall\alpha\in I$, and $\displaystyle f (x)\in f (A_{\alpha}),\forall\alpha\in I$, so $\displaystyle f (x)\in \bigcap_{\alpha\in I}f(A_{\alpha})$, so $\displaystyle f\left( \bigcap_{\alpha\in I}A_{\alpha} \right)\subseteq \bigcap_{\alpha\in I}f(A_{\alpha})$.
$\displaystyle \forall x\in \bigcap_{\alpha\in I}f(A_{\alpha})$, we have $\displaystyle x\in f (A_{\alpha}),\forall\alpha\in I$, but $\displaystyle f^{-1}(x)$ may not be a point in $\displaystyle A_{\alpha}$.
- $ 对于 $\displaystyle f^{-1}$

(iii) $\displaystyle \forall x\in \bigcap_{\alpha\in I}B_{\alpha}$, we have $\displaystyle x\in B_{\alpha},\forall\alpha\in I$, so $\displaystyle f^{-1}(x)\in f^{-1}(B_{\alpha}),\forall \alpha\in I$, then $\displaystyle f^{-1}\left( \bigcap_{\alpha\in I}B_{\alpha} \right)\subseteq \bigcap_{\alpha\in I}f^{-1}(B_{\alpha})$.
$\displaystyle \forall x\in \bigcap_{\alpha\in I}f^{-1}(B_{\alpha})$, we have $\displaystyle x\in f^{-1}(B_{\alpha}),\forall\alpha\in I$, so $\displaystyle f (x)\in B_{\alpha},\forall\alpha\in I$, then $\displaystyle f (x)\in \bigcap_{\alpha\in I}B_{\alpha}$, $\displaystyle x\in f^{-1}\left( \bigcap_{\alpha\in I}B_{\alpha} \right)$. Hence $\displaystyle f^{-1}\left( \bigcap_{\alpha\in I}B_{\alpha} \right)=\bigcap_{\alpha\in I}f^{-1}(B_{\alpha})$.
