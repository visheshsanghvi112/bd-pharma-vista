
/**
 * Enhanced performance monitoring with Web Vitals tracking
 */

interface PerformanceMetrics {
  FCP?: number;
  LCP?: number;
  FID?: number;
  CLS?: number;
  TTFB?: number;
  INP?: number;
}

interface PerformanceObserverCallback {
  (metrics: PerformanceMetrics): void;
}

/**
 * Monitor Core Web Vitals and report metrics
 */
export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};
  private callbacks: PerformanceObserverCallback[] = [];

  constructor() {
    this.initializeObservers();
  }

  /**
   * Add callback to receive performance metrics
   */
  onMetric(callback: PerformanceObserverCallback) {
    this.callbacks.push(callback);
  }

  /**
   * Initialize performance observers
   */
  private initializeObservers() {
    // First Contentful Paint
    this.observePaint();
    
    // Largest Contentful Paint
    this.observeLCP();
    
    // Cumulative Layout Shift
    this.observeCLS();
    
    // First Input Delay
    this.observeFID();
    
    // Time to First Byte
    this.observeTTFB();
    
    // Interaction to Next Paint
    this.observeINP();
  }

  /**
   * Observe paint metrics
   */
  private observePaint() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.FCP = entry.startTime;
            this.reportMetrics();
          }
        });
      });
      observer.observe({ type: 'paint', buffered: true });
    }
  }

  /**
   * Observe Largest Contentful Paint
   */
  private observeLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.LCP = lastEntry.startTime;
        this.reportMetrics();
      });
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    }
  }

  /**
   * Observe Cumulative Layout Shift
   */
  private observeCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.CLS = clsValue;
        this.reportMetrics();
      });
      observer.observe({ type: 'layout-shift', buffered: true });
    }
  }

  /**
   * Observe First Input Delay
   */
  private observeFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          this.metrics.FID = entry.processingStart - entry.startTime;
          this.reportMetrics();
        });
      });
      observer.observe({ type: 'first-input', buffered: true });
    }
  }

  /**
   * Observe Time to First Byte
   */
  private observeTTFB() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          this.metrics.TTFB = entry.responseStart - entry.requestStart;
          this.reportMetrics();
        });
      });
      observer.observe({ type: 'navigation', buffered: true });
    }
  }

  /**
   * Observe Interaction to Next Paint
   */
  private observeINP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          this.metrics.INP = entry.processingEnd - entry.startTime;
          this.reportMetrics();
        });
      });
      observer.observe({ type: 'event', buffered: true });
    }
  }

  /**
   * Report metrics to callbacks
   */
  private reportMetrics() {
    this.callbacks.forEach(callback => callback(this.metrics));
  }

  /**
   * Get current metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Log metrics to console (development only)
   */
  logMetrics() {
    if (process.env.NODE_ENV !== 'production') {
      console.group('Core Web Vitals');
      Object.entries(this.metrics).forEach(([key, value]) => {
        if (value !== undefined) {
          console.log(`${key}: ${value.toFixed(2)}ms`);
        }
      });
      console.groupEnd();
    }
  }
}

// Global performance monitor instance
export const performanceMonitor = new PerformanceMonitor();

/**
 * Measure function execution time
 */
export const measurePerformance = <T>(
  name: string,
  fn: () => T
): T => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  
  if (process.env.NODE_ENV !== 'production') {
    console.log(`${name}: ${(end - start).toFixed(2)}ms`);
  }
  
  return result;
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  }) as T;
};

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): T => {
  let inThrottle: boolean;
  return ((...args: any[]) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as T;
};
