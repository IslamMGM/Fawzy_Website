document.querySelectorAll(".videos_thum").forEach((source) => {
  const video = source.closest("video");
  const slide = source.closest(".slide_video_slider");

  if (!video || !slide) return;

  const loader = slide.querySelector(".video_loader");

  // If video is already loaded (enough to play), hide loader
  if (video.readyState >= 3) {
    loader.style.display = "none";
    return;
  }

  // Setup: loader hidden initially, shown only after 100ms if not ready
  let loaderTimeout = setTimeout(() => {
    loader.style.display = "flex";
  }, 100);

  // When video can play, hide the loader
  const hideLoader = () => {
    clearTimeout(loaderTimeout);
    loader.style.display = "none";
  };

  video.addEventListener("canplay", hideLoader, { once: true });
  video.addEventListener("loadeddata", hideLoader, { once: true });
  video.addEventListener("playing", hideLoader, { once: true });

  video.addEventListener(
    "error",
    () => {
      clearTimeout(loaderTimeout);
      loader.innerHTML =
        '<span style="color:red;">❌ Failed to load video</span>';
      loader.style.display = "flex";
    },
    { once: true }
  );
});
