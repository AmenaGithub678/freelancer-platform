import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, 
signInWithPopup, 
signOut } from 'firebase/auth';

import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({children}) => {
     
const [user, setUser] = useState(null);

// loading
const [loading,setLoading] = useState(true);

// register
    const createUser = (email,password) =>{
      setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

// Observer 
useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);
   });
   return ()=>{
        unSubscribe();
    }
   
}, []);

// Login 
const signIn =(email,password) =>{
   setLoading(true);
   return signInWithEmailAndPassword(auth,email,password);
}
// logout 
const logOut = () =>{
   return signOut(auth);
}
// google---provider
const provider = new GoogleAuthProvider();

// google
const loginWithGoogle =() =>{
   return signInWithPopup(auth,provider)
}
 const authData = {
       createUser,
       user,
       setUser,
       signIn,
       logOut,
       loginWithGoogle,
      loading,
      setLoading
    }

    return (
<AuthContext value={authData}>
  {children }
</AuthContext>
    );
};

export default AuthProvider;