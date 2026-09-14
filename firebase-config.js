// ============================================================
// Configuración de Firebase — PEGÁ ACÁ tu configuración
// ============================================================
//
// Cómo conseguirla:
// 1. Andá a https://console.firebase.google.com y creá un proyecto (gratis).
// 2. Dentro del proyecto: "Compilación" (Build) → "Firestore Database" → "Crear base de datos"
//    (elegí modo "producción", cualquier ubicación te sirve).
// 3. En "Reglas" (Rules) de Firestore, pegá esto y publicá (deja leer/escribir a cualquiera,
//    suficiente para esta app que no maneja datos sensibles):
//
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /urqui/{document=**} {
//          allow read, write: if true;
//        }
//      }
//    }
//
// 4. En el panel del proyecto: ⚙️ (Configuración del proyecto) → bajá hasta "Tus apps" →
//    ícono "</>" (Web) → registrá una app (nombre: lo que quieras, no hace falta Hosting).
// 5. Te va a mostrar un objeto "firebaseConfig" — copialo tal cual y pegalo abajo,
//    reemplazando el objeto de ejemplo.

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAgaO4a2nUIhW2Oh6RXZpcM4-T11zxVnLs,
  authDomain: "urquiapp.firebaseapp.com",
  projectId: "urquiapp",
  storageBucket: "urquiapp.firebasestorage.app",
  messagingSenderId: "60824910134",
  appId: "1:60824910134:web:0b73081653598dda305b97",
};
