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



// fs.writeFile(filepath, jsonData, (err) => {
//   if (err) {
//             console.error('Error while saving', err);
//           } else {
//             console.log('Data was saved');
//           }
// });

// import fs from 'fs';
// import path from 'path';
// import os from 'os';



// const filepath = path.join(os.homedir(), 'data.json');

// const data = [
//   { "name": "Mike", "age": 25 },
//   { "name": "Bob", "age": 32 },
//   { "name": "Nikola", "age": 17 }
// ];
// const newData = [
//   {"name": "Anna", "age": 24},
//   {"name": "Tom", "age": 52}
// ];
// const jsonData = JSON.stringify(data, null, 2);



// fs.promises.readFile(filepath)
//   .then((fileData) => {
//     // fileData содержит содержимое файла в формате строки
//     const jsonData = JSON.parse(fileData);
//     // jsonData содержит прочитанные данные из файла в формате JavaScript объекта

//     // Добавьте данные из newData в jsonData
//     jsonData.push(...newData);

//     // Преобразуйте данных обратно в формат JSON
//     const updatedData = JSON.stringify(jsonData, null, 2);

//     // Записывает обновленные данные обратно в файл с помощью промиса fs.promises.writeFile
//     return fs.promises.writeFile(filepath, updatedData);
//   })
//   .then(() => {
//     console.log('Data was saved');
//   })
//   .catch((err) => {
//     console.error('Error while saving', err);
//   });

//   async function isExist(filePath) {
//     try {
//       await fs.promises.stat(filePath);
//       console.log('File exists');
//       return true;
//     } catch (error) {
//       console.log('File does not exist');
//       return false;
//     }
//   }
  
//   async function checkFileExistence() {
//     await isExist(filepath);
//   }
  
//   checkFileExistence();


import fs from 'fs';
import path from 'path';
import os from 'os';

const filepath = path.join(os.homedir(), 'data.json');

const data = [
  { "name": "Mike", "age": 25 },
  { "name": "Bob", "age": 32 },
  { "name": "Nikola", "age": 17 }
];
const newData = [
  {"name": "Anna", "age": 24},
  {"name": "Tom", "age": 52}
];
const jsonData = JSON.stringify(data, null, 2);

async function readFileData() {
  try {
    const fileData = await fs.promises.readFile(filepath);
    return JSON.parse(fileData);
  } catch (err) {
    // Если файл не существует, вернуть пустой массив
    return [];
  }
}

async function writeFileData(updatedData) {
  try {
    await fs.promises.writeFile(filepath, updatedData);
    console.log('Data was saved');
  } catch (err) {
    console.error('Error while saving', err);
  }
}

async function checkFileExistence() {
  try {
    await fs.promises.stat(filepath);
    console.log('File exists');
  } catch (error) {
    console.log('File does not exist');
  }
}

async function main() {
  try {
    const existingData = await readFileData();
    const uniqueData = [...existingData, ...newData].filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.name === item.name && t.age === item.age)
    );
    const updatedData = JSON.stringify(uniqueData, null, 2);
    await writeFileData(updatedData);
    await checkFileExistence();
  } catch (err) {
    console.error('Error', err);
  }
}

main();


