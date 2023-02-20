import { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import Planet from "./Planet";

import planetsData from "../../../data";

const Planets = () => {
  const { name } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const filterData = planetsData.filter((planet) => planet.name === name);
    setPlanet(filterData);
  }, [name]);

  if (planet) {
    return (
      <>
        <Canvas>
          <pointLight color="#f6f3ea" position={[6, 1, 6]} intensity={1.2} />
          <Suspense fallback={null}>
            <Planet map={planet[0].texture} />
            <Stars
              radius={300}
              depth={60}
              count={10000}
              factor={7}
              saturation={0}
              fade={true}
            />
          </Suspense>
        </Canvas>
      </>
    );
  }
};

export default Planets;
