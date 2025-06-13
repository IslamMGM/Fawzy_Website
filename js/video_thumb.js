document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  let offset = 0;
  const speed = 100; // pixels per second (adjust as needed)
  let paused = false;
  let activePlayer = null;

  const slides = Array.from(track.children);
  let slideWidth = slides[0].offsetWidth + 100; // width + gap
  const totalSlides = slides.length;

  // Duplicate slides for seamless loop
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });

  // Handle screen resize to recalculate width
  window.addEventListener("resize", () => {
    slideWidth = slides[0].offsetWidth + 100;
  });

  let lastTime = performance.now();

  function scrollLoop(currentTime) {
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

  //////////////////////////// Pause on hover//////////////////////
  /////////////////////////////////////////////////////////////
  //   track.parentElement.addEventListener("mouseenter", () => (paused = true));
  //   track.parentElement.addEventListener("mouseleave", () => (paused = false));
  document.querySelectorAll(".slide").forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
      paused = true;
    });
    slide.addEventListener("mouseleave", () => {
      paused = false;
    });
  });

  requestAnimationFrame(scrollLoop);

  // Intersection Observer to pause/play videos
  const observerOptions = {
    root: null,
    threshold: 0.7,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector("video");
      const hasIframe = !!entry.target.querySelector("iframe");
      if (!video || hasIframe) return;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, observerOptions);

  document.querySelectorAll(".slide").forEach((slide) => {
    const teaser = slide.querySelector("video");
    teaser.pause();
    observer.observe(slide);

    slide.addEventListener("click", () => {
      if (activePlayer === slide) return;

      // Remove previous iframe
      if (activePlayer) {
        const prevTeaser = activePlayer.querySelector("video");
        const prevIframe = activePlayer.querySelector("iframe");
        if (prevIframe) prevIframe.remove();
        if (prevTeaser) {
          prevTeaser.classList.remove("hidden");
          prevTeaser.load();
        }
      }

      teaser.classList.add("hidden");
      teaser.pause();

      const vimeoId = slide.getAttribute("data-vimeo");
      const iframe = document.createElement("iframe");
      iframe.className = "vd_thumb";
      iframe.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
      iframe.frameBorder = "0";
      iframe.allow = "autoplay; fullscreen";
      iframe.allowFullscreen = true;
      slide.appendChild(iframe);
      activePlayer = slide;
    });
  });
});
