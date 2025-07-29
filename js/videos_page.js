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

    // Hide others
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

    // Animate and hide clicked one
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
  document.querySelectorAll(".video_thumbnail_image").forEach((img) => {
    img.style.display = "block";
    setTimeout(() => {
      img.classList.remove("disappear");
    }, 10);
  });

  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("hide-before", "before-hidden");
  });
});
