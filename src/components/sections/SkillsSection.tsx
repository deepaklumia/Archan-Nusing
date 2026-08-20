'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HeartHandshake,
  ShieldAlert,
  Activity,
  Zap,
  Pill,
  MessageSquareHeart,
  ShieldCheck,
  Bone,
  FileSpreadsheet,
  Users,
  Sparkles,
  Award
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { PORTFOLIO_DATA } from '@/lib/data';
import { soundManager } from '@/lib/audio';

const iconMap: Record<string, React.ElementType> = {
  HeartHandshake,
  ShieldAlert,
  Activity,
  Zap,
  Pill,
  MessageSquareHeart,
  ShieldCheck,
  Bone,
  FileSpreadsheet,
  Users,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);

  const categories = ['All', 'Clinical', 'Specialized Care', 'Core Competencies'];

  const filteredSkills = selectedCategory === 'All'
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-slate-950 medical-grid-bg">
      {/* Background glowing orbs */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLINICAL COMPETENCIES & 3D HOLOGRAPHIC SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white">
            Specialized Nursing <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Proficiencies & Mastery
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Holographic matrix of specialized healthcare proficiencies evaluated through intensive clinical rotations and certified hospital procedures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundManager.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 border border-white/10 text-slate-400 hover:border-cyan-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Holographic Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || Activity;
            const isSelected = activeSkillId === skill.id;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => {
                  soundManager.playClick();
                  setActiveSkillId(isSelected ? null : skill.id);
                }}
                className="cursor-pointer"
              >
                <GlassCard
                  glowColor={isSelected ? 'emerald' : 'cyan'}
                  className={`p-6 space-y-4 transition-all duration-300 transform ${
                    isSelected ? 'ring-2 ring-cyan-400 bg-slate-900/90 shadow-2xl scale-[1.02]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400/80 tracking-wider">
                          {skill.category.toUpperCase()}
                        </span>
                        <h4 className="text-sm sm:text-base font-heading font-bold text-white leading-tight">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                    <span className="text-sm font-mono font-bold text-emerald-400">
                      {skill.proficiency}%
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed min-h-[36px]">
                    {skill.description}
                  </p>

                  {/* Animated Proficiency Bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>Proficiency Level</span>
                      <span>{skill.proficiency >= 95 ? 'Mastery' : 'Expert'}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-white/5 p-[1px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400"
                      />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
