import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4M76J74nn7-QR-aCKG5uUrv_FM0Cpqyk",
  authDomain: "facebook-clone-5226b.firebaseapp.com",
  projectId: "facebook-clone-5226b",
  storageBucket: "facebook-clone-5226b.appspot.com",
  messagingSenderId: "853817504313",
  appId: "1:853817504313:web:5dad57c13863165516d3e8",
  measurementId: "G-NTJT2QB489",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
