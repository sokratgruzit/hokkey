import * as THREE from 'three';
import { useFrame, useLoader, extend, Canvas } from '@react-three/fiber';
import { useMemo, useRef, useState, Suspense } from 'react';
import { TextureLoader } from 'three';
import { shaderMaterial } from '@react-three/drei';

import styles from './Coach.module.css';

// === Фото из точек ===

const vertexShader = `
  precision mediump float;

    attribute vec3 offset;
    varying vec2 vUv;

    uniform float uProgress;
    uniform float uTime;

    // easing функция
    float ease(float t) {
    return t * t * (3.0 - 2.0 * t);
    }

    void main() {
    vUv = position.xy * 0.5 + 0.5;

    float t = ease(uProgress);

    // эффект глубины + пульсация
    vec3 startPos = offset + vec3(0.0, 0.0, 2.0);
    float flicker = sin(uTime * 10.0 + position.x * 40.0 + position.y * 40.0) * (1.0 - t) * 0.02;
    vec3 finalPos = mix(startPos, position, t) + vec3(flicker);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
    gl_PointSize = 1.0;
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

    // fade-in
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

// === Шейдер рамки ===

const borderVertex = `
  precision mediump float;
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 0.5 + 0.5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 2.0;
  }
`;

const borderFragment = `
  precision mediump float;
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    float pulse = 0.5 + 0.5 * sin(uTime * 2.0 + vUv.x * 10.0 + vUv.y * 10.0);
    vec3 color1 = vec3(1.0, 0.0, 0.0);      // #c00 → RGB(255, 0, 0)
    vec3 color2 = vec3(0.5, 0.0, 0.0);      // #7f0000 → RGB(127, 0, 0)
    vec3 finalColor = mix(color1, color2, pulse);
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const BorderShaderMaterial = shaderMaterial(
  { uTime: 0 },
  borderVertex,
  borderFragment
);

extend({ BorderShaderMaterial });

// === Компоненты ===

function ParticlePoints({ imageUrl }) {
  const texture = useLoader(TextureLoader, imageUrl);
  const shaderRef = useRef();
  const [progress, setProgress] = useState(0);

  const geometry = useMemo(() => {
    const size = 500;
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
    setProgress((prev) => Math.min(prev + delta * 0.5, 1));
    if (shaderRef.current) {
      shaderRef.current.uProgress = progress;
      shaderRef.current.uTime += delta;
    }
  });

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

function BorderPoints() {
  const shaderRef = useRef();
  const geometry = useMemo(() => {
    const count = 400;
    const positions = [];

    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      const x = t * 2 - 1;
      positions.push(x, 1, 0);     // top
      positions.push(x, -1, 0);    // bottom
      positions.push(-1, x, 0);    // left
      positions.push(1, x, 0);     // right
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geom;
  }, []);

  useFrame((_, delta) => {
    if (shaderRef.current) {
      shaderRef.current.uTime += delta;
    }
  });

  return (
    <points geometry={geometry}>
      <borderShaderMaterial ref={shaderRef} uTime={0} transparent />
    </points>
  );
}

// === Главный экспорт ===

export function ParticleImage({ imageUrl }) {
  return (
    <Canvas camera={{ position: [0, 0, 1.5], near: 0.1, far: 1000 }} className={styles.canvas}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <ParticlePoints imageUrl={imageUrl} />
        <BorderPoints />
      </Suspense>
    </Canvas>
  );
}
