# Portfolio Customization TODO

Use this checklist to ensure you've customized everything!

## 📋 STEP 1: Personal Information

### Home Section (src/App.jsx)
- [ ] Line 19: Update greeting text
- [ ] Line 20: Update your full name

### Home Section - Animated Titles (src/App.css)
- [ ] Lines 92-102: Update the 3 rotating job titles

### About Section (src/components/About.jsx)
- [ ] Lines 10-35: Rewrite your bio/story (3 paragraphs)
- [ ] Lines 40-48: Update skills tags
- [ ] Line 50: Update CV file name/path
- [ ] Line 59: Update profile image path

---

## 📚 STEP 2: Education & Certifications

### Education History (src/components/Education.jsx)
- [ ] Lines 8-60: Update all education entries
  - [ ] Degree name
  - [ ] Institution
  - [ ] Location
  - [ ] Period
  - [ ] Status
  - [ ] Description
  - [ ] Courses list

### Certifications (src/components/Education.jsx)
- [ ] Lines 62-85: Update all certifications
  - [ ] Title
  - [ ] Issuer
  - [ ] Date
  - [ ] Icon (emoji)

---

## 💼 STEP 3: Projects

### Project Showcase (src/components/ExplodingStack.jsx)
- [ ] Lines 5-40: Update all projects (minimum 4, maximum 8)
  - [ ] Project title
  - [ ] Technologies (desc, d, d2, style)
  - [ ] Project URL
  - [ ] Project image URL
  - [ ] External link setting

---

## 📧 STEP 4: Contact Information

### Formspree Setup
- [ ] Sign up at formspree.io
- [ ] Create new form
- [ ] Copy form ID
- [ ] Line 9 in Contact.jsx: Add your Formspree ID

### Contact Details (src/components/Contact.jsx)
- [ ] Line 67: Update email address
- [ ] Line 77: Update phone number
- [ ] Line 87: Update location (city, postal code, country)

### Business Hours (src/components/Contact.jsx) - Optional
- [ ] Lines 93-105: Update your availability

---

## 🎨 STEP 5: Assets & Files

### Public Folder (public/)
- [ ] Add your profile image (e.g., softImage.png)
- [ ] Add your CV/resume PDF
- [ ] Add favicon.ico (optional)
- [ ] Add any other static assets

---

## 🔧 STEP 6: Configuration

### Page Title & SEO (index.html)
- [ ] Update `<title>` tag
- [ ] Add meta description
- [ ] Add meta keywords
- [ ] Add author name

### Package.json (for GitHub Pages deployment)
- [ ] Update "homepage" field with your GitHub Pages URL

---

## 🎨 STEP 7: Styling (Optional)

### Color Theme
If you want to change colors, update these files:
- [ ] src/components/AboutStyle.css
- [ ] src/components/ContactStyle.css
- [ ] src/components/Education.css
- [ ] src/components/ExplodingStack.css
- [ ] src/App.css

Colors to find and replace:
- Primary: `rgb(153, 0, 255)` or `#9333ea`
- Accent: `#db2777`
- Background: `#1a1a1a`

---

## ✅ STEP 8: Testing

### Before Deployment
- [ ] Install dependencies: `npm install`
- [ ] Run dev server: `npm run dev`
- [ ] Test all navigation links
- [ ] Test all external project links
- [ ] Test CV download
- [ ] Submit test contact form
- [ ] Check Formspree email
- [ ] Test on mobile view (Chrome DevTools)
- [ ] Test on tablet view
- [ ] Build project: `npm run build`
- [ ] Preview build: `npm run preview`
- [ ] Check for console errors

### Visual Check
- [ ] All images loading correctly
- [ ] No placeholder text remaining
- [ ] All sections scrolling smoothly
- [ ] Contact form working
- [ ] Projects cards looking good
- [ ] Education timeline displaying correctly

---

## 🚀 STEP 9: Deployment

### Choose a Platform
- [ ] Option 1: Vercel (recommended)
- [ ] Option 2: Netlify
- [ ] Option 3: GitHub Pages

### Deploy Checklist
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Connect to deployment platform
- [ ] Configure build settings
- [ ] Deploy site
- [ ] Test deployed site
- [ ] Fix any broken links
- [ ] Test form on live site

---

## 📢 STEP 10: Share & Promote

### Add to Profiles
- [ ] Add to LinkedIn profile
- [ ] Add to GitHub profile README
- [ ] Add to resume/CV
- [ ] Share on Twitter/X
- [ ] Share with professional network

### Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Set up Vercel Analytics
- [ ] Monitor site traffic

---

## 🔄 STEP 11: Maintenance

### Regular Updates
- [ ] Add new projects as you complete them
- [ ] Update skills as you learn new ones
- [ ] Keep certifications current
- [ ] Update contact information if changed
- [ ] Refresh bio annually

---

## 🆘 Having Issues?

Refer to these files for help:
- `README.md` - Overview and quick start
- `CUSTOMIZATION_GUIDE.md` - Detailed customization steps
- `DEPLOYMENT.md` - Deployment instructions

---

## ✨ Quick Reference

**File Locations:**
```
src/
├── App.jsx                      → Home section (name, greeting)
├── App.css                      → Home section styles, animated titles
├── components/
    ├── About.jsx                → About section content
    ├── Contact.jsx              → Contact form & info
    ├── Education.jsx            → Education & certifications
    ├── ExplodingStack.jsx       → Projects showcase
    └── NotFound.jsx             → 404 page

public/
├── softImage.png                → Your profile photo
├── YourName-Resume.pdf          → Your CV
└── favicon.ico                  → Website icon
```

**Important Line Numbers:**
- Name: App.jsx line 20
- Bio: About.jsx lines 10-35
- Skills: About.jsx lines 40-48
- Education: Education.jsx lines 8-60
- Certifications: Education.jsx lines 62-85
- Projects: ExplodingStack.jsx lines 5-40
- Contact: Contact.jsx lines 9, 67, 77, 87

---

## 💡 Pro Tips

1. **Start with content:** Update text before worrying about colors
2. **Use real data:** Don't leave placeholder information
3. **Optimize images:** Compress before adding to public folder
4. **Test frequently:** Run `npm run dev` after each major change
5. **Commit often:** Save your progress with git commits
6. **Mobile first:** Always check mobile view
7. **Keep it updated:** Add new projects regularly

---

## 🎯 Priority Order

If short on time, do these first:
1. ✅ Name and greeting (App.jsx)
2. ✅ Bio (About.jsx)
3. ✅ Contact info (Contact.jsx)
4. ✅ At least 2-3 projects (ExplodingStack.jsx)
5. ✅ Profile image and CV

Then do these:
6. Education history
7. Certifications
8. Skills tags
9. Styling changes
10. Deployment

---

Remember: A portfolio is never "finished" - it evolves with you!

Good luck! 🚀
