//№1
/*let car = {
model: 'BMW',
year: 2021,
color: 'black',
signal(){
alert('fa! fa!');
}
}
car.signal();*/

//№2
/*let salaries = {
fronted: 12000,
backend: 10000,
designer: 8000,
dayPay() {
alert('We must pay salary on Tuesday!');
},
total() {
let sum = 0;
for( let key in this){
if(typeof this[key] === 'number'){
sum += this[key];
}
}
console.log(sum);
}
}
salaries.total();// 30000
salaries.manager = 5000;
salaries.total();//35000*/

//№3
/*function Computer(brand, system, cost){
this.brand = brand;
this.system = system;
this.cost = cost;
}
let dell = new Computer('Dell', 'windows', 800);
let apple = new Computer('Aplle', 'MAC OS', 1700);
console.log(dell);
console.log(apple);*/

//№4
/*function Computer(brand, system, cost){
this.brand = brand;
this.system = system;
this.cost = cost;
this[Symbol.toPrimitive] = function(hint){
switch(hint){
case 'string':
return this.brand
case 'number':
return this.cost
case 'default':
return this.brand + ' ' + this.system + ' ' + this.cost + ' // ';
}
}
}
let dell = new Computer('Dell', 'windows', 800);
let apple = new Computer('Aplle', 'MAC OS', 1700);
console.log(String(dell));//Dell
console.log(+apple);//1700
console.log(dell + apple);// Dell windows 800 // Aplle MAC OS 1700 // */