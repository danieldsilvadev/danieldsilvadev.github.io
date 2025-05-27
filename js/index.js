const menuBtn = document.querySelector('.menu-btn-mobile');
const closeBtn = document.querySelector('.close-btn-mobile');
const nav = document.querySelector('.nav-mobile');
const overlay = document.querySelector('.overlay-mobile');

menuBtn.addEventListener('click', () => {
  nav.classList.add('open-mobile');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('open-mobile');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('open-mobile');
  overlay.classList.remove('active');
});
