import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBevjreEkvkBORAAP_sTYRtom1ML-5WKvE",
  authDomain: "think-piece-react.firebaseapp.com",
  databaseURL: "https://think-piece-react.firebaseio.com",
  projectId: "think-piece-react",
  storageBucket: "think-piece-react.appspot.com",
  messagingSenderId: "524000936971"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

window.firebase = firebase;

export default firebase;
