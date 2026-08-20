'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroSceneCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
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

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const cyanLight = new THREE.DirectionalLight(0x06b6d4, 2);
    cyanLight.position.set(5, 5, 5);
    scene.add(cyanLight);

    const tealLight = new THREE.PointLight(0x14b8a6, 2, 20);
    tealLight.position.set(-5, -3, 3);
    scene.add(tealLight);

    // 3. Nurse Character Group
    const nurseGroup = new THREE.Group();
    nurseGroup.position.set(0, -0.6, 0);

    // Head
    const headGeo = new THREE.SphereGeometry(0.42, 32, 32);
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xfcd34d, roughness: 0.5 });
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.set(0, 1.45, 0);
    nurseGroup.add(head);

    // Hair
    const hairGeo = new THREE.SphereGeometry(0.45, 32, 32);
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.set(0, 1.52, -0.05);
    hair.scale.set(1, 0.9, 1);
    nurseGroup.add(hair);

    // Cap
    const capGeo = new THREE.CylinderGeometry(0.32, 0.38, 0.16, 32);
    const capMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.set(0, 1.86, 0);
    nurseGroup.add(cap);

    // Cap Cross Emblem
    const emblemMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const capCrossH = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.02), emblemMat);
    capCrossH.position.set(0, 1.88, 0.35);
    nurseGroup.add(capCrossH);
    const capCrossV = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.02), emblemMat);
    capCrossV.position.set(0, 1.88, 0.35);
    nurseGroup.add(capCrossV);

    // Scrub Body
    const bodyGeo = new THREE.CylinderGeometry(0.4, 0.6, 1.2, 32);
    const scrubMat = new THREE.MeshStandardMaterial({ color: 0x0e7490, roughness: 0.3, metalness: 0.1 });
    const body = new THREE.Mesh(bodyGeo, scrubMat);
    body.position.set(0, 0.6, 0);
    nurseGroup.add(body);

    // Apron
    const apronGeo = new THREE.BoxGeometry(0.28, 1.1, 0.04);
    const apronMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 });
    const apron = new THREE.Mesh(apronGeo, apronMat);
    apron.position.set(0, 0.6, 0.3);
    nurseGroup.add(apron);

    // Stethoscope Loop
    const stethGeo = new THREE.TorusGeometry(0.36, 0.03, 16, 32, Math.PI * 1.2);
    const stethMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.6, roughness: 0.2 });
    const steth = new THREE.Mesh(stethGeo, stethMat);
    steth.position.set(0, 1.05, 0.05);
    steth.rotation.set(Math.PI / 2.3, 0, 0);
    nurseGroup.add(steth);

    // Halo Ring
    const haloGeo = new THREE.TorusGeometry(0.85, 0.02, 16, 64);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.position.set(0, -0.05, 0);
    halo.rotation.set(Math.PI / 2, 0, 0);
    nurseGroup.add(halo);

    scene.add(nurseGroup);

    // 4. Floating Stethoscope
    const stethGroup = new THREE.Group();
    stethGroup.position.set(-2.0, 0.8, -0.5);
    const chestPiece = new THREE.Mesh(
      new THREE.CylinderGeometry(0.32, 0.32, 0.08, 32),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.9, roughness: 0.1 })
    );
    chestPiece.rotation.x = Math.PI / 2;
    stethGroup.add(chestPiece);
    const tube = new THREE.Mesh(
      new THREE.TorusGeometry(0.5, 0.035, 16, 48, Math.PI * 1.5),
      new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.3 })
    );
    tube.position.set(0.3, 0.4, 0);
    stethGroup.add(tube);
    scene.add(stethGroup);

    // 5. Floating Medical Cross
    const crossGroup = new THREE.Group();
    crossGroup.position.set(1.9, 1.1, -0.6);
    const crossMat = new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 0.6 });
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.22, 0.22), crossMat);
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.7, 0.22), crossMat);
    crossGroup.add(crossH);
    crossGroup.add(crossV);
    scene.add(crossGroup);

    // 6. Floating Syringe
    const syringeGroup = new THREE.Group();
    syringeGroup.position.set(2.0, -0.9, -0.4);
    syringeGroup.rotation.z = Math.PI / 4;
    const barrel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 1.0, 32),
      new THREE.MeshStandardMaterial({ color: 0xe0f2fe, transparent: true, opacity: 0.6 })
    );
    const liquid = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.6, 32),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4 })
    );
    liquid.position.y = -0.15;
    const needle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.01, 0.02, 0.4, 16),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 1 })
    );
    needle.position.y = 0.7;
    syringeGroup.add(barrel);
    syringeGroup.add(liquid);
    syringeGroup.add(needle);
    scene.add(syringeGroup);

    // 7. Ambient Floating Spheres
    const sphere1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    sphere1.position.set(-1.6, -1.1, 0.3);
    scene.add(sphere1);

    const sphere2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x14b8a6 })
    );
    sphere2.position.set(1.3, 1.7, 0.2);
    scene.add(sphere2);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Animate Nurse Avatar
      nurseGroup.rotation.y = Math.sin(elapsed * 0.5) * 0.15 + mouseX * 0.2;
      nurseGroup.rotation.x = mouseY * 0.1;
      nurseGroup.position.y = -0.6 + Math.sin(elapsed * 1.2) * 0.05;

      // Animate Floating items
      stethGroup.rotation.y = elapsed * 0.4;
      stethGroup.position.y = 0.8 + Math.sin(elapsed * 1.5) * 0.08;

      crossGroup.rotation.y = elapsed * 0.5;
      crossGroup.rotation.z = Math.sin(elapsed * 0.6) * 0.2;
      crossGroup.position.y = 1.1 + Math.cos(elapsed * 1.3) * 0.08;

      syringeGroup.rotation.x = elapsed * 0.3;
      syringeGroup.position.y = -0.9 + Math.sin(elapsed * 1.4) * 0.06;

      sphere1.position.y = -1.1 + Math.sin(elapsed * 2) * 0.1;
      sphere2.position.y = 1.7 + Math.cos(elapsed * 2.2) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[360px] relative rounded-2xl overflow-hidden" />
  );
};
