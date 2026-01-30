
import { Factory, Microscope, Shield, Truck } from "lucide-react";

const FacilitiesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pharma-navy mb-6 transition-colors duration-300">Our Facilities</h2>
        <p className="text-foreground text-center max-w-3xl mx-auto mb-12">
          Modern storage and distribution facilities ensuring safe handling of pharmaceutical products.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64">
              <img 
                src="/lovable-uploads/antibiotic-drug-selection-multi-colored-capsule-pills-blue-background-forceps-picks-capsule.jpg"
                alt="Distribution Facility" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Distribution Hub</h3>
                  <p className="text-white/90">Our centralized distribution facility ensures efficient supply chain operations.</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-card">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Factory className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Central Warehouse</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Secure Storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Fast Dispatch</span>
                </div>
                <div className="flex items-center gap-3">
                  <Microscope className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Quality Checks</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="bg-pharma-light/30 rounded-lg p-6 mb-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-pharma-navy mb-4">Cold Storage Facility</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-card p-1 mt-0.5">
                    <Factory className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">Temperature-controlled storage for sensitive medicines</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-card p-1 mt-0.5">
                    <Factory className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">24/7 monitoring systems for optimal conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-card p-1 mt-0.5">
                    <Factory className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">Cold chain logistics for domestic and export shipments</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-pharma-light/30 rounded-lg p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-pharma-navy mb-4">Storage & Handling</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-card p-1 mt-0.5">
                    <Microscope className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">Proper segregation and organized inventory management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-card p-1 mt-0.5">
                    <Microscope className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">FIFO (First In First Out) stock rotation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-card p-1 mt-0.5">
                    <Microscope className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">Batch tracking and expiry management</span>
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
