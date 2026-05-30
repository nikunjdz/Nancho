# Nancho Remake - Big Medicine Central

A modern React, TypeScript, and Vite-based remake of the Nancho Big Medicine website, dispensing magic memes for corporate ills.

## Features
- Sleek modern layout with transparent space background.
- Left and right sidebars for accessing site categories and archives.
- Clean typography and tailored color schemes using Tailwind CSS.
- Fully responsive design.

---

## Local Development

To run the project locally on your machine:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   The site will be available locally at [http://localhost:8088/](http://localhost:8088/).

3. **Build for Production:**
   ```bash
   npm run build
   ```

---

## Deployment to GitHub Pages

This project is configured to be hosted on GitHub Pages at `https://nikunjdz.github.io/Nancho/`.

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

1. Go to your repository settings on GitHub: **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Create a new file in your project at `.github/workflows/deploy.yml` with the following content:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: 'pages'
     cancel-in-progress: true

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Set up Node
           uses: actions/setup-node@v4
           with:
             node-size: 20
             cache: npm

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Setup Pages
           uses: actions/configure-pages@v4

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```
4. Commit and push this file to your `main` branch. GitHub Actions will automatically build and publish the site!

### Method 2: Manual Deploy using the `gh-pages` Package

1. **Install the deployment package:**
   ```bash
   npm install -D gh-pages
   ```
2. **Add deployment scripts** to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. **Deploy the app:**
   ```bash
   npm run deploy
   ```
   This will build the app and push the contents of the `dist` folder to a new `gh-pages` branch on GitHub, which hosts your site.
