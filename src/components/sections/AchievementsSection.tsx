'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, HeartPulse, CheckCircle, Trophy, Star } from 'lucide-react';
import { TrophyCanvas } from '@/components/3d/TrophyCanvas';
import { GlassCard } from '@/components/ui/GlassCard';
import { PORTFOLIO_DATA } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  Award,
  HeartPulse,
  CheckCircle,
  Shield: ShieldCheck,
};

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-28 overflow-hidden bg-slate-950/70">
      {/* Radial glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            <span>HONORS & CLINICAL MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white">
            Recognized for <br />
            <span className="bg-gradient-to-r from-amber-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Excellence & Dedication
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Commendations, professional awards, and accredited clinical certifications earned through patient advocacy and frontline nursing duties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 3D Floating Trophy Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 h-[400px] sm:h-[480px] relative rounded-3xl overflow-hidden bg-slate-900/40 border border-yellow-500/20 backdrop-blur-xl shadow-2xl shadow-yellow-950/30"
          >
            <TrophyCanvas />

            {/* Overlaid Award Title */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 border border-yellow-500/30 backdrop-blur-md flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-yellow-500/20 text-yellow-400">
                  <Star className="w-4 h-4 fill-yellow-400" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white">Clinical Distinction</div>
                  <div className="text-[11px] text-slate-400 font-mono">B.Sc Nursing Top Performer</div>
                </div>
              </div>
              <span className="font-mono text-yellow-400 font-bold">2024</span>
            </div>
          </motion.div>

          {/* Right Column: Achievements & Certifications List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.achievements.map((item, idx) => {
              const Icon = iconMap[item.icon] || Award;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard glowColor="cyan" className="p-5 h-full flex flex-col justify-between space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {item.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-heading font-bold text-white leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-mono text-cyan-400">
                        {item.issuer} • {item.date}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {item.description}
                    </p>
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
