/////////////////////////////////////////////////////////
////////// number animation for views count/////////////
// window.addEventListener("scroll", function () {
//   function numberWithCommas(x) {
//     return "+ " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }

//   const countElement = document.querySelector(".views_count");

//   if (!countElement) return;

//   const rect = countElement.getBoundingClientRect();
//   const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

//   if (isVisible) {
//     if (!countElement.classList.contains("animated")) {
//       let start = 0;
//       let end = parseInt(countElement.textContent.replace(/[^0-9]/g, ""), 10);
//       let duration = 1500;
//       let startTime = null;

//       function animateCount(timestamp) {
//         if (!startTime) startTime = timestamp;
//         let progress = timestamp - startTime;
//         let current = Math.min(start + (progress / duration) * end, end);
//         countElement.textContent = numberWithCommas(Math.ceil(current));
//         if (progress < duration) {
//           requestAnimationFrame(animateCount);
//         }
//       }

//       requestAnimationFrame(animateCount);
//       countElement.classList.add("animated");
//     }
//   } else {
//     // Reset the flag so it can animate again
//     countElement.classList.remove("animated");
//   }
// });
// Initialize Odometer
var odometer2 = new Odometer({
  el: document.querySelector(".odometer2"),
  value: 0, // Start value
  theme: "minimal",
});

// Function to reset and animate the odometer
function animateOdometer() {
  odometer2.update(0); // Reset to initial value
  setTimeout(() => {
    odometer2.update(100000000); // Animate to final value
  }, 50); // Small delay to allow reset to complete
}

// Set up Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateOdometer();
        observer.unobserve(entry.target); // Stop observing after first trigger
      }
    });
  },
  {
    threshold: 0.5, // Trigger when at least 50% of the element is visible
  }
);

// Observe the odometer element
const odometerElement = document.querySelector(".odometer2");
if (odometerElement) {
  observer.observe(odometerElement);
}
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
// document.addEventListener("DOMContentLoaded", () => {
//   const carouselTrack = document.querySelector(".logos_carousel-track");
//   const logos_slide = document.querySelectorAll(".logos_slide");

//   // Pause on hover for individual slides
//   logos_slide.forEach((slide_logo) => {
//     slide_logo.addEventListener("mouseenter", () => {
//       carouselTrack.style.animationPlayState = "paused";
//     });

//     slide_logo.addEventListener("mouseleave", () => {
//       carouselTrack.style.animationPlayState = "running";
//     });
//   });
// });
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
// ///////// pause the second logos slider when hovering any slide /////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", () => {
//   const carouselTrack_left = document.querySelector(
//     ".logos_carousel-track_left"
//   );
//   const logos_slide_left = document.querySelectorAll(".logos_slide_left");

//   // Pause on hover for individual slides
//   logos_slide_left.forEach((slide_logo_left) => {
//     slide_logo_left.addEventListener("mouseenter", () => {
//       carouselTrack_left.style.animationPlayState = "paused";
//     });

//     slide_logo_left.addEventListener("mouseleave", () => {
//       carouselTrack_left.style.animationPlayState = "running";
//     });
//   });
// });
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////// pixel for contact /////////////////
let buttons_contact = document.querySelectorAll(".pixel-btn_contact");
buttons_contact.forEach((button_contact) => {
  let pixelContainer_contact = button_contact.querySelector(
    ".pixel-container_contact"
  );
  let pixSize_contact = 10;
  let btnWidth_contact = button_contact.offsetWidth;
  let btnheight_contact = button_contact.offsetHeight;

  let cols_contact = Math.floor(btnWidth_contact / pixSize_contact);
  let rows_contact = Math.floor(btnheight_contact / pixSize_contact);

  for (let row_contact = 0; row_contact < rows_contact; row_contact++) {
    for (let col_contact = 0; col_contact < cols_contact; col_contact++) {
      let pixel_contact = document.createElement("div");
      pixel_contact.classList.add("pixel_contact");
      pixel_contact.style.left = `${col_contact * pixSize_contact}px`;
      pixel_contact.style.top = `${row_contact * pixSize_contact}px`;

      let delay_contact = Math.random() * 0.5;
      pixel_contact.style.transitionDelay = `${delay_contact}s`;

      let tx_contact = (Math.random() - 0.5) * 30;
      let ty_contact = (Math.random() - 0.5) * 30;

      pixel_contact.style.setProperty(`--tx`, `${tx_contact}px`);
      pixel_contact.style.setProperty(`--ty`, `${ty_contact}px`);

      pixelContainer_contact.appendChild(pixel_contact);
    }
  }
});
