import React from "react";
import { useEffect } from "react";
import { auth } from "../firebase";

function Home() {
  return (
    <div>
      {auth.currentUser ? (
        <h1>Logado {auth.currentUser}</h1>
      ) : (
        <h1>Não logado</h1>
      )}
    </div>
  );
}

export default Home;
