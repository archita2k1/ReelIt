import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjBWnzwu9YugDE5It2drkD_-gHIldqeUQ",
  authDomain: "tiktokclone-f41c3.firebaseapp.com",
  projectId: "tiktokclone-f41c3",
  storageBucket: "tiktokclone-f41c3.appspot.com",
  messagingSenderId: "365017210902",
  appId: "1:365017210902:web:9247b6aca06e3204f29537"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()