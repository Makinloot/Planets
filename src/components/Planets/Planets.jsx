import { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";

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
    const { texture, name, clouds } = planet[0];

    return (
      <>
        <Canvas>
          <pointLight color="#f6f3ea" position={[6, 1, 6.5]} intensity={1.4} />
          <Suspense fallback={null}>
            <Planet map={texture} name={name} clouds={clouds} />
          </Suspense>
        </Canvas>
      </>
    );
  }
};

export default Planets;
