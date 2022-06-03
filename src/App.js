import "./index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./componentes/Card";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import { GiCardRandom } from "react-icons/gi";
import { RiHome2Line } from "react-icons/ri";
import { FiUsers, FiList } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-[#316181]">
        <div class="container-fluid">
          <a class="font-bold text-white h-auto" href="#">
            {/* <img
              className="max-h-12 my-1"
              src="http://portal.rybena.com.br/site-rybena/assets/img/logos/ryb_logo_big.png"
            /> */}
            <GiCardRandom className="mx-4" size={60} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-center content-between mr-[212px]"
            id="navbarNavAltMarkup"
          >
            <div>
              <a class="nav-link mx-2" aria-current="page" href="/">
                <RiHome2Line className="text-white" size={30} />
              </a>
            </div>

            <a class="nav-link mx-2" aria-current="page" href="/jogadores">
              <FiUsers className="text-white" size={30} />
            </a>
            <a class="nav-link mx-2" aria-current="page" href="/pontos">
              <FiList className="text-white" size={30} />
            </a>
          </div>
        </div>
      </nav>

      <div className="w-full text-center font-sans">
        <h1 className="text-5xl font-bold">
          Copa <strong className="text-[#316181]">Rybená</strong> de Magic (CRM)
        </h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/jogadores" element={<Card />} />
          {/* <Route path="/pontos" element={<Card />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
