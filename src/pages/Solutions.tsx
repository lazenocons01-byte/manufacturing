import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Factory,
  Store,
  Layers,
  Truck,
  BarChart3,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Calculator
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { solutionsData } from '../data/solutionsData';

export const Solutions: React.FC = () => {
  // Interactive ROI Calculator State
  const [plantUnits, setPlantUnits] = useState(12);
  const [storeCount, setStoreCount] = useState(85);
  const [avgRevenue, setAvgRevenue] = useState(45); // in millions

  // Calculated ROI estimates
  const estAnnualSavings = Math.round(avgRevenue * 0.042 * 10) / 10;
  const downtimeReductionHours = Math.round(plantUnits * 48);
  const stockoutPreventionRate = 89;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Factory': return <Factory className="w-6 h-6 text-[#781C1C]" />;
      case 'Store': return <Store className="w-6 h-6 text-[#781C1C]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#781C1C]" />;
      case 'Truck': return <Truck className="w-6 h-6 text-[#781C1C]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#781C1C]" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-[#781C1C]" />;
      default: return <Factory className="w-6 h-6 text-[#781C1C]" />;
    }
  };

  return (
    <PageLayout>
      {/* Solutions Hero */}
      <section className="py-20 md:py-24 bg-[#FFFCFA] border-b border-[#F0E6E4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-4 py-1.5 rounded-full border border-[#F0D5D2] inline-block mb-4">
            SOLUTIONS ECOSYSTEM
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#202124] tracking-tight leading-tight">
            One Architecture.{' '}
            <span className="text-[#781C1C]">End-to-End Operational Control.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#777777] leading-relaxed max-w-2xl mx-auto">
            From precision robotics on the factory line to high-velocity POS registers at the front store, Machvex harmonizes your physical operations.
          </p>
        </div>
      </section>

      {/* Solutions Full Grid */}
      <section className="py-20 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="MODULAR CAPABILITIES"
            title="Six Core Pillars of the Machvex Platform"
            subtitle="Deploy individual modules or synchronize them together into an autonomous supply loop."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((sol, idx) => (
              <motion.div
                key={sol.id}
                id={sol.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#FFFCFA] rounded-2xl md:rounded-3xl border border-[#F0E6E4] p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#781C1C]/40 transition-all group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F8E9E7] flex items-center justify-center mb-6 border border-[#F0D5D2]">
                    {getIcon(sol.iconName)}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#781C1C] block mb-1">
                    {sol.category}
                  </span>

                  <h3 className="text-2xl font-bold text-[#202124] group-hover:text-[#781C1C] transition-colors mb-3">
                    {sol.title}
                  </h3>

                  <p className="text-sm text-[#777777] leading-relaxed mb-6">
                    {sol.overview}
                  </p>

                  <ul className="space-y-2.5 mb-8 text-xs font-medium text-[#202124]">
                    {sol.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#F0E6E4] flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-extrabold text-[#781C1C] text-lg block">
                      {sol.metrics[0].value}
                    </span>
                    <span className="text-[#777777]">{sol.metrics[0].label}</span>
                  </div>

                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#781C1C] hover:underline"
                  >
                    <span>Full Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Value & ROI Estimator */}
      <section className="py-20 md:py-28 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#F0E6E4] shadow-xl p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Form Controls */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8E9E7] text-[#781C1C] text-xs font-bold">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Interactive Operational ROI Estimator</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202124]">
                  Simulate Your Supply Chain Efficiency Gains
                </h3>

                <p className="text-sm text-[#777777]">
                  Adjust parameters to estimate measurable working capital and downtime savings enabled by Machvex unified synchrony.
                </p>

                {/* Slider 1: Plants */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-[#202124]">
                    <span>Manufacturing Plants:</span>
                    <span className="text-[#781C1C]">{plantUnits} Facilities</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={plantUnits}
                    onChange={(e) => setPlantUnits(Number(e.target.value))}
                    className="w-full accent-[#781C1C] cursor-pointer"
                  />
                </div>

                {/* Slider 2: Stores */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-[#202124]">
                    <span>Retail Storefronts Connected:</span>
                    <span className="text-[#781C1C]">{storeCount} Outlets</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={storeCount}
                    onChange={(e) => setStoreCount(Number(e.target.value))}
                    className="w-full accent-[#781C1C] cursor-pointer"
                  />
                </div>

                {/* Slider 3: Annual Gross Revenue */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-[#202124]">
                    <span>Annual Revenue ($M USD):</span>
                    <span className="text-[#781C1C]">${avgRevenue}M</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={avgRevenue}
                    onChange={(e) => setAvgRevenue(Number(e.target.value))}
                    className="w-full accent-[#781C1C] cursor-pointer"
                  />
                </div>
              </div>

              {/* Calculated Outputs Card */}
              <div className="lg:col-span-6 bg-[#781C1C] text-white rounded-2xl p-8 sm:p-10 shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F8E9E7]">
                  Estimated Annual Economic Value
                </span>

                <div className="mt-4 pb-6 border-b border-white/20">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    ${estAnnualSavings}M
                  </span>
                  <span className="text-xs text-[#F8E9E7]/80 block mt-1">
                    Projected net operational and carrying cost recapture
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-[#F8E9E7]/80 uppercase font-semibold">Unscheduled Stoppage Prevented</span>
                    <span className="text-xl sm:text-2xl font-bold block mt-1">{downtimeReductionHours} hrs/yr</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#F8E9E7]/80 uppercase font-semibold">Stockout Elimination Rate</span>
                    <span className="text-xl sm:text-2xl font-bold block mt-1">{stockoutPreventionRate}%</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <Button
                    to="/request-demo"
                    variant="white"
                    size="md"
                    arrow
                    className="w-full justify-center"
                  >
                    Receive Detailed Value Assessment
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-[#202124]">
            Ready to Explore the Platform in Detail?
          </h2>
          <p className="mt-3 text-base text-[#777777]">
            Connect with our industrial IoT and retail solutions engineers for a customized architecture demonstration.
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
