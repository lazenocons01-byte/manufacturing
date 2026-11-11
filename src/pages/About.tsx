import React from 'react';
import {
  ShieldCheck,
  Layers,
  Sparkles,
  Leaf,
  Factory,
  Store,
  CheckCircle2,
  Cpu,
  Globe2
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { companyInfo } from '../data/companyData';

export const About: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#781C1C]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#781C1C]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#781C1C]" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-[#781C1C]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#781C1C]" />;
    }
  };

  return (
    <PageLayout>
      {/* 1. About Machvex Hero */}
      <section className="py-20 md:py-24 bg-[#FFFCFA] border-b border-[#F0E6E4] relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#F8E9E7] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-4 py-1.5 rounded-full border border-[#F0D5D2] inline-block mb-4">
            ABOUT MACHVEX
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#202124] tracking-tight leading-tight">
            Connecting Physical Production with{' '}
            <span className="text-[#781C1C]">Every Customer Touchpoint</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#777777] leading-relaxed max-w-2xl mx-auto">
            Machvex exists to bridge the historic divide between industrial shop floors and modern retail storefronts through a unified, zero-latency digital thread.
          </p>
        </div>
      </section>

      {/* 2. Company Introduction & Heritage */}
      <section className="py-20 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-[#202124]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C]">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                An Operating System for the Modern Physical Economy
              </h2>
              <p className="text-[#777777] leading-relaxed">
                For over a century, manufacturing enterprises and retail merchants operated as two completely disconnected worlds. Factories optimized for massive batches and minimum unit costs, blind to real-time consumer shopping patterns. Retailers struggled with out-of-stock displays, excess carrying costs, and checkout friction.
              </p>
              <p className="text-[#777777] leading-relaxed">
                Machvex was founded to dissolve this divide. By combining low-latency edge gateways that capture sensor telemetry from heavy industrial machinery with sub-second cloud point-of-sale systems, we provide businesses with a singular nervous system.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F8E9E7]/60 border border-[#F0D5D2]">
                  <span className="text-2xl font-extrabold text-[#781C1C] block">Sub-50ms</span>
                  <span className="text-xs font-semibold text-[#777777]">Telemetry Ingestion Latency</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F8E9E7]/60 border border-[#F0D5D2]">
                  <span className="text-2xl font-extrabold text-[#781C1C] block">100%</span>
                  <span className="text-xs font-semibold text-[#777777]">Edge Autonomous Resilience</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F0E6E4]">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern industrial operations"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-mono bg-[#781C1C] px-3 py-1 rounded-full uppercase tracking-wider">
                    Edge Lakehouse Architecture
                  </span>
                  <h4 className="text-lg font-bold mt-2">
                    Synchronizing heavy machinery with front-line retail registers
                  </h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-20 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#F0E6E4] shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C] mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] block mb-2">
                OUR VISION
              </span>
              <h3 className="text-2xl font-bold text-[#202124] mb-4">
                The Autonomous Nervous System for Global Commerce
              </h3>
              <p className="text-sm text-[#777777] leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#F0E6E4] shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C] mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] block mb-2">
                OUR MISSION
              </span>
              <h3 className="text-2xl font-bold text-[#202124] mb-4">
                Eliminating Friction Between Factory and Shelf
              </h3>
              <p className="text-sm text-[#777777] leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 md:py-28 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="OUR OPERATING PRINCIPLES"
            title="Core Values Driving Machvex"
            subtitle="The fundamental commitments that guide our engineering, product architecture, and customer partnerships."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.values.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-[#FFFCFA] border border-[#F0E6E4] hover:border-[#781C1C]/40 transition-all hover:-translate-y-1 shadow-2xs hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F8E9E7] flex items-center justify-center mb-5">
                  {getIcon(val.icon)}
                </div>
                <h4 className="text-lg font-bold text-[#202124] mb-2">{val.title}</h4>
                <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5 & 6. Manufacturing & Retail Dual Capabilities */}
      <section className="py-20 md:py-28 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="DUAL DOMAIN MASTERY"
            title="Bridging the Shop Floor with Front-Line Retail"
            subtitle="Deep architectural capability built specifically for industrial operators and store networks."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Manufacturing Wing */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#F0E6E4] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C]">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C]">Domain 01</span>
                  <h3 className="text-xl font-bold text-[#202124]">Industrial Manufacturing Expertise</h3>
                </div>
              </div>

              <p className="text-sm text-[#777777] leading-relaxed mb-6">
                Direct integration with Rockwell, Siemens, Beckhoff, ABB, and Fanuc industrial control networks. Zero-overhead edge data translation with millisecond determinism.
              </p>

              <ul className="space-y-3 text-sm text-[#202124]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781C1C]" />
                  <span>OPC-UA, MQTT, and Modbus native edge ingest</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781C1C]" />
                  <span>Acoustic and vibration predictive maintenance ML</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781C1C]" />
                  <span>Dynamic line balance & batch recipe configuration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781C1C]" />
                  <span>Automated OEE analytics and root-cause loss pareto</span>
                </li>
              </ul>
            </div>

            {/* Retail Wing */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#F0E6E4] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C]">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C]">Domain 02</span>
                  <h3 className="text-xl font-bold text-[#202124]">Omnichannel Retail Expertise</h3>
                </div>
              </div>

              <p className="text-sm text-[#777777] leading-relaxed mb-6">
                Cloud-native store engine supporting offline checkout, shelf-edge sensor networks, handheld associate clienteling, and cross-store fulfillment routing.
              </p>

              <ul className="space-y-3 text-sm text-[#202124]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781C1C]" />
                  <span>Sub-second optical barcode decoding and cloud POS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781C1C]" />
                  <span>Camera-aided smart shelf out-of-stock notifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781C1C]" />
                  <span>Automated backroom-to-shelf replenishment task queues</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781C1C]" />
                  <span>Unified BOPIS, curbside pickup, and ship-from-store</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Technology & Innovation Architecture */}
      <section className="py-20 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#781C1C] rounded-3xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F8E9E7] bg-white/10 px-3 py-1 rounded-full">
                ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4">
                The Machvex Edge-to-Lakehouse Fabric
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#F8E9E7]/90 leading-relaxed">
                By maintaining local edge computing clusters inside physical factories and storefronts, our software continues executing offline with sub-second responsiveness, then continuously reconciles with central lakehouses via conflict-free data types.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-xs font-semibold">Edge Kafka Streams</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-xs font-semibold">Deterministic TSN</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-xs font-semibold">Zero-Trust mTLS 1.3</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-xs font-semibold">Predictive Yield Models</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-xs font-semibold">Sub-Second Cloud POS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Leadership Team */}
      <section id="leadership" className="py-20 md:py-28 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="LEADERSHIP & ADVISORY"
            title="Engineered by Industry Specialists"
            subtitle="Demonstration leadership profiles reflecting our deep bench in industrial automation and retail technology."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyInfo.leadership.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden border border-[#F0E6E4] shadow-xs hover:shadow-lg transition-all group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="text-base font-bold text-[#202124]">{member.name}</h4>
                  <p className="text-xs font-semibold text-[#781C1C] mt-0.5">{member.role}</p>
                  <p className="text-xs text-[#777777] mt-3 leading-relaxed">{member.bio}</p>
                  <div className="mt-4 pt-3 border-t border-[#F0E6E4]">
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#781C1C] hover:underline"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                      <span>Executive Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124]">
            Experience the Future of Connected Manufacturing & Retail
          </h2>
          <p className="mt-4 text-base text-[#777777] max-w-xl mx-auto">
            Schedule an interactive architecture review with our enterprise engineering team.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/request-demo" variant="primary" size="lg" arrow>
              Request a Live Demo
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
