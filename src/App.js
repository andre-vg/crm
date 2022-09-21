import "./index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./componentes/Card";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./componentes/Navbar";
import Camp from "./pages/Camp";

function App() {
  return (
    <>
      <div className="absolute h-full w-full top-0 left-0 bg-blue-gray-50 -z-50 bg-cover"></div>
      <div>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/jogadores" element={<Card />} />
            <Route path="/campeonatos" element={<Camp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
