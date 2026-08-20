'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  Stethoscope,
  Baby,
  Users,
  Brain,
  HeartPulse,
  Activity,
  Sparkles,
  Layers,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { PORTFOLIO_DATA } from '@/lib/data';
import { soundManager } from '@/lib/audio';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Baby,
  Users,
  Brain,
  HeartPulse,
  Activity,
};

export const EducationSection: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<number>(0);
  const edu = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="relative py-28 overflow-hidden bg-slate-950 medical-grid-bg">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white">
            Education & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Clinical Specializations
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Graduated with First Class Distinction in B.Sc. Nursing from Aryabhatt Knowledge University, mastering rigorous theoretical and hospital clinical curriculums.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 3D Graduation Certificate Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Holographic 3D Certificate Container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 border-cyan-400/40 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl overflow-hidden">
                {/* Certificate Watermark Seal */}
                <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full border-4 border-cyan-500/10 flex items-center justify-center pointer-events-none opacity-40">
                  <GraduationCap className="w-24 h-24 text-cyan-400/20" />
                </div>

                {/* Top Certificate Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center">
                      <Award className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
                        Degree Conferred
                      </span>
                      <h3 className="text-xl font-heading font-black text-white">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {edu.grade}
                  </span>
                </div>

                {/* University Details */}
                <div className="space-y-4 my-6">
                  <div>
                    <span className="text-xs text-slate-400 font-mono">INSTITUTION</span>
                    <h4 className="text-lg font-heading font-bold text-cyan-300">
                      {edu.university}
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
                      <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
                      <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Verified Accreditation Tag */}
                <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="font-medium">INC Curriculum Standard</span>
                  </div>
                  <span className="font-mono text-[10px] text-cyan-400/80">4-Year Full-Time</span>
                </div>
              </div>
            </div>

            {/* Academic Timeline Milestone Card */}
            <GlassCard glowColor="teal" className="p-6">
              <h4 className="text-xs font-mono text-teal-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Academic Timeline Highlights</span>
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-xs">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-white font-bold">Year 1 & 2:</span> Anatomy, Physiology, Microbiology, Nursing Foundations & Community Health.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs">
                  <span className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-white font-bold">Year 3 & 4:</span> Medical Surgical Nursing, Pediatrics, OBG, Critical ICU Care & Oncology Rotations.
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: 3D Subject Explorer & Interactive Book Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  <span>Interactive Nursing Curriculum</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Click any nursing branch to examine course details and clinical competencies.
                </p>
              </div>
            </div>

            {/* Subject Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {edu.subjects.map((subj, idx) => {
                const isSelected = selectedSubject === idx;
                const Icon = iconMap[subj.iconName] || Stethoscope;
                return (
                  <button
                    key={subj.code}
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedSubject(idx);
                    }}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between gap-3 ${
                      isSelected
                        ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-500/20 text-white scale-[1.02]'
                        : 'bg-slate-900/60 border-white/10 text-slate-400 hover:border-cyan-500/40 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400/80">{subj.code}</span>
                    </div>
                    <span className="text-xs font-semibold leading-tight line-clamp-2">
                      {subj.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Subject Detailed 3D Glass Showcase */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSubject}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard glowColor="cyan" className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                        {React.createElement(iconMap[edu.subjects[selectedSubject].iconName] || Stethoscope, { className: 'w-5 h-5' })}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400">
                          MODULE {edu.subjects[selectedSubject].code}
                        </span>
                        <h4 className="text-lg font-heading font-bold text-white">
                          {edu.subjects[selectedSubject].name}
                        </h4>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Core Subject
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {edu.subjects[selectedSubject].description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-slate-950/70 border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
                      ✓ Clinical Bedside Rounds
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-slate-950/70 border border-teal-500/20 text-[11px] font-mono text-teal-300">
                      ✓ Practical Lab Assessment
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-slate-950/70 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                      ✓ Patient Case Studies
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
