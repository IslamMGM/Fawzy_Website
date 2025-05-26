document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const mNav = document.querySelector('.m_nav');
  const mainHeader = document.querySelector('.main-header');
  navToggle.addEventListener('click', function () {
    mNav.classList.toggle('active');
    navToggle.classList.toggle('open');
    document.body.classList.toggle('menu-open', mNav.classList.contains('active'));
    mainHeader.classList.toggle('menu-open', mNav.classList.contains('active'));
  });
});
