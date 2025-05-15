
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Loading = () => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 15) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Loader Ring */}
        <div className="relative w-16 h-16">
          {/* Outer spinning ring */}
          <div 
            className="absolute inset-0 border-4 border-t-primary border-r-primary-light border-b-accent border-l-muted rounded-full"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
          
          {/* Inner spinning ring - opposite direction */}
          <div 
            className="absolute inset-1 border-4 border-t-accent border-r-muted border-b-primary border-l-primary-light rounded-full"
            style={{ transform: `rotate(${-rotation * 1.5}deg)` }}
          />
          
          {/* Pulsing center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-primary rounded-full animate-pulse-subtle" />
          </div>
        </div>
        
        {/* Text with fade-in animation */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-base font-medium text-primary animate-fade-in">Loading</p>
          <div className="flex space-x-1">
            <Dot delay={0} />
            <Dot delay={300} />
            <Dot delay={600} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Animated dot component
const Dot = ({ delay = 0 }: { delay?: number }) => {
  return (
    <span 
      className="w-1.5 h-1.5 bg-primary-light rounded-full animate-bounce" 
      style={{ 
        animationDuration: '1s',
        animationDelay: `${delay}ms`,
        opacity: 0.8
      }}
    />
  );
};
