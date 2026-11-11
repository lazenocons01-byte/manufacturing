import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Factory,
  Store,
  Layers,
  Truck,
  BarChart3,
  Leaf,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { solutionsData } from '../../data/solutionsData';

export const SolutionsGrid: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Factory':
        return <Factory className="w-6 h-6 text-[#781C1C]" />;
      case 'Store':
        return <Store className="w-6 h-6 text-[#781C1C]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#781C1C]" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#781C1C]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#781C1C]" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-[#781C1C]" />;
      default:
        return <Factory className="w-6 h-6 text-[#781C1C]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FFFCFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR SOLUTIONS"
          title={
            <span>
              Built for <span className="text-[#781C1C]">Manufacturing & Retail</span>
            </span>
          }
          subtitle="Powering smarter operations through connected technology."
          align="center"
          className="mb-14"
        />

        {/* 6 Cards Grid (Matching reference screenshot styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutionsData.map((solution, index) => {
            const isFirst = index === 0;

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  to={`/solutions/${solution.slug}`}
                  className={`group block h-full p-8 rounded-2xl transition-all duration-300 relative border ${
                    isFirst
                      ? 'bg-[#F8E9E7] border-[#F0D5D2] shadow-sm hover:shadow-md hover:-translate-y-1'
                      : 'bg-white hover:bg-[#FDF6F5] border-[#F0E6E4] hover:border-[#781C1C]/40 shadow-xs hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  {/* Subtle top maroon accent line on hover */}
                  <div className="absolute top-0 left-8 right-8 h-[3px] bg-[#781C1C] opacity-0 group-hover:opacity-100 rounded-b-md transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-[#F0D5D2] flex items-center justify-center mb-6 group-hover:bg-[#781C1C] transition-colors duration-300">
                    <span className="group-hover:text-white transition-colors duration-300">
                      {getIcon(solution.iconName)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#202124] group-hover:text-[#781C1C] transition-colors mb-2.5">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#777777] leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Learn More link */}
                  <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-[#781C1C] group-hover:underline">
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

