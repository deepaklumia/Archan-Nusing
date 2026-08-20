'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere, Cylinder, Torus, Html } from '@react-three/drei';

export const SpineModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [activeVertebra, setActiveVertebra] = useState<string | null>('L4-L5 Lumbar Spine Care');

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.25 + t * 0.15;
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.05;
    }
  });

  const vertebrae = [
    { name: 'C1-C7 Cervical Region', y: 1.6, color: '#38bdf8', scale: 0.35, label: 'Cervical Spine Trauma' },
    { name: 'T1-T12 Thoracic Spine', y: 0.8, color: '#06b6d4', scale: 0.45, label: 'Thoracic Alignment' },
    { name: 'L1-L5 Lumbar Spine Care', y: 0, color: '#14b8a6', scale: 0.55, label: 'Spine Post-Op Rehab' },
    { name: 'Sacrum & Pelvic Fixation', y: -0.8, color: '#10b981', scale: 0.6, label: 'Bone Immobilization' },
  ];

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={0.9}>
      {/* Central Spinal Canal Neural Tube */}
      <Cylinder args={[0.04, 0.04, 3.2, 16]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
      </Cylinder>

      {/* Vertebrae Column Blocks */}
      {vertebrae.map((vert, idx) => (
        <group
          key={idx}
          position={[0, vert.y, 0]}
          onClick={(e) => {
            e.stopPropagation();
            setActiveVertebra(vert.name);
          }}
        >
          {/* Vertebral Body Disk */}
          <Cylinder args={[vert.scale, vert.scale * 0.9, 0.22, 32]}>
            <meshStandardMaterial
              color={activeVertebra === vert.name ? '#38bdf8' : vert.color}
              emissive={vert.color}
              emissiveIntensity={activeVertebra === vert.name ? 1 : 0.4}
              metalness={0.6}
              roughness={0.2}
            />
          </Cylinder>

          {/* Intervertebral Disc Cushion */}
          <Cylinder args={[vert.scale * 0.85, vert.scale * 0.85, 0.08, 32]} position={[0, -0.15, 0]}>
            <meshStandardMaterial color="#94a3b8" transparent opacity={0.7} />
          </Cylinder>

          {/* Glowing Spinal Process Node */}
          <Sphere args={[0.1, 16, 16]} position={[0, 0, vert.scale + 0.1]}>
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} />
          </Sphere>

          {/* Diagnostic Radar Ring */}
          <Torus args={[vert.scale + 0.25, 0.015, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color={vert.color} emissive={vert.color} emissiveIntensity={0.6} transparent opacity={0.5} />
          </Torus>
        </group>
      ))}

      {/* Interactive Tooltip Label */}
      {activeVertebra && (
        <Html position={[0.8, 0, 0]} center>
          <div className="bg-slate-900/90 border border-cyan-400/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] font-mono text-cyan-300 shadow-xl whitespace-nowrap animate-bounce">
            <span className="text-teal-400 font-bold">ORTHO FOCUS:</span> {activeVertebra}
          </div>
        </Html>
      )}
    </group>
  );
};
