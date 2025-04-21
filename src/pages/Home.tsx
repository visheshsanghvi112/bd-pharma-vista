
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Home = () => {
  // Animation for hero section stats
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Countries Served" },
    { value: "200+", label: "Medicines Produced" },
    { value: "1000+", label: "Happy Clients" }
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
      <section className="relative bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/public/placeholder.svg')] opacity-10 bg-center bg-cover bg-no-repeat mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Delivering Healthcare with
              <span className="block text-pharma-light"> Precision & Purpose</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              BD Pvt. Ltd. is a trusted name in pharmaceutical manufacturing and global export of high-quality medicines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-white text-pharma-navy hover:bg-gray-100">
                <NavLink to="/about">Explore More</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <NavLink to="/contact">Contact Us</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center ${animate ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <p className="text-4xl font-bold text-pharma-navy mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-pharma-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
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
              <Button asChild variant="default" className="bg-pharma-navy hover:bg-primary-dark">
                <NavLink to="/about">Learn More About Us</NavLink>
              </Button>
            </div>
            <div className="order-1 md:order-2 bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="/public/placeholder.svg" 
                alt="Pharmaceutical Manufacturing" 
                className="w-full h-auto rounded" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pharma-navy mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-pharma-navy">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner with a Global Leader?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the many healthcare providers and distributors worldwide who trust Baker & Davis for their pharmaceutical needs.
          </p>
          <Button asChild size="lg" className="bg-white text-pharma-navy hover:bg-gray-100">
            <NavLink to="/contact">Get in Touch Today</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
