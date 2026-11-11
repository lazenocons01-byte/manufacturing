import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Car,
  Utensils,
  Activity,
  Cpu,
  Scissors,
  PackageCheck,
  Boxes,
  ShoppingCart,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { industriesData } from '../data/industriesData';

export const IndustryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industriesData.find((item) => item.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const getIcon = (name: string) => {
    switch (name) {
      case 'Car': return <Car className="w-8 h-8 text-[#781C1C]" />;
      case 'Utensils': return <Utensils className="w-8 h-8 text-[#781C1C]" />;
      case 'Activity': return <Activity className="w-8 h-8 text-[#781C1C]" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-[#781C1C]" />;
      case 'Scissors': return <Scissors className="w-8 h-8 text-[#781C1C]" />;
      case 'PackageCheck': return <PackageCheck className="w-8 h-8 text-[#781C1C]" />;
      case 'Boxes': return <Boxes className="w-8 h-8 text-[#781C1C]" />;
      case 'ShoppingCart': return <ShoppingCart className="w-8 h-8 text-[#781C1C]" />;
      default: return <Car className="w-8 h-8 text-[#781C1C]" />;
    }
  };

  return (
    <PageLayout>
      {/* Breadcrumb & Hero */}
      <section className="py-16 md:py-20 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#781C1C] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Industries</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F8E9E7] flex items-center justify-center border border-[#F0D5D2]">
                  {getIcon(industry.iconName)}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-3.5 py-1 rounded-full border border-[#F0D5D2]">
                  Industry Specialization
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#202124] tracking-tight leading-tight">
                {industry.name}
              </h1>

              <p className="mt-4 text-base sm:text-lg font-semibold text-[#781C1C]">
                {industry.tagline}
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#777777] leading-relaxed">
                {industry.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/request-demo" variant="primary" size="md" arrow>
                  Schedule Industry Pilot
                </Button>
                <Button to="/contact" variant="outline" size="md">
                  Contact Specialist
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F0E6E4]">
                <img
                  src={industry.imageUrl}
                  alt={industry.name}
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Machvex Solutions */}
      <section className="py-20 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFF8F8] border border-red-200">
              <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider mb-4">
                <AlertTriangle className="w-5 h-5" />
                <span>Sector Obstacles</span>
              </div>
              <h3 className="text-2xl font-bold text-[#202124] mb-4">
                Critical Operating Vulnerabilities
              </h3>
              <ul className="space-y-3 text-sm text-[#777777]">
                {industry.keyChallenges.map((ch) => (
                  <li key={ch} className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8E9E7]/60 border border-[#F0D5D2]">
              <div className="flex items-center gap-2 text-[#781C1C] font-bold text-xs uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-5 h-5" />
                <span>Machvex Implementations</span>
              </div>
              <h3 className="text-2xl font-bold text-[#202124] mb-4">
                Targeted Architecture & Workflows
              </h3>
              <ul className="space-y-3 text-sm text-[#202124]">
                {industry.machvexSolutions.map((sol) => (
                  <li key={sol} className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-[#781C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {industry.impactStats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-white/10">
                <span className="text-3xl sm:text-4xl font-extrabold block text-white">{stat.value}</span>
                <span className="text-xs text-[#F8E9E7] uppercase font-semibold mt-1 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FFFCFA] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-[#202124]">
            Deploy Machvex for {industry.name}
          </h2>
          <p className="mt-3 text-base text-[#777777]">
            Connect your factory lines, distribution centers, and storefronts today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/request-demo" variant="primary" size="lg" arrow>
              Book Industry Consultation
            </Button>
            <Button to="/industries" variant="outline" size="lg">
              Explore Other Industries
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
