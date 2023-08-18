const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Импортируйте пакет cors
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(cors()); // Используйте cors

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/send_email', (req, res) => {
    const {
        first_name,
        last_name,
        email,
        phone_number,
        subject,
        something
    } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mafyozo2905@gmail.com',
            pass: 'rsdi yngh gsxj wfvt'
        }
    });

    const mailOptions = {
        from: 'mafyozo2905@gmail.com', // Ваш Gmail-адрес
        to: 'mafyozo2905@gmail.com', // Адрес получателя
        subject: `New Contact Form Submission - ${subject}`,
        text: `
            First Name: ${first_name}
            Last Name: ${last_name}
            Email: ${email}
            Phone Number: ${phone_number}
            Subject: ${subject}
            Message: ${something}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error sending email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
