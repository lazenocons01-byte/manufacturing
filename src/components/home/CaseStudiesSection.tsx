import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Building2, MapPin } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { caseStudiesData } from '../../data/caseStudiesData';
import type { CaseStudyItem } from '../../types';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);

  // Take top 3 for featured display
  const featuredCases = caseStudiesData.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#FFFCFA] border-t border-[#F0E6E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="PROVEN PERFORMANCE"
            title={
              <span>
                Real Solutions. <span className="text-[#781C1C]">Measurable Impact.</span>
              </span>
            }
            subtitle="Demonstration case scenarios illustrating tangible operational improvements across modern industrial enterprises."
            align="left"
            className="md:max-w-2xl"
          />

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#781C1C] hover:text-[#941F24] transition-colors group shrink-0"
          >
            <span>Explore All Case Studies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCases.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl md:rounded-3xl border border-[#F0E6E4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 z-10 text-[11px] font-bold uppercase tracking-wider bg-[#781C1C] text-white px-3 py-1 rounded-full shadow-xs">
                  {project.industry}
                </span>
                <span className="absolute bottom-3 left-4 z-10 text-xs font-medium text-white/90">
                  {project.clientType}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#202124] group-hover:text-[#781C1C] transition-colors line-clamp-2 mb-3">
                    {project.title}
                  </h3>

                  <div className="space-y-2.5 text-xs text-[#777777] mb-6">
                    <div>
                      <strong className="text-[#202124]">Challenge: </strong>
                      <span className="line-clamp-2">{project.challenge}</span>
                    </div>
                    <div>
                      <strong className="text-[#202124]">Solution: </strong>
                      <span className="line-clamp-2">{project.solution}</span>
                    </div>
                  </div>
                </div>

                {/* Metrics Highlight & CTA */}
                <div className="pt-4 border-t border-[#F0E6E4]">
                  <div className="grid grid-cols-2 gap-2 mb-4 bg-[#F8E9E7]/50 rounded-xl p-3 border border-[#F0D5D2]">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#777777] block">
                        {project.metrics[0].label}
                      </span>
                      <span className="text-lg font-extrabold text-[#781C1C]">
                        {project.metrics[0].value}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#777777] block">
                        {project.metrics[1].label}
                      </span>
                      <span className="text-lg font-extrabold text-[#781C1C]">
                        {project.metrics[1].value}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#781C1C] text-[#781C1C] hover:bg-[#781C1C] hover:text-white font-bold text-xs transition-colors duration-200 cursor-pointer"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-60 shrink-0">
                <img
                  src={selectedCaseStudy.heroImage}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 z-10 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#781C1C] px-3 py-1 rounded-full">
                    {selectedCaseStudy.industry}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2">
                    {selectedCaseStudy.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-stone-300 mt-1">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" />
                      {selectedCaseStudy.clientType}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedCaseStudy.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#781C1C]">
                    The Challenge
                  </h4>
                  <p className="text-sm text-[#202124] mt-1 leading-relaxed">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#781C1C]">
                    Implemented Solution
                  </h4>
                  <p className="text-sm text-[#202124] mt-1 leading-relaxed">
                    {selectedCaseStudy.solution}
                  </p>
                </div>

                {/* Key Metrics */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#781C1C] mb-3">
                    Validated Business Impact
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedCaseStudy.metrics.map((m) => (
                      <div key={m.label} className="p-3 rounded-xl bg-[#F8E9E7] border border-[#F0D5D2]">
                        <span className="text-[11px] font-bold text-[#777777] block uppercase">
                          {m.label}
                        </span>
                        <span className="text-2xl font-extrabold text-[#781C1C]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Executive Quote */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <p className="italic text-sm text-[#202124] leading-relaxed">
                    "{selectedCaseStudy.quote.text}"
                  </p>
                  <div className="mt-3 text-xs font-semibold text-[#781C1C]">
                    {selectedCaseStudy.quote.author} &mdash; {selectedCaseStudy.quote.role}, {selectedCaseStudy.quote.organization}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <span className="text-xs font-bold text-[#777777] block mb-2 uppercase">
                    Components & Platforms Deployed
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.technologiesUsed.map((t) => (
                      <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F8E9E7] text-[#781C1C] border border-[#F0D5D2]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-[#FFFCFA] border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-[#777777]">
                  * Illustrative enterprise demonstration case.
                </span>
                <Button
                  to="/request-demo"
                  variant="primary"
                  size="sm"
                  arrow
                  onClick={() => setSelectedCaseStudy(null)}
                >
                  Schedule Custom Evaluation
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
