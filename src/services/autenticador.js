import { auth, notify } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const AuthService = {
  async isLoggedIn() {
    const user = auth.currentUser;
    return user;
  },

  observeStatus(callback) {
    auth.onAuthStateChanged(callback);
  },

  async LoginWithGoogle() {
    const provider = new GoogleAuthProvider();
    let credential = null;
    let user = null;
    let token = null;

    await signInWithPopup(auth, provider).then((result) => {
      // console.log(result);
      credential = GoogleAuthProvider.credentialFromResult(result);
      token = credential.accessToken;
      user = auth.currentUser.displayName;
      console.log(user, credential, token);
    });

    // if (!auth.currentUser.email.includes("@grupoicts")) {
    //   // console.log("Email não é do sempreceub");
    //   await signOut(auth);
    //   notify("Email não pertence ao CTS");
    //   throw new Error("Error");
    // } else {
    //   // console.log("Logado");
    //   return token, user, credential;
    // }
  },
  async Logout() {
    await signOut(auth)
      .then(() => {
        // console.log("signed out");
      })
      .catch((error) => {
        // console.log(error);
      });
  },
};

export default AuthService;