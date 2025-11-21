
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import ChatBot from '../ChatBot';
import WhatsAppButton from '../WhatsAppButton';
import GlobalSchema from '../GlobalSchema';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar and scroll to top when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <GlobalSchema />

      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />

      {/* Floating Components */}
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default Layout;
