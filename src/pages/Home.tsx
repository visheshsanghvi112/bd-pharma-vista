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
  Globe,
  Shield,
  Award,
  Users,
  CheckCircle,
  Microscope,
  Heart,
  Truck
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
    { value: "1000+", label: "Happy Clients", icon: Star }
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
      icon: Pill,
      title: "Premium Quality",
      description: "Pharmaceutical products meeting the highest international standards and regulations"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving healthcare facilities across 50+ countries with reliable distribution"
    },
    {
      icon: Shield,
      title: "Compliance First",
      description: "WHO-GDP certified with strict adherence to international pharmaceutical regulations"
    },
    {
      icon: Microscope,
      title: "R&D Excellence",
      description: "State-of-the-art research facilities driving innovation in healthcare solutions"
    }
  ];

  const certifications = [
    {
      icon: Award,
      title: "WHO-GDP Certified",
      description: "World Health Organization Good Distribution Practice"
    },
    {
      icon: Shield,
      title: "ISO 9001:2015",
      description: "Quality Management System Certification"
    },
    {
      icon: CheckCircle,
      title: "GMP Compliant",
      description: "Good Manufacturing Practice Standards"
    },
    {
      icon: Heart,
      title: "FDA Approved",
      description: "Food and Drug Administration Recognition"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Research & Development",
      description: "Advanced pharmaceutical research using cutting-edge technology",
      icon: TestTube
    },
    {
      step: "02", 
      title: "Quality Manufacturing",
      description: "State-of-the-art production facilities with strict quality control",
      icon: Hospital
    },
    {
      step: "03",
      title: "Regulatory Compliance",
      description: "Comprehensive testing and certification for global standards",
      icon: Shield
    },
    {
      step: "04",
      title: "Global Distribution",
      description: "Efficient worldwide logistics and supply chain management",
      icon: Truck
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
        {/* Hero Section with Video Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover object-center"
            >
              <source src="/lovable-uploads/Final Comp_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-pharma-navy/80 via-primary/60 to-pharma-navy/90 dark:from-black/70 dark:via-primary-dark/80 dark:to-black/90"></div>
          </div>
          
          <div className="container relative z-10 px-4 py-24 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center space-y-8">
                <div className="animate-fade-in">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                    Global Leader in
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-white to-primary-light mt-4">
                      Pharmaceutical Excellence
                    </span>
                  </h1>
                </div>
                
                <p className="text-xl md:text-2xl text-gray-100 mb-12 animate-fade-in max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.3s" }}>
                  Transforming global healthcare through innovative pharmaceutical solutions, world-class manufacturing, and unwavering commitment to quality.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <Button asChild size="lg" className="w-full sm:w-auto text-lg bg-white text-pharma-navy hover:bg-gray-100 group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl px-10 py-7 rounded-xl font-semibold">
                    <NavLink to="/about" className="flex items-center gap-3">
                      Explore Our Story
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg text-white border-2 border-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 px-10 py-7 rounded-xl font-semibold">
                    <NavLink to="/contact">Start Partnership</NavLink>
                  </Button>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-8 rounded-2xl backdrop-blur-lg bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl group"
                    style={{ animationDelay: `${1.2 + index * 0.2}s` }}
                  >
                    <div className="flex justify-center mb-4 transform group-hover:scale-125 transition-transform duration-300">
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-gray-200 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <FeaturedServices />

        {/* About Section with Pharmaceutical Images */}
        <section className="py-32 bg-gradient-to-b from-white to-pharma-light/30 dark:from-background dark:to-pharma-dark/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-8 font-semibold">
                  <Award className="w-5 h-5" />
                  Industry Leader Since 2010
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-pharma-navy dark:text-white leading-tight">
                  Pioneering Excellence in 
                  <span className="text-primary block mt-2">Global Healthcare</span>
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                  Baker & Davis stands at the forefront of pharmaceutical innovation, combining decades of expertise with cutting-edge technology to deliver life-changing medicines across the globe.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 font-medium">WHO-GDP Certified Manufacturing Excellence</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Global Distribution Network Across 50+ Countries</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Advanced R&D Facilities & Innovation Labs</span>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-pharma-navy text-white hover:bg-primary dark:bg-primary dark:hover:bg-primary-light group transition-all duration-300 px-8 py-6 rounded-xl font-semibold">
                  <NavLink to="/about" className="flex items-center gap-3">
                    Discover Our Journey
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </Button>
              </div>
              
              <div className="animate-fade-in-right">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                      <img 
                        src="/lovable-uploads/smiling-female-pharmacist-stands-confidently-pharmacy-wears-white-lab-coat-arms-crossed.jpg" 
                        alt="Professional Pharmacist" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                      <img 
                        src="/lovable-uploads/colorful-medication-tablets-capsules-displayed-light-blue-background-emphasizing-health-healthcare-themes.jpg" 
                        alt="Quality Medications" 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-6 mt-12">
                    <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                      <img 
                        src="/lovable-uploads/female-pharmacist-writing-clipboard-examining-medications-pharmacy.jpg" 
                        alt="Quality Control" 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                      <img 
                        src="/lovable-uploads/antibiotic-drug-selection-multi-colored-capsule-pills-blue-background-forceps-picks-capsule.jpg" 
                        alt="Pharmaceutical Research" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 bg-white dark:bg-background relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-pharma-navy dark:text-white mb-6">
                Why Global Leaders Choose Us
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our commitment to excellence, innovation, and reliability has made us the trusted partner for healthcare providers worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-white to-pharma-light/50 dark:from-white/5 dark:to-pharma-dark/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 dark:border-gray-800 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-pharma-navy dark:text-white text-center mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-gradient-to-br from-pharma-light/30 to-primary/10 dark:from-pharma-dark/30 dark:to-primary-dark/20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-pharma-navy dark:text-white mb-6">
                Our Excellence Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From research to global distribution, every step is meticulously designed to ensure pharmaceutical excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                >
                  <div className="text-center p-8 rounded-2xl bg-white dark:bg-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex justify-center mt-6 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-4">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-32 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-pharma-navy dark:text-white mb-6">
                Certified Excellence
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our international certifications and accreditations demonstrate our unwavering commitment to quality and compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="group text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-pharma-light/20 dark:from-primary-dark/10 dark:to-pharma-dark/20 hover:from-primary/10 hover:to-pharma-light/30 dark:hover:from-primary-dark/20 dark:hover:to-pharma-dark/30 transition-all duration-500 transform hover:-translate-y-2 border border-primary/20 dark:border-primary-dark/30 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <cert.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-pharma-navy dark:text-white mb-3">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-gradient-to-br from-pharma-light/20 to-primary/5 dark:from-pharma-dark/20 dark:to-primary-dark/10 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-pharma-navy dark:text-white mb-6">
                Trusted Worldwide
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Hear from our global partners who trust Baker & Davis for their pharmaceutical needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`group bg-white dark:bg-white/10 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800 ${
                    animate ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t dark:border-gray-700 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-pharma-navy dark:text-white text-lg">{testimonial.author}</p>
                        <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-pharma-navy via-primary to-pharma-navy dark:from-primary-dark dark:via-pharma-dark dark:to-primary-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg')] bg-center opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Ready to Transform Healthcare Together?
              </h2>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90">
                Join the global network of healthcare leaders who trust Baker & Davis for pharmaceutical excellence. Let's build a healthier world together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild size="lg" className="w-full sm:w-auto bg-white text-pharma-navy hover:bg-gray-100 group transition-all duration-300 transform hover:scale-105 px-10 py-7 rounded-xl font-bold text-lg">
                  <NavLink to="/contact" className="flex items-center gap-3">
                    Start Your Partnership
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-white border-2 border-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 px-10 py-7 rounded-xl font-bold text-lg">
                  <NavLink to="/about">Learn More</NavLink>
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