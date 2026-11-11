import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Car,
  Utensils,
  Activity,
  Cpu,
  Scissors,
  PackageCheck,
  Boxes,
  ShoppingCart,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { industriesData } from '../data/industriesData';

export const Industries: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Car': return <Car className="w-6 h-6 text-[#781C1C]" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-[#781C1C]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#781C1C]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#781C1C]" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-[#781C1C]" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6 text-[#781C1C]" />;
      case 'Boxes': return <Boxes className="w-6 h-6 text-[#781C1C]" />;
      case 'ShoppingCart': return <ShoppingCart className="w-6 h-6 text-[#781C1C]" />;
      default: return <Car className="w-6 h-6 text-[#781C1C]" />;
    }
  };

  return (
    <PageLayout>
      {/* Industries Hero */}
      <section className="py-20 md:py-24 bg-[#FFFCFA] border-b border-[#F0E6E4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-4 py-1.5 rounded-full border border-[#F0D5D2] inline-block mb-4">
            SECTOR SPECIALIZATION
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#202124] tracking-tight leading-tight">
            Engineered for High-Throughput{' '}
            <span className="text-[#781C1C]">Industrial & Retail Sectors</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#777777] leading-relaxed max-w-2xl mx-auto">
            Discover how Machvex tailors its edge telemetry, quality computer vision, and retail point-of-sale platforms to your industry requirements.
          </p>
        </div>
      </section>

      {/* 8 Industries Deep Cards */}
      <section className="py-20 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industriesData.map((ind, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-10 rounded-3xl bg-[#FFFCFA] border border-[#F0E6E4] hover:shadow-xl transition-shadow ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Half */}
                <div className={`lg:col-span-6 relative rounded-2xl overflow-hidden shadow-lg h-[340px] ${isEven ? 'lg:order-2' : ''}`}>
                  <img
                    src={ind.imageUrl}
                    alt={ind.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                    <span className="text-xs font-mono bg-[#781C1C] px-3 py-1 rounded-full uppercase">
                      Sector Blueprint
                    </span>
                    <span className="text-xs text-stone-200">
                      {ind.impactStats[0].label}: <strong>{ind.impactStats[0].value}</strong>
                    </span>
                  </div>
                </div>

                {/* Content Half */}
                <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8E9E7] flex items-center justify-center border border-[#F0D5D2]">
                      {getIcon(ind.iconName)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#781C1C]">
                      Industry Sector 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202124]">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#781C1C]">
                    {ind.tagline}
                  </p>

                  <p className="text-sm text-[#777777] leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#202124] block">
                      Targeted Solutions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#777777]">
                      {ind.machvexSolutions.map((sol) => (
                        <li key={sol} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#781C1C] hover:bg-[#941F24] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <span>Explore {ind.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Button to="/request-demo" variant="outline" size="sm">
                      Request Pilot
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FFFCFA] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-[#202124]">
            Don't See Your Specific Manufacturing or Retail Vertical?
          </h2>
          <p className="mt-3 text-base text-[#777777]">
            Our modular OPC-UA and API adapters integrate with custom industrial equipment and proprietary store architectures.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" arrow>
              Consult with Solutions Team
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
