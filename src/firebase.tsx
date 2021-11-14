import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDNvrS5-QfHqovjG5PWHSsIJdj9QI6hZy8",
  authDomain: "app-alimentador-9b1a5.firebaseapp.com",
  databaseURL: "https://app-alimentador-9b1a5-default-rtdb.firebaseio.com",
  projectId: "app-alimentador-9b1a5",
  storageBucket: "app-alimentador-9b1a5.appspot.com",
  messagingSenderId: "510186204859",
  appId: "1:510186204859:web:8ab25b1d5d1fcd0e72c39e",
  measurementId: "G-5F0ERVSX4M"
};

let app;
if (firebase.getApps().length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp()
}

const auth = firebaseAuth.getAuth()

export { auth }

