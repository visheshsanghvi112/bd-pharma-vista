
import { useState, useEffect, useRef } from "react";
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
  TestTube,
  Award,
  CheckCircle,
  Globe,
  Building,
  MapPin,
  Users,
  Shield 
} from "lucide-react";
import { motion } from "framer-motion";
import FeaturedServices from "@/components/home/FeaturedServices";
import FAQ from "@/components/home/FAQ";
import Seo from "@/components/Seo";
import PartnersSection from "@/components/home/PartnersSection";
import ProductHighlights from "@/components/home/ProductHighlights";
import NewsSection from "@/components/home/NewsSection";
import { Card, CardContent } from "@/components/ui/card";

// Animation variants for scroll animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setAnimate(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "10+", label: "Years Experience", icon: Calendar, description: "Decade of pharmaceutical excellence" },
    { value: "50+", label: "Countries Served", icon: Globe, description: "Global presence across continents" },
    { value: "200+", label: "Medicines Produced", icon: Pill, description: "Wide range of therapeutic solutions" },
    { value: "1000+", label: "Happy Clients", icon: Users, description: "Trusted by healthcare providers worldwide" }
  ];

  const testimonials = [
    {
      id: 1,
      content: "Baker & Davis has consistently delivered pharmaceutical products of exceptional quality, meeting our strict standards and timelines. Their attention to detail and commitment to excellence sets them apart from other suppliers.",
      author: "Dr. John Delaney",
      role: "Procurement Director, International Hospital Chain",
      rating: 5,
      image: "/lovable-uploads/smiling-female-pharmacist-stands-confidently-pharmacy-wears-white-lab-coat-arms-crossed.jpg",
      company: "MediGlobal Health Systems"
    },
    {
      id: 2,
      content: "Their commitment to quality and compliance has made them our trusted partner for over 5 years now. The team's expertise in navigating complex regulatory requirements has been invaluable for our expanding operations.",
      author: "Sarah Mitchell",
      role: "Operations Manager, Global Healthcare Distributor",
      rating: 5,
      image: "/lovable-uploads/female-pharmacist-writing-clipboard-examining-medications-pharmacy.jpg",
      company: "PharmaDirect Solutions"
    },
    {
      id: 3,
      content: "BD's export services are unmatched in reliability and regulatory documentation, making international business seamless. Their technical support and product knowledge have helped us expand our pharmaceutical offerings.",
      author: "Michael Thornton",
      role: "CEO, European Pharmaceutical Distributor",
      rating: 5,
      image: "/lovable-uploads/77a84132-47eb-4743-9caf-404a4b00c77b.png",
      company: "EuroPharma Networks"
    }
  ];

  const features = [
    {
      icon: Pill,
      title: "Quality Products",
      description: "Premium pharmaceutical formulations meeting stringent international standards and regulatory requirements"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive distribution network serving healthcare facilities across 50+ countries with localized support"
    },
    {
      icon: Shield,
      title: "Regulatory Excellence",
      description: "Comprehensive documentation and adherence to international regulatory frameworks and standards"
    },
    {
      icon: TestTube,
      title: "Research-Driven",
      description: "Continuous innovation through advanced R&D facilities staffed by industry-leading scientists"
    }
  ];

  const certifications = [
    { name: "WHO-GMP Certification", description: "World Health Organization Good Manufacturing Practices" },
    { name: "US FDA Approval", description: "United States Food & Drug Administration" },
    { name: "EU GMP Compliance", description: "European Union Good Manufacturing Practices" },
    { name: "ISO 9001:2015", description: "Quality Management Systems" },
    { name: "ISO 14001:2015", description: "Environmental Management Systems" }
  ];

  return (
    <>
      <Seo 
        title="Global Pharmaceutical Manufacturer & Exporter"
        description="Baker & Davis - Leading pharmaceutical manufacturer and global exporter. WHO-GMP certified, FDA approved facility specializing in high-quality medicines and international drug trading."
      />
      <div className="flex flex-col">
        {/* Hero Section with Parallax Effect */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{ 
            perspective: "1000px"
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY * 0.4}px)`
            }}
          >
            <img
              src="/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg"
              alt="Medical Supplies Background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 hero-gradient-light dark:hero-gradient-dark backdrop-blur-sm transition-all duration-500"></div>
          </div>
          
          <div className="container relative z-10 px-4 py-24 mx-auto">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center space-y-6"
                initial="hidden"
                animate={animate ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-pharma-navy dark:text-white mb-6 leading-tight tracking-tight"
                  variants={fadeInUp}
                >
                  Pioneering
                  <motion.span 
                    className="block bg-clip-text text-transparent bg-gradient-to-r from-pharma-navy via-primary to-pharma-navy dark:from-white dark:via-primary-light dark:to-white mt-2"
                    variants={fadeInUp}
                  >
                    Healthcare Solutions
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
                  variants={fadeInUp}
                >
                  Setting new standards in pharmaceutical excellence with innovative research 
                  and global healthcare solutions that improve lives across continents.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                  variants={fadeInUp}
                >
                  <Button asChild size="lg" className="w-full sm:w-auto text-lg bg-pharma-navy text-white dark:bg-white dark:text-pharma-navy hover:bg-primary dark:hover:bg-gray-100 group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl px-8 py-6">
                    <NavLink to="/about" className="flex items-center gap-3">
                      Discover More
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg text-pharma-navy dark:text-white border-pharma-navy dark:border-white hover:bg-pharma-navy/10 dark:hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 px-8 py-6">
                    <NavLink to="/contact">Get Started Today</NavLink>
                  </Button>
                </motion.div>
              </motion.div>

              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-pharma-navy dark:text-white">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-6 rounded-xl backdrop-blur-md bg-white/70 dark:bg-white/10 border border-pharma-navy/20 dark:border-white/20 hover:bg-white/90 dark:hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 20 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex justify-center mb-3 transform group-hover:scale-110 transition-transform">
                      <stat.icon className="w-10 h-10 text-pharma-navy dark:text-primary-light" />
                    </div>
                    <p className="text-3xl font-bold text-pharma-navy dark:text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-200 font-medium mb-1">{stat.label}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 italic">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Scroll Icon */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-pharma-navy dark:text-white opacity-70"
            >
              <ArrowRight className="h-8 w-8 rotate-90" />
              <p className="text-xs mt-2 font-medium">Scroll to Explore</p>
            </motion.div>
          </div>
        </section>

        {/* Partners & Clients Section */}
        <PartnersSection />

        {/* Featured Services with Enhanced UI */}
        <FeaturedServices />

        {/* Product Highlights Section */}
        <ProductHighlights />

        {/* Excellence in Manufacturing Section */}
        <section className="py-24 bg-gradient-to-b from-pharma-light to-white dark:from-pharma-dark dark:to-background relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-pharma-navy dark:text-white">Excellence in Pharmaceutical Manufacturing</h2>
                <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                  Our state-of-the-art facilities combine cutting-edge technology with stringent quality control measures 
                  to deliver pharmaceutical products that meet the highest international standards. Every batch undergoes 
                  rigorous testing and validation processes.
                </p>
                <p className="text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                  From raw material selection to final packaging, our comprehensive approach ensures consistent quality 
                  and efficacy in every product that bears the Baker & Davis name.
                </p>
                <Button asChild variant="default" className="bg-pharma-navy text-white hover:bg-primary dark:bg-white dark:text-pharma-navy dark:hover:bg-gray-100 group transition-all duration-300">
                  <NavLink to="/about" className="flex items-center gap-2">
                    Learn About Our Process
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </Button>
                
                {/* Certifications */}
                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-4 text-pharma-navy dark:text-white">Our Certifications</h3>
                  <div className="flex flex-wrap gap-3">
                    {certifications.map((cert, index) => (
                      <div 
                        key={index}
                        className="flex items-center bg-white/80 dark:bg-white/10 px-3 py-2 rounded-lg border border-pharma-navy/10 dark:border-white/10"
                      >
                        <CheckCircle className="h-4 w-4 text-primary dark:text-primary-light mr-2" />
                        <div>
                          <p className="text-xs font-medium text-pharma-navy dark:text-white">{cert.name}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-300">{cert.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pharma-navy/20 to-transparent z-10"></div>
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
                  <div className="absolute bottom-4 left-4 z-20 bg-white/80 dark:bg-pharma-navy/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <p className="text-xs font-medium text-pharma-navy dark:text-white">Advanced Manufacturing Facility</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">WHO-GMP Certified, FDA Approved</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section with Enhanced Features */}
        <section className="py-24 bg-white dark:bg-background transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary dark:text-primary-light font-medium mb-2">INDUSTRY LEADERSHIP</p>
              <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-4">Why Choose Baker & Davis</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark mx-auto"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="p-8 rounded-xl bg-gradient-card-light dark:bg-gradient-card-dark shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex justify-center mb-6 group-hover:animate-pulse-subtle">
                    <div className="w-16 h-16 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-full">
                      <feature.icon className="w-8 h-8 text-primary dark:text-primary-light" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-pharma-navy dark:text-white text-center mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
                  <div className="w-12 h-1 bg-primary/30 dark:bg-primary-light/30 mx-auto mt-6 group-hover:w-16 transition-all"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News & Industry Insights Section */}
        <NewsSection />

        {/* Enhanced Testimonials Section */}
        <section className="py-20 bg-white dark:bg-background relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pharma-light/5 dark:via-pharma-dark/10 to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary dark:text-primary-light font-medium mb-2">TESTIMONIALS</p>
              <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-4">What Our Clients Say</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark mx-auto"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id} 
                  className="bg-gradient-card-light dark:bg-gradient-card-dark p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 dark:border-primary-light/20 mr-4">
                      <img 
                        src={testimonial.image || "/public/placeholder.svg"} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-pharma-navy dark:text-primary-light">{testimonial.author}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      <p className="text-xs text-primary dark:text-primary-light/80">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -top-3 -left-2 text-4xl text-primary/20 dark:text-primary-light/20 font-serif">"</div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10 italic">{testimonial.content}</p>
                    <div className="absolute -bottom-3 -right-2 text-4xl text-primary/20 dark:text-primary-light/20 font-serif">"</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-20 bg-gradient-primary dark:bg-gradient-to-br dark:from-pharma-dark dark:to-primary-dark text-white relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-[url('/public/placeholder.svg')] bg-center opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-primary-light dark:text-white/80 font-medium mb-2">GLOBAL REACH</p>
                <h2 className="text-3xl font-bold mb-6 text-white">Serving Healthcare Needs Worldwide</h2>
                <p className="text-xl mb-8 text-white/90">
                  Our pharmaceutical products reach patients in over 50 countries across 6 continents, 
                  supported by local representatives who understand regional healthcare needs.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-light mr-2" />
                    <span className="text-white/90">Asia Pacific</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-light mr-2" />
                    <span className="text-white/90">North America</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-light mr-2" />
                    <span className="text-white/90">Europe</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-light mr-2" />
                    <span className="text-white/90">Middle East & Africa</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-light mr-2" />
                    <span className="text-white/90">Latin America</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-light mr-2" />
                    <span className="text-white/90">Australia & Oceania</span>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-white text-pharma-navy dark:bg-primary-light dark:text-pharma-dark hover:bg-gray-100 dark:hover:bg-primary group transition-all duration-300 transform hover:scale-105">
                  <NavLink to="/about" className="flex items-center gap-2">
                    Explore Our Global Network
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* World Map Visualization */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent rounded-2xl"></div>
                  <Card className="overflow-hidden border-none bg-white/10 backdrop-blur-md">
                    <CardContent className="p-0">
                      <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                        <img 
                          src="/lovable-uploads/a0f3cd1d-d1ca-4032-9c17-3f8a72e26dd2.png" 
                          alt="Global Presence Map" 
                          className="absolute inset-0 w-full h-full object-cover rounded-2xl" 
                        />
                        {/* Geographic marker points */}
                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary-light rounded-full animate-ping"></div>
                        <div className="absolute top-1/3 left-2/3 w-3 h-3 bg-primary-light rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-primary-light rounded-full animate-ping"></div>
                        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary-light rounded-full animate-ping"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Statistics overlay */}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-primary-dark p-4 rounded-xl shadow-xl border border-primary/20 dark:border-white/10">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-pharma-navy dark:text-white">50+</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Countries</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-pharma-navy dark:text-white">6</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Continents</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-pharma-navy dark:text-white">24/7</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Support</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pharma-navy to-primary dark:from-pharma-dark dark:to-primary-dark text-white relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/7af443a2-0eea-46d3-8be1-6ad1aab655af.png')] bg-center bg-no-repeat bg-contain opacity-5"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with a Global Leader?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                Join the many healthcare providers and distributors worldwide who trust Baker & Davis for their pharmaceutical needs.
              </p>
              <Button asChild size="lg" className="bg-white text-pharma-navy dark:bg-primary-light dark:text-pharma-dark hover:bg-gray-100 dark:hover:bg-primary group transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg">
                <NavLink to="/contact" className="flex items-center gap-2">
                  Get in Touch Today
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </Button>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-primary-light mr-2" />
                  <span className="text-sm text-white/90">Secure Transactions</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-primary-light mr-2" />
                  <span className="text-sm text-white/90">Industry Recognition</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Building className="h-5 w-5 text-primary-light mr-2" />
                  <span className="text-sm text-white/90">Corporate Integrity</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <MapPin className="h-5 w-5 text-primary-light mr-2" />
                  <span className="text-sm text-white/90">Local Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <FAQ />
      </div>
    </>
  );
};

export default Home;
