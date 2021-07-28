import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcefS0lxYWY14YkQUDPB_QAPBFHns90DU",
  authDomain: "signal-2a954.firebaseapp.com",
  projectId: "signal-2a954",
  storageBucket: "signal-2a954.appspot.com",
  messagingSenderId: "1017865049515",
  appId: "1:1017865049515:web:5bc5076d03801ce3502eee",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
