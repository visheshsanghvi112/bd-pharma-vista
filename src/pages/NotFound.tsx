
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import Seo from "@/components/Seo";
import { Home, ArrowLeft, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [location.pathname, navigate]);

  return (
    <>
      <Seo 
        title="404 Page Not Found - Baker & Davis | Pharmaceutical Distributors & Traders"
        description="The page you are looking for could not be found on Baker & Davis website. You will be redirected to our homepage shortly. Baker & Davis - Leading pharmaceutical distributors, traders and exporters in India (BD India)."
        keywords={[
          "404 error",
          "page not found", 
          "Baker & Davis",
          "BD India",
          "pharmaceutical distributors",
          "medicine traders",
          "Baker India",
          "pharmaceutical exporters"
        ]}
      />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pharma-light to-white">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-2xl mx-4 border border-gray-100">
          {/* Baker & Davis Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/87979321-9460-40c4-ac9d-f1676911aaf6.png"
              alt="Baker & Davis Logo"
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h2 className="text-xl font-bold text-pharma-navy">Baker & Davis</h2>
            <p className="text-sm text-gray-600">Pharmaceutical Distributors & Traders</p>
          </div>

          {/* 404 Message */}
          <h1 className="text-8xl font-bold text-pharma-navy mb-6 animate-fade-in">404</h1>
          <h2 className="text-3xl font-bold text-pharma-navy mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We couldn't find the page you're looking for on the Baker & Davis website. 
            The page might have been moved, deleted, or you may have entered an incorrect URL.
          </p>
          
          {/* Countdown */}
          <div className="bg-pharma-light/30 rounded-lg p-4 mb-8">
            <p className="text-lg text-pharma-navy font-semibold mb-2">
              Automatically redirecting to homepage in
            </p>
            <div className="text-4xl font-bold text-pharma-navy animate-pulse">
              {countdown}
            </div>
            <p className="text-sm text-gray-600 mt-2">seconds</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button asChild className="bg-pharma-navy hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <NavLink to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Return to Homepage
              </NavLink>
            </Button>
            
            <Button asChild variant="outline" className="border-pharma-navy text-pharma-navy hover:bg-pharma-navy hover:text-white px-6 py-3 rounded-lg transition-all duration-300">
              <NavLink to="/about" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                About Baker & Davis
              </NavLink>
            </Button>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <p className="text-sm text-gray-600 mb-3">
              Need help? Contact Baker & Davis support:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a 
                href="tel:+919372241102" 
                className="flex items-center gap-2 text-pharma-navy hover:text-primary-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 93722 41102
              </a>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <a 
                href="mailto:info@bakerdavis.com" 
                className="text-pharma-navy hover:text-primary-dark transition-colors"
              >
                info@bakerdavis.com
              </a>
            </div>
          </div>

          {/* Keywords for SEO */}
          <div className="mt-6 text-xs text-gray-400">
            <p>Baker & Davis - BD India - Pharmaceutical Distributors - Medicine Traders - Baker India</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
