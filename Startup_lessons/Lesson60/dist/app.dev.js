"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _os = _interopRequireDefault(require("os"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
}];
var jsonData = JSON.stringify(data, null, 2);

function readFileData() {
  var fileData;
  return regeneratorRuntime.async(function readFileData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_fs["default"].promises.readFile(filepath));

        case 3:
          fileData = _context.sent;
          return _context.abrupt("return", JSON.parse(fileData));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", []);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function writeFileData(updatedData) {
  return regeneratorRuntime.async(function writeFileData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_fs["default"].promises.writeFile(filepath, updatedData));

        case 3:
          console.log('Data was saved');
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          console.error('Error while saving', _context2.t0);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

function checkFileExistence() {
  return regeneratorRuntime.async(function checkFileExistence$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_fs["default"].promises.stat(filepath));

        case 3:
          console.log('File exists');
          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          console.log('File does not exist');

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

function main() {
  var existingData, uniqueData, updatedData;
  return regeneratorRuntime.async(function main$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(readFileData());

        case 3:
          existingData = _context4.sent;
          uniqueData = [].concat(_toConsumableArray(existingData), newData).filter(function (item, index, self) {
            return index === self.findIndex(function (t) {
              return t.name === item.name && t.age === item.age;
            });
          });
          updatedData = JSON.stringify(uniqueData, null, 2);
          _context4.next = 8;
          return regeneratorRuntime.awrap(writeFileData(updatedData));

        case 8:
          _context4.next = 10;
          return regeneratorRuntime.awrap(checkFileExistence());

        case 10:
          _context4.next = 15;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.error('Error', _context4.t0);

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

main();