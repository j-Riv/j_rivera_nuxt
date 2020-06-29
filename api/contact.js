require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')

const app = express()
app.use(express.json())

app.post('/', (req, res) => {
  const body = req.body
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_APP_PASSWOR
    }
  })
  const htmlMessage = `<p>Name: ${body.name}</p><p>Message: ${body.message}</p>`

  transporter.sendMail({
    from: body.email,
    to: 'jose.alfredo.rivera@gmail.com',
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