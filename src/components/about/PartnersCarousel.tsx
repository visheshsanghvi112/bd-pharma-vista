
import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";

const PartnersCarousel = () => {
  const partners = [
    { name: "GlobalHealth Partners", logo: "/placeholder.svg" },
    { name: "MediTrust International", logo: "/placeholder.svg" },
    { name: "PharmaCare Solutions", logo: "/placeholder.svg" },
    { name: "HealthVision Corp", logo: "/placeholder.svg" },
    { name: "MedSupply Distribution", logo: "/placeholder.svg" },
    { name: "Wellness Network", logo: "/placeholder.svg" },
    { name: "CareTech Innovations", logo: "/placeholder.svg" },
    { name: "LifeSciences Global", logo: "/placeholder.svg" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [animationPaused, setAnimationPaused] = useState(false);

  const handleMouseEnter = () => setAnimationPaused(true);
  const handleMouseLeave = () => setAnimationPaused(false);

  return (
    <section className="py-16 bg-white dark:bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-6 transition-colors duration-300">Our Trusted Partners</h2>
        <p className="text-black dark:text-white text-center max-w-3xl mx-auto mb-12">
          Collaborating with healthcare providers and distributors worldwide to improve global health outcomes.
        </p>
        
        <div className="w-full overflow-hidden">
          <div 
            ref={containerRef} 
            className="flex gap-8 py-4" 
            style={{
              animationPlayState: animationPaused ? 'paused' : 'running',
              animation: 'scroll 30s linear infinite',
              width: `calc(${partners.length * 210}px * 2)`
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <Card 
                key={`partner-${index}`} 
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-4 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <img src={partner.logo} alt={partner.name} className="h-12 w-auto mb-2" />
                  <span className="text-sm font-medium text-pharma-navy dark:text-white">{partner.name}</span>
                </div>
              </Card>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {partners.map((partner, index) => (
              <Card 
                key={`partner-duplicate-${index}`} 
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-4 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <img src={partner.logo} alt={partner.name} className="h-12 w-auto mb-2" />
                  <span className="text-sm font-medium text-pharma-navy dark:text-white">{partner.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add the animation keyframes to the page */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${partners.length * 210}px));
          }
        }
      `}</style>
    </section>
  );
};

export default PartnersCarousel;
