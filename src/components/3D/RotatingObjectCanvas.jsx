import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { OBJLoader } from "three-stdlib";
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

function RotatingObj({ path, floatY, rotation, materialProps = {}, scale }) {
    const ref = useRef();
    const obj = useLoader(OBJLoader, path);

    useEffect(() => {
        obj.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    color: "#ffffff",
                    metalness: 0.5,
                    roughness: 0.5,
                    ...materialProps,
                });
                child.castShadow = true;
                child.receiveShadow = true;
                child.rotation.set(...rotation);
            }
        });
    }, [obj]);

    useFrame(({ clock }) => {
        if (ref.current) {
            if (floatY) {
                const t = clock.getElapsedTime();
                ref.current.rotation.y = Math.sin(t) * (Math.PI / 18);
            } else {
                ref.current.rotation.y += 0.01;
            }
        }
    });

    return <primitive object={obj} ref={ref} scale={scale} />;
}

export function RotatingObjectCanvas({ path, floatY = false, rotation = [0, 0, 0], materialProps = {}, scale = 0.01 }) {
    return (
        <Canvas 
            camera={{ position: [0, 2, 3] }} 
            className={styles.canvas}
        >
            <LoaderSyncToRedux />
            <ambientLight intensity={0.2} />
            <directionalLight
                position={[500, 200, 50]}
                intensity={8}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <Suspense fallback={null}>
                <RotatingObj
                    path={path}
                    floatY={floatY}
                    rotation={rotation}
                    materialProps={materialProps}
                    scale={scale}
                />
            </Suspense>
        </Canvas>
    );
}
