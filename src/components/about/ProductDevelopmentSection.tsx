
import { LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedElement } from "@/components/ui/animated-element";
import { getStaggeredDelay } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

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

  const processRef = useRef<HTMLDivElement>(null);
  const [progressLine, setProgressLine] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!processRef.current) return;
      
      const element = processRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // If element is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate how far we've scrolled through the element
        const percentScrolled = 1 - (rect.bottom / windowHeight);
        setProgressLine(Math.min(100, Math.max(0, percentScrolled * 150)));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-pharma-light/10 to-white/80 dark:from-pharma-dark/20 dark:to-background/95 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="slide-up" className="mb-6">
          <div className="flex items-center justify-center gap-3">
            <LineChart className="w-8 h-8 text-pharma-navy dark:text-primary-light animate-pulse-subtle" />
            <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white transition-colors duration-300">
              Product Development Process
            </h2>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={200} className="mb-12">
          <p className="text-black dark:text-white text-center max-w-3xl mx-auto">
            Our comprehensive approach ensures that every product meets the highest standards of safety, efficacy, and quality.
          </p>
        </AnimatedElement>
        
        <div className="relative" ref={processRef}>
          {/* Animated horizontal line connecting all stages */}
          <div className="absolute top-24 left-0 h-1 bg-pharma-light dark:bg-pharma-dark/40 hidden md:block"
               style={{
                 width: `${progressLine}%`,
                 transition: 'width 0.5s ease-out'
               }}></div>
          
          <div className="grid md:grid-cols-7 gap-6">
            {stages.map((stage, index) => (
              <AnimatedElement
                key={index}
                animation="zoom-in"
                delay={getStaggeredDelay(index, 200, 150)}
                className="relative"
                threshold={0.1}
              >
                <div className="flex flex-col items-center">
                  {/* Stage number circle */}
                  <div className="w-12 h-12 rounded-full bg-primary dark:bg-primary-light text-white flex items-center justify-center font-bold text-xl mb-8 relative z-10 
                                 transition-all duration-500 hover:scale-110 hover:shadow-lg animate-pulse-subtle">
                    <div className="absolute inset-0 bg-primary/60 dark:bg-primary-light/60 rounded-full transform scale-0 animate-ripple"></div>
                    {stage.number}
                  </div>
                  
                  <Card className="w-full hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:bg-white dark:hover:bg-card/90">
                    <CardContent className="p-4 text-center">
                      <h3 className="text-md font-bold text-pharma-navy dark:text-white mb-2 transition-all duration-300 group-hover:text-primary dark:group-hover:text-primary-light">
                        {stage.title}
                      </h3>
                      <p className="text-black dark:text-white text-sm">{stage.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-4 text-center">Our R&D Focus Areas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Novel Drug Delivery",
                  description: "Developing innovative delivery systems for enhanced efficacy and patient compliance."
                },
                {
                  title: "Generic Development",
                  description: "Creating affordable alternatives to brand-name medications without compromising quality."
                },
                {
                  title: "Specialty Formulations",
                  description: "Specializing in complex formulations for challenging therapeutic areas and patient populations."
                }
              ].map((focus, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-pharma-light dark:bg-pharma-dark/40 flex items-center justify-center mx-auto mb-4">
                    <LineChart className="w-8 h-8 text-pharma-navy dark:text-primary-light" />
                  </div>
                  <h4 className="text-lg font-medium text-pharma-navy dark:text-white mb-2">{focus.title}</h4>
                  <p className="text-black dark:text-white text-sm">{focus.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopmentSection;
