
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface Logo3DProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo3D = ({ size = 'md', showText = true }: Logo3DProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    
    // Calculate mouse position relative to element
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Limit rotation angle
    const maxRotate = 10;
    const rotationX = Math.max(-maxRotate, Math.min(maxRotate, y / 10));
    const rotationY = Math.max(-maxRotate, Math.min(maxRotate, -x / 10));
    
    setRotateX(rotationX);
    setRotateY(rotationY);
  };
  
  const handleMouseLeave = () => {
    // Smoothly reset to initial position
    setRotateX(0);
    setRotateY(0);
  };

  const sizesMap = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  const textSizesMap = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <NavLink to="/" className="flex items-center gap-3 group">
      <div 
        className="relative perspective-1000"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="logo-3d transition-all duration-300"
          style={{ 
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`,
          }}
        >
          <img
            src="/lovable-uploads/87979321-9460-40c4-ac9d-f1676911aaf6.png"
            alt="Baker & Davis Logo"
            className={`w-auto ${sizesMap[size]} drop-shadow-[0_0_10px_rgba(40,53,147,0.3)] filter-none transition-all duration-300`}
          />
          {/* Reflection effect */}
          <div 
            className="absolute top-full left-0 w-full h-1/3 bg-gradient-to-b from-pharma-navy/30 to-transparent -mt-2 origin-top transform scale-y-50 blur-sm opacity-50"
            style={{ transformStyle: 'preserve-3d' }}
          ></div>
        </div>
      </div>
      
      {showText && (
        <span className={`font-bold ${textSizesMap[size]} text-pharma-navy drop-shadow-sm hidden sm:inline-block transition-colors duration-300`}>
          Baker & Davis
        </span>
      )}
    </NavLink>
  );
};

export default Logo3D;
