import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Building2, GraduationCap, HeartHandshake, Globe2, Banknote, Users } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: HeartHandshake,
      title: "Health & Wellness",
      description: "Comprehensive medical insurance, wellness programs, and health initiatives for employees and their families."
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Ongoing training opportunities, educational assistance, and clear career advancement pathways."
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible scheduling options, generous paid time off, and family-friendly policies."
    },
    {
      icon: Building2,
      title: "Collaborative Environment",
      description: "Work alongside industry experts in a supportive, innovative, and inclusive workplace culture."
    },
    {
      icon: Globe2,
      title: "Global Impact",
      description: "Be part of a team improving healthcare access and outcomes for patients worldwide."
    },
    {
      icon: Banknote,
      title: "Competitive Compensation",
      description: "Attractive salary packages, performance bonuses, and comprehensive retirement benefits."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 dark:from-primary/10 dark:to-primary/5" />
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pharma-navy dark:text-primary-light animate-fade-in">
            Join Our Team
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 animate-fade-in">
            Shape the future of pharma with the team that's making healthcare accessible globally
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white dark:bg-background transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-6 transition-colors duration-300">
              Why Join Baker & Davis?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
              At Baker & Davis, we're not just creating pharmaceutical products—we're improving lives worldwide. 
              Join our team of passionate professionals dedicated to quality, innovation, and global healthcare access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index} 
                  className="bg-pharma-light dark:bg-pharma-dark/60 p-8 rounded-lg hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="mb-4 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary dark:text-primary-light" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-pharma-navy dark:text-primary-light mb-3 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Work Environment */}
      <section className="py-16 bg-pharma-light dark:bg-pharma-dark/40 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-6 transition-colors duration-300">Our Work Environment</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                At Baker & Davis, we foster a culture of excellence, innovation, and collaboration. Our modern facilities provide an inspiring environment where professionals from diverse backgrounds work together to advance global healthcare.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                We value integrity, respect, and a commitment to quality in everything we do. Our team members enjoy autonomy while contributing to projects with meaningful global impact.
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
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

      {/* Current Opportunities Section with enhanced styling */}
      <section className="py-20 bg-white dark:bg-background transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pharma-navy dark:text-white mb-12 transition-colors duration-300">
            Current Opportunities
          </h2>
          
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-pharma-light to-white dark:from-pharma-dark/60 dark:to-background p-12 rounded-lg shadow-lg transition-all duration-300">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-pharma-navy dark:text-primary-light transition-colors duration-300">
                Building Our Future Team
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 transition-colors duration-300">
                We are currently building our talent pipeline for future opportunities.
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                While we don't have any open positions at the moment, we're always interested in connecting with talented professionals in the pharmaceutical industry.
              </p>
              <div className="pt-6">
                <Button asChild className="bg-pharma-navy hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-light transition-all duration-300">
                  <NavLink to="/contact">Contact Us</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Address with enhanced styling */}
      <section className="py-16 bg-pharma-light dark:bg-pharma-dark/40 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-pharma-navy dark:text-white mb-6 transition-colors duration-300">
              Our Location
            </h2>
            <div className="bg-white/50 dark:bg-card/50 p-8 rounded-lg shadow-sm backdrop-blur-sm">
              <address className="text-gray-700 dark:text-gray-300 not-italic space-y-2 transition-colors duration-300">
                <p className="font-medium text-lg">Registered Office:</p>
                <p>
                  42/44, Babu Genu Road, Shop No. 14, 2nd Floor,<br />
                  Om Shanti Co-Operative Housing Society Ltd.,<br />
                  Kalbadevi, Mumbai - 400 002
                </p>
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
