import nodemailer from "nodemailer";

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.warn("WARNING: Gmail credentials are not set in .env.local! Email will not be sent.");
      return { success: false, error: "Credentials missing" };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"FormForge Studio" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Message sent via Gmail:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email via Gmail:", error);
    return { success: false, error };
  }
}

export async function sendOTP(email: string, otp: string, type: "register" | "reset") {
  const subject = type === "register" ? "Verify your FormForge Account" : "Reset your FormForge Password";
  
  const html = `
    <div style="font-family: sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 10px;">
      <h2 style="color: #333;">FormForge Studio</h2>
      <p style="color: #555; font-size: 16px;">
        ${type === "register" ? "Thank you for registering! Please use the following code to verify your email address:" : "We received a request to reset your password. Use the following code to proceed:"}
      </p>
      <div style="background-color: #f4f4f5; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0;">
        <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #6366f1;">${otp}</span>
      </div>
      <p style="color: #888; font-size: 14px;">This code will expire in 10 minutes. If you did not request this, please ignore this email.</p>
    </div>
  `;

  return sendEmail({ to: email, subject, html });
}
