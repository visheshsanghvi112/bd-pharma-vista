
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

type NavbarProps = {
  onMenuClick: () => void;
};

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  const dropdownLinks = [
    { name: "FAQ", path: "/faq" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-background/95 backdrop-blur-md shadow-md h-16" 
          : "bg-transparent h-20"
      }`}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <NavLink to="/" className="flex items-center gap-4 group">
            <img 
              src="/lovable-uploads/87979321-9460-40c4-ac9d-f1676911aaf6.png"
              alt="Baker & Davis Logo"
              className={`transition-all duration-300 object-contain ${
                scrolled ? 'w-[60px] h-[60px]' : 'w-[80px] h-[80px]'
              }`}
            />
            <span className={`hidden font-bold text-pharma-navy drop-shadow-sm sm:inline-block transition-all duration-300 ${
              scrolled ? 'text-3xl' : 'text-4xl'
            }`}>
              Baker & Davis
            </span>
          </NavLink>
        </div>

        <nav className={`hidden md:flex items-center gap-6 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}>
          {mainNavLinks.map((link) => (
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 px-2 hover:bg-transparent">
                <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white/95 backdrop-blur-md border border-gray-100 shadow-lg animate-fade-in animate-duration-200">
              {dropdownLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild className="hover:bg-gray-50 focus:bg-gray-50">
                  <NavLink
                    to={link.path}
                    className="w-full cursor-pointer text-sm font-medium py-1.5"
                  >
                    {link.name}
                  </NavLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="md:hidden hover:bg-primary/10 transition-colors"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
