
import { Calendar, Star, Award, List } from "lucide-react";

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
    <section className="py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white dark:bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <service.icon className="w-12 h-12 text-primary dark:text-primary-light" />
              </div>
              <h3 className="text-xl font-semibold text-center text-pharma-navy dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
