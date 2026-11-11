import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#781C1C] text-white relative overflow-hidden">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#941F24] rounded-full blur-3xl opacity-60 pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/30 rounded-full blur-3xl opacity-40 pointer-events-none -ml-20 -mb-20" />
      
      {/* Subtle industrial blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#F8E9E7] bg-white/10 px-4 py-1.5 rounded-full inline-block mb-6 border border-white/20">
            CONNECT FACTORY TO STOREFRONT
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Transform Your Manufacturing & Retail Operations?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-[#F8E9E7]/90 max-w-2xl mx-auto leading-relaxed">
            Let's build smarter, more connected, and more efficient business operations together. Talk to our engineering specialists today.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/request-demo"
              variant="white"
              size="lg"
              arrow
              className="shadow-xl hover:shadow-2xl"
            >
              Request a Demo
            </Button>

            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/15"
            >
              Contact Our Team
            </Button>
          </div>

          <p className="mt-8 text-xs text-[#F8E9E7]/70">
            Rapid 30-day proof-of-value pilots available for qualified enterprise operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

