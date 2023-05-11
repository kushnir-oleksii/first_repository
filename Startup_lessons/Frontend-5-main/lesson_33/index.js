// let data = '{"name":"Test User", "isAdmin":false}';

// let dataParse = JSON.parse(data);

// console.log(dataParse);

// dataParse.isAdmin = true;

// let dataStr = JSON.stringify(dataParse);

// console.log(dataStr);
// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => response.json())
//   .then((data) => getData(data));

// function getData(data) {
//   console.log(data);
// }

// let user = { name: "Mike", age: 18, isAdmin: false };
// user = new Proxy(user, {
//   get(target, property) {
//     console.log(1111);
//     return target[property];
//   },
//   set(target, prop, value) {
//     if (value >= 0 && value <= 100) {
//       target[prop] = value;
//       return true;
//     } else {
//       console.log("Wrong age!");
//       return false;
//     }
//   },
// });
// console.log(user.age);
