import "../index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Card() {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        setJogadores(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-[60%] grid grid-cols-3 grid-flow-row ml-[20%] content-center justify-center">
      {jogadores.map((jogador) => {
        return (
          <div class="center">
            <div class="property-card group">
              <div
                class="property-image"
                style={{ backgroundImage: `url(${jogador.url})` }}
                id={jogador.id_jogador}
              >
                <div class="property-image-title"></div>
              </div>
              <div class="property-description">
                <h5 className="text-lg group-hover:text-2xl transition-all duration-500">
                  {" "}
                  {jogador.nme_jogador}{" "}
                </h5>
                <p className="text-md group-hover:text-lg transition-all duration-500">
                  {jogador.dsc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
