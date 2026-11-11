import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { solutionsData } from '../data/solutionsData';

export const InventorySolution: React.FC = () => {
  const data = solutionsData.find((s) => s.slug === 'inventory') || solutionsData[2];

  return (
    <PageLayout>
      <section className="py-20 md:py-24 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-4 py-1.5 rounded-full border border-[#F0D5D2] inline-block mb-4">
            INVENTORY INTELLIGENCE
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#202124] tracking-tight leading-tight">
            Multi-Echelon Real-Time{' '}
            <span className="text-[#781C1C]">Inventory Visibility</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#777777] leading-relaxed max-w-2xl mx-auto">
            Eliminate stockouts, optimize working capital, and automate procurement thresholds across raw materials, work-in-progress, and store shelves.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/request-demo" variant="primary" size="lg" arrow>
              Request Inventory Demo
            </Button>
            <Button to="/solutions" variant="outline" size="lg">
              Explore All Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Overview & Features */}
      <section className="py-20 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C]">
                AUTONOMOUS REPLENISHMENT
              </span>
              <h2 className="text-3xl font-extrabold text-[#202124]">
                Know Exactly What Exists at Every Link of Your Chain
              </h2>
              <p className="text-sm sm:text-base text-[#777777] leading-relaxed">
                {data.overview}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {data.metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-xl bg-[#F8E9E7]/60 border border-[#F0D5D2]">
                    <span className="text-2xl font-extrabold text-[#781C1C] block">{m.value}</span>
                    <span className="text-xs font-semibold text-[#777777]">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#F0E6E4]">
                <img
                  src={data.imageUrl}
                  alt="Inventory Intelligence"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature List */}
      <section className="py-20 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CAPABILITIES"
            title="Intelligent Stock Synchronization"
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f, i) => (
              <div key={f} className="p-6 rounded-2xl bg-white border border-[#F0E6E4] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#F8E9E7] text-[#781C1C] flex items-center justify-center font-bold text-xs mb-4">
                  0{i + 1}
                </div>
                <h4 className="text-base font-bold text-[#202124] mb-2">{f}</h4>
                <p className="text-xs text-[#777777] leading-relaxed">
                  Real-time algorithmic calculation aligning supplier lead times with active customer purchasing run rates.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-[#202124]">
            Eliminate Stockouts & Reduce Carrying Costs
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/request-demo" variant="primary" size="lg" arrow>
              Book Inventory Demo
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
