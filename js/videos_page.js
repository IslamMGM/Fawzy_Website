// Get the elements
const toggleButton = document.querySelector(".a3maly_link_mobile");
const dropdownMenu = document.querySelector(".dropdown-menu_mobile");
const a3maly_mobile = document.querySelector(".a3maly_mobile");

// Toggle on click
toggleButton.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownMenu.classList.toggle("active");
  a3maly_mobile.classList.toggle("active_a3maly_mobile");
});

// Close on clicking outside
document.addEventListener("click", function (e) {
  if (dropdownMenu.classList.contains("active")) {
    dropdownMenu.classList.remove("active");
    a3maly_mobile.classList.remove("active_a3maly_mobile");
  }
});
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////// shorts //////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
document.querySelectorAll(".thumbnail_js").forEach((img) => {
  img.addEventListener("click", function (e) {
    e.stopPropagation();

    const currentCard = this.closest(".card_js");

    // Play the video iframe under this thumbnail
    const iframe = currentCard.querySelector("iframe");
    if (iframe) {
      const player = new Vimeo.Player(iframe);
      player.play().catch((error) => {
        console.warn("Vimeo play error:", error.name);
      });
    }

    // Show all other thumbnails
    document.querySelectorAll(".thumbnail_js").forEach((otherImg) => {
      if (otherImg !== this) {
        otherImg.style.display = "block";
        setTimeout(() => {
          otherImg.classList.remove("disappear");
        }, 10);
      }
    });

    // Remove hidden class from all cards
    document.querySelectorAll(".card_js").forEach((card) => {
      card.classList.remove("hide-before", "before-hidden");
    });

    // Animate and hide clicked thumbnail
    this.classList.add("disappear");
    currentCard.classList.add("hide-before");

    setTimeout(() => {
      this.style.display = "none";
      currentCard.classList.add("before-hidden");
    }, 500);
  });
});

// Click anywhere in body to restore all
document.body.addEventListener("click", function () {
  // Show all thumbnail images again
  document.querySelectorAll(".thumbnail_js").forEach((img) => {
    img.style.display = "block";
    setTimeout(() => {
      img.classList.remove("disappear");
    }, 10);
  });

  // Reset all card classes
  document.querySelectorAll(".card_js").forEach((card) => {
    card.classList.remove("hide-before", "before-hidden");
  });

  // Pause all Vimeo videos
  document.querySelectorAll("iframe").forEach((iframe) => {
    const player = new Vimeo.Player(iframe);
    player.pause().catch((error) => {
      console.warn("Vimeo pause error:", error.name);
    });
  });
});

// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////
// Initialize all Vimeo players on the page
// document.querySelectorAll(".vimeo_player").forEach((iframe) => {
//   const player = new Vimeo.Player(iframe);

//   player.on("play", function () {
//     player.setVolume(1).catch((error) => {
//       console.error("Volume set failed:", error);
//     });
//   });

//   // Optional: Set initial volume in case of browser restrictions
//   player.setVolume(0.01).catch(() => {});
// });

// ///////////////////////////////////////////////////////////////
// //////////////////// floating menu ///////////////////////////
const menuToggle = document.getElementById("menuToggle");
const menuBox = document.querySelector(".float_menu_box");
const subs = document.querySelector(".subs");
const subLinks = document.querySelectorAll(".sub-circle");
const thumbnail_js_to_closeMenu = document.querySelectorAll(".thumbnail_js");

// Toggle menu when clicking the menu button
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent bubbling
  menuBox.classList.toggle("active");
  menuToggle.classList.toggle("active");
  subs.classList.toggle("active");
});

// Function to close the menu
function closeMenu() {
  menuBox.classList.remove("active");
  menuToggle.classList.remove("active");
  subs.classList.remove("active");
}

// Close the menu when clicking any of the submenu links
subLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// ///////////////////////////////////////
thumbnail_js_to_closeMenu.forEach((thumbnail_js_to_closeMenu) => {
  thumbnail_js_to_closeMenu.addEventListener("click", () => {
    closeMenu();
  });
});

// Close the menu when clicking ANY link or button on the page
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("click", () => {
    closeMenu();
  });
});

// Close the menu when clicking anywhere outside the menu box
document.addEventListener("click", (e) => {
  if (!menuBox.contains(e.target) && e.target !== menuToggle) {
    closeMenu();
  }
});
