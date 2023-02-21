import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";

const Planet = ({ map, name, clouds, rings }) => {
  const [planetMap] = useLoader(TextureLoader, [map]);
  const planetRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    planetRef.current.rotation.y = clock.getElapsedTime() / 10;
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = clock.getElapsedTime() / 10;
    }
  });

  if (name === "earth") {
    const [cloudsMap] = useLoader(TextureLoader, [clouds]);

    return (
      <>
        <mesh ref={planetRef} position={[0, 0, 1]}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial
            map={planetMap}
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
        <mesh ref={cloudsRef} position={[0, 0, 1]}>
          <sphereGeometry args={[1.5005, 64, 64]} />
          <meshPhongMaterial
            map={cloudsMap}
            opacity={0.3}
            depthWrite={true}
            transparent={true}
          />
        </mesh>
      </>
    );
  }

  return (
    <>
      <mesh ref={planetRef} position={[0, 0, 1]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial map={planetMap} metalness={0.3} roughness={0.7} />
      </mesh>
    </>
  );
};

export default Planet;
