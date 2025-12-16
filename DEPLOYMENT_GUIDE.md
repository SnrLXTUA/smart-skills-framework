# Step-by-Step Guide: Deploying Your Smart Skills Framework to GitHub

This guide will walk you through publishing your interactive Smart Skills Framework visualization as a live website on GitHub Pages.

## What You'll Need

- A GitHub account (free at github.com)
- Git installed on your computer
- The project files (already created!)

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name it: `smart-skills-framework`
5. Keep it **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

## Step 2: Initialize Git and Push Your Code

Open your terminal/command prompt in the project folder and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Smart Skills Framework visualization"

# Connect to your GitHub repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/smart-skills-framework.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** If prompted for credentials, you may need to use a Personal Access Token instead of your password. Create one at: Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token

## Step 3: Enable GitHub Pages (Automatic Deployment)

### Method A: Using GitHub Actions (Recommended - Automatic)

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Pages"** in the left sidebar
4. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
5. Click **"Save"**

That's it! Every time you push to the main branch, your site will automatically rebuild and deploy.

### Method B: Manual Deployment

If you prefer manual control:

1. In your terminal, install the deployment tool:
```bash
npm install --save-dev gh-pages
```

2. Update your `package.json` to add a deploy script:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

4. Go to repository Settings → Pages
5. Under "Build and deployment":
   - Source: Select **"Deploy from a branch"**
   - Branch: Select **"gh-pages"** and **"/ (root)"**
6. Click **"Save"**

## Step 4: Access Your Live Website

After a few minutes, your site will be live at:

```
https://YOUR-USERNAME.github.io/smart-skills-framework/
```

You can find the exact URL in:
- Repository → Settings → Pages → "Your site is live at..."

## Updating Your Site

### If using GitHub Actions (Method A):
Simply push changes to GitHub:
```bash
git add .
git commit -m "Update visualization"
git push
```

Your site will automatically rebuild and deploy!

### If using gh-pages (Method B):
Run the deploy command:
```bash
npm run deploy
```

## Troubleshooting

### Issue: "404 - Page Not Found"

**Solution:** Check your `vite.config.js` file. The `base` should match your repository name:
```javascript
base: '/smart-skills-framework/',
```

### Issue: "Permission denied" when pushing

**Solution:** You need a Personal Access Token:
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo` (all), `workflow`
4. Copy the token
5. Use it as your password when pushing

### Issue: Site doesn't update after pushing

**Solution:** 
1. Go to repository → Actions tab
2. Check if the workflow ran successfully
3. If failed, click on it to see error details
4. Common fix: Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Customization Options

### Change Repository Name
If you use a different repository name, update `vite.config.js`:
```javascript
base: '/your-new-repo-name/',
```

### Custom Domain
1. Buy a domain (e.g., from Namecheap, Google Domains)
2. In repository Settings → Pages → Custom domain
3. Enter your domain
4. Follow the DNS configuration instructions

### Add Google Analytics
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## File Structure Overview

```
smart-skills-framework/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automatic deployment configuration
├── src/
│   ├── App.jsx                 # Main React component
│   ├── App.css                 # Styles
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                  # HTML template
├── vite.config.js             # Build configuration
├── package.json               # Dependencies and scripts
├── .gitignore                 # Files to ignore
└── README.md                   # Documentation

```

## Next Steps

1. **Share your work:** Send the live URL to colleagues and students
2. **Get feedback:** Use GitHub Issues for bug reports and suggestions
3. **Iterate:** Update the visualization based on feedback
4. **Collaborate:** Invite others to contribute via GitHub

## Support Resources

- **GitHub Pages Documentation:** https://docs.github.com/en/pages
- **Vite Documentation:** https://vitejs.dev/guide/
- **React Documentation:** https://react.dev/

## Tips for Success

✅ Test locally first (`npm run dev`) before deploying
✅ Commit and push regularly to save your work
✅ Write descriptive commit messages
✅ Check the Actions tab after pushing to ensure successful deployment
✅ Use browser dev tools (F12) to debug issues on the live site

---

**Congratulations!** You now have a professional, interactive visualization of your Smart Skills Framework live on the web! 🎉
