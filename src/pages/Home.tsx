
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
    <div className="flex flex-col">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg"
            alt="Medical Supplies Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pharma-navy/90 via-pharma-navy/85 to-primary-dark/75 backdrop-blur-sm"></div>
        </div>
        
        <div className="container relative z-10 px-4 py-24 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in leading-tight tracking-tight">
                Pioneering
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-pharma-light to-white mt-2">
                  Healthcare Solutions
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-10 animate-fade-in max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
                Setting new standards in pharmaceutical excellence with innovative research and global healthcare solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button asChild size="lg" className="w-full sm:w-auto text-lg bg-white text-pharma-navy hover:bg-gray-100 group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl px-8 py-6">
                  <NavLink to="/about" className="flex items-center gap-3">
                    Discover More
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg text-white border-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 px-8 py-6">
                  <NavLink to="/contact">Get Started Today</NavLink>
                </Button>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-white animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
                >
                  <div className="flex justify-center mb-3 transform group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-pharma-light" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-200 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-pharma-navy to-primary-dark relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-white">
              <h2 className="text-3xl font-bold mb-6">Excellence in Pharmaceutical Manufacturing</h2>
              <p className="text-gray-200 mb-8 leading-relaxed">
                Our state-of-the-art facilities combine cutting-edge technology with stringent quality control measures to deliver pharmaceutical products that meet the highest international standards.
              </p>
              <Button asChild variant="default" className="bg-white text-pharma-navy hover:bg-gray-100 group">
                <NavLink to="/about" className="flex items-center gap-2">
                  Learn About Our Process
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
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

      <section className="py-24 bg-gradient-to-b from-white to-pharma-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pharma-navy mb-12">Why Choose Baker & Davis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <feature.icon className="w-12 h-12 text-pharma-navy" />
                </div>
                <h3 className="text-xl font-semibold text-pharma-navy text-center mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-pharma-light/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center p-8 rounded-xl backdrop-blur-sm bg-white/80 border border-pharma-navy/10 hover:border-pharma-navy/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group ${
                  animate ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
                  <stat.icon className="w-10 h-10 text-pharma-navy" />
                </div>
                <p className="text-4xl font-bold text-pharma-navy mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-pharma-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/50 pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in-left">
              <h2 className="text-3xl font-bold text-pharma-navy mb-6">About Baker & Davis</h2>
              <p className="text-gray-700 mb-6">
                Founded with a mission to improve global healthcare access, Baker & Davis has grown 
                into a leading pharmaceutical manufacturer and exporter. Our state-of-the-art 
                facilities and commitment to quality ensure that every product meets international 
                standards.
              </p>
              <p className="text-gray-700 mb-8">
                With a robust R&D department and experienced team, we constantly innovate to address 
                evolving healthcare needs worldwide.
              </p>
              <Button asChild variant="default" className="bg-pharma-navy hover:bg-primary-dark group transition-all duration-300">
                <NavLink to="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </Button>
            </div>
            <div className="order-1 md:order-2 animate-fade-in-right">
              <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
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

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pharma-light/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pharma-navy mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  animate ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-pharma-navy">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner with a Global Leader?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the many healthcare providers and distributors worldwide who trust Baker & Davis for their pharmaceutical needs.
          </p>
          <Button asChild size="lg" className="bg-white text-pharma-navy hover:bg-gray-100 group transition-all duration-300 transform hover:scale-105">
            <NavLink to="/contact" className="flex items-center gap-2">
              Get in Touch Today
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
