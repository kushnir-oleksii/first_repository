const hamburgerMenu = document.querySelector('.hamburger-menu');
const spisokMenu = document.querySelector('.spisok_menu');

hamburgerMenu.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('open');
  spisokMenu.classList.toggle('open');
});
