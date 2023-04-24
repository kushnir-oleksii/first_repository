"use strict";

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
var apiLink = "https://jsonplaceholder.typicode.com/";

var getData = function getData() {
  var result, response;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(apiLink + "todos/"));

        case 3:
          result = _context.sent;

          if (!result.ok) {
            _context.next = 11;
            break;
          }

          _context.next = 7;
          return regeneratorRuntime.awrap(result.json());

        case 7:
          response = _context.sent;
          console.log("Data: ", response);
          _context.next = 12;
          break;

        case 11:
          throw new Error("Error: ".concat(result.status));

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

getData();