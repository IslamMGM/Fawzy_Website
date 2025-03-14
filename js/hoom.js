/////////////////////////////////////////////////////////
////////// number animation for views count/////////////
window.addEventListener("scroll", function () {
  function numberWithCommas(x) {
    return "+ " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const gotoElement = document.querySelector(".views_count");
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
// /////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
////////// number animation for videos count/////////////
document.addEventListener("scroll", function () {
  const videosTarget = document.querySelector(".videos_number");
  const videosTargetPosition = videosTarget.getBoundingClientRect().top;
  const videosScreenPosition = window.innerHeight;

  // Check if the element is in the viewport
  if (videosTargetPosition < videosScreenPosition) {
    // Remove the event listener to prevent multiple triggers
    document.removeEventListener("scroll", arguments.callee);

    // Start the counting animation
    videosAnimateCount(videosTarget);
  }
});

function videosAnimateCount(videosElement) {
  const videosTargetNumber = parseInt(
    videosElement.textContent.replace("+", ""),
    10
  ); // Extract the target number (e.g., 6)
  const videosDuration = 1300; // Animation duration in milliseconds
  const videosIncrement = videosTargetNumber / (videosDuration / 16); // 16ms is roughly one frame

  let videosCurrentNumber = 0;

  const videosInterval = setInterval(() => {
    videosCurrentNumber += videosIncrement;
    if (videosCurrentNumber >= videosTargetNumber) {
      clearInterval(videosInterval);
      videosCurrentNumber = videosTargetNumber;
    }

    // Format the number with a leading zero if necessary
    const videosFormattedNumber = `+${Math.floor(videosCurrentNumber)
      .toString()
      .padStart(2, "0")}`;
    videosElement.textContent = videosFormattedNumber;
  }, 16);
}
// /////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
////////// number animation for dowl count/////////////
document.addEventListener("scroll", function () {
  const dowlTarget = document.querySelector(".dowl_count");
  const dowlTargetPosition = dowlTarget.getBoundingClientRect().top;
  const dowlScreenPosition = window.innerHeight;

  // Check if the element is in the viewport
  if (dowlTargetPosition < dowlScreenPosition) {
    // Remove the event listener to prevent multiple triggers
    document.removeEventListener("scroll", arguments.callee);

    // Start the counting animation
    dowlAnimateCount(dowlTarget);
  }
});

function dowlAnimateCount(dowlElement) {
  const dowlTargetNumber = parseInt(
    dowlElement.textContent.replace("+", ""),
    10
  ); // Extract the target number (e.g., 6)
  const dowlDuration = 800; // Animation duration in milliseconds
  const dowlIncrement = dowlTargetNumber / (dowlDuration / 16); // 16ms is roughly one frame

  let dowlCurrentNumber = 0;

  const dowlInterval = setInterval(() => {
    dowlCurrentNumber += dowlIncrement;
    if (dowlCurrentNumber >= dowlTargetNumber) {
      clearInterval(dowlInterval);
      dowlCurrentNumber = dowlTargetNumber;
    }

    // Format the number with a leading zero if necessary
    const dowlFormattedNumber = `+${Math.floor(dowlCurrentNumber)
      .toString()
      .padStart(2, "0")}`;
    dowlElement.textContent = dowlFormattedNumber;
  }, 16);
}
// /////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
////////// number animation for 3meel count/////////////
document.addEventListener("scroll", function () {
  const omlaTarget = document.querySelector(".omla_count");
  const omlaTargetPosition = omlaTarget.getBoundingClientRect().top;
  const omlaScreenPosition = window.innerHeight;

  // Check if the element is in the viewport
  if (omlaTargetPosition < omlaScreenPosition) {
    // Remove the event listener to prevent multiple triggers
    document.removeEventListener("scroll", arguments.callee);

    // Start the counting animation
    omlaAnimateCount(omlaTarget);
  }
});

function omlaAnimateCount(omlaElement) {
  const omlaTargetNumber = parseInt(
    omlaElement.textContent.replace("+", ""),
    10
  ); // Extract the target number (e.g., 6)
  const omlaDuration = 500; // Animation duration in milliseconds
  const omlaIncrement = omlaTargetNumber / (omlaDuration / 16); // 16ms is roughly one frame

  let omlaCurrentNumber = 0;

  const omlaInterval = setInterval(() => {
    omlaCurrentNumber += omlaIncrement;
    if (omlaCurrentNumber >= omlaTargetNumber) {
      clearInterval(omlaInterval);
      omlaCurrentNumber = omlaTargetNumber;
    }

    // Format the number with a leading zero if necessary
    const omlaFormattedNumber = `+${Math.floor(omlaCurrentNumber)
      .toString()
      .padStart(2, "0")}`;
    omlaElement.textContent = omlaFormattedNumber;
  }, 16);
}
// /////////////////////////////////////////////////////////////////////////////////////////
// ///////// pause the videos slider when hovering any slide /////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".slide");

  // Pause on hover for individual slides
  slides.forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
      carouselTrack.style.animationPlayState = "paused";
    });

    slide.addEventListener("mouseleave", () => {
      carouselTrack.style.animationPlayState = "running";
    });
  });
});
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
// ///////// pause the logos slider when hovering any slide /////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.querySelector(".logos_carousel-track");
  const logos_slide = document.querySelectorAll(".logos_slide");

  // Pause on hover for individual slides
  logos_slide.forEach((slide_logo) => {
    slide_logo.addEventListener("mouseenter", () => {
      carouselTrack.style.animationPlayState = "paused";
    });

    slide_logo.addEventListener("mouseleave", () => {
      carouselTrack.style.animationPlayState = "running";
    });
  });
});
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
// ///////// pause the second logos slider when hovering any slide /////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack_left = document.querySelector(
    ".logos_carousel-track_left"
  );
  const logos_slide_left = document.querySelectorAll(".logos_slide_left");

  // Pause on hover for individual slides
  logos_slide_left.forEach((slide_logo_left) => {
    slide_logo_left.addEventListener("mouseenter", () => {
      carouselTrack_left.style.animationPlayState = "paused";
    });

    slide_logo_left.addEventListener("mouseleave", () => {
      carouselTrack_left.style.animationPlayState = "running";
    });
  });
});
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
