import { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import debugLogger from "@/lib/debug-logger";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Play,
  Shield,
  Globe,
  Award,
  Users,
  CheckCircle,
  Zap,
  Heart
} from "lucide-react";
import { lazy } from "react";
import { Loading } from "@/components/ui/loading";

// Lazy load heavy components with better error boundaries
const FeaturedServices = lazy(() => 
  import("@/components/home/FeaturedServices").catch(() => ({
    default: () => <div className="p-8 text-center">Featured services loading...</div>
  }))
);
import Seo from "@/components/Seo";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  // Video debugging for Home component
  console.log('🔥 Home component rendering...');

  useEffect(() => {
    debugLogger.logMount('Home');
    debugLogger.log('info', 'Home component mounted successfully');
    
    // Video debugging
    console.log('🚀 Home component mounted - starting video debugging...');
    console.log('🔍 Testing video file accessibility...');
    
    // Test Final Comp_1.mp4
    fetch('/lovable-uploads/Final Comp_1.mp4', { method: 'HEAD' })
      .then(response => {
        console.log('✅ Final Comp_1.mp4 accessible:', response.status, response.statusText);
        if (response.status === 200) {
          console.log('📁 Final Comp_1.mp4 file size:', response.headers.get('content-length'));
        }
      })
      .catch(error => {
        console.error('❌ Final Comp_1.mp4 not accessible:', error);
      });
    
    // Test Medical Supplies video
    fetch('/lovable-uploads/0_Medical Supplies_First Aid Kit_3840x2160.mp4', { method: 'HEAD' })
      .then(response => {
        console.log('✅ Medical Supplies video accessible:', response.status, response.statusText);
        if (response.status === 200) {
          console.log('📁 Medical Supplies video file size:', response.headers.get('content-length'));
        }
      })
      .catch(error => {
        console.error('❌ Medical Supplies video not accessible:', error);
      });
    
    // Check if videos exist in DOM
    setTimeout(() => {
      const videos = document.querySelectorAll('video');
      console.log('🎬 Found videos in DOM:', videos.length);
      videos.forEach((video, index) => {
        console.log(`Video ${index + 1}:`, {
          src: video.src,
          currentSrc: video.currentSrc,
          readyState: video.readyState,
          networkState: video.networkState,
          error: video.error
        });
      });
    }, 2000);
    
    // Delay animation to improve initial load
    const timer = setTimeout(() => {
      setAnimate(true);
      debugLogger.log('info', 'Home animation triggered');
    }, 100);
    
    return () => {
      clearTimeout(timer);
      debugLogger.logUnmount('Home');
    };
  }, []);

  const stats = [
    { value: "10+", label: "Years Experience", icon: Calendar },
    { value: "50+", label: "Countries Served", icon: TrendingUp },
    { value: "200+", label: "Medicines Produced", icon: Activity },
    { value: "1000+", label: "Happy Clients", icon: Star }
  ];

  const testimonials = [
    {
      id: 1,
      content: "Baker & Davis has consistently delivered pharmaceutical products of exceptional quality, meeting our strict standards and timelines.",
      author: "John D.",
      role: "Procurement Director, International Hospital Chain"
    },
    {
      id: 2,
      content: "Their commitment to quality and compliance has made them our trusted partner for over 5 years now.",
      author: "Sarah M.",
      role: "Operations Manager, Global Healthcare Distributor"
    },
    {
      id: 3,
      content: "BD's export services are unmatched in reliability and regulatory documentation, making international business seamless.",
      author: "Michael T.",
      role: "CEO, European Pharmaceutical Distributor"
    }
  ];

  const features = [
    {
      icon: Pill,
      title: "Quality Products",
      description: "Premium pharmaceutical products meeting international standards"
    },
    {
      icon: Hospital,
      title: "Global Network",
      description: "Serving healthcare facilities worldwide with excellence"
    },
    {
      icon: Syringe,
      title: "Innovation",
      description: "Cutting-edge research and development facilities"
    },
    {
      icon: TestTube,
      title: "Compliance",
      description: "Strict adherence to international regulations"
    }
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
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F1F1F1] to-[#FCFCFC]">
          <div className="container mx-auto px-4 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Content */}
              <div className="order-2 lg:order-1 animate-fade-in space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pharma-navy dark:text-white leading-tight tracking-tight animate-slide-in-left">
                  Excellence in
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pharma-navy via-primary to-pharma-navy dark:from-white dark:via-primary-light dark:to-white mt-2 animate-gradient-shift">
                    Global Pharmaceuticals
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Setting new standards in pharmaceutical excellence with innovative research and global healthcare solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <Button asChild size="lg" className="w-full sm:w-auto text-lg bg-pharma-navy text-white dark:bg-white dark:text-pharma-navy hover:bg-primary dark:hover:bg-gray-100 group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl px-8 py-6 hover:shadow-2xl">
                    <NavLink to="/about" className="flex items-center gap-3">
                      Discover More
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg text-pharma-navy dark:text-white border-pharma-navy dark:border-white hover:bg-pharma-navy/10 dark:hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 px-8 py-6 hover:shadow-lg">
                    <NavLink to="/contact">Get Started Today</NavLink>
                  </Button>
                </div>
              </div>
              
              {/* Right side - Video */}
              <div className="order-1 lg:order-2 animate-fade-in">
                <div className="relative max-w-lg mx-auto lg:max-w-none">
                  {/* Gradient glow container */}
                  <div className="relative rounded-2xl lg:rounded-3xl p-1 bg-gradient-to-br from-pharma-navy/20 via-primary/30 to-pharma-navy/20 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02] group">
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-pharma-navy/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Hero Video */}
                    <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-auto object-cover rounded-2xl lg:rounded-3xl"
                        onLoadStart={() => console.log('🔄 Hero video loading started')}
                        onLoadedData={() => console.log('🎥 Hero video loaded')}
                        onCanPlay={() => console.log('▶️ Hero video can play')}
                        onError={(e) => {
                          console.error('❌ Hero video error:', e);
                          const target = e.target as HTMLVideoElement;
                          console.error('Hero video error details:', {
                            error: target.error,
                            networkState: target.networkState,
                            readyState: target.readyState
                          });
                        }}
                    onProgress={() => {
                      // Throttle progress logging to reduce console spam
                      if (Math.random() < 0.1) console.log('📊 Hero video progress');
                    }}
                    onWaiting={() => console.log('⏳ Hero video waiting')}
                    onStalled={() => console.log('🔄 Hero video stalled')}
                      >
                        <source src="/lovable-uploads/Final Comp_1.mp4" type="video/mp4" />
                        <source src="/lovable-uploads/0_Medical Supplies_First Aid Kit_3840x2160.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Animated border glow */}
                      <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse-subtle"></div>
                      
                      {/* Subtle overlay for better text contrast if needed */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats section below the hero - Enhanced with gradient glow */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-pharma-navy dark:text-white animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative text-center p-4 md:p-6 rounded-xl backdrop-blur-md bg-white/60 dark:bg-white/10 border border-pharma-navy/20 dark:border-white/20 hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group overflow-hidden"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {/* Subtle gradient glow on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pharma-navy/5 via-primary/10 to-pharma-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-pharma-navy dark:text-primary-light group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-pharma-navy dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">{stat.value}</p>
                    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-200 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Suspense fallback={<Loading />}>
          <FeaturedServices />
        </Suspense>


        <section className="py-24 bg-gradient-to-b from-pharma-light/30 to-white dark:from-pharma-dark/30 dark:to-background relative overflow-hidden transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate-fade-in-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pharma-navy dark:text-white">
                  Excellence in Pharmaceutical Manufacturing
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                  Our state-of-the-art facilities combine cutting-edge technology with stringent quality control measures to deliver pharmaceutical products that meet the highest international standards.
                </p>
                <Button asChild variant="default" className="bg-pharma-navy text-white hover:bg-primary dark:bg-white dark:text-pharma-navy dark:hover:bg-gray-100 group transition-all duration-300 transform hover:scale-105 hover:shadow-xl px-8 py-6">
                  <NavLink to="/about" className="flex items-center gap-3">
                    Learn About Our Process
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </Button>
              </div>
              <div className="order-1 md:order-2 animate-fade-in-right">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/lovable-uploads/pharmaceutical-manufacturing-facility-modern-laboratory-equipment-industrial-pharmacy-production-line-medical-drug-manufacturing-pharmaceutical-industry-healthcare-technology-medicine-production.jpg"
                    className="w-full h-auto object-cover rounded-2xl"
                    controls
                    preload="metadata"
                    onLoadStart={() => console.log('🔄 Manufacturing video loading started')}
                    onLoadedData={() => console.log('🎥 Manufacturing video loaded')}
                    onCanPlay={() => console.log('▶️ Manufacturing video can play')}
                    onError={(e) => {
                      console.error('❌ Manufacturing video error:', e);
                      const target = e.target as HTMLVideoElement;
                      console.error('Manufacturing video error details:', {
                        error: target.error,
                        networkState: target.networkState,
                        readyState: target.readyState
                      });
                    }}
                    onProgress={() => {
                      // Throttle progress logging to reduce console spam
                      if (Math.random() < 0.1) console.log('📊 Manufacturing video progress');
                    }}
                    onWaiting={() => console.log('⏳ Manufacturing video waiting')}
                    onStalled={() => console.log('🔄 Manufacturing video stalled')}
                  >
                    <source src="/lovable-uploads/0_Medical Supplies_First Aid Kit_3840x2160.mp4" type="video/mp4" />
                    <source src="/lovable-uploads/Final Comp_1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-white to-pharma-light/10 dark:from-background dark:to-pharma-dark/10 relative overflow-hidden transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-pharma-navy dark:text-white mb-6 animate-fade-in-up">
                Why Choose Baker & Davis
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Discover the advantages that make us the preferred choice for pharmaceutical excellence worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="relative p-8 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-pharma-navy/10 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pharma-navy/5 via-primary/10 to-pharma-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="p-4 rounded-full bg-gradient-to-br from-pharma-navy/10 to-primary/20 group-hover:from-pharma-navy/20 group-hover:to-primary/30 transition-all duration-300">
                        <feature.icon className="w-8 h-8 text-pharma-navy dark:text-primary-light group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-pharma-navy dark:text-white text-center mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-pharma-light dark:bg-pharma-dark/40 relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/50 dark:to-black/30 pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate-fade-in-left">
                <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-6">About Baker & Davis</h2>
                <p className="text-gray-700 dark:text-gray-200 mb-6">
                  Founded with a mission to improve global healthcare access, Baker & Davis has grown 
                  into a leading pharmaceutical manufacturer and exporter. Our state-of-the-art 
                  facilities and commitment to quality ensure that every product meets international 
                  standards.
                </p>
                <p className="text-gray-700 dark:text-gray-200 mb-8">
                  With a robust R&D department and experienced team, we constantly innovate to address 
                  evolving healthcare needs worldwide.
                </p>
                <Button asChild variant="default" className="bg-pharma-navy hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-light text-white group transition-all duration-300">
                  <NavLink to="/about" className="flex items-center gap-2">
                    Learn More About Us
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </Button>
              </div>
              <div className="order-1 md:order-2 animate-fade-in-right">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pharma-navy/20 via-primary/30 to-pharma-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                    <img 
                      src="/lovable-uploads/smiling-female-pharmacist-stands-confidently-pharmacy-wears-white-lab-coat-arms-crossed.jpg" 
                      alt="Professional pharmaceutical team" 
                      className="w-full h-auto object-cover rounded-2xl"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-pharma-light/20 to-white dark:from-pharma-dark/20 dark:to-background relative overflow-hidden transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-pharma-navy dark:text-white mb-6 animate-fade-in-up">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Hear from healthcare professionals who trust Baker & Davis for their pharmaceutical needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pharma-navy/10 dark:border-white/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pharma-navy/5 via-primary/10 to-pharma-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">"{testimonial.content}"</p>
                    <div className="border-t border-pharma-navy/10 dark:border-white/10 pt-4">
                      <p className="font-semibold text-pharma-navy dark:text-primary-light group-hover:text-primary transition-colors duration-300">{testimonial.author}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-pharma-navy via-primary to-pharma-navy dark:from-pharma-dark dark:via-primary-dark dark:to-pharma-dark text-white relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg')] bg-center opacity-10 bg-cover"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
                Ready to Partner with a Global Leader?
              </h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Join the many healthcare providers and distributors worldwide who trust Baker & Davis for their pharmaceutical needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Button asChild size="lg" className="w-full sm:w-auto text-lg bg-white text-pharma-navy hover:bg-gray-100 group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl px-8 py-6">
                  <NavLink to="/contact" className="flex items-center gap-3">
                    Get in Touch Today
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg text-white border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 px-8 py-6">
                  <NavLink to="/about" className="flex items-center gap-3">
                    Learn More About Us
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;