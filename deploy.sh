#!/bin/bash

echo "🚀 Crypto Data Collector - Deployment Script"
echo "=============================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit"
fi

# Check if Heroku CLI is installed
if ! command -v heroku &> /dev/null; then
    echo "❌ Heroku CLI not found. Please install it first:"
    echo "   brew install heroku/brew/heroku"
    echo "   or visit: https://devcenter.heroku.com/articles/heroku-cli"
    exit 1
fi

# Check if user is logged into Heroku
if ! heroku auth:whoami &> /dev/null; then
    echo "🔐 Please login to Heroku first:"
    echo "   heroku login"
    exit 1
fi

# Get app name from user
echo ""
echo "📝 Enter your Heroku app name (or press Enter to auto-generate):"
read app_name

if [ -z "$app_name" ]; then
    echo "🔧 Creating Heroku app with auto-generated name..."
    heroku create
else
    echo "🔧 Creating Heroku app: $app_name"
    heroku create $app_name
fi

# Set environment variables
echo "🔐 Setting environment variables..."
echo "Please enter your Gmail app password:"
read -s app_password

heroku config:set GMAIL_USER=411plus411@gmail.com
heroku config:set GMAIL_APP_PASSWORD=$app_password

# Deploy
echo "🚀 Deploying to Heroku..."
git add .
git commit -m "Deploy to Heroku"
git push heroku main

# Open the app
echo "🌐 Opening your deployed app..."
heroku open

echo ""
echo "✅ Deployment complete!"
echo "📧 Your app is now live and will send data to 411plus411@gmail.com"
echo "🔗 You can share this link with others" 