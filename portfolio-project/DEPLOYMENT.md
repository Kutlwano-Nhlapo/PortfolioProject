# Deployment Guide

This guide covers deploying your portfolio to various platforms.

---

## 🚀 Quick Deploy Options

1. **Vercel** - Easiest, recommended for beginners ⭐
2. **Netlify** - Simple drag-and-drop option
3. **GitHub Pages** - Free hosting on GitHub
4. **Railway** - Good for full-stack apps

---

## 1. Deploy to Vercel (Recommended)

### Why Vercel?
- ✅ Fastest deployment (2 minutes)
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Free domain (yourname.vercel.app)
- ✅ Automatic builds on push

### Steps:

#### Option A: Deploy from GitHub (Recommended)

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com/)
   - Sign up with GitHub
   - Click "Add New Project"
   - Import your repository

3. **Configure:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

4. **Done!** Your site is live at `https://your-project.vercel.app`

#### Option B: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts and you're done!
```

---

## 2. Deploy to Netlify

### Method 1: Drag and Drop (Easiest)

1. **Build your project:**
```bash
npm run build
```

2. **Go to Netlify:**
   - Visit [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `dist` folder onto the page
   - Done! Your site is live

### Method 2: Connect GitHub

1. **Push to GitHub** (same as Vercel step 1)

2. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com/)
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Choose your repository

3. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

### Method 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy --prod
```

---

## 3. Deploy to GitHub Pages

⚠️ **For detailed GitHub Pages instructions, see [GITHUB_PAGES.md](./GITHUB_PAGES.md)**

### Quick Setup:

1. **Update `package.json`:**
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
}
```

2. **Update `vite.config.js`:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
})
```

3. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

4. **Deploy:**
```bash
npm run deploy
```

5. **Enable GitHub Pages:**
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

**Having issues?** See [GITHUB_PAGES.md](./GITHUB_PAGES.md) for detailed troubleshooting.

---

## 4. Deploy to Railway

### Steps:

1. **Push to GitHub** (if not already done)

2. **Go to Railway:**
   - Visit [railway.app](https://railway.app/)
   - Sign up with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure:**
   - Framework: Vite
   - Build Command: `npm run build`
   - Start Command: `npm run preview`

4. **Deploy and get your URL**

---

## 🌐 Custom Domain Setup

### For Vercel:

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel Dashboard:
   - Go to your project
   - Settings → Domains
   - Add your domain
3. Update DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:

1. In Netlify Dashboard:
   - Site settings → Domain management
   - Add custom domain
2. Update DNS records:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_SITE.netlify.app
   ```

### For GitHub Pages:

1. Create `CNAME` file in `public` folder:
   ```
   yourdomain.com
   ```
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

---

## ⚡ Environment Variables

If you need environment variables (like API keys):

### Vercel:
1. Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### Netlify:
1. Site settings → Build & deploy → Environment
2. Add variables
3. Redeploy

### Local Development:
Create `.env` file:
```
VITE_FORMSPREE_ID=your_id_here
VITE_API_KEY=your_key_here
```

Use in code:
```javascript
const formId = import.meta.env.VITE_FORMSPREE_ID;
```

---

## 🔄 Automatic Deployments

Once connected to GitHub, your site will automatically redeploy when you push changes:

```bash
git add .
git commit -m "Update content"
git push
```

Wait 1-2 minutes and your changes are live!

---

## 📊 Performance Optimization

### Before Deploying:

1. **Optimize Images:**
```bash
# Use online tools:
# - TinyPNG (tinypng.com)
# - Squoosh (squoosh.app)
# Aim for < 200KB per image
```

2. **Remove Console Logs:**
```bash
# Search for console.log in your code and remove them
```

3. **Test Build Locally:**
```bash
npm run build
npm run preview
# Check http://localhost:4173
```

---

## 🐛 Troubleshooting Deployments

### Build Fails:

**Error: "Module not found"**
```bash
# Solution: Make sure all imports are correct
# Check for case-sensitive file names
```

**Error: "Node version mismatch"**
```bash
# Solution: Specify Node version
# Create .nvmrc file:
echo "18" > .nvmrc
```

### Site Loads but Broken:

**Images not loading:**
```javascript
// Make sure paths start with ./
// ✅ Correct: ./image.png
// ❌ Wrong: /image.png
```

**Routes not working:**
```javascript
// Use HashRouter instead of BrowserRouter
// Already configured in main.jsx
```

### Form Not Working:

**Formspree not receiving:**
- Check form ID is correct
- Verify email on Formspree
- Check browser console for errors

---

## 📱 Testing Before Deploy

1. **Test on different devices:**
   - Desktop
   - Tablet
   - Mobile

2. **Test all links:**
   - Navigation
   - Project links
   - CV download
   - Social links

3. **Test form:**
   - Submit test message
   - Check spam folder for confirmation

4. **Run build:**
```bash
npm run build
npm run preview
```

5. **Check in different browsers:**
   - Chrome
   - Firefox
   - Safari
   - Edge

---

## ✅ Deployment Checklist

Before going live, make sure:

- [ ] All personal information is updated
- [ ] No placeholder text remains
- [ ] All images are optimized and loading
- [ ] CV file is in public folder
- [ ] Formspree ID is configured
- [ ] Contact form is tested
- [ ] All project links work
- [ ] No console errors in browser
- [ ] Build succeeds locally
- [ ] Site works in preview mode
- [ ] Mobile responsiveness checked
- [ ] All navigation links work
- [ ] Favicon is set
- [ ] Page title is correct
- [ ] Meta tags are set

---

## 🎉 After Deployment

1. **Share your portfolio:**
   - Add to LinkedIn
   - Add to GitHub profile
   - Share on Twitter
   - Add to resume

2. **Monitor:**
   - Check Vercel/Netlify analytics
   - Test form submissions
   - Check loading speed

3. **Update regularly:**
   - Add new projects
   - Update skills
   - Keep content fresh

---

## 💡 Pro Tips

1. **Use a custom domain** - Looks more professional
2. **Set up analytics** - Google Analytics or Vercel Analytics
3. **Enable caching** - Faster load times
4. **Compress images** - Better performance
5. **Test on slow connections** - Use Chrome DevTools throttling

---

## 🆘 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages:** [pages.github.com](https://pages.github.com)
- **Vite Deployment:** [vitejs.dev/guide/static-deploy](https://vitejs.dev/guide/static-deploy.html)

---

Good luck with your deployment! 🚀
