'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, HeartPulse, ArrowRight, Mail, Sparkles, Shield } from 'lucide-react';
import { HeroSceneCanvas } from '@/components/3d/HeroSceneCanvas';
import { PORTFOLIO_DATA } from '@/lib/data';
import { soundManager } from '@/lib/audio';

export const HeroSection: React.FC = () => {
  const handleExploreClick = () => {
    soundManager.playClick();
    const el = document.getElementById('experience');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    soundManager.playClick();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden medical-grid-bg">
      {/* Ambient Radial Glowing Lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-teal-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* SVG Real-Time Animated Heartbeat Waveform in Background */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 opacity-20 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 120" className="w-full h-32 text-cyan-400">
          <path
            d="M0,60 L200,60 L220,20 L240,100 L260,10 L280,90 L300,60 L500,60 L520,20 L540,100 L560,10 L580,90 L600,60 L800,60 L820,20 L840,100 L860,10 L880,90 L900,60 L1200,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="animate-ecg"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Storytelling & Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>B.Sc. NURSING PROFESSIONAL</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-tight">
                Archana <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent text-glow-cyan">
                  Kumari
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-cyan-200 font-sans font-medium tracking-wide">
                Healthcare Professional & Clinical Care Specialist
              </p>
            </div>

            {/* Core Vision Quote */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-teal-500" />
              <blockquote className="text-slate-300 italic text-sm sm:text-base leading-relaxed pl-2">
                &ldquo;Dedicated to Compassionate Patient Care, Advanced Clinical Diagnostics, and Healthcare Excellence.&rdquo;
              </blockquote>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleExploreClick}
                className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-slate-950 text-sm font-bold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleContactClick}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-950/40 text-sm font-semibold backdrop-blur-md transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Floating Healthcare Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-md text-center">
                  <div className="text-xl sm:text-2xl font-heading font-black text-cyan-400">{stat.value}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Hospital Experience Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 h-[440px] sm:h-[520px] relative rounded-3xl overflow-hidden bg-slate-900/30 border border-cyan-500/20 backdrop-blur-xl shadow-2xl shadow-cyan-950/50"
          >
            {/* 3D Pure Three.js Canvas */}
            <HeroSceneCanvas />

            {/* Overlaid Medical HUD Metrics */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md text-[11px] font-mono text-cyan-300">
              <HeartPulse className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Vitals: 72 BPM | SpO2: 99%</span>
            </div>

            <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-teal-500/30 backdrop-blur-md text-[11px] font-mono text-teal-300">
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span>Interactive 3D Nurse Scene</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
