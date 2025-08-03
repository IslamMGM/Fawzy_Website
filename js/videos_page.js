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
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
document.querySelectorAll(".video_thumbnail_image").forEach((img) => {
  img.addEventListener("click", function (e) {
    e.stopPropagation();

    const currentCard = this.closest(".card");

    // === Step 1: Hide all thumbnails and stop/hide all iframes ===
    document.querySelectorAll(".video_thumbnail_image").forEach((otherImg) => {
      if (otherImg !== this) {
        otherImg.style.display = "block";
        setTimeout(() => {
          otherImg.classList.remove("disappear");
        }, 10);
      }
    });

    document.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("hide-before", "before-hidden");
    });

    document.querySelectorAll("iframe").forEach((iframe) => {
      iframe.style.display = "none";
      try {
        const player = new Vimeo.Player(iframe);
        player.unload(); // Stop video + unload player
      } catch (e) {}
    });

    // === Step 2: Show clicked iframe, then play ===
    const iframe = currentCard.querySelector("iframe");
    if (iframe) {
      iframe.style.display = "block"; // Must be visible first
      setTimeout(() => {
        const player = new Vimeo.Player(iframe);
        player.play().catch((error) => {
          console.warn("Vimeo play error:", error.name);
        });
      }, 50); // Short delay to ensure it's visible
    }

    // === Step 3: Animate clicked thumbnail + before ===
    this.classList.add("disappear");
    currentCard.classList.add("hide-before");

    setTimeout(() => {
      this.style.display = "none";
      currentCard.classList.add("before-hidden");
    }, 500);
  });
});

// === Restore everything on body click ===
document.body.addEventListener("click", function () {
  document.querySelectorAll(".video_thumbnail_image").forEach((img) => {
    img.style.display = "block";
    setTimeout(() => {
      img.classList.remove("disappear");
    }, 10);
  });

  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("hide-before", "before-hidden");
  });

  document.querySelectorAll("iframe").forEach((iframe) => {
    iframe.style.display = "none";
    try {
      const player = new Vimeo.Player(iframe);
      player.unload();
    } catch (e) {}
  });
});
