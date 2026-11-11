import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Factory, Store, Layers, Truck, BarChart3, Leaf, Car, Utensils, Activity, Cpu, Scissors, ShoppingCart, Boxes, PackageCheck } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { navigationLinks } from '../../data/navigation';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Icon mapping for dropdowns
  const getIcon = (name?: string) => {
    switch (name) {
      case 'Factory': return <Factory className="w-5 h-5 text-[#781C1C]" />;
      case 'Store': return <Store className="w-5 h-5 text-[#781C1C]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#781C1C]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#781C1C]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#781C1C]" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-[#781C1C]" />;
      case 'Car': return <Car className="w-5 h-5 text-[#781C1C]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#781C1C]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#781C1C]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#781C1C]" />;
      case 'Scissors': return <Scissors className="w-5 h-5 text-[#781C1C]" />;
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5 text-[#781C1C]" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-[#781C1C]" />;
      case 'PackageCheck': return <PackageCheck className="w-5 h-5 text-[#781C1C]" />;
      default: return <Factory className="w-5 h-5 text-[#781C1C]" />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Click outside listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-[#F0E6E4]'
          : 'bg-[#FFFCFA] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <Logo size="md" />
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" ref={dropdownRef}>
            {navigationLinks.map((link) => {
              const hasDropdown = Boolean(link.children && link.children.length > 0);
              const isDropdownOpen = activeDropdown === link.label;
              const isActive =
                location.pathname === link.href ||
                (link.children && link.children.some((c) => location.pathname === c.href));

              if (hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => setActiveDropdown(isDropdownOpen ? null : link.label)}
                      className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                        isActive
                          ? 'text-[#781C1C]'
                          : 'text-[#202124] hover:text-[#781C1C]'
                      }`}
                      aria-expanded={isDropdownOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-[#781C1C]' : 'text-stone-400'
                        }`}
                      />
                      {isActive && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#781C1C] rounded-full" />
                      )}
                    </button>

                    {/* Mega Dropdown Panel */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-white rounded-2xl shadow-xl border border-[#F0E6E4] p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="grid grid-cols-2 gap-3">
                          {link.children?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F8E9E7]/50 transition-colors group/item"
                            >
                              <div className="w-10 h-10 rounded-xl bg-[#F8E9E7] group-hover/item:bg-white flex items-center justify-center shrink-0 border border-[#F0D5D2] transition-colors">
                                {getIcon(subItem.icon)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-sm text-[#202124] group-hover/item:text-[#781C1C] transition-colors">
                                    {subItem.label}
                                  </span>
                                  {subItem.badge && (
                                    <span className="text-[10px] uppercase font-bold bg-[#781C1C] text-white px-2 py-0.5 rounded-full">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-[#777777] mt-0.5 line-clamp-1">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Dropdown Bottom Banner */}
                        <div className="mt-4 pt-3 border-t border-[#F0E6E4] flex items-center justify-between text-xs text-[#777777] px-2">
                          <span>Need enterprise architecture guidance?</span>
                          <Link
                            to="/request-demo"
                            onClick={() => setActiveDropdown(null)}
                            className="font-bold text-[#781C1C] hover:underline inline-flex items-center gap-1"
                          >
                            Talk to a Solutions Engineer <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      isActive
                        ? 'text-[#781C1C]'
                        : 'text-[#202124] hover:text-[#781C1C]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#781C1C] rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right: CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              to="/request-demo"
              variant="primary"
              size="md"
              arrow
              className="bg-[#781C1C] hover:bg-[#941F24] text-white px-6 py-2.5 rounded-full shadow-xs"
            >
              Get a Demo
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#202124] hover:text-[#781C1C] hover:bg-[#F8E9E7]/60 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white/98 backdrop-blur-lg border-t border-[#F0E6E4] overflow-y-auto px-6 py-6 shadow-2xl z-50 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-4">
            {navigationLinks.map((link) => {
              const hasDropdown = Boolean(link.children && link.children.length > 0);

              if (hasDropdown) {
                return (
                  <div key={link.label} className="border-b border-[#F0E6E4] pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#781C1C] block mb-2">
                      {link.label}
                    </span>
                    <div className="grid grid-cols-1 gap-2 pl-2">
                      {link.children?.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 py-2 text-sm font-semibold text-[#202124] hover:text-[#781C1C]"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#F8E9E7] flex items-center justify-center shrink-0">
                            {getIcon(sub.icon)}
                          </div>
                          <span>{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold py-2 border-b border-[#F0E6E4] ${
                    location.pathname === link.href ? 'text-[#781C1C]' : 'text-[#202124]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4">
              <Button
                to="/request-demo"
                variant="primary"
                size="lg"
                arrow
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

