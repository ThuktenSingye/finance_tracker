import firebase from 'firebase/app'
import 'firebase/firestore'
// import firesbase authentication
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAcX1SNj4-06N065nmAnStWu2ZOnn9wyhY",
    authDomain: "mymoney-f8cf0.firebaseapp.com",
    projectId: "mymoney-f8cf0",
    storageBucket: "mymoney-f8cf0.appspot.com",
    messagingSenderId: "67649559553",
    appId: "1:67649559553:web:240188d044ec5c042bb400",
    measurementId: "G-E905K0W4EF"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
// when logning in or signing up, the request is send to firebase where it is evaluated
// if detial are valid, it create and send json web token and information about user and using web token we can authenticated  
const projectAuth = firebase.auth()

export {projectFirestore, projectAuth}