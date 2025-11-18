# Image Optimization Guide

## Current Issues

The following large images have been identified in the `public/lovable-uploads/` directory:

- `antibiotic-drug-selection-multi-colored-capsule-pills-blue-background-forceps-picks-capsule.jpg` - **15MB** ⚠️
- `medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg` - **8.7MB** ⚠️
- `medicalsupplies.mp4` - **6.3MB** ⚠️
- `smiling-female-pharmacist-stands-confidently-pharmacy-wears-white-lab-coat-arms-crossed.jpg` - **3.3MB** ⚠️
- `colorful-medication-tablets-capsules-displayed-light-blue-background-emphasizing-health-healthcare-themes.jpg` - **3.0MB** ⚠️

## Recommended Actions

### 1. Compress Images

Use online tools or command-line utilities to compress images:

#### Online Tools:
- [TinyPNG](https://tinypng.com/) - For PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Advanced image compression
- [Compressor.io](https://compressor.io/) - Fast compression

#### Command Line (ImageMagick):
```bash
# Install ImageMagick
sudo apt-get install imagemagick

# Compress JPEG with quality 85
convert input.jpg -quality 85 -sampling-factor 4:2:0 -strip output.jpg

# Resize and compress
convert input.jpg -resize 1920x1080\> -quality 85 output.jpg
```

### 2. Convert to WebP Format

WebP provides 25-35% better compression than JPEG:

```bash
# Install cwebp
sudo apt-get install webp

# Convert to WebP
cwebp -q 85 input.jpg -o output.webp
```

### 3. Implement Responsive Images

Use the `OptimizedImage` component or add srcset attributes:

```tsx
import { OptimizedImage } from '@/components/ui/optimized-image';

<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description"
  width={1200}
  height={675}
  loading="lazy"
/>
```

Or use native HTML:

```html
<img
  src="/path/to/image.jpg"
  srcset="
    /path/to/image-640.jpg 640w,
    /path/to/image-1024.jpg 1024w,
    /path/to/image-1920.jpg 1920w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
  alt="Description"
  loading="lazy"
  decoding="async"
/>
```

### 4. Optimize Videos

For video files like `medicalsupplies.mp4`:

1. **Use Cloudinary** (already implemented for some videos):
   - Automatic format conversion
   - Adaptive bitrate streaming
   - Responsive video sizes

2. **Compress locally**:
```bash
# Install ffmpeg
sudo apt-get install ffmpeg

# Compress video
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4
```

3. **Use poster images**:
```html
<video poster="/path/to/poster.jpg" preload="metadata">
  <source src="/path/to/video.mp4" type="video/mp4">
</video>
```

### 5. Recommended Image Sizes

| Use Case | Max Width | Max Height | Format | Quality |
|----------|-----------|------------|--------|---------|
| Hero Images | 1920px | 1080px | WebP/JPG | 85% |
| Card Images | 800px | 600px | WebP/JPG | 80% |
| Thumbnails | 400px | 300px | WebP/JPG | 75% |
| Icons/Logos | 200px | 200px | PNG/SVG | 90% |

### 6. Use CDN for Large Assets

Consider moving large images to a CDN like:
- Cloudinary (already integrated)
- Vercel Blob Storage
- AWS S3 + CloudFront

### 7. Lazy Loading Implementation

Already implemented in the codebase:
- All images below the fold use `loading="lazy"`
- `decoding="async"` for non-blocking image decode
- Partners carousel images have lazy loading

### 8. Performance Best Practices

✅ **Done**:
- Lazy loading for images
- WebP format support via Cloudinary
- Responsive images with srcset
- Preconnect to external domains
- Image dimension attributes to prevent layout shift

⚠️ **TODO**:
- Compress large static images in public/lovable-uploads/
- Convert remaining JPGs to WebP
- Create multiple size variants for responsive loading
- Implement image placeholder/blur-up technique

## Quick Wins

1. **Compress the top 5 largest images** - Can reduce total page size by ~30MB
2. **Add WebP variants** - 25-35% smaller file sizes
3. **Resize hero images to max 1920px width** - Most displays don't need larger
4. **Use Cloudinary for all product images** - Automatic optimization

## Monitoring

Use these tools to track improvements:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- Chrome DevTools Lighthouse
- Vercel Speed Insights (already integrated)

## Target Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Largest Contentful Paint (LCP) | TBD | < 2.5s |
| First Input Delay (FID) | TBD | < 100ms |
| Cumulative Layout Shift (CLS) | TBD | < 0.1 |
| Total Page Size | ~35MB+ | < 3MB |

## Resources

- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [WebP Support](https://developers.google.com/speed/webp)
