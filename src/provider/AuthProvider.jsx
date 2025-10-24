import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
export const AuthContext= createContext();

const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading]=useState(true);
    // console.log(user, loading);


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // console.log(user);

    const updateUser = (name, photo) => {
        setLoading(true)
    return updateProfile(auth.currentUser, { displayName: name, photoURL:photo });
  };

  const signIn=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  };

  const googleLogin=()=>{
    return signInWithPopup(auth, googleProvider)
  };

  const logOut=()=>{
    setLoading(true)
    return signOut(auth);
  };

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        // console.log(currentUser)
        setLoading(false)
    });
    return()=>{
        unsubscribe();
    }
  },[]);
     
    const authData = {
        user,
        setUser,
        createUser,
        updateUser,
        logOut,
        signIn,
        googleLogin,
        loading,
        setLoading,
    };
    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;