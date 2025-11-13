#!/usr/bin/env node

/**
 * Post-Build Verification Script
 * Checks if prerendering worked and noscript content exists
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const indexPath = path.join(distDir, 'index.html');

console.log('🔍 POST-BUILD VERIFICATION');
console.log('=' .repeat(50));

// Check if dist directory exists
if (!fs.existsSync(distDir)) {
  console.error('❌ ERROR: dist directory not found!');
  process.exit(1);
}

console.log('✅ dist directory exists');

// Check if index.html exists
if (!fs.existsSync(indexPath)) {
  console.error('❌ ERROR: index.html not found in dist!');
  process.exit(1);
}

console.log('✅ index.html exists');

// Read and analyze index.html
const html = fs.readFileSync(indexPath, 'utf-8');

console.log('\n📊 HTML FILE ANALYSIS:');
console.log('-'.repeat(50));
console.log(`📄 File size: ${(html.length / 1024).toFixed(2)} KB`);

// Check for critical elements
const checks = [
  { name: 'Baker and Davis in title', test: html.includes('Baker and Davis') },
  { name: 'noscript tag exists', test: html.includes('<noscript>') },
  { name: 'noscript content has company info', test: html.includes('Premier pharmaceutical distributor') },
  { name: 'Meta description exists', test: html.includes('meta name="description"') },
  { name: 'Structured data exists', test: html.includes('application/ld+json') },
  { name: 'Google verification exists', test: html.includes('google-site-verification') },
  { name: 'Root div exists', test: html.includes('<div id="root">') },
  { name: 'Has Vite-built assets', test: html.includes('/assets/') },
];

let failCount = 0;

checks.forEach(check => {
  if (check.test) {
    console.log(`✅ ${check.name}`);
  } else {
    console.log(`❌ ${check.name}`);
    failCount++;
  }
});

// Show noscript content sample
const noscriptMatch = html.match(/<noscript>([\s\S]*?)<\/noscript>/);
if (noscriptMatch) {
  console.log('\n📝 NOSCRIPT CONTENT PREVIEW:');
  console.log('-'.repeat(50));
  const preview = noscriptMatch[1].substring(0, 200);
  console.log(preview + '...');
}

// List all HTML files in dist
console.log('\n📁 HTML FILES IN DIST:');
console.log('-'.repeat(50));
const htmlFiles = [];
function findHtmlFiles(dir, baseDir = dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findHtmlFiles(fullPath, baseDir);
    } else if (file.endsWith('.html')) {
      const relativePath = path.relative(baseDir, fullPath);
      htmlFiles.push(relativePath);
      console.log(`  📄 ${relativePath}`);
    }
  });
}

findHtmlFiles(distDir);

console.log(`\n📊 Total HTML files: ${htmlFiles.length}`);

// Check expected routes
const expectedRoutes = ['index.html', 'about', 'team', 'careers', 'contact', 'privacy', 'faq', 'our-story'];
console.log('\n🗺️  EXPECTED ROUTES CHECK:');
console.log('-'.repeat(50));

expectedRoutes.forEach(route => {
  const routePath = route === 'index.html' ? route : `${route}/index.html`;
  const exists = htmlFiles.some(f => f.includes(route));
  if (exists) {
    console.log(`✅ ${route}`);
  } else {
    console.log(`❌ ${route} - NOT FOUND`);
    failCount++;
  }
});

// Final summary
console.log('\n' + '='.repeat(50));
if (failCount === 0) {
  console.log('✅ ALL CHECKS PASSED!');
  console.log('🚀 Build is ready for deployment');
  process.exit(0);
} else {
  console.log(`❌ ${failCount} CHECK(S) FAILED!`);
  console.log('⚠️  Build may have issues');
  process.exit(1);
}
