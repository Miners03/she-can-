# Deployment Guide - She Can Foundation Project

## Quick Deployment Options

### Option 1: Deploy to Render.com (Recommended - Free & Easy)

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub/Google

2. **Connect GitHub Repository**
   - Click "New" → "Web Service"
   - Connect your GitHub account
   - Select the repository

3. **Configure Settings**
   - Name: `she-can-foundation`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Your site will be live at: `https://she-can-foundation.onrender.com`

---

### Option 2: Deploy to Railway.app (Free Tier Available)

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure Environment**
   - Railway auto-detects Node.js
   - Set PORT variable if needed

4. **Deploy**
   - Railway auto-deploys on push
   - Get your live URL from the Railway dashboard

---

### Option 3: Deploy to Vercel (For Frontend + Backend)

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import from Git repository

3. **Configure**
   - Vercel auto-detects Node.js
   - Framework: None
   - Root Directory: ./

4. **Deploy**
   - Click "Deploy"
   - Live at: `https://your-project.vercel.app`

---

### Option 4: Deploy to Heroku (Legacy - May Have Costs)

1. **Create Heroku Account**
   - Go to https://heroku.com
   - Sign up

2. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

3. **Login & Deploy**
   ```bash
   heroku login
   heroku create she-can-foundation
   git push heroku master
   ```

4. **Open App**
   ```bash
   heroku open
   ```

---

## Steps to Deploy Your GitHub Repository

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `she-can-foundation-form`
3. Description: `She Can Foundation - Contact Form Project`
4. Choose "Public" or "Private"
5. Click "Create repository"

### Step 2: Push to GitHub

```bash
cd "C:\Users\sharad\Desktop\she can"

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/she-can-foundation-form.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy from GitHub

Choose any option above (Render, Railway, Vercel, etc.) and connect your GitHub repository.

---

## Environment Variables (if needed)

Create a `.env` file:
```
PORT=3000
NODE_ENV=production
```

---

## Features Available After Deployment

✓ Contact form accessible worldwide
✓ Form submissions stored in memory
✓ Real-time validation
✓ Mobile-responsive design
✓ Success messages
✓ API endpoints available

---

## Next Steps for Production

1. **Add Database**
   - MongoDB Atlas (free tier)
   - PostgreSQL
   - Firebase

2. **Email Notifications**
   - SendGrid
   - AWS SES
   - Mailgun

3. **Analytics**
   - Google Analytics
   - Mixpanel

4. **SSL/HTTPS**
   - Automatically included with most platforms

---

## Support & Troubleshooting

- **Server not starting**: Check Procfile and server.js
- **Port issues**: Ensure PORT variable is set
- **Build failures**: Check package.json dependencies
- **Static files not loading**: Verify public/ folder exists

---

**Your project is ready for production deployment!** 🚀
