
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight, User, Award, Briefcase, Star } from "lucide-react";
import DirectorCard from "@/components/about/DirectorCard";
import MissionVisionCard from "@/components/about/MissionVisionCard";
import DirectorsSection from "@/components/about/DirectorsSection";
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
		{/* Hero Image */}
		<section className="relative overflow-hidden">
			<img 
				src="/lovable-uploads/about_us_banner.jpg" 
				alt="About Baker & Davis"
				className="w-full h-64 sm:h-72 md:h-96 object-cover object-center"
			/>
		</section>
		{/* Title and intro - Mobile optimized */}
		<section className="py-8 md:py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto">
					<h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-pharma-navy text-center">
						About Baker & Davis
					</h1>
					<p className="text-base md:text-xl text-center mb-6 md:mb-8 text-gray-700">
						A trusted pharmaceutical distributor and global exporter committed to improving lives through reliable healthcare supply chain solutions
					</p>
					<div className="bg-gradient-to-br from-pharma-light/30 to-white p-4 md:p-8 rounded-2xl shadow-md">
						<p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
							Baker & Davis is a premier pharmaceutical distributor and exporter based in Mumbai, India, serving the global healthcare industry with dedication to quality and reliability.
						</p>
						<p className="text-sm md:text-lg text-gray-700 leading-relaxed">
							Our operations span across more than 50 countries with <span className="font-semibold text-pharma-navy">WHO-GDP certification</span>, ensuring every product meets the highest standards of safety and efficacy.
						</p>
						<p className="hidden md:block text-lg text-gray-700 leading-relaxed mt-4">
							At Baker & Davis, we don't just distribute pharmaceuticals – we build partnerships, ensure regulatory compliance, and contribute to global health accessibility. Our expertise in international pharmaceutical logistics makes us the preferred partner for pharmaceutical companies seeking reliable global distribution channels.
						</p>
					</div>
				</div>
			</div>
		</section>

        {/* Mission & Vision - Mobile optimized */}
        <section className="py-10 md:py-20 bg-gradient-to-br from-pharma-light/40 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-pharma-navy mb-2 md:mb-4">Our Purpose & Direction</h2>
              <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto hidden md:block">Guided by clear principles and driven by a vision for global healthcare excellence</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg border-l-4 border-pharma-navy hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pharma-navy flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-pharma-navy">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                  To improve lives by delivering trusted pharmaceutical distribution solutions globally through reliability, quality assurance, and accessibility.
                  <span className="hidden md:inline"> We are committed to ensuring that essential medicines reach healthcare providers and patients worldwide, maintaining the highest standards of pharmaceutical supply chain management.</span>
                </p>
              </div>
              <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg border-l-4 border-primary-light hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pharma-navy to-primary-light flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-pharma-navy">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                  To be the most trusted partner in global pharmaceutical distribution, recognized for our commitment to quality, reliability, and supply chain excellence.
                  <span className="hidden md:inline"> We envision a world where access to quality medicines is seamless, and Baker & Davis serves as the bridge connecting pharmaceutical innovation with patient care worldwide.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story - Mobile optimized */}
        <section className="py-10 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-pharma-navy mb-4 md:mb-6">Our Story</h2>
                <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-lg leading-relaxed">
                  <p>
                    Baker & Davis was founded with a mission to deliver trusted pharmaceutical distribution solutions globally. What began in Mumbai has grown into a respected pharmaceutical distributor with truly global reach.
                  </p>
                  <p>
                    For over <span className="font-semibold text-pharma-navy">two decades</span>, we've provided reliable pharmaceutical supply chain solutions meeting rigorous international standards.
                    <span className="hidden md:inline"> Our journey has been marked by continuous growth, strategic partnerships, and an unwavering commitment to excellence.</span>
                  </p>
                  <p className="hidden md:block">
                    Our commitment to quality has earned us certifications from leading health authorities worldwide, including <span className="font-semibold text-pharma-navy">WHO-GDP certification</span>, ISO standards, and regulatory approvals from multiple international markets.
                  </p>
                  <p>
                    Today, we serve healthcare providers in over <span className="font-semibold text-pharma-navy">50 countries</span><span className="hidden md:inline">, with a continuously expanding network of trusted pharmaceutical suppliers, manufacturers, and distribution partners. Every day, we facilitate the journey of life-saving medicines from manufacturers to patients worldwide</span>.
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="/lovable-uploads/pexels-pixabay-356040.jpg" 
                  alt="Our Story"
                  className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300 object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section - Redesigned without images */}
        <DirectorsSection />


        {/* Awards & Recognition */}
        <AwardsSection />

        {/* Global Presence Map */}
        <GlobalPresenceMap />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-br from-pharma-light/30 to-white dark:from-pharma-dark/20 dark:to-background transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-12 transition-colors duration-300">Our Core Values</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white dark:bg-card p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-pharma-navy dark:text-primary-light transition-colors duration-300" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-pharma-navy dark:text-white mb-2 sm:mb-4 text-center transition-colors duration-300">{value.title}</h3>
                  <p className="text-xs sm:text-base text-black dark:text-white text-center transition-colors duration-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CSR/Community Involvement Section - Hidden on mobile */}
        <div className="hidden md:block">
          <CsrSection />
        </div>

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
