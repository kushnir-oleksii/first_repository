// const sayHello = () => {
//   alert("Hello");
// };

// setTimeout(() => {
//   sayHello();
// }, 1900);
// sayHello
//   .then(() => {
//     //...
//   })
//   .then(() => {
//     //...
//   })
//   .then(() => {
//     //...
//   })
//   .then(() => {
//     //...
//   })
//   .then(() => {
//     //...
//   })
//   .then(() => {
//     //...
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .then(() => {
//     //...
//   })
//   .then(() => {
//     //...
//   })
//   .then(() => {
//     //...
//   })
//   .then(() => {
//     //...
//   })
//   .then(() => {
//     //...
//   });
// sayHello.catch((e) => {
//   console.log(e);
// });
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     console.log(response), response.json();
//   })
//   .then((json) => console.log(json));
const apiLink = "https://jsonplaceholder.typicode.com/";
const getData = async () => {
  try {
    let result = await fetch(apiLink + "todos/");
    if (result.ok) {
      let response = await result.json();
      console.log("Data: ", response);
    } else {
      throw new Error(`Error: ${result.status}`);
    }
  } catch (error) {
    console.log(error.message);
  }
};
getData();
