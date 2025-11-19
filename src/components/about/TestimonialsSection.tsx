
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatedElement } from "@/components/ui/animated-element";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    text: "Baker & Davis has been our trusted pharmaceutical supplier for over 5 years. Their consistent quality and reliability have made them an invaluable partner in our healthcare delivery system.",
    name: "Dr. Richard Thompson",
    title: "Medical Director, Global Health Partners"
  },
  {
    text: "The level of professionalism and scientific expertise at Baker & Davis is remarkable. Their commitment to quality standards genuinely addresses our pharmaceutical distribution needs.",
    name: "Prof. Maria Garcia",
    title: "Research Lead, International Pharmaceutical Institute"
  },
  {
    text: "As a distributor in emerging markets, we value Baker & Davis's commitment to quality and competitive pricing. They understand global healthcare challenges and deliver consistently.",
    name: "Ahmed Al-Farsi",
    title: "CEO, MedSupply Distribution"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();
  
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 100);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 100);
  };

  useEffect(() => {
    // Auto-advance testimonials
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-pharma-light/10 to-white/80 dark:from-pharma-dark/20 dark:to-background/95 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center text-pharma-navy dark:text-white mb-6 md:mb-8 transition-colors duration-300">
          What Our Partners Say
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          <Card className="bg-white dark:bg-card shadow-md overflow-hidden">
            <CardContent className="p-5 md:p-8 relative">
              
              <div className="flex justify-center mb-4 relative">
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-pharma-navy/15 dark:text-primary-light/15" />
              </div>
              
              <div className="relative overflow-hidden">
                <div
                  className={cn(
                    "transition-all duration-500",
                    isAnimating ? "opacity-0" : "opacity-100"
                  )}
                >
                  <blockquote className="text-center">
                    <p className="text-sm md:text-base text-gray-700 dark:text-white mb-6 leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <footer>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-pharma-navy to-primary-light flex items-center justify-center shadow-md">
                          <span className="text-base md:text-lg font-bold text-white">
                            {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-sm md:text-base text-pharma-navy dark:text-white">
                            {testimonials[currentIndex].name}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                            {testimonials[currentIndex].title}
                          </p>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              
              <div className="flex justify-center gap-2 mt-5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (index === currentIndex || isAnimating) return;
                      
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentIndex(index);
                        setTimeout(() => {
                          setIsAnimating(false);
                        }, 300);
                      }, 100);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-pharma-navy dark:bg-primary-light w-6" 
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-pharma-navy/60 dark:hover:bg-primary-light/60"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-3 md:-ml-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              disabled={isAnimating}
              className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-white dark:bg-card border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-card/80"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-3 md:-mr-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              disabled={isAnimating}
              className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-white dark:bg-card border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-card/80"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
