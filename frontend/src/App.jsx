import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Clasificacion from "./pages/Clasificacion";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="clasificacion" element={<Clasificacion />} />
      </Routes>
    </>
  );
}

export default App;
