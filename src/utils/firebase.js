import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_KEY } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: FIREBASE_KEY,
    authDomain: "tanfi-d9d97.firebaseapp.com",
    projectId: "tanfi-d9d97",
    storageBucket: "tanfi-d9d97.appspot.com",
    messagingSenderId: "606334424775",
    appId: "1:606334424775:web:a0deb6d98ddf62616890e2",
    measurementId: "G-FLT7TXMGF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();