
import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { AnimatedElement } from "@/components/ui/animated-element";

const PartnersCarousel = () => {
  const partners = [
    { name: "Pfizer", logo: "/lovable-uploads/fb040a1a-3ffc-4bc6-b7c7-6cfd04eca7c2.png" },
    { name: "Piramal Pharma Limited", logo: "/lovable-uploads/b952759f-3988-4bb0-ab9e-76e5a60a8f9c.png" },
    { name: "Glenmark", logo: "/lovable-uploads/d568a489-d0ce-4355-9b75-72542d6afa55.png" },
    { name: "Abbott", logo: "/lovable-uploads/a78691c8-6f55-4192-a586-591d28682eca.png" },
    { name: "Sun Pharma", logo: "/lovable-uploads/748cc5a2-e7bb-4f16-9961-f4a58d61c1a6.png" },
    { name: "Ambica Pharma", logo: "/lovable-uploads/46875218-4919-40b1-bdff-4750ae360de1.png" },
    // Removing the Yugrow Pharmacy logo as requested
    { name: "John Lee", logo: "/lovable-uploads/6ddf886b-009f-47d3-87e0-45ca9ab29411.png" },
    { name: "Alkem", logo: "/lovable-uploads/b27364a3-3479-4883-b023-f10512275029.png" },
    { name: "Dr. Reddy's", logo: "/lovable-uploads/353dc2c8-7dbc-41b5-abad-377ed818c2a8.png" },
    { name: "Vicks", logo: "/lovable-uploads/82463fa5-1a4e-4182-ba53-165cebd7a405.png" },
    { name: "GSK", logo: "/lovable-uploads/f8148f46-e272-4ec6-9ae0-f594e485d2fb.png" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [animationPaused, setAnimationPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setAnimationPaused(true);
    setActiveIndex(index);
  };
  
  const handleMouseLeave = () => {
    setAnimationPaused(false);
    setActiveIndex(null);
  };

  return (
    <section className="py-16 bg-white transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="slide-up" className="mb-6">
          <h2 className="text-3xl font-bold text-center text-pharma-navy mb-6 transition-colors duration-300">Our Trusted Partners</h2>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={200}>
          <p className="text-black text-center max-w-3xl mx-auto mb-12">
            Collaborating with leading pharmaceutical companies worldwide to improve global health outcomes.
          </p>
        </AnimatedElement>
        
        <div className="w-full overflow-hidden relative">
          {/* Gradient fades for edges */}
          <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          
          <div 
            ref={containerRef} 
            className="flex gap-8 py-4" 
            style={{
              animationPlayState: animationPaused ? 'paused' : 'running',
              animation: 'scroll 25s linear infinite',
              width: `calc(${partners.length * 210}px * 2)`
            }}
            onMouseLeave={handleMouseLeave}
          >
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <Card 
                key={`partner-${index}`} 
                className={`flex-shrink-0 w-48 h-32 flex items-center justify-center p-4 transition-all duration-300 bg-white 
                  ${activeIndex === index ? 'shadow-xl scale-110 z-20' : 'hover:shadow-lg hover:scale-105'}`}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-16 w-auto object-contain transition-transform duration-500 hover:scale-110" 
                />
              </Card>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {partners.map((partner, index) => (
              <Card 
                key={`partner-duplicate-${index}`} 
                className={`flex-shrink-0 w-48 h-32 flex items-center justify-center p-4 transition-all duration-300 bg-white 
                  ${activeIndex === index + partners.length ? 'shadow-xl scale-110 z-20' : 'hover:shadow-lg hover:scale-105'}`}
                onMouseEnter={() => handleMouseEnter(index + partners.length)}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-16 w-auto object-contain transition-transform duration-500 hover:scale-110" 
                />
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
