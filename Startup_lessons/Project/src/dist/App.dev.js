"use strict";

var hamburgerMenu = document.querySelector('.hamburger-menu');
var spisokMenu = document.querySelector('.spisok_menu');
hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('open');
  spisokMenu.classList.toggle('open');
});