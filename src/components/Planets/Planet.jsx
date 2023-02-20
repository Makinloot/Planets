import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";


const Planet = ({ map }) => {

  const [planetMap] = useLoader(TextureLoader, [map]);
  const planetRef = useRef()
  
  useFrame(({ clock }) => {
    planetRef.current.rotation.y = clock.getElapsedTime() / 10
  })

  return (
    <>
      <mesh ref={planetRef} position={[0, 0, 1]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial 
          map={planetMap}
          metalness={.3}
          roughness={.7}
        />
      </mesh>
    </>
  );
};

export default Planet;
