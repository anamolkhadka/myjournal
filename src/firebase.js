import { initializeApp } from "firebase/app";
import {
    getFirestore,collection
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB05XQAIeAbuuWzF0ePqkBBHrQwzF0ibo0",
  authDomain: "myjournal-4348a.firebaseapp.com",
  projectId: "myjournal-4348a",
  storageBucket: "myjournal-4348a.appspot.com",
  messagingSenderId: "776251382250",
  appId: "1:776251382250:web:021660d19aaa997ab5ba93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

/// init services
export const db = getFirestore();

// // collection ref
// const userid = useGetid();
// export const colRef = collection(db,'blogs');


