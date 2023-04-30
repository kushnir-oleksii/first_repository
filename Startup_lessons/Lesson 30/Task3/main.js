// За допомогою JavaScript вставьте ці тегі у список за порядком
//  <li id="null">0</li>
// <li id="second">2</li>
// <li id="fourth">4</li>

// ви повинні отримати такий результат:
// <ul id="ul">
//    <li id="null">0</li>
//    <li id="first">1</li>
//    <li id="second">2</li>
//    <li id="third">3</li>
//    <li id="fourth">4</li>
// </ul>

let ul = document.getElementById('ul');
let li0 = document.createElement('li');
li0.setAttribute('id', 'null');
li0.textContent = '0';
ul.insertBefore(li0, ul.firstChild)//робимо його першим у списку ul.firstChild

let li3 = document.getElementById('third')


let li2 = document.createElement('li');
li2.setAttribute('id', 'second');
li2.textContent = '2';
ul.insertBefore(li2, li3);

let li4 = document.createElement('li');
li4.setAttribute('id', 'fourth');
li4.textContent = '4';
ul.insertBefore(li4, li3.nextSibling);//insertAfter немає, тому використовуємо конструкцію li3.nextSibling

// const ul = document.getElementById('ul');

// ul.insertAdjacentHTML('afterbegin', '<li id="null">0</li>');
// ul.insertAdjacentHTML('beforeend', '<li id="second">2</li>');
// ul.insertAdjacentHTML('beforeend', '<li id="fourth">4</li>');

// console.log(document.body.children[0].children[1]);
