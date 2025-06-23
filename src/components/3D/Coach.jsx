import { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { FBXLoader } from "three-stdlib";
import * as THREE from "three";

function Model({ coachId }) {
    const ref = useRef();
    const model = useLoader(FBXLoader, `/models/${coachId}.fbx`);
    const texture = useLoader(THREE.TextureLoader, `/models/${coachId}.png`);

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

    return <primitive ref={ref} object={model} scale={0.01} />;
}

export default function Coach({ coachId }) {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 2, 5], fov: 50 }}
            style={{ width: "100%", height: "100%" }}
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
            <Model coachId={coachId} />
            <ContactShadows
                position={[0, -1.2, 0]}
                opacity={0.4}
                scale={10}
                blur={1.5}
                far={7}
            />
            <OrbitControls
                enableZoom={true}
                minDistance={3}
                maxDistance={6}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2.5}
            />
        </Canvas>
    );
}
