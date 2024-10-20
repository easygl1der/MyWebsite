---
UID: 20240925185647 
aliases: 
tags: 
source: 
cssclass: 
created: 2024-09-25
---

## ✍内容
In this section we state the fundamental thm on rectification of a direction field and deduce from it thms on existence, uniqueness, and differentiable dependence of the solution on parameters and initial conditions, thms on extension, and thms on local phase flows.
### Rectification of a Direction Field
Consider a smooth direction field in a domain $U$ of $n$ -dimensional space.
> [!def]
>  a rectification of a direction field is a *diffeomorphism* mapping it into a field of parallel directions. A field is said to be rectifiable if there exists a rectification of it.

![[Ordinary Differential Equations - V.I.Arnold(英文版).pdf#page=93&rect=112,126,316,229|Ordinary Differential Equations - V.I.Arnold(英文版), p.89]]
> [!thm]
> (Fundamental). Every smooth [direction field](https://en.wikipedia.org/wiki/Slope_field) is rectifiable in a neighborhood of each point. If the field is $r$ times continuously differentiable (of class $\displaystyle  C^{r},1\leq r\leq \infty$), then the rectifying [diffeomorphism](https://en.wikipedia.org/wiki/Diffeomorphism) can also be taken from the class $\displaystyle C^{r}$.

Example:
The direction field of the equation $\displaystyle \dot{x}=x$ can be rectified by the diffeomorphism $\displaystyle (t,x)\mapsto(t,y=xe^{ -t })$. Indeed this diffeomorphism maps the integral curves $\displaystyle x=Ce^{ t }$ in the $\displaystyle (t,x)$ -plane to the parallel lines $\displaystyle y=C$ in the $\displaystyle (t,y)$ -plane.

Problem 1. Rectify the direction fields of the equations $\displaystyle \dot{x}=t$ and $\displaystyle \dot{x}=x^{2}$ in a neighborhood of the origin.
> The first rectification is $\displaystyle (x,t)\mapsto\left( x,x-\frac{t^{2}}{2} \right)$.
> The second rectification is **not** $\displaystyle (t,x)\mapsto\left( t,\frac{1}{x}+t \right)$ arround the origin.

> [!NOTE]
> It is impossible to rectify the direction field of the equation $\displaystyle \dot{x}=x^{2}$ on the entire plane by a time-preserving diffeomorphism.

Problem 3. Suppose a (smooth) field of two-dimensional planes is given in $\displaystyle \mathbb{R}^{3}$ (a plane is attached at each point). Is it always possible to rectify this field (transform it into a field of parallel planes by a suitable diffeomorphism)?
Hint: A rectifiable field is a field of planes tangent to a family of surfaces.
Answer. No. Consider, for example, the field of planes given by the equation $\displaystyle ydx+dz=0$ (a vector belongs to a plane of this field if this 1-form vanishes on it). There is no surface tangent to the planes of the field.

> [!thm]
> All smooth direction fields in domains of the same dimension are locally diffeomorphic (can be mapped into each other by a diffeomorphism).

$\displaystyle 1\Rightarrow2$: By the fundamental thm all fields are locally diffeomorphic to one standard field.
$\displaystyle 2\Rightarrow1$: The property of being locally diffeomorphic to any field implies, in particular the property of being locally diffeomorphic to a standard field, i.e., local rectifiability.

> [!thm]
> The differential equation $\displaystyle \dot{x}=\boldsymbol{v}(t,x)$ with smooth right-hand side $\displaystyle \boldsymbol{v}$ is locally equivalent to the very simple equation $\displaystyle dy/d\tau=0$.

> [!NOTE]
>  In other words, in a neighborhood of each point of the extended phase space of $\displaystyle (t,x)$ there exists an admissible coordinate system $\displaystyle (\tau,y)$ (transition to which is a diffeomorphic change of variables) in which the equation can be written in the very simple form $\displaystyle dy/d\tau=0$.

$\displaystyle 1\Rightarrow3$: We first rectify the direcion field $\displaystyle \boldsymbol{v}$ and then consider Cartesian coordinates in which the time axis $\displaystyle \tau$ is **parallel** to the lines of the rectified direction field.
$\displaystyle 3\Rightarrow1$: Every direction field can be written loaclly as the direction field of a suitable field of a suitable differential equation. Passing to a **local coordinate system** in which the equation has the form $\displaystyle dy/d\tau=0$ rectifies the given field.

Problem 5. Prove that the coordinate system in Thm 3 can be chosen so that time is left fixed ($\displaystyle \tau\equiv t$).
The equivalence implies $\displaystyle \tau(t)$ is a smooth function of $t$, then $\displaystyle \frac{dy}{dt}=\frac{dy}{d\tau}\frac{d\tau}{dt}=0$.

Problem 6. Rectify the direction field of the equation $\displaystyle \dot{x}=x+t$ on the entire plane by a time -preservng diffeomorphism $\displaystyle (t,x)\mapsto(t,y(t,x))$.
Put $\displaystyle y(t,x)=(x+t+1)e^{ -t }$, just by solving the ode $\displaystyle \dot{x}=x+t$ and let $y$ be the parameter $C$.

The fundamental theorem on rectification was essentially discovered by Newton. In modern terms  Newton's method consists of the following.
Suppose given an equationn $\displaystyle \dot{x} =v(t,x)$. We shall seek a rectifying diffeomorphism $\displaystyle y=h(t,x)$ for which $\displaystyle y=x$ when $\displaystyle t=0$ (time is not changed). From the condition $\displaystyle \dot{y}=0$ we obtain for $h$ the equation $\displaystyle \frac{ \partial y }{ \partial t }+\left( \frac{ \partial y }{ \partial x } \right)v\equiv0$. We expand $v$ nd $h$ in series of powers of $t$ :
$$
h=h_{0}+th_{1}+\dots,\qquad v=v_{0}+tv_{1}+\dots
$$
Then $\displaystyle h_{0}(x)\equiv x$, and so $\displaystyle \frac{ \partial h }{ \partial x }=E+t\overbrace{ h_{1} }^{ \text{this might be wrong} }+\dots$. We then substitute the series for $h$ and $v$ into the equation for $h$. We then expand the left-hand side in a series in $t$. We then set the coefficients of $\displaystyle t^{0},t^{1},\dots$ equal to zero in this series (based on the uniqueness of the coefficients of a Taylor series). We obtain successively
$$
h_{1}+v_{0}=0,\qquad 2h_{2}+h_{1}v_{0}+v_{1}=0
$$

Problem 8. Solve the equation $\displaystyle \dot{x}=x$ by Newton's method with the initial condition $\displaystyle \varphi(0)=1$.
**Solution.** $\displaystyle \varphi=1+t\varphi_{1}+t^{2}\varphi_{2}+\dots\Rightarrow\varphi_{1}+2\varphi_{2}+3\varphi_{3}t^{2}+\dots=1+\varphi_{1}t+\varphi_{2}t^{2}+\dots$, and consequently $\displaystyle \varphi_{1}=1,\varphi_{2}=\varphi_{1}/2,\varphi_{3}=\varphi_{2}/3,\dots$, whence $\displaystyle \varphi_{k}=1/k!$. This is the way in which the series for the exponential was originallly discovered.

> [!tip]
> The proof of the convergence of the series constructed by Newton was much studied in the 19 th century. The convergence of the series for $h$ in the analytic case was proved by Cauchy. Cauchy's thm was extended to the case of finite smoothness by Picard. The proof is discussed in $\displaystyle § 32.$


#### Similar to linear algebra
The fundamental Theorem 1 is an assertion of the same character as the theorems of linear algebra on the reduction of quadratic forms or the matrices of linear operators to normal form. It give an exhaustive description of the possible local behaviors of direction fields, *reducing all questions to the trivial case of a parallel field*.
A related theorem of analysis is the [implicit function theorem](https://en.wikipedia.org/w/index.php?search=implicit+function+theorem&title=Special%3ASearch&wprov=acrw1_-1). A smooth mapping $\displaystyle f:\mathbb{R}^{m}\to \mathbb{R}^{n}$ is called *nondegenerate at the point 0* if the rank of the derivative at this point is as large as possible (i.e., the smaller of $m$ and $n$). Suppose $\displaystyle f(0)=0$.
Two such mappings $f$ and $g$ are called *locally equivalent at the point 0* if one of them maps into the other under the action of diffeomorphisms of the domain and target spaces that leave 0 fixed: $\displaystyle h:\mathbb{R}^{m}\to \mathbb{R}^{m}, k:\mathbb{R}^{n}\to \mathbb{R}^{n}, f\circ h=k\circ g$.
$$
\begin{CD}
\mathbb{R}^{m}@>g>>\mathbb{R}^{n}\\
@VhV\sim V @VkV\sim V\\
\mathbb{R}^{m}@>>f>\mathbb{R}^{n}
\end{CD}
$$
In other words, two mappings are locally equivalent if under suitable choices of admissible local coordinate systems in the domain and target space (with origin at 0) they can be written by the same formulas.
> [!thm] Implicit Function Theorem
> In some neighborhood of a nondegerate point any two smooth mappings (of spaces of fixed dimensions $m$ and $n$ ) are equivalent.

In particular every mapping is equivalent to its linear part at a nondegenerate point. Therefore the theorem just stated is one of numerous theorems on linearization.
As a local normal form to which the mapping $f$ reduces by diffeomorphisms $h$ and $k$ it is natural to take the following simplest one:
$$
y_{i}=x_{i}\text{ for }i\leq r,\qquad y_{i}=0\text{ for }i>r 
$$
where $\displaystyle r=\min(m,n)$ is the rank of the derivative of $f$ at zero, $\displaystyle x_{i}$ are the coordinates of a point in the domain space, and $\displaystyle y_{i}$ are coordinates of a point in the target space. In other words, $f$ is an imbedding if the dimension of the domain is less than that of the target space and a fibration otherwise.
The reader accustomed to more complocated statements of the implicit unction theorem will easily verify that these more complicated statements are *equivalent to the simple geometric statement* given here.
All the theorems just listed on normal forms describe the orbits of the actions of various groups ("changes of variable") on sets (matrices, forms, fields, and mappings, respectively).
### Existence and Uniqueness Theorems
The following corollary is a consequence of the fundamental Theorem 1 on rectification.
> [!cor]
> Through each point of a domain in which a smooth direction field is defined there passes an integral curve.

Consider a diffeomorphism that rectifies the given field. The rectified field consists of parallel directions. In that field an integral curve passes through each point (a straight line, to be specific). The diffeomorphism inverse to the rectifying diffeomorphism maps this line into the desired integral curve.
> [!cor]
> Two integral curves of a smooth direction field having a point in common coincide in a neighborhood of that point.

For a rectified field this is obvious, but a rectifying diffeomorphism maps integral curves of the original field into integral curves of the rectified field.
> [!cor]
> A solution of the differential equation $\displaystyle \dot{x}=\boldsymbol{v}(t,x)$ with the initial condition $\displaystyle (t_{0},x_{0})$ in the domain of smoothness of the right-hand side exists and is unique (in the sense that any two solutions with a common initial condition coincide in some neighborhood of the point $\displaystyle t_{0}$)

We apply the above two corollaries to the direction field of the quation in the extended phase space. The result is Corollary 3.
> In Corollary 3 and in what follows $x$ is a point of a phase space of any (finite) dimension $m$. This corollary is called an *existence and uniqueness theorem* for solutions of a system of $m$ first-order equations.

### Theorems on Continuoes and Differentiable Dependence of the Solutions on the Initial Condition
Consider the value of the solution $\displaystyle \varphi$ of the differential equation $\displaystyle \dot{x}=\boldsymbol{v}(t,x)$ with initial condition $\displaystyle \varphi(t_{0})=x_{0}$ at the instant of time $t$ as a function $\displaystyle \Phi$ of $\displaystyle (t_{0},x_{0};t)$ with values in the phase space.
The following result is a consequence of the fundamental Theorem 1 on rectification.
> [!cor]
> The solution of an equation with smooth right-hand side depends smoothly on the initial conditions.

> [!NOTE]
> This means that the function $\displaystyle \Phi$ shown above is defined, continuous, and smooth in a neighborhood of each point $\displaystyle (t_{0},x_{0};t_{0})$ (of class $\displaystyle C^{r}$ if $\displaystyle \boldsymbol{v}$ is of class $\displaystyle C^{r}$).

For the simplest equation ($\displaystyle \boldsymbol{v}\equiv0$) this is obvious ($\displaystyle \Phi\equiv x_{0}$). The general equation reduces to this one by a diffeomorphism (the details are left to the reader).
> The theorem on differentiablility with respect to the initial condition provides a **quite efficient method** of studying the influence exerted on the solution by a small ==perturbation== of the initial condition. If the solution is known for some initial condition, then to determine the deviation of the solution with a nearby initial condition ==from the given "unperturbed" solution== a linear-homogeneous equation is obtained in first approximation (**the equation of variations**). The "perturbation theory" that arises in this way is but one of the variants of Newton's series method.


Problem 1. Find the derivative of the solution $\displaystyle \varphi$ of the equation $\displaystyle \dot{x}=x^{2}+x\sin t$ with respect to the initial condition $\displaystyle \varphi(0)=a$ for $\displaystyle a=0$.
Solution. By Corollary 4 the solution can be expanded in a Taylor's series in $\displaystyle a$: $\displaystyle \varphi=\varphi_{0}+a\varphi_{1}+\dots$ (the dots stand for an infinitesimal of higher order than first in $a$ ). Here $\displaystyle \varphi_{0}$ is the unperturbed solution (with zero as initial condition), and $\displaystyle \varphi_{1}$ is the unknown derivative. For our equation $\displaystyle \varphi_{0}\equiv 0$. Substituting the series into the equation and equating the terms of like degree in $a$ on the left- and right-hand sides (by the uniqueness of Taylor series), we obtain for $\displaystyle \varphi_{1}$ the equation of variations $\displaystyle \dot{\varphi}_{1}=\varphi_{1}\sin t$ with initial condition $\displaystyle \varphi_{1}(0)=1$ (why?). Hence the answer is $\displaystyle e^{ 1-\cos t }$.

$$
\begin{CD}
\dot{x}@=x^{2}+x\sin t\\
@| @|\\
\varphi_{0}'+a\varphi_{1}'+\dots  & & (\varphi_{0}^{2}+\varphi_{0}\sin t)+(2\varphi_{0}\varphi_{1}+\varphi_{1}\sin t)a+\dots \\
 & @|\\
 & &0+(\varphi_{1}\sin t)a+\dots
\end{CD}
$$
于是 $\displaystyle \varphi_{1}'=\varphi_{1}\sin t$，由初值 $\displaystyle \varphi(0)=a$，可知 $\displaystyle (\varphi_{0}+\varphi_{1}a+\dots)(0)=a$，于是 $\displaystyle \varphi_{1}(0)=1$.

Problem $\displaystyle 2$. Find the segment of a phase curve of the genrealized Lotka-Volterra system $\displaystyle \dot{x}=x(1-ya(x,y))$, $\displaystyle \dot{y}=y(x-1)$ passing through the point $\displaystyle x=1, y= \varepsilon$ (with error of order $\displaystyle \varepsilon^{2}$)
Solution. The equation of the phase curves is $\displaystyle dy/dx=y(x-1)/(x(1-ya))$. The unperturbed solution is $\displaystyle y\equiv0$. The equation of variations is $\displaystyle dy/dx=y(x-1)/x$. The answer is $\displaystyle y= \varepsilon e^{ x-1 }/x$ independently of the form of the function $a$.

Problem 3. Find the derivative of the solution of the pendulum equation $\displaystyle \ddot{\theta}=-\sin\theta$ with initial condition $\displaystyle \theta(0)=a,\dot{\theta}(0)=0$ with respect to $a$ at $\displaystyle a=0$.
Solution. To apply Corollary $\displaystyle 4$ one must write the equation as a system of equations. The resulting system of equations of variations can be written in the form of a single second-order equation. It is convenient to write out only the second-order equations equivalent to these systems and their solutions rather than the systems themselves. The unperturbed solution is $\displaystyle \theta=0$. The equation of variations is the equation for small oscillations of the pendulum: $\displaystyle \ddot{\theta}=-\theta$. The answer is $\displaystyle \cos t$.

> [!CAUTION]
> In using the approximate formulas for the perturbed solutions obtained through the equation of variations, one must not forget that they give a good approximation for fixed $t$ and small deviation $\displaystyle \varepsilon$ of the initial condition from the unperturbed condition: the error for fixed $t$ is $\displaystyle O(\varepsilon^{2})$, ut nonuniformly as $\displaystyle t\to \infty$ (the constant in $O$ increases with $t$ )


For example, the formula obtained in Problem $\displaystyle 2$ would give an incorrect picture of the form of the phase curves of the usual Lotka-Volterra model if we had tried to apply it to describe these curves in the large (as we know from $\displaystyle \S$$\displaystyle 2$ , these curves are closed; the part of the curve far from the $x$ -axis is by no mains described by the solution to Problem $\displaystyle 2$ ).

In exactly the same way the solution of the full pendulum equation with initial condition $\displaystyle (a,0)$ is near the solution of the equation of small oscillations (with the same initial condition ) for fixed $t$ : the difference between them is of order $\displaystyle O(a^{3})$ (why?).

Problem 4. Find the first term (linear in $a$) of the Taylor series expansion of the solution of the equation of the soft pendulum $\ddot{x}=-x^3$ with initial condition $x(0)=0, \dot{x}(0)=a$.
Solution. The unperturbed solution is $\displaystyle x\equiv0$. The quation of variations is $\displaystyle \ddot{\varphi}+1=0$. The initial condition is $\displaystyle \varphi_{1}(0)=0,\dot{\varphi}(0)=1$ (why?). The answer is $\displaystyle x\approx at$.
> 利用 $\displaystyle \varphi=\varphi_{0}+\varphi_{1}a+\dots,\varphi_{0}\equiv0$ 简单验证。


It follows from the differentiability theorem that the error in this approximate formula is at most $O\left(a^2\right)$ for each fixed $t$. However for any fixed $a \neq 0$ the approximation becomes completely unsatisfactory for sufficiently large $t$. This can be seen, for example, from the fact that the approximate solution grows without bound, and the actual solution describes periodic oscillations of an amplitude that is small together with $a$ (the size of the amplitude is of order $\sqrt{a}$ by similarity considerations).
To estimate the range of applicability of the approximate formula we can compute the following approximations: $x=a t+a^2 \varphi_2+a^3 \varphi_3+\cdots$. Substituting into the equation, we obtain $a^2 \ddot{\varphi}_2+a^3 \ddot{\varphi}_3+\cdots=-a^3 t^3+\cdots$. Hence $\varphi_2 \equiv 0, \ddot{\varphi}_3=-t^3$, $\dot{\varphi}_3=-t^4 / 4, \varphi_3=-t^5 / 20$, and $x \approx a t-a^3 t^5 / 20+\cdots$. The second term is small in comparison with the first if $a^2 t^4 / 20 \ll 1$, i.e., $t \ll a^{-1 / 2}$. In other words the value of the approximate solution must be small in comparison with the amplitude of the true oscillation, at $\ll \sqrt{a}$.
 
Problem 5. Prove that under this condition the relative error of the approximate solution is indeed small.
Solution. This follows from similarity conditions. The quasi-homogeneous dilations $X=e^s x, T=e^{-s} t$ transform the equation $\ddot{x}=-x^3$ into itself. The solution with initial condition $(0, a)$ becomes the solution with initial condition $\left(0, A=e^{2 s} a\right)$. The approximate solution $x \approx$ at becomes $X \approx A T$. We choose $s$ so that $A=1$. For $A=1$ the solution $X \approx T$ has small relative error when $T \ll 1$. But dilations do not change the relative errors. Hence the relative error of the approximate solution $x \approx a t$ is also small for $T \ll 1$. But $T=e^{-s} t, a=e^{-2 s}$. Hence $T \ll 1$ for $t \ll a^{-1 / 2}$. Thus for small $a$ the approximation gives a small relative error, even for very large $t$, provided $t$ is small in comparison with the large number $1 / \sqrt{a}$.

In applications of the theory of differential equations it is always necessary to deal with a large number of quantities, some of which are "very small" and others "very large." To discern what is large in comparison with what (i.e., in what order to perform the passages to the limit) is not always easy; the study of this question is sometimes half of the job.

### Transformation over the Time Interval from $\displaystyle t_{0}$ to $\displaystyle t$
![[Ordinary Differential Equations - V.I.Arnold(英文版).pdf#page=100&rect=43,320,388,538|Ordinary Differential Equations - V.I.Arnold(英文版), p.96]]
The following corollary is a consequence of the fundamental theorem on rectification.
> [!cor]
> The transformations over the time interval from $t_{0}$ to $t$ for an equation with smoot right-hand side
> 1. Are defined in a neighborhood of each phase point $\displaystyle x_{0}$ for $t$ sufficiently close to $\displaystyle t_{0}$;
> 2. Are local diffeomorphisms (of class $\displaystyle C^{r}$ if the right-hand side is of class $\displaystyle C^{r}$) and depend smoothly on $t$ and $\displaystyle t_{0}$;
> 3. Satisfy the identity $\displaystyle g^{t}_{t_{0}}x=g^{t}_{s}g^{s}_{t_{0}}x$ for $s$ and $t$ sufficiently closse to $\displaystyle t_{0}$ (for all $x$ in a sufficiently small neighborhood of the point $\displaystyle x_{0}$);
> 4. Are such that for fixed $\displaystyle \xi$ the function $\displaystyle \varphi(t)=g^{t}_{t_{0}}\xi$ is a solution of the equation $\displaystyle \dot{x}=\boldsymbol{v}(t,x)$ satisfying the initial condition $\displaystyle \varphi(x_{0})=\xi$. 

> [!thm]
> The transformation over the time interval from $\displaystyle t_{0}$ to $t$ for an autonomous equation depends only on the length $\displaystyle t-t_{0}$ of the time interval and not on the initial instant $\displaystyle t_{0}$.

A translation of the extended phase space of an sutonomous equation along the $t$ -axis maps the direction field onto itself and hence maps integral curves onto one another. Under a translation by $s$ the solution $\displaystyle \varphi$ with initial condition $\displaystyle \varphi(t_{0})=x_{0}$ maps into the solution $\displaystyle \psi$ with the initial condition $\displaystyle \psi(t_{0}+s)=x_{0}$. For any $t$ we have $\displaystyle \psi(t+s)=\varphi(t)$. Consequently $\displaystyle g^{t}_{t_{0}}\equiv g^{t+s}_{t_{0}+s}$, as asserted.

Problem 1. Assume that the equation $\dot{x}=\boldsymbol{v}(t, x)$ has $T$ -periodic coefficients $(\boldsymbol{v}(t+$ $T, x) \equiv \boldsymbol{v}(t, x))$ and that all the mappings over the time interval from $t_0$ to $t$ for it are defined everywhere. Prove that the transformations over the times that are multiples of $T$ form a group: $g_0^{k T}=A^k$ for any integer $k$. Which of the two following relations is true: $g_0^{k T+s}=A^k g_0^s, g_0^{k T+s}=g_0^s A^k$ ?
Answer. The second.

### Theorems on Continuous and Differentiable Dependence on a Parameter
Assume that the right-hand side of a given equation $\dot{x}=\boldsymbol{v}(t, x ; \alpha)$ depends smoothly on a parameter $\alpha$ ranging over some domain $A$ of the space $\boldsymbol{R}^a$.
The following corollary is a consequence of the fundamental Theorem 1 on rectification.
> [!cor]
> The value of the solution with initial condition $\displaystyle \varphi(t_{0})=x_{0}$ are an instant $t$ depends smoothly on the initial condition, the time, and the parmeter $\displaystyle \alpha$.

We denote this value by $\displaystyle \Phi(t_{0},x_{0};\alpha,t)$. The corollary asserts that the function $\displaystyle \Phi$ (with values in the phase space) is defined, continuous, and smooth in a neighborhood of each point $\displaystyle (t_{0},x_{0};\alpha_{0};t_{0})$ of the product of the extended phase space, the time axis, and the domain of variation of the parameter (it is of class $\displaystyle C^{r}$ if the right-hand side is of class $\displaystyle C^{r}$).

A small trick is useful here. Consider the "extended equation" $\displaystyle \dot{x}=\boldsymbol{v}(t,x;\alpha),\dot{\alpha}=0$ with phase space of dimension $\displaystyle m+a$ (where $\displaystyle m=\dim\{ x \}$). The soluion of this equation with initial condition $\displaystyle (t_{0},x_{0};\alpha_{0})$ is a pair ($\displaystyle x=\varphi(t),\alpha=\alpha_{0}$) whose first component $\displaystyle \varphi$ is the solution of the original equation for $\displaystyle \alpha=\alpha_{0}$ satisfying the initial condition $\displaystyle \varphi(t_{0})=x_{0}$. By Corollary $\displaystyle 4$ this pair depends smoothly on $\displaystyle (t_{0},x_{0};t;\alpha_{0})$. Consequently the first component also depends smoothly on these arguments, which was to be proved.

> This extension trick reduces the theorem on smooth dependence on the parameter to smooth dependence on the initial conditions. Conversely, given smooth dependence on the parameter (for a fixed initial condition), it is easy to deduce smooth dependence on the initial condition. It suffices to translate the equation so that the initial condition becomes the parameter $\displaystyle \boldsymbol{v}_{\alpha}(t,x)=\boldsymbol{v}(t,x-\alpha)$.


### Extension Theorems
The following corollary is an obvious consequence of the fundamental theorem on rectification.
> [!cor]
> Corollary 7. A solution with initial condition in a compact set in the extended phase space can be extended forward and backward to the boundary of the compact set.

> [!IMPORTANT]
> It is essential for the validity of the theorem that the direction field in the extended phase space be "nonvertical."

Proof of Corollary 7.
> 这就是蔓延的思想.

We begin by proving uniqueness. Consider the least upper bound of the time values at which two solutions with the same initial condition coincide. The solutions coincide to the left of this point. If both are defined at this point, then they coincide there also, since they are continuous. But then they must also coincide to the right of the point (by the local uniqueness theorem). Thus the point in question must be an endpoint of one of the intervals of definition. This proves uniqueness of the forward extension of the solution (for the backward extension the reasoning is similar). We now construct the extension.

The following result is an obvious consequence of Corollary 7 .

> [!cor]
> Corollary 8. A solution with initial condition in a given compact set $K$ in the phase space can be extended forward (resp. Backward) either indefinitely or to the boundary of the compact set $K$.


> [!cor]
> Corollary 9. $A$ solution of the autonomous equation $\dot{x}=\boldsymbol{v}(x)$ with initial value in any compact set of the phase space can be continued forward (resp. Backward) either infinitely far or to the boundary of the compact set.




