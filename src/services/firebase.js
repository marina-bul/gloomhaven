import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCN7vrrPqUmmdH11tCNwYQfQBkml4S576k",
  authDomain: "gloomhaven-fd59f.firebaseapp.com",
  databaseURL: "https://gloomhaven-fd59f-default-rtdb.firebaseio.com",
  projectId: "gloomhaven-fd59f",
  storageBucket: "gloomhaven-fd59f.appspot.com",
  messagingSenderId: "293118229181",
  appId: "1:293118229181:web:a518058b2573ade37dd5d4",
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.database = firebase.database();
    this.userUid = null;
  }

  setUserUid = (uid) => (this.userUid = uid);

  signInWithEmail = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  createUserWithEmail = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  getScenes = () => this.database.ref("/scenes");

  getTeamUsers = () => this.database.ref(`/users`);
}

export default Firebase;
