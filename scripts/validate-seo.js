#!/usr/bin/env node
/**
 * SEO Validation Script
 * Checks if all SEO elements are properly configured
 * Run: node scripts/validate-seo.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checks = [];
let passed = 0;
let failed = 0;

function check(name, condition, message) {
  const status = condition ? '✅' : '❌';
  const result = { name, passed: condition, message };
  checks.push(result);
  
  if (condition) {
    passed++;
    console.log(`${status} ${name}`);
  } else {
    failed++;
    console.log(`${status} ${name}`);
    console.log(`   → ${message}`);
  }
}

console.log('\n🔍 Validating SEO Configuration...\n');

// Check sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const sitemapExists = fs.existsSync(sitemapPath);
check('Sitemap exists', sitemapExists, 'Create public/sitemap.xml');

if (sitemapExists) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  check('Sitemap has homepage', sitemap.includes('<loc>https://bdindia.in/</loc>'), 'Add homepage to sitemap');
  check('Sitemap has about page', sitemap.includes('/about'), 'Add /about to sitemap');
  check('Sitemap has contact page', sitemap.includes('/contact'), 'Add /contact to sitemap');
  check('Sitemap has updated dates', sitemap.includes('2025-11-18'), 'Update sitemap lastmod dates');
  check('Sitemap has hreflang tags', sitemap.includes('hreflang'), 'Add hreflang tags');
}

// Check robots.txt
const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
const robotsExists = fs.existsSync(robotsPath);
check('Robots.txt exists', robotsExists, 'Create public/robots.txt');

if (robotsExists) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  check('Robots allows all', robots.includes('Allow: /'), 'Add Allow: / to robots.txt');
  check('Robots has sitemap', robots.includes('Sitemap:'), 'Add Sitemap URL to robots.txt');
  check('Robots updated', robots.includes('2025-11-18'), 'Update robots.txt date');
}

// Check index.html
const indexPath = path.join(__dirname, '..', 'index.html');
const indexExists = fs.existsSync(indexPath);
check('Index.html exists', indexExists, 'Create index.html');

if (indexExists) {
  const html = fs.readFileSync(indexPath, 'utf8');
  check('Has meta description', html.includes('name="description"'), 'Add meta description');
  check('Has meta keywords', html.includes('name="keywords"'), 'Add meta keywords');
  check('Has canonical URL', html.includes('rel="canonical"'), 'Add canonical link');
  check('Has Open Graph tags', html.includes('property="og:'), 'Add Open Graph meta tags');
  check('Has Twitter tags', html.includes('name="twitter:'), 'Add Twitter Card meta tags');
  check('Has structured data', html.includes('application/ld+json'), 'Add JSON-LD structured data');
  check('Has Google verification', html.includes('google-site-verification'), 'Add Google verification tag');
  check('Has robots meta', html.includes('name="robots"'), 'Add robots meta tag');
  check('Has fragment meta', html.includes('name="fragment"'), 'Add fragment meta for AJAX crawling');
}

// Check vercel.json
const vercelPath = path.join(__dirname, '..', 'vercel.json');
const vercelExists = fs.existsSync(vercelPath);
check('Vercel.json exists', vercelExists, 'Create vercel.json');

if (vercelExists) {
  const vercel = fs.readFileSync(vercelPath, 'utf8');
  check('Has rewrites for SPA', vercel.includes('rewrites'), 'Add SPA rewrites to vercel.json');
  check('Has headers config', vercel.includes('headers'), 'Add security headers');
}

// Check Seo component
const seoPath = path.join(__dirname, '..', 'src', 'components', 'Seo.tsx');
const seoExists = fs.existsSync(seoPath);
check('SEO component exists', seoExists, 'Create src/components/Seo.tsx');

if (seoExists) {
  const seo = fs.readFileSync(seoPath, 'utf8');
  check('SEO uses react-helmet-async', seo.includes('react-helmet-async'), 'Install react-helmet-async');
  check('SEO has schema markup', seo.includes('application/ld+json'), 'Add structured data to SEO component');
  check('SEO has hreflang', seo.includes('hrefLang') || seo.includes('hreflang'), 'Add hreflang support');
}

// Summary
console.log('\n' + '='.repeat(50));
console.log(`\n📊 Results: ${passed} passed, ${failed} failed\n`);

if (failed === 0) {
  console.log('🎉 All SEO checks passed! Your site is ready for search engines.\n');
  console.log('Next steps:');
  console.log('1. Deploy your site');
  console.log('2. Submit sitemap to Google Search Console');
  console.log('3. Request indexing for all pages');
  console.log('4. Monitor indexing status\n');
} else {
  console.log('⚠️  Some SEO checks failed. Please review and fix the issues above.\n');
  process.exit(1);
}
