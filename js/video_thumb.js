document.addEventListener("DOMContentLoaded", () => {
  let activePlayer = null;

  const observerOptions = {
    root: null,
    threshold: 0.7, // Trigger when 60% of video is visible
  };

  // Auto-pause all teasers
  function pauseAllTeasers(except = null) {
    document.querySelectorAll(".slide video").forEach((video) => {
      if (video !== except) {
        video.pause();
      }
    });
  }

  // Intersection Observer to manage teaser video playback
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector("video");
      const hasIframe = !!entry.target.querySelector("iframe");

      if (!video || hasIframe) return; // Don't touch if Vimeo player is active

      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, observerOptions);

  // Set up all slides
  document.querySelectorAll(".slide").forEach((wrapper) => {
    const teaser = wrapper.querySelector("video");
    teaser.pause(); // Prevent autoplay
    observer.observe(wrapper); // Watch visibility

    wrapper.addEventListener("click", () => {
      if (activePlayer === wrapper) return;

      // Remove previous player
      if (activePlayer) {
        const prevTeaser = activePlayer.querySelector("video");
        const prevIframe = activePlayer.querySelector("iframe");
        if (prevIframe) prevIframe.remove();
        if (prevTeaser) {
          prevTeaser.classList.remove("hidden");
          prevTeaser.load(); // Reset and pause
        }
      }

      // Hide clicked teaser and insert Vimeo iframe
      teaser.classList.add("hidden");
      teaser.pause();

      const vimeoId = wrapper.getAttribute("data-vimeo");
      const iframe = document.createElement("iframe");
      iframe.className = "vd_thumb";
      iframe.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
      iframe.frameBorder = "0";
      iframe.allow = "autoplay; fullscreen";
      iframe.allowFullscreen = true;

      wrapper.appendChild(iframe);
      activePlayer = wrapper;

      // Pause all other teaser videos
      //   pauseAllTeasers(teaser);
    });
  });
});
