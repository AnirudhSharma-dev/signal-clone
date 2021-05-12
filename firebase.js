import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2OAME0MfqMHuL1jbohICX2yNYB6bac0M",
  authDomain: "signal-clone-app-7fc60.firebaseapp.com",
  projectId: "signal-clone-app-7fc60",
  storageBucket: "signal-clone-app-7fc60.appspot.com",
  messagingSenderId: "924602069128",
  appId: "1:924602069128:web:fa9a257e037071aa866f3d",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
