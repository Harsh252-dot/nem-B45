const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendEmail = (to, subject, html) =>
  transporter.sendMail({ from: process.env.EMAIL, to, subject, html });
