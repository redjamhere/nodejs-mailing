const nodemailer = require('nodemailer')

async function main() {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'redjamhere@gmail.com',
      pass: '-'
    }
  })

  let info = await transporter.sendMail({
    from: 'redjamhere@gmail.com',
    to: 'aynur.zaymanov@mail.ru',
    subject: "Hello",
    text: "How are you?",
    html: "<img src='http://pngriver.com/wp-content/uploads/2018/04/Download-Anime-PNG-Images.png'>"
  })

  console.log("Message sent: %s", info.messageId)
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))

}

main().catch(console.error)