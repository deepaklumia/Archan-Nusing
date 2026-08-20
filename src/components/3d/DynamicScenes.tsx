'use client';

import dynamic from 'next/dynamic';
import React from 'react';

export const DynamicHeroScene = dynamic(
  () => import('./HeroScene').then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
      </div>
    ),
  }
);

export const DynamicDNAHelix = dynamic(
  () => import('./DNAHelix').then((mod) => mod.DNAHelix),
  {
    ssr: false,
    loading: () => null,
  }
);

export const DynamicSpineModel = dynamic(
  () => import('./SpineModel').then((mod) => mod.SpineModel),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
      </div>
    ),
  }
);

export const DynamicOncologyLab = dynamic(
  () => import('./OncologyLab').then((mod) => mod.OncologyLab),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-teal-400 border-t-transparent animate-spin" />
      </div>
    ),
  }
);

export const DynamicTrophy3D = dynamic(
  () => import('./Trophy3D').then((mod) => mod.Trophy3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin" />
      </div>
    ),
  }
);
