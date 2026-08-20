'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Cylinder, Torus, Float, Sphere, Box } from '@react-three/drei';

export const Trophy3D: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <Float speed={2} floatIntensity={1}>
      <group ref={groupRef} position={[0, -0.2, 0]} scale={0.85}>
        {/* Trophy Cup Base */}
        <Cylinder args={[0.6, 0.7, 0.25, 32]} position={[0, -1.2, 0]}>
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
        </Cylinder>
        <Cylinder args={[0.2, 0.3, 0.6, 32]} position={[0, -0.8, 0]}>
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.2} emissive="#f59e0b" emissiveIntensity={0.3} />
        </Cylinder>

        {/* Cup Bowl */}
        <Cylinder args={[0.75, 0.25, 1.1, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#fbbf24" metalness={0.95} roughness={0.15} emissive="#fbbf24" emissiveIntensity={0.4} />
        </Cylinder>

        {/* Handles */}
        <Torus args={[0.45, 0.08, 16, 32, Math.PI]} position={[-0.75, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />
        </Torus>
        <Torus args={[0.45, 0.08, 16, 32, Math.PI]} position={[0.75, 0.1, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />
        </Torus>

        {/* Glowing Medical Emblem Badge */}
        <Box args={[0.3, 0.3, 0.1]} position={[0, 0.2, 0.75]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} />
        </Box>

        {/* Floating Stars */}
        <Float speed={4} floatIntensity={1.5}>
          <Sphere args={[0.1, 16, 16]} position={[-1.2, 1.1, 0.3]}>
            <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1} />
          </Sphere>
          <Sphere args={[0.1, 16, 16]} position={[1.2, 1.3, -0.3]}>
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={1} />
          </Sphere>
        </Float>
      </group>
    </Float>
  );
};
