"use strict";

var hamburgerMenu = document.querySelector('.hamburger-menu');
var spisokMenu = document.querySelector('.spisok_menu');
hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('open');
  spisokMenu.classList.toggle('open');
}); // // Получаем кнопку "ABOUT" по классу
// const aboutButton = document.querySelector('.spisok_menu_about');
// // Получаем раздел "introduction_section" по его ID
// const introductionSection = document.getElementById('introduction_section');
// // Добавляем обработчик события "click" для кнопки "ABOUT"
// aboutButton.addEventListener('click', () => {
//   // Прокручиваем страницу до раздела "introduction_section"
//   introductionSection.scrollIntoView({ behavior: 'smooth' });
// });

function scrollToIntroductionSection() {
  var introductionSection = document.getElementById("introduction_section");

  if (introductionSection) {
    // Вычисляем высоту окна браузера и половину высоты секции, чтобы прокрутить к центру
    var windowHeight = window.innerHeight;
    var sectionHeight = introductionSection.clientHeight;
    var offset = (windowHeight - sectionHeight) / 2; // Прокручиваем страницу к секции с учетом отступа

    window.scrollTo({
      top: introductionSection.offsetTop - offset,
      behavior: 'smooth'
    });
  }
}

var aboutButton = document.querySelector(".spisok_menu_about a");

if (aboutButton) {
  aboutButton.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    scrollToIntroductionSection(); // Вызываем функцию прокрутки
  });
}

function scrollToWhy_build_section() {
  var whybuild_section = document.getElementById("why_build_section");

  if (whybuild_section) {
    // Вычисляем высоту окна браузера и половину высоты секции, чтобы прокрутить к центру
    var windowHeight = window.innerHeight;
    var sectionHeight = whybuild_section.clientHeight;
    var offset = (windowHeight - sectionHeight) / 2; // Прокручиваем страницу к секции с учетом отступа

    window.scrollTo({
      top: whybuild_section.offsetTop - offset,
      behavior: 'smooth'
    });
  }
}

var servicesButton = document.querySelector('.spisok_menu_services');

if (servicesButton) {
  servicesButton.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    scrollToWhy_build_section(); // Вызываем функцию прокрутки
  });
} // const servicesButton = document.querySelector('.spisok_menu_services');
// const whybuild_section = document.getElementById('why_build_section');
// servicesButton.addEventListener('click', () => {
//   // Прокручиваем страницу до раздела "why_build_section"
//   whybuild_section.scrollIntoView({ behavior: 'smooth' });
// });


function scrollToTechnologies_hardware() {
  var technologies_hardware = document.getElementById("technologies_hardware");

  if (technologies_hardware) {
    // Вычисляем высоту окна браузера и половину высоты секции, чтобы прокрутить к центру
    var windowHeight = window.innerHeight;
    var sectionHeight = technologies_hardware.clientHeight;
    var offset = (windowHeight - sectionHeight) / 2; // Прокручиваем страницу к секции с учетом отступа

    window.scrollTo({
      top: technologies_hardware.offsetTop - offset,
      behavior: 'smooth'
    });
  }
}

var technologiesButton = document.querySelector('.spisok_menu_technologies');

if (technologiesButton) {
  technologiesButton.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    scrollToTechnologies_hardware(); // Вызываем функцию прокрутки
  });
} // const technologiesButton = document.querySelector('.spisok_menu_technologies');
// const technologies_hardware = document.getElementById('technologies_hardware');
// technologiesButton.addEventListener('click', () => {
//   // Прокручиваем страницу до раздела "why_build_section"
//   technologies_hardware.scrollIntoView({ behavior: 'smooth' });
// });


function scrollToHow_we_build_section() {
  var how_we_build_section = document.getElementById("how_we_build_section");

  if (how_we_build_section) {
    // Вычисляем высоту окна браузера и половину высоты секции, чтобы прокрутить к центру
    var windowHeight = window.innerHeight;
    var sectionHeight = how_we_build_section.clientHeight;
    var offset = (windowHeight - sectionHeight) / 2; // Прокручиваем страницу к секции с учетом отступа

    window.scrollTo({
      top: how_we_build_section.offsetTop - offset,
      behavior: 'smooth'
    });
  }
}

var how_toButton = document.querySelector('.spisok_menu_how_to');

if (how_toButton) {
  how_toButton.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    scrollToHow_we_build_section(); // Вызываем функцию прокрутки
  });
}

function scrollToContact_form() {
  var contact_form = document.getElementById("contact_form");

  if (contact_form) {
    // Вычисляем высоту окна браузера и половину высоты секции, чтобы прокрутить к центру
    var windowHeight = window.innerHeight;
    var sectionHeight = contact_form.clientHeight;
    var offset = (windowHeight - sectionHeight) / 2; // Прокручиваем страницу к секции с учетом отступа

    window.scrollTo({
      top: contact_form.offsetTop - offset,
      behavior: 'smooth'
    });
  }
}

var contact_us_button = document.querySelector('.contact_us_button');

if (contact_us_button) {
  contact_us_button.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    scrollToContact_form(); // Вызываем функцию прокрутки
  });
} // const how_toButton = document.querySelector('.spisok_menu_how_to');
// const how_we_build_section = document.getElementById('how_we_build_section');
// how_toButton.addEventListener('click', () => {
//   // Прокручиваем страницу до раздела "why_build_section"
//   how_we_build_section.scrollIntoView({ behavior: 'smooth' });
// });