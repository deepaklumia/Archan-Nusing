'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '@/lib/audio';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'teal' | 'emerald' | 'blue';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  hoverEffect = true,
  onClick,
}) => {

  const glowStyles = {
    cyan: 'border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
    teal: 'border-teal-500/20 hover:border-teal-400/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]',
    emerald: 'border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]',
    blue: 'border-blue-500/20 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]',
  };

  const handleClick = () => {
    soundManager.playClick();
    if (onClick) onClick();
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={handleClick}
      className={`relative rounded-2xl bg-slate-900/70 backdrop-blur-xl border ${glowStyles[glowColor]} transition-all duration-300 shadow-xl overflow-hidden ${className}`}
    >
      {/* Corner Hologram Indicators */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-sm pointer-events-none" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-sm pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-sm pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400/60 rounded-br-sm pointer-events-none" />

      {/* Subtle ambient light line */}
      <div className="absolute -top-[1px] left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      {children}
    </motion.div>
  );
};
