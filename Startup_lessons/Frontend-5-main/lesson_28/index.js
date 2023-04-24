// console.log(document.querySelectorAll("h2")); //finds all h2 tags
// let h2 = document.querySelectorAll("h2");
// console.log(h2);
// console.log(document.querySelectorAll(".dom")); //finds tags <div> and <p>
// console.log(document.querySelectorAll('[href="#dom"]')); //finds tag <a>
// console.log(document.querySelectorAll('[href="#dom"]')); //finds tag <a>
// console.log(document.querySelector(".dom")); //finds tag <div>
// console.log(document.querySelector("#dom")); //finds tag <h1>
// console.log(document.querySelector("h2")); //finds first tag <h2>
// console.log(document.getElementById("dom")); //finds tag <h1>
// let list = document.querySelector("ul");
// let firstLi = document.querySelector("li");
// let changeLi = document.querySelector(".change span");
// let li = document.createElement("li");
// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let h2 = document.createElement("h2");

// li.innerHTML = 0;
// list.prepend(li);
// li.innerHTML = 4;
// list.append(li);

// div.innerHTML = "Change";
// changeLi.replaceWith(div);

// h1.innerHTML = "DOM";
// h2.innerHTML = "We created elements";
// list.before(h1);
// list.after(h2);

// firstLi.remove();

let p = document.querySelector("p");
//console.log(p.id);//paragraf
//console.log(p.user);//undefined

console.log(p.hasAttribute("user")); //true
console.log(p.getAttribute("user")); //Mike
p.setAttribute("user", "Bob");
console.log(p.outerHTML); //<p id="paragraf" user="Bob"></p>
p.removeAttribute("user");
console.log(p.outerHTML); //<p id="paragraf"></p>

//Home Work
// Існує така HTML розмітка

// <body>
//     <div class="dom">
//         <h1 id="dom">Lesson about DOM</h1>
//         <p class="dom">
//             <a href="#dom"></a>
//             <h2>DOM</h2>
//             <h2>DOM method</h2>
//             <span>Document Object Model</span>
//         </p>
//         </div>
// </body>

// За допомогою JavaScript змініть текст в елементі <h2>DOM method</h2> на DOM method description

// Існує така HTML розмітка

//   <a href="site.ua/ua/page_1"></a>
//   <a href="site.ua/ua/page_2"></a>
//   <a href="site.ua/en/page_1"></a>
//   <a href="site.ua/en/page_2"></a>
//   <p><span><a href="site.ua/ua/page_3"></a></span></p>
//   <div><a href="site.ua/en/page_3"></a></div>

// посилання на сайті site.ua розділені мовними префіксами /ua/ (для української ) та /en/ (для англійської), знайдіть всі посилання з українськими сторінками.

// Існує такий список

// <ul id="ul">
//    <li id="first">1</li>
//    <li id="third">3</li>
// </ul>

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

// Існує такий заголовок
// <h1>Document Object Model <span>DOM</span></h1>

// За допомогою JavaScript створіть посилання:
// <a id="link" href="https://dom.spec.whatwg.org/"></a>

// та вставте заголовок всередину посилання, у Вас повинно вийти так:
// <a id="link" href="https://dom.spec.whatwg.org/">
//    <h1>Document Object Model <span>DOM</span></h1>
// </a>
