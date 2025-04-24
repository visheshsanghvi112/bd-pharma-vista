
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "WHO-GMP",
      description: "World Health Organization Good Manufacturing Practices",
      logo: "/placeholder.svg"
    },
    {
      name: "ISO 9001:2015",
      description: "Quality Management Systems",
      logo: "/placeholder.svg"
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management Systems",
      logo: "/placeholder.svg"
    },
    {
      name: "FDA Approval",
      description: "U.S. Food and Drug Administration",
      logo: "/placeholder.svg"
    },
    {
      name: "EU-GMP",
      description: "European Union Good Manufacturing Practices",
      logo: "/placeholder.svg"
    },
    {
      name: "OHSAS 18001",
      description: "Occupational Health and Safety Assessment Series",
      logo: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Award className="w-8 h-8 text-pharma-navy dark:text-primary-light" />
          <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white transition-colors duration-300">Certifications & Standards</h2>
        </div>
        <p className="text-black dark:text-white text-center max-w-3xl mx-auto mb-12">
          Our operations and products comply with the highest international quality and safety standards.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-pharma-light dark:bg-pharma-dark/40 flex items-center justify-center">
                    <Award className="w-6 h-6 text-pharma-navy dark:text-primary-light" />
                  </div>
                  <div>
                    <h3 className="font-bold text-pharma-navy dark:text-white">{certification.name}</h3>
                    <p className="text-sm text-black dark:text-white">{certification.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-pharma-light/20 dark:bg-pharma-dark/20 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-4 text-center">Quality Policy</h3>
          <p className="text-black dark:text-white text-center max-w-3xl mx-auto">
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
