/* eslint-disable no-unused-vars */
import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { auth, db } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsadmin] = useState(false);

  const logOut = () => {
    signOut(auth);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({ hd: "ac.sce.ac.il" }); //allows only SCE email in SignIn
    provider.addScope("profile");
    provider.addScope("email");

    return signInWithPopup(auth, provider);
  };

  const createUserDocument = async (userAuth) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    //if user data does not exists -> create/set the document with data from userAuth in my collection
    if (!userSnapshot.exists()) {
      const { displayName, email, photoURL } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          photoURL,
        });
      } catch (error) {
        console.log("error creating the user", error.message);
      }
    }
    //if user data exists -> return userDocRef
    return userDocRef;
  };

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      console.log("User", currentUser);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const fetchDoc = async () => {
      if (user) {
        const adminRef = doc(db, "admins", user.uid);
        const adminSnap = await getDoc(adminRef);
        if (adminSnap.exists()) {
          setIsadmin(true);
        } else {
          setIsadmin(false);
        }
      }
    };
    fetchDoc();
  }, [user]);
  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        createUserDocument,
        user,
        logOut,
        isLoading,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
