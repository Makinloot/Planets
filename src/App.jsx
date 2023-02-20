import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Planets from "./components/Planets/Planets";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/:name" element={<Planets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
