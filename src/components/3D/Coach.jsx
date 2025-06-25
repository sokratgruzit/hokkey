import { useRef, useEffect } from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { FBXLoader, OBJLoader } from "three-stdlib";
import * as THREE from "three";

import styles from "./Coach.module.css";

function ResponsiveCamera() {
    const { camera } = useThree();

    useEffect(() => {
        const updateCamera = () => {
            const aspect = window.innerWidth / window.innerHeight;
            camera.position.z = aspect < 1.2 ? 10 : 8;
            camera.updateProjectionMatrix();
        };

        updateCamera();
        window.addEventListener("resize", updateCamera);
        return () => window.removeEventListener("resize", updateCamera);
    }, [camera]);

    return null;
}

function RotatingObj({ path, position, scale, rotation = [0, 0, 0], floatY = false, materialProps = {} }) {
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
        if (!ref.current) return;
        if (floatY) {
            const t = clock.getElapsedTime();
            ref.current.rotation.y = Math.sin(t) * (Math.PI / 18);
        } else {
            ref.current.rotation.y += 0.01;
        }
    });

    return <primitive ref={ref} object={obj} position={position} scale={scale} />;
}

function Model({ coachId, scale }) {
    const ref = useRef();
    const model = useLoader(FBXLoader, `/models/${coachId}.fbx`);
    const texture = useLoader(THREE.TextureLoader, `/models/${coachId}.png`);

    useEffect(() => {
        model.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({ map: texture });
                child.material.needsUpdate = true;
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [model, texture]);

    useFrame(() => {
        if (ref.current) ref.current.rotation.y += 0.005;
    });

    return (
        <primitive
            ref={ref}
            object={model}
            position={[4.5, -2.2, 0]}
            scale={scale}
        />
    );
}

function Coach({ coachId }) {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 2, 8], fov: 50 }}
            className={styles.canvas}
        >
            <ResponsiveCamera />
            <ambientLight intensity={0.01} />
            <directionalLight
                position={[5, 10, 5]}
                intensity={5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <Environment preset="night" />
            <Model coachId={coachId} scale={0.0085} />
            <RotatingObj
                path="/models/cup.obj"
                position={[-3.35, 2.6, 0.5]}
                scale={0.0022}
                materialProps={{ color: "#FFF", metalness: 1.5, roughness: 0.35 }}
            />
            <RotatingObj
                path="/models/brain.obj"
                position={[0, 2.13, 0]}
                scale={0.05}
                floatY
                rotation={[-Math.PI / 2, 0, Math.PI / 0.27]}
                materialProps={{ color: "#FFF", metalness: 1.5, roughness: 0.35 }}
            />
            <RotatingObj
                path="/models/stick.obj"
                position={[3.35, 2.1, 0.5]}
                scale={0.015}
                floatY
                rotation={[-Math.PI / 2, 0, Math.PI]}
                materialProps={{ color: "#FFF", metalness: 1.5, roughness: 0.35 }}
            />
            <ContactShadows
                position={[0, -1.2, 0]}
                opacity={0.4}
                scale={10}
                blur={1.5}
                far={7}
            />
        </Canvas>
    );
}

export default Coach;
