import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDdGwQgkeioCwwBUOsg5LAU_1Jw5Pu8ALg",
  authDomain: "post-polling-app.firebaseapp.com",
  projectId: "post-polling-app",
  storageBucket: "post-polling-app.appspot.com",
  messagingSenderId: "229750904283",
  appId: "1:229750904283:web:7fe45601d5a29ef41103fe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)