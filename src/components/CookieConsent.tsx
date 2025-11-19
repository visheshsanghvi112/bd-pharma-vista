import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 1 second delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Enable Google Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    
    // Disable Google Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-4">
                {/* Cookie Icon */}
                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 flex-shrink-0">
                  <Cookie className="w-6 h-6 text-blue-600" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    We use cookies and similar technologies to improve your browsing experience, analyze site traffic, 
                    and personalize content. By clicking "Accept All", you consent to our use of cookies. 
                    You can manage your preferences or learn more in our{' '}
                    <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline font-medium">
                      Privacy Policy
                    </a>.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleAccept}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Accept All Cookies
                    </Button>
                    <Button
                      onClick={handleDecline}
                      variant="outline"
                      className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold"
                    >
                      Decline
                    </Button>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleDecline}
                  className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
