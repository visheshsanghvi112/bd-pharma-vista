
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const FAQ = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-pharma-navy dark:text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
