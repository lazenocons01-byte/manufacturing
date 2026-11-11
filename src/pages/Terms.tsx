import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { FileText } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#781C1C] mb-3">
            <FileText className="w-4 h-4" />
            <span>LEGAL AGREEMENT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#202124]">
            Terms and Conditions of Service
          </h1>
          <p className="mt-2 text-xs text-[#777777]">
            Last Updated: November 11, 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-[#333333] leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#202124] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing the Machvex website, software platforms, APIs, or subscribing to Machvex enterprise cloud services, you agree to be bound by these Terms and Conditions and all applicable enterprise Master Services Agreements (MSAs).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#202124] mb-3">2. Service Level Commitments (SLAs)</h2>
            <p>
              Machvex provides mission-critical enterprise uptime guarantees of 99.95% for core cloud telemetry and point-of-sale services. On-premise industrial edge appliances continue executing deterministic logic locally even in the event of upstream public cloud or carrier network degradation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#202124] mb-3">3. Intellectual Property Rights</h2>
            <p>
              All proprietary algorithms, machine vision inspection models, UI dashboards, and system documentation are the exclusive intellectual property of Machvex Systems Inc. Clients retain sole and complete ownership of all production sensor data, transaction records, and inventory metrics processed by the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#202124] mb-3">4. Limitation of Liability</h2>
            <p>
              Except for willful misconduct, neither party shall be liable for indirect, incidental, or consequential damages resulting from network carrier interruptions or third-party hardware component failures.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#202124] mb-3">5. Governing Law</h2>
            <p>
              These Terms are governed by and construed under the laws of the State of Illinois, without regard to conflicts of law provisions.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

