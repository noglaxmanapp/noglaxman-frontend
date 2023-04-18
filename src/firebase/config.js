import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import {v4} from 'uuid'
import { 
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MEASUREMENT_ID,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET
} from "../utils/config";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const getFirebaseApp = () => {
  try {
    const configHasValidity = Object.values(firebaseConfig).every(v => v);
    if (configHasValidity) throw new Error("Error al obtener configuracion de Firebase App");
    const app = initializeApp(firebaseConfig);
    if (app) getAuth(app);
    return app;
  } catch (error) {
    console.error("getFirebaseApp", "Error al inicializar Firebase App")
  }
}

export async function uploadFile(file) {
  const firebaseApp = getFirebaseApp();
  const fileData = [];

  if (firebaseApp) {
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, v4());
    fileData.push(await uploadBytes(storageRef, file));
    fileData.push(await getDownloadURL(storageRef).then(url => url));
  }

  return fileData;
}