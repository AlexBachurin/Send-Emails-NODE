const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "brendon.spinka12@ethereal.email",
      pass: "EjCaecjRv26RYb5MmK",
    },
  });
  // connect to nodemailer service and send email
  const info = await transporter.sendMail({
    from: '"john doe" <test@gmail.com>',
    to: "bar@example.com",
    subject: "Hello",
    html: "<h2>Sending emails with node.js</h2>",
  });
  res.json(info);
};

module.exports = { sendEmail };
