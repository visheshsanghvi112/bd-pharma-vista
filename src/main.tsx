
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializePerformanceMonitoring, preloadCriticalResources } from './lib/performance';
import { performanceMonitor } from './lib/performance-monitor';

// Enhanced performance monitoring
const initializeApp = () => {
  // Initialize performance monitoring
  if (process.env.NODE_ENV !== 'production') {
    initializePerformanceMonitoring();
    
    // Initialize performance monitor
    performanceMonitor.onMetric((metrics) => {
      console.log('Core Web Vitals:', metrics);
    });
    
    // Log additional performance metrics
    const reportWebVitals = () => {
      if ('performance' in window) {
        const paintEntries = performance.getEntriesByType('paint');
        
        console.group('Web Vitals Detailed');
        paintEntries.forEach(entry => {
          console.log(`${entry.name}: ${entry.startTime.toFixed(2)}ms`);
        });
        console.groupEnd();
        
        // Report performance metrics
        performanceMonitor.logMetrics();
      }
    };
    
    window.addEventListener('load', reportWebVitals);
  }

  // Preload critical resources
  preloadCriticalResources([
    '/lovable-uploads/7af443a2-0eea-46d3-8be1-6ad1aab655af.png',
    '/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg'
  ]);

  createRoot(document.getElementById("root")!).render(<App />);
};

// Initialize the application
initializeApp();
