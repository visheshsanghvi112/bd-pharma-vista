
import { initializeApp } from 'firebase/app';
import { getAnalytics, setAnalyticsCollectionEnabled } from 'firebase/analytics';

const firebaseConfig = {
  // DO NOT store secret keys in source. Use environment variables instead.
  // Provide the key via Vite environment variable `VITE_FIREBASE_API_KEY`.
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: "bdindia.firebaseapp.com",
  projectId: "bdindia",
  storageBucket: "bdindia.firebasestorage.app",
  messagingSenderId: "747865327874",
  appId: "1:747865327874:web:827300302445fab2a85a1b",
  measurementId: "G-3N7Z5Q7H2Q"
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
