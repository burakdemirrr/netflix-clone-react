// Import the functions you need from the SDKs you need
import { initializeApp ,} from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCsx4E4gfcs__ZtPhlr4tECXpZqaOtSvw",
  authDomain: "netflix-clone-71f2c.firebaseapp.com",
  projectId: "netflix-clone-71f2c",
  storageBucket: "netflix-clone-71f2c.appspot.com",
  messagingSenderId: "603256800486",
  appId: "1:603256800486:web:bcb35dd32a7efc3d3ca727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth();
export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
}
export function login(email,password){
    return signInWithEmailAndPassword(auth,email,password);
}
export function logout(){
    return signOut(auth);
}
export function useAuth(){
    const [currentuser,setCurrentUser]=useState();

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,user=>{setCurrentUser(user)});
        return unsub;
    },[])

    return currentuser;
}
