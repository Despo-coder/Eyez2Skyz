import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCxRReCpJafY9cfGvBqXdZB2B_r8aHGXYw',
  authDomain: 'eyez-2-skiez.firebaseapp.com',
  projectId: 'eyez-2-skiez',
  storageBucket: 'eyez-2-skiez.appspot.com',
  messagingSenderId: '971425888567',
  appId: '1:971425888567:web:6e5d9a3ca826d57797c2b2',
};

// Initialize Firebase
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = { displayName: '' }
) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  //   console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  //   console.log(userSnapshot);
  //   console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    //If the user exists then return the displayName and email from userAuth
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  } else {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  } else {
    return await signInWithEmailAndPassword(auth, email, password);
  }
};
