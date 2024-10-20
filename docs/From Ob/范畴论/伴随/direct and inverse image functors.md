---
UID: 20240817001637
aliases: null
tags: null
source: null
cssclass: null
created: 2024-08-17T00:00:00.000Z
link: https://Equation.notion.site/direct-and-inverse-image-functors-11d931434050810bbee2ce11354a4483
notionID: 11d93143-4050-810b-bee2-ce11354a4483
---

## ✍内容
![[Riehl-CTC.pdf#page=136&rect=122,181,497,325|Riehl-CTC, p.118]]

这段文字讨论了集合之间的映射和这些映射在子集上的作用，特别是在偏序集（poset）和伴随（adjunction）理论的背景下。

让我们逐步解析：

1. **偏序集（Poset）**：
   - 对于集合 $A$ 和 $B$，它们的子集构成了两个偏序集： $P(A)$ 和 $P(B)$，其中的顺序关系是由包含关系（subset inclusion）决定的。也就是说，如果 $A_1 \subseteq A_2$，那么在 $P(A)$ 中 $A_1 \leq A_2$。

2. **映射与诱导的函子**：
   - 给定一个函数 $f: A \rightarrow B$，我们可以定义两个函子：
     - **直接像函子（Direct Image Functor）** $f_*: P(A) \rightarrow P(B)$ ，它将 $A$ 的子集映射到 $B$ 的子集，通过 $f$ 将每个子集 $A'$ 映射到 $f(A')$。
     - **逆像函子（Inverse Image Functor）** $f^{-1}: P(B) \rightarrow P(A)$ ，它将 $B$ 的子集映射到 $A$ 的子集，通过 $f^{-1}$ 将每个子集 $B'$ 映射到 $f^{-1}(B')$。

3. **伴随（Adjunction）**：
   - 逆像函子 $f^{-1}$ 是直接像函子 $f_*$ 的右伴随（right adjoint）。这意味着对于任意的子集 $A' \subset A$ 和 $B' \subset B$，满足以下等价关系：$$f(A') \subset B' \text{ 当且仅当 } A' \subset f^{-1}(B').$$ 这表示在偏序集中，逆像函子在顺序关系上与直接像函子是对偶的。

4. **进一步的右伴随（Further Right Adjoint）**：
   - 逆像函子 $f^{-1}$ 还有一个进一步的右伴随 $f_!$。这个函子将 $A$ 的子集 $A'$ 映射到 $B$ 的子集 $f_!(A')$，其中 $f_!(A')$ 包含了所有那些使得它们的逆像完全在 $A'$ 中的元素。
     - 也就是说，如果 $B' \subset f_!(A')$，那么 $f^{-1}(B') \subset A'$。

5. **伴随对（Adjunction Pair）**：
   - 上述定义了两个伴随对：$f_*$ 和 $f^{-1}$ 形成一个伴随对，而 $f^{-1}$ 和 $f_!$ 形成另一个伴随对。

总之，这段文字展示了集合映射中如何通过直接像和逆像函子以及它们的伴随关系，揭示了子集之间的深层联系。
