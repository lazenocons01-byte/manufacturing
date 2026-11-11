import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Car,
  Utensils,
  Activity,
  Cpu,
  Scissors,
  PackageCheck,
  Boxes,
  ShoppingCart,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { industriesData } from '../../data/industriesData';

export const IndustriesGrid: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Car': return <Car className="w-5 h-5" />;
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      case 'PackageCheck': return <PackageCheck className="w-5 h-5" />;
      case 'Boxes': return <Boxes className="w-5 h-5" />;
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5" />;
      default: return <Car className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FFFCFA] border-t border-[#F0E6E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="SECTOR EXPERTISE"
            title={
              <span>
                Industries <span className="text-[#781C1C]">We Serve</span>
              </span>
            }
            subtitle="Tailored industrial IoT and retail workflows built for high-throughput sectors."
            align="left"
            className="md:max-w-2xl"
          />

          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#781C1C] hover:text-[#941F24] transition-colors group shrink-0"
          >
            <span>View All 8 Industry Solutions</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link
                to={`/industries/${industry.slug}`}
                className="group relative block h-[320px] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-[#F0E6E4]"
              >
                {/* Background Photography */}
                <img
                  src={industry.imageUrl}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay with Deep Maroon tint on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-[#781C1C]/90 group-hover:via-black/50 transition-colors duration-500" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                  {getIcon(industry.iconName)}
                </div>

                {/* Content at Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-10 text-white">
                  <h3 className="text-lg font-bold group-hover:text-white transition-colors leading-snug">
                    {industry.name}
                  </h3>

                  <p className="text-xs text-stone-200 mt-1 line-clamp-2 leading-relaxed">
                    {industry.tagline}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#F8E9E7] group-hover:underline">
                    <span>Explore Sector</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

