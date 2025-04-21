
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pharma-light">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-lg">
        <h1 className="text-6xl font-bold text-pharma-navy mb-6">404</h1>
        <p className="text-2xl text-pharma-navy mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="bg-pharma-navy hover:bg-primary-dark">
          <NavLink to="/">Return to Home</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
