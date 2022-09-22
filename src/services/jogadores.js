import { collection, onSnapshot, addDoc, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const crudJogadores = {
  async getJogadores() {
    onSnapshot(
      collection(db, "jogadores"),
      orderBy("nome", "desc"),
      (snapshot) => {
        let jogadores = [];
        snapshot.forEach((doc) => {
          jogadores.push(doc.data());
        });
        // console.log("firebase",messages);
        return jogadores;
      }
    );
  },

  // async addCarona(info) {
  //   console.log("info", info);
  //   try {
  //     await addDoc(collection(db, "caronas"), info);
  //     // console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // },
};

export default crudJogadores;