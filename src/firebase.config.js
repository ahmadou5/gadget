import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBfTUEe4NfCC6_hSctH41Lx3yDXs9zGwAk",
    authDomain: "restaurentapp-a388c.firebaseapp.com",
    projectId: "restaurentapp-a388c",
    storageBucket: "restaurentapp-a388c.appspot.com",
    messagingSenderId: "480406990295",
    appId: "1:480406990295:web:36c2fda4b28a039b3baf92"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
