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
} // Отображение/скрытие кнопки при прокрутке


window.onscroll = function () {
  showScrollToTopButton();
};

function showScrollToTopButton() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

document.getElementById("scrollToTopBtn").onclick = function () {
  scrollToTop();
}; // Прокрутка наверх при клике на кнопку


function scrollToTop() {
  document.body.scrollTop = 0; // Для Safari

  document.documentElement.scrollTop = 0; // Для других браузеров
} // const how_toButton = document.querySelector('.spisok_menu_how_to');
// const how_we_build_section = document.getElementById('how_we_build_section');
// how_toButton.addEventListener('click', () => {
//   // Прокручиваем страницу до раздела "why_build_section"
//   how_we_build_section.scrollIntoView({ behavior: 'smooth' });
// });
// JavaScript (примерно)
//   // Функция для переключения видимости блоков слайдера
//   function toggleSliderBox(sliderBoxClass) {
//     const sliderBoxes = document.querySelectorAll(sliderBoxClass);
//     sliderBoxes.forEach(box => box.classList.toggle('active'));
// }
// // Добавляем обработчики событий для кнопок
// document.querySelector('.slider_button_left_box_inside').addEventListener('click', () => {
//     toggleSliderBox('.slider_box');
//     toggleSliderBox('.slider_box_education');
//     toggleSliderBox('.slider_box_self-care');
//     toggleSliderBox('.slider_box_outdoor');
// });
// document.querySelector('.slider_button_right_box_inside').addEventListener('click', () => {
//     toggleSliderBox('.slider_box');
//     toggleSliderBox('.slider_box_education');
//     toggleSliderBox('.slider_box_self-care');
//     toggleSliderBox('.slider_box_outdoor');
// });
// // Функция для скрытия всех блоков слайдера
// function hideAllSliderBoxes() {
//   const sliderBoxes = document.querySelectorAll('.slider_box, .slider_box_education, .slider_box_self-care, .slider_box_outdoor');
//   sliderBoxes.forEach(box => box.classList.remove('active'));
// }
// // Функция для отображения выбранного блока слайдера
// function showSliderBox(sliderBoxClass) {
//   const sliderBox = document.querySelector(sliderBoxClass);
//   sliderBox.classList.add('active');
// }
// // Добавляем обработчики событий для кнопок
// document.getElementById('slider_button_left').addEventListener('click', () => {
//   hideAllSliderBoxes();
//   showSliderBox('.slider_box');
// });
// document.getElementById('slider_button_right').addEventListener('click', () => {
//   hideAllSliderBoxes();
//   showSliderBox('.slider_box_education');
// });
// При загрузке страницы
// document.addEventListener("DOMContentLoaded", function () {
//   // Получаем все слайдеры и кнопки
//   const sliderBoxes = document.querySelectorAll(".slider_box, .slider_box_education, .slider_box_self-care, .slider_box_outdoor");
//   const sliderButtonLeftInside = document.getElementById("slider_button_left_box_inside");
//   const sliderButtonRightInside = document.getElementById("slider_button_right_box_inside");
//   // Переменная для хранения текущего индекса слайдера
//   let currentSliderIndex = 0;
//   // Функция для отображения текущего слайдера
//   function showCurrentSliderBox() {
//     sliderBoxes.forEach((sliderBox) => {
//       sliderBox.style.display = "none";
//     });
//     sliderBoxes[currentSliderIndex].style.display = "flex";
//   }
//   // Обработчик события для кнопки slider_button_left_box_inside
//   sliderButtonLeftInside.addEventListener("click", () => {
//     if (window.innerWidth < 992) {
//       currentSliderIndex = (currentSliderIndex - 1 + sliderBoxes.length) % sliderBoxes.length;
//       showCurrentSliderBox();
//     }
//   });
//   // Обработчик события для кнопки slider_button_right_box_inside
//   sliderButtonRightInside.addEventListener("click", () => {
//     if (window.innerWidth < 992) {
//       currentSliderIndex = (currentSliderIndex + 1) % sliderBoxes.length;
//       showCurrentSliderBox();
//     }
//   });
//   // Показываем первый слайдер при загрузке страницы
//   showCurrentSliderBox();
// });