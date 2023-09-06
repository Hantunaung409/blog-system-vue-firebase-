import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBprvW5r-Ff-cTKj6zdZewI-7cP1ke-ECU",
  authDomain: "vue-blog-system-45848.firebaseapp.com",
  projectId: "vue-blog-system-45848",
  storageBucket: "vue-blog-system-45848.appspot.com",
  messagingSenderId: "205688158491",
  appId: "1:205688158491:web:3f9f33e40f1722aa45fbbe"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }