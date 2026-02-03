# GitHub Pages Deployment Guide

## 🎯 Complete Setup for GitHub Pages

Follow these steps carefully to deploy your portfolio to GitHub Pages.

---

## Step 1: Prepare Your Repository

### 1.1 Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. Name it (e.g., `portfolio`, `my-portfolio`, etc.)
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README
6. Click **"Create repository"**

### 1.2 Note Your Repository Details

You'll need:
- **Username**: Your GitHub username (e.g., `johndoe`)
- **Repo Name**: Your repository name (e.g., `portfolio`)

---

## Step 2: Configure Your Project

### 2.1 Update `package.json`

Open `package.json` and update the `homepage` field:

```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

**Example:**
```json
"homepage": "https://johndoe.github.io/portfolio"
```

### 2.2 Update `vite.config.js`

Open `vite.config.js` and update line 7:

```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```

**Example:**
```javascript
base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
```

⚠️ **Important:** The repo name must match exactly (case-sensitive) and include the trailing slash `/`

---

## Step 3: Initialize Git and Push

Open terminal in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO_NAME
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 4: Deploy to GitHub Pages

```bash
# Install dependencies (if not already done)
npm install

# Deploy
npm run deploy
```

This will:
1. Build your project
2. Create a `gh-pages` branch
3. Push the build to that branch

---

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**:
   - Branch: Select **`gh-pages`**
   - Folder: Select **`/ (root)`**
5. Click **"Save"**

Wait 1-2 minutes, then visit:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

---

## 🔧 Troubleshooting

### Problem 1: Blank Page

**Symptoms:** Page loads but shows nothing

**Solution A:** Check base path in `vite.config.js`
```javascript
// Make sure this matches your repo name exactly
base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
```

**Solution B:** Check browser console for errors
1. Press F12 to open DevTools
2. Look at Console tab
3. If you see 404 errors for CSS/JS files, your base path is wrong

**Solution C:** Hard refresh
- Windows: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

### Problem 2: 404 Not Found

**Check these:**
1. Is the repository public?
2. Is GitHub Pages enabled in Settings?
3. Is the branch set to `gh-pages`?
4. Did you wait 1-2 minutes after enabling?

### Problem 3: CSS/Styles Not Loading

**Fix:** Check the `base` in `vite.config.js` has the correct repo name with trailing slash

### Problem 4: Images Not Loading

**Fix:** Make sure all image paths in your code start with `./`:
```javascript
// ✅ Correct
<img src="./profile.png" />

// ❌ Wrong
<img src="/profile.png" />
```

### Problem 5: Deploy Command Fails

**Error:** `gh-pages not found`

**Fix:**
```bash
npm install gh-pages --save-dev
npm run deploy
```

**Error:** `Permission denied`

**Fix:**
```bash
# You may need to authenticate with GitHub
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

---

## 🔄 Updating Your Portfolio

After making changes:

```bash
# 1. Save your changes
git add .
git commit -m "Update portfolio content"
git push origin main

# 2. Redeploy
npm run deploy
```

Your site will update in 1-2 minutes.

---

## ✅ Verification Checklist

Before deploying, verify:

- [ ] Repository is public
- [ ] `package.json` homepage is correct
- [ ] `vite.config.js` base path matches repo name
- [ ] All files are committed to git
- [ ] `npm install` runs without errors
- [ ] `npm run build` succeeds locally
- [ ] Repository exists on GitHub

After deploying, verify:

- [ ] GitHub Pages is enabled
- [ ] `gh-pages` branch exists
- [ ] Site loads at the GitHub Pages URL
- [ ] All images load correctly
- [ ] All links work
- [ ] Contact form works
- [ ] Mobile view works

---

## 🎨 Custom Domain (Optional)

Want to use your own domain (e.g., `yourname.com`)?

### 1. Add CNAME file

Create `public/CNAME` with your domain:
```
yourname.com
```

### 2. Update DNS Settings

At your domain registrar, add these records:

**For apex domain (yourname.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain (www.yourname.com):**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### 3. Configure in GitHub

1. GitHub repo → Settings → Pages
2. Custom domain: Enter `yourname.com`
3. Check **"Enforce HTTPS"**
4. Save

Wait 24-48 hours for DNS propagation.

---

## 📊 Checking Deployment Status

### View Deployment History

1. Go to your repository
2. Click **"Actions"** tab
3. See all deployments and their status

### View Build Logs

If deployment fails:
1. Actions tab → Click failed deployment
2. View logs to see what went wrong

---

## 💡 Pro Tips

1. **Always test locally first:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check different browsers:**
   - Chrome
   - Firefox
   - Safari
   - Edge

3. **Test mobile responsiveness:**
   - Use Chrome DevTools
   - Press F12 → Toggle device toolbar

4. **Monitor your site:**
   - Add Google Analytics (optional)
   - Check periodically for broken links

5. **Keep dependencies updated:**
   ```bash
   npm update
   npm run deploy
   ```

---

## 🆘 Still Having Issues?

### Quick Fixes to Try:

1. **Clear cache and rebuild:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run deploy
   ```

2. **Check GitHub Pages status:**
   - Visit [www.githubstatus.com](https://www.githubstatus.com)

3. **Try different browser:**
   - Sometimes cache issues are browser-specific

4. **Wait longer:**
   - Sometimes takes up to 10 minutes to fully deploy

### Debug Checklist:

Run these checks:

```bash
# Check Node version (should be 16+)
node --version

# Check npm version
npm --version

# Test build locally
npm run build

# Check if build folder exists
ls -la dist/

# Preview locally
npm run preview
```

---

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [SPA GitHub Pages Guide](https://github.com/rafgraph/spa-github-pages)

---

## 🎉 Success!

Once deployed successfully:
- ✅ Share your portfolio URL on LinkedIn
- ✅ Add to your resume
- ✅ Share on Twitter
- ✅ Add to GitHub profile

Your URL will be:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

Congratulations on deploying your portfolio! 🚀
