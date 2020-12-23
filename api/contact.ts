import express from "express";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import dotenv from 'dotenv'
dotenv.config()

const app: express.Application = express();
app.use(express.json())

interface FormData {
  name: string,
  email: string,
  subject: string,
  message: string
}

app.post('/', (req, res) => {
  const body: FormData = req.body
  const transporter = nodemailer.createTransport(new SMTPTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  }))
  const htmlMessage = `<p>Name: ${body.name}</p><p>Message: ${body.message}</p>`

  transporter.sendMail({
    from: body.email,
    to: process.env.GMAIL,
    replyTo: body.email,
    subject: body.subject,
    html: htmlMessage
  },
    (error, info) => {
      if (error) {
        res.status(400).json({ error: 'Error in sending email' })
      } else {
        res.status(200).json({ msg: 'Success' })
      }
    })
})

export default {
  path: '/api/contact',
  handler: app
}
