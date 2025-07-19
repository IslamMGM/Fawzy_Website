document.addEventListener("DOMContentLoaded", () => {
  // === CLONE ORIGINAL VIDEO TRACK ===
  const originalVideoTrack_video_slider = document.getElementById(
    "original-video-track_video_slider"
  );
  const clonedVideoTrack_video_slider = document.getElementById(
    "cloned-video-track_video_slider"
  );

  if (originalVideoTrack_video_slider && clonedVideoTrack_video_slider) {
    Array.from(originalVideoTrack_video_slider.children).forEach(
      (slide_video_slider) => {
        const clone_video_slider = slide_video_slider.cloneNode(true);
        clonedVideoTrack_video_slider.appendChild(clone_video_slider);
      }
    );
  }

  // === VIDEO BEHAVIOR ===
  const track_video_slider = document.querySelector(
    ".carousel-track_video_slider"
  );
  const overlay_video_slider = document.getElementById("overlay_video_slider");
  const carouselTracks_video_slider = document.querySelectorAll(
    ".carousel-track_video_slider"
  );
  let paused_video_slider = false;
  let activePlayer_video_slider = null;
  let centeredSlide_video_slider = null;
  let originalParent_video_slider = null;
  let originalNextSibling_video_slider = null;

  // Function to pause all animations
  function pauseAnimations_video_slider() {
    carouselTracks_video_slider.forEach((track_video_slider) => {
      track_video_slider.classList.add("paused_video_slider");
      track_video_slider.style.animationPlayState = "paused";
    });
  }

  // Function to resume all animations
  function resumeAnimations_video_slider() {
    carouselTracks_video_slider.forEach((track_video_slider) => {
      track_video_slider.classList.remove("paused_video_slider");
      track_video_slider.style.animationPlayState = "running";
    });
  }

  // Function to center a slide and immediately play video
  function centerSlideAndPlay_video_slider(slide_video_slider) {
    if (centeredSlide_video_slider) return; // Prevent multiple centered slides

    centeredSlide_video_slider = slide_video_slider;
    originalParent_video_slider = slide_video_slider.parentNode;
    originalNextSibling_video_slider = slide_video_slider.nextSibling;

    // Add centered class and show overlay
    slide_video_slider.classList.add("centered_video_slider");
    overlay_video_slider.classList.add("active_video_slider");

    // Pause animations
    pauseAnimations_video_slider();

    // Move slide to body to ensure it's on top
    document.body.appendChild(slide_video_slider);

    // Immediately handle video/iframe logic
    const teaser_video_slider = slide_video_slider.querySelector("video");

    if (
      activePlayer_video_slider &&
      activePlayer_video_slider !== slide_video_slider
    ) {
      const prevTeaser_video_slider =
        activePlayer_video_slider.querySelector("video");
      const prevIframe_video_slider =
        activePlayer_video_slider.querySelector("iframe");
      if (prevIframe_video_slider) prevIframe_video_slider.remove();
      if (prevTeaser_video_slider) {
        prevTeaser_video_slider.classList.remove("hidden_video_slider");
        prevTeaser_video_slider.load();
      }
    }

    if (teaser_video_slider) {
      teaser_video_slider.classList.add("hidden_video_slider");
      teaser_video_slider.pause();
    }

    const vimeoId_video_slider = slide_video_slider.getAttribute("data-vimeo");
    if (vimeoId_video_slider) {
      const iframe_video_slider = document.createElement("iframe");
      iframe_video_slider.className = "vd_thumb_video_slider";
      iframe_video_slider.src = `https://player.vimeo.com/video/${vimeoId_video_slider}?autoplay=1`;
      iframe_video_slider.frameBorder = "0";
      iframe_video_slider.allow = "fullscreen";
      iframe_video_slider.allowFullscreen = true;
      slide_video_slider.appendChild(iframe_video_slider);
      activePlayer_video_slider = slide_video_slider;
    }
  }

  // Function to uncenter slide
  function uncenterSlide_video_slider() {
    if (!centeredSlide_video_slider) return;

    const slide_video_slider = centeredSlide_video_slider;

    // Clean up iframe and restore video
    const iframe_video_slider = slide_video_slider.querySelector("iframe");
    const teaser_video_slider = slide_video_slider.querySelector("video");
    if (iframe_video_slider) iframe_video_slider.remove();
    if (teaser_video_slider) {
      teaser_video_slider.classList.remove("hidden_video_slider");
      teaser_video_slider.load();
    }

    // Remove centered class and hide overlay
    slide_video_slider.classList.remove("centered_video_slider");
    overlay_video_slider.classList.remove("active_video_slider");

    // Move slide back to original position
    if (originalNextSibling_video_slider) {
      originalParent_video_slider.insertBefore(
        slide_video_slider,
        originalNextSibling_video_slider
      );
    } else {
      originalParent_video_slider.appendChild(slide_video_slider);
    }

    // Resume animations - Force restart the animation
    resumeAnimations_video_slider();

    // Reset variables
    centeredSlide_video_slider = null;
    originalParent_video_slider = null;
    originalNextSibling_video_slider = null;
    activePlayer_video_slider = null;
  }

  // Pause animation on hover (only when not centered)
  document
    .querySelectorAll(".slide_video_slider")
    .forEach((slide_video_slider) => {
      slide_video_slider.addEventListener("mouseenter", () => {
        if (!centeredSlide_video_slider) {
          carouselTracks_video_slider.forEach(
            (track_video_slider) =>
              (track_video_slider.style.animationPlayState = "paused")
          );
        }
      });
      slide_video_slider.addEventListener("mouseleave", () => {
        if (!centeredSlide_video_slider) {
          carouselTracks_video_slider.forEach(
            (track_video_slider) =>
              (track_video_slider.style.animationPlayState = "running")
          );
        }
      });
    });

  // Click anywhere on body to uncenter (except on slides)
  document.body.addEventListener("click", (e_video_slider) => {
    // Check if click is on a slide or its children
    const clickedSlide_video_slider = e_video_slider.target.closest(
      ".slide_video_slider"
    );
    if (!clickedSlide_video_slider && centeredSlide_video_slider) {
      uncenterSlide_video_slider();
    }
  });

  // Escape key to uncenter
  document.addEventListener("keydown", (e_video_slider) => {
    if (e_video_slider.key === "Escape" && centeredSlide_video_slider) {
      uncenterSlide_video_slider();
    }
  });

  // Set up IntersectionObserver
  let thresholdValue_video_slider = window.innerWidth <= 768 ? 0.001 : 0.001;

  const observerOptions_video_slider = {
    root: null,
    threshold: thresholdValue_video_slider,
  };

  const observer_video_slider = new IntersectionObserver(
    (entries_video_slider) => {
      entries_video_slider.forEach((entry_video_slider) => {
        const video_video_slider =
          entry_video_slider.target.querySelector("video");
        const hasIframe_video_slider =
          !!entry_video_slider.target.querySelector("iframe");
        if (!video_video_slider || hasIframe_video_slider) return;
        if (
          entry_video_slider.isIntersecting &&
          !entry_video_slider.target.classList.contains("centered_video_slider")
        ) {
          video_video_slider.play().catch(() => {});
        } else {
          video_video_slider.pause();
        }
      });
    },
    observerOptions_video_slider
  );

  // Function to setup slide click behavior
  function setupSlideClick_video_slider(slide_video_slider) {
    slide_video_slider.addEventListener("click", (e_video_slider) => {
      e_video_slider.stopPropagation();

      // If this slide is not centered, center it and play video immediately
      if (!slide_video_slider.classList.contains("centered_video_slider")) {
        centerSlideAndPlay_video_slider(slide_video_slider);
      }
      // If it's already centered, do nothing (video is already playing)
    });
  }

  // Observe all slides and setup click behavior
  document
    .querySelectorAll(".slide_video_slider")
    .forEach((slide_video_slider) => {
      const teaser_video_slider = slide_video_slider.querySelector("video");
      if (teaser_video_slider) {
        teaser_video_slider.pause();
        observer_video_slider.observe(slide_video_slider);
      }
      setupSlideClick_video_slider(slide_video_slider);
    });

  // Re-observe cloned slides after they're created
  setTimeout(() => {
    document
      .querySelectorAll("#cloned-video-track_video_slider .slide_video_slider")
      .forEach((slide_video_slider) => {
        const teaser_video_slider = slide_video_slider.querySelector("video");
        if (teaser_video_slider) {
          observer_video_slider.observe(slide_video_slider);
        }
        setupSlideClick_video_slider(slide_video_slider);
      });
  }, 100);
});
