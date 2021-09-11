import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBQh_cfp9NsSCpTWUFyWCWIRezBTc0Yr34",
    authDomain: "pro-c67-4f1a2.firebaseapp.com",
    databaseURL: "https://pro-c67-4f1a2-default-rtdb.firebaseio.com",
    projectId: "pro-c67-4f1a2",
    storageBucket: "pro-c67-4f1a2.appspot.com",
    messagingSenderId: "844616302413",
    appId: "1:844616302413:web:6f4e102696c14ea4548104",
    measurementId: "G-HRSGYG7KP2"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase.database();