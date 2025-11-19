import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie, Shield, BarChart3, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 1.5 second delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const updateGoogleConsent = (granted: boolean) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied',
        functionality_storage: granted ? 'granted' : 'denied',
        personalization_storage: granted ? 'granted' : 'denied',
      });

      // Track the consent decision
      if (granted) {
        trackEvent('cookie_consent', { action: 'accepted' });
      } else {
        trackEvent('cookie_consent', { action: 'declined' });
      }
    }
  };

  const handleAccept = () => {
    const consentData = {
      status: 'accepted',
      timestamp: new Date().toISOString(),
      analytics: true,
      functional: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
    updateGoogleConsent(true);
  };

  const handleDecline = () => {
    const consentData = {
      status: 'declined',
      timestamp: new Date().toISOString(),
      analytics: false,
      functional: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
    updateGoogleConsent(false);
  };

  const handleEssentialOnly = () => {
    const consentData = {
      status: 'essential',
      timestamp: new Date().toISOString(),
      analytics: false,
      functional: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
    updateGoogleConsent(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white via-white to-blue-50/30 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-blue-100 backdrop-blur-xl p-5 sm:p-8">
              {/* Header with Icon and Close */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                    <Cookie className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                      🍪 Cookie Settings
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Your Privacy Matters</p>
                  </div>
                </div>
                <button
                  onClick={handleDecline}
                  className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Content */}
              <div className="mb-5">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content. 
                  Your data helps us improve our services and provide you with relevant pharmaceutical information.
                </p>
              </div>

              {/* Cookie Details Toggle */}
              {!showDetails ? (
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium mb-4 group"
                >
                  <Settings className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                  Customize Cookie Preferences
                </button>
              ) : (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="mb-5 space-y-4"
                >
                  {/* Essential Cookies */}
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Essential Cookies</h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">
                            Required for basic site functionality. Cannot be disabled.
                          </p>
                        </div>
                      </div>
                      <div className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        Always On
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Analytics & Performance</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                          Help us understand how visitors interact with our website (Google Analytics).
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-sm text-gray-600 hover:text-gray-800 font-medium"
                  >
                    ← Back to options
                  </button>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAccept}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 py-6 sm:py-5"
                >
                  <Cookie className="w-5 h-5 mr-2" />
                  Accept All Cookies
                </Button>
                <Button
                  onClick={handleEssentialOnly}
                  variant="outline"
                  className="flex-1 border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-700 font-semibold text-base py-6 sm:py-5 transition-all duration-300"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Essential Only
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="ghost"
                  className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 font-medium text-sm py-4"
                >
                  Decline All
                </Button>
              </div>

              {/* Footer Link */}
              <p className="text-xs text-center text-gray-500 mt-4">
                Learn more in our{' '}
                <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline font-medium">
                  Privacy Policy
                </a>
                {' '}and{' '}
                <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline font-medium">
                  Cookie Policy
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
