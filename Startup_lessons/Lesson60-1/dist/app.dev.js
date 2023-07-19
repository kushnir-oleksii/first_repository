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
var newData = [{
  "name": "Anna",
  "age": 24
}, {
  "name": "Tom",
  "age": 52
}]; // const jsonData = JSON.stringify(data, null, 2);
// fs.writeFile(filepath, jsonData, (err) => {
//   if (err) {
//             console.error('Error while saving', err);
//           } else {
//             console.log('Data was saved');
//           }
// });

_fs["default"].promises.readFile(filepath).then(function (fileData) {
  // fileData содержит содержимое файла в формате строки
  var jsonData = JSON.parse(fileData); // jsonData содержит прочитанные данные из файла в формате JavaScript объекта
  // Добавьте данные из newData в jsonData

  jsonData.push.apply(jsonData, newData); // Преобразуйте данных обратно в формат JSON

  var updatedData = JSON.stringify(jsonData, null, 2); // Записывает обновленные данные обратно в файл с помощью промиса fs.promises.writeFile

  return _fs["default"].promises.writeFile(filepath, updatedData);
}).then(function () {
  console.log('Data was saved');
})["catch"](function (err) {
  console.error('Error while saving', err);
});

function isExist(filePath) {
  return regeneratorRuntime.async(function isExist$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_fs["default"].promises.stat(filePath));

        case 3:
          console.log('File exists');
          return _context.abrupt("return", true);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log('File does not exist');
          return _context.abrupt("return", false);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function checkFileExistence() {
  return regeneratorRuntime.async(function checkFileExistence$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(isExist(filepath));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}

checkFileExistence();