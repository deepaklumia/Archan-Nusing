'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const SpineModelCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedVertebra, setSelectedVertebra] = useState<string>('L4-L5 Lumbar Spine Care');

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

    const spineGroup = new THREE.Group();

    // Central spinal cord
    const cordGeo = new THREE.CylinderGeometry(0.04, 0.04, 3.2, 16);
    const cordMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const cord = new THREE.Mesh(cordGeo, cordMat);
    spineGroup.add(cord);

    const vertebraeData = [
      { y: 1.2, scale: 0.35, color: 0x38bdf8, name: 'C1-C7 Cervical Region' },
      { y: 0.5, scale: 0.45, color: 0x06b6d4, name: 'T1-T12 Thoracic Spine' },
      { y: -0.2, scale: 0.55, color: 0x14b8a6, name: 'L1-L5 Lumbar Spine Care' },
      { y: -0.9, scale: 0.6, color: 0x10b981, name: 'Sacrum & Pelvic Alignment' },
    ];

    vertebraeData.forEach((v) => {
      // Vertebra disk
      const diskGeo = new THREE.CylinderGeometry(v.scale, v.scale * 0.9, 0.22, 32);
      const diskMat = new THREE.MeshStandardMaterial({
        color: v.color,
        roughness: 0.2,
        metalness: 0.7,
      });
      const disk = new THREE.Mesh(diskGeo, diskMat);
      disk.position.y = v.y;
      spineGroup.add(disk);

      // Cushion
      const cushionGeo = new THREE.CylinderGeometry(v.scale * 0.85, v.scale * 0.85, 0.08, 32);
      const cushionMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.7 });
      const cushion = new THREE.Mesh(cushionGeo, cushionMat);
      cushion.position.y = v.y - 0.15;
      spineGroup.add(cushion);

      // Radar Ring
      const ringGeo = new THREE.TorusGeometry(v.scale + 0.25, 0.015, 16, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: v.color });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.y = v.y;
      ring.rotation.x = Math.PI / 2;
      spineGroup.add(ring);
    });

    scene.add(spineGroup);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      spineGroup.rotation.y = elapsed * 0.5;
      spineGroup.position.y = Math.sin(elapsed * 1.2) * 0.05;
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
    <div className="relative w-full h-full min-h-[360px]">
      <div ref={containerRef} className="w-full h-full" />
      <div className="absolute top-4 right-4 bg-slate-900/90 border border-cyan-400/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] font-mono text-cyan-300 shadow-xl">
        <span className="text-teal-400 font-bold">ORTHO FOCUS:</span> {selectedVertebra}
      </div>
    </div>
  );
};
