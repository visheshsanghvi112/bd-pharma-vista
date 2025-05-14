
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatedElement } from "@/components/ui/animated-element";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    text: "Baker & Davis has been our trusted supplier for over 5 years. Their consistent quality and reliability have made them an invaluable partner in our healthcare delivery system.",
    name: "Dr. Richard Thompson",
    title: "Medical Director, Global Health Partners",
    image: "/placeholder.svg"
  },
  {
    text: "The level of innovation and scientific expertise at Baker & Davis is remarkable. Their R&D team has developed solutions that genuinely address unmet medical needs.",
    name: "Prof. Maria Garcia",
    title: "Research Lead, International Pharmaceutical Institute",
    image: "/placeholder.svg"
  },
  {
    text: "As a distributor in emerging markets, we value Baker & Davis's commitment to quality and competitive pricing. They understand global healthcare challenges.",
    name: "Ahmed Al-Farsi",
    title: "CEO, MedSupply Distribution",
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 300);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    // Auto-advance testimonials
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-16 bg-gradient-to-br from-pharma-light/10 to-white/80 dark:from-pharma-dark/20 dark:to-background/95 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="slide-up">
          <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-12 transition-colors duration-300">
            What Our Partners Say
          </h2>
        </AnimatedElement>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white dark:bg-card shadow-lg overflow-hidden">
            <CardContent className="p-8 md:p-12 relative">
              <div className={cn(
                "absolute inset-0 bg-gradient-to-r from-transparent via-pharma-light/10 to-transparent",
                "animate-shimmer pointer-events-none opacity-70"
              )}></div>
              
              <div className="flex justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-primary/5 dark:bg-primary-light/5 animate-pulse"></div>
                <div className="relative z-10 bg-pharma-light dark:bg-pharma-dark/30 p-4 rounded-full transform transition-transform duration-700 hover:rotate-12">
                  <Quote className="w-8 h-8 text-pharma-navy dark:text-primary-light animate-pulse-subtle" />
                </div>
              </div>
              
              <div className="relative overflow-hidden">
                <div
                  className={cn(
                    "transition-all duration-500 transform",
                    isAnimating && direction === 'left' ? "-translate-x-full opacity-0" : "",
                    isAnimating && direction === 'right' ? "translate-x-full opacity-0" : "",
                    !isAnimating && "translate-x-0 opacity-100"
                  )}
                >
                  <blockquote className="text-center mb-6">
                    <p className="text-xl italic text-black dark:text-white mb-6">{testimonials[currentIndex].text}</p>
                    <footer>
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-pharma-light/30 dark:bg-pharma-dark/40">
                          <img 
                            src={testimonials[currentIndex].image} 
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-pharma-navy dark:text-white">{testimonials[currentIndex].name}</p>
                          <p className="text-gray-600 dark:text-gray-300">{testimonials[currentIndex].title}</p>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (index > currentIndex) {
                        setDirection('right');
                      } else if (index < currentIndex) {
                        setDirection('left');
                      } else {
                        return;
                      }
                      
                      setIsAnimating(true);
                      setTimeout(() => setCurrentIndex(index), 300);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-pharma-navy dark:bg-primary-light scale-125" 
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-pharma-navy/60 dark:hover:bg-primary-light/60"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full bg-white dark:bg-card border-gray-200 dark:border-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-card/80 transform transition-transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full bg-white dark:bg-card border-gray-200 dark:border-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-card/80 transform transition-transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
