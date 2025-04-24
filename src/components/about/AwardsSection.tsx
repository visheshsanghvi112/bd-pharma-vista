
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AwardsSection = () => {
  const awards = [
    {
      year: "2023",
      title: "Innovation Excellence Award",
      organization: "Global Pharma Association",
      description: "For breakthrough development in sustainable pharmaceutical packaging"
    },
    {
      year: "2022",
      title: "Best Quality Control",
      organization: "International Quality Congress",
      description: "Recognition of our industry-leading quality management systems"
    },
    {
      year: "2021",
      title: "Exporter of the Year",
      organization: "National Export Council",
      description: "Recognized for outstanding contribution to pharmaceutical exports"
    },
    {
      year: "2019",
      title: "Corporate Sustainability Champion",
      organization: "Sustainable Business Alliance",
      description: "For exceptional commitment to environmental sustainability"
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-6 transition-colors duration-300">Awards & Recognition</h2>
        <p className="text-black dark:text-white text-center max-w-3xl mx-auto mb-12">Our commitment to excellence has been recognized by industry leaders and organizations worldwide.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-pharma-light dark:bg-pharma-dark/30 p-3">
                    <Trophy className="w-6 h-6 text-pharma-navy dark:text-primary-light" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-1">{award.title}</h3>
                      <span className="text-sm font-medium text-primary dark:text-primary-light">{award.year}</span>
                    </div>
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">{award.organization}</h4>
                    <p className="text-black dark:text-white">{award.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
