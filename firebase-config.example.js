// ========================================
// CONFIGURACIÓN DE FIREBASE
// ========================================
// 1. Ve a https://console.firebase.google.com/
// 2. Crea un nuevo proyecto o usa uno existente
// 3. Ve a Configuración del proyecto > Tus apps > Agrega una app web
// 4. Copia la configuración y pégala aquí
// 5. Renombra este archivo a: firebase-config.js
// 6. IMPORTANTE: Agrega firebase-config.js a .gitignore

const firebaseConfig = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Servicios de Firebase
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
