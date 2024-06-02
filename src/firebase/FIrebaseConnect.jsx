import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyDjLCfCqrQFg0_H3cm_d16eZjjk-cuaRi0",
        authDomain: "cosmic-blacksale-v2.firebaseapp.com",
        projectId: "cosmic-blacksale-v2",
        storageBucket: "cosmic-blacksale-v2.appspot.com",
        messagingSenderId: "507991228195",
        appId: "1:507991228195:web:3badd58ac11b921a581696",
        measurementId: "G-99HF8M0JEW"
};

const firebase = initializeApp(firebaseConfig);
const fireDB = getFirestore(firebase)
const auth = getAuth(firebase)

export {auth, fireDB}