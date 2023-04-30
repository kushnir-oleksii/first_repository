// Існує такий заголовок
// <h1>Document Object Model <span>DOM</span></h1>

// За допомогою JavaScript створіть посилання:
// <a id="link" href="https://dom.spec.whatwg.org/"></a>

// та вставте заголовок всередину посилання, у Вас повинно вийти так:
// <a id="link" href="https://dom.spec.whatwg.org/">
//    <h1>Document Object Model <span>DOM</span></h1>
// </a>

// const link = document.getElementById('link');
// const h1 = document.createElement('h1');
// const span = document.createElement('span');
// span.textContent = 'DOM';
// h1.textContent = 'Document Object Model ';
// h1.appendChild(span);
// link.appendChild(h1);

// const h1 = document.querySelector('h1');
// const link = document.getElementById('link');

// // Создаем новый элемент a
// const a = document.createElement('a');
// a.href = 'href="https://dom.spec.whatwg.org';
// a.id = 'link';

// // Клонируем заголовок и добавляем его в a
// const clonedH1 = h1.cloneNode(true);
// a.appendChild(clonedH1);

// // Заменяем старую ссылку на новую
// link.parentNode.replaceChild(a, link);

// const h1 = document.querySelector('h1');
// const link = document.getElementById('link');

// // Создаем новый элемент h1 внутри ссылки
// const newH1 = document.createElement('h1');
// newH1.appendChild(h1.cloneNode(true));

// // Вставляем новый элемент h1 внутрь ссылки
// link.appendChild(newH1);


// let h1 = document.querySelector ('h1')// Робимо прив'язку до нашого тексту всередині html і потім змоги до неї звернутися
// let link = document.createElement('a');// Створюємо новий елемент a
// link.innerHTML = h1.outerHTML ;//outerHTML — повертає повний вміст вузла та його нащадків (HTML теги разом з текстом).
// link.setAttribute('id', 'link');
// link.setAttribute('href', 'https://dom.spec.whatwg.org');
// document.body.appendChild(link);
// console.log(document)


let link = document.createElement('a');
link.innerHTML = '<h1>Document Object Model <span>DOM</span></h1>';
link.setAttribute('id', 'link');
link.setAttribute('href', 'https://dom.spec.whatwg.org');
document.body.appendChild(link);
console.log(document);