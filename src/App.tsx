
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
// Temporarily disable Firebase Analytics to prevent conflicts
// import { analytics } from "@/lib/firebase";
// import { logEvent } from "firebase/analytics";
import { Loading } from "@/components/ui/loading";
import debugLogger from "@/lib/debug-logger";
import Layout from "./components/layout/Layout";
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/ui/page-transition";
// Temporarily disable Vercel Analytics to prevent conflicts
// import { Analytics } from "@vercel/analytics/react";

// Code-split non-essential pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FAQ = lazy(() => import("./pages/FAQ"));
const OurStory = lazy(() => import("./pages/OurStory"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Improves performance
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const AnalyticsWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    // Enhanced analytics tracking
    console.log('📊 Page view:', location.pathname);
    
    // Track page views with Firebase Analytics (if available)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-ETJ5GLTF4P', {
        page_path: location.pathname,
        page_title: document.title
      });
    }
    
    // Track performance metrics for this page
    const trackPagePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const pageLoadTime = navigation.loadEventEnd - navigation.fetchStart;
        console.log(`📈 Page load time: ${pageLoadTime.toFixed(2)}ms`);
        
        // Send to analytics if available
        if (window.gtag) {
          window.gtag('event', 'page_performance', {
            page_path: location.pathname,
            load_time: Math.round(pageLoadTime)
          });
        }
      }
    };
    
    // Track performance after a short delay
    setTimeout(trackPagePerformance, 1000);
  }, [location]);

  return <>{children}</>;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <About />
            </PageTransition>
          } />
          <Route path="/our-story" element={
            <PageTransition>
              <OurStory />
            </PageTransition>
          } />
          <Route path="/team" element={
            <PageTransition>
              <Team />
            </PageTransition>
          } />
          <Route path="/careers" element={
            <PageTransition>
              <Careers />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
          <Route path="/privacy" element={
            <PageTransition>
              <Privacy />
            </PageTransition>
          } />
          <Route path="/faq" element={
            <PageTransition>
              <FAQ />
            </PageTransition>
          } />
        </Route>
        <Route path="*" element={
          <PageTransition>
            <NotFound />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    // Initialize debug logging
    debugLogger.log('info', 'App component initializing');
    
    // Always use light mode as requested
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    debugLogger.log('info', 'Theme set to light mode');
    
    // Report Core Web Vitals
    if ('performance' in window && 'getEntriesByType' in performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const paintMetrics = performance.getEntriesByType('paint');
          debugLogger.log('info', 'Paint metrics collected', paintMetrics);
          console.log('Paint metrics:', paintMetrics);
        }, 0);
      });
    }

    // Log app mount
    debugLogger.logMount('App');
    
    // Add error boundary logging
    const handleError = (event: ErrorEvent) => {
      debugLogger.logError('App', 'Global error caught', event.error);
    };
    
    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
      debugLogger.logUnmount('App');
    };
  }, []);
  
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnalyticsWrapper>
              <Suspense fallback={<Loading />}>
                <AnimatedRoutes />
              </Suspense>
            </AnalyticsWrapper>
          </BrowserRouter>
          {/* Temporarily disabled Vercel Analytics */}
          {/* <Analytics /> */}
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
