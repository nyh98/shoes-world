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

export async function getData(title: string, table: string) {
  const titleRef = collection(db, title);
  return await getDoc(doc(titleRef, table)).then(res => res.data());
}

export async function setData() {
  await setDoc(doc(db, 'title', 'testWeb'), {
    item: 'test12331',
    price: 'test122213',
  });
}

export async function login() {
  return await signInWithPopup(auth, provider) //
    .then(async result => {
      const admins = await getData('users', 'admins');
      const user = {
        userName: result.user.displayName,
        userProfileURL: result.user.photoURL,
        uid: result.user.uid,
        admin: admins?.ids.includes(result.user.uid),
      };
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
}

export async function logout() {
  await signOut(auth).catch(e => console.log(e));
}
