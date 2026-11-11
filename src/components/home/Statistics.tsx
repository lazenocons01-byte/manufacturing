import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShoppingCart, Box, ArrowUpRight, Activity } from 'lucide-react';

export const Statistics: React.FC = () => {
  const stats = [
    {
      id: 'units',
      value: '500+',
      label: 'Manufacturing Units Enabled',
      icon: Activity,
      color: 'text-[#781C1C]'
    },
    {
      id: 'outlets',
      value: '1,200+',
      label: 'Retail Outlets Connected',
      icon: ShoppingCart,
      color: 'text-[#781C1C]'
    },
    {
      id: 'accuracy',
      value: '99.9%',
      label: 'Order Fulfillment Accuracy',
      icon: Box,
      color: 'text-[#781C1C]'
    },
    {
      id: 'efficiency',
      value: '38%',
      label: 'Operational Efficiency',
      arrow: true,
      icon: TrendingUp,
      color: 'text-[#781C1C]'
    }
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-[#F0E6E4] p-6 sm:p-8 md:p-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#F0E6E4]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`flex items-center gap-4 ${idx > 0 ? 'sm:pl-6 lg:pl-8' : ''} ${
                  idx > 0 ? 'pt-4 sm:pt-0' : ''
                }`}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-[#F8E9E7] flex items-center justify-center shrink-0 border border-[#F0D5D2] text-[#781C1C]">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Number & Label */}
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#202124] tracking-tight">
                      {stat.value}
                    </span>
                    {stat.arrow && (
                      <ArrowUpRight className="w-5 h-5 text-[#781C1C] stroke-[3]" />
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#777777] mt-0.5 leading-tight">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Demonstration Disclaimer footnote */}
        <div className="mt-6 pt-4 border-t border-[#F0E6E4] flex items-center justify-between text-[11px] text-[#777777]">
          <span>* Representative platform performance benchmarks based on enterprise demonstration environments.</span>
          <span className="hidden sm:inline font-medium text-[#781C1C]">Machvex Operational Intelligence Engine</span>
        </div>
      </motion.div>
    </section>
  );
};

