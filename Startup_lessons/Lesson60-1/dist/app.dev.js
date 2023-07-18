"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _os = _interopRequireDefault(require("os"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const fs = require('fs');
// const users = [
//   {name: 'Mike', age: 25},
//   {name: 'Bob', age: 32},
//   {name: 'Nikola', age: 17}
// ];
// const data = {
//   users: users
// };
// const jsonData = JSON.stringify(data, null, 2);
// fs.writeFile('data.json', jsonData, (err) => {
//   if (err) {
//         console.error('Error while saving', err);
//       } else {
//         console.log('Data was saved');
//       }
// });
var filepath = _path["default"].join(_os["default"].homedir(), 'data.json');

var data = [{
  "name": "Mike",
  "age": 25
}, {
  "name": "Bob",
  "age": 32
}, {
  "name": "Nikola",
  "age": 17
}];
var jsonData = JSON.stringify(data, null, 2);

_fs["default"].writeFile(filepath, jsonData, function (err) {
  if (err) {
    console.error('Error while saving', err);
  } else {
    console.log('Data was saved');
  }
});