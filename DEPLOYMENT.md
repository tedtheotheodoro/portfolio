# Deployment Guide for Your Portfolio

This guide explains how to deploy your portfolio website to make it accessible online.

## Deployment Process Overview

As the owner of this portfolio project, you are responsible for:

1. Managing the source code in your repository
2. Choosing a hosting platform
3. Configuring any custom domains (optional)
4. Triggering the deployment process
5. Verifying the site is working correctly

## Step-by-Step Deployment Process

### 1. Build Your Project

First, create a production build of your website:

```bash
npm run build
```

This generates optimized files in the `dist` directory that are ready for deployment.

### 2. Choose a Hosting Platform

You have several options:

#### Option A: Vercel
- Create an account on [Vercel](https://vercel.com)
- Connect to your GitHub repository
- Vercel will automatically deploy your site when you push changes
- Configuration is handled automatically for React/Vite projects

#### Option B: Netlify
- Create an account on [Netlify](https://netlify.com)
- Connect to your GitHub repository or drag-and-drop your `dist` folder
- Configure build settings if connecting your repository (build command: `npm run build`, publish directory: `dist`)

#### Option C: Firebase Hosting
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
- Install Firebase CLI: `npm install -g firebase-tools`
- Login: `firebase login`
- Initialize: `firebase init hosting`
- Deploy: `firebase deploy`

#### Option D: Any Static Host
- Upload the contents of the `dist` folder to any web hosting service that supports static websites
- Examples include Amazon S3, DigitalOcean Spaces, or traditional web hosting

### 3. Verify Deployment

After deployment:
1. Open your browser and go to the URL provided by your hosting platform
2. Verify that your site loads correctly
3. Check that all features work as expected
4. Test on different devices and browsers

## Troubleshooting

If your site is not accessible:
1. Check your hosting platform's settings and logs
2. Verify build logs for any errors
3. Ensure your repository permissions are set correctly (if using GitHub integration)
4. Check that the build process completed successfully

## Custom Domains (Optional)

To use a custom domain:
1. Purchase a domain from a domain registrar (Namecheap, Google Domains, etc.)
2. Configure the domain in your hosting platform's settings
3. Update DNS settings at your domain registrar according to the hosting platform's instructions
4. Wait for DNS propagation (can take up to 48 hours)

## Ongoing Maintenance

Your responsibilities include:
1. Keeping your portfolio content updated
2. Maintaining your code repository 
3. Renewing any custom domains you might add in the future
4. Addressing any deployment issues that arise
