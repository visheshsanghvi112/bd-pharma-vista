import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight, Award, User, Star, Briefcase } from "lucide-react";
import DirectorCard from "@/components/about/DirectorCard";
import MissionVisionCard from "@/components/about/MissionVisionCard";
import FounderSection from "@/components/about/FounderSection";
import StatCard from "@/components/about/StatCard";
import AwardsSection from "@/components/about/AwardsSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import PartnersCarousel from "@/components/about/PartnersCarousel";
import CsrSection from "@/components/about/CsrSection";
import FacilitiesSection from "@/components/about/FacilitiesSection";
import ProductDevelopmentSection from "@/components/about/ProductDevelopmentSection";
import CertificationsSection from "@/components/about/CertificationsSection";
import GlobalPresenceMap from "@/components/about/GlobalPresenceMap";

const About = () => {
  const values = [
    {
      title: "Quality",
      description: "We maintain the highest standards in all aspects of our operation, from raw materials to finished products.",
      icon: Star
    },
    {
      title: "Innovation",
      description: "Our dedicated R&D team constantly works to improve formulations and develop new solutions for global health challenges.",
      icon: User
    },
    {
      title: "Integrity",
      description: "We conduct our business with unwavering ethical standards and transparency, building trust with partners worldwide.",
      icon: Award
    },
    {
      title: "Compliance",
      description: "We adhere to all international regulatory requirements and maintain certifications from leading global health authorities.",
      icon: Briefcase
    }
  ];

  const directors = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Executive Officer",
      description: "Leading our global vision and strategic initiatives with over 15 years of pharmaceutical industry experience.",
      imageUrl: "/lovable-uploads/smiling-female-pharmacist-stands-confidently-pharmacy-wears-white-lab-coat-arms-crossed.jpg"
    },
    {
      name: "Dr. James Anderson",
      role: "Director of Research & Development",
      description: "Spearheading innovation in drug development and formulation with a focus on next-generation pharmaceuticals.",
      imageUrl: "/lovable-uploads/female-pharmacist-writing-clipboard-examining-medications-pharmacy.jpg"
    },
    {
      name: "Dr. Emily Parker",
      role: "Head of Quality Assurance",
      description: "Ensuring the highest standards of quality and compliance across all our manufacturing processes.",
      imageUrl: "/lovable-uploads/colorful-medication-tablets-capsules-displayed-light-blue-background-emphasizing-health-healthcare-themes.jpg"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-pharma-light/30 via-primary-light/40 to-primary dark:from-pharma-dark/40 dark:via-primary-dark/50 dark:to-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-pharma-navy to-primary-dark dark:from-white dark:to-primary-light">
            About Baker & Davis
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in text-pharma-navy dark:text-white" style={{ animationDelay: "0.2s" }}>
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

      {/* Founder Section */}
      <FounderSection />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-background dark:via-background/95 dark:to-background/90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon={Award}
              title="ISO-9001-2015"
              subtitle="Certified"
            />
            <StatCard
              icon={Briefcase}
              title="22+ Years"
              subtitle="Experience"
            />
            <StatCard
              icon={Star}
              title="Global"
              subtitle="Presence"
            />
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-pharma-light/30 dark:bg-pharma-dark/20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-6 transition-colors duration-300">Our Story</h2>
              <p className="text-black dark:text-white mb-4 transition-colors duration-300">
                Baker & Davis was founded with a clear mission: to improve lives by delivering trusted pharmaceutical solutions across the globe. What began as a small operation has grown into a respected pharmaceutical manufacturer and exporter with global reach.
              </p>
              <p className="text-black dark:text-white mb-4 transition-colors duration-300">
                For over a decade, we have dedicated ourselves to manufacturing premium quality medicines that meet international standards. Our commitment to excellence has earned us certifications from leading health authorities worldwide, including WHO-GMP and FDA approvals.
              </p>
              <p className="text-black dark:text-white transition-colors duration-300">
                Today, BD Pvt. Ltd. serves healthcare providers and patients in over 50 countries, with a continuously expanding portfolio of essential and specialty medications.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/medical-supplies-diabetes-management-glucose-meter-insulin-syringe-medication-health-care-pills-orange-tablets-health-monitoring-medical-equipment-pharmacy-treatment-healthcare-tools-diabetes.jpg" 
                alt="Medical Supplies and Equipment"
                className="rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <AwardsSection />

      {/* Global Presence Map */}
      <GlobalPresenceMap />
      
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

      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Partners Carousel */}
      <PartnersCarousel />

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-pharma-light/30 to-white dark:from-pharma-dark/20 dark:to-background transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-12 transition-colors duration-300">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-pharma-navy dark:text-primary-light transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-pharma-navy dark:text-white mb-4 text-center transition-colors duration-300">{value.title}</h3>
                <p className="text-black dark:text-white text-center transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR/Community Involvement Section */}
      <CsrSection />

      {/* Manufacturing Facilities Section */}
      <FacilitiesSection />

      {/* Product Development Process */}
      <ProductDevelopmentSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/90 to-primary-dark dark:from-primary-dark/90 dark:to-primary text-white">
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
