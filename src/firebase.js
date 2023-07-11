// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBeX3usqEYbhUSjczY_G5w3KFkw6oR4kQ",
  authDomain: "chatapp-7decb.firebaseapp.com",
  projectId: "chatapp-7decb",
  storageBucket: "chatapp-7decb.appspot.com",
  messagingSenderId: "43137255983",
  appId: "1:43137255983:web:811c4d63329c645ccdd4da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();

