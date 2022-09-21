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
    <>
      <motion.div
        layout
        animate={{ scale: aberto ? 1.1 : 1, transition: { duration: 1, ease:"easeInOut" } }}
        className={
          !aberto
            ? "h-[19.9rem] w-[11.25rem] bg-blue-600 rounded-2xl shadow-md shadow-blue-300 transition-colors duration-500"
            : "h-[19.9rem] w-[17.25rem] bg-blue-gray-800  flex rounded-2xl shadow-md shadow-blue-500 transition-colors duration-500"
        }
        onClick={handleAbrir}
      >
        <motion.div layout className="w-full rounded-2xl">
          <motion.img layout src={jogador.foto} alt="foto" className={!aberto ? "h-[19.9rem] w-[11.25rem] rounded-2xl grayscale-[80%]" : "h-[19.9rem] w-[11.25rem] rounded-l-2xl"} />
        </motion.div>
        {!aberto ? "" : <motion.div>teste</motion.div>}
      </motion.div>
    </>
  );
}

export default Card;
