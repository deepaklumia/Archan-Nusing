'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquareHeart, UserCheck } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { PORTFOLIO_DATA } from '@/lib/data';
import { soundManager } from '@/lib/audio';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = PORTFOLIO_DATA.testimonials;

  const nextTestimonial = () => {
    soundManager.playClick();
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    soundManager.playClick();
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-slate-950 medical-grid-bg">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>COLLEAGUE & PATIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white">
            Words of Trust & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Clinical Appreciation
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Feedback from senior surgeons, department heads, and recovering patients who experienced Archana&apos;s compassionate care firsthand.
          </p>
        </div>

        {/* Carousel 3D Floating Glass Showcase */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard glowColor="teal" className="p-8 sm:p-12 relative overflow-hidden">
                {/* Background Watermark Quote */}
                <Quote className="absolute -top-4 -right-4 w-36 h-36 text-cyan-500/10 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-xs font-mono text-cyan-400">Verified Clinical Review</span>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  {/* Author Meta */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 p-[1px] flex items-center justify-center">
                      <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-cyan-300 font-heading font-bold text-sm">
                        {testimonials[currentIndex].author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-heading font-bold text-white">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-xs text-cyan-400 font-mono">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {testimonials[currentIndex].organization}
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    soundManager.playClick();
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-cyan-400 shadow-md shadow-cyan-400/50' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
