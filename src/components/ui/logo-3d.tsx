
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
  width = 50, 
  height = 50, 
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
