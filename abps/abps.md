---
layout: default
---

## Active Brownian Particles

Active Brownian particles (ABPs) are microscopic entities with self-propulsion capabilities, in contrast to passive
Brownian particles subject only to random thermal forces. These particles exhibit autonomous motion due to
sources like chemical reactions or external fields. ABPs’ interplay between self-propulsion and Brownian motion
leads to complex collective behaviors and patterns, making them a crucial focus in studying non-equilibrium systems and their applications in diverse fields, from biology to materials science and robotics.

ABPs can be modelled using Langevin equations with both translational and rotational noise the following way, 

$$
\begin{cases}
  \dot{\textbf{r}} = v_0(\textbf{r}) \hat{\nu}(\theta) + \sqrt{2D}\boldsymbol{\eta} (t)\\
  \dot{\theta} = \sqrt{2 D_r}\chi(t),
\end{cases}
$$

where $v_0(\textbf{r})$ is the self-propulsion velocity (that may or may not depend on the particles position), where $D$ and $D_r$ are respectively the translational and rotational diffusion coefficients, and where $\boldsymbol{eta}(t)$ and $\chi(t)$ represent Gaussian white noise with unity variance. Here, $\hat{\nu}(\theta) = (\cos \theta, \sin \theta)^T$ is the polar vector of the particle. Note how the rotational noise induces changes in the translational dynamics of each particle through the self-propulsion velocity and the particle's polar vector.


[Home](/adriagarces.github.io/)
