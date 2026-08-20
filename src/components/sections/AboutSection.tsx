'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, ShieldCheck, Stethoscope, Sparkles } from 'lucide-react';
import { DNAHelixCanvas } from '@/components/3d/DNAHelixCanvas';
import { GlassCard } from '@/components/ui/GlassCard';
import { PORTFOLIO_DATA } from '@/lib/data';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'Compassionate Patient Advocacy',
      description: 'Prioritizing empathy, emotional support, and dignity across every stage of clinical recovery and palliative care.',
      accent: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/20'
    },
    {
      icon: ShieldCheck,
      title: 'Precision Clinical Practice',
      description: 'Strict adherence to aseptic protocols, medication safety, oncology infusion standards, and rapid vital diagnosis.',
      accent: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20'
    },
    {
      icon: Activity,
      title: 'Continuous Healthcare Growth',
      description: 'Commitment to cutting-edge nursing research, evidence-based practices, and interdisciplinary surgeon collaboration.',
      accent: 'text-teal-400',
      bg: 'bg-teal-500/10 border-teal-500/20'
    }
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-slate-950/60">
      {/* 3D DNA Helix Background Ambient Container */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-[600px] opacity-35 pointer-events-none">
        <DNAHelixCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ARCHANA KUMARI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white">
            Transforming Compassion into <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Clinical Excellence
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A dedicated B.Sc. Nursing graduate with specialized experience in oncology chemotherapy administration and orthopedic post-operative trauma care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main 3D Floating Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <GlassCard glowColor="cyan" className="p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 p-[1px] shadow-lg shadow-cyan-500/20 shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                    <Stethoscope className="w-7 h-7 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    Archana Kumari
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    B.Sc. Nursing | Aryabhatt Knowledge University
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PORTFOLIO_DATA.personal.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-cyan-500/20 text-center">
                  <div className="text-2xl font-black font-heading text-cyan-400">100%</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">Care Dedication</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-teal-500/20 text-center">
                  <div className="text-2xl font-black font-heading text-teal-400">3.2k+</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">Clinical Hours</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-emerald-500/20 text-center">
                  <div className="text-2xl font-black font-heading text-emerald-400">2 Units</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">Specialty Hospitals</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Pillars of Care */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  <GlassCard glowColor="teal" className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl border ${pillar.bg} ${pillar.accent} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-heading font-bold text-white">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
