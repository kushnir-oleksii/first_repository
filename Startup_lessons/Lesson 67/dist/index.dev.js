"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _socket = require("socket.io");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var readStream = _fs["default"].createReadStream('./public/css/style.css');

var writeStream = _fs["default"].createWriteStream('./public/css/style_copy.css');

var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

var io = new _socket.Server(server);
var PORT = 3000;
var messages = [];

var handleError = function handleError() {
  console.log('Error');
  readStream.destroy();
  writeStream.end('Finished with error...');
};

readStream.on('error', handleError).pipe(writeStream).on('error', handleError);
app.use(_express["default"]["static"]('public'));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.set('view engine', 'pug');
app.get('/', function (req, res) {
  res.render('index');
});
server.listen(PORT, function () {
  console.log("Server started on http://localhost:".concat(PORT));
});
io.on('connection', function (socket) {
  socket.on('user_connected', function (userName) {
    socket.userName = userName; // Сохраняем имя пользователя в объекте сокета

    console.log("System user ".concat(socket.userName, " is connected"));
  });
  socket.on('send_msg', function (data) {
    var message = {
      name: data.name,
      msg: data.msg
    };
    messages.push(message); // Добавляем сообщение в массив

    io.emit('new_msg', message);
  });
  socket.on('disconnect', function (reason) {
    if (socket.userName) {
      console.log("System user ".concat(socket.userName, " is disconnected, reason: ").concat(reason));
      io.emit('new_msg', {
        name: 'Server',
        msg: "".concat(socket.userName, " \u043F\u043E\u043A\u0438\u043D\u0443\u043B \u0447\u0430\u0442")
      });
    }
  });
});
app.get('/save', function (req, res) {
  var messagesString = messages.map(function (msg) {
    return "".concat(msg.name, ": ").concat(msg.msg);
  }).join('\n');

  _fs["default"].writeFile('message.txt', messagesString, function (err) {
    if (err) {
      console.log('Error saving messages:', err);
      res.status(500).send('Error saving messages');
    } else {
      console.log('Messages saved successfully!');
      res.send('Messages saved successfully!');
    }
  });
});