import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDXOroOvefljEVBcFA_yoQWpZ65uIJw4Vw",
  authDomain: "fractal-9e549.firebaseapp.com",
  projectId: "fractal-9e549",
  storageBucket: "fractal-9e549.appspot.com",
  messagingSenderId: "1049814895149",
  appId: "1:1049814895149:web:a613b4a9fd5d7bc5bbc6a4",
  measurementId: "G-KJ50E6H7S8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db =  getFirestore(app)
export const storage = getStorage(app)