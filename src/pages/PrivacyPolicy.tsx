import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#781C1C] mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>TRUST & DATA GOVERNANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#202124]">
            Machvex Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-[#777777]">
            Effective Date: November 11, 2026 &bull; Version 3.4
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-[#333333] leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#202124] mb-3">1. Executive Overview</h2>
            <p>
              Machvex Systems Inc. ("Machvex", "we", "us", or "our") respects the privacy and confidentiality of our enterprise clients, industrial partners, and website visitors. This Privacy Policy details how we collect, process, safeguard, and retain information through the Machvex platform, websites, and industrial edge software agents.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#202124] mb-3">2. Data We Process</h2>
            <p>
              We process two primary categories of data:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-[#777777]">
              <li>
                <strong>Corporate Client Information:</strong> Names, business emails, phone numbers, job titles, and company affiliations submitted through lead forms, demo scheduling, or partner portals.
              </li>
              <li>
                <strong>Industrial Operational Telemetry:</strong> Machine cycle metrics, temperature readings, barcode transaction IDs, and inventory quantities transmitted by on-premise edge gateways to the Machvex Lakehouse. Machvex does not sell, lease, or monetize customer production data to any third parties.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#202124] mb-3">3. Security & Cryptographic Standards</h2>
            <p>
              Machvex adheres to SOC 2 Type II, ISO 27001, and IEC 62443 cyber-security frameworks. All network communications are encrypted utilizing TLS 1.3 with mutual certificate authentication (mTLS). Inactive databases are encrypted using AES-256 with optional Customer-Managed Encryption Keys (CMEK).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#202124] mb-3">4. GDPR and International Transfers</h2>
            <p>
              For users and operations located in the European Economic Area (EEA), Machvex processes data in accordance with the General Data Protection Regulation (GDPR) via Standard Contractual Clauses (SCCs). You retain full rights to request access, correction, data portability, or permanent deletion of your business records.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#202124] mb-3">5. Data Privacy Officer Contact</h2>
            <p>
              For privacy inquiries, audit requests, or data deletion notices, contact our Chief Information Security Officer at:
              <br />
              <strong>Email:</strong> privacy@machvex.com
              <br />
              <strong>Address:</strong> 222 W Merchandise Mart Plaza, Suite 1200, Chicago, IL 60654
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

