import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyBwKhvFC9kUo9NeMVOHpA31Ks_hwzZCLTs",
  authDomain: "komunikator-9ab12.firebaseapp.com",
  databaseURL: "https://komunikator-9ab12.firebaseio.com",
  projectId: "komunikator-9ab12",
  storageBucket: "komunikator-9ab12.appspot.com",
  messagingSenderId: "392584934514",
  appId: "1:392584934514:web:8e9778305f3194c8babeeb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;