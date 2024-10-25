import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleEffect: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set background to black
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 80; // Further reduced particle count

    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const scales = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2;
      colors[i] = Math.random();
    }

    for (let i = 0; i < particlesCount; i++) {
      scales[i] = Math.random();
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Create material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      vertexShader: `
        attribute float scale;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        void main() {
          if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 1;

    // Animation
    let animationFrameId: number;
    let time = 0;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      time += 0.01;

      // Update particle positions for zoom effect
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      const scales = particlesGeometry.attributes.scale.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const zoomFactor = Math.sin(time) * 0.5 + 0.5; // Oscillates between 0 and 1

        // Zoom effect
        positions[i3] *= 1 + zoomFactor * 0.1;
        positions[i3 + 1] *= 1 + zoomFactor * 0.1;
        positions[i3 + 2] *= 1 + zoomFactor * 0.1;

        // Reset particles if they go too far
        if (Math.abs(positions[i3]) > 1 || Math.abs(positions[i3 + 1]) > 1 || Math.abs(positions[i3 + 2]) > 1) {
          positions[i3] = (Math.random() - 0.5) * 2;
          positions[i3 + 1] = (Math.random() - 0.5) * 2;
          positions[i3 + 2] = (Math.random() - 0.5) * 2;
        }

        // Update scale for additional visual effect
        scales[i] = Math.abs(Math.sin(time + i * 0.1)) * 0.5 + 0.5;
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      particlesGeometry.attributes.scale.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticleEffect;