import * as THREE from 'three';
import { useFrame, useLoader, extend, Canvas } from '@react-three/fiber';
import { useMemo, useRef, useState, useEffect, Suspense } from 'react';
import { TextureLoader } from 'three';
import { shaderMaterial } from '@react-three/drei';

import styles from './Coach.module.css';

const vertexShader = `
  precision mediump float;

  attribute vec3 offset;
  varying vec2 vUv;

  uniform float uProgress;
  uniform float uTime;

  float ease(float t) {
    return t * t * (3.0 - 2.0 * t);
  }

  void main() {
    vUv = position.xy * 0.5 + 0.5;
    float t = ease(uProgress);
    vec3 startPos = offset + vec3(0.0, 0.0, 2.0);
    float flicker = sin(uTime * 10.0 + position.x * 40.0 + position.y * 40.0) * (1.0 - t) * 0.02;
    vec3 finalPos = mix(startPos, position, t) + vec3(flicker);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
    gl_PointSize = 2.0;
  }
`;

const fragmentShader = `
  precision mediump float;

  uniform sampler2D uTexture;
  uniform float uProgress;
  varying vec2 vUv;

  void main() {
    vec4 color = texture2D(uTexture, vUv);
    if (color.a < 0.1) discard;
    color.a *= uProgress;
    gl_FragColor = color;
  }
`;

const ImageShaderMaterial = shaderMaterial(
  { uTime: 0, uTexture: null, uProgress: 0 },
  vertexShader,
  fragmentShader
);

extend({ ImageShaderMaterial });

function ParticlePoints({ imageUrl, onComplete }) {
  const texture = useLoader(TextureLoader, imageUrl);
  const shaderRef = useRef();
  const [progress, setProgress] = useState(0);
  const completeRef = useRef(false);

  const geometry = useMemo(() => {
    const size = 280;
    const positions = [];
    const offsets = [];

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const px = (x / (size - 1)) * 2 - 1;
        const py = (y / (size - 1)) * 2 - 1;
        positions.push(px, py, 0);
        offsets.push(px + (Math.random() - 0.5) * 2, py + (Math.random() - 0.5) * 2, 0);
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geom.setAttribute('offset', new THREE.Float32BufferAttribute(offsets, 3));
    return geom;
  }, []);

  useFrame((_, delta) => {
    setProgress((prev) => Math.min(prev + delta * 0.3, 1));
    if (shaderRef.current) {
      shaderRef.current.uProgress = progress;
      shaderRef.current.uTime += delta;
    }
  });

  useEffect(() => {
    if (progress === 1 && !completeRef.current) {
      completeRef.current = true;
      if (typeof onComplete === 'function') {
        onComplete();
      }
    }
  }, [progress, onComplete]);

  return (
    <points geometry={geometry}>
      <imageShaderMaterial
        ref={shaderRef}
        uTexture={texture}
        uProgress={progress}
        uTime={shaderRef.current?.uTime || 0}
        transparent
      />
    </points>
  );
}

export function ParticleImage({ imageUrl, onComplete }) {
  return (
    <Canvas camera={{ position: [0, 0, 1.5], near: 0.1, far: 1000 }} className={styles.canvas}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <ParticlePoints onComplete={onComplete} imageUrl={imageUrl} />
      </Suspense>
    </Canvas>
  );
}
