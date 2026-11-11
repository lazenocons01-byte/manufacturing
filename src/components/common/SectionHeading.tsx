import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col ${alignment[align]} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          {align === 'center' && (
            <span className={`w-8 h-[2px] ${light ? 'bg-white/40' : 'bg-[#781C1C]/40'}`} />
          )}
          <span
            className={`text-xs sm:text-sm font-bold uppercase tracking-widest ${
              light ? 'text-[#F8E9E7]' : 'text-[#781C1C]'
            }`}
          >
            {eyebrow}
          </span>
          <span className={`w-8 h-[2px] ${light ? 'bg-white/40' : 'bg-[#781C1C]/40'}`} />
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] ${
          light ? 'text-white' : 'text-[#202124]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-stone-200' : 'text-[#777777]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

