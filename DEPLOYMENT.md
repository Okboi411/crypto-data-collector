# Deployment Guide

This guide will help you deploy your crypto data collector bot to various platforms.

## Prerequisites

1. Make sure your code is working locally
2. Have your Gmail app password ready
3. Choose a deployment platform

## Deployment Options

### Option 1: Heroku (Recommended)

1. **Install Heroku CLI**

   ```bash
   # macOS
   brew install heroku/brew/heroku

   # Or download from https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login to Heroku**

   ```bash
   heroku login
   ```

3. **Create Heroku App**

   ```bash
   heroku create your-app-name
   ```

4. **Set Environment Variables**

   ```bash
   heroku config:set GMAIL_USER=411plus411@gmail.com
   heroku config:set GMAIL_APP_PASSWORD=your-app-password
   ```

5. **Deploy**

   ```bash
   git add .
   git commit -m "Initial deployment"
   git push heroku main
   ```

6. **Open Your App**
   ```bash
   heroku open
   ```

### Option 2: Railway

1. **Go to [Railway.app](https://railway.app)**
2. **Connect your GitHub repository**
3. **Set Environment Variables:**
   - `GMAIL_USER=411plus411@gmail.com`
   - `GMAIL_APP_PASSWORD=your-app-password`
4. **Deploy automatically**

### Option 3: Vercel

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

3. **Set Environment Variables in Vercel Dashboard**

### Option 4: Render

1. **Go to [Render.com](https://render.com)**
2. **Create a new Web Service**
3. **Connect your repository**
4. **Set Environment Variables**
5. **Deploy**

## Environment Variables

Make sure to set these environment variables on your deployment platform:

- `GMAIL_USER=411plus411@gmail.com`
- `GMAIL_APP_PASSWORD=your-16-character-app-password`
- `PORT=3000` (optional, most platforms set this automatically)

## Testing Your Deployment

After deployment, your app will be available at a URL like:

- Heroku: `https://your-app-name.herokuapp.com`
- Railway: `https://your-app-name.railway.app`
- Vercel: `https://your-app-name.vercel.app`

Visit the URL and test the form to ensure emails are being sent.

## Troubleshooting

1. **Check logs:**

   ```bash
   # Heroku
   heroku logs --tail

   # Railway
   railway logs
   ```

2. **Verify environment variables are set correctly**

3. **Test email functionality with the test script**

## Security Notes

- Never commit your `.env` file or `config.js` with real credentials
- Use environment variables for sensitive data
- The `.gitignore` file should exclude sensitive files
