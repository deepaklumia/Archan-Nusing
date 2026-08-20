'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Activity,
  HeartPulse
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GlassCard } from '@/components/ui/GlassCard';
import { PORTFOLIO_DATA } from '@/lib/data';
import { soundManager } from '@/lib/audio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roleType: 'Hospital Recruitment / Job Offer',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundManager.playChime(659.25, 'sine', 0.4);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#14b8a6', '#10b981', '#38bdf8'],
        });
      } catch {
        // Confetti fallback
      }
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-slate-950/90 medical-grid-bg">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <HeartPulse className="w-3.5 h-3.5 text-cyan-400" />
            <span>HEALTHCARE COMMAND CENTER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white">
            Connect for <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Clinical Opportunities
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Reach out directly for hospital staffing, clinical nursing appointments, surgical department inquiries, or professional healthcare collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Healthcare Telemetry & Location Marker */}
          <div className="lg:col-span-5 space-y-6">
            {/* Command Status Box */}
            <GlassCard glowColor="cyan" className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center w-3 h-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </div>
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                    Frontline Telemetry
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Ready for Dispatch
                </span>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-950/60 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Primary Inquiries</div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-sm font-medium text-white hover:text-cyan-300 transition-colors break-all"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-950/60 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Call / WhatsApp</div>
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                      className="text-sm font-medium text-white hover:text-teal-300 transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-950/60 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Location & Relocation</div>
                    <div className="text-sm font-medium text-white">
                      {PORTFOLIO_DATA.personal.location} (Open to All Major Indian Metros)
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours / Response Promise */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center gap-3 text-xs text-cyan-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Immediate response guaranteed within 24 hours for hospital and recruiter inquiries.</span>
              </div>
            </GlassCard>

            {/* Verification Badge */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Nursing Portfolio</span>
              </div>
              <span className="font-mono text-[10px] text-cyan-400">Bihar, India</span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Triage Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard glowColor="teal" className="p-6 sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-black text-white">
                    Transmission Received!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Archana Kumari will review your message and respond promptly via your provided email/phone.
                  </p>
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        roleType: 'Hospital Recruitment / Job Offer',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs font-mono hover:bg-cyan-950 transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                      <Send className="w-5 h-5 text-cyan-400" />
                      <span>Initiate Contact Dispatch</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out the triage dispatch form below to connect with Archana Kumari.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">YOUR NAME / ORGANIZATION *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh / Apollo Hospital HR"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. hr@hospital.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">CONTACT NUMBER</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">INQUIRY CATEGORY</label>
                      <select
                        value={formData.roleType}
                        onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      >
                        <option value="Hospital Recruitment / Job Offer">Hospital Recruitment / Job Offer</option>
                        <option value="Clinical Nursing Consultation">Clinical Nursing Consultation</option>
                        <option value="Surgical / Oncology Rotation">Surgical / Oncology Rotation</option>
                        <option value="Academic Collaboration">Academic Collaboration</option>
                        <option value="General Healthcare Inquiry">General Healthcare Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">MESSAGE & CLINICAL SCOPE *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please mention role details, hospital location, specialty requirements, or your query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-slate-950 font-heading font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message to Archana Kumari</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
