import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const app = firebase.initializeApp({
        apiKey: "AIzaSyA0AUNvypAsuu-0OSrMlXwWx5X7o1Rtnz4",
        authDomain: "pet-project-demo.firebaseapp.com",
        projectId: "pet-project-demo",
        storageBucket: "pet-project-demo.appspot.com",
         messagingSenderId: "537603280079",
        appId: "1:537603280079:web:a1e91973b0154cd480bbba"
})

export const google = new firebase.auth.GoogleAuthProvider();