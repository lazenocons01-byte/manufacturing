import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Hero } from '../components/home/Hero';
import { Statistics } from '../components/home/Statistics';
import { SolutionsGrid } from '../components/home/SolutionsGrid';
import { IntegrationSection } from '../components/home/IntegrationSection';
import { PlatformRibbon } from '../components/home/PlatformRibbon';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { IndustriesGrid } from '../components/home/IndustriesGrid';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { InsightsSection } from '../components/home/InsightsSection';
import { FinalCTA } from '../components/home/FinalCTA';

export const Home: React.FC = () => {
  return (
    <PageLayout>
      <Hero />
      <Statistics />
      <SolutionsGrid />
      <IntegrationSection />
      <PlatformRibbon />
      <WhyChooseUs />
      <IndustriesGrid />
      <CaseStudiesSection />
      <TestimonialsSection />
      <InsightsSection />
      <FinalCTA />
    </PageLayout>
  );
};

