import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { caseStudiesData } from '../data/caseStudiesData';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = caseStudiesData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <PageLayout>
      <section className="py-16 md:py-20 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#781C1C] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>

          <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-3.5 py-1 rounded-full border border-[#F0D5D2] inline-block mb-4">
            {project.industry} Case Study
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#202124] tracking-tight leading-tight">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-[#777777]">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#781C1C]" />
              <strong>{project.clientType}</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#781C1C]" />
              {project.location}
            </span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-10 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#F0E6E4]">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Details Body */}
      <section className="py-16 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Metrics Trio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-6 rounded-2xl bg-[#F8E9E7] border border-[#F0D5D2] text-center">
                <span className="text-xs font-bold text-[#777777] uppercase block mb-1">
                  {m.label}
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#781C1C] block">
                  {m.value}
                </span>
                <span className="text-[11px] text-[#781C1C] font-semibold mt-1 block capitalize">
                  {m.change}
                </span>
              </div>
            ))}
          </div>

          {/* Challenge */}
          <div>
            <h2 className="text-2xl font-bold text-[#202124] mb-3">
              The Operational Challenge
            </h2>
            <p className="text-base text-[#777777] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-bold text-[#202124] mb-3">
              The Implemented Architecture & Workflow
            </h2>
            <p className="text-base text-[#777777] leading-relaxed mb-6">
              {project.solution}
            </p>

            <span className="text-xs font-bold uppercase tracking-wider text-[#202124] block mb-2">
              Machvex Components Deployed:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologiesUsed.map((tech) => (
                <span key={tech} className="px-3.5 py-1.5 rounded-full bg-[#F8E9E7] text-[#781C1C] text-xs font-bold border border-[#F0D5D2]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="p-8 rounded-3xl bg-[#FFFCFA] border border-[#F0E6E4] shadow-xs">
            <p className="text-base sm:text-lg italic text-[#202124] leading-relaxed mb-4">
              "{project.quote.text}"
            </p>
            <div className="text-xs font-bold text-[#781C1C]">
              {project.quote.author} &mdash; {project.quote.role}, {project.quote.organization}
            </div>
          </div>

          <div className="pt-6 border-t border-[#F0E6E4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#777777]">
              * Demonstrative implementation scenario.
            </span>
            <Button to="/request-demo" variant="primary" size="md" arrow>
              Schedule Customized Evaluation
            </Button>
          </div>

        </div>
      </section>
    </PageLayout>
  );
};
