// show and hide mobile nav
const tog = document.querySelector(".toogle");
const menuButton = document.querySelector(".menuButton");
const svg_burger = document.querySelector(".svg_burger");
// //////////////////
const any_link = document.querySelectorAll(".any_link");
const m_links_to_clodse_nav = document.querySelectorAll(
  ".m_links_to_clodse_nav"
);
// //////////////////
const line_top_bottom_burger = document.querySelector(
  ".line_top_bottom_burger"
);
const mobNav = document.querySelector(".m-nav");

tog.addEventListener("change", function () {
  const mobNav = document.querySelector(".m-nav");
  const isChecked = this.checked;

  if (isChecked) {
    mobNav.classList.add("show-m-nav");
    //
    const m_li = document.querySelectorAll(".m-lin");

    m_li.forEach((element) => {
      // Your code here
      element.classList.add("trans");
    });

    svg_burger.style.transform = "rotate(-45deg)";
    line_top_bottom_burger.classList.add("active_burger");
    menuButton.classList.add("active_menuButton");
    //
  } else {
    const m_li = document.querySelectorAll(".m-lin");
    m_li.forEach((element) => {
      // Your code here
      element.classList.remove("trans");
    });
    mobNav.classList.remove("show-m-nav");
    //
    svg_burger.style.transform = "rotate(0)";
    line_top_bottom_burger.classList.remove("active_burger");
    menuButton.classList.remove("active_menuButton");
  }
});
// Add an event listener to the body
document.body.addEventListener("click", function (event) {
  // Check if the clicked element is not part of m-nav or its children
  var mNav = document.querySelector(".m-nav");
  if (!mNav.contains(event.target)) {
    // Remove the show-m-nav class if it exists
    mNav.classList.remove("show-m-nav");
    const m_li = document.querySelectorAll(".m-lin");
    m_li.forEach((element) => {
      // Your code here
      element.classList.remove("trans");
    });
    // //////////
    //
    svg_burger.style.transform = "rotate(0)";
    line_top_bottom_burger.classList.remove("active_burger");
    menuButton.classList.remove("active_menuButton");
    //
  }
  if (tog && event.target !== tog) {
    tog.checked = false;
  }
});
////////////////////////////////////////////////
////////////////////////////////////////////////
any_link.forEach((link) => {
  link.addEventListener("click", () => {
    mobNav.classList.remove("show-m-nav");
    svg_burger.style.transform = "rotate(0)";
    line_top_bottom_burger.classList.remove("active_burger");
    menuButton.classList.remove("active_menuButton");
    // //////////////////////////////////////
    if (tog && event.target !== tog) {
      tog.checked = false;
    }
    // //////////////////////////////////////
  });
});
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
m_links_to_clodse_nav.forEach((link) => {
  link.addEventListener("click", () => {
    mobNav.classList.remove("show-m-nav");
    svg_burger.style.transform = "rotate(0)";
    line_top_bottom_burger.classList.remove("active_burger");
    menuButton.classList.remove("active_menuButton");
    // //////////////////////////////////////
    if (tog && event.target !== tog) {
      tog.checked = false;
    }
    // //////////////////////////////////////
  });
});
////////////////////////////////////////////////
////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////
let btn = document.getElementById("to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
