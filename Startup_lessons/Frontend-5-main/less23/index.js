// let count = (number) => {
//   if (number === 5) return;
//   console.log((number += 1));
//   count(number);
// };

// count(0);

// let sum = (number) => {
//   if (number === 0) {
//     return number;
//   } else {
//     return number + sum(number - 1);
//   }
// };
// let sum = (num) => {
//   return num === 0 ? num : num + sum(--num);
// };
// console.log(sum(3));

// let employees = {
//   development: {
//     backend: [
//       { name: "Mike", salary: 2000 },
//       { name: "Nikola", salary: 2500 },
//     ],
//     frontend: [
//       { name: "Artem", salary: 3000 },
//       { name: "Alex", salary: 2700 },
//     ],
//   },
//   sales: {
//     marketing: {
//       internet_marketers: [
//         { name: "Nina", salary: 1000 },
//         { name: "Olena", salary: 1300 },
//       ],
//       promotion: [
//         { name: "Oleg", salary: 1400 },
//         { name: "Masha", salary: 1700 },
//       ],
//     },
//     sellers: [
//       { name: "Max", salary: 900 },
//       { name: "Donald", salary: 700 },
//       { name: "Joe", salary: 1100 },
//     ],
//   },
//   designer: [{ name: "Kate", salary: 1800 }],
// };

// let sum = 0;

// let sumSallary = (obj) => {
//   for (let key in obj) {
//     if (Array.isArray(obj[key])) {
//       obj[key].forEach((employees) => (sum += employees.salary));
//     } else {
//       sumSallary(obj[key]);
//     }
//   }
// };

// function sumSallary(obj){
//   for(let key in obj){
//       Array.isArray(obj[key]) ? obj[key].forEach(employee => sum += employee.salary) : sumSallary(obj[key]);
//   }
// }

// sumSallary(employees);
// console.log(sum);

// let takeMedicalKit = (startHealth = 100) => {
//   let health = startHealth;
//   return function medicalKit(increaseHealth = 10, ...bonuses) {
//     for (let bonus of bonuses) {
//       health += bonus;
//     }
//     return (health += increaseHealth);
//   };
// };
// let healthGamer1 = takeMedicalKit();
// let healthGamer2 = takeMedicalKit(20);
// let healthGamer3 = takeMedicalKit(15);

// let currecthealsGamer1 = healthGamer1();
// let currecthealsGamer2 = healthGamer2(20);
// let currecthealsGamer3 = healthGamer3(10, 4, 3, 9);

// console.log(currecthealsGamer1, currecthealsGamer2, currecthealsGamer3);

// (function () {
//   //console.log("function");
// })();

// (() => {
//   // console.log("Arrow function");
// })();
