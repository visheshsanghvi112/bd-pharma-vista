
import { Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What quality certifications do you have?",
      answer:
        "We maintain WHO-GMP certification and FDA approval for our manufacturing facility, ensuring the highest quality standards in pharmaceutical production.",
    },
    {
      question: "What is your production capacity?",
      answer:
        "Our state-of-the-art facility can produce millions of units per month across various pharmaceutical forms including tablets, capsules, and liquid formulations.",
    },
    {
      question: "Do you offer custom manufacturing services?",
      answer:
        "Yes, we provide custom pharmaceutical manufacturing services tailored to your specific requirements while maintaining the highest quality standards.",
    },
    {
      question: "What countries do you export to?",
      answer:
        "We export to over 50 countries worldwide, with a strong presence in Asia, Africa, Europe, and the Americas.",
    },
    {
      question: "What are your quality control measures?",
      answer:
        "We implement rigorous quality control measures at every stage of production, from raw material testing to finished product analysis, following international standards.",
    },
    {
      question: "How do you ensure product safety?",
      answer:
        "We maintain strict adherence to GMP guidelines, conduct regular quality audits, and utilize state-of-the-art testing facilities to ensure product safety.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-light to-background py-12 dark:from-primary/20 dark:to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
            <Shield className="h-8 w-8 text-primary dark:text-primary-light" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-primary dark:text-primary-light md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Find answers to common questions about our pharmaceutical manufacturing services,
            quality standards, and global operations.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border bg-card px-4 shadow-sm dark:bg-card/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
