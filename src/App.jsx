import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import planetsData from '../data'

import Planets from "./components/Planets/Planets";



function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Planets map={planetsData[4].texture} />
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
    </div>
  );
}

export default App;
