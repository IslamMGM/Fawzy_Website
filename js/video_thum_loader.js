document.querySelectorAll(".videos_thum").forEach((source) => {
  const video = source.closest("video");
  const slide = source.closest(".slide_video_slider");

  if (!video || !slide) return;

  const loader = slide.querySelector(".video_loader");
  const videoSrc = source.getAttribute("src");

  const storageKey = `video_loader_shown_${videoSrc}`;

  const alreadyLoaded = sessionStorage.getItem(storageKey) === "true";

  const hideLoader = () => {
    loader.style.display = "none";
    sessionStorage.setItem(storageKey, "true");
  };

  if (alreadyLoaded || video.readyState >= 3) {
    hideLoader();
    return;
  }

  let loaderTimeout = setTimeout(() => {
    if (video.readyState < 3) {
      loader.style.display = "flex";
    }
  }, 100);

  const handleLoad = () => {
    clearTimeout(loaderTimeout);
    hideLoader();
  };

  video.addEventListener("canplay", handleLoad, { once: true });
  video.addEventListener("loadeddata", handleLoad, { once: true });
  video.addEventListener("playing", handleLoad, { once: true });

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
