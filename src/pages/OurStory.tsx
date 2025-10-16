
import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import { Award, Users, Globe, TrendingUp, Heart, Shield } from "lucide-react";

const OurStory = () => {
  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      description: "Baker & Davis was established as a trusted pharmaceutical distributor in India, starting our journey to serve healthcare needs across the nation."
    },
    {
      year: "2018", 
      title: "Expansion",
      description: "Extended our operations to become leading pharmaceutical traders, building strong partnerships with manufacturers and healthcare providers."
    },
    {
      year: "2020",
      title: "Export Division",
      description: "Launched our pharmaceutical export division, taking Indian quality medicines to international markets and establishing BD India as a global brand."
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Embraced modern technology and digital platforms to enhance our pharmaceutical distribution and trading capabilities."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every pharmaceutical product distributed by Baker & Davis meets the highest quality standards and regulatory compliance."
    },
    {
      icon: Heart,
      title: "Healthcare First",
      description: "Our commitment to improving healthcare access drives everything we do as pharmaceutical distributors and traders."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From Baker India to international markets, we ensure quality medicines reach patients worldwide through our export network."
    },
    {
      icon: Users,
      title: "Trust & Partnership",
      description: "Building lasting relationships with healthcare providers, manufacturers, and patients is at the core of BD India's philosophy."
    }
  ];

  return (
    <>
      <Seo 
        title="Our Story - Baker & Davis | Leading Pharmaceutical Distributors & Traders in India"
        description="Discover the inspiring journey of Baker & Davis (BD India) - from a trusted pharmaceutical distributor to leading traders and exporters. Learn about Baker India's commitment to quality healthcare distribution and global pharmaceutical trading excellence."
        keywords={[
          "Baker & Davis story",
          "BD India history",
          "pharmaceutical distributors India",
          "Baker India journey",
          "pharmaceutical traders story",
          "medicine export company India",
          "healthcare distribution timeline",
          "pharmaceutical business growth"
        ]}
      />
      
      <div className="min-h-screen bg-pharma-light">
        {/* Hero Section with image */}
        <section className="relative overflow-hidden text-white">
          <img 
            src="/lovable-uploads/pexels-pixabay-356040.jpg" 
            alt="Our Story"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 relative z-10 py-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Story
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                The inspiring journey of Baker & Davis - from a vision to become India's trusted pharmaceutical distributor to a leading name in pharmaceutical trading and exports worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Pharmaceutical Distributors</span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Medicine Traders</span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Global Exporters</span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">BD India</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-pharma-navy mb-8">The Beginning of Baker & Davis</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Baker & Davis began with a simple yet powerful vision: to bridge the gap between quality pharmaceutical manufacturers and healthcare providers across India. Founded as a pharmaceutical distributor, we recognized the critical need for reliable, efficient, and transparent medicine distribution in the Indian healthcare ecosystem.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  What started as Baker India, a local pharmaceutical distribution company, quickly evolved into BD India - a comprehensive pharmaceutical trading and export powerhouse. Our commitment to quality, reliability, and healthcare excellence has been the driving force behind our growth from a regional distributor to a nationally recognized pharmaceutical trader.
                </p>
                
                <h3 className="text-2xl font-bold text-pharma-navy mb-6">From Distribution to Global Trading</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  As Baker & Davis expanded, we evolved from purely pharmaceutical distributors to comprehensive pharmaceutical traders, handling everything from bulk medicine trading to specialized pharmaceutical exports. Our expertise in pharmaceutical distribution gave us unique insights into market needs, enabling us to become effective traders who understand both supply and demand dynamics.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  Today, BD India stands as a testament to how dedication to pharmaceutical excellence can transform a local distributor into a global pharmaceutical trading company. Our export division has successfully introduced Indian pharmaceutical quality to international markets, making Baker India a recognized name in global healthcare distribution.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-pharma-navy mb-4">Our Journey Through the Years</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From pharmaceutical distributor to global trader - the milestones that shaped Baker & Davis into BD India's leading pharmaceutical trading company.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-pharma-navy text-white inline-block px-4 py-2 rounded-full text-sm font-bold mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-pharma-navy mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                  <div className="w-4 h-4 bg-pharma-navy rounded-full flex-shrink-0 mx-4"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-pharma-light">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-pharma-navy mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide Baker & Davis as pharmaceutical distributors, traders, and exporters in our mission to serve global healthcare needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-pharma-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-pharma-navy" />
                  </div>
                  <h3 className="text-lg font-bold text-pharma-navy mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-16 bg-gradient-to-r from-pharma-navy to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Looking Towards the Future</h2>
              <p className="text-xl leading-relaxed mb-8">
                As we continue to grow, Baker & Davis remains committed to innovation in pharmaceutical distribution and trading. Our vision for BD India is to become the most trusted pharmaceutical distributor and trader, setting new standards in healthcare accessibility and medicine quality across global markets.
              </p>
              <p className="text-lg opacity-90">
                The story of Baker India continues to unfold, driven by our dedication to pharmaceutical excellence and our mission to make quality healthcare accessible to all.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurStory;
