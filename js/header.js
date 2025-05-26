document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const mNav = document.querySelector('.m_nav');
  navToggle.addEventListener('click', function () {
    mNav.classList.toggle('active');
    navToggle.classList.toggle('open');
  });
});
