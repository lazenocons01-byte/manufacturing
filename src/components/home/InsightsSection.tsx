import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { articlesData } from '../../data/articlesData';

export const InsightsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FFFCFA] border-t border-[#F0E6E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="THOUGHT LEADERSHIP"
            title={
              <span>
                Insights for a <span className="text-[#781C1C]">Smarter Industry</span>
              </span>
            }
            subtitle="Architectural whitepapers, operational blueprints, and real-time intelligence strategies."
            align="left"
            className="md:max-w-2xl"
          />

          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#781C1C] hover:text-[#941F24] transition-colors group shrink-0"
          >
            <span>Browse All Resources & Whitepapers</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.slice(0, 3).map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl md:rounded-3xl border border-[#F0E6E4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <Link to={`/resources/${article.slug}`} className="relative h-48 overflow-hidden block">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 z-10 text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#781C1C] px-3 py-1 rounded-full shadow-2xs border border-[#F0D5D2]">
                  {article.category}
                </span>
              </Link>

              {/* Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
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

                  <h3 className="text-lg font-bold text-[#202124] group-hover:text-[#781C1C] transition-colors line-clamp-2 mb-3">
                    <Link to={`/resources/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#777777] line-clamp-2 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0E6E4] flex items-center justify-between">
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
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

