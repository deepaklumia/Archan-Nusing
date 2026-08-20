'use client';

import React, { ReactNode, Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

interface CanvasContainerProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
}

const ThreeCanvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
);

export const CanvasContainer: React.FC<CanvasContainerProps> = ({
  children,
  className = 'w-full h-full min-h-[300px]',
  cameraPosition = [0, 0, 5],
  fov = 50,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`flex items-center justify-center bg-slate-950/40 rounded-xl border border-cyan-500/10 ${className}`}>
        <div className="flex flex-col items-center gap-2 text-cyan-400/70 animate-pulse">
          <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
          <span className="text-xs font-mono">INITIALIZING 3D ENVIRONMENT...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <ThreeCanvas
        camera={{ position: cameraPosition, fov }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full rounded-xl"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#06b6d4" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#14b8a6" />
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </ThreeCanvas>
    </div>
  );
};
