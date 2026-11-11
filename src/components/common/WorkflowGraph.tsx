import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, Layers, Truck, ShoppingCart, ArrowRight, CheckCircle2 } from 'lucide-react';

export const WorkflowGraph: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      name: 'MANUFACTURING',
      label: 'Shop Floor & Robotics',
      icon: Factory,
      metric: 'OEE: 91.4%',
      status: 'Synchronized',
      details: 'Automated assembly lines, robotics telemetry, and dynamic recipe batching.'
    },
    {
      id: 1,
      name: 'INVENTORY',
      label: 'Multi-Node Intelligence',
      icon: Layers,
      metric: 'Accuracy: 99.9%',
      status: 'Live Buffer',
      details: 'Continuous factory buffer visibility with predictive reorder points.'
    },
    {
      id: 2,
      name: 'DISTRIBUTION',
      label: 'Connected Logistics',
      icon: Truck,
      metric: 'OTIF: 98.8%',
      status: 'In Transit',
      details: 'Cold-chain telemetry, dynamic dock appointments, and carrier sync.'
    },
    {
      id: 3,
      name: 'RETAIL',
      label: 'Storefront & Modern POS',
      icon: ShoppingCart,
      metric: 'Throughput: +42%',
      status: 'On Shelf',
      details: 'Smart shelf-edge sensors, sub-second POS checkout, and omnichannel sync.'
    }
  ];

  return (
    <div className="w-full bg-[#FFFCFA] border border-[#F0E6E4] rounded-2xl p-6 md:p-8 shadow-xs">
      <div className="text-center mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#781C1C] bg-[#F8E9E7] px-3 py-1 rounded-full">
          Unified Digital Thread
        </span>
        <h4 className="text-lg md:text-xl font-bold text-[#202124] mt-2">
          End-to-End Operational Pipeline
        </h4>
      </div>

      {/* Workflow nodes desktop / tablet */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer group relative p-5 rounded-xl border transition-all duration-300 text-center flex flex-col items-center ${
                isActive
                  ? 'bg-white border-[#781C1C] shadow-md ring-2 ring-[#781C1C]/15 -translate-y-1'
                  : 'bg-white/70 hover:bg-white border-[#F0E6E4] hover:border-[#781C1C]/40'
              }`}
            >
              {/* Connector arrow for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#781C1C] text-white items-center justify-center shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-colors ${
                  isActive ? 'bg-[#781C1C] text-white shadow-sm' : 'bg-[#F8E9E7] text-[#781C1C]'
                }`}
              >
                <Icon className="w-7 h-7" />
              </div>

              <span className="text-xs font-extrabold uppercase tracking-wider text-[#781C1C] mb-1">
                {step.name}
              </span>

              <h5 className="font-bold text-sm text-[#202124] mb-2">{step.label}</h5>

              <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{step.metric}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active step details panel */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-6 bg-[#F8E9E7]/60 border border-[#F0D5D2] rounded-xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#781C1C]">
              Active Node: {steps[activeStep].name}
            </span>
            <p className="text-sm text-[#202124] mt-0.5 font-medium">
              {steps[activeStep].details}
            </p>
          </div>
        </div>

        <div className="shrink-0 text-xs font-semibold text-[#781C1C] bg-white px-3 py-1.5 rounded-lg border border-[#F0D5D2]">
          Status: {steps[activeStep].status}
        </div>
      </motion.div>
    </div>
  );
};

