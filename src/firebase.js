import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkbgG3gjaAd3YGOjFYOBHjdHVGvdOh9K4",
  authDomain: "alias-whatsapp-clone.firebaseapp.com",
  projectId: "alias-whatsapp-clone",
  storageBucket: "alias-whatsapp-clone.appspot.com",
  messagingSenderId: "720522750546",
  appId: "1:720522750546:web:33d8f5e3eec71e4248cd8b",
  measurementId: "G-R7R0T04RPH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
