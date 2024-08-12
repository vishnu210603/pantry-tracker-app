"use client";

import { createContext } from "react";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export const authContext = createContext({
  user: null,
  loading: false,
  googleLoginHandler: async () => {},
  logout: async () => {},
});

export default function AuthContextProvider({ children }) {
  const googleProvider = new GoogleAuthProvider(auth);

  const [user, loading] = useAuthState(auth);

  const googleLoginHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error during login", error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout", error.message);
    }
  };

  const value = {
    user,
    loading,
    googleLoginHandler,
    logout,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
