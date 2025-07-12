
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";
import { Loading } from "@/components/ui/loading";
import Layout from "./components/layout/Layout";
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/ui/page-transition";
import { Analytics } from "@vercel/analytics/react";

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
    logEvent(analytics, 'page_view', {
      page_path: location.pathname,
      page_title: document.title
    });
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
    // Always use light mode as requested
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    
    // Report Core Web Vitals
    if ('performance' in window && 'getEntriesByType' in performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const paintMetrics = performance.getEntriesByType('paint');
          console.log('Paint metrics:', paintMetrics);
        }, 0);
      });
    }
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
          <Analytics />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
