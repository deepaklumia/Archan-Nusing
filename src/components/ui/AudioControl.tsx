'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX, Activity } from 'lucide-react';
import { soundManager } from '@/lib/audio';

export const AudioControl: React.FC = () => {
  const [isAudioActive, setIsAudioActive] = useState(false);

  const toggleAudio = () => {
    const active = soundManager.toggleSound();
    setIsAudioActive(active);
  };

  return (
    <button
      onClick={toggleAudio}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all duration-300 backdrop-blur-md shadow-2xl ${
        isAudioActive
          ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-cyan-500/20 animate-pulse'
          : 'bg-slate-900/80 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
      }`}
      title={isAudioActive ? 'Mute Heartbeat & Sound FX' : 'Enable 72 BPM Heartbeat & Sound FX'}
    >
      {isAudioActive ? (
        <>
          <Activity className="w-4 h-4 text-cyan-400 animate-heartbeat" />
          <span className="text-xs font-mono tracking-wider font-semibold">72 BPM SFX ON</span>
          <Volume2 className="w-4 h-4 text-cyan-400" />
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4" />
          <span className="text-xs font-mono tracking-wider">SOUND OFF</span>
        </>
      )}
    </button>
  );
};
