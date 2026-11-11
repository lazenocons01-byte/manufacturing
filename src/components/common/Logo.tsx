import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', size = 'md' }) => {
  const isLight = variant === 'light';
  
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11'
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-95 ${className}`}>
      {/* Machvex Stylized Geometric M Mark */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xs">
          {/* Left Wing Facet */}
          <path d="M4 36L14 8L22 22L14 36H4Z" fill="#781C1C" />
          {/* Right Wing Facet */}
          <path d="M22 22L30 8L40 36H30L22 22Z" fill="#941F24" />
          {/* Top Inverted Chevron Bridge */}
          <path d="M14 8L22 22L30 8H14Z" fill="#B52B25" />
          {/* Bottom Center Anchor */}
          <path d="M18 36L22 30L26 36H18Z" fill="#781C1C" opacity="0.8" />
        </svg>
      </div>

      <span className={`font-display font-extrabold tracking-tight ${textSizes[size]} ${isLight ? 'text-white' : 'text-[#202124]'}`}>
        Machvex
      </span>
    </Link>
  );
};

