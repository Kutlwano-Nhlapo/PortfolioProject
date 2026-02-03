# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and React Router.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## 📝 How to Customize

### 1. Personal Information

#### **About Section** (`src/components/About.jsx`)
- Update your name, bio, and skills
- Change the skills tags
- Replace the CV link path

```javascript
// Line 10-30: Update your introduction text
<p>
  What truly sparks me is the <strong>internet as a system</strong>...
</p>

// Line 40-48: Update your skills
<div className="skills-row">
  <span>ASP.NET</span>
  <span>SQL</span>
  // Add more skills...
</div>

// Line 50: Update CV link
<a href='./Kutlwano Nhlapo Resume.pdf' className="cv-btn">Download My CV</a>
```

#### **Contact Section** (`src/components/Contact.jsx`)
- Update email, phone, and location
- Replace Formspree ID with your own

```javascript
// Line 9: Replace with YOUR Formspree form ID
const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");

// Lines 65-85: Update contact information
<p className="item-text">youremail@example.com</p>
<p className="item-text">+27 123 456 789</p>
<p className="item-text">Your City, Country</p>
```

### 2. Education & Certifications

Edit `src/components/Education.jsx`:

```javascript
// Lines 8-60: Update education history
const educationData = [
  {
    id: 1,
    degree: "Your Degree",
    institution: "Your University",
    location: "City, Country",
    period: "2020 - 2024",
    status: "Graduated",
    description: "Your description...",
    courses: ["Course 1", "Course 2"]
  }
];

// Lines 62-85: Update certifications
const certifications = [
  {
    title: "Your Certification",
    issuer: "Issuing Organization",
    date: "2024",
    icon: "🏆"
  }
];
```

### 3. Projects

Edit `src/components/ExplodingStack.jsx`:

```javascript
// Lines 5-40: Update your projects
const projects = [
  { 
    id: 1, 
    title: 'Your Project Name', 
    desc: 'Technology 1',
    d: 'Technology 2',
    d2: 'Technology 3',
    style: 'Technology 4', 
    r: '-5deg', 
    url: 'https://your-project-url.com', 
    img: 'https://your-image-url.com',
    external: true // true for external links, false for internal
  }
];
```

### 4. Home Section

Edit `src/App.jsx`:

```javascript
// Lines 19-21: Update your name and greeting
<div className="greet">Hi. I am</div>
<div className="name">Your Name</div>
```

Edit `src/App.css`:

```javascript
// Lines 92-102: Update animated titles
@keyframes words {
  0%, 33%{
    content: 'Your Title 1';
  }
  34%, 66% {
    content: 'Your Title 2';
  }
  67%, 100% {
    content: 'Your Title 3';
  }
}
```

### 5. Colors & Theme

Main colors are defined in CSS files:
- Purple: `rgb(153, 0, 255)` or `#9333ea`
- Pink: `#db2777`
- Background: `#1a1a1a`

To change the color scheme, search and replace these values across:
- `src/components/AboutStyle.css`
- `src/components/ContactStyle.css`
- `src/components/Education.css`
- `src/App.css`

### 6. Images

Add your images to the `public` folder:
- Profile image: `public/softImage.png`
- CV file: `public/Kutlwano Nhlapo Resume.pdf`
- Any other assets

Update references in components:
```javascript
// In About.jsx
<img src="./your-image.png" alt="Profile" />
```

## 🌐 Deployment

### Deploy to GitHub Pages

⚠️ **Important:** Before deploying to GitHub Pages, you must configure your project.

**See the complete guide:** [GITHUB_PAGES.md](./GITHUB_PAGES.md)

**Quick setup:**
1. Update `package.json` with your GitHub URL
2. Update `vite.config.js` with your repo name
3. Run `npm run deploy`

Full instructions in [DEPLOYMENT.md](./DEPLOYMENT.md)

### Deploy to Vercel (Recommended)

1. **Update `package.json`:**
```json
{
  "homepage": "https://your-username.github.io/your-repo-name"
}
```

2. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

3. **Deploy:**
```bash
npm run deploy
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build your project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

OR use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📧 Formspree Setup

1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (e.g., "xyzabc123")
5. Replace in `src/components/Contact.jsx`:
```javascript
const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
```

## 🎨 Component Structure

```
src/
├── components/
│   ├── About.jsx              # About section
│   ├── AboutStyle.css         # About styles
│   ├── Contact.jsx            # Contact form
│   ├── ContactStyle.css       # Contact styles
│   ├── Education.jsx          # Education timeline
│   ├── Education.css          # Education styles
│   ├── ExplodingStack.jsx     # Projects showcase
│   ├── ExplodingStack.css     # Projects styles
│   └── NotFound.jsx           # 404 page
├── App.jsx                    # Main app component
├── App.css                    # Main app styles
├── main.jsx                   # React entry point
└── index.css                  # Global styles
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Desktop (1440px+)
- Laptop (1024px - 1439px)
- Tablet (768px - 1023px)
- Mobile Landscape (600px - 767px)
- Mobile Portrait (480px - 599px)
- Small Mobile (<480px)

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Formspree** - Contact form handling
- **Lucide React** - Icons
- **CSS3** - Styling with animations

## 📄 License

Feel free to use this template for your own portfolio!

## 🤝 Support

If you encounter any issues:
1. Check that all dependencies are installed: `npm install`
2. Clear cache: `rm -rf node_modules package-lock.json && npm install`
3. Check Node version: `node --version` (should be 16+)

## 🎯 Quick Customization Checklist

- [ ] Update personal info in About.jsx
- [ ] Update contact details in Contact.jsx
- [ ] Add your Formspree form ID
- [ ] Update education history in Education.jsx
- [ ] Update certifications in Education.jsx
- [ ] Add your projects in ExplodingStack.jsx
- [ ] Replace profile image in public/softImage.png
- [ ] Add your CV in public folder
- [ ] Update name in App.jsx
- [ ] Update animated titles in App.css
- [ ] Test all links and forms
- [ ] Build and deploy!

---

Made with ❤️ using React and Vite
