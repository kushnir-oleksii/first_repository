const fs = require('fs');
const path = require('path');

const homedir = require('os').homedir();
const filename = 'data.json';

const filepath = path.join(homedir, filename);

// ваш код сохранения файла

fs.writeFile(filepath, data, (err) => {
  if (err) {
    console.error('Ошибка при сохранении файла:', err);
  } else {
    console.log('Данные сохранены в файле data.json');
  }
});
