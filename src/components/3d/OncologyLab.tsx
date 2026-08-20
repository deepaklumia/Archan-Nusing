'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere, Torus, Cylinder, Float } from '@react-three/drei';

export const OncologyLab: React.FC = () => {
  const cellGroupRef = useRef<THREE.Group>(null);
  const ringGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (cellGroupRef.current) {
      cellGroupRef.current.rotation.y = t * 0.3;
      cellGroupRef.current.rotation.z = Math.sin(t * 0.4) * 0.2;
    }
    if (ringGroupRef.current) {
      ringGroupRef.current.rotation.x = t * 0.5;
      ringGroupRef.current.rotation.y = t * 0.4;
    }
  });

  return (
    <group position={[0, 0, 0]} scale={0.85}>
      {/* Central Glowing Cell Nucleus */}
      <group ref={cellGroupRef}>
        <Sphere args={[0.7, 32, 32]}>
          <meshStandardMaterial color="#14b8a6" emissive="#0d9488" emissiveIntensity={0.8} roughness={0.3} wireframe />
        </Sphere>
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={1} />
        </Sphere>
      </group>

      {/* Chemotherapy Molecular Orbit Rings */}
      <group ref={ringGroupRef}>
        <Torus args={[1.3, 0.02, 16, 64]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.9} />
        </Torus>
        <Torus args={[1.6, 0.02, 16, 64]} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.9} />
        </Torus>
      </group>

      {/* Orbiting Chemo Molecules */}
      <Float speed={3} floatIntensity={1.2}>
        <Sphere args={[0.12, 16, 16]} position={[1.4, 0.6, 0.5]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} />
        </Sphere>
        <Sphere args={[0.1, 16, 16]} position={[-1.3, -0.8, -0.4]}>
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={1} />
        </Sphere>
      </Float>

      {/* Base Diagnostic Screen Grid */}
      <Cylinder args={[1.8, 1.8, 0.04, 32]} position={[0, -1.2, 0]}>
        <meshStandardMaterial color="#0f172a" roughness={0.5} metalness={0.8} />
      </Cylinder>
      <Torus args={[1.8, 0.02, 16, 64]} position={[0, -1.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={1} />
      </Torus>
    </group>
  );
};
