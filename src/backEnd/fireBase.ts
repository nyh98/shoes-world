import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  collection,
} from 'firebase/firestore';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export async function getData() {
  const titleRef = collection(db, 'title');
  const docSnap = await getDoc(doc(titleRef, 'test'));
  console.log(docSnap.data());
  console.log(docSnap.exists());
}

export async function setData() {
  await setDoc(doc(db, 'title', 'testWeb'), {
    item: 'test12331',
    price: 'test122213',
  });
}

export async function login() {
  await signInWithPopup(auth, provider) //
    .then(result => {
      console.log(result);
      console.log(result.user);
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
      // ...
    });
}

export async function logout() {
  await signOut(auth).catch(e => console.log(e));
}
