import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Building2,
  MapPin
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { companyInfo } from '../data/companyData';
import { faqsData } from '../data/faqsData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    inquiryType: 'general',
    subject: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName || !formData.businessEmail || !formData.message) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (!formData.consent) {
      setErrorMsg('Please agree to the privacy processing consent.');
      return;
    }

    setIsSubmitting(true);

    // Simulate backend verification / dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <PageLayout>
      {/* Contact Hero */}
      <section className="py-20 md:py-24 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-4 py-1.5 rounded-full border border-[#F0D5D2] inline-block mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#202124] tracking-tight leading-tight">
            Connect with the{' '}
            <span className="text-[#781C1C]">Machvex Solutions Team</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#777777] leading-relaxed max-w-2xl mx-auto">
            Whether exploring industrial automation, retail checkout architectures, or enterprise partnerships, our engineers are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-20 bg-white border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Channels & Locations (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C]">
                  DIRECT CHANNELS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] mt-1">
                  How Can We Help You?
                </h2>
                <p className="text-sm text-[#777777] mt-2">
                  Our operational response team responds to all enterprise inquiries within 1 business day.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#FFFCFA] border border-[#F0E6E4] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#777777] uppercase block">General & Sales Email</span>
                    <a href="mailto:contact@machvex.com" className="font-bold text-[#202124] hover:text-[#781C1C] text-sm">
                      contact@machvex.com
                    </a>
                    <span className="text-xs text-[#777777] block mt-0.5">Direct routing to our regional solutions desk</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FFFCFA] border border-[#F0E6E4] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#777777] uppercase block">Global Headquarters Phone</span>
                    <a href="tel:+13125550198" className="font-bold text-[#202124] hover:text-[#781C1C] text-sm">
                      +1 (312) 555-0198
                    </a>
                    <span className="text-xs text-[#777777] block mt-0.5">Toll-free enterprise support available 24/7</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FFFCFA] border border-[#F0E6E4] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#777777] uppercase block">Support Hours</span>
                    <span className="font-bold text-[#202124] text-sm block">
                      Monday &ndash; Friday: 08:00 &ndash; 18:00 CST
                    </span>
                    <span className="text-xs text-emerald-700 font-semibold block mt-0.5">
                      Critical Tier-1 production SLA: 24/7/365 active
                    </span>
                  </div>
                </div>
              </div>

              {/* Global Locations List */}
              <div className="pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#202124] block mb-3">
                  Global Hubs & Labs:
                </span>
                <div className="space-y-3">
                  {companyInfo.offices.map((office) => (
                    <div key={office.city} className="p-4 rounded-xl bg-[#F8E9E7]/40 border border-[#F0D5D2] text-xs">
                      <div className="flex items-center gap-2 font-bold text-[#781C1C]">
                        <Building2 className="w-4 h-4" />
                        <span>{office.title}</span>
                      </div>
                      <p className="text-[#777777] mt-1">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#FFFCFA] rounded-3xl p-8 sm:p-10 border border-[#F0E6E4] shadow-md">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#202124]">
                      Thank You for Contacting Machvex
                    </h3>
                    <p className="text-sm text-[#777777] max-w-md mx-auto leading-relaxed">
                      Your inquiry has been logged into our enterprise dispatch ledger. A solutions specialist will review your request and reply shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          businessEmail: '',
                          phoneNumber: '',
                          companyName: '',
                          inquiryType: 'general',
                          subject: '',
                          message: '',
                          consent: false
                        });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-full bg-[#781C1C] text-white font-bold text-xs cursor-pointer hover:bg-[#941F24]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-[#202124]">
                        Send Us an Inquiry
                      </h3>
                      <p className="text-xs text-[#777777] mt-1">
                        Fill in your enterprise details below and our technical team will follow up.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#202124] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Elena Rostova"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#F0E6E4] text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#202124] mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.businessEmail}
                          onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                          placeholder="e.g. elena@enterprise.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#F0E6E4] text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#202124] mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. Apex Manufacturing Ltd"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#F0E6E4] text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#202124] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="e.g. +1 (555) 019-2834"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#F0E6E4] text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#202124] mb-1.5">
                          Inquiry Type
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#F0E6E4] text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
                        >
                          <option value="general">General Enterprise Query</option>
                          <option value="manufacturing">Smart Manufacturing Solution</option>
                          <option value="retail">Retail POS & Storefronts</option>
                          <option value="partnership">Partner or System Integrator</option>
                          <option value="press">Media & Press</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#202124] mb-1.5">
                          Subject
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Brief topic summary"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#F0E6E4] text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#202124] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your facility lines, retail store locations, or integration goals..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#F0E6E4] text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
                      />
                    </div>

                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="consent-check"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 w-4 h-4 rounded text-[#781C1C] focus:ring-[#781C1C]"
                      />
                      <label htmlFor="consent-check" className="text-xs text-[#777777] leading-tight">
                        I agree to Machvex processing my business details to answer this inquiry in accordance with the Privacy Policy.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      arrow
                      isLoading={isSubmitting}
                      className="w-full justify-center"
                    >
                      Transmit Enterprise Inquiry
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Headquarters Interactive Map Placeholder */}
      <section className="py-16 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-[#F0E6E4] shadow-md relative h-80 bg-stone-100 flex items-center justify-center">
            {/* Interactive map visualization simulated with aerial imagery & coordinates */}
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80"
              alt="Map view Chicago Headquarters"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-[#781C1C]/15" />
            
            <div className="absolute z-10 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white max-w-sm text-center">
              <div className="w-10 h-10 rounded-full bg-[#781C1C] text-white flex items-center justify-center mx-auto mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#202124]">Machvex Innovation Headquarters</h4>
              <p className="text-xs text-[#777777] mt-1">
                222 W Merchandise Mart Plaza, Suite 1200, Chicago, IL 60654
              </p>
              <div className="mt-3 text-[11px] font-mono text-[#781C1C] font-semibold">
                LAT: 41.8885° N &bull; LON: 87.6355° W
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQs */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ANSWERS & GUIDELINES"
            title="General Inquiries FAQ"
            align="center"
            className="mb-10"
          />

          <div className="space-y-4">
            {faqsData.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-[#FFFCFA] border border-[#F0E6E4] overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#202124] flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#781C1C] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#777777] leading-relaxed border-t border-[#F0E6E4]/50 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
