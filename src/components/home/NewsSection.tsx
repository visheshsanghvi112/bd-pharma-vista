
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Baker & Davis Receives WHO Recognition for Quality Standards",
    excerpt: "Our manufacturing facilities have been recognized for exceptional quality control and safety measures...",
    image: "/lovable-uploads/female-pharmacist-writing-clipboard-examining-medications-pharmacy.jpg",
    date: "April 20, 2025",
    author: "David Miller",
    category: "Awards"
  },
  {
    id: 2,
    title: "New Cancer Treatment Breakthrough in Clinical Trials",
    excerpt: "Our research team has developed a promising new treatment showing remarkable results in phase II trials...",
    image: "/lovable-uploads/antibiotic-drug-selection-multi-colored-capsule-pills-blue-background-forceps-picks-capsule.jpg",
    date: "April 15, 2025",
    author: "Sarah Johnson",
    category: "Research"
  },
  {
    id: 3,
    title: "Expansion into Southeast Asian Markets Announced",
    excerpt: "Baker & Davis continues global growth with new distribution partnerships across Southeast Asian countries...",
    image: "/lovable-uploads/smiling-female-pharmacist-stands-confidently-pharmacy-wears-white-lab-coat-arms-crossed.jpg",
    date: "April 8, 2025",
    author: "Michael Chen",
    category: "Business"
  }
];

const NewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("news-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="news-section"
      className="py-24 bg-gradient-to-b from-white to-pharma-light/10 dark:from-background dark:to-pharma-dark/10 relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0xNGg0djFoLTR2LTF6bTAtN2g0djFoLTR2LTF6TTI2IDM0aDR2MWgtNHYtMXptMC03aDR2MWgtNHYtMXptMC03aDR2MWgtNHYtMXpNMTYgMzRoNHYxaC00di0xem0wLTE0aDR2MWgtNHYtMXptMC03aDR2MWgtNHYtMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 dark:opacity-10"></div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary dark:text-primary-light font-medium mb-2">LATEST UPDATES</p>
          <h2 className="text-3xl font-bold text-pharma-navy dark:text-white mb-4">News & Industry Insights</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Stay informed with the latest developments, research breakthroughs, and company announcements from Baker & Davis Pharmaceuticals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="overflow-hidden h-full bg-white dark:bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-800 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary dark:bg-primary-light text-white dark:text-pharma-navy text-xs font-semibold py-1 px-3 rounded-full">
                    {news.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      <span>{news.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-pharma-navy dark:text-white mb-3 line-clamp-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary dark:text-primary-light text-sm font-medium group cursor-pointer">
                    <span className="group-hover:underline">Read More</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button asChild className="bg-pharma-navy text-white hover:bg-primary dark:bg-primary dark:hover:bg-primary-light group transition-all duration-300">
            <NavLink to="/news" className="flex items-center gap-2">
              View All News
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
