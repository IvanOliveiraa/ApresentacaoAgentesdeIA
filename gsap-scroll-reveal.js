document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animação de seções
  gsap.utils.toArray(".section").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  });

  // Animação de cards com stagger
  gsap.utils.toArray(".cards-grid").forEach((grid) => {
    gsap.to(grid.querySelectorAll(".card"), {
      scrollTrigger: {
        trigger: grid,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  });

  // animação impact boxes
  gsap.utils.toArray(".impact-box").forEach((box) => {
    const direction = box.classList.contains("positive") ? -50 : 50;

    gsap.from(box, {
      scrollTrigger: {
        trigger: ".impact-grid",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: direction,
      duration: 1.2,
      ease: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    });
  });
});