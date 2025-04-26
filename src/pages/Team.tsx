import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Users } from "lucide-react";
import Seo from "@/components/Seo";

const Team = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    if (expandedMember === id) {
      setExpandedMember(null);
    } else {
      setExpandedMember(id);
    }
  };

  return (
    <>
      <Seo 
        title="Our Team"
        description="Meet the experienced leadership team at Baker & Davis pharmaceutical manufacturing. Our experts drive innovation in global pharmaceutical manufacturing and export."
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Leadership Team</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              This page is currently under construction as we build our team
            </p>
          </div>
        </section>

        {/* Placeholder Section */}
        <section className="py-16 bg-white dark:bg-background transition-colors duration-300">
          <div className="container mx-auto px-4 text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-pharma-navy dark:text-primary-light opacity-50" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pharma-navy dark:text-white">Coming Soon</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              We are currently building our team of dedicated professionals. Check back soon to meet the individuals who will be driving our mission forward.
            </p>
            <Button asChild variant="outline" className="bg-transparent border-pharma-navy text-pharma-navy hover:bg-pharma-light dark:border-primary-light dark:text-primary-light dark:hover:bg-primary/20">
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
