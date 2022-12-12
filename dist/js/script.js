// hamburger
const hamburger = document.querySelector('#humburger');
const navMenu = document.querySelector('#nav-menu');
const shortcut = document.querySelector('#shortcut');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    shortcut.classList.remove('hidden');
  } else {
    header.classList.remove('navbar-fixed');
    shortcut.classList.add('hidden');
  }
};
