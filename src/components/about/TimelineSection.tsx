
import { Card, CardContent } from "@/components/ui/card";

const TimelineSection = () => {
  const milestones = [
    {
      year: "2000",
      title: "Foundation",
      description: "Baker & Davis was founded with a mission to provide quality pharmaceutical products globally."
    },
    {
      year: "2005",
      title: "First International Export",
      description: "Expanded operations to international markets, beginning with neighboring countries."
    },
    {
      year: "2010",
      title: "R&D Center",
      description: "Established state-of-the-art Research & Development center for pharmaceutical innovation."
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Reached milestone of exporting products to over 25 countries across 5 continents."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented digital solutions across operations for enhanced efficiency and quality control."
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description: "Launched comprehensive sustainability program to minimize environmental impact."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pharma-light/10 to-white dark:from-background dark:to-background/95 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-12 transition-colors duration-300">Our Journey</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pharma-light dark:bg-pharma-dark/40"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative z-10">
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row md:flex-row-reverse' : 'flex-row'}`}>
                  {/* Timeline point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary dark:bg-primary-light border-4 border-white dark:border-background"></div>
                  
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'md:pr-16 pr-8 text-right' : 'md:pl-16 pl-8'}`}>
                    <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-visible">
                      <CardContent className="p-6">
                        <div className="absolute top-6 bg-primary dark:bg-primary-light text-white px-3 py-1 rounded-full font-bold transform translate-y-[-50%] shadow-md
                          ${index % 2 === 0 ? 'left-0 translate-x-[-50%]' : 'right-0 translate-x-[50%]'}"
                        >
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-2 mt-2">{milestone.title}</h3>
                        <p className="text-black dark:text-white">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
