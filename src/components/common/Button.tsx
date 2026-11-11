import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light' | 'white';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  arrow?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  arrow = false,
  icon,
  iconPosition = 'left',
  isLoading = false,
  children,
  className = '',
  disabled,
  ...rest
}) => {
  const sizeClasses = {
    sm: 'text-xs font-semibold px-4 py-2 rounded-full gap-1.5',
    md: 'text-sm font-semibold px-6 py-2.5 rounded-full gap-2',
    lg: 'text-base font-semibold px-8 py-3.5 rounded-full gap-2.5'
  };

  const variantClasses = {
    primary:
      'bg-[#781C1C] hover:bg-[#941F24] text-white shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]',
    secondary:
      'bg-[#941F24] hover:bg-[#781C1C] text-white shadow-sm transition-all duration-200 active:scale-[0.98]',
    outline:
      'border-2 border-[#781C1C] text-[#781C1C] hover:bg-[#F8E9E7]/50 transition-all duration-200 active:scale-[0.98]',
    ghost:
      'text-[#781C1C] hover:bg-[#F8E9E7] transition-colors duration-200',
    light:
      'bg-[#F8E9E7] text-[#781C1C] hover:bg-[#F0D5D2] transition-colors duration-200',
    white:
      'bg-white text-[#781C1C] hover:bg-[#F8E9E7] shadow-sm hover:shadow transition-all duration-200'
  };

  const combinedClasses = `inline-flex items-center justify-center font-sans tracking-wide cursor-pointer select-none transition-all focus:outline-none focus:ring-2 focus:ring-[#781C1C]/40 disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
      {!isLoading && icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      {!isLoading && arrow && <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${combinedClasses}`}>
        {content}
      </a>
    );
  }

  return (
    <button disabled={disabled || isLoading} className={`group ${combinedClasses}`} {...rest}>
      {content}
    </button>
  );
};

