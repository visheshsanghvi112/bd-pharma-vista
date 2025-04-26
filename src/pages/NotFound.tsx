
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import Seo from "@/components/Seo";

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
        title="404 Not Found"
        description="The page you are looking for could not be found. You will be redirected to the homepage shortly."
      />
      <div className="min-h-screen flex flex-col items-center justify-center bg-pharma-light dark:bg-pharma-dark transition-colors duration-300">
        <div className="text-center p-8 bg-white dark:bg-card rounded-lg shadow-md max-w-lg transition-all duration-300">
          <h1 className="text-6xl font-bold text-pharma-navy dark:text-primary-light mb-6 transition-colors duration-300">404</h1>
          <p className="text-2xl text-pharma-navy dark:text-primary-light mb-4 transition-colors duration-300">Page Not Found</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <p className="text-lg text-pharma-navy dark:text-primary-light mb-8 transition-colors duration-300">
            Redirecting to homepage in {countdown} seconds...
          </p>
          <Button asChild className="bg-pharma-navy hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-light transition-all duration-300">
            <NavLink to="/">Return to Home Now</NavLink>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
