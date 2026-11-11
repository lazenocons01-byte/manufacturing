import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  AlertCircle,
  Building2,
  Mail,
  Phone,
  Video
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';

export const RequestDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    industry: 'automotive',
    companySize: '100-500',
    interestedSolution: 'all',
    message: '',
    preferredContact: 'video' as 'email' | 'phone' | 'video',
    consent: false,
    honeypot: '' // Anti-spam honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business Email is required.';
    } else if (!emailRegex.test(formData.businessEmail)) {
      errs.businessEmail = 'Please provide a valid work email address.';
    } else if (
      formData.businessEmail.endsWith('@gmail.com') ||
      formData.businessEmail.endsWith('@yahoo.com') ||
      formData.businessEmail.endsWith('@hotmail.com')
    ) {
      errs.businessEmail = 'Please provide a corporate work email (e.g., name@company.com).';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required for verification.';
    } else if (formData.phoneNumber.replace(/\D/g, '').length < 8) {
      errs.phoneNumber = 'Please enter a valid phone number (minimum 8 digits).';
    }

    if (!formData.companyName.trim()) {
      errs.companyName = 'Company Name is required.';
    }

    if (!formData.consent) {
      errs.consent = 'You must agree to the data processing consent.';
    }

    // Bot trap check
    if (formData.honeypot) {
      errs.honeypot = 'Automated submission detected.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate real server response verification
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Generate verification receipt ID
      const fakeReceipt = 'MVX-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionId(fakeReceipt);
      setIsSuccess(true);
    } catch {
      setErrors({ form: 'An unexpected transmission error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-[#FFFCFA] border-b border-[#F0E6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Section: Value Props & Supporting Imagery (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#781C1C] bg-[#F8E9E7] px-4 py-1.5 rounded-full border border-[#F0D5D2] inline-block mb-4">
                  TAILORED ENTERPRISE DEMO
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#202124] tracking-tight leading-tight">
                  Experience Machvex{' '}
                  <span className="text-[#781C1C]">in Action</span>
                </h1>
                <p className="mt-4 text-base text-[#777777] leading-relaxed">
                  Join a 30-minute tailored demonstration with an industrial and retail solutions architect. We will map your physical processes directly to our real-time software engine.
                </p>
              </div>

              {/* What you get list */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C] shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#202124]">Live Shop Floor & POS Simulation</h4>
                    <p className="text-xs text-[#777777] mt-0.5">See how real machine telemetry synchronizes with customer checkout terminals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C] shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#202124]">Architecture & Protocol Walkthrough</h4>
                    <p className="text-xs text-[#777777] mt-0.5">Understand our OPC-UA, MQTT, and offline-resilient edge gateway setup.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#F8E9E7] flex items-center justify-center text-[#781C1C] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#202124]">Turnkey Proof-of-Value Roadmap</h4>
                    <p className="text-xs text-[#777777] mt-0.5">Receive a clear 30-day pilot deployment scope for your facility or stores.</p>
                  </div>
                </div>
              </div>

              {/* Supporting Split Photography Asset */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#F0E6E4] relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial robotics in manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="font-bold block">Enterprise Pilot Guarantee</span>
                  <span className="text-stone-300">Non-invasive deployment with zero line interruption.</span>
                </div>
              </div>

            </div>

            {/* Right Section: Lead-Gen Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F0E6E4] shadow-xl">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#F8E9E7] text-[#781C1C] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <span className="text-xs font-mono bg-stone-100 text-[#781C1C] px-3 py-1 rounded-full font-bold">
                      DEMO REQUEST CONFIRMED: {submissionId}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202124]">
                      We Have Received Your Request
                    </h3>

                    <p className="text-sm text-[#777777] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#202124]">{formData.fullName}</strong>. A Machvex Senior Solutions Architect has been assigned to <strong className="text-[#202124]">{formData.companyName}</strong>.
                    </p>

                    <div className="p-4 rounded-2xl bg-[#FFFCFA] border border-[#F0E6E4] text-xs text-[#777777] max-w-md mx-auto text-left space-y-1">
                      <div className="flex justify-between">
                        <span>Corporate Email:</span>
                        <span className="font-bold text-[#202124]">{formData.businessEmail}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Preferred Format:</span>
                        <span className="font-bold text-[#781C1C] capitalize">{formData.preferredContact} Conference</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Industry Domain:</span>
                        <span className="font-bold text-[#202124] capitalize">{formData.industry}</span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-500 pt-2">
                      A calendar invitation has been routed to your inbox. Check spam if not received within 5 minutes.
                    </p>

                    <div className="pt-4">
                      <Button
                        to="/"
                        variant="primary"
                        size="md"
                      >
                        Return to Homepage
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#202124]">
                        Schedule a Personalized Walkthrough
                      </h3>
                      <p className="text-xs text-[#777777] mt-1">
                        All fields marked with an asterisk (*) are required.
                      </p>
                    </div>

                    {errors.form && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errors.form}</span>
                      </div>
                    )}

                    {/* Honeypot field for anti-spam (hidden) */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        tabIndex={-1}
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        autoComplete="off"
                      />
                    </div>

                    {/* Full Name & Business Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#202124] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: '' });
                          }}
                          placeholder="e.g. David Vance"
                          className={`w-full px-4 py-2.5 rounded-xl bg-[#FFFCFA] border text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C] ${
                            errors.fullName ? 'border-red-400' : 'border-[#F0E6E4]'
                          }`}
                        />
                        {errors.fullName && (
                          <span className="text-[11px] text-red-600 mt-1 block font-medium">
                            {errors.fullName}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#202124] mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.businessEmail}
                          onChange={(e) => {
                            setFormData({ ...formData, businessEmail: e.target.value });
                            if (errors.businessEmail) setErrors({ ...errors, businessEmail: '' });
                          }}
                          placeholder="e.g. name@enterprise.com"
                          className={`w-full px-4 py-2.5 rounded-xl bg-[#FFFCFA] border text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C] ${
                            errors.businessEmail ? 'border-red-400' : 'border-[#F0E6E4]'
                          }`}
                        />
                        {errors.businessEmail && (
                          <span className="text-[11px] text-red-600 mt-1 block font-medium">
                            {errors.businessEmail}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#202124] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phoneNumber}
                          onChange={(e) => {
                            setFormData({ ...formData, phoneNumber: e.target.value });
                            if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                          }}
                          placeholder="e.g. +1 (312) 555-0198"
                          className={`w-full px-4 py-2.5 rounded-xl bg-[#FFFCFA] border text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C] ${
                            errors.phoneNumber ? 'border-red-400' : 'border-[#F0E6E4]'
                          }`}
                        />
                        {errors.phoneNumber && (
                          <span className="text-[11px] text-red-600 mt-1 block font-medium">
                            {errors.phoneNumber}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#202124] mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => {
                            setFormData({ ...formData, companyName: e.target.value });
                            if (errors.companyName) setErrors({ ...errors, companyName: '' });
                          }}
                          placeholder="e.g. Apex Global Systems"
                          className={`w-full px-4 py-2.5 rounded-xl bg-[#FFFCFA] border text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C] ${
                            errors.companyName ? 'border-red-400' : 'border-[#F0E6E4]'
                          }`}
                        />
                        {errors.companyName && (
                          <span className="text-[11px] text-red-600 mt-1 block font-medium">
                            {errors.companyName}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Industry & Company Size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#202124] mb-1">
                          Primary Industry
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#FFFCFA] border border-[#F0E6E4] text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
                        >
                          <option value="automotive">Automotive Manufacturing</option>
                          <option value="food-beverage">Food & Beverage Processing</option>
                          <option value="pharmaceuticals">Pharmaceuticals & MedTech</option>
                          <option value="electronics">Electronics & Hardware</option>
                          <option value="textile">Textile & Apparel</option>
                          <option value="fmcg">Consumer Goods (FMCG)</option>
                          <option value="warehousing">Warehousing & 3PL Logistics</option>
                          <option value="retail">Retail & Supermarket Chains</option>
                          <option value="other">Other High-Velocity Sector</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#202124] mb-1">
                          Scale (Sites / Stores)
                        </label>
                        <select
                          value={formData.companySize}
                          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#FFFCFA] border border-[#F0E6E4] text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
                        >
                          <option value="1-10">1 - 10 Facilities / Stores</option>
                          <option value="11-50">11 - 50 Facilities / Stores</option>
                          <option value="51-200">51 - 200 Facilities / Stores</option>
                          <option value="200+">200+ Enterprise Facilities</option>
                        </select>
                      </div>
                    </div>

                    {/* Interested Solution */}
                    <div>
                      <label className="block text-xs font-bold text-[#202124] mb-1">
                        Primary Solution of Interest
                      </label>
                      <select
                        value={formData.interestedSolution}
                        onChange={(e) => setFormData({ ...formData, interestedSolution: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFFCFA] border border-[#F0E6E4] text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
                      >
                        <option value="all">Unified Factory-to-Storefront Suite (Recommended)</option>
                        <option value="manufacturing">Smart Manufacturing & OEE Automation</option>
                        <option value="retail">Modern Retail Operations & Cloud POS</option>
                        <option value="inventory">Inventory Intelligence & Safety Stock</option>
                        <option value="supply-chain">Supply Chain Sync & Multimodal Carrier</option>
                        <option value="analytics">Operational Analytics & Machine Learning</option>
                      </select>
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-xs font-bold text-[#202124] mb-1.5">
                        Preferred Demonstration Format
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'video', label: 'Live Video Call', icon: Video },
                          { id: 'phone', label: 'Phone Call', icon: Phone },
                          { id: 'email', label: 'Email Assessment', icon: Mail }
                        ].map((m) => {
                          const Icon = m.icon;
                          const isSel = formData.preferredContact === m.id;
                          return (
                            <button
                              key={m.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, preferredContact: m.id as any })}
                              className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                                isSel
                                  ? 'bg-[#781C1C] text-white border-[#781C1C]'
                                  : 'bg-[#FFFCFA] text-[#202124] border-[#F0E6E4] hover:border-[#781C1C]/40'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                              <span>{m.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message / Specific Goals */}
                    <div>
                      <label className="block text-xs font-bold text-[#202124] mb-1">
                        Operational Objectives or Project Scope
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your production line challenges, checkout points, or timeline..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFFCFA] border border-[#F0E6E4] text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#781C1C]"
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <div>
                      <div className="flex items-start gap-2.5">
                        <input
                          type="checkbox"
                          id="consent-box"
                          checked={formData.consent}
                          onChange={(e) => {
                            setFormData({ ...formData, consent: e.target.checked });
                            if (errors.consent) setErrors({ ...errors, consent: '' });
                          }}
                          className="mt-0.5 w-4 h-4 rounded text-[#781C1C] focus:ring-[#781C1C]"
                        />
                        <label htmlFor="consent-box" className="text-xs text-[#777777] leading-tight">
                          I consent to Machvex storing and processing my corporate contact info to schedule and conduct this enterprise platform demonstration. *
                        </label>
                      </div>
                      {errors.consent && (
                        <span className="text-[11px] text-red-600 mt-1 block font-medium">
                          {errors.consent}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      arrow
                      isLoading={isSubmitting}
                      className="w-full justify-center"
                    >
                      Schedule Enterprise Demonstration
                    </Button>

                    <p className="text-[11px] text-[#777777] text-center">
                      Zero commitment. NDA-ready confidential enterprise consultation.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>
    </PageLayout>
  );
};
