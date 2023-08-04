"use strict";

var socket = io();
var btnName = document.querySelector('.btn-name');
var inputName = document.querySelector('.user-name input');
var userLabel = document.querySelector('.form-msg label');
var login = document.querySelector('.login');
var formMsg = document.querySelector('.form-msg');
var chat = document.querySelector('.chat');
var msg = document.getElementById('msg');
var btnSave = document.getElementById('btn-save');
var userName = '';
btnName.addEventListener('click', function () {
  userName = inputName.value;
  userLabel.innerHTML = userName;
  login.style.display = "none";
  socket.emit('user_connected', userName);
});
formMsg.addEventListener('submit', function (e) {
  e.preventDefault();
  socket.emit('send_msg', {
    name: userName,
    msg: msg.value
  });
  msg.value = '';
});
socket.on('new_msg', function (message) {
  var li = document.createElement('li');
  li.innerHTML = "\n    <p class=\"name\">".concat(message.name, "</p>\n    <p class=\"message\">").concat(message.msg, "</p>");
  chat.appendChild(li);
});
btnSave.addEventListener('click', function () {
  // Вызываем роут на сервере для сохранения сообщений
  fetch('/save').then(function (response) {
    return response.text();
  }).then(function (message) {
    return console.log(message);
  })["catch"](function (error) {
    return console.log('Error saving messages:', error);
  });
});