import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { firebaseConfig } from "./firebase-config.js";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
