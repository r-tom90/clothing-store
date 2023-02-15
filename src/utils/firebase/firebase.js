// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Allows to use Google Sign-In authentication services from firebase
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Allows to use Firestore DB service from Firebase
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1CbnzYyJrI1RwET6TKnAayeBvQYKnnTc",
  authDomain: "crwn-clothing-db-4efee.firebaseapp.com",
  projectId: "crwn-clothing-db-4efee",
  storageBucket: "crwn-clothing-db-4efee.appspot.com",
  messagingSenderId: "570593002013",
  appId: "1:570593002013:web:84ebafc78ba3b672813cf4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google Auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
