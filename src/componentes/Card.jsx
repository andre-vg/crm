import React, { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Card(props) {
  const { jogador } = props;
  const [aberto, setAberto] = useState(false);

  const handleAbrir = () => {
    setAberto(!aberto);
  };

  return (
    <motion.div
      layout
      animate={{
        scale: aberto ? 1.05 : 1,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className={
        !aberto
          ? "h-48 w-48 bg-blue-600 rounded-full shadow-md blur-[0.5px] shadow-blue-300 transition-all duration-500"
          : "grid grid-cols-1 poppins bg-blue-gray-800 h-[19.9rem] w-[20.5rem] rounded-2xl shadow-md shadow-blue-500 transition-colors duration-500"
      }
      onClick={handleAbrir}
    >
      <motion.div layout className="flex">
        <motion.div>
          <motion.img
            
            animate={{
              scale: aberto ? 1 : 1,
              transition: { duration: 0.5, ease: "backInOut" },
            }}
            src={jogador.foto}
            alt="foto"
            className={
              !aberto
                ? "h-48 w-48 rounded-full grayscale-[85%]"
                : "h-48 w-48 rounded-tl-2xl rounded-br-2xl shadow-lg border-b-2 border-r-2 border-dashed border-blue-300"
            }
          />
        </motion.div>

        {!aberto ? (
          ""
        ) : (
          <motion.div className="">
            <motion.div className="text-blue-300 px-3 mt-3">
              <p>
                Nome:{" "}
                <span className="text-white decoration-blue-300 underline">
                  {jogador.nome}
                </span>
              </p>
            </motion.div>
            <motion.div>
              <p className="text-blue-300 px-3">
                Idade: <span className="text-white ">{jogador.idade}</span>
              </p>
            </motion.div>
            <motion.div>
              <p className="text-blue-300 px-3">
                Deck: <span className="text-white ">{jogador.deck}</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
      {aberto ? (
        <motion.div className="flex px-3">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </motion.div>
      ) : (
        ""
      )}
    </motion.div>
  );
}

export default Card;
