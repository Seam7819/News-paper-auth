import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA60Fg1eCJw0uQc0OGpzmht_y_W7x1QSAA",
  authDomain: "dragon-news-auth-c8352.firebaseapp.com",
  projectId: "dragon-news-auth-c8352",
  storageBucket: "dragon-news-auth-c8352.firebasestorage.app",
  messagingSenderId: "433505617256",
  appId: "1:433505617256:web:b295745a557eb892e502dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;