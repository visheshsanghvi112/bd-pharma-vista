
import { Award, Briefcase, Star, Shield, Globe, Building2 } from "lucide-react";

const DirectorsSection = () => {
  const directors = [
    {
      name: "Mr. Vikram Jain",
      title: "Director",
      initials: "VJ",
      shortDesc: "Leading business operations and strategic growth initiatives.",
      fullDesc: "Mr. Vikram Jain leads the overall business operations and strategic growth of Baker & Davis, focusing on expanding our distribution network and building strong partnerships with healthcare providers."
    },
    {
      name: "Mr. Piyush Jain",
      title: "Director", 
      initials: "PJ",
      shortDesc: "Managing logistics, operations and supply chain activities.",
      fullDesc: "Mr. Piyush Jain oversees the logistics, supply chain operations and day-to-day activities at Baker & Davis, ensuring efficient and timely delivery of pharmaceutical products."
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Cross pattern texture */}
      <div className="absolute inset-0 texture-cross pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-pharma-navy mb-2 md:mb-4">Our Leadership</h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto hidden md:block">
            Baker & Davis is led by a dedicated team committed to reliable pharmaceutical distribution services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16 max-w-6xl mx-auto">
          {directors.map((director, index) => (
            <div key={index} className="bg-white rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-pharma-navy to-primary-light flex items-center justify-center shadow-lg">
                    <span className="text-lg md:text-2xl font-bold text-white">{director.initials}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-2xl font-bold text-pharma-navy mb-1">
                    {director.name}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-light mb-3 md:mb-4">
                    <Briefcase className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                    <span className="font-semibold text-sm md:text-lg">{director.title}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-xs md:text-base md:hidden">
                    {director.shortDesc}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base hidden md:block">
                    {director.fullDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership highlight cards - HIDDEN FOR NOW
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-pharma-light/40 flex items-center justify-center">
              <Shield className="w-7 h-7 text-pharma-navy" />
            </div>
            <h4 className="text-xl font-semibold text-pharma-navy mb-2">Quality Excellence</h4>
            <p className="text-gray-600 text-sm">Commitment to maintaining the highest standards in pharmaceutical distribution</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-pharma-light/40 flex items-center justify-center">
              <Globe className="w-7 h-7 text-pharma-navy" />
            </div>
            <h4 className="text-xl font-semibold text-pharma-navy mb-2">Pan-India & International</h4>
            <p className="text-gray-600 text-sm">Distribution network across India and 10+ countries internationally</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-pharma-light/40 flex items-center justify-center">
              <Building2 className="w-7 h-7 text-pharma-navy" />
            </div>
            <h4 className="text-xl font-semibold text-pharma-navy mb-2">Regulatory Compliance</h4>
            <p className="text-gray-600 text-sm">Full adherence to international pharmaceutical trade regulations</p>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default DirectorsSection;
