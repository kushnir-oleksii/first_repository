// let userRules = {
//   read: false,
//   comments: true,
//   sayHello() {
//     console.log("Hello");
//   },
// };
// let managerRules = {
//   edit: true,
// };
// Object.setPrototypeOf(managerRules, userRules);
// console.log(managerRules);
// console.log(managerRules.read);
// let adminRules = Object.create(managerRules);
// adminRules.sayHello = function () {
//   console.log("Hello, I'm admin");
// };

// console.log(adminRules);
// adminRules.sayHello();

// let userRules = {
//   read: true,
//   comments: true,
//   allRights() {
//     for (key in this) {
//       console.log(key);
//     }
//   },
// };
// let managerRules = { edit: true };
// Object.setPrototypeOf(managerRules, userRules);

// let adminRules = Object.create(managerRules);
// adminRules.delete = true;
// adminRules.allRights();

// let userRules = {
//   read: true,
//   comments: true,
//   ownRights() {
//     console.log(Object.keys(this));
//   },
// };
// let managerRules = { edit: true };
// Object.setPrototypeOf(managerRules, userRules);

// let adminRules = Object.create(managerRules);
// adminRules.delete = true;

// adminRules.ownRights();

// let userRules = {
//   read: true,
//   comments: true,
//   objectName: 'userRules’,
//   currentObj(){
//     console.log(this.objectName);
//   }
// }

// let managerRules = {edit: true,}
// Object.setPrototypeOf(managerRules, userRules);
// managerRules.currentObj();//userRules

// let adminRules = Object.create(managerRules)
// adminRules.objectName = 'adminRules';
// adminRules.currentObj();//adminRules
// let userRules = {
//   read: true,
//   comments: true,
// };

// let managerRules = { edit: true };
// managerRules.__proto__ = userRules;
// console.log(managerRules.__proto__);

// function sum(a, b) {
//   return console.log(a + b);
// }
// sum.description = "Returns the sum of two numbers";
// console.log(sum.description); //Returns the sum of two numbers

// let userRules = {
//   read: true,
//   comments: true,
// };
// function CreateManager(isEdit) {
//   this.edit = isEdit;
// }
// CreateManager.prototype = userRules;
// const manager_1 = new CreateManager(true);
// console.log(manager_1);

// function CreateManager(isEdit) {
//   this.edit = isEdit;
// }
// let manager = new CreateManager(true);
// console.log(manager.constructor); //ƒ CreateManager(isEdit){this.edit = isEdit;}
// console.log(manager.constructor === CreateManager); //true
let users = {
  0: "Mike",
  1: "Bob",
  2: "Nikola",
  length: 3,
};
users.join = Array.prototype.join;
console.log(users.join("; ")); //Mike; Bob; Nikola
