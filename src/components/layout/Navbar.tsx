
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-all duration-300 dark:bg-card/95">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <NavLink to="/" className="flex items-center gap-3 group">
            <img
              src="/lovable-uploads/87979321-9460-40c4-ac9d-f1676911aaf6.png"
              alt="Baker & Davis Logo"
              className="h-16 w-auto transform transition-all duration-300 hover:scale-105 drop-shadow-[0_0_10px_rgba(40,53,147,0.3)] dark:drop-shadow-[0_0_10px_rgba(92,107,192,0.3)] filter-none"
            />
            <span className="hidden font-bold text-2xl text-pharma-navy dark:text-primary-light drop-shadow-sm sm:inline-block transition-colors duration-300">
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
                `text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary-light relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pharma-navy dark:after:bg-primary-light hover:after:w-full after:transition-all after:duration-300 ${
                  isActive
                    ? "text-pharma-navy dark:text-primary-light after:w-full"
                    : "text-muted-foreground"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" className="border-pharma-navy text-pharma-navy hover:bg-pharma-light hover:text-pharma-navy dark:border-primary-light dark:text-primary-light dark:hover:bg-primary/20 transition-all duration-300">
            Log In
          </Button>
          <Button className="bg-pharma-navy hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-light transition-all duration-300">
            Contact Us
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background dark:bg-card animate-fade-in transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `py-2 text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary-light ${
                    isActive
                      ? "text-pharma-navy dark:text-primary-light font-semibold"
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
            <Button variant="outline" className="border-pharma-navy text-pharma-navy hover:bg-pharma-light hover:text-pharma-navy dark:border-primary-light dark:text-primary-light dark:hover:bg-primary/20 w-full transition-all duration-300">
              Log In
            </Button>
            <Button className="bg-pharma-navy hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-light w-full transition-all duration-300">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
