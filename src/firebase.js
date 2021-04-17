import firebase from 'firebase/app';

import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

firebase.initializeApp(
    {
        apiKey: "AIzaSyDQ9SqV2AEi0NSTaclhFn4jeTNlbrhM3eY",
        authDomain: "fir-tut-302e9.firebaseapp.com",
        projectId: "fir-tut-302e9",
        storageBucket: "fir-tut-302e9.appspot.com",
        messagingSenderId: "790656773745",
        appId: "1:790656773745:web:66508ba5bbd135b25435d0"
      }
)

export const auth=firebase.auth();
export const firestore=firebase.firestore();
export const functions=firebase.functions();

export default firebase;