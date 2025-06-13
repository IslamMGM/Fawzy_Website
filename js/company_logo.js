document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".logos_carousel-track");
  const speed = 100;
  let offset = 0;
  let paused = false;

  const slides = Array.from(track.children);
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });

  // Wait for all images and layout to be ready
  window.addEventListener("load", () => {
    const singleSetWidth = track.scrollWidth / 2; // REAL width of one set
    let lastTime = null;

    function scrollLoop(currentTime) {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (!paused) {
        const distance = speed * (deltaTime / 1000);
        offset -= distance;

        if (Math.abs(offset) >= singleSetWidth) {
          offset += singleSetWidth;
        }

        track.style.transform = `translate3d(${Math.floor(offset)}px, 0, 0)`;
      }

      requestAnimationFrame(scrollLoop);
    }

    requestAnimationFrame(scrollLoop);
  });
});
