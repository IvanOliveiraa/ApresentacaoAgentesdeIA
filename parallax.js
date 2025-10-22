document.addEventListener('DOMContentLoaded', () => {
  const heroHeight = window.innerHeight;
  const robotLeftLayer = document.querySelector('.robot-left-layer');
  const robotRightLayer = document.querySelector('.robot-right-layer');
  const heroContent = document.querySelector('.hero-content');

  let ticking = false;

  function updateParallax() {
    const scrollPosition = window.scrollY;
    const scrollRatio = Math.min(scrollPosition / heroHeight, 1);

    // Opacidade
    const opacity = 1 - scrollRatio;

    // Movimento
    const yOffset = -(scrollRatio * 400);
    const xOffset = scrollRatio * 400;

    if (heroContent) {
      heroContent.style.opacity = opacity;
    }

    if (robotLeftLayer) {
      robotLeftLayer.style.opacity = opacity;
      robotLeftLayer.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
    }

    if (robotRightLayer) {
      robotRightLayer.style.opacity = opacity;
      robotRightLayer.style.transform = `translate3d(${-xOffset}px, ${yOffset}px, 0)`;
    }

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  updateParallax();
});