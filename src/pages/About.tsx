
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Quality",
      description: "We maintain the highest standards in all aspects of our operation, from raw materials to finished products."
    },
    {
      title: "Innovation",
      description: "Our dedicated R&D team constantly works to improve formulations and develop new solutions for global health challenges."
    },
    {
      title: "Integrity",
      description: "We conduct our business with unwavering ethical standards and transparency, building trust with partners worldwide."
    },
    {
      title: "Compliance",
      description: "We adhere to all international regulatory requirements and maintain certifications from leading global health authorities."
    }
  ];

  const milestones = [
    { year: "2005", event: "Foundation of Baker & Davis Pharmaceuticals" },
    { year: "2009", event: "Achieved WHO-GMP certification" },
    { year: "2012", event: "Expanded export operations to 25 countries" },
    { year: "2017", event: "Incorporation as BD Pvt. Ltd." },
    { year: "2020", event: "Established state-of-the-art R&D facility" },
    { year: "2023", event: "Reached milestone of 200+ pharmaceutical products" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Baker & Davis</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A trusted pharmaceutical manufacturer and global exporter committed to improving lives through quality healthcare products
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-pharma-navy mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Baker & Davis was founded with a clear mission: to improve lives by delivering trusted pharmaceutical solutions across the globe. What began as a small operation has grown into a respected pharmaceutical manufacturer and exporter with global reach.
              </p>
              <p className="text-gray-700 mb-4">
                For over a decade, we have dedicated ourselves to manufacturing premium quality medicines that meet international standards. Our commitment to excellence has earned us certifications from leading health authorities worldwide, including WHO-GMP and FDA approvals.
              </p>
              <p className="text-gray-700">
                Today, BD Pvt. Ltd. serves healthcare providers and patients in over 50 countries, with a continuously expanding portfolio of essential and specialty medications.
              </p>
            </div>
            <div className="bg-pharma-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-pharma-navy mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6 italic border-l-4 border-pharma-navy pl-4 py-2">
                "To improve lives by delivering trusted pharmaceutical solutions across the globe."
              </p>
              
              <h3 className="text-2xl font-bold text-pharma-navy mb-4">Our Vision</h3>
              <p className="text-gray-700 italic border-l-4 border-pharma-navy pl-4 py-2">
                "To be the most trusted partner in global healthcare, recognized for quality, innovation, and accessibility."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-pharma-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pharma-navy mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-pharma-navy mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-pharma-navy mb-6">State-of-the-Art Facilities</h2>
              <p className="text-gray-700 mb-4">
                Baker & Davis operates modern manufacturing facilities that comply with international standards for pharmaceutical production. Our plants are equipped with the latest technology to ensure precision, quality, and efficiency.
              </p>
              <p className="text-gray-700 mb-4">
                Our dedicated R&D center houses experienced scientists and researchers who work tirelessly to develop new formulations and improve existing products. This commitment to innovation allows us to address evolving healthcare needs worldwide.
              </p>
              <p className="text-gray-700 mb-4">
                Quality control is at the heart of our operation, with comprehensive testing performed at every stage of production. Our facilities are regularly audited by international regulatory bodies to maintain our certifications.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/public/placeholder.svg" 
                alt="BD Pharmaceutical Facility" 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-16 bg-pharma-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pharma-navy mb-12">Our Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pharma-navy"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:justify-between`}
                >
                  <div className={`hidden md:block w-5/12 ${index % 2 !== 0 ? 'order-2 text-left' : 'order-1 text-right'}`}>
                    <div className={`p-4 rounded-lg bg-white shadow ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <h3 className="text-xl font-bold text-pharma-navy">{milestone.year}</h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-pharma-navy z-10"></div>
                  
                  <div className={`md:hidden block w-full text-left p-4 rounded-lg bg-white shadow ml-8`}>
                    <h3 className="text-xl font-bold text-pharma-navy">{milestone.year}</h3>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                  
                  <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'order-2 text-left' : 'order-1 text-right'}`}>
                    <div className={`p-4 rounded-lg bg-white shadow ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                      <h3 className="text-xl font-bold text-pharma-navy">{milestone.year}</h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Baker & Davis to contribute to global healthcare improvement and access to quality medicines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-pharma-navy hover:bg-gray-100">
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <NavLink to="/team">Meet Our Team</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
