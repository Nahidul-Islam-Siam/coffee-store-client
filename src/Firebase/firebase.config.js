// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg5hbCSqgHJlxKghhgvxMMbEWEsWVSm3U",
  authDomain: "coffee-store-3b95a.firebaseapp.com",
  projectId: "coffee-store-3b95a",
  storageBucket: "coffee-store-3b95a.appspot.com",
  messagingSenderId: "529437223173",
  appId: "1:529437223173:web:37e894bbdf10fdd2b82f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth