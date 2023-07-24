// import express from 'express'
// import path from 'path'
// import { fileURLToPath } from 'url';
// import { createRequire } from 'node:module';
// import fs, { promises}  from 'fs';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const require = createRequire(import.meta.url);

// const PORT = process.env.PORT || 3000;

// const app = express();

// app.get('/', (req, res)=>{
//     res.send('<h1>Wellcome</h1>');
//     if(process.env.NODE_ENV == 'development') {
//         console.log('development mode');
//     } else {
//         console.log('production mode');
//     }
// //     console.log('start');
// // fs.readFile(path.join(__dirname, './package.json'), (err, content) => {
// //     if (err) {
// //     console.error(err);
// //     }
// //     console.log(content.toString());
// // });
// // console.log('end');

// // console.log('start');
// // function readFilePromise(filePath) {
// //     return new Promise((resolve, reject) => {
// //     try{
// //         const data =  fs.readFileSync(filePath);
// //         resolve(data.toString())
// //     } catch(error){
// //         reject(error)
// //     }})}
  
// //   readFilePromise(path.join(__dirname, './package.json'))
// //     .then(data => {console.log(data)})
// //     .catch(err => {console.error(err)});
// // console.log('end');

// const filePath = path.join(__dirname, './package.json')

// async function getData () {
//     const fileData = await promises.readFile(filePath)
//     console.log(fileData.toString());
// }

// console.log('start');
// getData ();
// console.log('end');

// })


// app.listen(PORT, ()=> {
//     console.log(`Server started on http://localhost:${PORT}`);
// })

// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { createRequire } from 'node:module';
// import fs from 'fs';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const require = createRequire(import.meta.url);

// const PORT = process.env.PORT || 3000;

// const app = express();

// app.get('/', async (req, res) => {
//   if (process.env.NODE_ENV === 'development') {
//     console.log('development mode');
//   } 
//  else if (process.env.NODE_ENV === 'production') {
//     console.log('production mode');
//  }else {
//     console.log('start mode');
//   }

//   console.log('start');

//   try {
//     const data = await readFilePromise(path.join(__dirname, './package.json'));
//     const jsonData = JSON.parse(data);

//     const response = `
//       <h1>Welcome</h1>
//       <h2>Json text:</h2>
//       <pre>${JSON.stringify(jsonData, null, 2)}</pre>
//     `;

//     console.log('JSON data:', jsonData);
//     res.send(response); 
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error reading package.json' });
//   }

//   console.log('end');
// });

// function readFilePromise(filePath) {
//   return new Promise((resolve, reject) => {
//     try {
//       const data = fs.readFileSync(filePath);
//       resolve(data.toString());
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// app.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`);
// });

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('development mode');
  } else if (process.env.NODE_ENV === 'production') {
    console.log('production mode');
  } else {
    console.log('start mode');
  }

  console.log('start');

  try {
    const filePath = path.join(__dirname, './package.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error reading package.json' });
      }

      const jsonData = JSON.parse(data);

      const response = `
        <h1>Welcome</h1>
        <h2>Json text:</h2>
        <pre>${JSON.stringify(jsonData, null, 2)}</pre>
      `;

      console.log('JSON data:', jsonData);
      res.send(response);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error reading package.json' });
  }

  console.log('end');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
