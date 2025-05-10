import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// HTML template for the email message
const getEmailTemplate = (name, email, phone, message, services, budget, deliveryTime) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Message from Contact Form</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f9;
            padding: 0;
            margin: 0;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 30px;
        }
        .content p {
            margin: 10px 0;
        }
        .content strong {
            color: #333;
        }
        .content .message {
            margin: 20px 0;
            padding: 15px;
            background-color: #f9f9f9;
            border-left: 4px solid #4CAF50;
        }
        .content .services-list {
            list-style-type: disc;
            margin: 10px 0;
            padding-left: 20px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f4f4f9;
            color: #777;
            border-top: 1px solid #e4e4e4;
        }
        .footer p {
            margin: 0;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Inquiry</h1>
        </div>
        <div class="content">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Services:</strong></p>
            <ul class="services-list">
                ${services.map(service => `<li>${service}</li>`).join('')}
            </ul>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Delivery Time:</strong> ${deliveryTime}</p>
            <div class="message">
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            </div>
            <p>Please respond to this message at your earliest convenience.</p>
        </div>
        <div class="footer">
            <p>Best regards,</p>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request) {
  //@ts-ignore
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const services = JSON.parse(formData.get("services"));
  const budget = formData.get("budget");
  const deliveryTime = formData.get("deliveryTime");

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "desinoir.com",
    port: 465,
    secure: true,
    // tls: {
    //   ciphers: "SSLv3",
    //   rejectUnauthorized: false,
    // },
    requireTLS: true,
    auth: {
      user: "hello@desinoir.com",
      pass: "qhvj8QQ69u2Z",
    },
  });

  try {
    // send email to the admin
    const info = await transporter.sendMail({
      from: email,
      to: "hello@desinoir.com",
      subject: "Inquiry from Contact Form",
      html: getEmailTemplate(name, email, phone, message, services, budget, deliveryTime),
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" });
  }
}
