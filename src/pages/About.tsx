
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight, Award, User, Star, Briefcase } from "lucide-react";
import DirectorCard from "@/components/about/DirectorCard";
import MissionVisionCard from "@/components/about/MissionVisionCard";
import DirectorsSection from "@/components/about/DirectorsSection";
import StatCard from "@/components/about/StatCard";
import AwardsSection from "@/components/about/AwardsSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import PartnersCarousel from "@/components/about/PartnersCarousel";
import CsrSection from "@/components/about/CsrSection";
import FacilitiesSection from "@/components/about/FacilitiesSection";
import ProductDevelopmentSection from "@/components/about/ProductDevelopmentSection";
import CertificationsSection from "@/components/about/CertificationsSection";
import GlobalPresenceMap from "@/components/about/GlobalPresenceMap";
import Seo from "@/components/Seo";

const About = () => {
  const values = [
    {
      title: "Quality",
      description: "We maintain the highest standards in all aspects of our pharmaceutical distribution, from sourcing to delivery.",
      icon: Star
    },
    {
      title: "Reliability",
      description: "Our dedicated team ensures consistent and timely delivery of pharmaceutical products to global markets.",
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

  return (
    <>
      <Seo 
        title="About Baker & Davis - Leading Pharmaceutical Distributor & Exporter | BD India"
        description="Learn about Baker & Davis (BD India) - a premier pharmaceutical distributor and global exporter. Baker Davis has been serving the pharmaceutical industry with reliable distribution services. Discover Davis and Baker's commitment to excellence in pharmaceutical supply chain solutions and international medicine trading."
        keywords={[
          "Baker Davis pharmaceutical company",
          "Davis Baker about us",
          "BD India company profile",
          "pharmaceutical distributor history Baker and Davis",
          "Baker India pharmaceutical background",
          "pharmaceutical export company profile Baker Davis",
          "global pharmaceutical distribution Baker and Davis",
          "pharmaceutical trading company history BD India",
          "medicine supply chain company Baker Davis",
          "pharmaceutical logistics company Baker India",
          "WHO-GDP certified distributor Baker and Davis",
          "pharmaceutical wholesaler profile BD India",
          "international medicine trading Baker Davis",
          "pharmaceutical import export company Baker India",
          "medical supplies distributor about Baker Davis",
          "generic medicine distributor Baker and Davis",
          "pharmaceutical supply chain solutions BD India",
          "medicine trading company profile Baker Davis",
          "global pharmaceutical trader Baker India",
          "pharmaceutical distribution network Baker and Davis",
          "international pharmaceutical distribution Baker Davis",
          "medicine export services company BD India",
          "pharmaceutical company Mumbai Baker Davis",
          "Davis pharmaceutical distribution services"
        ]}
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-pharma-light/30 via-primary-light/40 to-primary dark:from-pharma-dark/40 dark:via-primary-dark/50 dark:to-primary text-white overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-pharma-navy to-primary-dark dark:from-white dark:to-primary-light">
              About Baker & Davis
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in text-pharma-navy dark:text-white" style={{ animationDelay: "0.2s" }}>
              A trusted pharmaceutical distributor and global exporter committed to improving lives through reliable healthcare supply chain solutions
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-white dark:bg-background transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <MissionVisionCard
                title="Mission"
                content="To improve lives by delivering trusted pharmaceutical distribution solutions across the globe through reliability, quality assurance, and accessibility."
              />
              <MissionVisionCard
                title="Vision"
                content="To be the most trusted partner in global pharmaceutical distribution, recognized for our unwavering commitment to quality, reliability, and supply chain excellence."
              />
            </div>
          </div>
        </section>

        {/* Directors Section */}
        <DirectorsSection />

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-background dark:via-background/95 dark:to-background/90">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard
                icon={Award}
                title="WHO-GDP"
                subtitle="Certified"
              />
              <StatCard
                icon={Briefcase}
                title="22+ Years"
                subtitle="Experience"
              />
              <StatCard
                icon={Star}
                title="50+ Countries"
                subtitle="Global Reach"
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
                  Baker & Davis was founded with a clear mission: to improve lives by delivering trusted pharmaceutical distribution solutions across the globe. What began as a focused operation has grown into a respected pharmaceutical distributor and exporter with global reach.
                </p>
                <p className="text-black dark:text-white mb-4 transition-colors duration-300">
                  For over two decades, we have dedicated ourselves to providing reliable pharmaceutical supply chain solutions that meet international standards. Our commitment to excellence has earned us certifications from leading health authorities worldwide, including WHO-GDP certification.
                </p>
                <p className="text-black dark:text-white transition-colors duration-300">
                  Today, Baker & Davis serves healthcare providers and patients in over 50 countries, with a continuously expanding network of trusted pharmaceutical suppliers and partners.
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

        {/* Distribution Network Section */}
        <FacilitiesSection />

        {/* Supply Chain Process */}
        <ProductDevelopmentSection />

        {/* Certifications Section */}
        <CertificationsSection />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/90 to-primary-dark dark:from-primary-dark/90 dark:to-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Network</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with Baker & Davis to expand your access to global pharmaceutical markets and reliable supply chain solutions.
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
    </>
  );
};

export default About;
