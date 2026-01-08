# 🚀 Deploy Maintenance Page to Production

## ✅ What's Done Locally
- ✅ Maintenance page created (`maintenance.html`)
- ✅ Original site backed up (`index.backup.html`)
- ✅ Maintenance page activated locally (`index.html`)

---

## 🌐 Deploy to Vercel (Production)

### Method 1: Git Push (Recommended)
```powershell
# 1. Check current status
git status

# 2. Add the changes
git add index.html index.backup.html maintenance.html RESTORE-SITE.md

# 3. Commit with clear message
git commit -m "🚧 Temporarily deploy maintenance page - Original backed up"

# 4. Push to production
git push origin main
```

**Vercel will automatically deploy** the maintenance page within 1-2 minutes.

---

### Method 2: Vercel CLI (Instant)
```powershell
# If you have Vercel CLI installed
vercel --prod

# If not installed, install it first:
npm i -g vercel
vercel --prod
```

---

### Method 3: Manual Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find your `bd-pharma-vista` project
3. Click **"Deploy"** or **"Redeploy"**
4. Wait 1-2 minutes for deployment

---

## 🎯 Quick Deploy Command (All-in-One)

// turbo

Run this single command to commit and deploy:
```powershell
git add . && git commit -m "🚧 Deploy maintenance page" && git push origin main
```

---

## ⏱️ Deployment Timeline
- **Git Push**: 1-2 minutes
- **Vercel CLI**: 30-60 seconds
- **Manual**: 1-2 minutes

---

## 🔍 Verify Deployment
Once deployed, check:
1. **Visit**: https://bdindia.in
2. **Should see**: Beautiful "Work in Progress" page
3. **Analytics**: Still tracking (check Google Analytics)

---

## 📊 SEO During Maintenance
- ✅ `noindex` meta tag prevents new indexing
- ✅ No 404 or 503 errors (returns 200 OK)
- ✅ All meta tags preserved for crawlers
- ✅ Contact information visible
- ✅ Google Analytics continues tracking

---

## 🔄 Restore Production Site

### When Ready to Go Live Again:

#### Step 1: Restore Locally
```powershell
Copy-Item -Path "index.backup.html" -Destination "index.html" -Force
```

#### Step 2: Deploy Restored Site
```powershell
git add index.html
git commit -m "✅ Restore full site - Maintenance complete"
git push origin main
```

---

## 🚨 Emergency Restore (Production)
If you need to restore immediately:

```powershell
# 1. Restore file
Copy-Item -Path "index.backup.html" -Destination "index.html" -Force

# 2. Quick deploy
git add index.html && git commit -m "🚨 Emergency restore" && git push origin main
```

Site will be live again in 1-2 minutes.

---

## 📝 Important Notes

### During Maintenance:
- Users see professional "Work in Progress" page
- Contact info remains accessible
- No broken links or errors
- Analytics continues tracking visits

### Your SEO is Protected:
- Temporary `noindex` prevents re-crawling
- When restored, search engines resume normal crawling
- Your #1 ranking foundation is preserved
- All structured data intact

### Branch Protection:
If you have branch protection on `main`:
1. Push to a different branch first
2. Create a Pull Request
3. Merge to `main`

---

## 🎨 Current Setup
```
📁 bd-pharma-vista/
├── 🟢 index.html              (Maintenance page - ACTIVE)
├── 🔵 index.backup.html       (Original site - Safe backup)
├── ⚪ maintenance.html         (Clean template)
├── 📖 RESTORE-SITE.md         (Restore instructions)
└── 📖 DEPLOY-MAINTENANCE.md   (This file)
```

---

**You're all set!** Just run the git commands above to deploy. 🚀
