// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZqyIjcUHh5idx0GwcBQhsfiyBhWvrm0g",
  authDomain: "crm-cts.firebaseapp.com",
  projectId: "crm-cts",
  storageBucket: "crm-cts.appspot.com",
  messagingSenderId: "886113478836",
  appId: "1:886113478836:web:e36a03a9190e3304508fe1"
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);

export const notify = (msg) =>
  toast.error(msg, {
    theme: "colored",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });