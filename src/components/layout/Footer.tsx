
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/lovable-uploads/87979321-9460-40c4-ac9d-f1676911aaf6.png"
                alt="Baker & Davis Logo"
                className="h-8 w-auto bg-white p-1 rounded"
              />
              <span className="font-bold text-xl">Baker & Davis</span>
            </div>
            <p className="text-sm text-gray-200">
              BD Pvt. Ltd. is a trusted name in pharmaceutical manufacturing and global export of high-quality medicines.
            </p>
            <div className="text-sm">
              <p>GSTIN No.: 27AADCJ9014B1ZW</p>
              <p>CIN: U74999MH2017PTC291801</p>
              <p>Drug License Nos.: 20B-MH-MZ1-557373, 21B-MH-MZ1-557374</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sm text-gray-200 hover:text-white transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <address className="text-sm text-gray-200 not-italic space-y-2">
              <p>Registered Office:</p>
              <p>
                42/44, Babu Genu Road, Shop No. 14, 2nd Floor, Om Shanti Co-Operative 
                Housing Society Ltd., Kalbadevi, Mumbai - 400 002
              </p>
              <p>Phone: 022-48256677 / 022-40134455</p>
              <p>Email: admin@bdindia.in</p>
            </address>
          </div>

          {/* Legal & Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">WHO-GMP</span>
              <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">FDA Approved</span>
              <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">ISO 9001:2015</span>
              <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">ISO 14001:2015</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-white/20 text-sm text-center">
          <p>© {currentYear} Baker & Davis Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
