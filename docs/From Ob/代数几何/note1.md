---
UID: 20240822005447 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-08-22
---
## ✍内容
[【代数几何初步】丢番图方程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1SG411d7v4/?spm_id_from=333.788&vd_source=b55594d2ba73cdd7666e94ca2cf2fe93)
古典代数几何主要来自于对*整系数/有理系数多项式*的*整数/有理数解*的讨论，这些看似简单的问题实际上<u>并不平凡</u>。
研究一个几何体，等价于研究其上的所有函数。
[【代数几何初步】Stone-Weierstrass定理_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1gG411o7AE/?spm_id_from=333.788&vd_source=b55594d2ba73cdd7666e94ca2cf2fe93)
而这些方程的有理解问题，也可以转化为某条曲线上的有理点问题。
比如，是否存在面积为 $\displaystyle n\in \mathbb{Z}$ 的有理直角三角形，等价于曲线 $\displaystyle y^{2}=x^{3}-n^{2}x$ 上是否存在有理点。
对于 Stone-Weierstrass 定理，有一个拓扑空间的版本，还有一个理想的版本 (因为 $\displaystyle C(X)$ 是一个代数)。后者弱于前者，但是代数几何主要使用这个理想的版本。
代数与几何之间存在一个一一对应，在 Stone-Weierstrass 定理中
$$
\begin{aligned}
\{ \text{closed set in }X \} & \longleftrightarrow \{ \text{closed ideal in }C(X) \} \\
\Sigma\text{ closed in }X & \longmapsto I_{\Sigma}=\{ f\in C(X):\left.f\right|_{\Sigma}=0 \} \\
\{ x\in X:f(x)=0,\forall f\in A \}  & \underset{ \text{mapsto} }{ \longleftarrow } A
\end{aligned}
$$
[【代数几何初步】Zorn引理与诺特环_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV17N411i7G3/?spm_id_from=333.788&vd_source=b55594d2ba73cdd7666e94ca2cf2fe93)
类似于考虑有限维线性空间的便捷性，我们考虑环 $\displaystyle A$ 中有限生成的理想，如下是等价的
- 任何 $\displaystyle A$ 中理想 $\displaystyle I$ 都是有限生成
- 所有理想升链都会终止
- 所有非空理想集合都有最大元

满足以上条件的环被称为诺特环。
[【代数几何初步】希尔伯特基定理与代数集_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1sF411r7nM/?p=4&spm_id_from=pageDriver)
希尔伯特基定理：若 $\displaystyle A$ 是诺特环，则 $\displaystyle A[x]$ 也是诺特环。（反证，利用诺特性质）
推论： $\displaystyle \mathrm{k}[x_{1},\dots,x_{n}]$ 也是诺特环。
推论：任何有限生成的 $k$ -代数也是诺特环 ($k$ 是域)。
$\displaystyle \mathrm{k}[x_{1},\dots,x_{n}]$ 中生成元的关系可以由一个理想 $\displaystyle I$ 表示，满足关系即记作 $\displaystyle \mathrm{k}[x_{1},\dots,x_{n}]/I$.
称仿射空间 $\displaystyle \mathbb{A}^{n}_{\mathrm{k}}$ (不带基点的 $\displaystyle \mathrm{k}^{n}$) 的子集 $X$ 是*代数集*，若存在理想 $\displaystyle I\subseteq \mathrm{k}[x_{1},\dots,x_{n}]$，使得 $\displaystyle X=V(I)\coloneqq\{ x\in \mathbb{A}^{n}_{k}:f(x)=0,\forall f\in I \}$. 即所有 $\displaystyle I$ 内函数消失的点集.
将代数集定义为 $\displaystyle \mathbb{A}^{n}_{k}$ 中的闭集，即可获得 *Zariski 拓扑*。
> 代数里面只考虑有限项求和。

Zariski 拓扑中开集非常大。$\displaystyle \mathbb{A}_{\mathbb{R}}^{1}$ 的任意真闭子集都是有限点集。
[【代数几何初步】诺特空间_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ZN4y1Q7Ad/?p=5&spm_id_from=pageDriver)
称拓扑空间 $X$ 为*诺特空间*，若 $X$ 满足闭子集降链终止。装备 Zariski 拓扑的 $\displaystyle \mathbb{A}^{n}_{\mathrm{k}}$ 是诺特空间。利用如下性质验证：
>若闭集 $\displaystyle X\subseteq Y$，则理想 $\displaystyle I(X)\supseteq I(Y)$. 若闭集 $\displaystyle X\subset Y$，则理想 $\displaystyle I(X)\supset I(Y)$. $\displaystyle I(X)$ 表示在 $X$ 上取 0 的 $\displaystyle I$ 中多项式。

引理：$X$ 为代数集，则 $\displaystyle V(I(X))=X$.
- $X$ 为诺特空间，则 $X$ 是紧的。
- $\displaystyle \mathbb{A}^{n}_{\mathrm{k}}$ 是紧的。
- $X$ 是诺特空间，当且仅当 $X$ 的任意子空间都是紧的。(按定义证)

> 原因在于闭链终止条件是很强的条件。

[【代数几何初步】不可约性与素理想_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Mh4y1N7UK/?spm_id_from=333.788&vd_source=b55594d2ba73cdd7666e94ca2cf2fe93)
称诺特空间 $X$ 中子集 $\displaystyle A$ *不可约*，若 $A$ 不可以写成两个闭集的并。诺特空间都可以<u>唯一</u>写成一堆不可约子空间的并。$\displaystyle X=X_{1}\cup\dots\cup X_{n}$，被称为 $X$ 的不可约分支。
判别：代数集 $\displaystyle X\subseteq \mathbb{A}_{\mathrm{k}}^{n}$ 是不可约的，当且仅当 $\displaystyle I(X)$ 是素理想，当且仅当 $\displaystyle \mathrm{k}[x_{1},\dots,x_{n}]/I(X)$ 是整环。<u>证明考虑反证。</u>
考虑 $\displaystyle \mathbb{A}_{\mathrm{k}}^{2}$，$\displaystyle I=(xy-1)$. $\displaystyle C\coloneqq V(I)$ 为图像 $\displaystyle y=1/x$. 在 Zariski 拓扑意义下是否不可约？
> 若 $\displaystyle X=V(I)$，则 $\displaystyle I\subset I(X)=I(V(I))$ 可能发生。
> 例如，$\displaystyle \mathbb{A}_{\mathrm{k}}^{2}$ 中 $\displaystyle I=(x^{2}+y^{2})$，则 $\displaystyle V(I)=\{ (0,0) \}$，$\displaystyle I(V(I))=(x,y)\neq(x^{2}+y^{2})$. $\displaystyle I(V(I))$ 是所有在 $\displaystyle (0,0)$ 消失的多项式函数。

> 若取 $\displaystyle I=((x^{2}+y^{2})^{2})$ 非素理想，但 $\displaystyle I(V(I))=(x,y)$ 是素理想。

**Krull 维数：** $X$ 为诺特空间
$$
\displaystyle \dim X\coloneqq\sup\{ d>0:\exists\text{闭链}\varnothing\neq X_{0}\subset X_{1}\subset\dots \subset X_{d} ,X_{i}\text{不可约}\}
$$
诺特空间中的拓扑很怪异，比如 $\displaystyle [0,1]$ 可以是无穷维的诺特空间。
- 若 $\displaystyle Y\subseteq X$，则 $\displaystyle \dim Y\leq \dim X$.
- $\displaystyle \dim \mathbb{A}_{\mathrm{k}}^{n}=n.$

> [!NOTE]
> 对于多项式环我们可以建立一套这样的理论来研究，那对于一般的环呢？这就是所谓的概形的观点。
> 定义 $\displaystyle \mathrm{Spec}(R)=\{ \text{prime ideal in }R \}$，定义闭集 $\displaystyle Z(I)\coloneqq\{ p\in \mathrm{Spec}(R):I\subseteq p \}$，$\displaystyle I$ 是 $R$ 中理想. 这就诱导了环 $R$ 上的谱的拓扑。

[【代数几何初步】希尔伯特零点定理_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ew41127j9/?p=7&spm_id_from=pageDriver)
Motivation ：对于理想 $\displaystyle \mathfrak{a}\in \mathrm{k}[x_{1},\dots,x_{n}]$，什么时候有 $\displaystyle I(V(\mathfrak{a}))=\mathfrak{a}$？
对于 $\displaystyle \mathrm{k}[x]$，$\displaystyle \mathfrak{a}=(x^{2})$，$\displaystyle I(V(\mathfrak{a}))=(x)$。这是因为 $\displaystyle \mathrm{k}[x]/\mathfrak{a}$ is not reduced，即存在幂零元。
为此我们把次方都包括在理想中，于是定义根理想 ^44b4d0
$$
\sqrt{ \mathfrak{a} }\coloneqq\{ r\in A:r^{n}\in \mathfrak{a},\text{for some }n\in \mathbb{N_{>0}} \}
$$
要求 $\displaystyle \mathfrak{a}$ 也是根理想并不能保证 $\displaystyle I(V(\mathfrak{a}))=\mathfrak{a}$，例如 $\displaystyle \mathrm{k}=\mathbb{R},n=2,\mathfrak{a}=(x^{2}+y^{2})$，$\displaystyle V(\mathfrak{a})=\{ (0,0) \}$，但 $\displaystyle I(V(\mathfrak{a}))=(x,y)$.
再要求 $\displaystyle \mathrm{k}$ 是代数闭域即可。
[【代数几何初步】整元素与诺特正规化引理_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1k94y1p7PJ/?spm_id_from=333.788&vd_source=b55594d2ba73cdd7666e94ca2cf2fe93)
一个交换代数中的引理：$\displaystyle \mathrm{k}$ 是域，若域 $\displaystyle A$ 是有限生成 $\displaystyle \mathrm{k}$ -代数，则 $\displaystyle A$ 在 $\displaystyle \mathrm{k}$ 上代数。即对 $\displaystyle A$ 中每个元素 $x$ 都存在 $a_{0}, a_{1},\dots, a_{n-1}\in \mathrm{k}$ 使得，$\displaystyle x^{n}+a_{n-1}x^{n-1}+\dots+a_{0}=0$.
利用此引理，运用<font color="#2DC26B">行列式方法</font>证明希尔伯特零点定理
利用诺特正规化引理，证明上述引理
[【代数几何初步】诺特引理的证明_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1984y117uR/?spm_id_from=333.788&vd_source=b55594d2ba73cdd7666e94ca2cf2fe93)
对于有限生成 $\displaystyle \mathrm{k}$ -代数 $\displaystyle A$，若 $\displaystyle A=\mathrm{k}[a_{1},\dots,a_{m}]$，即存在 $\displaystyle I=\{ f\in \mathrm{k}[x_{1},\dots,x_{m}]:f(a_{1},\dots,a_{m})=0 \}$，使 $\displaystyle A\cong \mathrm{k}[x_{1},\dots,x_{m}]/I$。则存在在 $\displaystyle \mathrm{k}$ 上代数独立的 $\displaystyle y_{1},\dots,y_{r},r\leq m$，使得 $\displaystyle A$ 是有限生成 $\displaystyle \mathrm{k}[y_{1},\dots,y_{r}]$ -模。
>对于 $\displaystyle \mathrm{k}[a_{1},\dots,a_{m}]$，取 $\displaystyle a_{j}=z_{j}+a_{1}^{s ^{j-1}}$，$s$ 充分大。这是证明诺特引理的核心步骤，将一个元素看成其它元素的整元素。

对于代数集 $\displaystyle V\subseteq \mathbb{A}_{k}^{n}$，定义 $V$ 上所有多项式函数构成的环 $\displaystyle \mathcal{O}_{V}(V)\coloneqq \{ \left.f:V\to \mathrm{k}\right|\exists F\in \mathrm{k}[x_{1},\dots,x_{n}],\text{s.t. }f(p)=F(p),\forall p\in V \}$。
事实上，$\displaystyle \mathcal{O}_{V}(V)\cong k[x_{1},\dots,x_{n}]/I(V)$，$\displaystyle \mathcal{O}_{V}(V)$ 是 $V$ 上的 structure sheave.
[【代数几何初步】代数集上的函数_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV11G41117MS/?spm_id_from=333.788&vd_source=b55594d2ba73cdd7666e94ca2cf2fe93)
> 所谓的 sheave 就是在拓扑空间的每个开集上都指定一个环。

对于代数几何来说，集合上的映射比这个集合重要。代数几何中最重要的映射是由多项式函数诱导的映射。
代数集和多项式函数映射构成一个范畴。
借鉴复分析中从全纯函数到亚纯函数的思想，代数几何考虑从多项式环到有理函数域。
对于不可约代数集 $V$ 和代数闭域 $\displaystyle \mathrm{k}$， $\displaystyle I(V)=\mathfrak{p}$ 一定是素理想，且 $\displaystyle \mathcal{O}_{V}(V)\cong \mathrm{k}[x_{1},\dots,x_{n}]/\mathfrak{p}$. 用 $\displaystyle \mathrm{k}(V)$ 表示 $\displaystyle \mathcal{O}_{V}(V)$ 的分式域。
> [!warning]
> $\displaystyle \forall f\in \mathrm{k}(V)$, 表达式 $\displaystyle f=g/h$ 中 $\displaystyle g, h\in \mathcal{O}_{V}(V)$ 不唯一。

对于 $\displaystyle f\in \mathrm{k}(V)$，令 $\displaystyle\text{dom}f\coloneqq\{ p\in V:f=g/h,\text{其中}g,h\in \mathcal{O}_{V}(V),h(p)\neq0  \}$. $\displaystyle\text{dom}f$ 是装备 Zariski 拓扑的 $V$ 中开集。
$V$ 中不可约代数集中的开集都在 $V$ 中稠密.
令 $V$ 是不可约代数集，$\displaystyle U\subseteq V$ 是开集，定义 $\displaystyle \mathcal{O}_{V}(U)\coloneqq\{ f\in \mathrm{k}(V):U\subseteq\text{dom}f \}$. 对于任何使得 $\displaystyle U\subseteq\text{dom}f$ 的 $\displaystyle f\in \mathrm{k}(V)$，$f$ 称为 $U$ 上的 regular function. $\displaystyle \mathcal{O}_{V}(U)$ 定义为 regular function 的环。而且 $\displaystyle \mathcal{O}_{V}(V)=\{ f\in \mathrm{k}(V):V\subseteq \text{dom}f \}$ 是良定义的。
>将 rational function 类比为亚纯函数，将 regular function 类比为全纯函数。


