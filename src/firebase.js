import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUMJrIZhHE5e8EWZSXgr8tv4MsuLM382U",
  authDomain: "aliass-whatsapp-clone.firebaseapp.com",
  projectId: "aliass-whatsapp-clone",
  storageBucket: "aliass-whatsapp-clone.appspot.com",
  messagingSenderId: "952121283963",
  appId: "1:952121283963:web:fb2989dab67988059419de",
  measurementId: "G-36YK4Q7YTM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
