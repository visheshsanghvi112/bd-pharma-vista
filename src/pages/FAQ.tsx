import { Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Seo from "@/components/Seo";

const FAQ = () => {
  const faqs = [
    {
      question: "What quality certifications do you have?",
      answer: "We maintain WHO-GMP certification and FDA approval for our manufacturing facility, ensuring the highest quality standards in pharmaceutical production."
    },
    {
      question: "What is your production capacity?",
      answer: "Our state-of-the-art facility can produce millions of units per month across various pharmaceutical forms including tablets, capsules, and liquid formulations."
    },
    {
      question: "Do you offer custom manufacturing services?",
      answer: "Yes, we provide custom pharmaceutical manufacturing services tailored to your specific requirements while maintaining the highest quality standards."
    },
    {
      question: "What countries do you export to?",
      answer: "We export to over 50 countries worldwide, with a strong presence in Asia, Africa, Europe, and the Americas."
    }
  ];

  return (
    <>
      <Seo 
        title="FAQ"
        description="Frequently asked questions about Baker & Davis pharmaceutical manufacturing and export services. Find answers about our global pharmaceutical operations."
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 dark:from-primary/10 dark:to-primary/5" />
          <div className="container relative mx-auto px-4 text-center z-10">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
              <Shield className="h-8 w-8 text-primary dark:text-primary-light" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pharma-navy dark:text-primary-light animate-fade-in">
              Frequently Asked Questions
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 animate-fade-in">
              Find answers to common questions about our pharmaceutical services
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-gradient-to-br from-pharma-light to-white dark:from-pharma-dark/60 dark:to-background p-6 rounded-lg transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium text-pharma-navy dark:text-primary-light hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300 mt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
