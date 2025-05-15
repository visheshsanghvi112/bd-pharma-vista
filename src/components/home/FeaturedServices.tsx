
import { Calendar, Star, Award, List, ArrowRight } from "lucide-react";
import { AnimatedElement } from "@/components/ui/animated-element";
import { getStaggeredDelay } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const services = [
  {
    icon: Star,
    title: "Quality Products",
    description: "Pharmaceutical products that meet international quality standards",
    color: "bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-700/30",
    iconColor: "text-amber-500 dark:text-amber-400",
  },
  {
    icon: Calendar,
    title: "Fast Production",
    description: "Rapid manufacturing and delivery timelines",
    color: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-700/30",
    iconColor: "text-blue-500 dark:text-blue-400",
  },
  {
    icon: Award,
    title: "Certified",
    description: "WHO-GMP certified and FDA approved manufacturing facility",
    color: "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-700/30",
    iconColor: "text-green-500 dark:text-green-400",
  },
  {
    icon: List,
    title: "Wide Range",
    description: "Extensive portfolio of pharmaceutical products",
    color: "bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-700/30",
    iconColor: "text-purple-500 dark:text-purple-400",
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-pharma-light/20 dark:from-background dark:to-pharma-dark/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedElement
          animation="slide-up"
          className="mb-12 text-center"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-full mb-3">Our Expertise</span>
          <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-4">
            Comprehensive Pharmaceutical Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a wide range of pharmaceutical manufacturing and export services to meet your specific needs
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <AnimatedElement
              key={service.title}
              animation="zoom-in"
              delay={getStaggeredDelay(index, 300, 150)}
              className="h-full"
            >
              <div
                className={`${service.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col group relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white dark:bg-primary-light/5 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary-light/10 transform scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700"></div>
                  <service.icon className={`w-14 h-14 ${service.iconColor} relative z-10 drop-shadow-md`} />
                </div>
                <h3 className="text-xl font-bold text-center text-pharma-navy dark:text-white mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-6 flex-grow relative z-10">
                  {service.description}
                </p>
                <div className="flex justify-center">
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="group/btn hover:bg-white/50 dark:hover:bg-white/10 text-primary dark:text-primary-light"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="fade-in" delay={800} className="text-center">
          <Button asChild variant="outline" className="border-primary/30 dark:border-primary-light/30 hover:bg-primary/5 dark:hover:bg-primary-light/5">
            <NavLink to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-1" />
            </NavLink>
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default FeaturedServices;
