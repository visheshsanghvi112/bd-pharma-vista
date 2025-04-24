
import { Award, Briefcase, Star } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-pharma-light/20 to-white dark:from-background dark:to-background/95 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-6">Founder & Chairman</h2>
            <h3 className="text-2xl text-primary-dark dark:text-primary-light mb-4">Mr. Dilip Jain</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                One such phenomenon is Mr. Dilip Jain (Founder & Chairman, Ambica Pharma), who has maneuvered the foundation and evolution of his firm Ambica Pharma as one of the exceptionally managed and exponentially growing pharmaceutical distribution companies having more than 18 years of distributing and marketing experience.
              </p>
              <p>
                During his more than 22 years of experience in the Pharma industry as an industry leader, Mr. Dilip Jain garnered a wide range of expertise in sales, marketing, and creating distribution networks on a Pan India basis.
              </p>
              <p>
                Implementing his acquired professional skills to lay a strategic grid that ultimately catapulted the evolution of Johnlee Pharmaceuticals as a leading brand of pharmaceutical and life sciences domain, Mr. Dilip Jain has led the firm to focus on high growth potential segments like generic medicines.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/lovable-uploads/87979321-9460-40c4-ac9d-f1676911aaf6.png"
              alt="Mr. Dilip Jain"
              className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
