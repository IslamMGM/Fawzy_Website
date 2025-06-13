document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".logos_carousel-track");
  let offset = 0;
  const speed = 100; // pixels per second (adjust as needed)
  let paused = false;

  const slides = Array.from(track.children);
  let slideWidth = slides[0].offsetWidth + 150; // width + gap
  const totalSlides = slides.length;

  // Duplicate slides for seamless loop
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });

  // Handle screen resize to recalculate width
  window.addEventListener("resize", () => {
    slideWidth = slides[0].offsetWidth + 150;
  });

  let lastTime = null;

  function scrollLoop(currentTime) {
    if (!lastTime) lastTime = currentTime; // initialize at first frame
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    if (!paused) {
      const distance = speed * (deltaTime / 1000); // pixels per second
      offset -= distance;

      if (Math.abs(offset) >= slideWidth * totalSlides) {
        offset = 0;
      }

      track.style.transform = `translate3d(${offset}px, 0, 0)`; // GPU acceleration
    }

    requestAnimationFrame(scrollLoop);
  }

  requestAnimationFrame(scrollLoop);
});
