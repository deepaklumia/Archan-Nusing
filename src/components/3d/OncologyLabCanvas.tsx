'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const OncologyLabCanvas: React.FC = () => {
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
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const cyanLight = new THREE.DirectionalLight(0x06b6d4, 2);
    cyanLight.position.set(5, 5, 5);
    scene.add(cyanLight);

    const labGroup = new THREE.Group();

    // Central Cell Core
    const wireCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0x14b8a6, wireframe: true })
    );
    const innerCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.48, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    labGroup.add(wireCore);
    labGroup.add(innerCore);

    // Orbit Rings
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.02, 16, 64),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4 })
    );
    ring1.rotation.x = Math.PI / 3;
    labGroup.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.6, 0.02, 16, 64),
      new THREE.MeshBasicMaterial({ color: 0x10b981 })
    );
    ring2.rotation.set(-Math.PI / 4, Math.PI / 4, 0);
    labGroup.add(ring2);

    // Orbiting Chemo Molecules
    const mol1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4 })
    );
    mol1.position.set(1.4, 0.5, 0.4);
    labGroup.add(mol1);

    const mol2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x10b981 })
    );
    mol2.position.set(-1.3, -0.7, -0.3);
    labGroup.add(mol2);

    scene.add(labGroup);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      wireCore.rotation.y = elapsed * 0.4;
      wireCore.rotation.z = Math.sin(elapsed * 0.3) * 0.2;
      ring1.rotation.z = elapsed * 0.5;
      ring2.rotation.y = elapsed * 0.6;
      labGroup.rotation.y = elapsed * 0.2;
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
    <div ref={containerRef} className="w-full h-full min-h-[360px]" />
  );
};
