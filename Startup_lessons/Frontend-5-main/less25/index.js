// let user = {
//   name: "Mike",
//   surname: "test",
//   age: 24,
// };

// Object.defineProperty(user, "name", {
//   // writable: false,
//   // enumerable: false,
//   //configurable: false,
// });
// for (key in user) {
//   console.log(key + " " + user[key]);
// }
// let showAllProperties = Object.getOwnPropertyNames(user);
// console.log(showAllProperties); //['name', 'surname', 'age']
// showAllProperties.forEach((property) => {
//   console.log(`${property}: ${user[property]}`);
// });
//console.log(Object.getOwnPropertyDescriptor(user, "name"));
// let user = {
//   name: "Mike",
//   surname: "Davis",
//   age: 25,
//   fullName: "Mike" + " Davis",
//   get userInfo() {
//     console.log(
//       `name: ${this.name}, surname: ${this.surname}, age: ${this.age}`
//     );
//   },
//   set userInfo(value) {
//     let userData = value.split(" ");
//     this.name = userData[0];
//     this.surname = userData[1];
//     this.age = userData[2];
//   },
// };
// console.log(user);
// user.userInfo = "Nikola Tesla 36";
//console.log(user);
// Object.defineProperty(user, "fullName", {
//   get() {
//     return console.log(`${this.name} ${this.surname}`);
//   },

//   set(value) {
//     let userData = value.split(" ");
//     this.name = userData[0];
//     this.surname = userData[1];
//   },
// });
// console.log((user.set = "Nikoolaa Tesla"));
// console.log(user.get);
// let salaries = {
//   frontend: 2000,
//   backend: 1500,
//   design: 1000,
// };
// Object.defineProperty(salaries, "sum", {
//   get() {
//     let sum = 0;
//     for (salary in this) {
//       sum += this[salary];
//     }
//     console.log(sum);
//   },
//   enumerable: false,
// });
// salaries.sum;
