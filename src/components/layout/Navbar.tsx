import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <NavLink to="/" className="flex items-center gap-3 group">
            <img
              src="/lovable-uploads/87979321-9460-40c4-ac9d-f1676911aaf6.png"
              alt="Baker & Davis Logo"
              className="h-10 w-auto transform transition-all duration-300 hover:scale-105 drop-shadow-[0_0_10px_rgba(40,53,147,0.3)] filter-none"
            />
            <span className="hidden font-bold text-2xl text-pharma-navy drop-shadow-sm sm:inline-block">
              Baker & Davis
            </span>
          </NavLink>
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
          <Button variant="outline" className="border-pharma-navy text-pharma-navy hover:bg-pharma-light hover:text-pharma-navy">
            Log In
          </Button>
          <Button className="bg-pharma-navy hover:bg-primary-dark">
            Contact Us
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background">
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
            <Button variant="outline" className="border-pharma-navy text-pharma-navy hover:bg-pharma-light hover:text-pharma-navy w-full">
              Log In
            </Button>
            <Button className="bg-pharma-navy hover:bg-primary-dark w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
