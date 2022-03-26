import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver  
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDlolWR2G86agOwpYJld9WDq_42ZNF3MrQ',
  authDomain: 'crown-db-d76dd.firebaseapp.com',
  projectId: 'crown-db-d76dd',
  storageBucket: 'crown-db-d76dd.appspot.com',
  messagingSenderId: '300862485512',
  appId: '1:300862485512:web:e101dd9ad1c17455990dbd'
};

const app = initializeApp(config);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocument = async (
  userAuth: User | null,
  additionalData?: object
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('error creating user', err);
    }
  }
  return userDocRef;
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
}

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
}

export default app;
