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

    // Play the video iframe under this thumbnail
    const iframe = currentCard.querySelector("iframe");
    if (iframe) {
      const player = new Vimeo.Player(iframe);
      player.play().catch((error) => {
        console.warn("Vimeo play error:", error.name);
      });
    }

    // Show all other thumbnails
    document.querySelectorAll(".video_thumbnail_image").forEach((otherImg) => {
      if (otherImg !== this) {
        otherImg.style.display = "block";
        setTimeout(() => {
          otherImg.classList.remove("disappear");
        }, 10);
      }
    });

    // Remove hidden class from all cards
    document.querySelectorAll(".card").forEach((card) => {
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
  document.querySelectorAll(".video_thumbnail_image").forEach((img) => {
    img.style.display = "block";
    setTimeout(() => {
      img.classList.remove("disappear");
    }, 10);
  });

  // Reset all card classes
  document.querySelectorAll(".card").forEach((card) => {
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
