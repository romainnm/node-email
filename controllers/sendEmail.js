const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendEmailEthreal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "selina.weber44@ethereal.email",
      pass: "amPmvATZasuYqQSp7v",
    },
  });

  const info = await transporter.sendMail({
    from: '"Romain" <mapsrom1@gmail.com>',
    to: "bar@example.com",
    subject: "Hello",
    html: "<h2>Email with Node</h2>",
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "mapsrom1@gmail.com", // Change to your recipient
      from: "mapsrom1@gmail.com", // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    const info = await sgMail.send(msg)
    res.json(info)

};

module.exports = sendEmail;
