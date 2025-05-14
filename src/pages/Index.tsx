
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Logo3D from "@/components/ui/logo-3d";

const Index = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const features = [
    "Global pharmaceutical manufacturing excellence",
    "Industry-leading quality control standards",
    "Cutting-edge R&D facilities",
    "Worldwide distribution network",
    "Compliance with international regulations",
    "Sustainable and ethical practices"
  ];

  return (
    <div className="min-h-screen bg-pattern">
      {/* Hero Section */}
      <section className="container py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className={`space-y-4 ${animate ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-pharma-navy">
              Next Generation <span className="gradient-text">Pharmaceutical Solutions</span>
            </h1>
            <p className="text-lg text-gray-700 mt-6 max-w-lg">
              Baker & Davis is transforming healthcare with advanced pharmaceutical manufacturing and innovative drug development to improve lives worldwide.
            </p>
          </div>

          <div className={`space-y-6 ${animate ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "200ms" }}>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <CheckCircle className="h-5 w-5 text-pharma-navy mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="shadow-button hover:shadow-3d bg-pharma-navy hover-lift btn-bounce">
                <NavLink to="/about" className="flex items-center gap-2">
                  Explore Our Solutions
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-pharma-navy text-pharma-navy hover-lift btn-bounce">
                <NavLink to="/contact" className="flex items-center gap-2">
                  Contact Us
                </NavLink>
              </Button>
            </div>
          </div>
        </div>

        <div className={`w-full lg:w-1/2 flex justify-center ${animate ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "400ms" }}>
          <div className="relative w-full max-w-md">
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-pharma-light rounded-full opacity-60 animate-pulse-subtle"></div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-pharma-light rounded-full opacity-40 animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
            
            <div className="relative z-10 bg-white rounded-2xl shadow-3d p-8 transform hover:scale-105 transition-all duration-500 animate-float">
              <div className="flex justify-center mb-6">
                <Logo3D size="lg" showText={false} />
              </div>
              
              <h3 className="text-2xl font-semibold text-center text-pharma-navy mb-4">Baker & Davis</h3>
              <p className="text-gray-600 text-center mb-6">
                Setting new standards in pharmaceutical excellence with innovative research and global healthcare solutions.
              </p>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/colorful-medication-tablets-capsules-displayed-light-blue-background-emphasizing-health-healthcare-themes.jpg" 
                  alt="Pharmaceutical Products" 
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-pharma-light rounded-lg">
                  <p className="text-lg font-bold text-pharma-navy">10+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="p-3 bg-pharma-light rounded-lg">
                  <p className="text-lg font-bold text-pharma-navy">50+</p>
                  <p className="text-sm text-gray-600">Countries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gradient-primary py-16 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Healthcare Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the global community of healthcare providers and distributors who trust Baker & Davis for their pharmaceutical needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-pharma-navy hover:bg-gray-100 shadow-button hover:shadow-3d hover-lift btn-bounce">
              <NavLink to="/contact">Get in Touch</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover-lift btn-bounce">
              <NavLink to="/about">Learn More</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
