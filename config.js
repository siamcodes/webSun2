import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPpf5dZe0GftukzVNOMsehWFj0Rf1E1h8",
    authDomain: "web-sun2.firebaseapp.com",
    projectId: "web-sun2",
    storageBucket: "web-sun2.appspot.com",
    messagingSenderId: "556879019956",
    appId: "1:556879019956:web:e261651813301a85b03ce1",
    measurementId: "G-B8VNMMBZ3R"
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}