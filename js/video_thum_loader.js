document.querySelectorAll(".videos_thum").forEach((source) => {
  const video = source.closest("video");
  const slide = source.closest(".slide_video_slider");

  if (!video || !slide) return;

  const loader = slide.querySelector(".video_loader");
  const videoSrc = source.getAttribute("src");

  // استخدم key في sessionStorage لتحديد إذا كان اللودر اتعرض قبل كده
  const storageKey = `video_loader_shown_${videoSrc}`;

  // لو الفيديو اتحمل خلاص أو اللودر ظهر له قبل كده → خفيه فورًا
  const alreadyLoaded = sessionStorage.getItem(storageKey) === "true";

  const hideLoader = () => {
    loader.style.display = "none";
    sessionStorage.setItem(storageKey, "true");
  };

  if (alreadyLoaded || video.readyState >= 3) {
    hideLoader();
    return;
  }

  // ✅ أمان إضافي: تأكد أن اللودر يظهر فقط لو الفيديو فعليًا مش جاهز
  let loaderTimeout = setTimeout(() => {
    if (video.readyState < 3) {
      loader.style.display = "flex";
    }
  }, 100);

  // لما يتحمل الفيديو، نخفي اللودر ونحفظ الحالة
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
