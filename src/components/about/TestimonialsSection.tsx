
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-pharma-light/10 to-white/80 dark:from-pharma-dark/20 dark:to-background/95 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-12 transition-colors duration-300">What Our Partners Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white dark:bg-card shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="bg-pharma-light dark:bg-pharma-dark/30 p-4 rounded-full">
                  <Quote className="w-8 h-8 text-pharma-navy dark:text-primary-light" />
                </div>
              </div>
              
              <blockquote className="text-center mb-6">
                <p className="text-xl italic text-black dark:text-white mb-6">{testimonials[currentIndex].text}</p>
                <footer>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
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
              
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? "bg-pharma-navy dark:bg-primary-light scale-125" 
                        : "bg-gray-300 dark:bg-gray-600"
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
              className="rounded-full bg-white dark:bg-card border-gray-200 dark:border-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-card/80"
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
              className="rounded-full bg-white dark:bg-card border-gray-200 dark:border-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-card/80"
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
