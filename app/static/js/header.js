// header.js
const header = document.querySelector('.header');
const scrollThreshold = 50;

// Observador de scroll con throttling
let lastScrollPosition = 0;
let ticking = false;

function updateHeader() {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  lastScrollPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateHeader();
      ticking = true;
    });
  }
});