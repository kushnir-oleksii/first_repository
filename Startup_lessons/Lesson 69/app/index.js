import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const book = 'The Wind in the Willows (introductory fragment).txt'

// const readStream = fs.createReadStream(path.join(__dirname, '/files', book))
// console.log(readStream.readableHighWaterMark);

// readStream.on('data', (chunk)=>{
//     console.log('---------');
//     console.log(chunk);
// })


// process.stdin.on("data", data => {
//     data = data.toString().toUpperCase()
//     process.stdout.write(data + "\n")
// })

// function writeToConsole(data) {
//     process.stdout.write(data + '\n');
// }


// writeToConsole('Hello, world!');
// writeToConsole('This is a test message.');

const ask = (question) => {
    return new Promise((resolve, reject) => {
      process.stdout.write(question);
      process.stdin.once('data', (data) => {
        const input = data.toString().trim().toLowerCase();
        if (['y', 'yes', 'n', 'no'].includes(input)) {
          resolve(input);
        } else {
          reject(new Error('Incorrect input'));
        }
      });
    });
  };
  
  (async () => {
    try {
      const useApp = ['y', 'yes'].includes(await ask('Do you want to use SCSS? (Y/N): '));
      const useESS = ['y', 'yes'].includes(await ask('Do you want to use ESlint? (Y/N): '));
  
      process.stdout.write(`You selected:\n`);
      process.stdout.write(`SCSS: ${useApp ? 'Yes' : 'No'}\n`);
      process.stdout.write(`ESlint: ${useESS ? 'Yes' : 'No'}\n`);
  
      process.exit();
    } catch (error) {
      process.stderr.write(error.message);
      process.exit(1);
    }
  })();
  
  