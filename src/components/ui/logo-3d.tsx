
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Logo3DProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  linkTo?: string;
}

export function Logo3D({ 
  src, 
  alt, 
  width = 60, 
  height = 60, 
  className = '',
  linkTo = '/'
}: Logo3DProps) {
  const LogoContent = (
    <div className={`logo-3d ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height}
        loading="eager"
        className="object-contain"
        style={{ 
          filter: 'drop-shadow(0 10px 15px rgba(40,53,147,0.4))',
        }}
      />
    </div>
  );

  if (linkTo) {
    return (
      <NavLink to={linkTo} aria-label={`${alt} - go to homepage`}>
        {LogoContent}
      </NavLink>
    );
  }

  return LogoContent;
}

export default Logo3D;
