# Portfolio Customization Guide

This guide will walk you through customizing every part of your portfolio.

## 🎯 Getting Started

Before customizing, make sure you've installed dependencies:
```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

---

## 1️⃣ HOME SECTION

### Change Your Name and Greeting

**File:** `src/App.jsx` (Lines 19-21)

```javascript
<div className="greet">Hi. I am</div>
<div className="name">Your Full Name Here</div>
```

### Change Animated Job Titles

**File:** `src/App.css` (Lines 92-102)

```css
@keyframes words {
  0%, 33%{
    content: 'Software Developer';  /* First title */
    color: #a955f79e;
  }
  34%, 66% {
    content: 'Full Stack Engineer';  /* Second title */
    color: #aa48ec;
  }
  67%, 100% {
    content: 'Problem Solver';  /* Third title */
    color: rgb(244, 127, 255);
  }
}
```

---

## 2️⃣ ABOUT SECTION

**File:** `src/components/About.jsx`

### Update Your Bio

Lines 10-35: Replace the entire description with your own story:

```javascript
<div className="about-description">
  <p>
    Write your first paragraph here. Talk about what drives you,
    what you're passionate about, or your career journey.
  </p>

  <p>
    Write your second paragraph here. Mention your technical skills,
    your approach to problem-solving, or specific technologies you love.
  </p>

  <p>
    Write your third paragraph here. Talk about your methodology,
    work style, or what makes you unique.
  </p>
</div>
```

### Update Your Skills

Lines 40-48: Replace with your actual skills:

```javascript
<div className="skills-row">
  <span>React</span>
  <span>Node.js</span>
  <span>Python</span>
  <span>MongoDB</span>
  <span>Docker</span>
  <span>AWS</span>
  {/* Add as many as you want */}
</div>
```

### Update CV Link

Line 50: Change the CV file path:

```javascript
<a href='./Your-Name-Resume.pdf' className="cv-btn">Download My CV</a>
```

**Then:** Add your actual CV file to the `public` folder.

### Change Profile Image

Line 59: Update the image path:

```javascript
<img 
  src="./your-profile-image.png" 
  alt="Profile" 
/>
```

**Then:** Add your image to the `public` folder.

---

## 3️⃣ EDUCATION SECTION

**File:** `src/components/Education.jsx`

### Update Education History

Lines 8-60: Replace with your education:

```javascript
const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Your University Name",
    location: "City, Country",
    period: "2019 - 2023",
    status: "Graduated",  // or "In Progress", "Completed"
    description: "Brief description of what you studied and any highlights.",
    achievements: [
      "First achievement",
      "Second achievement",
      "Third achievement"
    ],
    courses: [
      "Data Structures",
      "Web Development",
      "Machine Learning",
      "Software Engineering",
      "Database Systems"
    ],
    color: "purple"  // or "pink"
  },
  // Add more education entries...
];
```

### Update Certifications

Lines 62-85: Replace with your certifications:

```javascript
const certifications = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: "☁️"  // Any emoji
  },
  {
    title: "Google Data Analytics Certificate",
    issuer: "Google",
    date: "2023",
    icon: "📊"
  },
  // Add more certifications...
];
```

**Tips:**
- Use emojis that represent your certification
- Common emoji options: 🏆 ⭐ 📜 🎓 ☁️ 📊 💻 🔒 🎯

---

## 4️⃣ PROJECTS SECTION

**File:** `src/components/ExplodingStack.jsx`

### Update Your Projects

Lines 5-40: Replace with your projects:

```javascript
const projects = [
  { 
    id: 1, 
    title: 'E-Commerce Platform',  // Project name
    desc: 'React',  // Tech 1
    d: 'Node.js',  // Tech 2
    d2: 'MongoDB',  // Tech 3
    style: 'REST API',  // Tech 4
    r: '-5deg',  // Rotation angle (keep as is)
    url: 'https://your-project-url.com',  // Project link
    img: 'https://your-project-image.com/image.jpg',  // Project image
    external: true  // true = opens in new tab, false = stays on site
  },
  { 
    id: 2, 
    title: 'Task Management App', 
    desc: 'Vue.js',
    d: 'Firebase',
    d2: 'Tailwind',
    style: 'PWA', 
    r: '3deg', 
    url: 'https://github.com/yourusername/project', 
    img: 'https://your-image-url.com',
    external: true
  },
  // Add up to 8 projects (they'll display in a grid)
];
```

**Where to get project images:**
- Unsplash: https://unsplash.com/
- Upload your own screenshots to Imgur: https://imgur.com/
- Use your deployed project's screenshot

---

## 5️⃣ CONTACT SECTION

**File:** `src/components/Contact.jsx`

### Step 1: Setup Formspree

1. Go to [formspree.io](https://formspree.io/)
2. Sign up (free)
3. Create a new form
4. Copy your form ID (looks like: "xyzabc123")

### Step 2: Update Form ID

Line 9: Replace with YOUR form ID:

```javascript
const [state, handleSubmit] = useForm("xyzabc123");  // YOUR ID HERE
```

### Step 3: Update Contact Information

Lines 65-85:

```javascript
// Email
<p className="item-text">youremail@example.com</p>

// Phone
<p className="item-text">+1 234 567 8900</p>

// Location
<p className="item-text">Your City, 12345<br />Your Country</p>
```

### Step 4: Update Business Hours (Optional)

Lines 93-105:

```javascript
<div className="hours-item">
  <span className="day">Monday - Friday:</span>
  <span className="time">9:00 AM - 6:00 PM</span>
</div>
<div className="hours-item">
  <span className="day">Weekend:</span>
  <span className="time">By Appointment</span>
</div>
```

---

## 6️⃣ COLOR THEME

Want to change the purple/pink theme? Here's how:

### Main Colors

Search and replace these colors across all CSS files:

- **Primary Purple:** `rgb(153, 0, 255)` or `#9333ea`
- **Accent Pink:** `#db2777`
- **Background Dark:** `#1a1a1a`

### Files to Update:
- `src/components/AboutStyle.css`
- `src/components/ContactStyle.css`
- `src/components/Education.css`
- `src/components/ExplodingStack.css`
- `src/App.css`

**Example:** To change to blue theme:
1. Replace `rgb(153, 0, 255)` with `rgb(59, 130, 246)` (blue)
2. Replace `#9333ea` with `#3b82f6` (blue)
3. Replace `#db2777` with `#06b6d4` (cyan)

---

## 7️⃣ NAVIGATION

**File:** `src/App.jsx` (Lines 11-16)

Update navigation text or add new sections:

```javascript
<a onClick={() => scrollToSection('home')}>home</a>
<a onClick={() => scrollToSection('about')}>about</a>
<a onClick={() => scrollToSection('projects')}>projects</a>
<a onClick={() => scrollToSection('contact')}>contact</a>
```

---

## 8️⃣ SEO & META TAGS

**File:** `index.html`

Update the page title and add meta tags:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio of Your Name - Software Developer" />
  <meta name="keywords" content="developer, portfolio, your name, web development" />
  <meta name="author" content="Your Name" />
  <title>Your Name - Portfolio</title>
</head>
```

---

## 9️⃣ FAVICON

Replace the favicon:

1. Create a favicon (use [favicon.io](https://favicon.io/))
2. Save as `public/favicon.ico`
3. Update in `index.html`:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

---

## 🔟 DEPLOYMENT

### Option 1: GitHub Pages

1. Create a GitHub repository
2. Update `package.json`:
```json
{
  "homepage": "https://your-username.github.io/your-repo-name"
}
```
3. Deploy:
```bash
npm run deploy
```

### Option 2: Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Import your repository
4. Click Deploy!

### Option 3: Netlify

1. Build your project:
```bash
npm run build
```
2. Drag `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

---

## ✅ Final Checklist

Before deploying, make sure you've:

- [ ] Updated your name everywhere
- [ ] Written your bio in About section
- [ ] Added your skills
- [ ] Uploaded your CV to `public` folder
- [ ] Uploaded your profile image to `public` folder
- [ ] Updated education history
- [ ] Added your certifications
- [ ] Added your projects with working links
- [ ] Set up Formspree and updated form ID
- [ ] Updated contact information
- [ ] Tested the contact form
- [ ] Updated page title in `index.html`
- [ ] Tested all navigation links
- [ ] Tested on mobile devices
- [ ] Built project successfully: `npm run build`

---

## 🆘 Common Issues

### Issue: "Module not found"
**Solution:** Run `npm install`

### Issue: Changes not showing
**Solution:** Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Contact form not working
**Solution:** Check your Formspree ID and make sure you've verified your email

### Issue: Images not loading
**Solution:** Make sure images are in the `public` folder and paths start with `./`

---

## 🎨 Pro Tips

1. **Keep it simple:** Don't overcrowd with too much information
2. **Use quality images:** High-resolution screenshots of projects
3. **Test on mobile:** Most visitors will view on phone
4. **Update regularly:** Keep projects and skills current
5. **Proofread:** Check for typos and grammatical errors

---

Need more help? Check the main README.md or open an issue on GitHub!
