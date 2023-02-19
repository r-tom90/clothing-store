// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Allows to use Google Sign-In authentication services from firebase
import {
  getAuth,
  // * Imported but not used as we are going for signing in with pop-up
  //   signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Allows to use Firestore DB service from Firebase
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

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

// Google Auth Only
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// * Imported but not used as we are going for signing in with pop-up
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// Firestore
export const db = getFirestore();

// A method to upload categories from the shop data to firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

// Creating Authenticated user with Username and Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign in with Username and Password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// A function that calls signOut with Auth
export const signOutUser = async () => await signOut(auth);

// A permanently open listener that returns back what is changed
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
