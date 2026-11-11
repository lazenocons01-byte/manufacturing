import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { solutionsData } from '../data/solutionsData';

export const RetailSolution: React.FC = () => {
  const data = solutionsData.find((s) => s.slug === 'retail') || solutionsData[1];
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const retailFaqs = [
    {
      q: 'How does Machvex POS maintain offline resilience during network outages?',
      a: 'Each store runs a local containerized edge controller. Cashiers continue scanning, processing local payments, and issuing digital receipts offline. Once Internet service returns, transactions batch sync in the background with zero data loss.'
    },
    {
      q: 'Does Machvex require replacing our existing barcode scanners or touchscreens?',
      a: 'No. Machvex is hardware-agnostic. Our lightweight point-of-sale client runs on modern iOS, Android, Windows, and web-based terminal hardware, interfacing seamlessly with USB/Bluetooth hand scanners, receipt printers, and cash drawers.'
    },
    {
      q: 'How does shelf-edge IoT detect out-of-stock items before customers notice?',
      a: 'We combine overhead low-resolution vision sensors with weight-sensing shelf inserts. When stock levels dip below the calculated minimum presentation depth, an automated handheld task notification is dispatched to store floor associates.'
    }
  ];

  return (
    <PageLayout>
      {/* 1. Hero */}
      <section className="py-20 md:py-24 bg-[#FFFCFA] border-b border-[#F0E6E4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-4 py-1.5 rounded-full border border-[#F0D5D2] inline-block mb-4">
                RETAIL & COMMERCE ENGINE
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#202124] tracking-tight leading-tight">
                Modern Retail Operations &{' '}
                <span className="text-[#781C1C]">Intelligent Storefronts</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#777777] leading-relaxed">
                Connect physical retail stores with live inventory networks, sub-second cloud POS velocity, smart shelf sensors, and seamless omnichannel fulfillment.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/request-demo" variant="primary" size="lg" arrow>
                  Schedule Storefront Demo
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Speak to a Retail Architect
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F0E6E4] group">
                <img
                  src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Retail Supermarket Operations"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-xs font-mono bg-[#781C1C] px-2.5 py-1 rounded w-fit mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    CHECKOUT FLOW: SUB-SECOND
                  </div>
                  <h4 className="text-lg font-bold">Unified POS & Automated Shelf Restock</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Problem vs Solution */}
      <section className="py-20 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFF8F8] border border-red-200">
              <div className="flex items-center gap-3 text-red-700 mb-6">
                <AlertCircle className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-wider">Retail Pain Points</span>
              </div>
              <h3 className="text-2xl font-bold text-[#202124] mb-4">
                Phantom Inventory, Checkout Queues, and Disconnected Associates
              </h3>
              <ul className="space-y-3.5 text-sm text-[#777777]">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Products sitting hidden in backrooms while store shelves stand visibly empty.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Slow legacy POS software freezing during holiday rushes and carrier outages.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Floor associates unable to verify stock across neighboring stores or warehouses.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8E9E7]/60 border border-[#F0D5D2]">
              <div className="flex items-center gap-3 text-[#781C1C] mb-6">
                <CheckCircle2 className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-wider">The Machvex Store Solution</span>
              </div>
              <h3 className="text-2xl font-bold text-[#202124] mb-4">
                Sub-Second POS, Smart Shelf Alerts, and Mobile Clienteling
              </h3>
              <ul className="space-y-3.5 text-sm text-[#202124]">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Autonomous shelf sensors notifying stockroom staff before an item stocks out.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Sub-second optical barcode decoding keeping checkout queues moving briskly.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Mobile associate apps enabling endless aisle order routing and curbside pickup.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Features */}
      <section className="py-20 md:py-28 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="STORE CAPABILITIES"
            title="Complete Retail Operations Platform"
            subtitle="Built to turn physical retail stores into frictionless, high-velocity customer destinations."
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
                  Real-time synchronization between in-store transaction logs and upstream warehouse fulfillment queues.
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
            eyebrow="STORE PIPELINE"
            title="How Storefronts Sync with the Supply Chain"
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.workflows.map((wf) => (
              <div key={wf.step} className="p-6 rounded-2xl bg-[#FFFCFA] border border-[#F0E6E4]">
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

      {/* 5. Metrics Banner */}
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

      {/* 6. Retail FAQ */}
      <section className="py-20 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="RETAIL FREQUENTLY ASKED QUESTIONS"
            title="Retail Operations FAQ"
            align="center"
            className="mb-10"
          />

          <div className="space-y-4">
            {retailFaqs.map((faq, index) => {
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
            Elevate Your Retail Store Network
          </h2>
          <p className="mt-3 text-base text-[#777777]">
            Schedule an interactive store POS and shelf-edge sensor demonstration today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/request-demo" variant="primary" size="lg" arrow>
              Book Retail Demo
            </Button>
            <Button to="/solutions" variant="outline" size="lg">
              View All Solutions
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
