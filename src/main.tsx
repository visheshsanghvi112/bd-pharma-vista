
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializePerformanceMonitoring } from './lib/performance';
import { analytics } from './lib/firebase';

// Suppress browser extension errors (they don't affect the site)
window.addEventListener('error', (event) => {
  if (
    event.filename?.includes('checkPageManual.js') ||
    event.filename?.includes('overlays.js') ||
    event.filename?.includes('content.js') ||
    event.filename?.includes('content-script.js') ||
    event.message?.includes('browser is not defined')
  ) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
});

// Enhanced performance monitoring
const initializeApp = () => {
  // Initialize Firebase Analytics
  if (analytics && process.env.NODE_ENV === 'production') {
    console.log('🔥 Firebase Analytics initialized');
  }
  
  // Initialize performance monitoring
  if (process.env.NODE_ENV !== 'production') {
    initializePerformanceMonitoring();
  }

  createRoot(document.getElementById("root")!).render(<App />);
};

// Initialize the application
initializeApp();
