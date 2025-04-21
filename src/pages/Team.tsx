
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Team = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    if (expandedMember === id) {
      setExpandedMember(null);
    } else {
      setExpandedMember(id);
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Robert Baker",
      role: "Chief Executive Officer",
      image: "/public/placeholder.svg",
      shortBio: "Co-founder with 20+ years in pharmaceutical leadership",
      fullBio: "Dr. Baker brings over two decades of pharmaceutical industry leadership to his role as CEO. With a Ph.D. in Pharmaceutical Sciences and an MBA from prestigious institutions, he has guided Baker & Davis from its inception to become a globally recognized pharmaceutical manufacturer and exporter. His vision for accessible, high-quality healthcare drives the company's strategic direction.",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Dr. Sarah Davis",
      role: "Chief Scientific Officer",
      image: "/public/placeholder.svg",
      shortBio: "Co-founder and pharmaceutical innovator",
      fullBio: "Dr. Davis oversees all research and development activities at BD Pharmaceuticals. Her background includes pioneering work in drug formulation and delivery systems, with multiple patents to her name. Under her leadership, our R&D department has developed numerous innovative pharmaceutical solutions that address critical healthcare needs across diverse markets.",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Rajiv Sharma",
      role: "Head of Production",
      image: "/public/placeholder.svg",
      shortBio: "Manufacturing expert with focus on quality and efficiency",
      fullBio: "Rajiv leads our manufacturing operations with a keen focus on quality, efficiency, and regulatory compliance. With 15 years of experience in pharmaceutical production, he has implemented systems that ensure our manufacturing facilities maintain the highest international standards while optimizing production capacity and cost-effectiveness.",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      role: "Global Export Director",
      image: "/public/placeholder.svg",
      shortBio: "International trade specialist with expertise in 50+ markets",
      fullBio: "Elena directs Baker & Davis's global export operations, leveraging her extensive knowledge of international pharmaceutical regulations and market dynamics. She has successfully established distribution networks in over 50 countries, ensuring BD products reach patients worldwide while navigating complex regulatory landscapes and trade relationships.",
      linkedin: "#"
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "Quality Assurance Director",
      image: "/public/placeholder.svg",
      shortBio: "Regulatory compliance expert and quality systems architect",
      fullBio: "Michael oversees our comprehensive quality management system, ensuring all products meet or exceed international quality standards. His background includes extensive experience with FDA, WHO, and other regulatory bodies. Under his leadership, BD has maintained an exemplary record of compliance while developing robust quality verification protocols.",
      linkedin: "#"
    },
    {
      id: 6,
      name: "Priya Patel",
      role: "Finance Director",
      image: "/public/placeholder.svg",
      shortBio: "Financial strategist with international business acumen",
      fullBio: "Priya manages the financial health and strategy of Baker & Davis, bringing expertise in international finance, risk management, and strategic investment. Her prudent financial leadership has enabled the company's sustainable growth and expansion into new markets while maintaining strong fiscal health and stakeholder returns.",
      linkedin: "#"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Leadership Team</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Meet the experts guiding Baker & Davis's mission to deliver high-quality pharmaceutical solutions worldwide
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden bg-pharma-light">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-pharma-navy">{member.name}</h3>
                  <p className="text-pharma-navy/70 font-medium">{member.role}</p>
                  <div className="mt-4">
                    <p className="text-gray-700">
                      {expandedMember === member.id ? member.fullBio : member.shortBio}
                    </p>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <button 
                      onClick={() => toggleExpand(member.id)}
                      className="text-sm font-medium text-pharma-navy hover:text-primary-light transition-colors"
                    >
                      {expandedMember === member.id ? "Show Less" : "Read More"}
                    </button>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pharma-navy hover:text-primary-light transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 bg-pharma-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-pharma-navy mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Interested in shaping the future of global pharmaceutical access? Explore opportunities to join the Baker & Davis team.
          </p>
          <Button asChild size="lg" className="bg-pharma-navy hover:bg-primary-dark">
            <NavLink to="/careers">View Careers</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Team;
