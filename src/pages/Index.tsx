import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Star,
  TrendingUp,
  Activity,
  Calendar,
  Pill,
  Hospital,
  Syringe,
  TestTube,
  Shield,
  Globe,
  Award,
  Users,
  CheckCircle,
  Zap,
  Heart,
  Building2,
  Target,
  Lightbulb,
  Gauge,
  Award as AwardIcon,
  Globe2,
  Users2,
  Clock,
  Sparkles,
  Rocket,
  ShieldCheck,
  Zap as ZapIcon,
  Heart as HeartIcon,
  Star as StarIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import Seo from "@/components/Seo";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile for performance optimizations
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Delay animation to improve initial load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 200 : 100);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Optimized animation variants for better performance - mobile-friendly
  const fadeInUp = {
    hidden: { opacity: 0, y: isMobile ? 20 : 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: isMobile ? 0.4 : 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: isMobile ? -20 : -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: isMobile ? 0.4 : 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: isMobile ? 20 : 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: isMobile ? 0.4 : 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.05,
        delayChildren: isMobile ? 0.2 : 0.1
      }
    }
  };

  const stats = [
    { value: "15+", label: "Years of Excellence", icon: Calendar, color: "text-blue-600" },
    { value: "75+", label: "Countries Served", icon: Globe, color: "text-green-600" },
    { value: "500+", label: "Products Developed", icon: Activity, color: "text-purple-600" },
    { value: "2000+", label: "Happy Clients", icon: Users, color: "text-orange-600" }
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure every product meets international standards.",
      color: "bg-blue-50 border-blue-200 text-blue-600"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving healthcare providers and distributors across 75+ countries worldwide.",
      color: "bg-green-50 border-green-200 text-green-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge research and development to address evolving healthcare needs.",
      color: "bg-yellow-50 border-yellow-200 text-yellow-600"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "WHO-GDP certified with multiple international quality certifications.",
      color: "bg-purple-50 border-purple-200 text-purple-600"
    }
  ];

  const testimonials = [
    {
      id: 1,
      content: "Baker & Davis has been our trusted pharmaceutical partner for over 8 years. Their commitment to quality and timely delivery is unmatched.",
      author: "Dr. Sarah Johnson",
      role: "Chief Medical Officer, Global Health Systems",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 2,
      content: "The export services provided by BD India are exceptional. Their regulatory expertise makes international business seamless.",
      author: "Michael Chen",
      role: "Procurement Director, Asia Pacific Healthcare",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      content: "Outstanding quality control and customer service. Baker & Davis consistently exceeds our expectations.",
      author: "Dr. Elena Rodriguez",
      role: "Operations Manager, European Medical Group",
      rating: 5,
      avatar: "ER"
    }
  ];

  const achievements = [
    { icon: AwardIcon, title: "WHO-GDP Certified", description: "International quality standards" },
    { icon: ShieldCheck, title: "ISO 9001:2015", description: "Quality management system" },
    { icon: Globe2, title: "75+ Countries", description: "Global distribution network" },
    { icon: Users2, title: "2000+ Clients", description: "Trusted worldwide" }
  ];

  return (
    <>
      <Seo 
        title="Baker & Davis - Leading Pharmaceutical Distributor & Global Exporter | BD India"
        description="Baker & Davis (BD India) - Premier pharmaceutical distributor and global medicine exporter. Baker Davis specializes in reliable pharmaceutical distribution, international trading, and export services. Davis and Baker - your trusted pharmaceutical supply chain partner worldwide."
        keywords={[
          "pharmaceutical distributor India",
          "medicine exporter Mumbai", 
          "Baker Davis pharmaceutical",
          "Davis Baker trading",
          "BD India distributor",
          "pharmaceutical export company India",
          "Baker India medicine distributor",
          "global pharmaceutical distribution Baker Davis",
          "pharmaceutical trading company Mumbai",
          "medicine supply chain Baker and Davis",
          "pharmaceutical logistics BD India",
          "WHO-GDP certified Baker Davis",
          "pharmaceutical wholesaler India",
          "international medicine trading Baker India",
          "pharmaceutical import export BD",
          "medical supplies distributor Baker Davis",
          "generic medicine distributor India",
          "pharmaceutical supply chain Baker and Davis",
          "medicine trading company Baker Davis Mumbai",
          "global pharmaceutical trader BD India",
          "pharmaceutical distribution network Baker Davis",
          "international pharmaceutical services Baker India",
          "Davis pharmaceutical export services",
          "Baker pharmaceutical distribution Mumbai"
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
          {/* Animated Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
          
          {/* Animated Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Floating Particles/Pills Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Medical Cross Symbols */}
            <div className="absolute top-1/4 left-1/4 text-blue-200/20 text-6xl animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }}>+</div>
            <div className="absolute top-3/4 right-1/4 text-purple-200/20 text-5xl animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }}>+</div>
            <div className="absolute top-1/2 right-1/3 text-blue-300/20 text-4xl animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}>+</div>
            
            {/* Pills/Capsules - represented with rounded shapes */}
            <div className="absolute top-20 right-20 w-16 h-6 bg-gradient-to-r from-blue-200/30 to-blue-300/30 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '9s' }}></div>
            <div className="absolute bottom-40 left-20 w-12 h-5 bg-gradient-to-r from-purple-200/30 to-purple-300/30 rounded-full animate-float" style={{ animationDelay: '1.5s', animationDuration: '10s' }}></div>
            <div className="absolute top-1/3 left-1/5 w-10 h-4 bg-gradient-to-r from-pink-200/30 to-pink-300/30 rounded-full animate-float" style={{ animationDelay: '2.5s', animationDuration: '11s' }}></div>
            
            {/* DNA Helix inspired curves - using SVG-like shapes */}
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-200/20 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-purple-200/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {/* Left Content - Order 1 on mobile, 1 on desktop */}
              <motion.div 
                className="space-y-6 lg:space-y-8 text-center lg:text-left order-1"
                variants={fadeInLeft}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  WHO-GDP Certified Excellence
                </motion.div>
                
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
                  variants={fadeInUp}
                >
                  Excellence in
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Global Pharmaceuticals
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  variants={fadeInUp}
                >
                  Setting new standards in pharmaceutical excellence with innovative research, 
                  quality manufacturing, and global healthcare solutions that make a difference.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                  variants={fadeInUp}
                >
                  <Button asChild size={isMobile ? "default" : "lg"} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                    <NavLink to="/about" className="flex items-center justify-center gap-2">
                      Discover Our Story
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </NavLink>
                  </Button>
                  <Button asChild size={isMobile ? "default" : "lg"} variant="outline" className="border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto">
                    <NavLink to="/contact" className="flex items-center justify-center gap-2">Get Started Today</NavLink>
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Right Content - Hero Video - Order 2 on mobile, 2 on desktop */}
              <motion.div 
                className="relative mt-8 lg:mt-0 order-2"
                variants={fadeInRight}
              >
                <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:max-w-none">
                  {/* Gradient glow container */}
                  <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl p-0.5 sm:p-1 bg-gradient-to-br from-blue-600/20 via-purple-600/30 to-blue-600/20 shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01] lg:hover:scale-[1.02] group">
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-blue-600/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Hero Video */}
                    <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm">
                      <video
                        autoPlay={!isMobile} // Disable autoplay on mobile for performance
                        muted
                        loop
                        playsInline
                        preload={isMobile ? "metadata" : "auto"} // Reduce preload on mobile
                        className="w-full h-auto object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl"
                        poster="/lovable-uploads/smiling-female-pharmacist-stands-confidently-pharmacy-wears-white-lab-coat-arms-crossed.jpg" // Add poster for better loading
                        onError={(e) => {
                          const target = e.target as HTMLVideoElement;
                          console.error('Hero video failed to load:', {
                            error: e,
                            videoSrc: target.src,
                            networkState: target.networkState,
                            readyState: target.readyState,
                            videoError: target.error
                          });
                          target.style.display = 'none';
                          // Show fallback image
                          const fallback = document.createElement('img');
                          fallback.src = '/lovable-uploads/smiling-female-pharmacist-stands-confidently-pharmacy-wears-white-lab-coat-arms-crossed.jpg';
                          fallback.alt = 'Pharmaceutical Excellence';
                          fallback.className = 'w-full h-auto object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl';
                          target.parentNode?.appendChild(fallback);
                        }}
                        onLoadStart={() => {
                          if (!isMobile) { // Only run debug on desktop
                            console.log('Video loading started');
                            console.log('Testing video file accessibility...');
                            fetch('https://res.cloudinary.com/dwfcnnt0x/video/upload/v1760529684/medicalsupplies_l6qzzh.mp4', { method: 'HEAD' })
                              .then(response => {
                                console.log('medicalsupplies.mp4 status:', response.status);
                                if (response.ok) {
                                  console.log('medicalsupplies.mp4 is accessible');
                                } else {
                                  console.error('medicalsupplies.mp4 not accessible:', response.status);
                                }
                              })
                              .catch(err => console.error('Error checking medicalsupplies.mp4:', err));
                            
                            fetch('https://res.cloudinary.com/dwfcnnt0x/video/upload/v1760530032/final_itndfl.mp4', { method: 'HEAD' })
                              .then(response => {
                                console.log('final.mp4 status:', response.status);
                                if (response.ok) {
                                  console.log('final.mp4 is accessible');
                                } else {
                                  console.error('final.mp4 not accessible:', response.status);
                                }
                              })
                              .catch(err => console.error('Error checking final.mp4:', err));
                          }
                        }}
                        onCanPlay={() => !isMobile && console.log('Video can play')}
                        onLoadedData={() => !isMobile && console.log('Video data loaded')}
                      >
                        <source src="https://res.cloudinary.com/dwfcnnt0x/video/upload/v1760530032/final_itndfl.mp4" type="video/mp4" />
                        <source src="https://res.cloudinary.com/dwfcnnt0x/video/upload/v1760529684/medicalsupplies_l6qzzh.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Animated border glow */}
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse-subtle"></div>
                      
                      {/* Subtle overlay for better text contrast if needed */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      
                      {/* Play button for mobile */}
                      {isMobile && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button 
                            className="bg-white/90 rounded-full p-4 shadow-lg hover:bg-white transition-colors duration-300"
                            onClick={(e) => {
                              const video = e.currentTarget.parentElement?.querySelector('video') as HTMLVideoElement;
                              if (video) {
                                if (video.paused) {
                                  video.play();
                                  e.currentTarget.style.display = 'none';
                                } else {
                                  video.pause();
                                  e.currentTarget.style.display = 'flex';
                                }
                              }
                            }}
                          >
                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                  variants={fadeInUp}
                  whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? -2 : -5 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pharmaceutical Products Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                We Provide Different Medicines To Improve Your Health
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We offer a diverse array of products that consistently adhere to globally accredited quality standards. 
                Our dedicated departmental executives oversee operations to guarantee efficient and timely completion of all tasks.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-100 to-blue-100 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Quick and reliable pharmaceutical delivery worldwide</p>
                </div>
              </motion.div>

              <motion.div
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Quality Products</h3>
                  <p className="text-gray-600 text-sm sm:text-base">WHO-GMP certified with international quality standards</p>
                </div>
              </motion.div>

              <motion.div
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Pill className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">All Medicines</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Comprehensive range across all therapeutic categories</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Video and Content Section */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Left Content */}
              <motion.div 
                className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
                variants={fadeInLeft}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Pharmaceutical Products by Baker & Davis
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  WHO-GMP certified tablets, capsules and injectables with extensive range across therapeutic categories.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">WHO-GMP Certified Manufacturing</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">International Quality Standards</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Global Distribution Network</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Video */}
              <motion.div 
                className="relative order-1 lg:order-2"
                variants={fadeInRight}
              >
                <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:max-w-none">
                  <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl p-0.5 sm:p-1 bg-gradient-to-br from-blue-600/20 via-purple-600/30 to-blue-600/20 shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01] lg:hover:scale-[1.02] group">
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-blue-600/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm">
                      <video
                        autoPlay={!isMobile}
                        muted
                        loop
                        playsInline
                        preload={isMobile ? "metadata" : "auto"}
                        className="w-full h-auto object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl"
                        poster="/lovable-uploads/smiling-female-pharmacist-stands-confidently-pharmacy-wears-white-lab-coat-arms-crossed.jpg"
                      >
                        <source src="https://res.cloudinary.com/dwfcnnt0x/video/upload/v1760529684/medicalsupplies_l6qzzh.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse-subtle"></div>
                      
                      {/* Play button for mobile */}
                      {isMobile && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button 
                            className="bg-white/90 rounded-full p-3 shadow-lg hover:bg-white transition-colors duration-300"
                            onClick={(e) => {
                              const video = e.currentTarget.parentElement?.querySelector('video') as HTMLVideoElement;
                              if (video) {
                                if (video.paused) {
                                  video.play();
                                  e.currentTarget.style.display = 'none';
                                } else {
                                  video.pause();
                                  e.currentTarget.style.display = 'flex';
                                }
                              }
                            }}
                          >
                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Product Categories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our extensive range of high-quality pharmaceutical products across therapeutic categories.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { icon: Heart, title: "Cardiovascular", description: "Quality medicines for heart health and blood pressure management", color: "text-red-600" },
                { icon: Activity, title: "Diabetic Care", description: "Affordable options for diabetes management and blood sugar control", color: "text-blue-600" },
                { icon: TestTube, title: "Neurological", description: "Treatments for neurological conditions and pain management", color: "text-purple-600" },
                { icon: Shield, title: "Antibiotics", description: "Broad spectrum antibiotics for various infections at lower costs", color: "text-green-600" },
                { icon: Pill, title: "Respiratory", description: "Medicines for asthma, COPD, and other respiratory conditions", color: "text-orange-600" },
                { icon: Hospital, title: "Gastrointestinal", description: "Treatments for digestive disorders and gastrointestinal health", color: "text-teal-600" },
                { icon: Users, title: "Pediatric Care", description: "Safe and affordable medicines formulated for children", color: "text-pink-600" },
                { icon: Syringe, title: "Ophthalmics", description: "Eye care medicines and treatments at significant savings", color: "text-indigo-600" }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="group"
                  variants={fadeInUp}
                  whileHover={{ y: isMobile ? -5 : -10 }}
                >
                  <Card className="h-full border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 group-hover:shadow-xl">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-50 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{category.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{category.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center mt-8 sm:mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Looking for a specific medicine? Contact us for information on our complete product range.
              </p>
              <Button asChild size={isMobile ? "default" : "lg"} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                <NavLink to="/contact" className="flex items-center justify-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </NavLink>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from healthcare professionals who trust Baker & Davis for their pharmaceutical needs.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="group"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 group-hover:shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-white/5"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Ready to Partner with Excellence?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
                Join thousands of healthcare providers worldwide who trust Baker & Davis for their pharmaceutical needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button asChild size={isMobile ? "default" : "lg"} className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                  <NavLink to="/contact" className="flex items-center justify-center gap-2">
                    Get in Touch Today
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </NavLink>
                </Button>
                
                <Button asChild size={isMobile ? "default" : "lg"} variant="outline" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
                  <NavLink to="/about" className="flex items-center justify-center gap-2">
                    Learn More About Us
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  </NavLink>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;