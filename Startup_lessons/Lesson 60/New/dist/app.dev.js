"use strict";

var fs = require('fs');

var users = [{
  name: 'Mike',
  age: 25
}, {
  name: 'Bob',
  age: 32
}, {
  name: 'Nikola',
  age: 17
}];
var data = {
  users: users
};
var jsonData = JSON.stringify(data, null, 2);
fs.writeFile('data.json', jsonData, function (err) {});