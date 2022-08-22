import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBK2-tCYMPU3Gddbf__Fu3YW6DlLSGRLNY",
  authDomain: "miniblog-f8304.firebaseapp.com",
  projectId: "miniblog-f8304",
  storageBucket: "miniblog-f8304.appspot.com",
  messagingSenderId: "661513234070",
  appId: "1:661513234070:web:3ea7b7a9a45dd0f50584b7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}