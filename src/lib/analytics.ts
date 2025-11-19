// Google Analytics 4 tracking utilities
import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

// Track page views
export const trackPageView = (path: string, title: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-3N7Z5Q7H2Q', {
      page_path: path,
      page_title: title,
    });
  }

  // Also track with Firebase Analytics
  if (analytics) {
    try {
      logEvent(analytics, 'page_view', {
        page_path: path,
        page_title: title,
      });
    } catch (error) {
      console.warn('Firebase Analytics tracking failed:', error);
    }
  }
};

// Track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }

  if (analytics) {
    try {
      logEvent(analytics, eventName, eventParams);
    } catch (error) {
      console.warn('Firebase Analytics event tracking failed:', error);
    }
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
  });
};
