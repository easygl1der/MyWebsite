---
UID: 20240829113428 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-08-29
---
## ✍内容
分析学中我们要证明 $\displaystyle \lim_{ n \to \infty }x_{n}=0$，只需要证明 $\displaystyle \forall\epsilon>0$, 有 $\displaystyle \lim_{ n \to \infty }\lvert x_{n} \rvert<\epsilon$ 即可。这可以推出 $\displaystyle \lvert x_{n} \rvert\leq0$，再由 $\displaystyle \lvert \cdot \rvert$ 的正定性可知 $\displaystyle \lim_{ n \to \infty }x_{n}=0$。这样的思想在于将 $\displaystyle \leq0$ 分解为各个 components：$\displaystyle \{ <\epsilon;\epsilon>0 \}$，这就类似于范畴论中考虑各个 components 的思想。比如对于任何测度空间 $\displaystyle \Sigma(X)$ 到 $\displaystyle \Sigma(Y)$ 的自然映射，我们只能在各个具体的 components 上定义，比如对于 $\displaystyle \Sigma(X)$ 上的任意测度 $\displaystyle \mu$，定义 $\displaystyle \mu\mapsto \mu \circ f^{-1}$。
