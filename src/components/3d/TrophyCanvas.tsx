'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const TrophyCanvas: React.FC = () => {
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
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);
    const goldenLight = new THREE.DirectionalLight(0xfbbf24, 2);
    goldenLight.position.set(5, 5, 5);
    scene.add(goldenLight);

    const trophyGroup = new THREE.Group();
    trophyGroup.position.set(0, -0.2, 0);

    // Trophy Base
    const baseGeo = new THREE.CylinderGeometry(0.5, 0.6, 0.25, 32);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9, roughness: 0.2 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = -1.1;
    trophyGroup.add(base);

    // Stem
    const stemGeo = new THREE.CylinderGeometry(0.15, 0.25, 0.5, 32);
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.95, roughness: 0.15 });
    const stem = new THREE.Mesh(stemGeo, goldMat);
    stem.position.y = -0.7;
    trophyGroup.add(stem);

    // Cup
    const cupGeo = new THREE.CylinderGeometry(0.7, 0.2, 1.0, 32);
    const cup = new THREE.Mesh(cupGeo, goldMat);
    cup.position.y = 0.05;
    trophyGroup.add(cup);

    // Handles
    const handleGeo = new THREE.TorusGeometry(0.4, 0.06, 16, 32, Math.PI);
    const handleL = new THREE.Mesh(handleGeo, goldMat);
    handleL.position.set(-0.68, 0.15, 0);
    handleL.rotation.z = Math.PI / 2;
    trophyGroup.add(handleL);

    const handleR = new THREE.Mesh(handleGeo, goldMat);
    handleR.position.set(0.68, 0.15, 0);
    handleR.rotation.z = -Math.PI / 2;
    trophyGroup.add(handleR);

    // Floating Stars
    const star1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    star1.position.set(-1.1, 1.0, 0.3);
    trophyGroup.add(star1);

    const star2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x10b981 })
    );
    star2.position.set(1.1, 1.1, -0.3);
    trophyGroup.add(star2);

    scene.add(trophyGroup);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      trophyGroup.rotation.y = elapsed * 0.5;
      trophyGroup.position.y = -0.2 + Math.sin(elapsed * 1.5) * 0.06;
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
