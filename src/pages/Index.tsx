
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Seo from "@/components/Seo";

const Index = () => {
  const features = [
    {
      title: "Quality Products",
      description: "Premium pharmaceutical formulations meeting stringent international standards"
    },
    {
      title: "Global Network",
      description: "Extensive distribution network serving healthcare facilities across 50+ countries"
    },
    {
      title: "Research-Driven",
      description: "Continuous innovation through advanced R&D facilities staffed by experts"
    },
    {
      title: "Regulatory Excellence",
      description: "Comprehensive documentation and adherence to international standards"
    }
  ];

  const testimonials = [
    {
      content: "Baker & Davis has consistently delivered pharmaceutical products of exceptional quality, meeting our strict standards.",
      author: "Dr. John Delaney",
      role: "Procurement Director",
      company: "MediGlobal Health Systems"
    },
    {
      content: "Their commitment to quality and compliance has made them our trusted partner for over 5 years now.",
      author: "Sarah Mitchell",
      role: "Operations Manager",
      company: "PharmaDirect Solutions"
    }
  ];

  return (
    <>
      <Seo 
        title="Global Pharmaceutical Manufacturer & Exporter"
        description="Baker & Davis - Leading pharmaceutical manufacturer and global exporter with WHO-GMP certified, FDA approved facilities."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg"
            alt="Medical Supplies Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 hero-gradient-light backdrop-blur-sm"></div>
        </div>
        
        <div className="container relative z-10 px-4 py-24 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pharma-navy mb-6 leading-tight tracking-tight animate-fade-in">
              Pioneering
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pharma-navy via-primary to-pharma-navy mt-2">
                Healthcare Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Setting new standards in pharmaceutical excellence with innovative research 
              and global healthcare solutions that improve lives across continents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
              <Button asChild size="lg" className="w-full sm:w-auto text-lg bg-pharma-navy text-white hover:bg-primary group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl px-8 py-6">
                <NavLink to="/about" className="flex items-center gap-3">
                  Discover More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg text-pharma-navy border-pharma-navy hover:bg-pharma-navy/10 transition-all duration-300 transform hover:-translate-y-1 px-8 py-6">
                <NavLink to="/contact">Get Started Today</NavLink>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-pharma-navy">
            <div className="text-center p-6 rounded-xl backdrop-blur-md bg-white/70 border border-pharma-navy/20 hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group">
              <p className="text-3xl font-bold text-pharma-navy mb-1">10+</p>
              <p className="text-sm text-gray-700 font-medium mb-1">Years Experience</p>
              <p className="text-xs text-gray-600 italic">Decade of excellence</p>
            </div>
            <div className="text-center p-6 rounded-xl backdrop-blur-md bg-white/70 border border-pharma-navy/20 hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group">
              <p className="text-3xl font-bold text-pharma-navy mb-1">50+</p>
              <p className="text-sm text-gray-700 font-medium mb-1">Countries Served</p>
              <p className="text-xs text-gray-600 italic">Global presence</p>
            </div>
            <div className="text-center p-6 rounded-xl backdrop-blur-md bg-white/70 border border-pharma-navy/20 hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group">
              <p className="text-3xl font-bold text-pharma-navy mb-1">200+</p>
              <p className="text-sm text-gray-700 font-medium mb-1">Medicines</p>
              <p className="text-xs text-gray-600 italic">Wide range of solutions</p>
            </div>
            <div className="text-center p-6 rounded-xl backdrop-blur-md bg-white/70 border border-pharma-navy/20 hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group">
              <p className="text-3xl font-bold text-pharma-navy mb-1">1000+</p>
              <p className="text-sm text-gray-700 font-medium mb-1">Happy Clients</p>
              <p className="text-xs text-gray-600 italic">Trusted globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">INDUSTRY LEADERSHIP</p>
            <h2 className="text-3xl font-bold text-pharma-navy mb-4">Why Choose Baker & Davis</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl bg-gradient-card-light shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <h3 className="text-xl font-semibold text-pharma-navy text-center mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
                <div className="w-12 h-1 bg-primary/30 mx-auto mt-6 group-hover:w-16 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-pharma-light to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">TESTIMONIALS</p>
            <h2 className="text-3xl font-bold text-pharma-navy mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative">
                  <div className="absolute -top-3 -left-2 text-4xl text-primary/20 font-serif">"</div>
                  <p className="text-gray-700 mb-6 relative z-10 italic">{testimonial.content}</p>
                  <div className="absolute -bottom-3 -right-2 text-4xl text-primary/20 font-serif">"</div>
                </div>

                <div className="mt-4">
                  <p className="font-semibold text-pharma-navy">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-primary">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pharma-navy to-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with a Global Leader?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join the many healthcare providers and distributors worldwide who trust Baker & Davis for their pharmaceutical needs.
          </p>
          <Button asChild size="lg" className="bg-white text-pharma-navy hover:bg-gray-100 group transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg">
            <NavLink to="/contact" className="flex items-center gap-2">
              Get in Touch Today
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </Button>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-white mr-2" />
              <span className="text-sm text-white/90">Secure Transactions</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-white mr-2" />
              <span className="text-sm text-white/90">Industry Recognition</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-white mr-2" />
              <span className="text-sm text-white/90">Corporate Integrity</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
