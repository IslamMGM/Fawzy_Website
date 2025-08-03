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
