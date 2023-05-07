// console.log(document);
// console.log(document.body.firstChild.nextSibling.innerHTML);
// console.log(document.body.firstChild);
// console.log(document.body.firstChild.nextSibling);
// document.body.firstChild.nextSibling.innerHTML = 'Title<span> text in tag</span>';
// const h2 = document.querySelector('.dom h2:nth-of-type(2)');
// h2.textContent = 'новый текст';

document.body.children[0].children[3].innerHTML = 'DOM method description';
console.log(document.body.children[0].children[3]);