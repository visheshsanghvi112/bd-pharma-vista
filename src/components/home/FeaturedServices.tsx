
import { Calendar, Star, Award, List } from "lucide-react";
import { AnimatedElement } from "@/components/ui/animated-element";
import { getStaggeredDelay } from "@/lib/utils";

const services = [
  {
    icon: Star,
    title: "Quality Products",
    description: "Pharmaceutical products that meet international quality standards"
  },
  {
    icon: Calendar,
    title: "Fast Production",
    description: "Rapid manufacturing and delivery timelines"
  },
  {
    icon: Award,
    title: "Certified",
    description: "WHO-GMP certified and FDA approved manufacturing facility"
  },
  {
    icon: List,
    title: "Wide Range",
    description: "Extensive portfolio of pharmaceutical products"
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedElement
          animation="slide-up"
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white">
            Our Services
          </h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedElement
              key={service.title}
              animation="zoom-in"
              delay={getStaggeredDelay(index, 300, 150)}
              className="h-full"
            >
              <div
                className="bg-white dark:bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col"
              >
                <div className="flex justify-center mb-4 relative">
                  <div className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary-light/10 transform scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700"></div>
                  <service.icon className="w-12 h-12 text-primary dark:text-primary-light relative z-10 animate-pulse-subtle" />
                </div>
                <h3 className="text-xl font-semibold text-center text-pharma-navy dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
