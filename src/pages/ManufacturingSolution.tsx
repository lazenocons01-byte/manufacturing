import React, { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { solutionsData } from '../data/solutionsData';

export const ManufacturingSolution: React.FC = () => {
  const data = solutionsData.find((s) => s.slug === 'manufacturing') || solutionsData[0];
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const manufacturingFaqs = [
    {
      q: 'How does Machvex connect to legacy PLCs without vendor lock-in?',
      a: 'Machvex deploys hardened industrial edge gateways supporting standard protocol drivers including OPC-UA, MQTT, Modbus TCP, Ethernet/IP, and Profinet. We extract telemetry non-invasively without altering PLC ladder logic or compromising line safety certificates.'
    },
    {
      q: 'What is the sampling frequency for vibration and acoustic predictive maintenance?',
      a: 'Our high-speed edge DAQs capture vibration waveforms at up to 10 kHz for rotating components (bearings, spindles, pump impellers). FFT edge processing extracts spectral anomaly signatures locally, sending compact health vectors to the cloud.'
    },
    {
      q: 'Can Machvex integrate with our existing MES or ERP (e.g., SAP, Rockwell FactoryTalk)?',
      a: 'Yes. Machvex acts as a bidirectional synchronization layer. We consume production orders and BOM recipes from your ERP/MES and publish real-time scrap counts, downtime reasons, and finished good confirmations automatically.'
    }
  ];

  return (
    <PageLayout>
      {/* 1. Dedicated Hero */}
      <section className="py-20 md:py-24 bg-[#FFFCFA] border-b border-[#F0E6E4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-4 py-1.5 rounded-full border border-[#F0D5D2] inline-block mb-4">
                INDUSTRIAL AUTOMATION SUITE
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#202124] tracking-tight leading-tight">
                Smart Manufacturing &{' '}
                <span className="text-[#781C1C]">Predictive Factory Operations</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#777777] leading-relaxed">
                Transform traditional shop floors into connected, autonomous production environments with millisecond machine telemetry, edge AI quality control, and zero-downtime execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/request-demo" variant="primary" size="lg" arrow>
                  Request Shop Floor Pilot
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Speak to an Industrial Specialist
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F0E6E4] group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial Automation Factory Floor"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-xs font-mono bg-emerald-500/80 px-2.5 py-1 rounded w-fit mb-2">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    LINE 04: RUNNING (OEE 92.4%)
                  </div>
                  <h4 className="text-lg font-bold">Continuous Millisecond Machine Telemetry</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Problem Statement vs Solution */}
      <section className="py-20 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* The Industry Challenge */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFF8F8] border border-red-200">
              <div className="flex items-center gap-3 text-red-700 mb-6">
                <AlertTriangle className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-wider">The Operational Challenge</span>
              </div>
              <h3 className="text-2xl font-bold text-[#202124] mb-4">
                Islanded Legacy Equipment and Costly Unplanned Stoppages
              </h3>
              <ul className="space-y-3.5 text-sm text-[#777777]">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Proprietary PLC silos preventing line-wide overall equipment effectiveness (OEE) tracking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Reactive maintenance that costs up to $22,000 per hour during sudden motor or spindle failure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Manual quality checks allowing microscopic defects to escape into final assembly.</span>
                </li>
              </ul>
            </div>

            {/* The Machvex Solution */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8E9E7]/60 border border-[#F0D5D2]">
              <div className="flex items-center gap-3 text-[#781C1C] mb-6">
                <CheckCircle2 className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-wider">The Machvex Solution</span>
              </div>
              <h3 className="text-2xl font-bold text-[#202124] mb-4">
                Non-Invasive Edge Gateways with Predictive Intelligence
              </h3>
              <ul className="space-y-3.5 text-sm text-[#202124]">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Direct OPC-UA & MQTT ingestion normalizing multi-vendor machine metrics instantly.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Predictive acoustics and vibration algorithms providing 14-day advance failure notices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Automated computer-vision quality classification executing at conveyor speeds.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Manufacturing Capabilities */}
      <section className="py-20 md:py-28 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CAPABILITY MATRIX"
            title="Engineered for Precision Industrial Environments"
            subtitle="Seven core modules working in synchronized harmony across your manufacturing cells."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, idx) => (
              <div
                key={feature}
                className="p-6 rounded-2xl bg-white border border-[#F0E6E4] shadow-2xs hover:shadow-md transition-all hover:border-[#781C1C]/40"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C] mb-4 font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-[#202124] mb-2">{feature}</h4>
                <p className="text-xs text-[#777777] leading-relaxed">
                  Real-time telemetry and edge algorithmic execution tailored to eliminate scrap and protect machine throughput.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Workflow Stepper */}
      <section className="py-20 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="EXECUTION PIPELINE"
            title="How Telemetry Flows from Sensor to ERP"
            subtitle="Deterministic four-tier data architecture ensuring continuous shop floor operation."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.workflows.map((wf) => (
              <div key={wf.step} className="p-6 rounded-2xl bg-[#FFFCFA] border border-[#F0E6E4] relative">
                <span className="text-3xl font-extrabold text-[#781C1C]/30 block mb-2">
                  Step 0{wf.step}
                </span>
                <h4 className="text-base font-bold text-[#202124] mb-2">{wf.title}</h4>
                <p className="text-xs text-[#777777] leading-relaxed">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Metrics Benchmark Banner */}
      <section className="py-16 bg-[#781C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {data.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-white/10">
                <span className="text-3xl sm:text-4xl font-extrabold block text-white">{m.value}</span>
                <span className="text-xs text-[#F8E9E7] uppercase font-semibold mt-1 block">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="py-20 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Smart Manufacturing FAQ"
            align="center"
            className="mb-10"
          />

          <div className="space-y-4">
            {manufacturingFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-white border border-[#F0E6E4] overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#202124] flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#781C1C] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#777777] leading-relaxed border-t border-[#F0E6E4]/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-[#202124]">
            Ready to Connect Your Manufacturing Lines?
          </h2>
          <p className="mt-3 text-base text-[#777777]">
            Schedule an edge architecture consultation and live PLC simulation with our engineering specialists.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/request-demo" variant="primary" size="lg" arrow>
              Book Manufacturing Demo
            </Button>
            <Button to="/solutions" variant="outline" size="lg">
              Explore All Solutions
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
