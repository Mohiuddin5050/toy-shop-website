import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
export const AuthContext= createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }; 
    // console.log(user);

    const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL });
  };

  const signIn=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut=()=>{
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
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
        signIn
    };
    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;