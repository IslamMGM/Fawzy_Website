window.addEventListener("scroll", function () {
  function numberWithCommas(x) {
    return x.toString();
  }

  const gotoElement = document.querySelector(".wave_box");
  const countElements = document.querySelectora(".views_count");

  // Check if the element is in view and remove the 'animated' class if it goes out of view
  // if (gotoElement.getBoundingClientRect().top > window.innerHeight) {
  //   gotoElement.classList.remove("animated");
  // }

  if (
    gotoElement.getBoundingClientRect().top <= window.innerHeight &&
    !gotoElement.classList.contains("animated")
  ) {
    countElements.forEach(function (element) {
      let start = 0;
      let end = parseInt(element.textContent.replace(/,/g, ""), 10);
      let duration = 3000;
      let startTime = null;

      function animateCount(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let current = Math.min(start + (progress / duration) * end, end);
        element.textContent = numberWithCommas(Math.ceil(current));
        if (progress < duration) {
          requestAnimationFrame(animateCount);
        }
      }

      requestAnimationFrame(animateCount);
    });
    gotoElement.classList.add("animated");
  }
});
