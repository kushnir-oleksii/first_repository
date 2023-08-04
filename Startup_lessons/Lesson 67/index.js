import express from 'express';
import http from 'http'
import { Server } from 'socket.io';
import fs from 'fs';

const readStream = fs.createReadStream('./public/css/style.css');
const writeStream = fs.createWriteStream('./public/css/style_copy.css');

const app = express();
const server = http.createServer(app);
const io = new Server(server)
const PORT = 3000;
const messages = [];
const handleError = ()=> {
  console.log('Error');
  readStream.destroy();
  writeStream.end('Finished with error...')
  }

readStream
  .on('error', handleError)
  .pipe(writeStream)
  .on('error', handleError)


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'pug');

app.get('/', (req, res) => {
      res.render('index');
});

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
io.on('connection', (socket) => {
  socket.on('user_connected', (userName) => {
    socket.userName = userName; // Сохраняем имя пользователя в объекте сокета
    console.log(`System user ${socket.userName} is connected`);
  });

  socket.on('send_msg', data => {
    const message = { name: data.name, msg: data.msg };
    messages.push(message); // Добавляем сообщение в массив
    io.emit('new_msg', message);
  });

  socket.on('disconnect', (reason) => {
    if (socket.userName) {
      console.log(`System user ${socket.userName} is disconnected, reason: ${reason}`);
      io.emit('new_msg', { name: 'Server', msg: `${socket.userName} покинул чат` });
    }
  });
});
app.get('/save', (req, res) => {
  const messagesString = messages.map(msg => `${msg.name}: ${msg.msg}`).join('\n');
  fs.writeFile('message.txt', messagesString,  (err) => {
    if (err) {
      console.log('Error saving messages:', err);
      res.status(500).send('Error saving messages');
    } else {
      console.log('Messages saved successfully!');
      res.send('Messages saved successfully!');
    }
  });
});