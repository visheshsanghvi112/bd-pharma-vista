#!/usr/bin/env node
/**
 * SEO Snapshot Generator for React SPA
 * Generates static HTML snapshots for search engine crawlers
 * Run: node scripts/generate-snapshots.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  { path: '/', title: 'Baker and Davis | Leading Pharmaceutical Distributor Mumbai India' },
  { path: '/about', title: 'About Us | Baker and Davis Pharmaceuticals' },
  { path: '/our-story', title: 'Our Story | Baker and Davis' },
  { path: '/team', title: 'Our Team | Baker and Davis' },
  { path: '/careers', title: 'Careers | Baker and Davis' },
  { path: '/contact', title: 'Contact Us | Baker and Davis' },
  { path: '/faq', title: 'FAQ | Baker and Davis' },
  { path: '/privacy', title: 'Privacy Policy | Baker and Davis' }
];

const baseHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="googlebot" content="index, follow">
  <link rel="canonical" href="https://bdindia.in{{PATH}}">
  <title>{{TITLE}}</title>
  <meta name="description" content="Baker and Davis (Baker & Davis, BD India) - Leading pharmaceutical distributor and exporter in Mumbai, India. Global pharmaceutical distribution services.">
  <meta http-equiv="refresh" content="0;url=https://bdindia.in{{PATH}}">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Baker and Davis",
    "alternateName": ["Baker & Davis", "Baker Davis", "BD India"],
    "url": "https://bdindia.in",
    "logo": "https://bdindia.in/lovable-uploads/7af443a2-0eea-46d3-8be1-6ad1aab655af.png"
  }
  </script>
</head>
<body>
  <h1>Baker and Davis Pharmaceuticals</h1>
  <p>Loading... If you are not redirected, <a href="https://bdindia.in{{PATH}}">click here</a>.</p>
</body>
</html>`;

function generateSnapshots() {
  console.log('🚀 Generating SEO snapshots...\n');
  
  const distDir = path.join(__dirname, '..', 'dist');
  
  if (!fs.existsSync(distDir)) {
    console.error('❌ Error: dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  routes.forEach(route => {
    const routePath = route.path === '/' ? '' : route.path;
    const html = baseHtml
      .replace(/\{\{PATH\}\}/g, routePath)
      .replace('{{TITLE}}', route.title);
    
    const targetDir = path.join(distDir, routePath);
    const targetFile = path.join(targetDir, 'index.html');
    
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Only write if file doesn't exist or is different
    if (!fs.existsSync(targetFile)) {
      fs.writeFileSync(targetFile, html, 'utf8');
      console.log(`✅ Generated: ${route.path}`);
    }
  });
  
  console.log('\n✨ SEO snapshots generated successfully!');
}

generateSnapshots();
