import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-stone-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#781C1C] text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Play className="w-4 h-4 fill-white text-white ml-0.5" />
              </div>
              <div>
                <h3 className="font-bold text-base">Machvex Platform Architecture</h3>
                <p className="text-xs text-[#F8E9E7]/80">Connected Factory to Storefront Simulation</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Player Simulation */}
          <div className="relative aspect-video bg-stone-900 overflow-hidden flex flex-col justify-between p-6">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80"
              alt="Industrial Automation Overview"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 flex justify-between items-start">
              <span className="text-xs font-mono bg-black/60 text-emerald-400 px-3 py-1 rounded-md border border-emerald-500/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                LIVE SIMULATION ENGINE: ACTIVE
              </span>
              <span className="text-xs text-white/70 font-mono bg-black/60 px-2.5 py-1 rounded">
                02:45 / 03:30
              </span>
            </div>

            <div className="relative z-10 text-white max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F8E9E7] bg-[#781C1C]/70 px-2.5 py-1 rounded">
                Unified Ecosystem Stream
              </span>
              <h4 className="text-xl sm:text-2xl font-bold mt-2">
                Bridging Millisecond Shop-Floor Telemetry with Real-Time Store Checkout
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 line-clamp-2">
                Watch how sensor events from robotic production lines stream through our edge lakehouse, adjusting replenishment algorithms and updating supermarket POS pricing in under 50 milliseconds.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 text-xs">
                <div className="flex items-center gap-1.5 text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>OPC-UA & MQTT Edge</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-Second Cloud POS</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Predictive Safety Stock</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="p-4 sm:p-5 bg-[#FFFCFA] border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#777777] text-center sm:text-left">
              Experience the full Machvex platform tailored to your industrial equipment or retail chain.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={onClose}
                className="w-1/2 sm:w-auto"
              >
                Close Preview
              </Button>
              <Button
                variant="primary"
                size="sm"
                to="/request-demo"
                onClick={onClose}
                arrow
                className="w-1/2 sm:w-auto"
              >
                Schedule Live Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
