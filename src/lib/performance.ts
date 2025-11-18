
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
      rating: fcpValue < 1800 ? 'good' : fcpValue < 3000 ? 'needs-improvement' : 'poor'
    });
  }
  
  // Time to First Byte (from Navigation Timing API)
  const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  
  if (navigationEntries && navigationEntries.length > 0) {
    const ttfb = navigationEntries[0].responseStart;
    metrics.push({
      name: 'TTFB',
      value: ttfb,
      rating: ttfb < 800 ? 'good' : ttfb < 1800 ? 'needs-improvement' : 'poor'
    });
  }
  
  return metrics;
};

/**
 * Report performance metrics to console (for development)
 */
export const reportPerformanceToConsole = (): void => {
  const metrics = getPerformanceMetrics();
  
  if (metrics.length > 0) {
    console.group('🚀 Performance Metrics');
    metrics.forEach(metric => {
      const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
      console.log(`${emoji} ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`);
    });
    
    // Add additional performance insights
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log(`📊 DOM Content Loaded: ${navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart}ms`);
        console.log(`📊 Page Load Complete: ${navigation.loadEventEnd - navigation.loadEventStart}ms`);
      }
    }
    
    console.groupEnd();
  }
};

/**
 * Track video performance metrics
 */
export const trackVideoPerformance = (videoElement: HTMLVideoElement, videoName: string): void => {
  const startTime = performance.now();
  
  const trackMetric = (eventName: string) => {
    const duration = performance.now() - startTime;
    console.log(`🎬 ${videoName} ${eventName}: ${duration.toFixed(2)}ms`);
  };
  
  videoElement.addEventListener('loadstart', () => trackMetric('load started'));
  videoElement.addEventListener('loadeddata', () => trackMetric('data loaded'));
  videoElement.addEventListener('canplay', () => trackMetric('can play'));
  videoElement.addEventListener('playing', () => trackMetric('started playing'));
};

/**
 * Initialize performance monitoring
 */
export const initializePerformanceMonitoring = (): void => {
  if (typeof window !== 'undefined') {
    // Report metrics after page load
    window.addEventListener('load', () => {
      // Use setTimeout to ensure metrics are collected after paint
      setTimeout(() => {
        reportPerformanceToConsole();
      }, 1000);
    });
    
    // Monitor long tasks that block the main thread
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // Log long tasks (over 50ms)
            if (entry.duration > 50) {
              console.warn(`⚠️ Long task detected: ${entry.duration.toFixed(2)}ms`);
            }
          }
        });
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // longtask not supported in all browsers
      }
    }
  }
};

/**
 * Debounce function for performance optimization
 * @param func Function to debounce
 * @param wait Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function for performance optimization
 * @param func Function to throttle
 * @param limit Limit in milliseconds
 * @returns Throttled function
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
