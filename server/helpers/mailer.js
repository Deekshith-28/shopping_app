const nodemailer = require("nodemailer");
require('dotenv').config()
let host = process.env.Smtp_host
let port = process.env.Smtp_port
let mail = process.env.Smtp_mail
let password = process.env.Smtp_password

const transporter = nodemailer.createTransport({

    host: host,
    port: port,
    secure: false,
    auth: {
        user: mail,
        pass: password,
    },
});


const sendMails = async (email, name, id) => {
    let msg = ` <h2> Email Verification</h2>
    <h3>Hi ${name},</h3>
      <p>Thank you for registering! To complete your registration, please click the link below to verify your email address:</p>
      <a href='https://shopping-app-tcbd-mri8dqsbk-deekshith-28.vercel.app/mailVerify/${id}'>Verify Email</a>
      <p>This verification link will expire in 24 hours.</p>
      <p>If you did not register on our site, please ignore this email.</p>
      <p>Thank you,<br>Shopping App</p>`

    try {
        const info = await transporter.sendMail({
            from: mail, 
            to: email, 
            subject: "E-mail Verification", 
            html: msg, 
        });

        console.log("Mail sent", info.messageId);

    } catch (err) {
        console.log(err)
    }

}

module.exports = { sendMails }
