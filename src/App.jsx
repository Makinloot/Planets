import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Planets from "./components/Planets/Planets";

import mercTexture from './assets/textures/mercury.jpg'

function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Planets map={mercTexture} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
