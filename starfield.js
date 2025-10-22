document.addEventListener("DOMContentLoaded", () => {
  const createStars = (container, numStars) => {
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(star);
    }
  };

  createStars(document.getElementById("starfield"), 150);
  createStars(document.getElementById("starfieldoverlay"), 150);
});