require('dotenv').config()
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
app.use(express.json())

app.post('/', (req, res) => {
  const body = req.body
  sendMail(body.name, body.email, body.subject, body.message)
  res.status(200).json({ 'message': 'OH YEAH' })
})

const sendMail = (name, email, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })
  transporter.sendMail({
    from: email,
    to: 'jose.alfredo.rivera@gmail.com',
    subject: subject,
    text: 'Name: ' + name + 'Message' + message
  })
}

export default {
  path: '/api/contact',
  handler: app
}