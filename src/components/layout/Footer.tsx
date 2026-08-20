'use client';

import React from 'react';
import { HeartPulse, Mail, MapPin, Phone, ShieldCheck, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';
import { soundManager } from '@/lib/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden text-slate-400 text-sm">
      {/* Background Medical Grid & Ambient Glow */}
      <div className="absolute inset-0 medical-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-heading font-bold text-lg leading-tight">
                  Archana Kumari
                </h3>
                <p className="text-cyan-400 text-xs font-mono">B.Sc. Nursing Professional</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated to clinical excellence, compassionate patient advocacy, and advanced nursing practices across Oncology and Orthopedics.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>INC & Bihar Nursing Council Eligible</span>
            </div>
          </div>

          {/* Column 2: Clinical Centers */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-semibold text-sm tracking-wider uppercase">
              Clinical Affiliations
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300 font-medium">Nalanda Bone & Spine Centre</li>
              <li className="text-slate-500">Orthopedic & Spine Surgery Care</li>
              <li className="text-slate-300 font-medium pt-1">Homi Bhabha Cancer Hospital</li>
              <li className="text-slate-500">Tata Memorial Centre Unit, Muzaffarpur</li>
              <li className="text-slate-300 font-medium pt-1">Aryabhatt Knowledge University</li>
              <li className="text-slate-500">B.Sc Nursing Degree Program</li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-semibold text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About Bio</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">3D Skills</a>
              <a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a>
              <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Center</a>
            </div>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-semibold text-sm tracking-wider uppercase">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-cyan-300">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Archana Kumari. All rights reserved. B.Sc. Nursing Professional Portfolio.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950 transition-colors"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
