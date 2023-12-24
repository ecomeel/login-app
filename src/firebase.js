// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(window.process.env)
const firebaseConfig = {
    apiKey: 'AIzaSyAPjnDDsX9G7mD8ADdm5shhYIOht5XyzB8',
    authDomain: 'auth-4fb1f.firebaseapp.com',
    projectId: 'auth-4fb1f',
    storageBucket: 'auth-4fb1f.appspot.com',
    messagingSenderId: '391508463836',
    appId: '1:391508463836:web:803985b15da549b7b7a419',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
// Не работает process.env

