
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializePerformanceMonitoring } from './lib/performance';

// Enhanced performance monitoring
const initializeApp = () => {
  // Initialize performance monitoring
  if (process.env.NODE_ENV !== 'production') {
    initializePerformanceMonitoring();
    
    // Log additional performance metrics
    const reportWebVitals = () => {
      if ('performance' in window) {
        const metrics = {
          FCP: window.performance.getEntriesByName('first-contentful-paint')[0],
          LCP: window.performance.getEntriesByName('largest-contentful-paint')[0],
          TTI: window.performance.getEntriesByName('time-to-interactive')[0]
        };
        
        console.log('Web Vitals:', metrics);
      }
    };
    
    window.addEventListener('load', reportWebVitals);
  }

  createRoot(document.getElementById("root")!).render(<App />);
};

// Initialize the application
initializeApp();
