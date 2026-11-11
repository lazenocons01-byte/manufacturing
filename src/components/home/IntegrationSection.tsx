import React from 'react';
import { motion } from 'framer-motion';
import { Check, Settings, ShoppingCart, ArrowUpRight } from 'lucide-react';
import { WorkflowGraph } from '../common/WorkflowGraph';
import { Button } from '../common/Button';

export const IntegrationSection: React.FC = () => {
  const benefits = [
    'Real-time production & retail visibility',
    'Smarter demand & inventory planning',
    'Faster order fulfillment',
    'Lower operational costs',
    'Higher customer satisfaction'
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFCFA] border-y border-[#F0E6E4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-3.5 py-1 rounded-full border border-[#F0D5D2]">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#202124] tracking-tight mt-3">
            A Unified Platform from Factory to Front Store
          </h2>
          <p className="mt-3 text-base text-[#777777]">
            Bring production, inventory, logistics, and retail operations together with one intelligent digital ecosystem.
          </p>
        </div>

        {/* 3-Column Layout (Matching user reference layout precisely) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: Automated Bottling / Production Line (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#F0E6E4] group h-[340px] sm:h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80"
              alt="Automated Conveyor Production Line"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating Metric Card (as seen in reference) */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C]">
                  <Settings className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#777777] block">Manufacturing Efficiency</span>
                  <div className="flex items-center gap-1 text-xl font-extrabold text-[#781C1C]">
                    <span>↑ 38%</span>
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#781C1C]" />
            </div>
          </motion.div>

          {/* Center Column: Core Benefits Checklist & CTA (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col justify-center px-2 sm:px-4 text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#202124] mb-3 leading-snug">
              Eliminate Islanded Operations and Eliminate Friction
            </h3>
            <p className="text-sm text-[#777777] mb-6 leading-relaxed">
              When factory control loops communicate in real time with retail checkout scanners, the entire business moves in synchronized harmony.
            </p>

            {/* Checklist with Deep Maroon Rounded Icons */}
            <ul className="space-y-3.5 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#781C1C] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[#202124]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Button to="/request-demo" variant="primary" size="md" arrow>
                Book Platform Demo
              </Button>
              <Button to="/about" variant="ghost" size="md">
                Learn Our Story
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Supermarket Shelves & Shopping Cart (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#F0E6E4] group h-[340px] sm:h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
              alt="Modern Retail Supermarket and Cart"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating Metric Card (as seen in reference) */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C]">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#777777] block">Retail Sales Growth</span>
                  <div className="flex items-center gap-1 text-xl font-extrabold text-[#781C1C]">
                    <span>↑ 42%</span>
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#781C1C]" />
            </div>
          </motion.div>

        </div>

        {/* Visual Workflow: MANUFACTURING -> INVENTORY -> DISTRIBUTION -> RETAIL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <WorkflowGraph />
        </motion.div>

      </div>
    </section>
  );
};

