const fs = require('fs');

const users = [
  {name: 'Mike', age: 25},
  {name: 'Bob', age: 32},
  {name: 'Nikola', age: 17}
];

const data = {
  users: users
};

const jsonData = JSON.stringify(data, null, 2);

fs.writeFile('data.json', jsonData, (err) => {
});
