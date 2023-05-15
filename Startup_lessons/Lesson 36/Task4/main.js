let input = document.getElementById('user-data');
let savedData = localStorage.getItem('user-data-value');//При завантаженні сторінки перевіряємо чи є збережені данні в інпуті
    if (savedData) {
        input.value = savedData;
    }      
    // Зберігаємо данні при зміненні інпут
        input.addEventListener('input', event => {
        localStorage.setItem('user-data-value', event.target.value);
    });


// const input = document.getElementById('my-input');

// При загрузке страницы проверяем, есть ли сохраненные данные
// const savedData = getCookie('my-input-value');
// if (savedData) {
//   input.value = savedData;
// }

// // Сохраняем данные при изменении поля ввода
// input.addEventListener('input', event => {
//   setCookie('my-input-value', event.target.value, 365);
// });

// // Функция для установки cookie
// function setCookie(name, value, days) {
//   const expires = new Date(Date.now() + days * 864e5).toUTCString();
//   document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires}`;
// }

// // Функция для получения cookie
// function getCookie(name) {
//   return document.cookie.split('; ')
//     .find(row => row.startsWith(name))
//     ?.split('=')[1];
// }
// const input = document.getElementById('my-input');
// let cookie = document.cookie;

// if (cookie.split('=')[0] == input){
//     console.log('my-input-value');
// } else {
//     document.cookie = `${input}=${JSON.stringify(input)};`; 
//     console.log('my-input-value');
// }
