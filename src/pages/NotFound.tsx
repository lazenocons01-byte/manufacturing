import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <PageLayout>
      <section className="py-24 md:py-36 bg-[#FFFCFA] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="w-16 h-16 rounded-full bg-[#F8E9E7] text-[#781C1C] flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#781C1C] bg-[#F8E9E7] px-3.5 py-1.5 rounded-full border border-[#F0D5D2]">
            ERROR 404: NODE DISCONNECTED
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#202124] mt-4 tracking-tight">
            Page Not Found
          </h1>

          <p className="mt-4 text-base text-[#777777] leading-relaxed max-w-md mx-auto">
            The operational telemetry node or URL you requested does not exist or has been relocated to another network cluster.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
              Return to Homepage
            </Button>
            <Button to="/solutions" variant="outline" size="md">
              View All Solutions
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-[#F0E6E4] text-xs text-[#777777]">
            Looking for a specific capability? Explore{' '}
            <Link to="/solutions/manufacturing" className="text-[#781C1C] font-bold hover:underline">
              Smart Manufacturing
            </Link>{' '}
            or{' '}
            <Link to="/solutions/retail" className="text-[#781C1C] font-bold hover:underline">
              Retail Operations
            </Link>.
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
