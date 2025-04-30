
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Award, CheckCircle } from "lucide-react";

const partners = [
  {
    name: "MediTrust Global",
    logo: "/lovable-uploads/b363471a-fde0-4fe3-822e-95eb8934a7f6.png",
    type: "Hospital Network"
  },
  {
    name: "PharmaCare Intl.",
    logo: "/lovable-uploads/6a7d5bc3-2ab0-4e86-90f1-869e8684d6d1.png",
    type: "Healthcare Provider"
  },
  {
    name: "MedixCorp",
    logo: "/lovable-uploads/1651de68-9787-4c4a-9780-2b515368ce3d.png",
    type: "Healthcare Distributor"
  },
  {
    name: "Global Health Systems",
    logo: "/lovable-uploads/fb040a1a-3ffc-4bc6-b7c7-6cfd04eca7c2.png",
    type: "Medical Institution"
  },
  {
    name: "Pharmatech Solutions",
    logo: "/lovable-uploads/193f0ec9-fa4c-454b-8378-097babca8c55.png",
    type: "Research Partner"
  },
  {
    name: "MedServe Alliance",
    logo: "/lovable-uploads/e7a23b8f-06f4-4bfd-8453-b786b7bf0775.png",
    type: "Medical Supplier"
  }
];

const PartnersSection = () => {
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

    const element = document.getElementById("partners-section");
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
      id="partners-section"
      className="py-16 bg-gradient-to-b from-white to-pharma-light/10 dark:from-background dark:to-pharma-dark/10 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-2">
            <Building2 className="w-5 h-5 text-primary dark:text-primary-light mr-2" />
            <p className="text-primary dark:text-primary-light font-medium">TRUSTED GLOBALLY</p>
          </div>
          <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-4">Our Partners & Clients</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Collaborating with leading healthcare providers, research institutions, and pharmaceutical distributors worldwide 
            to deliver innovative healthcare solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="bg-white dark:bg-card p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16 max-w-full object-contain transition-transform group-hover:scale-110 duration-300" 
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-pharma-navy dark:text-white text-sm">{partner.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{partner.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-gradient-card-light dark:bg-gradient-card-dark rounded-xl p-6 flex items-center border border-gray-100 dark:border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="mr-4 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-primary dark:text-primary-light" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pharma-navy dark:text-white">Verified Partners</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">All partnerships undergo rigorous quality assessment</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-card-light dark:bg-gradient-card-dark rounded-xl p-6 flex items-center border border-gray-100 dark:border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="mr-4 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-primary dark:text-primary-light" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pharma-navy dark:text-white">Global Network</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Strategic partners in over 50 countries worldwide</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-card-light dark:bg-gradient-card-dark rounded-xl p-6 flex items-center border border-gray-100 dark:border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="mr-4 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-primary dark:text-primary-light" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pharma-navy dark:text-white">Industry Recognition</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Award-winning pharmaceutical partnerships</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
