'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Sphere, Torus, Cylinder, Box } from '@react-three/drei';

interface SceneElementProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

// 3D Nurse Character Avatar
function NurseCharacter(props: SceneElementProps) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.5) * 0.15;
    group.current.position.y = Math.sin(t * 1.2) * 0.08 - 0.2;
  });

  return (
    <group ref={group} {...props}>
      {/* Head */}
      <Sphere args={[0.45, 32, 32]} position={[0, 1.45, 0]}>
        <meshStandardMaterial color="#fcd34d" roughness={0.4} />
      </Sphere>

      {/* Hair */}
      <Sphere args={[0.48, 32, 32]} position={[0, 1.52, -0.05]} scale={[1, 0.9, 1]}>
        <meshStandardMaterial color="#334155" roughness={0.8} />
      </Sphere>

      {/* Medical Nurse Cap */}
      <group position={[0, 1.88, 0]}>
        <Cylinder args={[0.35, 0.4, 0.18, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ffffff" roughness={0.2} />
        </Cylinder>
        {/* Cyan Nurse Cross Emblem on Cap */}
        <Box args={[0.12, 0.04, 0.02]} position={[0, 0.02, 0.36]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
        </Box>
        <Box args={[0.04, 0.12, 0.02]} position={[0, 0.02, 0.36]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
        </Box>
      </group>

      {/* Nurse Scrub Coat Body */}
      <Cylinder args={[0.42, 0.65, 1.2, 32]} position={[0, 0.6, 0]}>
        <meshStandardMaterial color="#0e7490" roughness={0.3} metalness={0.1} />
      </Cylinder>

      {/* White Nurse Apron / Stethoscope Lapel */}
      <Box args={[0.3, 1.1, 0.05]} position={[0, 0.6, 0.32]}>
        <meshStandardMaterial color="#f8fafc" roughness={0.2} />
      </Box>

      {/* Stethoscope around neck */}
      <Torus args={[0.38, 0.03, 16, 32, Math.PI * 1.2]} position={[0, 1.05, 0.05]} rotation={[Math.PI / 2.3, 0, 0]}>
        <meshStandardMaterial color="#0284c7" metalness={0.6} roughness={0.2} />
      </Torus>

      {/* Chest Badge / ID Tag */}
      <Box args={[0.16, 0.22, 0.02]} position={[-0.22, 0.75, 0.35]} rotation={[0, 0, -0.1]}>
        <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.4} />
      </Box>

      {/* Base Glowing Halo Ring */}
      <Torus args={[0.9, 0.02, 16, 64]} position={[0, -0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} />
      </Torus>
    </group>
  );
}

// 3D Floating Stethoscope
function FloatingStethoscope(props: SceneElementProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = t * 0.4;
      ref.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={ref} {...props}>
        {/* Chestpiece Disk */}
        <Cylinder args={[0.35, 0.35, 0.1, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#38bdf8" metalness={0.9} roughness={0.1} emissive="#0284c7" emissiveIntensity={0.3} />
        </Cylinder>
        {/* Rubber Tubing Loop */}
        <Torus args={[0.6, 0.04, 16, 48, Math.PI * 1.5]} position={[0.4, 0.5, 0]}>
          <meshStandardMaterial color="#0f766e" roughness={0.3} />
        </Torus>
      </group>
    </Float>
  );
}

// 3D Floating Medical Cross Symbol
function FloatingCross(props: SceneElementProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.z = Math.sin(t * 0.6) * 0.3;
      ref.current.rotation.y = t * 0.5;
    }
  });

  return (
    <Float speed={2.5} floatIntensity={1.2}>
      <group ref={ref} {...props}>
        <Box args={[0.8, 0.25, 0.25]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.8} />
        </Box>
        <Box args={[0.25, 0.8, 0.25]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.8} />
        </Box>
      </group>
    </Float>
  );
}

// 3D Floating Syringe
function FloatingSyringe(props: SceneElementProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.x = t * 0.3;
      ref.current.rotation.y = Math.cos(t * 0.4) * 0.4;
    }
  });

  return (
    <Float speed={1.8} floatIntensity={0.8}>
      <group ref={ref} {...props} rotation={[0, 0, Math.PI / 4]}>
        {/* Transparent Barrel */}
        <Cylinder args={[0.15, 0.15, 1.2, 32]} position={[0, 0, 0]}>
          <meshPhysicalMaterial color="#e0f2fe" transparent opacity={0.6} roughness={0.1} transmission={0.9} />
        </Cylinder>
        {/* Medicine Liquid Inside */}
        <Cylinder args={[0.13, 0.13, 0.7, 32]} position={[0, -0.15, 0]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.6} />
        </Cylinder>
        {/* Needle Tip */}
        <Cylinder args={[0.01, 0.02, 0.5, 16]} position={[0, 0.85, 0]}>
          <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.1} />
        </Cylinder>
      </group>
    </Float>
  );
}

export const HeroScene: React.FC = () => {
  return (
    <>
      <NurseCharacter position={[0, -0.6, 0]} />
      <FloatingStethoscope position={[-2.2, 0.8, -0.5]} scale={0.9} />
      <FloatingCross position={[2.1, 1.1, -0.8]} scale={0.85} />
      <FloatingSyringe position={[2.2, -0.9, -0.4]} scale={0.8} />

      {/* Orbiting Ambient Medical Spheres */}
      <Float speed={3} floatIntensity={1.5}>
        <Sphere args={[0.12, 16, 16]} position={[-1.8, -1.2, 0.5]}>
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1} />
        </Sphere>
        <Sphere args={[0.08, 16, 16]} position={[1.4, 1.8, 0.2]}>
          <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={1} />
        </Sphere>
      </Float>
    </>
  );
};
