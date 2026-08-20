'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const DNAHelixCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const cyanLight = new THREE.DirectionalLight(0x06b6d4, 2);
    cyanLight.position.set(5, 5, 5);
    scene.add(cyanLight);

    const dnaGroup = new THREE.Group();

    const numPairs = 24;
    const radius = 1.3;
    const heightStep = 0.28;
    const twistAngle = 0.35;

    const sphereGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const mat1 = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const mat2 = new THREE.MeshBasicMaterial({ color: 0x14b8a6 });
    const bondMat = new THREE.MeshStandardMaterial({ color: 0x64748b, transparent: true, opacity: 0.6 });

    for (let i = 0; i < numPairs; i++) {
      const y = (i - numPairs / 2) * heightStep;
      const angle = i * twistAngle;
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      // Sphere 1
      const s1 = new THREE.Mesh(sphereGeo, i % 2 === 0 ? mat1 : mat2);
      s1.position.set(x1, y, z1);
      dnaGroup.add(s1);

      // Sphere 2
      const s2 = new THREE.Mesh(sphereGeo, i % 2 === 0 ? mat2 : mat1);
      s2.position.set(x2, y, z2);
      dnaGroup.add(s2);

      // Connecting Bond
      const bondGeo = new THREE.CylinderGeometry(0.025, 0.025, radius * 2, 8);
      const bond = new THREE.Mesh(bondGeo, bondMat);
      bond.position.set(0, y, 0);
      bond.rotation.set(0, -angle, Math.PI / 2);
      dnaGroup.add(bond);
    }

    scene.add(dnaGroup);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      dnaGroup.rotation.y = elapsed * 0.4;
      dnaGroup.rotation.x = Math.sin(elapsed * 0.2) * 0.15;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[300px]" />
  );
};
