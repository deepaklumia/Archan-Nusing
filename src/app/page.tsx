'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { AudioControl } from '@/components/ui/AudioControl';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      {/* Floating Ambient Sound FX & Heartbeat Controller */}
      <AudioControl />

      {/* Header Navigation Bar */}
      <Navbar />

      {/* Main Healthcare Storytelling Sections */}
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection />
      <TestimonialsSection />
      <ContactSection />

      {/* Healthcare Footer */}
      <Footer />
    </main>
  );
}
