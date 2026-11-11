import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blush' | 'maroon' | 'outline' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blush',
  size = 'md',
  className = '',
  icon
}) => {
  const variantStyles = {
    blush: 'bg-[#F8E9E7] text-[#781C1C] border border-[#F0D5D2]',
    maroon: 'bg-[#781C1C] text-white',
    outline: 'border border-[#781C1C]/30 text-[#781C1C] bg-white',
    neutral: 'bg-stone-100 text-[#202124] border border-stone-200'
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-1 font-semibold uppercase tracking-wider',
    md: 'text-xs sm:text-sm px-3.5 py-1.5 font-semibold tracking-wide'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

