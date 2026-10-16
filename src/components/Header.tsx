import React, { useState, useEffect } from 'react';
import { PhoneCall, Users, Menu, X } from 'lucide-react';
import { PROGRAM_INFO } from '../data/programData';
import { SpireLogo } from './SpireLogo';

interface HeaderProps {
  onOpenCounselingModal: () => void;
  onOpenAdminDrawer: () => void;
  onOpenPdfModal?: () => void;
  leadCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCounselingModal,
  onOpenAdminDrawer,
  leadCount,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Why Us', href: '#problem-solution' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Practical Tools', href: '#practical' },
    { name: 'Who Is It For', href: '#who-is-it-for' },
    { name: 'Deliverables', href: '#outcomes' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-amber-500/20 py-2.5'
          : 'bg-slate-950/85 backdrop-blur-sm border-b border-slate-800/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <a href="#" className="flex items-center group">
            <SpireLogo variant="header" size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {leadCount > 0 && (
              <button
                onClick={onOpenAdminDrawer}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                title="View captured leads (Admin/Reviewer)"
              >
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>Leads ({leadCount})</span>
              </button>
            )}

            <button
              onClick={onOpenCounselingModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-400 hover:from-amber-400 hover:to-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/15 hover:shadow-amber-500/25 transition-all active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Book Counselling</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCounselingModal}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-500 text-slate-950"
            >
              Free Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 pb-2 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-slate-300 hover:text-emerald-400 rounded-lg hover:bg-slate-800/50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCounselingModal();
                }}
                className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Free Counselling Call</span>
              </button>
              {leadCount > 0 && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdminDrawer();
                  }}
                  className="w-full py-2 rounded-xl bg-slate-800 text-slate-300 font-medium text-xs flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>View Submitted Leads ({leadCount})</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
