import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { footerSolutions, footerCompany, footerResources } from '../../data/navigation';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#781C1C] text-[#FFFCFA] pt-16 pb-10 border-t border-[#941F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter Bar */}
        <div className="pb-12 mb-12 border-b border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F8E9E7] bg-white/10 px-3 py-1 rounded-full">
              Industry Briefing
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-2 text-white">
              Subscribe to the Machvex Smart Supply Digest
            </h3>
            <p className="text-sm text-[#F8E9E7]/80 mt-1">
              Monthly executive insights on industrial IoT, store automation, and predictive logistics.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2.5 max-w-md">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your enterprise email"
              className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#F8E9E7] focus:bg-white/15 min-w-[260px]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-white hover:bg-[#F8E9E7] text-[#781C1C] font-bold text-sm tracking-wide transition-all shadow-sm shrink-0 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>{newsletterSuccess ? 'Subscribed!' : 'Subscribe'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/15">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4">
            <Logo variant="light" size="md" />
            <p className="mt-4 text-sm text-[#F8E9E7]/85 leading-relaxed max-w-sm">
              Machvex is the unified operational nervous system connecting shop-floor manufacturing automation, multi-node inventory intelligence, and modern retail execution.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Machvex LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Machvex Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Machvex YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Machvex GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/20 text-xs text-[#F8E9E7]/80">
              <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
              <span>SOC-2 Type II & ISO 27001 Certified Architecture</span>
            </div>
          </div>

          {/* Column 2: Solutions (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F8E9E7] mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerSolutions.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-white transition-colors hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F8E9E7] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-white transition-colors hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F8E9E7] mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerResources.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-white transition-colors hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F8E9E7] mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-xs text-[#F8E9E7]/90 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F8E9E7] shrink-0 mt-0.5" />
                <span>222 W Merchandise Mart Plaza, Suite 1200, Chicago, IL 60654</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F8E9E7] shrink-0" />
                <a href="tel:+13125550198" className="hover:underline">
                  +1 (312) 555-0198
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F8E9E7] shrink-0" />
                <a href="mailto:contact@machvex.com" className="hover:underline">
                  contact@machvex.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F8E9E7]/70">
          <div>
            &copy; {new Date().getFullYear()} Machvex Systems Inc. All rights reserved. Connect Factory to Store.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact#faq" className="hover:text-white transition-colors">
              Trust & Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
