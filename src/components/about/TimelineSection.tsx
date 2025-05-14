
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedElement } from "@/components/ui/animated-element";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { getStaggeredDelay } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const TimelineSection = () => {
  const milestones = [
    {
      year: "2000",
      title: "Foundation",
      description: "Baker & Davis was founded with a mission to provide quality pharmaceutical products globally."
    },
    {
      year: "2005",
      title: "First International Export",
      description: "Expanded operations to international markets, beginning with neighboring countries."
    },
    {
      year: "2010",
      title: "R&D Center",
      description: "Established state-of-the-art Research & Development center for pharmaceutical innovation."
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Reached milestone of exporting products to over 25 countries across 5 continents."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented digital solutions across operations for enhanced efficiency and quality control."
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description: "Launched comprehensive sustainability program to minimize environmental impact."
    }
  ];

  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const element = timelineRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is in view
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const elementHeight = element.offsetHeight;
      
      // Calculate progress as percentage
      const percentVisible = Math.max(0, Math.min(1, visibleHeight / elementHeight));
      setProgress(percentVisible);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-pharma-light/10 to-white dark:from-background dark:to-background/95 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="slide-up" className="mb-12">
          <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white transition-colors duration-300">
            Our Journey
          </h2>
        </AnimatedElement>
        
        <div className="relative" ref={timelineRef}>
          {/* Animated vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-pharma-light dark:bg-pharma-dark/40"
               style={{ 
                 height: `${Math.max(5, progress * 100)}%`, 
                 transition: 'height 0.5s ease-out'
               }}>
          </div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <AnimatedElement 
                key={index} 
                animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"}
                delay={getStaggeredDelay(index, 200, 200)}
                threshold={0.2}
                className="relative z-10"
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row md:flex-row-reverse' : 'flex-row'}`}>
                  {/* Animated timeline point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary dark:bg-primary-light border-4 border-white dark:border-background animate-pulse-subtle"></div>
                  
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'md:pr-16 pr-8 text-right' : 'md:pl-16 pl-8'}`}>
                    <Card className="transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg overflow-visible group">
                      <CardContent className="p-6">
                        <div className="absolute top-6 bg-primary dark:bg-primary-light text-white px-3 py-1 rounded-full font-bold transform translate-y-[-50%] shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105
                          ${index % 2 === 0 ? 'left-0 translate-x-[-50%]' : 'right-0 translate-x-[50%]'}"
                        >
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-2 mt-2 transition-all duration-300 group-hover:text-primary dark:group-hover:text-primary-light">{milestone.title}</h3>
                        <p className="text-black dark:text-white">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="w-1/2"></div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
