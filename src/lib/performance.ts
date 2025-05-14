
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
    console.group('Performance Metrics');
    metrics.forEach(metric => {
      console.log(`${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`);
    });
    console.groupEnd();
  }
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
  }
};
