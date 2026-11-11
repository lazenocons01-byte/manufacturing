import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Building2, MapPin } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { caseStudiesData } from '../data/caseStudiesData';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Automotive', 'Retail', 'Food & Beverage', 'Pharmaceuticals'];

  const filteredProjects = useMemo(() => {
    return caseStudiesData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.industry.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.clientType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <PageLayout>
      {/* Projects Hero */}
      <section className="py-20 md:py-24 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-4 py-1.5 rounded-full border border-[#F0D5D2] inline-block mb-4">
            CASE STUDIES & PROVEN OUTCOMES
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#202124] tracking-tight leading-tight">
            Real Solutions.{' '}
            <span className="text-[#781C1C]">Measurable Operational Impact.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#777777] leading-relaxed max-w-2xl mx-auto">
            Explore sample enterprise implementation blueprints across automotive robotics, modern grocery chains, bottling lines, and sterile cleanrooms.
          </p>
        </div>
      </section>

      {/* Filters & Search Bar */}
      <section className="py-8 bg-white border-b border-[#F0E6E4] sticky top-[65px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#781C1C] text-white shadow-xs'
                    : 'bg-[#F8E9E7]/60 text-[#781C1C] hover:bg-[#F8E9E7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#777777] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-[#F0E6E4] bg-[#FFFCFA] text-[#202124] placeholder-[#777777] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
            />
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center text-[#777777]">
              <p className="text-lg font-bold text-[#202124]">No case studies match your query</p>
              <p className="text-sm mt-1">Try clearing filters or search terms.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-xs font-bold text-[#781C1C] hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl border border-[#F0E6E4] overflow-hidden shadow-xs hover:shadow-xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 z-10 text-xs font-bold uppercase tracking-wider bg-[#781C1C] text-white px-3 py-1 rounded-full">
                        {project.industry}
                      </span>
                      <div className="absolute bottom-4 left-4 right-4 z-10 text-white flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1 text-white/90">
                          <Building2 className="w-3.5 h-3.5" />
                          {project.clientType}
                        </span>
                        <span className="flex items-center gap-1 text-stone-300">
                          <MapPin className="w-3.5 h-3.5" />
                          {project.location}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl font-bold text-[#202124] group-hover:text-[#781C1C] transition-colors mb-3">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#777777] leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      <div className="grid grid-cols-3 gap-2 bg-[#F8E9E7]/60 p-3 rounded-2xl border border-[#F0D5D2] mb-6">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-center">
                            <span className="text-lg font-extrabold text-[#781C1C] block">
                              {m.value}
                            </span>
                            <span className="text-[10px] uppercase font-semibold text-[#777777] block leading-tight">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-[#F0E6E4] flex items-center justify-between">
                    <span className="text-xs text-[#777777] italic">
                      * Verified Demonstration Benchmark
                    </span>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#781C1C] hover:underline"
                    >
                      <span>Read Full Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-[#202124]">
            Ready to Build Your Success Story?
          </h2>
          <p className="mt-3 text-base text-[#777777]">
            Schedule a confidential discovery session to evaluate Machvex on your manufacturing lines or retail locations.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/request-demo" variant="primary" size="lg" arrow>
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
