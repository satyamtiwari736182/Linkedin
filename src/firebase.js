import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1yX2PqjGxS6VRwVcYnEblEAB7nbsvq0c",
  authDomain: "linkedin-clone-a0cee.firebaseapp.com",
  projectId: "linkedin-clone-a0cee",
  storageBucket: "linkedin-clone-a0cee.appspot.com",
  messagingSenderId: "823706190383",
  appId: "1:823706190383:web:ec77cb0bc8f5a0aec13cda",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
 