
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { X } from "lucide-react";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const mainNavLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  const contactLinks = [
    { name: "FAQ", path: "/faq" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div 
      className={`fixed inset-y-0 right-0 z-50 w-72 transform transition-transform duration-300 ease-in-out bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-md shadow-lg border-l border-border ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border/40">
          <h2 className="text-lg font-medium tracking-tight text-primary">
            Baker & Davis
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-accent">
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-auto">
          {mainNavLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                `block py-2.5 px-3 text-base font-medium rounded-md transition-colors hover:bg-accent ${
                  isActive 
                    ? "bg-accent/80 text-accent-foreground"
                    : "text-foreground"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <Collapsible
            open={isContactOpen}
            onOpenChange={setIsContactOpen}
            className="pt-1"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="flex w-full justify-between items-center py-2.5 px-3 text-base font-medium rounded-md transition-colors hover:bg-accent"
              >
                <span>Contact</span>
                <span className="text-sm">{isContactOpen ? "−" : "+"}</span>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 pl-2 mt-1">
              {contactLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block py-2 px-3 text-base font-medium rounded-md transition-colors hover:bg-accent ${
                      isActive 
                        ? "bg-accent/50 text-accent-foreground"
                        : "text-muted-foreground"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </nav>
        
        <div className="p-4 border-t border-border/40 bg-muted/20">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Baker & Davis Pharmaceuticals
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
