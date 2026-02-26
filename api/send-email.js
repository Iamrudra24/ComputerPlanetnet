import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { name, email, phone, message } = req.body;

  // 2. Simple validation to ensure fields aren't empty
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields: name, email, or message." });
  }

  try {
    // 3. Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        // MUST BE A 16-DIGIT APP PASSWORD, NOT REGULAR PASSWORD
        pass: process.env.EMAIL_PASS, 
      },
    });

    // 4. Define the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending the email to yourself
      replyTo: email, // Allows you to click 'Reply' to email the customer back
      subject: `New PlanetEarth Enquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #0070f3;">New Contact Form Submission</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "Not provided"}</p>
          <hr />
          <p><b>Message:</b></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    // 5. Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully!" });

  } catch (error) {
    console.error("Nodemailer Error:", error);
    return res.status(500).json({ 
      error: "Failed to send email", 
      details: error.message 
    });
  }
}