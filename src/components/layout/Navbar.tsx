
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo3D from "@/components/ui/logo-3d";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-all duration-300">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo3D size="md" showText={true} />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pharma-navy hover:after:w-full after:transition-all after:duration-300 ${
                  isActive
                    ? "text-pharma-navy after:w-full"
                    : "text-muted-foreground"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="border-pharma-navy text-pharma-navy hover:bg-pharma-light hover:text-pharma-navy transition-all duration-300 btn-bounce"
          >
            Log In
          </Button>
          <Button 
            className="bg-pharma-navy hover:bg-primary-dark transition-all duration-300 btn-bounce shadow-button hover:shadow-3d"
          >
            Contact Us
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="btn-bounce"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background animate-fade-in transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive
                      ? "text-pharma-navy font-semibold"
                      : "text-muted-foreground"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-2">
            <Button 
              variant="outline" 
              className="border-pharma-navy text-pharma-navy hover:bg-pharma-light hover:text-pharma-navy w-full transition-all duration-300 btn-bounce"
            >
              Log In
            </Button>
            <Button 
              className="bg-pharma-navy hover:bg-primary-dark w-full transition-all duration-300 btn-bounce shadow-button hover:shadow-3d"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
