'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  Activity,
  ShieldAlert,
  Bone,
  Sparkles
} from 'lucide-react';
import { SpineModelCanvas } from '@/components/3d/SpineModelCanvas';
import { OncologyLabCanvas } from '@/components/3d/OncologyLabCanvas';
import { GlassCard } from '@/components/ui/GlassCard';
import { PORTFOLIO_DATA } from '@/lib/data';
import { soundManager } from '@/lib/audio';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('nalanda-ortho');
  const experiences = PORTFOLIO_DATA.experiences;
  const currentExp = experiences.find((e) => e.id === activeTab) || experiences[0];

  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-slate-950/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>CLINICAL EXPERIENCE & HOSPITALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white">
            Specialized Hospital <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Environments & Practice
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on clinical excellence across premier specialized hospitals in Bihar, delivering patient-centric post-operative and oncological care.
          </p>
        </div>

        {/* Hospital Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {experiences.map((exp) => {
            const isActive = activeTab === exp.id;
            const isOrtho = exp.environment3D === 'orthopedic';
            return (
              <button
                key={exp.id}
                onClick={() => {
                  soundManager.playClick();
                  setActiveTab(exp.id);
                }}
                className={`w-full sm:w-auto flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-[1.02]'
                    : 'bg-slate-900/60 border-white/10 text-slate-400 hover:border-cyan-500/40 hover:text-slate-200'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                  {isOrtho ? <Bone className="w-5 h-5" /> : <ShieldAlert className="w-5 h-5" />}
                </div>
                <div>
                  <div className="text-sm font-heading font-bold text-white leading-snug">
                    {exp.hospital}
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-2 mt-0.5">
                    <span>{isOrtho ? 'Orthopedic & Spine Care' : 'Oncology Research & Care'}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Experience Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentExp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Column: 3D Specialized Care Interactive Environment */}
            <div className="lg:col-span-5 h-[420px] sm:h-[480px] relative rounded-3xl overflow-hidden bg-slate-900/40 border border-cyan-500/30 backdrop-blur-xl shadow-2xl">
              {currentExp.environment3D === 'orthopedic' ? (
                <SpineModelCanvas />
              ) : (
                <OncologyLabCanvas />
              )}

              {/* Top HUD Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/85 border border-cyan-500/30 backdrop-blur-md text-[11px] font-mono text-cyan-300">
                <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>
                  {currentExp.environment3D === 'orthopedic' ? '3D Spine Anatomy Simulation' : '3D Chemo Molecular Visualizer'}
                </span>
              </div>

              {/* Bottom Hospital Location Pin */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 p-3 rounded-xl bg-slate-950/90 border border-white/10 backdrop-blur-md text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{currentExp.location}</span>
              </div>
            </div>

            {/* Right Column: Roles, Responsibilities, and Clinical Milestones */}
            <div className="lg:col-span-7 space-y-6">
              <GlassCard glowColor="cyan" className="p-6 sm:p-8 space-y-6">
                {/* Header info */}
                <div className="border-b border-slate-800 pb-5 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {currentExp.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{currentExp.period}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-black text-white">
                    {currentExp.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-300 font-mono">
                    {currentExp.hospital}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {currentExp.description}
                </p>

                {/* Key Clinical Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Clinical Responsibilities & Procedures</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentExp.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Stats Bar */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800">
                  {currentExp.keyStats.map((stat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-center">
                      <div className="text-lg sm:text-xl font-heading font-black text-cyan-400">{stat.value}</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-0.5 truncate">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
