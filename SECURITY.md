# Security Guide - Baker and Davis Website

## 🔐 API Key Management

### Local Development Setup

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Add your Firebase API key to `.env`:**
   ```
   VITE_FIREBASE_API_KEY=your_firebase_api_key_here
   ```

3. **NEVER commit `.env` files to git!**
   - The `.gitignore` file is configured to prevent this
   - Only commit `.env.example` (without actual secrets)

### Production Deployment (Vercel)

To deploy with the Firebase API key on Vercel:

1. **Go to Vercel Dashboard:**
   - Navigate to: https://vercel.com/dashboard
   - Select your project: `bd-pharma-vista`

2. **Add Environment Variable:**
   - Settings → Environment Variables
   - Click "Add New"
   - Name: `VITE_FIREBASE_API_KEY`
   - Value: Your Firebase API key
   - Environment: Select `Production`, `Preview`, and `Development`
   - Click "Save"

3. **Redeploy:**
   - Go to Deployments tab
   - Click "..." on latest deployment → Redeploy

### Firebase API Key Restrictions

**IMPORTANT:** Always restrict your Firebase API keys in Google Cloud Console:

1. **Go to Google Cloud Console:**
   - https://console.cloud.google.com/apis/credentials
   - Select project: `BDindia`

2. **Edit your API key and add restrictions:**

   **Application Restrictions:**
   - Select "HTTP referrers (web sites)"
   - Add allowed referrers:
     ```
     https://bdindia.in/*
     https://*.bdindia.in/*
     https://*.vercel.app/*
     http://localhost:5173/*
     http://localhost:4173/*
     ```

   **API Restrictions:**
   - Select "Restrict key"
   - Enable only the APIs you need:
     - Firebase Analytics API
     - Cloud Firestore API (if using)
     - Firebase Realtime Database API (if using)
     - Identity Toolkit API (if using auth)

3. **Set up billing alerts:**
   - Billing → Budgets & alerts
   - Create budget alert to monitor unexpected usage

### Best Practices

✅ **DO:**
- Use environment variables for ALL secrets
- Rotate API keys if they are ever exposed
- Add API restrictions in Google Cloud Console
- Enable billing alerts and quotas
- Review API usage regularly
- Use `.env.example` for documentation (no secrets)

❌ **DON'T:**
- Commit `.env` files to git
- Share API keys in chat, email, or Slack
- Use production keys for local development
- Leave API keys unrestricted
- Ignore security warnings from GitHub/Google

### What to Do If a Key Is Leaked

If you accidentally commit an API key:

1. **Immediately rotate the key:**
   - Google Cloud Console → Credentials
   - Edit the key → Regenerate Key
   - Or delete and create new key

2. **Remove from git history:**
   ```bash
   # Option 1: Using git filter-repo (recommended)
   pip install git-filter-repo
   git filter-repo --replace-text <(echo 'OLD_KEY==>REMOVED_KEY')
   
   # Force push (WARNING: rewrites history)
   git push origin main --force
   ```

3. **Update all deployment environments:**
   - Vercel environment variables
   - Update local `.env` file
   - Notify team members

4. **Enable GitHub Secret Scanning:**
   - Repository Settings → Code security and analysis
   - Enable "Secret scanning"
   - Enable "Push protection"

### Monitoring & Alerts

- **Google Cloud Console:** Monitor API usage and quotas
- **Vercel Dashboard:** Check deployment logs for errors
- **GitHub Security:** Enable Dependabot and secret scanning
- **Set up alerts:** For unusual API usage patterns

---

## 📞 Security Contact

If you discover a security vulnerability:
- **DO NOT** create a public GitHub issue
- Contact the repository maintainers directly
- Report to: security@bdindia.in

---

**Last Updated:** November 20, 2025
