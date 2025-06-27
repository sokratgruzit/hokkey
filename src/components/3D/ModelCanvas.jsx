import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { FBXLoader } from "three-stdlib";
import * as THREE from "three";
import { useRef, useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";

import styles from "./Coach.module.css";

function LoaderSyncToRedux() {
  const { active } = useProgress();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
        type: "SET_LOADING",
        payload: active
    });
  }, [active]);

  return null;
}

function CoachModel({ coachId, scale, position }) {
    const ref = useRef();
    const model = useLoader(FBXLoader, `/models/${coachId}.fbx`);
    const texture = useLoader(THREE.TextureLoader, `/models/${coachId}.png`);

    useEffect(() => {
        model.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({ map: texture });
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [model, texture]);

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.005;
        }
    });

    return <primitive ref={ref} object={model} scale={scale} position={position} />;
}

export function ModelCanvas({ coachId, scale = 0.008, position }) {
    return (
        <Canvas 
            camera={{ position: [0, 0, 30] }} 
            className={styles.canvas}
        >
            <ambientLight intensity={0.01} />
            <directionalLight
                position={[5, 10, 5]}
                intensity={5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <Suspense fallback={null}>
                <CoachModel coachId={coachId} scale={scale} position={position} />
            </Suspense>
        </Canvas>
    );
}
