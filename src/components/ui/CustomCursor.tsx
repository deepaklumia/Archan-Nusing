'use client';

import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (target) {
        const isInteractive =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.getAttribute('role') === 'button';
        setIsPointer(isInteractive);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Reticle Ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/50 transition-transform duration-100 ease-out flex items-center justify-center ${
          isPointer ? 'scale-150 border-teal-300 bg-cyan-500/10' : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
        }}
      >
        <div className="w-1 h-1 bg-cyan-400 rounded-full" />
      </div>

      {/* Soft Glow Trail */}
      <div
        className="fixed top-0 left-0 w-32 h-32 -ml-16 -mt-16 rounded-full bg-cyan-500/10 blur-xl transition-all duration-300 pointer-events-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </div>
  );
};
