window.addEventListener("scroll", function () {
  function numberWithCommas(x) {
    return "+ " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const gotoElement = document.querySelector(".wave_box");
  const countElement = document.querySelector(".views_count");

  if (
    gotoElement &&
    countElement &&
    gotoElement.getBoundingClientRect().top <= window.innerHeight &&
    !gotoElement.classList.contains("animated")
  ) {
    let start = 0;
    let end = parseInt(countElement.textContent.replace(/[^0-9]/g, ""), 10);
    let duration = 1500;
    let startTime = null;

    function animateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let current = Math.min(start + (progress / duration) * end, end);
      countElement.textContent = numberWithCommas(Math.ceil(current));
      if (progress < duration) {
        requestAnimationFrame(animateCount);
      }
    }

    requestAnimationFrame(animateCount);
    gotoElement.classList.add("animated");
  }
});
