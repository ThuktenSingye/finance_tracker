import {initializeApp} from 'firebase/app'
import { getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// import firesbase authentication
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
const app = initializeApp(firebaseConfig)

// init services
const projectFirestore = getFirestore(app)
// when logning in or signing up, the request is send to firebase where it is evaluated
// if detial are valid, it create and send json web token and information about user and using web token we can authenticated  
const projectAuth = getAuth(app)
export {projectFirestore, projectAuth}