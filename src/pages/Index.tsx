
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <>
      <Seo 
        title="Baker & Davis - Global Pharmaceutical Leader"
        description="Welcome to Baker & Davis - Leading pharmaceutical manufacturer and global exporter. Discover premium healthcare solutions and innovative pharmaceutical products."
      />
      
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="pt-16 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F1F1F1] to-[#FCFCFC] -z-10" />
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#222222]">
                  Welcome to a <span className="text-pharma-navy font-semibold">healthier</span> tomorrow
                </h1>
                
                <p className="text-lg md:text-xl text-[#555555] leading-relaxed">
                  Experience pharmaceutical excellence with our premium healthcare solutions designed for global healthcare providers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="rounded-full bg-pharma-navy hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8">
                    <NavLink to="/about" className="flex items-center gap-2">
                      Learn More
                      <ArrowRight size={18} />
                    </NavLink>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="rounded-full border-[#999] text-[#333333] hover:bg-[#F3F3F3] hover:text-[#222222] transition-all duration-300 px-8">
                    <NavLink to="/contact" className="flex items-center gap-2">
                      Contact Us
                    </NavLink>
                  </Button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 animate-fade-in">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <AspectRatio ratio={4/3} className="bg-white">
                    <img 
                      src="/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg"
                      alt="Medical supplies and pharmaceutical products"
                      className="object-cover w-full h-full rounded-3xl"
                      style={{
                        filter: "brightness(1.05) contrast(1.05)"
                      }}
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-[#F6F6F7] opacity-50 -z-10" />
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-[#222222] mb-6">Our Pharmaceutical Solutions</h2>
              <p className="text-lg text-[#555555]">
                We're dedicated to improving global healthcare through innovation and high-quality pharmaceutical products.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality Manufacturing",
                  description: "WHO-GMP certified manufacturing facilities delivering premium pharmaceutical products.",
                  image: "/lovable-uploads/colorful-medication-tablets-capsules-displayed-light-blue-background-emphasizing-health-healthcare-themes.jpg"
                },
                {
                  title: "Global Export Network",
                  description: "Extensive distribution reaching over 50 countries with reliable logistics.",
                  image: "/lovable-uploads/female-pharmacist-writing-clipboard-examining-medications-pharmacy.jpg"
                },
                {
                  title: "Research Innovation",
                  description: "Cutting-edge R&D creating next-generation pharmaceutical solutions.",
                  image: "/lovable-uploads/antibiotic-drug-selection-multi-colored-capsule-pills-blue-background-forceps-picks-capsule.jpg"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-[#333333] mb-3">{feature.title}</h3>
                    <p className="text-[#555555]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 bg-gradient-to-br from-pharma-light/30 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-[#222222] mb-6">Our Pharmaceutical Excellence</h2>
              <p className="text-lg text-[#555555]">
                Discover our state-of-the-art facilities and premium pharmaceutical products.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Professional Pharmacist Team",
                  description: "Our expert pharmacists ensuring quality and safety",
                  image: "/lovable-uploads/smiling-female-pharmacist-stands-confidently-pharmacy-wears-white-lab-coat-arms-crossed.jpg"
                },
                {
                  title: "Medical Equipment & Supplies",
                  description: "Advanced medical devices and pharmaceutical supplies",
                  image: "/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg"
                },
                {
                  title: "Quality Control Laboratory",
                  description: "Rigorous testing and quality assurance processes",
                  image: "/lovable-uploads/female-pharmacist-writing-clipboard-examining-medications-pharmacy.jpg"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-[#333333] mb-3">{item.title}</h3>
                    <p className="text-[#555555]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Video Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pharma-navy/10 to-primary/5 -z-10" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-4">See Our Facilities In Action</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Take a virtual tour of our state-of-the-art pharmaceutical manufacturing facilities and see how we maintain our high-quality standards.
                </p>
              </div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-500 group">
                <AspectRatio ratio={16/9}>
                  <video
                    poster="/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg"
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/lovable-uploads/Final Comp_1.mp4" type="video/mp4" />
                    <source src="/lovable-uploads/0_Medical Supplies_First Aid Kit_3840x2160.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </AspectRatio>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-pharma-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Global Impact</h2>
              <p className="text-lg text-blue-100">
                Numbers that speak to our commitment to global healthcare excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Countries Served" },
                { number: "25+", label: "Years Experience" },
                { number: "1000+", label: "Products Manufactured" },
                { number: "99.9%", label: "Quality Assurance" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-[#222222] mb-6">Ready to Partner With Us?</h2>
              <p className="text-lg text-[#555555] mb-8">
                Join the many healthcare providers and distributors worldwide who trust Baker & Davis for their pharmaceutical needs.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild size="lg" className="rounded-full bg-pharma-navy hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8">
                  <NavLink to="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight size={18} />
                  </NavLink>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="rounded-full border-[#999] text-[#333333] hover:bg-[#F3F3F3] hover:text-[#222222] transition-all duration-300 px-8">
                  <NavLink to="/about" className="flex items-center gap-2">
                    Learn More
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

export default Index;
