// let phone = { color: "white", width: 10, camera: {} };
// let users = {
//   mike: {
//     id: 1,
//     age: 18,
//     status: "read and write",
//   },
//   nikola: {
//     id: 2,
//     age: 25,
//     status: "read only",
//   },
// };

// users.mike.width = 20;
// console.log(users.mike);
// delete users.mike.width;
// console.log(users.mike.width);

// let user = {
//   name: "Maks",
//   age: 23,
//   status: "user",
//   login_name: "Frontender",
// };
// let key = prompt("select key", "age");
// console.log(user.login_name);

// let user = {
//   name: "Maks",
//   age: 23,
//   status: "user",
//   login_name: "Frontender",
//   dayPay: (nums) => {
//     console.log("test " + nums);
//   },
// };
// let user1;

// user1 = JSON.parse(JSON.stringify(user));
// console.log(user === user1);
// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

//user.dayPay(1000);

let salaries = {
  fronted: 12000,
  backend: 10000,
  designer: 8000,
  dayPay() {
    alert("We must pay salary on Tuesday!");
  },
  total() {
    for (let key in this) {
      console.log(+this[key]);
    }
    let sum = this.fronted + this.backend + this.designer;
    console.log(sum);
  },
};
salaries.total();

// function Pet(type, name, color) {
//   this.type = type;
//   this.name = name;
//   this.color = color;
// }
// let dog = new Pet("dog", "Cooper", "black");
// let cat = new Pet("cat", "Ashley", "white");
// let parrot = new Pet("parrot", "Polly", "green");
// console.log(dog.name); //Cooper
// console.log(cat.type); //cat
// console.log(parrot.color); //green
// function User(name, rating) {
//   this.name = name;
//   this.rating = rating;
//   this[Symbol.toPrimitive] = function (hint) {
//     console.log(hint); // 2*default, string, 2*number, number, number,
//     switch (hint) {
//       case "string":
//         return this.name;
//       case "number":
//         return this.rating;
//       case "default":
//         return this.name + "_" + this.rating + " ";
//     }
//   };
// }
// let user_1 = new User("Mike", 25);
// let user_2 = new User("Nikola", 36);
// console.log(user_1, user_2);
// let group = {};
// group[user_1] = user_1 + user_2;
// console.log(group); // {Mike: 'Mike_25 Nikola_36 '}
// console.log(user_2 - user_1); // 11
// console.log(+user_2 + +user_1); // 61
// console.log(String(user_2)); // Nikola
