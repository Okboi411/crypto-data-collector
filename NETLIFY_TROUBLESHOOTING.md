# Netlify Troubleshooting Guide

## 🚨 Issue: No Emails Being Sent

### Step 1: Check Your Netlify URL

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Find your site and copy the URL
3. It should look like: `https://your-site-name.netlify.app`

### Step 2: Test the Function

1. Replace `your-site-name` in `test-netlify-function.js`
2. Run: `node test-netlify-function.js`
3. Check the output for errors

### Step 3: Check Environment Variables

In Netlify Dashboard → Site Settings → Environment Variables:

**Required Variables:**

- `GMAIL_USER` = `411plus411@gmail.com`
- `GMAIL_APP_PASSWORD` = `ktza qfmh llsn frfy`

### Step 4: Check Function Logs

1. Go to Netlify Dashboard
2. Click on your site
3. Go to "Functions" tab
4. Click on "collect" function
5. Check "Logs" for errors

### Step 5: Verify Gmail Settings

1. Check if 2FA is enabled on `411plus411@gmail.com`
2. Verify app password is correct: `ktza qfmh llsn frfy`
3. Check Gmail spam folder

### Step 6: Test Locally

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Test locally
npx netlify dev

# In another terminal
node test-netlify-function.js
```

## Common Issues & Solutions

### Issue 1: Function Not Found (404)

- **Cause:** Function not deployed
- **Solution:** Check deployment logs, redeploy

### Issue 2: Environment Variables Missing

- **Cause:** Variables not set in Netlify
- **Solution:** Add them in Site Settings

### Issue 3: Gmail Authentication Failed

- **Cause:** Wrong app password
- **Solution:** Generate new app password

### Issue 4: Function Error (500)

- **Cause:** Code error in function
- **Solution:** Check function logs

## Quick Fix Commands

```bash
# Test function directly
node test-netlify-function.js

# Check if site is accessible
curl -I https://your-site-name.netlify.app

# Test function endpoint
curl -X POST https://your-site-name.netlify.app/.netlify/functions/collect \
  -H "Content-Type: application/json" \
  -d '{"test": true}'
```

## Next Steps

1. **Tell me your Netlify URL**
2. **Run the test script**
3. **Check function logs**
4. **Verify environment variables**

Let me know what you find!
