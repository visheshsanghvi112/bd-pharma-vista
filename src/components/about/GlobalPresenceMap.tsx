
import { Globe, MapPin } from "lucide-react";

const GlobalPresenceMap = () => {
  const regions = [
    { name: "North America", countries: ["USA", "Canada", "Mexico"], count: 3 },
    { name: "South America", countries: ["Brazil", "Argentina", "Colombia", "Chile"], count: 4 },
    { name: "Europe", countries: ["UK", "Germany", "France", "Italy", "Spain", "Netherlands"], count: 6 },
    { name: "Asia", countries: ["India", "China", "Japan", "Singapore", "South Korea"], count: 5 },
    { name: "Africa", countries: ["South Africa", "Kenya", "Nigeria", "Egypt"], count: 4 },
    { name: "Oceania", countries: ["Australia", "New Zealand"], count: 2 },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pharma-light/20 to-white dark:from-pharma-dark/20 dark:to-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Globe className="w-8 h-8 text-pharma-navy dark:text-primary-light" />
          <h2 className="text-3xl font-bold text-pharma-navy dark:text-white transition-colors duration-300">Global Presence</h2>
        </div>
        <p className="text-black dark:text-white text-center max-w-3xl mx-auto mb-12">
          Our products reach patients in more than 50 countries across 6 continents, supported by a robust distribution network.
        </p>
        
        <div className="relative w-full h-[400px] md:h-[500px] bg-pharma-light/20 dark:bg-pharma-dark/20 rounded-lg overflow-hidden mb-8">
          {/* This would be replaced with an actual interactive map in a real implementation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/placeholder.svg" 
              alt="World Map" 
              className="w-full h-full object-cover opacity-70 dark:opacity-40"
            />
            
            {/* Sample map pins - in a real implementation these would be positioned accurately */}
            <div className="absolute top-1/4 left-1/4 animate-pulse">
              <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />
            </div>
            <div className="absolute top-1/3 left-1/2 animate-pulse" style={{ animationDelay: "0.5s" }}>
              <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />
            </div>
            <div className="absolute bottom-1/3 right-1/4 animate-pulse" style={{ animationDelay: "1s" }}>
              <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-pulse" style={{ animationDelay: "1.5s" }}>
              <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />
            </div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 dark:bg-card/80 p-4 rounded-lg shadow-lg backdrop-blur-sm">
              <p className="text-2xl font-bold text-pharma-navy dark:text-white mb-2">50+ Countries</p>
              <p className="text-black dark:text-white">Global Distribution Network</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {regions.map((region, index) => (
            <div key={index} className="bg-white dark:bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-bold text-pharma-navy dark:text-white mb-2">{region.name}</h3>
              <p className="text-primary dark:text-primary-light font-medium mb-1">{region.count} Countries</p>
              <p className="text-sm text-black dark:text-white">{region.countries.join(", ")}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-black dark:text-white">
            Our global distribution network ensures reliable and timely delivery of quality pharmaceutical products worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceMap;
