
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Award, 
  Factory, 
  Landmark, 
  Globe, 
  ChevronDown,
} from "lucide-react";
import { AnimatedElement } from "@/components/ui/animated-element";
import { getStaggeredDelay } from "@/lib/utils";

const faqs = [
  {
    question: "What services do you provide?",
    answer: "We are a pharmaceutical trading and distribution company. We source quality medicines from certified manufacturers and distribute them to healthcare providers across India and 10+ countries internationally.",
    icon: Award
  },
  {
    question: "What is your distribution capacity?",
    answer: "Our robust distribution network enables us to handle large volumes of pharmaceutical products, ensuring timely delivery to distributors and healthcare providers across India and abroad.",
    icon: Factory
  },
  {
    question: "Do you offer export services?",
    answer: "Yes, we provide pharmaceutical export services to 10+ countries. We handle all regulatory documentation and ensure compliance with international trade requirements.",
    icon: Landmark
  },
  {
    question: "Which regions do you serve?",
    answer: "We distribute across all states of India and export to 10+ countries including the Middle East, Africa, and neighboring Asian countries.",
    icon: Globe
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background overflow-hidden relative">
      {/* Dots texture */}
      <div className="absolute inset-0 texture-dots pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement
          animation="slide-up"
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get answers to the most common questions about our pharmaceutical distribution and export services
          </p>
        </AnimatedElement>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AnimatedElement
                key={index} 
                animation="fade-in"
                delay={getStaggeredDelay(index, 100, 150)}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-gray-100 dark:border-gray-800 rounded-lg mb-4 overflow-hidden bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-pharma-navy dark:text-white hover:no-underline px-6 py-4 flex items-center">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="bg-primary/10 dark:bg-primary-light/10 p-2 rounded-full">
                        <faq.icon className="h-5 w-5 text-primary dark:text-primary-light" />
                      </div>
                      <span className="font-medium">{faq.question}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 shrink-0 text-primary dark:text-primary-light transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 px-6 pb-4 pt-0">
                    <div className="pl-10">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              </AnimatedElement>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
