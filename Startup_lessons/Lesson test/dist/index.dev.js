"use strict";

var hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('open');
});