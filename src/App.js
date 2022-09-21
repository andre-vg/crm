import "./index.css";
import React from "react";
import Jogadores from "./pages/Jogadores";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./componentes/Navbar";
import Camp from "./pages/Camp";

function App() {
  return (
    <>
      <div className="absolute h-full w-full top-0 left-0 bg-blue-gray-50 -z-50 bg-repeat"></div>
      <div>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/jogadores" element={<Jogadores />} />
            <Route path="/campeonatos" element={<Camp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
