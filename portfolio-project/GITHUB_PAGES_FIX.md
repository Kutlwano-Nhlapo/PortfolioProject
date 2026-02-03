# GitHub Pages Quick Fix Checklist

If your GitHub Pages deployment shows a blank page, check these:

## ✅ Pre-Deployment Checklist

### 1. Repository Name
- [ ] Note your exact repository name (case-sensitive)
- [ ] Example: `portfolio` or `my-portfolio`

### 2. Update `package.json`
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
```
Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

### 3. Update `vite.config.js`
```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```
Replace `YOUR_REPO_NAME` with your repository name (must match exactly!)
⚠️ **Don't forget the trailing slash /** at the end!

### 4. Files Exist
- [ ] `public/404.html` exists (already created)
- [ ] `index.html` has SPA redirect script (already added)

## 🚀 Deployment Steps

```bash
# 1. Install dependencies
npm install

# 2. Test build locally
npm run build
npm run preview
# Visit http://localhost:4173 - does it work?

# 3. Initialize git (if not done)
git init
git add .
git commit -m "Initial commit"

# 4. Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main

# 5. Deploy
npm run deploy
```

## ⚙️ Enable GitHub Pages

1. Go to: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/settings/pages`
2. Under "Source":
   - Branch: **gh-pages**
   - Folder: **/ (root)**
3. Click **Save**
4. Wait 2-3 minutes
5. Visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## 🐛 Still Blank? Try These:

### Fix 1: Check Browser Console
1. Press **F12** (or right-click → Inspect)
2. Go to **Console** tab
3. Look for errors
4. **Common error:** "Failed to load module" → Your `base` path in `vite.config.js` is wrong

### Fix 2: Verify Repository Name Match
```javascript
// In vite.config.js - these must match EXACTLY:
// ✅ Repository: "portfolio"
base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',

// ❌ Repository: "portfolio" but config says:
base: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/',
// Wrong case!
```

### Fix 3: Hard Refresh Browser
- **Windows:** `Ctrl + Shift + R`
- **Mac:** `Cmd + Shift + R`

### Fix 4: Check GitHub Pages Status
- Go to: Settings → Pages
- Make sure it says: "Your site is live at https://..."
- If it says "error", click the error message for details

### Fix 5: Check gh-pages Branch
- Go to your repository
- Click branch dropdown (usually says "main")
- Do you see a **gh-pages** branch?
- If NO: Run `npm run deploy` again

### Fix 6: Rebuild and Redeploy
```bash
# Clear everything
rm -rf dist node_modules package-lock.json

# Fresh install
npm install

# Rebuild and deploy
npm run deploy
```

## 📝 Example Configuration

**Example repository:** `https://github.com/johndoe/portfolio`

### package.json
```json
{
  "name": "portfolio",
  "homepage": "https://johndoe.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
})
```

## 🎯 Final Verification

After deployment, your site should:
- [ ] Load without blank page
- [ ] Show all content
- [ ] Load images correctly
- [ ] Have working navigation
- [ ] Contact form works
- [ ] No console errors

## 🆘 Need More Help?

See the complete guide: [GITHUB_PAGES.md](./GITHUB_PAGES.md)

## 💡 Alternative: Use Vercel Instead

If GitHub Pages is giving you trouble, Vercel is MUCH easier:
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy
5. Done! ✅

No configuration needed!
