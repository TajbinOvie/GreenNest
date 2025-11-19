import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password) => {
    setLoading(true);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  };

  const signIn = async (email, password) => {
    setLoading(true);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const provider = new GoogleAuthProvider();

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      await currentUser.reload(); 
      const refreshedUser = auth.currentUser;

      
      setUser({
        ...refreshedUser,
        displayName: refreshedUser.displayName,
        photoURL: refreshedUser.photoURL,
        email: refreshedUser.email,
        uid: refreshedUser.uid,
      });
    } else {
      setUser(null);
    }
    setLoading(false);
  });

  return () => unSubscribe();
}, []);


  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    provider,
    loading,
    setLoading,
    updateUser,
    auth, 
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
