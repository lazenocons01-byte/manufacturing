import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Layers, BarChart2, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PlatformRibbon: React.FC = () => {
  const pillars = [
    {
      title: 'Improve Productivity',
      icon: Settings
    },
    {
      title: 'Reduce Costs',
      icon: Layers
    },
    {
      title: 'Optimize Inventory',
      icon: BarChart2
    },
    {
      title: 'Enhance Customer Experience',
      icon: Users
    }
  ];

  return (
    <section className="py-8 bg-[#FFFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#781C1C] via-[#941F24] to-[#781C1C] text-white p-6 md:p-8 shadow-xl overflow-hidden border border-[#941F24]"
        >
          {/* Subtle curved background accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-6 lg:gap-8">
            
            {/* Left Headline */}
            <div className="text-center xl:text-left shrink-0">
              <span className="text-sm font-semibold text-[#F8E9E7]/80 block">
                One Platform for
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-0.5">
                Manufacturing & Retail
              </h3>
            </div>

            {/* Center 4 Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full xl:w-auto">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex flex-col items-center text-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-2 text-[#F8E9E7]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-white/95 leading-tight">
                      {pillar.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 w-full xl:w-auto flex justify-center">
              <Link
                to="/request-demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F8E9E7] text-[#781C1C] font-bold text-sm tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 group"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

