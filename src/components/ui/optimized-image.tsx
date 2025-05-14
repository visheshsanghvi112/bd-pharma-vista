
import { useState, useEffect } from 'react';
import { OptimizedImageProps, defaultSizes } from '@/lib/image-utils';

/**
 * OptimizedImage component that implements best practices for image loading
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  sizes = defaultSizes
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Reset loaded state when source changes
    setIsLoaded(false);
  }, [src]);

  return (
    <div 
      className={`relative overflow-hidden ${!isLoaded ? 'bg-gray-100 animate-pulse' : ''}`}
      style={{ width, height }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        sizes={sizes}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        decoding="async"
        /* Fixed dimensions prevent layout shift */
        style={{ 
          width: width ? `${width}px` : '100%', 
          height: height ? `${height}px` : 'auto',
          objectFit: 'cover'
        }}
      />
    </div>
  );
}

export default OptimizedImage;
