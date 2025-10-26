document.addEventListener("DOMContentLoaded", () => {
  const starfield = document.getElementById("starfield");
  const starfieldOverlay = document.getElementById("starfieldoverlay");

  const createStars = (container, numStars) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      fragment.appendChild(star);
    }
    container.appendChild(fragment);
  };

  createStars(starfield, 150);
  createStars(starfieldOverlay, 150);
});
