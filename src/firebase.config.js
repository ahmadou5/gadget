import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUTNNPNoqtUtfIJJy9A89zIQ4aKSnz09A",
  authDomain: "gadgetapp-7685c.firebaseapp.com",
  databaseURL: "https://gadgetapp-7685c-default-rtdb.firebaseio.com",
  projectId: "gadgetapp-7685c",
  storageBucket: "gadgetapp-7685c.appspot.com",
  messagingSenderId: "1022938508156",
  appId: "1:1022938508156:web:9062636ae28ce7f24012f9"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
