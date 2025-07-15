// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB9EeckzO1Mmj_PHmRKnyR-qpDWCkcF3Xs",
  authDomain: "portfolio-55173.firebaseapp.com",
  projectId: "portfolio-55173",
  storageBucket: "portfolio-55173.appspot.com",
  messagingSenderId: "268645271513",
  appId: "1:268645271513:web:aa24bd5e94dd1d98673bc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database };
