import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDZGccrPVVwA7rdzVQJxbHN45LQBLi_zn8",
  authDomain: "netflix-movie-c9f77.firebaseapp.com",
  projectId: "nested-comment-system-2e56a",
  storageBucket: "netflix-movie-c9f77.appspot.com",
  messagingSenderId: "837405390844",
  appId: "1:837405390844:web:4ed2998418e694e27ea479"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;