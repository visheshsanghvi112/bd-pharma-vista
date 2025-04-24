
import { Factory, Microscope, Shield, Truck } from "lucide-react";

const FacilitiesSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-6 transition-colors duration-300">Our Facilities</h2>
        <p className="text-black dark:text-white text-center max-w-3xl mx-auto mb-12">
          State-of-the-art manufacturing and research facilities that adhere to the highest international standards.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64">
              <img 
                src="/lovable-uploads/antibiotic-drug-selection-multi-colored-capsule-pills-blue-background-forceps-picks-capsule.jpg"
                alt="Manufacturing Facility" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Manufacturing Excellence</h3>
                  <p className="text-white/90">Our ISO-certified manufacturing facilities ensure consistent quality and compliance.</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white dark:bg-card">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Factory className="w-5 h-5 text-primary dark:text-primary-light" />
                  <span className="text-black dark:text-white">3 Global Facilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary dark:text-primary-light" />
                  <span className="text-black dark:text-white">GMP Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-primary dark:text-primary-light" />
                  <span className="text-black dark:text-white">Global Distribution</span>
                </div>
                <div className="flex items-center gap-3">
                  <Microscope className="w-5 h-5 text-primary dark:text-primary-light" />
                  <span className="text-black dark:text-white">Quality Testing</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="bg-pharma-light/30 dark:bg-pharma-dark/20 rounded-lg p-6 mb-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-4">Manufacturing Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-white dark:bg-card p-1 mt-0.5">
                    <Factory className="w-4 h-4 text-primary dark:text-primary-light" />
                  </div>
                  <span className="text-black dark:text-white">Annual production capacity of over 5 billion tablets and capsules</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-white dark:bg-card p-1 mt-0.5">
                    <Factory className="w-4 h-4 text-primary dark:text-primary-light" />
                  </div>
                  <span className="text-black dark:text-white">Multiple formulation types including tablets, capsules, and injectables</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-white dark:bg-card p-1 mt-0.5">
                    <Factory className="w-4 h-4 text-primary dark:text-primary-light" />
                  </div>
                  <span className="text-black dark:text-white">Specialized facilities for controlled substances and sterile products</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-pharma-light/30 dark:bg-pharma-dark/20 rounded-lg p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-4">Quality Control</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-white dark:bg-card p-1 mt-0.5">
                    <Microscope className="w-4 h-4 text-primary dark:text-primary-light" />
                  </div>
                  <span className="text-black dark:text-white">Rigorous testing at every stage from raw materials to finished products</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-white dark:bg-card p-1 mt-0.5">
                    <Microscope className="w-4 h-4 text-primary dark:text-primary-light" />
                  </div>
                  <span className="text-black dark:text-white">Advanced analytical equipment for precision and accuracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-white dark:bg-card p-1 mt-0.5">
                    <Microscope className="w-4 h-4 text-primary dark:text-primary-light" />
                  </div>
                  <span className="text-black dark:text-white">Comprehensive stability testing and product validation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
