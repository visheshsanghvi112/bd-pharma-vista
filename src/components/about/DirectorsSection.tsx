
import { Award, Briefcase, Star } from "lucide-react";

const DirectorsSection = () => {
  const directors = [
    {
      name: "Mr. Vikram Jain",
      title: "Director",
      description: "With extensive experience in pharmaceutical distribution and global trade, Mr. Vikram Jain leads our strategic expansion into international markets. His expertise in regulatory compliance and supply chain management has been instrumental in establishing Baker & Davis as a trusted pharmaceutical distributor across multiple continents.",
      image: "/lovable-uploads/87979321-9460-40c4-ac9d-f1676911aaf6.png"
    },
    {
      name: "Mr. Piyush Jain",
      title: "Director", 
      description: "Mr. Piyush Jain brings deep knowledge of pharmaceutical logistics and quality assurance to our operations. His leadership in developing robust distribution networks and ensuring compliance with international pharmaceutical trade regulations has positioned Baker & Davis as a reliable partner for global pharmaceutical supply.",
      image: "/lovable-uploads/87979321-9460-40c4-ac9d-f1676911aaf6.png"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pharma-light/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pharma-navy mb-6">Our Leadership</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Led by experienced directors with deep expertise in pharmaceutical distribution and global trade, 
            Baker & Davis continues to excel in providing reliable pharmaceutical supply chain solutions worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {directors.map((director, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-6 bg-pharma-light/30">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-pharma-navy mb-2">{director.name}</h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{director.title}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {director.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-pharma-light/30 rounded-lg">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-bold text-pharma-navy mb-2">Quality Excellence</h4>
            <p className="text-muted-foreground">Commitment to maintaining the highest standards in pharmaceutical distribution</p>
          </div>
          <div className="text-center p-6 bg-pharma-light/30 rounded-lg">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-bold text-pharma-navy mb-2">Global Reach</h4>
            <p className="text-muted-foreground">Extensive network spanning over 50 countries worldwide</p>
          </div>
          <div className="text-center p-6 bg-pharma-light/30 rounded-lg">
            <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-bold text-pharma-navy mb-2">Regulatory Compliance</h4>
            <p className="text-muted-foreground">Full adherence to international pharmaceutical trade regulations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
