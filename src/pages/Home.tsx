
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { 
  ArrowRight, 
  Star,
  TrendingUp,
  Activity,
  Calendar,
  Pill,
  Hospital,
  Syringe,
  TestTube 
} from "lucide-react";
import FeaturedServices from "@/components/home/FeaturedServices";
import FAQ from "@/components/home/FAQ";
import Seo from "@/components/Seo";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg"
              onError={(e) => {
                console.error('Video failed to load:', e);
                // Fallback to image background
                const videoElement = e.target as HTMLVideoElement;
                videoElement.style.display = 'none';
                const fallbackBg = document.getElementById('fallback-bg');
                if (fallbackBg) {
                  fallbackBg.style.display = 'block';
                }
              }}
            >
              <source src="/lovable-uploads/Final Comp_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Fallback background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg')`,
                display: 'none'
              }}
              id="fallback-bg"
            />
            <div className="absolute inset-0 hero-gradient-light dark:hero-gradient-dark backdrop-blur-sm transition-all duration-500"></div>
          </div>
          
          <div className="container relative z-10 px-4 py-24 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pharma-navy dark:text-white mb-6 animate-fade-in leading-tight tracking-tight">
                  Excellence in
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pharma-navy via-primary to-pharma-navy dark:from-white dark:via-primary-light dark:to-white mt-2">
                    Global Pharmaceuticals
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-10 animate-fade-in max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
                  Setting new standards in pharmaceutical excellence with innovative research and global healthcare solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <Button asChild size="lg" className="w-full sm:w-auto text-lg bg-pharma-navy text-white dark:bg-white dark:text-pharma-navy hover:bg-primary dark:hover:bg-gray-100 group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl px-8 py-6">
                    <NavLink to="/about" className="flex items-center gap-3">
                      Discover More
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg text-pharma-navy dark:text-white border-pharma-navy dark:border-white hover:bg-pharma-navy/10 dark:hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 px-8 py-6">
                    <NavLink to="/contact">Get Started Today</NavLink>
                  </Button>
                </div>
              </div>

              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-pharma-navy dark:text-white animate-fade-in" style={{ animationDelay: "0.6s" }}>
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-6 rounded-xl backdrop-blur-md bg-white/60 dark:bg-white/10 border border-pharma-navy/20 dark:border-white/20 hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className="flex justify-center mb-3 transform group-hover:scale-110 transition-transform">
                      <stat.icon className="w-8 h-8 text-pharma-navy dark:text-primary-light" />
                    </div>
                    <p className="text-3xl font-bold text-pharma-navy dark:text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FeaturedServices />

        <section className="py-24 bg-gradient-to-b from-pharma-light to-white dark:from-pharma-dark dark:to-background relative overflow-hidden transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate-fade-in-left">
                <h2 className="text-3xl font-bold mb-6 text-pharma-navy dark:text-white">Excellence in Pharmaceutical Manufacturing</h2>
                <p className="text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                  Our state-of-the-art facilities combine cutting-edge technology with stringent quality control measures to deliver pharmaceutical products that meet the highest international standards.
                </p>
                <Button asChild variant="default" className="bg-pharma-navy text-white hover:bg-primary dark:bg-white dark:text-pharma-navy dark:hover:bg-gray-100 group transition-all duration-300">
                  <NavLink to="/about" className="flex items-center gap-2">
                    Learn About Our Process
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </Button>
              </div>
              <div className="order-1 md:order-2 animate-fade-in-right">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-auto"
                  >
                    <source src="/lovable-uploads/0_Medical Supplies_First Aid Kit_3840x2160.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white dark:bg-background transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-12">Why Choose Baker & Davis</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-xl bg-gradient-card-light dark:bg-gradient-card-dark shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4 animate-pulse-subtle">
                    <feature.icon className="w-12 h-12 text-pharma-navy dark:text-primary-light" />
                  </div>
                  <h3 className="text-xl font-semibold text-pharma-navy dark:text-white text-center mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-white to-pharma-light/20 dark:from-background dark:to-pharma-dark/20 relative overflow-hidden transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center p-8 rounded-xl backdrop-blur-sm bg-white/80 dark:bg-white/5 border border-pharma-navy/10 dark:border-white/10 hover:border-pharma-navy/30 dark:hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group ${
                    animate ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform animate-float">
                    <stat.icon className="w-10 h-10 text-pharma-navy dark:text-primary-light" />
                  </div>
                  <p className="text-4xl font-bold text-pharma-navy dark:text-white mb-2">{stat.value}</p>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
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
                <div className="bg-white dark:bg-white/5 p-6 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                  <img 
                    src="/public/placeholder.svg" 
                    alt="Pharmaceutical Manufacturing" 
                    className="w-full h-auto rounded-lg" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-background relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pharma-light/5 dark:via-pharma-dark/10 to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`bg-gradient-card-light dark:bg-gradient-card-dark p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    animate ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">{testimonial.content}</p>
                  <div className="border-t dark:border-gray-700 pt-4">
                    <p className="font-semibold text-pharma-navy dark:text-primary-light">{testimonial.author}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-primary dark:bg-gradient-to-br dark:from-pharma-dark dark:to-primary-dark text-white relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-[url('/public/placeholder.svg')] bg-center opacity-5"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner with a Global Leader?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the many healthcare providers and distributors worldwide who trust Baker & Davis for their pharmaceutical needs.
            </p>
            <Button asChild size="lg" className="bg-white text-pharma-navy dark:bg-primary-light dark:text-pharma-dark hover:bg-gray-100 dark:hover:bg-primary group transition-all duration-300 transform hover:scale-105">
              <NavLink to="/contact" className="flex items-center gap-2">
                Get in Touch Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
          </div>
        </section>

        <FAQ />
      </div>
    </>
  );
};

export default Home;
