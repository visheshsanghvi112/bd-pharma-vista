
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation after component mounts for a smooth appearance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className={cn(
      "bg-gradient-primary dark:bg-gradient-to-br dark:from-pharma-dark dark:to-primary-dark text-white transition-all duration-500",
      isVisible ? "opacity-100" : "opacity-0"
    )}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-5 transition-all duration-500 hover:translate-y-[-5px]">
            <div className="flex items-center gap-3">
              <div className="rounded-lg overflow-hidden p-1 bg-white/10 backdrop-blur-sm">
                <img
                  src="/lovable-uploads/87979321-9460-40c4-ac9d-f1676911aaf6.png"
                  alt="Baker & Davis Logo"
                  className="h-12 w-auto bg-white/90 rounded transition-all duration-300"
                />
              </div>
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                Baker & Davis
              </span>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed">
              BD Pvt. Ltd. is a trusted name in pharmaceutical manufacturing and global export of high-quality medicines since 2017.
            </p>
            <div className="text-sm space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-medium">GSTIN:</span> 27AADCJ9014B1ZW
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">CIN:</span> U74999MH2017PTC291801
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Drug License:</span> 20B-MH-MZ1-557373, 21B-MH-MZ1-557374
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-16 after:bg-white/50 after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-3 grid grid-cols-1 gap-1">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/team", label: "Our Team" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact Us" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/faq", label: "FAQ" },
              ].map((link, index) => (
                <li key={index} className="group">
                  <NavLink 
                    to={link.to} 
                    className={({ isActive }) => cn(
                      "text-sm text-gray-200 hover:text-white transition-colors inline-flex items-center",
                      "relative overflow-hidden group-hover:pl-2 duration-300",
                      isActive && "text-white font-medium"
                    )}
                  >
                    <span className="absolute left-0 h-full w-0 bg-white/10 rounded-r-full group-hover:w-1 transition-all duration-300"></span>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-16 after:bg-white/50 after:rounded-full">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                <MapPin size={18} className="shrink-0 mt-1 text-gray-200 group-hover:text-white" />
                <address className="text-sm text-gray-200 not-italic group-hover:text-white transition-colors">
                  <p className="font-medium text-white mb-1">Registered Office:</p>
                  <p>
                    42/44, Babu Genu Road, Shop No. 14, 2nd Floor, Om Shanti Co-Operative 
                    Housing Society Ltd., Kalbadevi, Mumbai - 400 002
                  </p>
                </address>
              </div>
              
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <Phone size={18} className="shrink-0 text-gray-200 group-hover:text-white" />
                <p className="text-sm text-gray-200 group-hover:text-white transition-colors">022-48256677 / 022-40134455</p>
              </div>
              
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <Mail size={18} className="shrink-0 text-gray-200 group-hover:text-white" />
                <a href="mailto:admin@bdindia.in" className="text-sm text-gray-200 hover:text-white transition-colors underline decoration-white/20 hover:decoration-white">
                  admin@bdindia.in
                </a>
              </div>
            </div>
          </div>

          {/* Legal & Certifications */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-16 after:bg-white/50 after:rounded-full">
              Certifications & Social
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "WHO-GMP", 
                "FDA Approved", 
                "ISO 9001:2015", 
                "ISO 14001:2015"
              ].map((cert, index) => (
                <span 
                  key={index} 
                  className="text-xs font-medium bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 transition-all duration-300 cursor-default border border-white/5"
                >
                  {cert}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-sm text-gray-300 mb-3">Follow us on social media:</p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Globe, href: "#", label: "Website" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={`Visit our ${social.label} page`}
                    className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transform transition-all duration-300 hover:scale-110 hover:rotate-3"
                  >
                    <social.icon size={18} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center">
          <p className="text-gray-300">© {currentYear} Baker & Davis Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <NavLink to="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms of Use
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
