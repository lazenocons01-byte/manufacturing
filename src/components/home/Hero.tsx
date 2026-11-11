import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Factory, ShoppingCart, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { VideoModal } from '../common/VideoModal';

export const Hero: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24 lg:pt-12 lg:pb-28 bg-[#FFFCFA]">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-[#F8E9E7]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] rounded-full bg-[#FDF6F5]/60 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8E9E7] text-[#781C1C] text-xs sm:text-sm font-semibold border border-[#F0D5D2] mb-5 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#781C1C]" />
              <span>Manufacturing & Retail Solutions</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#202124] leading-[1.12]"
            >
              Connecting{' '}
              <span className="text-[#781C1C] relative inline-block">
                Manufacturing & Retail
              </span>{' '}
              for a Smarter Supply Chain
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-[#777777] leading-relaxed max-w-xl"
            >
              An integrated platform to plan, produce, manage inventory, and deliver seamless retail experiences through intelligent, connected solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Button
                to="/solutions"
                variant="primary"
                size="lg"
                arrow
                className="w-full sm:w-auto bg-[#781C1C] hover:bg-[#941F24] text-white shadow-md hover:shadow-lg"
              >
                Explore Solutions
              </Button>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border-2 border-stone-300 hover:border-[#781C1C] text-[#202124] hover:text-[#781C1C] bg-white font-semibold text-sm transition-all shadow-2xs hover:shadow cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-[#F8E9E7] group-hover:bg-[#781C1C] flex items-center justify-center text-[#781C1C] group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Overview</span>
              </button>
            </motion.div>

            {/* Live Trust Metrics Micro-banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-6 border-t border-[#F0E6E4] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#777777]"
            >
              <div className="flex items-center gap-1.5 font-medium text-[#202124]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero-Latency Edge Sync</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-[#202124]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Unified Cloud POS</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-[#202124]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Predictive JIT Logistics</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Immersive Connected Industrial & Retail Visual (6 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative w-full"
          >
            {/* Visual Container */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F0E6E4] bg-stone-900 group">
              
              {/* Dual image composite: Left Factory, Right Retail, with angled Maroon Divider */}
              <div className="relative h-[380px] sm:h-[450px] lg:h-[500px] w-full flex overflow-hidden">
                
                {/* Left Half: Modern Manufacturing & Industrial Robotic Arm */}
                <div className="relative w-1/2 h-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
                    alt="Industrial Robotic Arm Manufacturing Line"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Factory Badge */}
                  <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl p-2.5 shadow-md border border-[#F0E6E4] max-w-[150px]">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#781C1C]">
                      <Factory className="w-3.5 h-3.5" />
                      <span>Smart Factory</span>
                    </div>
                    <p className="text-[10px] text-stone-600 mt-0.5 leading-tight">
                      Automated line telemetry & robotics
                    </p>
                  </div>
                </div>

                {/* Right Half: Modern Retail Supermarket & Checkout */}
                <div className="relative w-1/2 h-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=900&q=80"
                    alt="Modern Retail Supermarket and Storefront"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Retail Badge */}
                  <div className="absolute bottom-4 right-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl p-2.5 shadow-md border border-[#F0E6E4] max-w-[150px] text-right">
                    <div className="flex items-center justify-end gap-1.5 text-[11px] font-bold text-[#781C1C]">
                      <span>Retail POS</span>
                      <ShoppingCart className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-[10px] text-stone-600 mt-0.5 leading-tight">
                      Sub-second omnichannel checkout
                    </p>
                  </div>
                </div>

                {/* Center Diagonal Maroon Connector Element */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 bg-gradient-to-b from-[#781C1C]/90 via-[#941F24]/90 to-[#781C1C]/90 transform -skew-x-12 flex items-center justify-center shadow-2xl z-20 pointer-events-none">
                  <div className="w-[1px] h-full bg-white/30" />
                </div>

                {/* Center Interconnected Bridge Badge (as seen in the reference visual) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="flex items-center gap-2 bg-[#781C1C] text-white px-3.5 py-2 rounded-full shadow-2xl border-2 border-white/90">
                    <Factory className="w-4 h-4 text-[#F8E9E7]" />
                    <RefreshCw className="w-3.5 h-3.5 text-white animate-spin" style={{ animationDuration: '6s' }} />
                    <ShoppingCart className="w-4 h-4 text-[#F8E9E7]" />
                  </div>
                </div>

                {/* Floating Real-Time Indicator Tag at top */}
                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono">MACHVEX DATA MESH: SYNCHRONIZED</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Video Walkthrough Modal */}
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </section>
  );
};
