
/**
 * Utility functions for image optimization and handling
 */

/**
 * Returns appropriate srcset for responsive images
 * @param baseUrl The base URL of the image
 * @param widths Array of widths to use in srcset
 * @param extension Image extension
 * @returns srcset string
 */
export const generateSrcSet = (baseUrl: string, widths: number[] = [640, 768, 1024, 1280, 1536], extension: string = 'jpg'): string => {
  // For external URLs or already optimized images, return as is
  if (baseUrl.startsWith('http') || !baseUrl.includes('.')) {
    return baseUrl;
  }
  
  // Split URL to get base path and filename
  const parts = baseUrl.split('.');
  const basePath = parts.slice(0, -1).join('.');
  
  // Generate srcset
  return widths
    .map(width => `${basePath}-${width}.${extension} ${width}w`)
    .join(', ');
};

/**
 * Optimized image component props
 */
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

/**
 * Gets appropriate image loading attribute based on position in viewport
 * @param isAboveFold Whether the image is above the fold
 * @returns Loading attribute value
 */
export const getImageLoadingAttribute = (isAboveFold: boolean): 'lazy' | 'eager' => {
  return isAboveFold ? 'eager' : 'lazy';
};

/**
 * Default sizes attribute for responsive images
 */
export const defaultSizes = '(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw';
