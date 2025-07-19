document.addEventListener("DOMContentLoaded", () => {
  const originalTrack = document.getElementById("original-track");
  const clonedTrack = document.getElementById("cloned-track");
  //////
  if (originalTrack && clonedTrack) {
    Array.from(originalTrack.children).forEach((slide) => {
      const clone = slide.cloneNode(true); // true for deep clone (all children)
      clonedTrack.appendChild(clone);
    });
  }
});
