
import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";

const PartnersCarousel = () => {
  const partners = [
    { name: "Mankind Pharma", logo: "/lovable-uploads/6b5ff5b5-d693-4978-829f-4452880514c4.png" },
    { name: "Alkem Laboratories", logo: "/lovable-uploads/1651de68-9787-4c4a-9780-2b515368ce3d.png" },
    { name: "Dr. Reddy's Laboratories", logo: "/lovable-uploads/a0f3cd1d-d1ca-4032-9c17-3f8a72e26dd2.png" },
    { name: "Vicks", logo: "/lovable-uploads/6a7d5bc3-2ab0-4e86-90f1-869e8684d6d1.png" },
    { name: "GSK", logo: "/lovable-uploads/77a84132-47eb-4743-9caf-404a4b00c77b.png" },
    { name: "Ambica Pharma", logo: "/lovable-uploads/f0a94d62-b46d-4c3c-bb32-9eefac837e73.png" },
    { name: "John Lee Pharmaceuticals", logo: "/lovable-uploads/fb30f432-a0f3-4555-b258-42191781425c.png" },
    { name: "Emcure Pharmaceuticals", logo: "/lovable-uploads/e7a23b8f-06f4-4bfd-8453-b786b7bf0775.png" },
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
          Collaborating with leading pharmaceutical companies worldwide to improve global health outcomes.
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
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-4 hover:shadow-lg transition-all duration-300 bg-white dark:bg-card"
              >
                <img src={partner.logo} alt={partner.name} className="h-16 w-auto object-contain" />
              </Card>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {partners.map((partner, index) => (
              <Card 
                key={`partner-duplicate-${index}`} 
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-4 hover:shadow-lg transition-all duration-300 bg-white dark:bg-card"
              >
                <img src={partner.logo} alt={partner.name} className="h-16 w-auto object-contain" />
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-${partners.length * 210}px));
            }
          }
        `}
      </style>
    </section>
  );
};

export default PartnersCarousel;
