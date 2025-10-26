document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animação de seções
  gsap.utils.toArray(".section").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });
  });

  // Animação de cards
  gsap.utils.toArray(".cards-grid").forEach((grid) => {
    gsap.to(grid.querySelectorAll(".card"), {
      scrollTrigger: {
        trigger: grid,
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    });
  });

  // Animação de impact boxes
  gsap.utils.toArray(".impact-box").forEach((box) => {
    const direction = box.classList.contains("positive") ? -50 : 50;
    gsap.from(box, {
      scrollTrigger: {
        trigger: ".impact-grid",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      },
      opacity: 0,
      x: direction,
      duration: 1.2,
      ease: "cubic-bezier(0.2, 0.8, 0.2, 1)"
    });
  });

  // Animação do background final
  const finalSection = document.querySelector(".section-final");
  if (finalSection) {
    ScrollTrigger.create({
      trigger: finalSection,
      start: "top 60%",
      end: "bottom top",
      onEnter: () => finalSection.classList.add("visible"),
      onLeave: () => finalSection.classList.remove("visible"),
      onEnterBack: () => finalSection.classList.add("visible"),
      onLeaveBack: () => finalSection.classList.remove("visible")
    });
  }
});
