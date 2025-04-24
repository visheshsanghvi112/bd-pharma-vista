
import { HeartHandshake, Award, Users, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CsrSection = () => {
  const initiatives = [
    {
      title: "Healthcare Access",
      description: "Providing affordable medications to underserved communities through our Healthcare For All initiative.",
      icon: HeartHandshake
    },
    {
      title: "Environmental Sustainability",
      description: "Reducing our carbon footprint and implementing eco-friendly manufacturing processes across all facilities.",
      icon: Award
    },
    {
      title: "Community Outreach",
      description: "Regular health camps and awareness programs in rural and urban areas focusing on preventive healthcare.",
      icon: Users
    },
    {
      title: "Education Support",
      description: "Scholarships and training programs for aspiring pharmaceutical researchers and healthcare professionals.",
      icon: School
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pharma-light/20 to-white dark:from-pharma-dark/30 dark:to-background/95 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-6 transition-colors duration-300">Community Involvement</h2>
        <p className="text-black dark:text-white text-center max-w-3xl mx-auto mb-12">
          At Baker & Davis, we believe in giving back to communities and contributing to sustainable development.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-pharma-light dark:bg-pharma-dark/40 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-pharma-navy dark:text-primary-light" />
                  </div>
                  <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-3">{initiative.title}</h3>
                  <p className="text-black dark:text-white">{initiative.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto bg-white dark:bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-4">Our Impact</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-bold text-primary dark:text-primary-light mb-2">50+</p>
                <p className="text-black dark:text-white text-sm">Communities Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary dark:text-primary-light mb-2">$2M+</p>
                <p className="text-black dark:text-white text-sm">CSR Investment</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary dark:text-primary-light mb-2">10,000+</p>
                <p className="text-black dark:text-white text-sm">Lives Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CsrSection;
