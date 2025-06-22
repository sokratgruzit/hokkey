import { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three-stdlib";
import * as THREE from "three";

function Model() {
    const ref = useRef();
    const model = useLoader(FBXLoader, "/models/coach.fbx");
    const texture = useLoader(THREE.TextureLoader, "/models/coach_uv.png");

    useEffect(() => {
        model.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    map: texture,
                });
                child.material.needsUpdate = true;
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

export default function Coach() {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
            <ambientLight />
            <directionalLight position={[2, 2, 2]} />
            <Model />
            <OrbitControls />
        </Canvas>
    );
}
