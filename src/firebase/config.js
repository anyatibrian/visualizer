
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// inital configuration of firebase to the project
const firebaseConfig = {
    apiKey: "AIzaSyDFj5W1gYwDSOjOlgEaElUfm-gJR2Zthlo",
    authDomain: "congo-4da29.firebaseapp.com",
    databaseURL: "https://congo-4da29.firebaseio.com",
    projectId: "congo-4da29",
    storageBucket: "congo-4da29.appspot.com",
    messagingSenderId: "1037403182244",
    appId: "1:1037403182244:web:f3875cb18a9f8d72174231",
    measurementId: "G-6RRGRPF2H0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({})
export default firebase
