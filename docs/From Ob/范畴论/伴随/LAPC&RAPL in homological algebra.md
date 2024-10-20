---
UID: 20240912153612 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-12
---
## ✍内容
> [!cor]
> For any $\displaystyle R-S$ bimodule $M$, the tensor product $\displaystyle M\otimes_{S}-$ is right exact.

[[R-S bimodule]]
The term "right exact" comes from homological algebra, which studies functors between *abelian categories*. An abstract definition is given in the ***Appendex***.
It suffices to declare that a category is abelian if it is a full subcategory of category of modules that contains the zero object and is closed under direct sums, kernels, and cokernels.
The following general definitions of left and right exactness makes sense for any functor, not necessarily between abelian categories.
> [!def]
> Definition 4.5.9. A functor is ***right exact*** if it preserves finite colimits and ***left exact*** if it preserves finite limits.

The following proposition connects Definition 4.5 .9 to the notions of left and right exactness that are used in homological algebra.
Proposition 4.5.10. A functor $F: \mathrm{A} \rightarrow \mathrm{B}$ between abelian categories is left exact if and only if it preserves direct sums and kernels. For such functors, if
$$
0 \rightarrow A \rightarrow A^{\prime} \rightarrow A^{\prime \prime}
$$
Is an exact sequence in A , then
$$
0 \rightarrow F A \rightarrow F A^{\prime} \rightarrow F A^{\prime \prime}
$$
Is exact in B .
As in Example 3.1.14, the kernel of a map $f: A \rightarrow A^{\prime}$ is the equalizer of $f$ with the zero homomorphism, while the cokernel is the coequalizer of this pair.