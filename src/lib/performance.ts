
/**
 * Utility functions for performance monitoring and optimization
 */

// Core Web Vitals metrics to monitor
type MetricName = 'CLS' | 'LCP' | 'FID' | 'FCP' | 'TTFB' | 'INP';

interface PerformanceMetric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

/**
 * Get performance rating based on Core Web Vitals thresholds
 */
const getPerformanceRating = (name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const thresholds = {
    FCP: { good: 1800, poor: 3000 },
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    CLS: { good: 0.1, poor: 0.25 },
    TTFB: { good: 800, poor: 1800 },
    INP: { good: 200, poor: 500 }
  };

  const threshold = thresholds[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
};

/**
 * Get all available performance metrics
 * @returns Array of performance metrics
 */
export const getPerformanceMetrics = (): PerformanceMetric[] => {
  const metrics: PerformanceMetric[] = [];
  
  if (typeof window === 'undefined' || !('performance' in window)) {
    return metrics;
  }
  
  // First Contentful Paint
  const paintEntries = performance.getEntriesByType('paint');
  const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
  
  if (fcpEntry) {
    const fcpValue = fcpEntry.startTime;
    metrics.push({
      name: 'FCP',
      value: fcpValue,
      rating: getPerformanceRating('FCP', fcpValue)
    });
  }
  
  // Time to First Byte (from Navigation Timing API)
  const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  
  if (navigationEntries && navigationEntries.length > 0) {
    const ttfb = navigationEntries[0].responseStart;
    metrics.push({
      name: 'TTFB',
      value: ttfb,
      rating: getPerformanceRating('TTFB', ttfb)
    });
  }
  
  return metrics;
};

/**
 * Report performance metrics to console (for development)
 */
export const reportPerformanceToConsole = (): void => {
  const metrics = getPerformanceMetrics();
  
  if (metrics.length > 0 && process.env.NODE_ENV !== 'production') {
    console.group('Performance Metrics');
    metrics.forEach(metric => {
      const color = metric.rating === 'good' ? 'green' : metric.rating === 'needs-improvement' ? 'orange' : 'red';
      console.log(`%c${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`, `color: ${color}`);
    });
    console.groupEnd();
  }
};

/**
 * Measure resource loading performance
 */
export const measureResourcePerformance = (): void => {
  if (typeof window === 'undefined' || !('performance' in window)) return;

  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  const slowResources = resources.filter(resource => resource.duration > 1000);
  
  if (slowResources.length > 0 && process.env.NODE_ENV !== 'production') {
    console.group('Slow Resources (>1s)');
    slowResources.forEach(resource => {
      console.log(`${resource.name}: ${resource.duration.toFixed(2)}ms`);
    });
    console.groupEnd();
  }
};

/**
 * Initialize performance monitoring with enhanced metrics
 */
export const initializePerformanceMonitoring = (): void => {
  if (typeof window !== 'undefined') {
    // Report metrics after page load
    window.addEventListener('load', () => {
      // Use setTimeout to ensure metrics are collected after paint
      setTimeout(() => {
        reportPerformanceToConsole();
        measureResourcePerformance();
        
        // Report bundle size
        const scriptTags = document.querySelectorAll('script[src]');
        let totalSize = 0;
        
        scriptTags.forEach(script => {
          const src = script.getAttribute('src');
          if (src && src.startsWith('/')) {
            // Estimate bundle size from script count
            totalSize += 100; // Rough estimate
          }
        });
        
        if (process.env.NODE_ENV !== 'production') {
          console.log(`Estimated bundle size: ${totalSize}KB`);
        }
        
      }, 1000);
    });
    
    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50 && process.env.NODE_ENV !== 'production') {
            console.warn(`Long task detected: ${entry.duration.toFixed(2)}ms`);
          }
        });
      });
      
      try {
        observer.observe({ type: 'longtask', buffered: true });
      } catch (e) {
        // Longtask API not supported
      }
    }
  }
};

/**
 * Preload critical resources
 */
export const preloadCriticalResources = (resources: string[]): void => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = resource.endsWith('.css') ? 'style' : 
               resource.endsWith('.js') ? 'script' : 
               resource.match(/\.(jpg|jpeg|png|webp|avif)$/i) ? 'image' : 'fetch';
    link.href = resource;
    document.head.appendChild(link);
  });
};

/**
 * Lazy load non-critical resources
 */
export const lazyLoadResource = (src: string, type: 'script' | 'style'): Promise<void> => {
  return new Promise((resolve, reject) => {
    const element = type === 'script' ? document.createElement('script') : document.createElement('link');
    
    if (type === 'script') {
      (element as HTMLScriptElement).src = src;
      (element as HTMLScriptElement).async = true;
    } else {
      (element as HTMLLinkElement).rel = 'stylesheet';
      (element as HTMLLinkElement).href = src;
    }
    
    element.onload = () => resolve();
    element.onerror = () => reject();
    
    document.head.appendChild(element);
  });
};
