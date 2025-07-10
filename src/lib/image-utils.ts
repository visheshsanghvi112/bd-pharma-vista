
/**
 * Utility functions for image optimization and handling
 */

/**
 * Returns appropriate srcset for responsive images with WebP support
 * @param baseUrl The base URL of the image
 * @param widths Array of widths to use in srcset
 * @returns srcset string
 */
export const generateSrcSet = (baseUrl: string, widths: number[] = [640, 768, 1024, 1280, 1536]): string => {
  // For external URLs or SVGs, return as is
  if (baseUrl.startsWith('http') || baseUrl.includes('.svg') || !baseUrl.includes('.')) {
    return baseUrl;
  }
  
  // Split URL to get base path and filename
  const parts = baseUrl.split('.');
  const basePath = parts.slice(0, -1).join('.');
  const extension = parts[parts.length - 1];
  
  // Generate srcset with appropriate format
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
  priority?: boolean;
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
 * Check if browser supports WebP format
 * @returns Promise<boolean>
 */
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Compress image quality for better performance
 * @param src Image source
 * @param quality Quality level (0-1)
 * @returns Promise<string>
 */
export const compressImage = async (src: string, quality: number = 0.8): Promise<string> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    
    img.src = src;
  });
};

/**
 * Default sizes attribute for responsive images
 */
export const defaultSizes = '(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw';

/**
 * Preload critical images
 * @param imageSrcs Array of image sources to preload
 */
export const preloadImages = (imageSrcs: string[]): void => {
  imageSrcs.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};
