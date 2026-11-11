import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { articlesData } from '../data/articlesData';

export const Resources: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Smart Manufacturing', 'Retail Technology', 'Supply Chain & Logistics'];

  const filteredArticles = useMemo(() => {
    return articlesData.filter((article) => {
      const matchesCategory =
        selectedTag === 'All' || article.category === selectedTag;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedTag, searchQuery]);

  return (
    <PageLayout>
      <section className="py-20 md:py-24 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-4 py-1.5 rounded-full border border-[#F0D5D2] inline-block mb-4">
            KNOWLEDGE & INTELLIGENCE
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#202124] tracking-tight leading-tight">
            Insights for a{' '}
            <span className="text-[#781C1C]">Smarter Industry</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#777777] leading-relaxed max-w-2xl mx-auto">
            Explore whitepapers, architectural blueprints, and operational analysis from Machvex engineering and commerce leaders.
          </p>
        </div>
      </section>

      {/* Filter / Search Bar */}
      <section className="py-6 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedTag === cat
                    ? 'bg-[#781C1C] text-white'
                    : 'bg-[#F8E9E7]/60 text-[#781C1C] hover:bg-[#F8E9E7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#777777] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-[#F0E6E4] bg-[#FFFCFA] text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-[#F0E6E4] overflow-hidden shadow-xs hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <Link to={`/resources/${article.slug}`} className="relative h-52 overflow-hidden block">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-10 text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#781C1C] px-3 py-1 rounded-full shadow-2xs border border-[#F0D5D2]">
                      {article.category}
                    </span>
                  </Link>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-4 text-xs text-[#777777] mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.publishDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#202124] group-hover:text-[#781C1C] transition-colors mb-3 line-clamp-2">
                      <Link to={`/resources/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#777777] line-clamp-3 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#F0E6E4] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-[#202124]">
                      {article.author.name}
                    </span>
                  </div>

                  <Link
                    to={`/resources/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#781C1C] hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
