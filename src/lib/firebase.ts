
import { initializeApp } from 'firebase/app';
import { getAnalytics, setAnalyticsCollectionEnabled } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBqz8luYZQ146ZtOkwk3p1B11eSSvaJANo",
  authDomain: "bakerdavis-3b2ec.firebaseapp.com",
  projectId: "bakerdavis-3b2ec",
  storageBucket: "bakerdavis-3b2ec.firebasestorage.app",
  messagingSenderId: "967691621502",
  appId: "1:967691621502:web:1ae51187cfbed9c940742f",
  measurementId: "G-ETJ5GLTF4P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics with error handling
let analytics: any = null;
try {
  analytics = getAnalytics(app);
  setAnalyticsCollectionEnabled(analytics, true);
} catch (error) {
  // Silently handle analytics initialization errors
  console.warn('Firebase Analytics initialization failed:', error);
}

export { analytics };
