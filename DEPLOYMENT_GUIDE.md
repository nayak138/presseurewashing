# GitHub Pages Deployment Guide

## Step-by-Step Instructions for Beginners

### 1. Make Your Repository Public
1. Go to your GitHub repository page
2. Click on "Settings" tab (top right of the repo)
3. Scroll down to the "Danger Zone" section at the bottom
4. Click "Change repository visibility"
5. Select "Make public" and confirm

### 2. Enable GitHub Pages
1. In your repository settings, scroll up to find "Pages" in the left sidebar
2. Click on "Pages"
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy your site when you push changes

### 3. Push Your Changes
\`\`\`bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
\`\`\`

### 4. Access Your Website
After the deployment completes (check the "Actions" tab), your website will be available at:
`https://[your-username].github.io/presseurewashing/`

### 5. Monitor Deployment
- Go to the "Actions" tab in your repository
- You'll see the deployment workflow running
- Once it shows a green checkmark, your site is live!

## Important Notes
- It may take a few minutes for changes to appear on your live site
- The site will automatically redeploy whenever you push changes to the main branch
- If you encounter issues, check the "Actions" tab for error messages

## Troubleshooting
- If images don't load, make sure they're in the `public` folder
- If the site looks broken, wait a few minutes as GitHub Pages can take time to update
- Check the Actions tab for any build errors
