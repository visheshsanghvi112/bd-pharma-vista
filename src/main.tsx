
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializePerformanceMonitoring } from './lib/performance';

// Initialize performance monitoring
if (process.env.NODE_ENV !== 'production') {
  initializePerformanceMonitoring();
}

createRoot(document.getElementById("root")!).render(<App />);
