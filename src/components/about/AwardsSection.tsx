
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pharma-navy mb-6">Awards & Recognition</h2>
        <p className="text-foreground text-center max-w-3xl mx-auto mb-12">Our commitment to excellence has been recognized by industry leaders and organizations worldwide.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {awards.map((award, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-full bg-pharma-light p-2.5 sm:p-3 flex-shrink-0">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-pharma-navy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h3 className="text-base sm:text-xl font-bold text-pharma-navy line-clamp-2">{award.title}</h3>
                      <span className="text-xs sm:text-sm font-medium text-primary flex-shrink-0">{award.year}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">{award.organization}</h4>
                    <p className="text-xs sm:text-base text-foreground">{award.description}</p>
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
