document.addEventListener("DOMContentLoaded", () => {
  const originalTrackLeft = document.getElementById("original-track-left");
  const clonedTrackLeft = document.getElementById("cloned-track-left");

  if (originalTrackLeft && clonedTrackLeft) {
    Array.from(originalTrackLeft.children).forEach((slide) => {
      const clone = slide.cloneNode(true); // true for deep clone (all children)
      clonedTrackLeft.appendChild(clone);
    });
  }
});
