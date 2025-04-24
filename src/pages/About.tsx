
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Factory, Beaker, CircleCheck, ArrowRight } from "lucide-react";
import DirectorCard from "@/components/about/DirectorCard";
import MissionVisionCard from "@/components/about/MissionVisionCard";

const About = () => {
  const values = [
    {
      title: "Quality",
      description: "We maintain the highest standards in all aspects of our operation, from raw materials to finished products.",
      icon: CircleCheck
    },
    {
      title: "Innovation",
      description: "Our dedicated R&D team constantly works to improve formulations and develop new solutions for global health challenges.",
      icon: Beaker
    },
    {
      title: "Integrity",
      description: "We conduct our business with unwavering ethical standards and transparency, building trust with partners worldwide.",
      icon: CircleCheck
    },
    {
      title: "Compliance",
      description: "We adhere to all international regulatory requirements and maintain certifications from leading global health authorities.",
      icon: Factory
    }
  ];

  const directors = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Executive Officer",
      description: "Leading BD's global vision and strategic initiatives with over 15 years of pharmaceutical industry experience.",
      imageUrl: "/lovable-uploads/70b85ca1-1299-4fe8-8a48-f3c0cec53ff7.png"
    },
    {
      name: "Dr. James Anderson",
      role: "Director of Research & Development",
      description: "Spearheading innovation in drug development and formulation with a focus on next-generation pharmaceuticals.",
      imageUrl: "/lovable-uploads/b363471a-fde0-4fe3-822e-95eb8934a7f6.png"
    },
    {
      name: "Dr. Emily Parker",
      role: "Head of Quality Assurance",
      description: "Ensuring the highest standards of quality and compliance across all our manufacturing processes.",
      imageUrl: "/lovable-uploads/09448174-a3e2-4f28-b61d-1a45b660434b.png"
    }
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

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white dark:bg-background transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <MissionVisionCard
              title="Mission"
              content="To improve lives by delivering trusted pharmaceutical solutions across the globe through innovation, quality, and accessibility."
            />
            <MissionVisionCard
              title="Vision"
              content="To be the most trusted partner in global healthcare, recognized for our unwavering commitment to quality, innovation, and patient well-being."
            />
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-pharma-light dark:bg-pharma-dark transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-6 transition-colors duration-300">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-200 mb-4 transition-colors duration-300">
                Baker & Davis was founded with a clear mission: to improve lives by delivering trusted pharmaceutical solutions across the globe. What began as a small operation has grown into a respected pharmaceutical manufacturer and exporter with global reach.
              </p>
              <p className="text-gray-700 dark:text-gray-200 mb-4 transition-colors duration-300">
                For over a decade, we have dedicated ourselves to manufacturing premium quality medicines that meet international standards. Our commitment to excellence has earned us certifications from leading health authorities worldwide, including WHO-GMP and FDA approvals.
              </p>
              <p className="text-gray-700 dark:text-gray-200 transition-colors duration-300">
                Today, BD Pvt. Ltd. serves healthcare providers and patients in over 50 countries, with a continuously expanding portfolio of essential and specialty medications.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/193f0ec9-fa4c-454b-8378-097babca8c55.png" 
                alt="Pharmaceutical Manufacturing"
                className="rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-16 bg-white dark:bg-background transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-12 transition-colors duration-300">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <DirectorCard key={index} {...director} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-pharma-light dark:bg-pharma-dark/40 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-12 transition-colors duration-300">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-pharma-navy dark:text-primary-light transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-4 text-center transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center transition-colors duration-300">{value.description}</p>
              </div>
            ))}
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
          <Button asChild size="lg" className="bg-white text-pharma-navy hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-100 transition-colors duration-300">
            <NavLink to="/contact" className="flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
