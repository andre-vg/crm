import "../index.css";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import andre from "../assets/andre.jpg";
import Card from "../componentes/Card";

function Jogadores() {
  // const [jogadores, setJogadores] = useState([]);
  const jogadores = [
    {
      id: 1,
      nome: "André",
      apelido: "Dedz",
      idade: 21,
      deck: "Eldrazi",
      foto: "https://i.pinimg.com/originals/55/36/88/553688cc94892030124a5cfd9a9937af.jpg",
    },
    {
      id: 2,
      nome: "Bruno",
      apelido: "Branco",
      idade: 21,
      deck: "Eldrazi",
      foto: "https://wallpaperaccess.com/full/2713199.jpg",
    },
  ];

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/")
  //     .then((response) => {
  //       setJogadores(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="flex mt-12 mx-9 justify-evenly">
      <AnimatePresence onExitComplete mode="sync">
        {jogadores.map((jogador) => (
          <Card jogador={jogador} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Jogadores;
