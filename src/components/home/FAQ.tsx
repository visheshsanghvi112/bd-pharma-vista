
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
    question: "What quality certifications do you have?",
    answer: "We maintain WHO-GMP certification and FDA approval for our manufacturing facility, ensuring the highest quality standards in pharmaceutical production.",
    icon: Award
  },
  {
    question: "What is your production capacity?",
    answer: "Our state-of-the-art facility can produce millions of units per month across various pharmaceutical forms including tablets, capsules, and liquid formulations.",
    icon: Factory
  },
  {
    question: "Do you offer custom manufacturing services?",
    answer: "Yes, we provide custom pharmaceutical manufacturing services tailored to your specific requirements while maintaining the highest quality standards.",
    icon: Landmark
  },
  {
    question: "What countries do you export to?",
    answer: "We export to over 50 countries worldwide, with a strong presence in Asia, Africa, Europe, and the Americas.",
    icon: Globe
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedElement
          animation="slide-up"
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get answers to the most common questions about our pharmaceutical manufacturing and export services
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
