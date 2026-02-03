# Troubleshooting Guide

Common issues and their solutions.

---

## 🚨 Issue: Blank Page on GitHub Pages

### Symptoms
- Page loads but shows nothing
- White/black empty screen
- Browser shows page loaded but no content

### Solutions

#### Solution 1: Check Configuration

**Step 1:** Open `vite.config.js`
```javascript
// Make sure this line has YOUR exact repository name:
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',

// Example for repository named "portfolio":
base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
```

**Step 2:** Open `package.json`
```json
// Make sure this matches your GitHub URL:
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"

// Example:
"homepage": "https://johndoe.github.io/portfolio"
```

**Step 3:** Verify names match exactly (case-sensitive!)

#### Solution 2: Check Browser Console

1. Open your deployed site
2. Press **F12**
3. Click **Console** tab
4. Look for red error messages

**Common errors:**

**Error: "Failed to load module"**
- Your `base` path is wrong in `vite.config.js`
- Repository name doesn't match

**Error: "404 Not Found" for JS/CSS files**
- Base path incorrect
- Files not deployed properly

#### Solution 3: Redeploy

```bash
# Clean and rebuild
rm -rf dist
npm run build
npm run deploy
```

#### Solution 4: Hard Refresh

- **Windows:** `Ctrl + Shift + R`
- **Mac:** `Cmd + Shift + R`
- Or: `Ctrl/Cmd + F5`

---

## 🚨 Issue: Images Not Loading

### Symptoms
- Broken image icons
- Alt text showing instead of images
- 404 errors for images in console

### Solutions

#### Solution 1: Check Image Paths

All paths must start with `./`:

```javascript
// ✅ CORRECT:
<img src="./profile.png" alt="Profile" />
<img src="./images/logo.png" alt="Logo" />

// ❌ WRONG:
<img src="/profile.png" alt="Profile" />
<img src="profile.png" alt="Profile" />
```

#### Solution 2: Check File Location

Images must be in the `public/` folder:
```
public/
  ├── softImage.png
  ├── resume.pdf
  └── favicon.ico
```

#### Solution 3: Check File Names

- Case-sensitive! `Profile.png` ≠ `profile.png`
- No spaces in filenames
- Use lowercase letters

---

## 🚨 Issue: Contact Form Not Working

### Symptoms
- Form submits but nothing happens
- Error message appears
- Email not received

### Solutions

#### Solution 1: Check Formspree ID

Open `src/components/Contact.jsx` line 9:
```javascript
const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
```

Make sure:
- You've signed up at [formspree.io](https://formspree.io)
- You've created a form
- You've copied the correct form ID
- The ID is in quotes

#### Solution 2: Verify Email

- Check your email for Formspree verification
- Click the verification link
- Form won't work until verified

#### Solution 3: Check Spam Folder

- Formspree emails might go to spam
- Add Formspree to safe senders

---

## 🚨 Issue: Build Fails

### Symptoms
- `npm run build` shows errors
- Red error messages in terminal

### Solutions

#### Solution 1: Check for Syntax Errors

Look for:
- Missing semicolons
- Unclosed brackets `{ } [ ]`
- Unclosed quotes `" "`
- Missing imports

#### Solution 2: Clear Cache

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Solution 3: Check Node Version

```bash
node --version
# Should be 16.x or higher

# If too old, update Node.js from nodejs.org
```

---

## 🚨 Issue: Styles Not Applying

### Symptoms
- Page looks plain/unstyled
- CSS not loading
- Wrong colors/layout

### Solutions

#### Solution 1: Check CSS Imports

Make sure CSS files are imported:
```javascript
// In component files:
import './ComponentName.css'
```

#### Solution 2: Hard Refresh

- Clear browser cache
- Hard refresh (Ctrl+Shift+R)

#### Solution 3: Check CSS File Paths

```javascript
// ✅ CORRECT:
import './AboutStyle.css'

// ❌ WRONG:
import 'AboutStyle.css'
import '../AboutStyle.css'  // unless in subdirectory
```

---

## 🚨 Issue: Navigation Not Working

### Symptoms
- Clicking nav links does nothing
- Page doesn't scroll
- Sections not found

### Solutions

#### Solution 1: Check Section IDs

In `App.jsx`, make sure sections have IDs:
```javascript
<div id="home">...</div>
<div id="about">...</div>
<div id="education">...</div>
<div id="contact">...</div>
```

#### Solution 2: Check Navigation Code

```javascript
// Should look like this:
<a onClick={() => scrollToSection('home')}>home</a>
```

#### Solution 3: Scroll Function

Make sure `scrollToSection` function exists in `App.jsx`

---

## 🚨 Issue: Port Already in Use

### Symptoms
```
Error: Port 5173 is already in use
```

### Solutions

#### Solution 1: Kill the Process

**Windows:**
```bash
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F
```

**Mac/Linux:**
```bash
lsof -ti:5173 | xargs kill -9
```

#### Solution 2: Use Different Port

Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000  // Use different port
  }
})
```

---

## 🚨 Issue: Module Not Found

### Symptoms
```
Error: Cannot find module 'react'
Error: Cannot find module 'lucide-react'
```

### Solutions

#### Solution 1: Install Dependencies

```bash
npm install
```

#### Solution 2: Install Missing Package

```bash
# If specific package is missing:
npm install react react-dom react-router-dom
npm install lucide-react @formspree/react
```

#### Solution 3: Clear and Reinstall

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🚨 Issue: Can't Push to GitHub

### Symptoms
```
Error: Permission denied
Error: Authentication failed
```

### Solutions

#### Solution 1: Check Remote URL

```bash
git remote -v
# Should show your repository URL
```

#### Solution 2: Set Git Config

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

#### Solution 3: Use HTTPS with Token

```bash
# Remove old remote
git remote remove origin

# Add with your GitHub personal access token
git remote add origin https://YOUR_TOKEN@github.com/USERNAME/REPO.git
```

---

## 🚨 Issue: gh-pages Deploy Fails

### Symptoms
```
Error: Failed to publish
Error: gh-pages not found
```

### Solutions

#### Solution 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

#### Solution 2: Check package.json

Make sure these scripts exist:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Solution 3: Build First

```bash
npm run build
npm run deploy
```

---

## 🚨 Issue: Site Works Locally But Not Deployed

### Solutions

#### Solution 1: Check Environment

Local uses development mode, deployed uses production.

Make sure `vite.config.js` base path is correct:
```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO/' : '/',
```

#### Solution 2: Test Production Build Locally

```bash
npm run build
npm run preview
# Visit http://localhost:4173
```

This simulates production environment.

---

## 🛠️ General Debugging Steps

When something doesn't work:

1. **Check the Console**
   - Browser console (F12)
   - Terminal console
   - Look for red error messages

2. **Read Error Messages**
   - They usually tell you exactly what's wrong
   - Google the error if unclear

3. **Test Locally First**
   ```bash
   npm run dev
   # Does it work locally?
   ```

4. **Build and Preview**
   ```bash
   npm run build
   npm run preview
   # Does production build work?
   ```

5. **Check Documentation**
   - README.md
   - GITHUB_PAGES.md
   - Component comments

6. **Fresh Start**
   ```bash
   rm -rf node_modules dist package-lock.json
   npm install
   npm run dev
   ```

---

## 📞 Getting Help

If you're still stuck:

1. **Check browser console** - Take screenshot of errors
2. **Check terminal output** - Copy error messages
3. **Search the error** - Google or Stack Overflow
4. **Check GitHub Issues** - For package-specific problems
5. **Review documentation** - All .md files in project

---

## ✅ Prevention Tips

Avoid issues by:

1. **Test frequently** - Don't make many changes at once
2. **Commit often** - Small commits are easier to debug
3. **Read errors carefully** - They're usually helpful
4. **Keep dependencies updated** - Run `npm update` monthly
5. **Use git branches** - For experimental changes
6. **Backup your work** - Push to GitHub regularly

---

## 🎯 Quick Fixes Summary

| Issue | Quick Fix |
|-------|-----------|
| Blank page | Check `vite.config.js` base path |
| Images broken | Use `./` in paths, check `public/` folder |
| Form not working | Verify Formspree ID and email |
| Build fails | Run `npm install` again |
| Styles missing | Check CSS imports, hard refresh |
| Can't deploy | Reinstall gh-pages package |
| Port in use | Kill process or use different port |

---

Remember: Most issues are simple configuration errors. Check the basics first!
