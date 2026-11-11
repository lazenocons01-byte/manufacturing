import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { testimonialsData } from '../../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FFFCFA] border-t border-[#F0E6E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CLIENT PERSPECTIVES"
          title={
            <span>
              Trusted by <span className="text-[#781C1C]">Industry Leaders</span>
            </span>
          }
          subtitle="How enterprise operations teams coordinate high-throughput plants and store chains with Machvex."
          align="center"
          className="mb-14"
        />

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl md:rounded-3xl p-7 sm:p-8 border border-[#F0E6E4] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              {/* Quote mark decoration */}
              <div className="w-10 h-10 rounded-xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C] mb-6">
                <Quote className="w-5 h-5 fill-current" />
              </div>

              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-4 text-amber-500">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="text-sm sm:text-base text-[#202124] italic leading-relaxed mb-6 flex-1">
                "{item.content}"
              </p>

              {/* Author profile */}
              <div className="pt-5 border-t border-[#F0E6E4] flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#F0D5D2]"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#202124]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#781C1C] font-semibold">
                    {item.role}
                  </p>
                  <span className="text-[11px] text-[#777777] block">
                    {item.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center text-xs text-[#777777]">
          * Demonstration enterprise feedback scenarios representative of platform operational impact.
        </div>

      </div>
    </section>
  );
};

