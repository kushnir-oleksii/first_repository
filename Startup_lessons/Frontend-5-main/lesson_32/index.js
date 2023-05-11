// let mike = { name: "Mike", age: 18 };
// let phone = { brand: "Apple", system: "IOS" };
// let hobies = { programming: true, cook: false };
// let aboutMike = Object.assign(mike, phone, hobies);
// console.log(aboutMike); //{brand: 'Apple', system: 'IOS', name: 'Mike', age: 18, programming: true, cook: false}
// console.log(mike); //{brand: 'Apple', system: 'IOS', name: 'Mike', age: 18, programming: true, cook: false}
// let mixin = {
//   getPrice() {
//     return this.price;
//   },
//   getColor() {
//     return "wrong option";
//   },
//   getPages() {
//     return "wrong option";
//   },
//   getSize() {
//     return "wrong option";
//   },
// };
// class Book {
//   constructor(price, title, pages) {
//     this.price = price;
//     this.title = title;
//     this.pages = pages;
//   }
// }
// Object.assign(Book.prototype, mixin);
// Book.prototype.getPages = function () {
//   return this.pages;
// };
// class Pen {
//   constructor(price, color) {
//     this.price = price;
//     this.color = color;
//   }
// }
// Object.assign(Pen.prototype, mixin);
// Pen.prototype.getColor = function () {
//   return this.color;
// };
// class Picture {
//   constructor(price, title, size) {
//     this.price = price;
//     this.title = title;
//     this.size = size;
//   }
// }

// Object.assign(Picture.prototype, mixin);
// Picture.prototype.getSize = function () {
//   return this.size;
// };

// let kobzar = new Book(950, "Kobzar", 576);
// let kateryna = new Picture(800, "kateryna", "93 x 72,3");
// let redPen = new Pen(5, "red");

// console.log(kobzar, kateryna, redPen);
// console.log(kobzar.getPrice(), kobzar.getPages()); //950 576
// console.log(kateryna.getPrice(), kateryna.getSize()); //800 '93 x 72,3'
// console.log(redPen.getPrice(), redPen.getColor()); //5 'red’
// console.log(kobzar.getColor()); //wrong option

// let goods = [
//   "Iphone 13",
//   "Iphone 14",
//   "Samsung S21",
//   "Iphone 14",
//   "Samsung S21",
//   "Samsung S22",
//   "Samsung S22",
//   "Iphone 14",
//   "Iphone 14 ProMax",
// ];
// let uniqueGoods = new Set(goods);
// let list = document.querySelector(".shop-list");
// for (let item of uniqueGoods) {
//   let li = document.createElement("li");
//   li.innerHTML = item;
//   list.append(li);
// }
/* let map = new Map();

map.set('1', 1)
.set(1, 2)
.set(false, 3)
.set(NaN, 4)
.set(undefined, 5)
.set(null, 6); */

/*console.log(map.get('1'));//1
console.log(map.get(1));//2
console.log(map.get(false));//3
console.log(map.get(NaN));//4
console.log(map.get(undefined));//5
console.log(map.get(null));//6 */

/*let obj = {1: 1,'1': 2,false: 3,NaN: 4,undefined: 5,null: 6}
console.log(obj);
for(key in obj){
    console.log(typeof key);
}*/

/* let siteVisits = 0;
let mike = {name:'Mike', age: 18, siteVisits: 0, siteVisitsCount(){return ++this.siteVisits}}
let bob = {name:'Bob', age: 25, siteVisits: 0, siteVisitsCount(){return ++this.siteVisits}}
let visitsMap = new Map();
visitsMap.set(mike, mike.siteVisitsCount());
console.log(visitsMap);//Map(1) {{…} => 1}
console.log(visitsMap.get(mike));//1
console.log(visitsMap.get(bob));//undefined

let visits ={}
visits[mike] = mike.siteVisitsCount();
console.log(visits);//{[object Object]: 1}
console.log(visits[mike]);//1
console.log(visits[bob]);//1
console.log(visits["[object Object]"]);//1 */
let user = new Map([
  ["name", "Mike"],
  ["age", 18],
  ["isAdmin", false],
]);
let values = user.values();
console.log(values[0]); //undefined
let userValues = [],
  userKeys = [],
  userEntries = [];
for (let value of user.values()) {
  userValues.push(value);
}
user.forEach((value, key) => userKeys.push(key));
for (let entri of user.entries()) {
  userEntries.push(entri);
}
console.log(userValues); //['Mike', 18, false]
console.log(userKeys); //['name', 'age', 'isAdmin']
console.log(userEntries); //0: ['name', 'Mike'], 1: ['age', 18], 2: ['isAdmin', false]

/* let mike = {name:'Mike', age: 18, isAdmin: false};
let mikeMap = new Map(Object.entries(mike));
mikeMap.forEach((value, key)=>{
console.log(`${key}: ${value}`);
}); */

/* let mikeMap = new Map();
mikeMap.set('name', 'Mike').set('age', 18).set('isAdmin', false);
let mike = Object.fromEntries(mikeMap.entries())
console.log(mike);//{name: 'Mike', age: 18, isAdmin: false} */

/* let mike = {name:'Mike', age: 18, isAdmin: false};
let users = [mike];
mike = null;
console.log(users[0]);// Object available from array users
users[0] = 'mike'; //Object removed from memory */

/* let mike ={name:'Mike', age: 18, result: 0};
let bob ={name:'Bob', age: 25, result: 0};
let fib41 = {number: 41};
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
let cash = new WeakMap();
function culcFib(fibObj){
    if(!cash.has(fibObj)){
        let result = fib(fibObj.number);
        cash.set(fibObj, result);
        return result;
    }
    return cash.get(fibObj);
}
console.log('Start calculate');
mike.result = culcFib(fib41);
bob.result = culcFib(fib41);
console.log(mike.result);//165580141
console.log(bob.result);//165580141
console.log(cash.get(fib41));//165580141
fib41 = null;
console.log(cash.get(fib41));//undefind */

/* let mike ={name:'Mike', age: 18, salary: 900};
let bob ={name:'Bob', age: 25, salary: 800};
let nikola ={name:'nikola', age: 32, salary: 750};

let openedAccount = new WeakSet();
openedAccount.add(mike);
openedAccount.add(bob);
openedAccount.add(mike);//Visited site again
openedAccount.add(bob);//Visited site again

let employees = [mike, bob, nikola];

for(let employee of employees){
    if (!openedAccount.has(employee)){
        employee.salary -= 150;
        console.log(employee);
    }
}
mike = null;
bob = null;
employees = null; */
