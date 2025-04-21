
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Careers = () => {
  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive medical insurance, wellness programs, and health initiatives for employees and their families."
    },
    {
      title: "Professional Development",
      description: "Ongoing training opportunities, educational assistance, and clear career advancement pathways."
    },
    {
      title: "Work-Life Balance",
      description: "Flexible scheduling options, generous paid time off, and family-friendly policies."
    },
    {
      title: "Collaborative Environment",
      description: "Work alongside industry experts in a supportive, innovative, and inclusive workplace culture."
    },
    {
      title: "Global Impact",
      description: "Be part of a team improving healthcare access and outcomes for patients worldwide."
    },
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages, performance bonuses, and comprehensive retirement benefits."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Shape the future of pharma with the team that's making healthcare accessible globally
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-pharma-navy mb-6">Why Join Baker & Davis?</h2>
            <p className="text-lg text-gray-700">
              At Baker & Davis, we're not just creating pharmaceutical products—we're improving lives worldwide. Join our team of passionate professionals dedicated to quality, innovation, and global healthcare access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-pharma-light p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-pharma-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Environment */}
      <section className="py-16 bg-pharma-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-pharma-navy mb-6">Our Work Environment</h2>
              <p className="text-gray-700 mb-4">
                At Baker & Davis, we foster a culture of excellence, innovation, and collaboration. Our modern facilities provide an inspiring environment where professionals from diverse backgrounds work together to advance global healthcare.
              </p>
              <p className="text-gray-700 mb-4">
                We value integrity, respect, and a commitment to quality in everything we do. Our team members enjoy autonomy while contributing to projects with meaningful global impact.
              </p>
              <p className="text-gray-700">
                Professional development is core to our philosophy—we invest in our team members' growth through specialized training, mentorship programs, and opportunities to work on cutting-edge pharmaceutical initiatives.
              </p>
            </div>
            <div>
              <img 
                src="/public/placeholder.svg" 
                alt="Baker & Davis Work Environment" 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pharma-navy mb-12">Current Opportunities</h2>
          
          <div className="max-w-3xl mx-auto bg-pharma-light p-8 rounded-lg">
            <div className="text-center mb-6">
              <p className="text-xl text-gray-700">
                We are currently building our talent pipeline for future opportunities.
              </p>
              <p className="text-gray-700 mt-4">
                While we don't have any open positions at the moment, we're always interested in connecting with talented professionals in the pharmaceutical industry.
              </p>
            </div>
            <div className="flex justify-center">
              <Button asChild className="bg-pharma-navy hover:bg-primary-dark">
                <NavLink to="/contact">Contact Us</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Address */}
      <section className="py-16 bg-pharma-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-pharma-navy mb-6">Our Location</h2>
            <address className="text-gray-700 not-italic">
              <p className="font-medium">Registered Office:</p>
              <p>
                42/44, Babu Genu Road, Shop No. 14, 2nd Floor, Om Shanti Co-Operative 
                Housing Society Ltd., Kalbadevi, Mumbai - 400 002
              </p>
            </address>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
