document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const navItems = document.querySelectorAll(".nav-item");
  const contentSections = document.querySelectorAll(".content-section");
  const paginationContainers = document.querySelectorAll(".pagination");

  const CARDS_PER_PAGE = 3;

  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      //
      navItems.forEach((nav) => nav.classList.remove("active"));

      //
      this.classList.add("active");

      //
      const targetId = this.getAttribute("data-target");

      //
      contentSections.forEach((section) => {
        section.classList.remove("active");
      });

      //
      const targetSection = document.getElementById(targetId);
      targetSection.classList.add("active");

      resetPagination(targetSection);

      if (window.innerWidth < 768) {
        sidebar.classList.remove("active");
      }
    });
  });

  contentSections.forEach((section) => {
    if (section.classList.contains("active")) {
      resetPagination(section);
    }
  });

  paginationContainers.forEach((container) => {
    const buttons = container.querySelectorAll(".page-btn");
    const prevBtn = container.querySelector(".page-prev");
    const nextBtn = container.querySelector(".page-next");
    const sectionId = container.id.replace("-pagination", "");
    const section = document.getElementById(sectionId);
    const cards = section.querySelectorAll(".card");

    const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);

    let currentPage = 1;

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        buttons.forEach((btn) => btn.classList.remove("active"));

        this.classList.add("active");

        // Update current page
        currentPage = parseInt(this.textContent);

        // Update card visibility
        updateCardVisibility();

        // Update prev/next button states
        updateButtonStates();
      });
    });

    // Previous button click handler
    prevBtn.addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        updateActiveButton();
        updateCardVisibility();
        updateButtonStates();
      }
    });

    // Next button click handler
    nextBtn.addEventListener("click", function () {
      if (currentPage < totalPages) {
        currentPage++;
        updateActiveButton();
        updateCardVisibility();
        updateButtonStates();
      }
    });

    // Helper function to update active button
    function updateActiveButton() {
      buttons.forEach((button) => {
        button.classList.remove("active");
        if (parseInt(button.textContent) === currentPage) {
          button.classList.add("active");
        }
      });
    }

    // Helper function to update button states
    function updateButtonStates() {
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
    }

    // Helper function to update card visibility based on current page
    function updateCardVisibility() {
      const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
      const endIndex = startIndex + CARDS_PER_PAGE;

      cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    // Initialize button states and card visibility
    updateButtonStates();
    updateCardVisibility();
  });

  // Function to reset pagination when switching sections
  function resetPagination(section) {
    const pagination = section.querySelector(".pagination");
    if (!pagination) return;

    const buttons = pagination.querySelectorAll(".page-btn");
    const prevBtn = pagination.querySelector(".page-prev");
    const nextBtn = pagination.querySelector(".page-next");
    const cards = section.querySelectorAll(".card");
    const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);

    // Reset to first page
    const currentPage = 1;

    // Update active button
    buttons.forEach((button, index) => {
      button.classList.remove("active");
      if (index === 0) {
        button.classList.add("active");
      }

      // Hide page buttons that aren't needed
      if (index < totalPages) {
        button.style.display = "flex";
      } else {
        button.style.display = "none";
      }
    });

    // Update button states
    prevBtn.disabled = true;
    nextBtn.disabled = totalPages <= 1;

    // Update card visibility
    const startIndex = 0;
    const endIndex = Math.min(CARDS_PER_PAGE, cards.length);

    cards.forEach((card, index) => {
      if (index >= startIndex && index < endIndex) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", function (event) {
    if (
      window.innerWidth < 768 &&
      sidebar.classList.contains("active") &&
      !sidebar.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      sidebar.classList.remove("active");
    }
  });
});
