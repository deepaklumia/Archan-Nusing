'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere, Cylinder } from '@react-three/drei';

export const DNAHelix: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = t * 0.4;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    }
  });

  const numPairs = 24;
  const radius = 1.3;
  const heightStep = 0.28;
  const twistAngle = 0.35;

  const basePairs = Array.from({ length: numPairs }).map((_, i) => {
    const y = (i - numPairs / 2) * heightStep;
    const angle = i * twistAngle;

    const x1 = Math.cos(angle) * radius;
    const z1 = Math.sin(angle) * radius;
    const x2 = Math.cos(angle + Math.PI) * radius;
    const z2 = Math.sin(angle + Math.PI) * radius;

    return {
      id: i,
      y,
      pos1: [x1, y, z1] as [number, number, number],
      pos2: [x2, y, z2] as [number, number, number],
      center: [(x1 + x2) / 2, y, (z1 + z2) / 2] as [number, number, number],
      angle,
      color1: i % 2 === 0 ? '#06b6d4' : '#14b8a6',
      color2: i % 2 === 0 ? '#10b981' : '#38bdf8',
    };
  });

  return (
    <group ref={groupRef} scale={0.75} position={[0, 0, 0]}>
      {basePairs.map((pair) => (
        <group key={pair.id}>
          {/* Strand 1 Nucleotide Sphere */}
          <Sphere args={[0.14, 16, 16]} position={pair.pos1}>
            <meshStandardMaterial color={pair.color1} emissive={pair.color1} emissiveIntensity={0.8} />
          </Sphere>

          {/* Strand 2 Nucleotide Sphere */}
          <Sphere args={[0.14, 16, 16]} position={pair.pos2}>
            <meshStandardMaterial color={pair.color2} emissive={pair.color2} emissiveIntensity={0.8} />
          </Sphere>

          {/* Hydrogen Bond Connecting Cylinder */}
          <group position={pair.center} rotation={[0, -pair.angle, 0]}>
            <Cylinder args={[0.03, 0.03, radius * 2, 8]} rotation={[0, 0, Math.PI / 2]}>
              <meshStandardMaterial color="#64748b" transparent opacity={0.6} metalness={0.8} />
            </Cylinder>
          </group>
        </group>
      ))}

      {/* Center Energy Pulse Core */}
      <Cylinder args={[0.05, 0.05, numPairs * heightStep, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#38bdf8" emissive="#06b6d4" emissiveIntensity={0.5} transparent opacity={0.4} />
      </Cylinder>
    </group>
  );
};
