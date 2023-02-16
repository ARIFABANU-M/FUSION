import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6ezMbE9ONg2vWDccNoKM-FWY36K1eanY",
    authDomain: "asses-c4714.firebaseapp.com",
    projectId: "asses-c4714",
    storageBucket: "asses-c4714.appspot.com",
    messagingSenderId: "1006309617874",
    appId: "1:1006309617874:web:b3fbde941dba995f177d0b",
    measurementId: "G-ME3JJTN756"
  };


  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);