# GitHub Pages Deployment Guide

## Overview
This project is now configured to automatically deploy to GitHub Pages using GitHub Actions.

## What Was Changed

### 1. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
Created a CI/CD pipeline that:
- Triggers on pushes to the `master` branch
- Can be manually triggered from the Actions tab
- Uses official GitHub Actions:
  - `actions/checkout@v4` - Checks out the repository
  - `actions/setup-node@v4` - Sets up Node.js 20
  - `pnpm/action-setup@v4` - Sets up pnpm package manager
  - `actions/cache@v4` - Caches pnpm store for faster builds
  - `actions/configure-pages@v5` - Configures GitHub Pages
  - `actions/upload-pages-artifact@v3` - Uploads build artifacts
  - `actions/deploy-pages@v4` - Deploys to GitHub Pages

### 2. React Router Configuration (`react-router.config.ts`)
- Changed `ssr: true` to `ssr: false` to enable SPA mode (required for GitHub Pages static hosting)

### 3. Vite Configuration (`vite.config.ts`)
- Added `base` path configuration:
  - Uses `/buetianscience/` when running in GitHub Actions
  - Uses `/` for local development
- This ensures assets are loaded correctly from the GitHub Pages subdirectory

### 4. Jekyll Prevention (`public/.nojekyll`)
- Created empty `.nojekyll` file to prevent GitHub Pages from processing files with Jekyll
- This is important for React applications to work correctly

## Setup Instructions

### 1. Enable GitHub Pages in Repository Settings
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Push Changes to GitHub
```bash
git add .
git commit -m "Add GitHub Actions CI/CD pipeline for GitHub Pages"
git push origin master
```

### 3. Monitor Deployment
1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Once complete, your site will be available at: `https://<username>.github.io/buetianscience/`

## Manual Deployment
You can manually trigger a deployment:
1. Go to the **Actions** tab
2. Select the "Deploy to GitHub Pages" workflow
3. Click **Run workflow**
4. Select the `master` branch
5. Click **Run workflow**

## Local Development
The base path is automatically set to `/` for local development, so you can continue developing with:
```bash
pnpm dev
```

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are listed in `package.json`
- Verify that `pnpm run build` works locally

### Assets Not Loading
- Verify the `base` path in `vite.config.ts` matches your repository name
- Check browser console for 404 errors
- Ensure `.nojekyll` file exists in the build output

### Permissions Error
- Verify that the repository has the correct permissions set in the workflow
- Check that GitHub Pages is enabled in repository settings

## Notes
- The workflow uses pnpm for package management (faster and more efficient)
- Caching is enabled to speed up subsequent builds
- Only the `build/client` directory is deployed (SPA mode)
- Concurrent deployments are prevented to avoid conflicts

