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

  useEffect(() => {
    // Delay animation to improve initial load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Optimized animation variants for better performance
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {/* Left Content */}
              <motion.div 
                className="space-y-8"
                variants={fadeInLeft}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Sparkles className="w-4 h-4" />
                  WHO-GDP Certified Excellence
                </motion.div>
                
                <motion.h1 
                  className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
                  variants={fadeInUp}
                >
                  Excellence in
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Global Pharmaceuticals
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                  variants={fadeInUp}
                >
                  Setting new standards in pharmaceutical excellence with innovative research, 
                  quality manufacturing, and global healthcare solutions that make a difference.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  variants={fadeInUp}
                >
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    <NavLink to="/about" className="flex items-center gap-2">
                      Discover Our Story
                      <ArrowRight className="w-5 h-5" />
                    </NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300">
                    <NavLink to="/contact">Get Started Today</NavLink>
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Right Content - Hero Video */}
              <motion.div 
                className="relative"
                variants={fadeInRight}
              >
                <div className="relative max-w-lg mx-auto lg:max-w-none">
                  {/* Gradient glow container */}
                  <div className="relative rounded-2xl lg:rounded-3xl p-1 bg-gradient-to-br from-blue-600/20 via-purple-600/30 to-blue-600/20 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02] group">
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-blue-600/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Hero Video */}
                    <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-auto object-cover rounded-2xl lg:rounded-3xl"
                        onError={(e) => {
                          console.warn('Hero video failed to load');
                          const target = e.target as HTMLVideoElement;
                          target.style.display = 'none';
                          // Show fallback image
                          const fallback = document.createElement('img');
                          fallback.src = '/lovable-uploads/smiling-female-pharmacist-stands-confidently-pharmacy-wears-white-lab-coat-arms-crossed.jpg';
                          fallback.alt = 'Pharmaceutical Excellence';
                          fallback.className = 'w-full h-auto object-cover rounded-2xl lg:rounded-3xl';
                          target.parentNode?.appendChild(fallback);
                        }}
                        onLoadStart={() => console.log('Video loading started')}
                        onCanPlay={() => console.log('Video can play')}
                        onLoadedData={() => console.log('Video data loaded')}
                      >
                        <source src="/lovable-uploads/medicalsupplies.mp4" type="video/mp4" />
                        <source src="/lovable-uploads/final.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Animated border glow */}
                      <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse-subtle"></div>
                      
                      {/* Subtle overlay for better text contrast if needed */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
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
                Why Choose Baker & Davis
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages that make us the preferred choice for pharmaceutical excellence worldwide.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 group-hover:shadow-xl">
                    <CardContent className="p-8 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognized globally for our commitment to quality, innovation, and excellence in pharmaceutical services.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
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
        <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-white/5"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Ready to Partner with Excellence?
              </h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
                Join thousands of healthcare providers worldwide who trust Baker & Davis for their pharmaceutical needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <NavLink to="/contact" className="flex items-center gap-2">
                    Get in Touch Today
                    <ArrowRight className="w-5 h-5" />
                  </NavLink>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  <NavLink to="/about" className="flex items-center gap-2">
                    Learn More About Us
                    <Rocket className="w-5 h-5" />
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