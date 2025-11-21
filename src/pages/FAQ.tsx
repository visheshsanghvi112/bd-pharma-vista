
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
      answer: "We maintain WHO-GDP (Good Distribution Practice) certification and comply with all international pharmaceutical distribution standards, ensuring the highest quality in our supply chain operations."
    },
    {
      question: "What is your distribution capacity?",
      answer: "Our global distribution network can handle large-scale pharmaceutical supply operations across multiple markets, with reliable logistics partnerships and temperature-controlled storage facilities."
    },
    {
      question: "Do you offer pharmaceutical sourcing services?",
      answer: "Yes, we provide comprehensive pharmaceutical sourcing and distribution services, connecting global healthcare providers with quality medicines from certified suppliers while maintaining full regulatory compliance."
    },
    {
      question: "What countries do you distribute to?",
      answer: "We distribute pharmaceutical products to over 50 countries worldwide, with a strong presence in Asia, Africa, Europe, and the Americas through our established distribution network."
    },
    {
      question: "How do you ensure product quality during distribution?",
      answer: "We maintain strict cold chain management, temperature monitoring, and proper storage conditions throughout the entire distribution process. All our facilities and logistics partners are WHO-GDP certified."
    },
    {
      question: "What types of pharmaceutical products do you distribute?",
      answer: "We distribute a wide range of pharmaceutical products including generic medicines, branded pharmaceuticals, medical devices, and healthcare products, all sourced from certified and approved suppliers."
    },
    {
      question: "Do you provide regulatory support for exports?",
      answer: "Yes, we provide comprehensive regulatory support including documentation, compliance verification, and assistance with import/export requirements for different international markets."
    },
    {
      question: "What is your minimum order quantity?",
      answer: "Our minimum order quantities vary depending on the product and destination market. We work with healthcare providers of all sizes, from large hospital chains to smaller clinics and pharmacies."
    }
  ];

  return (
    <>
      <Seo
        title="FAQ - Baker & Davis Pharmaceutical Distribution & Export Questions | BD India"
        description="Frequently asked questions about Baker & Davis (BD India) pharmaceutical distribution and export services. Find answers about Baker Davis global pharmaceutical distribution operations, WHO-GDP certification, and Davis Baker international medicine trading services."
        keywords={[
          "Baker Davis pharmaceutical FAQ",
          "Davis Baker medicine export questions",
          "BD India pharmaceutical supply chain FAQ",
          "Baker and Davis WHO-GDP certification questions",
          "pharmaceutical logistics FAQ Baker Davis",
          "global pharmaceutical distribution questions BD India",
          "medicine distributor questions Baker India",
          "pharmaceutical export services FAQ Baker Davis",
          "international medicine trading FAQ Davis Baker",
          "pharmaceutical import export questions BD India",
          "medicine supply chain questions Baker and Davis",
          "pharmaceutical wholesaler FAQ Baker Davis",
          "distribution network questions Baker India",
          "pharmaceutical trading FAQ Davis and Baker",
          "Baker Davis distributor questions",
          "BD India export services FAQ",
          "pharmaceutical distribution FAQ Mumbai",
          "medicine trading questions Baker Davis",
          "global pharmaceutical FAQ Baker and Davis",
          "pharmaceutical supply chain FAQ BD India"
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
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
              Find answers to common questions about our pharmaceutical distribution services
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
