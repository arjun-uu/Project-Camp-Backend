import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_SMTP_HOST,
  port: Number(process.env.MAILTRAP_SMTP_PORT),
  auth: {
    user: process.env.MAILTRAP_SMTP_USER,
    pass: process.env.MAILTRAP_SMTP_PASS,
  },
  secure: false, // true only for port 465
});

// Generic sendMail function
const sendMail = async ({ email, subject, mailgenContent }) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "http://taskmanagerlink.com",
    },
  });

  const emailHtml = mailGenerator.generate(mailgenContent);
  const emailText = mailGenerator.generatePlaintext(mailgenContent);

  const mailOptions = {
    from: '"Task Manager" <no-reply@example.com>',
    to: email,
    subject,
    text: emailText,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully to ${email}`);
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
  }
};

// Email content for verification
const emailVerificationMailgenContent = (username, verificationURL) => ({
  body: {
    name: username,
    intro: "Welcome to Task Manager! We're excited to have you onboard.",
    action: {
      instructions: "Click below to verify your account:",
      button: {
        color: "#22BC66",
        text: "Confirm Account",
        link: verificationURL,
      },
    },
    outro: "Need help? Just reply to this email.",
  },
});

// Email content for password reset
const forgotPasswordMailgenContent = (username, passwordResetURL) => ({
  body: {
    name: username,
    intro: "We received a request to reset your password.",
    action: {
      instructions: "Click below to reset your password:",
      button: {
        color: "#22BC66",
        text: "Reset Password",
        link: passwordResetURL,
      },
    },
    outro: "Need help? Just reply to this email.",
  },
});

export {
  sendMail,
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
};
