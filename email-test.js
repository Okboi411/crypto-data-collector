const nodemailer = require("nodemailer");
const config = require("./config");

// Gmail SMTP configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.gmail.user,
    pass: config.gmail.appPassword,
  },
});

// Test email
const mailOptions = {
  from: config.gmail.user,
  to: config.gmail.user,
  subject: "Test Email - Crypto Data Collector",
  text: `
        This is a test email from your crypto data collector bot.
        
        Test Details:
        - Timestamp: ${new Date().toISOString()}
        - Server: Running on localhost:3000
        - Email: ${config.gmail.user}
        
        If you receive this email, your Gmail configuration is working correctly!
    `,
};

console.log("📧 Testing email configuration...");
console.log("📧 From/To:", config.gmail.user);
console.log("📧 Subject: Test Email - Crypto Data Collector");

// Send test email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("❌ Email test failed:", error);
    console.log("");
    console.log("🔍 Common issues:");
    console.log("1. Check if 2FA is enabled on your Gmail account");
    console.log("2. Verify the app password is correct");
    console.log('3. Make sure "Less secure app access" is enabled');
    console.log("4. Check if Gmail is blocking the connection");
  } else {
    console.log("✅ Email test successful!");
    console.log("📧 Message ID:", info.messageId);
    console.log("📧 Response:", info.response);
    console.log("");
    console.log("📧 Check your email at", config.gmail.user);
  }
});
