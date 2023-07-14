import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBOkegkj27Kaq1AaJApw523kdvKXc1vNlA",
  authDomain: "foodezy-4cb08.firebaseapp.com",
  projectId: "foodezy-4cb08",
  storageBucket: "foodezy-4cb08.appspot.com",
  messagingSenderId: "163526530075",
  appId: "1:163526530075:web:3f6bb76d8930fb179b54be",
  measurementId: "G-BQVGFQSTHG",
  databaseURL:"https://foodezy-4cb08-default-rtdb.firebaseio.com"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
