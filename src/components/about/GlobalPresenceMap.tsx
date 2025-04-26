
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
        
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8 bg-white dark:bg-card shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* World Map SVG with proper styling */}
            <svg 
              viewBox="0 0 1200 800" 
              className="w-full h-full opacity-80 dark:opacity-60"
              style={{ 
                filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
                background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)'
              }}
            >
              <path
                d="M246.5,152.8l-11.1-7.2l-14.5-3.1l-11.9,4.1l-7.2,5.7l-10.8,3.6l-8.8,2.1l-12.9,4.1l-9.8,1l-7.2,2.6l-4.7,4.1 l-5.7,1l-7.2,0.5l-5.7-1.5l-5.2-3.6l-4.7-2.1l-4.1,0.5l-3.6,2.1l-5.7,0.5l-5.7-1.5l-4.7-2.6l-4.1-1.5l-4.7,0.5l-4.1,2.1l-3.6,2.6 l-4.1,1.5l-4.7,0.5l-4.1-1.5l-3.6-2.6l-4.1-1.5l-4.7,0.5l-4.1,2.1l-3.6,2.6l-4.1,1.5l-4.7,0.5l-4.1-1.5l-3.6-2.6l-4.1-1.5 l-4.7,0.5l-4.1,2.1l-3.6,2.6l-4.1,1.5l-4.7,0.5l-4.1-1.5l-3.6-2.6l-4.1-1.5l-4.7,0.5l-4.1,2.1l-3.6,2.6l-4.1,1.5l-4.7,0.5 l-4.1-1.5l-3.6-2.6l-4.1-1.5l-4.7,0.5l-4.1,2.1l-3.6,2.6l-4.1,1.5l-4.7,0.5l-4.1-1.5l-3.6-2.6l-4.1-1.5l-4.7,0.5l-4.1,2.1 l-3.6,2.6l-4.1,1.5l-4.7,0.5l-4.1-1.5l-3.6-2.6l-4.1-1.5l-4.7,0.5l-4.1,2.1l-3.6,2.6l-4.1,1.5l-4.7,0.5l-4.1-1.5l-3.6-2.6 l-4.1-1.5l-4.7,0.5l-4.1,2.1l-3.6,2.6l-4.1,1.5l-4.7,0.5l-4.1-1.5l-3.6-2.6l-4.1-1.5l-4.7,0.5"
                fill="none"
                stroke="#6366f1"
                strokeWidth="0.5"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            </svg>
            
            {/* Location Markers */}
            <div className="absolute inset-0">
              <div className="absolute top-[30%] left-[20%] animate-pulse">
                <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />
              </div>
              <div className="absolute top-[45%] left-[48%] animate-pulse delay-100">
                <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />
              </div>
              <div className="absolute top-[35%] left-[75%] animate-pulse delay-200">
                <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />
              </div>
              <div className="absolute top-[60%] left-[65%] animate-pulse delay-300">
                <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />
              </div>
              <div className="absolute top-[65%] left-[30%] animate-pulse delay-400">
                <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />
              </div>
            </div>
          </div>
          
          {/* Stats Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 dark:bg-card/90 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <p className="text-3xl font-bold text-pharma-navy dark:text-white mb-2">50+ Countries</p>
              <p className="text-black/80 dark:text-white/80">Global Distribution Network</p>
            </div>
          </div>
        </div>
        
        {/* Region Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {regions.map((region, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-pharma-navy dark:text-white mb-2">{region.name}</h3>
              <p className="text-primary dark:text-primary-light font-medium mb-1">{region.count} Countries</p>
              <p className="text-sm text-black/70 dark:text-white/70">{region.countries.join(", ")}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-black/80 dark:text-white/80">
            Our global distribution network ensures reliable and timely delivery of quality pharmaceutical products worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceMap;
