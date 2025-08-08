document.querySelectorAll(".slide_video_slider").forEach((slide) => {
  const video = slide.querySelector("video");
  const loader = slide.querySelector(".video_loader");

  let loaderTimeout;

  const hideLoader = () => {
    clearTimeout(loaderTimeout);
    loader.style.display = "none";
  };

  if (video.readyState >= 4) {
    hideLoader();
  } else {
    loaderTimeout = setTimeout(() => {
      loader.style.display = "flex";
    }, 300);

    video.addEventListener("canplaythrough", hideLoader);
    video.addEventListener("loadeddata", hideLoader);

    video.addEventListener("error", () => {
      clearTimeout(loaderTimeout);
      loader.innerHTML =
        '<span style="color:red;">❌ Failed to load video</span>';
      loader.style.display = "flex";
    });
  }
});
