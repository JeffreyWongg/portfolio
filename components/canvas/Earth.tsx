import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");
  const earthRef = useRef<THREE.Group>(null);

  // Automatically rotate the Earth
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001; // Adjust speed as needed
    }
  });

  return (
    <mesh ref={earthRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={earth.scene}
        scale={5}
        position={[0, 0, 1.5]}
        rotation={[-0.1, 0, 0]}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
