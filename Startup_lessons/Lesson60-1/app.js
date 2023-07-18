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
import fs from 'fs';
import path from 'path';
import os from 'os';



const filepath = path.join(os.homedir(), 'data.json');

const data = [
  { "name": "Mike", "age": 25 },
  { "name": "Bob", "age": 32 },
  { "name": "Nikola", "age": 17 }
];

const jsonData = JSON.stringify(data, null, 2);

fs.writeFile(filepath, jsonData, (err) => {
  if (err) {
            console.error('Error while saving', err);
          } else {
            console.log('Data was saved');
          }
});
