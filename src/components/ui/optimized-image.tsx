
import { useState, useEffect, useRef, useCallback } from 'react';
import { OptimizedImageProps, defaultSizes, generateSrcSet } from '@/lib/image-utils';

/**
 * OptimizedImage component that implements best practices for image loading
 * with WebP support, lazy loading, and responsive images
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  sizes = defaultSizes,
  priority = false
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Generate WebP and fallback sources
  const generateImageSources = useCallback((originalSrc: string) => {
    if (originalSrc.startsWith('http') || originalSrc.includes('.svg')) {
      return { webp: originalSrc, fallback: originalSrc };
    }
    
    const parts = originalSrc.split('.');
    const basePath = parts.slice(0, -1).join('.');
    const extension = parts[parts.length - 1];
    
    return {
      webp: `${basePath}.webp`,
      fallback: originalSrc
    };
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { 
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, loading]);

  // Load image when in view
  useEffect(() => {
    if (!isInView) return;

    const sources = generateImageSources(src);
    
    // Test WebP support and load appropriate image
    const testWebP = () => {
      return new Promise((resolve) => {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
          resolve(webP.height === 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      });
    };

    testWebP().then((supportsWebP) => {
      setImageSrc(supportsWebP ? sources.webp : sources.fallback);
    });
  }, [isInView, src, generateImageSources]);

  // Reset loaded state when source changes
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    // Fallback to original image if WebP fails
    const sources = generateImageSources(src);
    if (imageSrc === sources.webp) {
      setImageSrc(sources.fallback);
    }
  }, [src, imageSrc, generateImageSources]);

  return (
    <div 
      className={`relative overflow-hidden ${!isLoaded ? 'bg-gray-100 animate-pulse' : ''}`}
      style={{ 
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
    >
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
          style={{
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}
      
      {/* Actual image */}
      {(isInView || priority) && (
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          srcSet={generateSrcSet(imageSrc)}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
          style={{ 
            width: width ? `${width}px` : '100%', 
            height: height ? `${height}px` : 'auto',
            objectFit: 'cover'
          }}
        />
      )}
    </div>
  );
}

export default OptimizedImage;
