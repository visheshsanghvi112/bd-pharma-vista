
# Baker and Davis Company

## Project info

This is the official web application for Baker and Davis Company, a trusted name in pharmaceutical manufacturing and global export of high-quality medicines.

## License

© 2025 Baker and Davis Pvt. Ltd. All rights reserved.

This software is proprietary and confidential. No part of this software may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of Baker and Davis Pvt. Ltd.

GSTIN No.: 27AADCJ9014B1ZW  
CIN: U74999MH2017PTC291801  
Drug License Nos.: 20B-MH-MZ1-557373, 21B-MH-MZ1-557374

## How can I edit this code?

There are several ways of editing this application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite - Fast and modern frontend build tool
- TypeScript - Strongly typed programming language that builds on JavaScript
- React - Library for building user interfaces
- shadcn-ui - High-quality, accessible UI components
- Tailwind CSS - Utility-first CSS framework
- Firebase - Platform for web and mobile applications

## Project Structure

```
baker-and-davis/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # Base UI components
│   │   ├── layout/     # Layout components
│   │   ├── about/      # About page components
│   │   └── home/       # Home page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and services
│   ├── pages/          # Page components
│   └── main.tsx        # Entry point
├── IMAGE_OPTIMIZATION.md        # Image optimization guide
├── PERFORMANCE_IMPROVEMENTS.md  # Performance changelog
├── CHANGES_SUMMARY.md           # Latest changes summary
└── README.md                    # Project documentation
```

## Performance & Optimization Documentation

This project includes comprehensive documentation for performance optimization:

- **[IMAGE_OPTIMIZATION.md](./IMAGE_OPTIMIZATION.md)** - Guide for optimizing images, includes compression tools, WebP conversion, and identifies ~30MB of images to optimize
- **[PERFORMANCE_IMPROVEMENTS.md](./PERFORMANCE_IMPROVEMENTS.md)** - Detailed changelog of all performance optimizations, testing checklist, and next steps
- **[CHANGES_SUMMARY.md](./CHANGES_SUMMARY.md)** - Executive summary of recent performance and SEO improvements

### Key Performance Features

- ✅ Advanced code splitting with vendor chunking
- ✅ Lazy loading for all below-the-fold images
- ✅ Debounced event listeners for better performance
- ✅ Reduced motion support for accessibility
- ✅ Optimized SEO meta tags and descriptions
- ✅ Performance monitoring utilities (debounce, throttle, long task detection)
- ✅ Image optimization utilities with Cloudinary support
- ✅ DNS prefetch and preconnect for external resources

## How can I deploy this project?

You can deploy this project using any hosting service that supports static sites, such as Vercel, Netlify, or GitHub Pages.

## Can I connect a custom domain to my project?

Yes, you can connect your own domain through your hosting provider's domain settings.

To connect a domain, follow your hosting provider's instructions for connecting a custom domain to your deployed application.

## Contact Information

For any inquiries related to this project, please contact:

**Baker & Davis Pvt. Ltd.**
- Registered Office: 42/44, Babu Genu Road, Shop No. 14, 2nd Floor, Om Shanti Co-Operative Housing Society Ltd., Kalbadevi, Mumbai - 400 002
- Phone: 022-48256677 / 022-40134455
- Email: admin@bdindia.in

