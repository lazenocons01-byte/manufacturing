import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { articlesData } from '../data/articlesData';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  return (
    <PageLayout>
      <article className="py-16 md:py-20 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#781C1C] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Resources</span>
          </Link>

          <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-3.5 py-1 rounded-full border border-[#F0D5D2] inline-block mb-4">
            {article.category}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#202124] tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#F0E6E4]">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-[#F0D5D2]"
              />
              <div>
                <span className="text-sm font-bold text-[#202124] block">
                  {article.author.name}
                </span>
                <span className="text-xs text-[#777777]">
                  {article.author.role}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#777777]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* Featured Thumbnail */}
      <section className="py-8 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#F0E6E4]">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-16 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-[#202124] text-base sm:text-lg leading-relaxed">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-[#333333]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-[#F0E6E4] flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#777777] mr-2">
              Related Topics:
            </span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#F8E9E7] text-[#781C1C] text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Next Article CTA */}
          <div className="mt-12 p-8 rounded-3xl bg-[#FFFCFA] border border-[#F0E6E4] text-center">
            <h3 className="text-xl font-bold text-[#202124]">
              Transform Your Manufacturing & Retail Operations
            </h3>
            <p className="text-sm text-[#777777] mt-2 mb-6 max-w-md mx-auto">
              Discuss how to apply these architectural concepts to your company's physical infrastructure.
            </p>
            <Button to="/request-demo" variant="primary" size="md" arrow>
              Schedule Platform Demonstration
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
