// ========================================
// CONFIGURACIÓN DE FIREBASE
// ========================================
// ⚠️ IMPORTANTE: Este archivo NO debe subirse a GitHub
// Ya está en .gitignore

const firebaseConfig = {
  apiKey: "AIzaSyDtrF5Jybpvhk48xg1CnNN3_ylPVa37SYU",
  authDomain: "portafolio-web-92007.firebaseapp.com",
  projectId: "portafolio-web-92007",
  storageBucket: "portafolio-web-92007.firebasestorage.app",
  messagingSenderId: "938690861198",
  appId: "1:938690861198:web:221fb5f097434e3ffdd1df",
  measurementId: "G-GYX3R10DWT"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Servicios de Firebase
const db = firebase.firestore();
// const storage = firebase.storage(); // NO usaremos Storage
const auth = firebase.auth();
