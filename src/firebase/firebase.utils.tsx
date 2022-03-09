import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDlolWR2G86agOwpYJld9WDq_42ZNF3MrQ',
  authDomain: 'crown-db-d76dd.firebaseapp.com',
  projectId: 'crown-db-d76dd',
  storageBucket: 'crown-db-d76dd.appspot.com',
  messagingSenderId: '300862485512',
  appId: '1:300862485512:web:e101dd9ad1c17455990dbd'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
