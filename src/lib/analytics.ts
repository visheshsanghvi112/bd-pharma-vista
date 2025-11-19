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

// Track user identification (PII)
export const identifyUser = (userData: {
  userId?: string;
  email?: string;
  name?: string;
  phone?: string;
  company?: string;
  [key: string]: any;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // Set user ID if provided
    if (userData.userId) {
      (window as any).gtag('set', { user_id: userData.userId });
    }
    
    // Set user properties
    (window as any).gtag('set', 'user_properties', {
      email: userData.email || null,
      name: userData.name || null,
      phone: userData.phone || null,
      company: userData.company || null,
      ...userData,
    });
  }

  // Track identification event
  trackEvent('user_identified', {
    has_email: !!userData.email,
    has_name: !!userData.name,
    has_phone: !!userData.phone,
    timestamp: new Date().toISOString(),
  });
};

// Track file downloads/uploads
export const trackFileAction = (action: 'download' | 'upload', fileName: string, fileType: string) => {
  trackEvent('file_action', {
    action: action,
    file_name: fileName,
    file_type: fileType,
    timestamp: new Date().toISOString(),
  });
};

// Track search queries
export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
  });
};

// Track errors
export const trackError = (errorMessage: string, errorType: string) => {
  trackEvent('error_occurred', {
    error_message: errorMessage,
    error_type: errorType,
    page_path: window.location.pathname,
  });
};

// Track chat/messaging (if you add chatbot features)
export const trackChatInteraction = (messageType: string, userMessage?: string) => {
  trackEvent('chat_interaction', {
    message_type: messageType,
    user_message: userMessage ? userMessage.substring(0, 100) : null, // Limit to 100 chars
    timestamp: new Date().toISOString(),
  });
};
