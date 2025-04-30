
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Pill, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "CardioGuard Plus",
    category: "Cardiovascular",
    description: "Advanced cardioprotective formulation with enhanced bioavailability",
    image: "/lovable-uploads/colorful-medication-tablets-capsules-displayed-light-blue-background-emphasizing-health-healthcare-themes.jpg",
    rating: 4.9,
    bestseller: true
  },
  {
    id: 2,
    name: "ImmunoShield",
    category: "Immunology",
    description: "Comprehensive immune support with patented delivery system",
    image: "/lovable-uploads/antibiotic-drug-selection-multi-colored-capsule-pills-blue-background-forceps-picks-capsule.jpg",
    rating: 4.8,
    bestseller: false
  },
  {
    id: 3,
    name: "NeuroBalance",
    category: "Neurology",
    description: "Next-generation neurological treatment with minimized side effects",
    image: "/lovable-uploads/colorful-medication-tablets-capsules-displayed-light-blue-background-emphasizing-health-healthcare-themes.jpg",
    rating: 4.7,
    bestseller: false
  },
  {
    id: 4,
    name: "EndoCare Complex",
    category: "Endocrinology",
    description: "Precision-engineered formula for endocrine system regulation",
    image: "/lovable-uploads/antibiotic-drug-selection-multi-colored-capsule-pills-blue-background-forceps-picks-capsule.jpg",
    rating: 4.9,
    bestseller: true
  }
];

const ProductHighlights = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("product-highlights");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="product-highlights" 
      className="py-24 bg-pharma-light dark:bg-pharma-dark/40 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0xNGg0djFoLTR2LTF6bTAtN2g0djFoLTR2LTF6TTI2IDM0aDR2MWgtNHYtMXptMC03aDR2MWgtNHYtMXptMC03aDR2MWgtNHYtMXpNMTYgMzRoNHYxaC00di0xem0wLTE0aDR2MWgtNHYtMXptMC03aDR2MWgtNHYtMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 dark:opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/50 dark:to-black/30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-2">
            <Pill className="w-5 h-5 text-primary dark:text-primary-light mr-2" />
            <p className="text-primary dark:text-primary-light font-medium">FEATURED PRODUCTS</p>
          </div>
          <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-4">Pharmaceutical Excellence</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-200">
            Discover our innovative pharmaceutical solutions developed through rigorous research, 
            advanced manufacturing processes, and unwavering commitment to quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="overflow-hidden h-full bg-white dark:bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-800 group">
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {product.bestseller && (
                    <div className="absolute top-4 right-4 bg-primary dark:bg-primary-light text-white dark:text-pharma-navy text-xs font-semibold py-1 px-2 rounded-full">
                      BESTSELLER
                    </div>
                  )}
                  <div className="absolute -bottom-4 left-4">
                    <div className="bg-white dark:bg-pharma-navy shadow-lg rounded-full h-8 px-3 flex items-center border border-gray-100 dark:border-gray-800">
                      <p className="text-xs text-pharma-navy dark:text-white font-medium">{product.category}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-pharma-navy dark:text-white">{product.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-xs ml-1 text-gray-600 dark:text-gray-300">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="flex items-center text-primary dark:text-primary-light text-sm font-medium group cursor-pointer">
                    <span className="group-hover:underline">View Product Details</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button asChild className="bg-pharma-navy text-white hover:bg-primary dark:bg-primary dark:hover:bg-primary-light group transition-all duration-300">
            <NavLink to="/products" className="flex items-center gap-2">
              View All Products
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
