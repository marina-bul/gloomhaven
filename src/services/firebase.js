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

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
const database = fire.database();

export default database;
