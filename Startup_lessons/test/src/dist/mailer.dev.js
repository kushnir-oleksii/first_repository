"use strict";

var express = require('express');

var nodemailer = require('nodemailer');

var bodyParser = require('body-parser');

var app = express();
var port = 3000; // Порт, на котором будет работать сервер

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express["static"]('public')); // Папка, содержащая статические файлы (HTML, CSS, JS и т.д.)

app.post('/send_email', function (req, res) {
  var _req$body = req.body,
      first_name = _req$body.first_name,
      last_name = _req$body.last_name,
      email = _req$body.email,
      phone_number = _req$body.phone_number,
      subject = _req$body.subject,
      something = _req$body.something; // Настройки для отправки почты через Gmail

  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'mafyozo2905@gmail.com',
      pass: 'rsdi yngh gsxj wfvt'
    }
  });
  var mailOptions = {
    from: 'mafyozo2905@gmail.com',
    to: 'mafyozo2905@gmail.com',
    subject: "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430: ".concat(subject),
    text: "\n            \u0418\u043C\u044F: ".concat(first_name, " ").concat(last_name, "\n            Email: ").concat(email, "\n            \u0422\u0435\u043B\u0435\u0444\u043E\u043D: ").concat(phone_number, "\n            \u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: ").concat(something, "\n        ")
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Что-то пошло не так при отправке письма.');
    } else {
      console.log('Email отправлен: ' + info.response);
      res.send('Письмо успешно отправлено.');
    }
  });
});
app.listen(port, function () {
  console.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 \u043F\u043E\u0440\u0442\u0443 ".concat(port));
});