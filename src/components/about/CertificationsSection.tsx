
import { Award, ShieldCheck, FileCheck, Globe, Leaf, HardHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "WHO-GMP",
      description: "World Health Organization Good Manufacturing Practices",
      icon: Globe
    },
    {
      name: "ISO 9001:2015",
      description: "Quality Management Systems",
      icon: ShieldCheck
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management Systems",
      icon: Leaf
    },
    {
      name: "FDA Approval",
      description: "U.S. Food and Drug Administration",
      icon: FileCheck
    },
    {
      name: "EU-GMP",
      description: "European Union Good Manufacturing Practices",
      icon: Award
    },
    {
      name: "OHSAS 18001",
      description: "Occupational Health and Safety Assessment Series",
      icon: HardHat
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Award className="w-8 h-8 text-pharma-navy" />
          <h2 className="text-3xl font-bold text-center text-pharma-navy">Certifications & Standards</h2>
        </div>
        <p className="text-foreground text-center max-w-3xl mx-auto mb-12">
          Our operations and products comply with the highest international quality and safety standards.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {certifications.map((certification, index) => {
            const Icon = certification.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pharma-light flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-pharma-navy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-pharma-navy text-sm sm:text-base mb-1">{certification.name}</h3>
                      <p className="text-xs sm:text-sm text-foreground line-clamp-2">{certification.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 bg-pharma-light/20 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-pharma-navy mb-4 text-center">Quality Policy</h3>
          <p className="text-foreground text-center max-w-3xl mx-auto">
            At Baker & Davis, we are committed to maintaining the highest standards of quality in all aspects of our operations. 
            Our comprehensive quality policy ensures consistent product excellence, regulatory compliance, and continuous improvement 
            to meet and exceed customer expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
