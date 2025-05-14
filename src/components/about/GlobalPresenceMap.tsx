
import { useEffect, useRef } from "react";
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

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize map when component mounts
    if (!mapRef.current) return;

    // Safety check to prevent multiple initializations
    if (mapRef.current.querySelector('iframe')) return;

    // Create an iframe for the Google Maps embed
    const iframe = document.createElement('iframe');
    
    // Set attributes for the iframe
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = '0';
    iframe.loading = 'lazy';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    
    // Set the Google Maps embed URL centered on the world view
    iframe.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115945204.53685636!2d0!3d30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1621612555576!5m2!1sen!2sus";
    
    // Add the iframe to the map container
    mapRef.current.appendChild(iframe);

    // Clean up on unmount
    return () => {
      if (mapRef.current && mapRef.current.querySelector('iframe')) {
        mapRef.current.innerHTML = '';
      }
    };
  }, []);

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
          {/* Map container */}
          <div ref={mapRef} className="absolute inset-0">
            {/* Map will be loaded here via JavaScript */}
          </div>
          
          {/* Overlay with key locations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-5 right-5 bg-white/80 dark:bg-card/80 p-4 rounded-lg shadow-md backdrop-blur-sm z-10">
              <p className="text-xl font-bold text-pharma-navy dark:text-white">50+ Countries</p>
              <p className="text-sm text-black/70 dark:text-white/70">Global Distribution Network</p>
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
