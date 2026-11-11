import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Zap,
  Maximize2,
  Eye,
  Award,
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const WhyChooseUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: 'advanced-tech',
      title: 'Advanced Technology',
      shortDesc: 'Low-latency edge IoT gateways paired with distributed cloud lakehouses.',
      longDesc: 'Built on high-throughput streaming architectures (Kafka, OPC-UA, MQTT) that capture high-frequency shop floor telemetry and retail transaction events without dropping a single frame.',
      icon: Cpu,
      stats: 'Sub-50ms latency',
      tag: 'Edge Native'
    },
    {
      id: 'operational-eff',
      title: 'Operational Efficiency',
      shortDesc: 'Eliminate manual reconciliation and reactive maintenance fire drills.',
      longDesc: 'Predictive algorithms alert engineers before machine bearings overheat, while automated replenishment engines generate supplier purchase orders before safety thresholds breach.',
      icon: Zap,
      stats: '38% Efficiency Gain',
      tag: 'Autonomous'
    },
    {
      id: 'scalable-arch',
      title: 'Scalable Solutions',
      shortDesc: 'Deploy modularly from a single manufacturing cell to thousands of retail stores.',
      longDesc: 'Microservices architecture designed for enterprise multi-tenancy, high-availability multi-region failover, and zero-downtime rolling upgrades.',
      icon: Maximize2,
      stats: '5,000+ Node Ready',
      tag: 'Elastic Cloud'
    },
    {
      id: 'real-time-vis',
      title: 'Real-Time Visibility',
      shortDesc: 'Unified single-pane observability across your entire physical supply chain.',
      longDesc: 'Track raw materials leaving distant supplier ports, monitor their conversion on automated bottling lines, and see their exact presentation depth on supermarket shelves.',
      icon: Eye,
      stats: '100% Audit Trail',
      tag: 'Full Transparency'
    },
    {
      id: 'industry-exp',
      title: 'Industry Expertise',
      shortDesc: 'Engineered specifically for manufacturing engineers and retail directors.',
      longDesc: 'We do not sell generic CRUD software. Our workflows understand PLC ladder logic, OEE metrics, barcode GS1 DataMatrix standards, and supermarket checkout ergonomics.',
      icon: Award,
      stats: '20+ Yrs Industry Core',
      tag: 'Domain Specific'
    },
    {
      id: 'reliable-support',
      title: 'Reliable Support',
      shortDesc: '24/7/365 mission-critical support with guaranteed enterprise SLAs.',
      longDesc: 'Dedicated technical account managers, on-site industrial integration engineers, and 15-minute response times for production-critical operational anomalies.',
      icon: Headphones,
      stats: '15-Min Critical SLA',
      tag: '24/7/365'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFCFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="ENGINEERED FOR SCALE"
          title="Technology That Moves Your Business Forward"
          subtitle="A unified operating system engineered to eliminate the gap between industrial production and consumer retail."
          align="center"
          className="mb-14"
        />

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activeTab === idx;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                onClick={() => setActiveTab(idx)}
                className={`p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#781C1C] shadow-lg ring-2 ring-[#781C1C]/15 -translate-y-1'
                    : 'bg-white hover:bg-[#FDF6F5] border-[#F0E6E4] hover:border-[#781C1C]/30 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#781C1C] text-white'
                          : 'bg-[#F8E9E7] text-[#781C1C]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#781C1C] bg-[#F8E9E7] px-2.5 py-1 rounded-full">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#202124] mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#777777] leading-relaxed mb-4">
                    {pillar.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0E6E4] flex items-center justify-between text-xs font-semibold text-[#202124]">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {pillar.stats}
                  </span>
                  <span className="text-[#781C1C] hover:underline">
                    View Specs
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Pillar Deep-Dive Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-[#F0E6E4] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C]">
              Architecture Deep Dive: {pillars[activeTab].title}
            </span>
            <h4 className="text-xl font-bold text-[#202124] mt-1">
              {pillars[activeTab].stats} Guaranteed Through Enterprise SLA
            </h4>
            <p className="text-sm text-[#777777] mt-2">
              {pillars[activeTab].longDesc}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Button to="/request-demo" variant="primary" size="md" arrow>
              Request Architecture Whitepaper
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

