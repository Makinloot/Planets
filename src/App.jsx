import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Header from "./components/header/Header";
import Planets from "./components/Planets/Planets";
import Details from "./components/details/Details";

function App() {

  const [ currentPlanet, setCurrentPlanet ] = useState()

  return (
    <Router>
      <div className="App">
        <div className="Stars-container">
          <Canvas>
            <Suspense>
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
        <div className="container">
          <Header currentPlanet={currentPlanet} />
          <Routes>
            <Route
              path="/:name"
              element={
                <div className="grid-container">
                  <Details setPlanet={setCurrentPlanet} />
                  <Planets />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
