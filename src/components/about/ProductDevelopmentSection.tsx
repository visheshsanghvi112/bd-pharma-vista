
import { LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProductDevelopmentSection = () => {
  const stages = [
    {
      number: 1,
      title: "Research & Innovation",
      description: "Our scientists explore novel compounds and formulations with therapeutic potential."
    },
    {
      number: 2,
      title: "Formulation Development",
      description: "Developing stable, effective formulations with optimal bioavailability."
    },
    {
      number: 3,
      title: "Pre-Clinical Testing",
      description: "Rigorous safety and efficacy testing prior to human trials."
    },
    {
      number: 4,
      title: "Clinical Trials",
      description: "Multi-phase testing to establish safety, efficacy, and optimal dosage."
    },
    {
      number: 5,
      title: "Regulatory Approval",
      description: "Submission of comprehensive data to regulatory authorities for review and approval."
    },
    {
      number: 6,
      title: "Manufacturing Scale-Up",
      description: "Transitioning from lab-scale to commercial production while maintaining quality."
    },
    {
      number: 7,
      title: "Market Launch",
      description: "Product introduction with ongoing monitoring and post-market surveillance."
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pharma-light/10 to-white/80 dark:from-pharma-dark/20 dark:to-background/95 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <LineChart className="w-8 h-8 text-pharma-navy dark:text-primary-light" />
          <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white transition-colors duration-300">Product Development Process</h2>
        </div>
        <p className="text-black dark:text-white text-center max-w-3xl mx-auto mb-12">
          Our comprehensive approach ensures that every product meets the highest standards of safety, efficacy, and quality.
        </p>
        
        <div className="relative">
          {/* Horizontal line connecting all stages */}
          <div className="absolute top-24 left-0 w-full h-1 bg-pharma-light dark:bg-pharma-dark/40 hidden md:block"></div>
          
          <div className="grid md:grid-cols-7 gap-6">
            {stages.map((stage, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  {/* Stage number circle */}
                  <div className="w-12 h-12 rounded-full bg-primary dark:bg-primary-light text-white flex items-center justify-center font-bold text-xl mb-8 relative z-10">
                    {stage.number}
                  </div>
                  
                  <Card className="w-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-4 text-center">
                      <h3 className="text-md font-bold text-pharma-navy dark:text-white mb-2">{stage.title}</h3>
                      <p className="text-black dark:text-white text-sm">{stage.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-white dark:bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-4 text-center">Our R&D Focus Areas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pharma-light dark:bg-pharma-dark/40 flex items-center justify-center mx-auto mb-4">
                <LineChart className="w-8 h-8 text-pharma-navy dark:text-primary-light" />
              </div>
              <h4 className="text-lg font-medium text-pharma-navy dark:text-white mb-2">Novel Drug Delivery</h4>
              <p className="text-black dark:text-white text-sm">Developing innovative delivery systems for enhanced efficacy and patient compliance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pharma-light dark:bg-pharma-dark/40 flex items-center justify-center mx-auto mb-4">
                <LineChart className="w-8 h-8 text-pharma-navy dark:text-primary-light" />
              </div>
              <h4 className="text-lg font-medium text-pharma-navy dark:text-white mb-2">Generic Development</h4>
              <p className="text-black dark:text-white text-sm">Creating affordable alternatives to brand-name medications without compromising quality.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pharma-light dark:bg-pharma-dark/40 flex items-center justify-center mx-auto mb-4">
                <LineChart className="w-8 h-8 text-pharma-navy dark:text-primary-light" />
              </div>
              <h4 className="text-lg font-medium text-pharma-navy dark:text-white mb-2">Specialty Formulations</h4>
              <p className="text-black dark:text-white text-sm">Specializing in complex formulations for challenging therapeutic areas and patient populations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopmentSection;
