import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  collection,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { Item } from '../types/types';

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
const storage = getStorage();

export async function addFileToStorage(imgName: string, file: File) {
  await uploadBytes(ref(storage, `items/${imgName}`), file).catch(e =>
    console.log(e)
  );
}

/**
 * @imgName
 * 확장자명 포함
 */
export async function getImgUrl(imgName: string) {
  return await getDownloadURL(ref(storage, `items/${imgName}`)).catch(e =>
    console.log(e)
  );
}

export async function addToAllItems(item: Item) {
  await updateDoc(doc(db, 'items', 'specific'), {
    allItems: arrayUnion(item),
  });
}

export async function addToShoppingBasket(uid: string, item: Item) {
  await updateDoc(doc(db, 'users', uid), {
    shoppingBasket: arrayUnion(item),
  });
}

export async function addToWishList(uid: string, item: Item) {
  await updateDoc(doc(db, 'users', uid), {
    wishList: arrayUnion(item),
  });
}

export async function addNewItmeToBrand(table: string, item: Item) {
  await updateDoc(doc(db, 'items', table), {
    shoes: arrayUnion(item),
  });
}

export async function getData(title: string, table: string) {
  const titleRef = collection(db, title);
  return await getDoc(doc(titleRef, table)).then(res => res.data());
}

export async function setItemData(itemId: string, item: Item) {
  await setDoc(doc(db, 'items', itemId), {
    detail: item,
  });
}

export async function setUser(uid: string) {
  await setDoc(doc(db, 'users', uid), {
    wishList: [],
    shoppingBasket: [],
  });
}

export async function login() {
  return await signInWithPopup(auth, provider) //
    .then(async result => {
      const validateNewUser = await getData('users', result.user.uid);
      //신규 회원일시 데이터 생성
      if (!validateNewUser) {
        await setUser(result.user.uid);
      }

      //어드민 여부 검증
      const admins = await getData('users', 'admins');
      const user = {
        userName: result.user.displayName,
        userProfileURL: result.user.photoURL,
        uid: result.user.uid,
        admin: admins?.ids.includes(result.user.uid),
        wishList: validateNewUser ? validateNewUser.wishList : [],
        shoppingBasket: validateNewUser ? validateNewUser.shoppingBasket : [],
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
