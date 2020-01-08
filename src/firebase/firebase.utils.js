import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAoWkhJIbc-_M194EgI4r8RCTubN5d4kuE",
  authDomain: "crown-db-501a0.firebaseapp.com",
  databaseURL: "https://crown-db-501a0.firebaseio.com",
  projectId: "crown-db-501a0",
  storageBucket: "crown-db-501a0.appspot.com",
  messagingSenderId: "192820776447",
  appId: "1:192820776447:web:80f4a51bd5ca3a3848abca",
  measurementId: "G-TEFDDP3D0W"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const ref = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await ref.get();
  console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await ref.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }
  return ref;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;