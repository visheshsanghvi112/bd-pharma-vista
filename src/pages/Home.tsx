
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
  TestTube,
  Shield,
  Globe,
  Award,
  Users
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
    { value: "50+", label: "Countries Served", icon: Globe },
    { value: "200+", label: "Medicines Produced", icon: Activity },
    { value: "1000+", label: "Happy Clients", icon: Users }
  ];

  const testimonials = [
    {
      id: 1,
      content: "Baker & Davis has consistently delivered pharmaceutical products of exceptional quality, meeting our strict standards and timelines.",
      author: "John D.",
      role: "Procurement Director, International Hospital Chain",
      rating: 5
    },
    {
      id: 2,
      content: "Their commitment to quality and compliance has made them our trusted partner for over 5 years now.",
      author: "Sarah M.",
      role: "Operations Manager, Global Healthcare Distributor",
      rating: 5
    },
    {
      id: 3,
      content: "BD's export services are unmatched in reliability and regulatory documentation, making international business seamless.",
      author: "Michael T.",
      role: "CEO, European Pharmaceutical Distributor",
      rating: 5
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "WHO-GMP certified facilities ensuring the highest pharmaceutical standards",
      gradient: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Trusted pharmaceutical partner serving healthcare systems worldwide",
      gradient: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Award-winning pharmaceutical manufacturing with proven track record",
      gradient: "bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20"
    },
    {
      icon: TestTube,
      title: "Research & Development",
      description: "Advanced R&D facilities driving pharmaceutical innovation forward",
      gradient: "bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20"
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
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg"
              alt="Medical Supplies Background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pharma-navy/80 via-primary/60 to-pharma-navy/90 backdrop-blur-[2px]"></div>
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
          
          <div className="container relative z-10 px-4 py-24 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <span className="inline-block px-4 py-2 text-sm font-semibold bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 animate-fade-in">
                    WHO-GMP Certified • FDA Approved
                  </span>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight tracking-tight" style={{ animationDelay: "0.2s" }}>
                    Pioneering
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white mt-2">
                      Global Healthcare
                    </span>
                    <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 font-light">
                      Excellence
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-blue-100 mb-10 animate-fade-in max-w-3xl mx-auto leading-relaxed font-light" style={{ animationDelay: "0.4s" }}>
                    Setting new standards in pharmaceutical manufacturing with cutting-edge research, 
                    international quality certifications, and trusted global healthcare partnerships.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <Button asChild size="lg" className="w-full sm:w-auto text-lg bg-white text-pharma-navy hover:bg-blue-50 group transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl px-10 py-6 rounded-full font-semibold">
                    <NavLink to="/about" className="flex items-center gap-3">
                      Discover Our Story
                      <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg text-white border-2 border-white/30 backdrop-blur-md hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 px-10 py-6 rounded-full font-semibold">
                    <NavLink to="/contact">Start Partnership</NavLink>
                  </Button>
                </div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl group"
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    <div className="flex justify-center mb-4 transform group-hover:scale-125 transition-all duration-300">
                      <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                    <p className="text-blue-200 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FeaturedServices />

        {/* Enhanced Manufacturing Excellence Section */}
        <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-background dark:via-gray-900/50 dark:to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-left">
                <div className="space-y-6">
                  <span className="inline-block px-4 py-2 text-sm font-semibold bg-primary/10 text-primary rounded-full">
                    Manufacturing Excellence
                  </span>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold text-pharma-navy dark:text-white leading-tight">
                    State-of-the-Art
                    <span className="block text-primary">Pharmaceutical Manufacturing</span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our cutting-edge facilities combine advanced automation, stringent quality control, 
                    and internationally certified processes to deliver pharmaceutical products that exceed 
                    global standards and regulatory requirements.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 py-6">
                    <div className="text-center p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Quality Rate</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-green-50 dark:bg-green-900/20">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">24/7</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Production</div>
                    </div>
                  </div>
                  
                  <Button asChild variant="default" className="bg-pharma-navy text-white hover:bg-primary dark:bg-white dark:text-pharma-navy dark:hover:bg-gray-100 group transition-all duration-500 px-8 py-6 rounded-full text-lg font-semibold">
                    <NavLink to="/about" className="flex items-center gap-3">
                      Explore Our Facilities
                      <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </NavLink>
                  </Button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 animate-fade-in-right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-pharma-navy/20 rounded-3xl transform rotate-3"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-700">
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
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 text-sm font-semibold bg-primary/10 text-primary rounded-full mb-4">
                Our Advantages
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-pharma-navy dark:text-white mb-6">
                Why Global Leaders Choose Baker & Davis
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover the key advantages that make us the preferred pharmaceutical partner for healthcare organizations worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`${feature.gradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 animate-fade-in group border border-gray-100 dark:border-gray-800`}
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-2xl bg-white/50 dark:bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-all duration-300">
                        <feature.icon className="w-10 h-10 text-pharma-navy dark:text-primary-light" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-pharma-navy dark:text-white group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section className="py-32 bg-white dark:bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-2 text-sm font-semibold bg-primary/10 text-primary rounded-full">
                      Our Heritage
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-pharma-navy dark:text-white leading-tight">
                      Two Decades of
                      <span className="block text-primary">Pharmaceutical Innovation</span>
                    </h2>
                  </div>
                  
                  <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      Founded with a mission to democratize global healthcare access, Baker & Davis has evolved 
                      into a cornerstone of pharmaceutical excellence, trusted by healthcare systems across six continents.
                    </p>
                    <p>
                      Our state-of-the-art manufacturing facilities, combined with an unwavering commitment to quality 
                      and innovation, ensure that every product bearing our name meets the most stringent international standards.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">ISO 9001</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Certified Quality Management</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">WHO-GMP</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Global Manufacturing Standards</div>
                    </div>
                  </div>
                  
                  <Button asChild variant="default" className="bg-pharma-navy hover:bg-primary text-white dark:bg-primary dark:hover:bg-primary-light group transition-all duration-500 px-8 py-6 rounded-full text-lg font-semibold">
                    <NavLink to="/about" className="flex items-center gap-3">
                      Discover Our Journey
                      <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </NavLink>
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in-right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-pharma-navy/10 rounded-3xl transform -rotate-3"></div>
                  <div className="relative bg-white dark:bg-white/5 p-8 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="/lovable-uploads/female-pharmacist-writing-clipboard-examining-medications-pharmacy.jpg"
                      alt="Pharmaceutical Professional" 
                      className="w-full h-auto rounded-2xl object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-background dark:to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 text-sm font-semibold bg-primary/10 text-primary rounded-full mb-4">
                Client Testimonials
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-pharma-navy dark:text-white mb-6">
                Trusted by Healthcare Leaders Worldwide
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover why global healthcare organizations choose Baker & Davis as their pharmaceutical partner
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`bg-white dark:bg-white/5 p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-700 transform hover:-translate-y-2 ${
                    animate ? 'animate-fade-in' : 'opacity-0'
                  } group`}
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  <div className="space-y-6">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="border-t dark:border-gray-700 pt-6">
                      <div className="space-y-2">
                        <p className="font-bold text-pharma-navy dark:text-primary-light text-lg">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-32 bg-gradient-to-br from-pharma-navy via-primary to-pharma-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg')] bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-pharma-navy/90 to-primary/90"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto space-y-8">
              <span className="inline-block px-4 py-2 text-sm font-semibold bg-white/10 backdrop-blur-sm rounded-full">
                Start Your Partnership
              </span>
              
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to Transform
                <span className="block">Global Healthcare Together?</span>
              </h2>
              
              <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
                Join thousands of healthcare providers and distributors worldwide who trust Baker & Davis 
                for their pharmaceutical supply chain needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-white text-pharma-navy hover:bg-gray-100 group transition-all duration-500 transform hover:scale-105 px-10 py-6 rounded-full text-lg font-semibold">
                  <NavLink to="/contact" className="flex items-center gap-3">
                    Start Partnership Today
                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </NavLink>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-500 px-10 py-6 rounded-full text-lg font-semibold">
                  <NavLink to="/about">Learn More About Us</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </div>
    </>
  );
};

export default Home;
