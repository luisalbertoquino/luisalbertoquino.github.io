const firebaseConfig = {
  apiKey: "AIzaSyDtrF5Jybpvhk48xg1CnNN3_ylPVa37SYU",
  authDomain: "portafolio-web-92007.firebaseapp.com",
  projectId: "portafolio-web-92007",
  storageBucket: "portafolio-web-92007.firebasestorage.app",
  messagingSenderId: "938690861198",
  appId: "1:938690861198:web:221fb5f097434e3ffdd1df",
  measurementId: "G-GYX3R10DWT"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

console.log("Firebase initialized successfully");
