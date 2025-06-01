// show and hide mobile nav
const tog = document.querySelector(".toogle");
const menuButton = document.querySelector(".menuButton");
const svg_burger = document.querySelector(".svg_burger");
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
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
let buttons = document.querySelectorAll(".pixel-btn");
buttons.forEach((button) => {
  let pixelContainer = button.querySelector(".pixel-container");
  let pixSize = 10;
  let btnWidth = button.offsetWidth;
  let btnheight = button.offsetHeight;

  let cols = Math.floor(btnWidth / pixSize);
  let rows = Math.floor(btnheight / pixSize);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.left = `${col * pixSize}px`;
      pixel.style.top = `${row * pixSize}px`;

      let delay = Math.random() * 0.5;
      pixel.style.transitionDelay = `${delay}s`;

      let tx = (Math.random() - 0.5) * 30;
      let ty = (Math.random() - 0.5) * 30;

      pixel.style.setProperty(`--tx`, `${tx}px`);
      pixel.style.setProperty(`--ty`, `${ty}px`);

      pixelContainer.appendChild(pixel);
    }
  }
});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const youtube_pixel = document.querySelector(".Pixel_yo");
const youtube_play_header = document.querySelector(".play_header");

youtube_pixel.addEventListener("mouseover", function () {
  youtube_play_header.classList.add("active_play_header");
});

youtube_pixel.addEventListener("mouseout", function () {
  youtube_play_header.classList.remove("active_play_header");
});

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////// pixel for mobile /////////////////
let buttons_mobile = document.querySelectorAll(".pixel-btn_mobile");
buttons_mobile.forEach((button_mobile) => {
  let pixelContainer_mobile = button_mobile.querySelector(
    ".pixel-container_mobile"
  );
  let pixSize_mobile = 10;
  let btnWidth_mobile = button_mobile.offsetWidth;
  let btnheight_mobile = button_mobile.offsetHeight;

  let cols_mobile = Math.floor(btnWidth_mobile / pixSize_mobile);
  let rows_mobile = Math.floor(btnheight_mobile / pixSize_mobile);

  for (let row_mobile = 0; row_mobile < rows_mobile; row_mobile++) {
    for (let col_mobile = 0; col_mobile < cols_mobile; col_mobile++) {
      let pixel_mobile = document.createElement("div");
      pixel_mobile.classList.add("pixel_mobile");
      pixel_mobile.style.left = `${col_mobile * pixSize_mobile}px`;
      pixel_mobile.style.top = `${row_mobile * pixSize_mobile}px`;

      let delay_mobile = Math.random() * 0.5;
      pixel_mobile.style.transitionDelay = `${delay_mobile}s`;

      let tx_mobile = (Math.random() - 0.5) * 30;
      let ty_mobile = (Math.random() - 0.5) * 30;

      pixel_mobile.style.setProperty(`--tx`, `${tx_mobile}px`);
      pixel_mobile.style.setProperty(`--ty`, `${ty_mobile}px`);

      pixelContainer_mobile.appendChild(pixel_mobile);
    }
  }
});
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
