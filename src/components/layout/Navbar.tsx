
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <header className="fixed top-0 z-50 w-full backdrop-blur-sm bg-background/40 transition-all duration-300">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <NavLink to="/" className="flex items-center gap-4 group">
            <img 
              src="/lovable-uploads/87979321-9460-40c4-ac9d-f1676911aaf6.png"
              alt="Baker & Davis Logo"
              width={80}
              height={80}
              className="object-contain transform transition-all duration-300 hover:scale-105 drop-shadow-md"
            />
            <span className="hidden font-bold text-4xl text-pharma-navy drop-shadow-sm sm:inline-block transition-colors duration-300">
              Baker & Davis
            </span>
          </NavLink>
        </div>

        <nav className="hidden md:flex items-center gap-6">
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
              <Button variant="ghost" className="flex items-center gap-1 px-2">
                Contact
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {dropdownLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <NavLink
                    to={link.path}
                    className="w-full cursor-pointer"
                  >
                    {link.name}
                  </NavLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px]">
              <SheetHeader className="mt-6 mb-6">
                <SheetTitle className="text-3xl font-bold text-pharma-navy">Baker & Davis</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {mainNavLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `py-2 text-lg font-medium transition-colors ${
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
                <div className="pt-2 pb-2">
                  <h3 className="font-medium text-sm text-muted-foreground mb-2">Contact</h3>
                  {dropdownLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `py-2 block text-base font-medium transition-colors ${
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
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
