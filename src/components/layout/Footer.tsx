
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Logo3D from "../ui/logo-3d";

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
      "bg-gradient-footer text-white transition-all duration-500",
      isVisible ? "opacity-100" : "opacity-0"
    )}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-5 transition-all duration-500 hover:translate-y-[-5px]">
            <div className="flex items-center gap-3">
              <div className="rounded-lg overflow-hidden p-1 bg-white/10 backdrop-blur-sm">
                <img
                  src="/lovable-uploads/5707d5a7-b2b7-46e3-95a7-8640a794f8ae.png"
                  alt="Baker & Davis Logo"
                  className="h-20 w-auto transition-all duration-300"
                />
              </div>
              <span className="font-bold text-2xl text-white">
                Baker & Davis
              </span>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              BD Pvt. Ltd. is a trusted pharmaceutical distributor and global exporter of high-quality medicines, serving healthcare providers worldwide since 2000.
            </p>
            <div className="text-sm bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/5 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2">
                  <span className="font-medium text-white/90">GSTIN:</span> 
                  <span className="text-white">27AADCJ9014B1ZW</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-white/90">CIN:</span> 
                  <span className="text-white">U74999MH2017PTC291801</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-white/90">Drug License:</span> 
                  <span className="text-white">20B-MH-MZ1-557373, 21B-MH-MZ1-557374</span>
                </p>
              </div>
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
                { to: "/faq", label: "FAQ" },
              ].map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.to} 
                    className={({ isActive }) => cn(
                      "text-sm text-white/80 hover:text-white transition-colors",
                      isActive && "text-white font-medium"
                    )}
                  >
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
                <MapPin size={18} className="shrink-0 mt-1 text-white/80 group-hover:text-white" />
                <address className="text-sm text-white/80 not-italic group-hover:text-white transition-colors">
                  <p className="font-medium text-white mb-1">Registered Office:</p>
                  <p>
                    42/44, Babu Genu Road, Shop No. 14, 2nd Floor, Om Shanti Co-Operative 
                    Housing Society Ltd., Kalbadevi, Mumbai - 400 002
                  </p>
                </address>
              </div>
              
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <Phone size={18} className="shrink-0 text-white/80 group-hover:text-white" />
                <p className="text-sm text-white/80 group-hover:text-white transition-colors">022-48256677 / 022-40134455</p>
              </div>
              
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <Mail size={18} className="shrink-0 text-white/80 group-hover:text-white" />
                <a href="mailto:admin@bdindia.in" className="text-sm text-white/80 hover:text-white transition-colors underline decoration-white/20 hover:decoration-white">
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
                "WHO-GDP", 
                "Export License", 
                "ISO 9001:2015", 
                "Drug License"
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
              <p className="text-sm text-white/90 mb-3">Follow us on social media:</p>
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
          <p className="text-white/80">© {currentYear} Baker & Davis Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <NavLink to="/privacy" className="text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="text-white/80 hover:text-white transition-colors">
              Terms of Use
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
