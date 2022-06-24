
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCXkmb9uierK_mzuWfpAD4t-36052yg_Gg",
  authDomain: "vue-firebase-awal1.firebaseapp.com",
  projectId: "vue-firebase-awal1",
  storageBucket: "vue-firebase-awal1.appspot.com",
  messagingSenderId: "674199649551",
  appId: "1:674199649551:web:5c621669394b888e7c927a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesColRef = collection(db,'cities');

export default citiesColRef;