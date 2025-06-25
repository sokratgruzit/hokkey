import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { FBXLoader, OBJLoader } from "three-stdlib";
import * as THREE from "three";

import styles from "./Coach.module.css";

function RotatingObj({
    path,
    position,
    scale = 0.02,
    rotation = [0, 0, 0],
    floatY = false,
    materialProps = {}
}) {
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
    }, [obj, rotation, materialProps]);

    useFrame(({ clock }) => {
        if (ref.current) {
            if (floatY) {
                const t = clock.getElapsedTime();
                // ref.current.position.y = position[1] + Math.sin(t * 2) * 0.05;
                ref.current.rotation.y = Math.sin(t) * (Math.PI / 18);
            } else {
                ref.current.rotation.y += 0.01;
            }
        }
    });

    return <primitive ref={ref} object={obj} position={position} scale={scale} />;
}

function Model({ coachId, scale = 0.008 }) {
    const ref = useRef();
    const model = useLoader(FBXLoader, `/models/${coachId}.fbx`);
    const texture = useLoader(THREE.TextureLoader, `/models/${coachId}.png`);
    const { camera, size } = useThree();

    const headPos = useMemo(() => {
        const vec = new THREE.Vector3(.75, -.55, 0); 
        vec.unproject(camera);
        return vec;
    }, [camera, size.width, size.height]);

    useEffect(() => {
        model.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    map: texture,
                });
                child.material.needsUpdate = true;
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

    return <primitive 
        ref={ref} 
        object={model} 
        position={[headPos.x, headPos.y, headPos.z]} 
        scale={scale} 
    />;
}

function Cup() {
    const { camera, size } = useThree();

    const position = useMemo(() => {
        const vec = new THREE.Vector3(-.6, 0.7, .5); 
        vec.unproject(camera);
        return vec;
    }, [camera, size.width, size.height]);

    return (
        <RotatingObj 
            path="/models/cup.obj"
            position={[position.x, position.y, position.z]}
            scale={0.0001}
            materialProps={{
                color: "#FFF",         
                metalness: 1.5,
                roughness: 0.35
            }}
        />
    );
}

function Brain() {
    const { camera, size } = useThree();

    const position = useMemo(() => {
        const vec = new THREE.Vector3(0, 0.57, 0); 
        vec.unproject(camera);
        return vec;
    }, [camera, size.width, size.height]);

    return (
        <RotatingObj
            path="/models/brain.obj"
            position={[position.x, position.y, position.z]}
            scale={0.00108}
            floatY={true}
            rotation={[-Math.PI / 2, 0, Math.PI / .27]}
            materialProps={{
                color: "#FFF",         
                metalness: 1.5,
                roughness: 0.35
            }}
        />
    );
}

function Stick() {
    const { camera, size } = useThree();

    const position = useMemo(() => {
        const vec = new THREE.Vector3(.6, 0.57, .5); 
        vec.unproject(camera);
        return vec;
    }, [camera, size.width, size.height]);

    return (
        <RotatingObj 
            path="/models/stick.obj" 
            position={[position.x, position.y, position.z]}
            scale={0.0007}
            floatY={true}
            rotation={[-Math.PI / 2, 0, Math.PI / 1]}
            materialProps={{
                color: "#FFF",         
                metalness: 1.5,
                roughness: 0.35
            }}
        />
    );
}

export default function Coach({ coachId }) {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 2, 8], fov: 50 }}
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
            <Environment preset="night" />
            <Model 
                coachId={coachId} 
                scale={0.00019}
            />
            <Cup />
            <Brain />
            <Stick />
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
