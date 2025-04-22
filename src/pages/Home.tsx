import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { 
  ArrowRight, 
  Star,
  TrendingUp,
  Activity,
  Calendar 
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/female-pharmacist-writing-clipboard-examining-medications-pharmacy.jpg"
            alt="Pharmacist at work"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-pharma-navy/95 to-primary-dark/90"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in font-poppins">
              Delivering Healthcare with
              <span className="block text-pharma-light bg-clip-text text-transparent bg-gradient-to-r from-white to-pharma-light/80"> Precision & Purpose</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 animate-fade-in font-inter" style={{ animationDelay: "0.2s" }}>
              BD Pvt. Ltd. is a trusted name in pharmaceutical manufacturing and global export of high-quality medicines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-white text-pharma-navy hover:bg-gray-100 group transition-all duration-300 transform hover:scale-105">
                <NavLink to="/about" className="flex items-center gap-2">
                  Explore More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 transition-all duration-300">
                <NavLink to="/contact">Contact Us</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center p-6 rounded-xl backdrop-blur-sm bg-white/50 border border-gray-100 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                  animate ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-pharma-navy" />
                </div>
                <p className="text-4xl font-bold text-pharma-navy mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-pharma-light relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-pharma-navy mb-6">Our Vision</h2>
          <p className="text-gray-700 mb-6">
            At Baker & Davis, we envision a world where every individual has access to high-quality, affordable medicines.
          </p>
          <p className="text-gray-700">
            We are committed to innovation, sustainability, and excellence in pharmaceutical manufacturing.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pharma-navy mb-12">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img src="/public/product1.jpg" alt="Product 1" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold text-pharma-navy mb-2">Product Name 1</h3>
              <p className="text-gray-600">Description of Product 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img src="/public/product2.jpg" alt="Product 2" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold text-pharma-navy mb-2">Product Name 2</h3>
              <p className="text-gray-600">Description of Product 2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img src="/public/product3.jpg" alt="Product 3" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold text-pharma-navy mb-2">Product Name 3</h3>
              <p className="text-gray-600">Description of Product 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials and CTA sections (unchanged) */}
    </div>
  );
};

export default Home;