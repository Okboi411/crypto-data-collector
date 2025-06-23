const axios = require("axios");

async function testNetlifyDeployment() {
  console.log("🌐 Testing Netlify Deployment...");

  // Replace with your actual Netlify URL
  const netlifyUrl = "https://your-site-name.netlify.app";

  try {
    // Test 1: Check if site is accessible
    console.log("📡 Testing site accessibility...");
    const siteResponse = await axios.get(netlifyUrl, { timeout: 10000 });
    console.log("✅ Site is accessible");
    console.log("📋 Status:", siteResponse.status);

    // Test 2: Check if Netlify function is working
    console.log("🔧 Testing Netlify function...");
    const testData = {
      timestamp: new Date().toISOString(),
      test: true,
      message: "Testing Netlify deployment",
    };

    const functionResponse = await axios.post(
      `${netlifyUrl}/.netlify/functions/collect`,
      testData,
      {
        headers: { "Content-Type": "application/json" },
        timeout: 10000,
      }
    );

    console.log("✅ Netlify function is working");
    console.log("📋 Response:", functionResponse.data);
  } catch (error) {
    console.error("❌ Error:", error.message);

    if (error.response) {
      console.error("📋 Status:", error.response.status);
      console.error("📋 Data:", error.response.data);
    }

    console.log("");
    console.log("🔍 Troubleshooting steps:");
    console.log("1. Check if your Netlify site is deployed");
    console.log("2. Verify the URL is correct");
    console.log("3. Check Netlify deployment logs");
    console.log("4. Ensure environment variables are set");
  }
}

testNetlifyDeployment();
