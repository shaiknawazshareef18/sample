import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCsTbyVEtzQF4_WC40cc8StJveZlim1F-8",
    authDomain: "uc-cs-proj.firebaseapp.com",
    projectId: "uc-cs-proj",
    storageBucket: "uc-cs-proj.appspot.com",
    messagingSenderId: "1012431146150",
    appId: "1:1012431146150:web:36e845235a099386f6b867",
    measurementId: "G-ZZN5WNF5RC"
});

const AuthContext = createContext();

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(AuthProvider);
};

// Provider hook that creates auth object and handles state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const sendSignInLinkToEmail = email => {
    return firebase
      .auth()
      .sendSignInLinkToEmail(email, {
        url: 'https://react-firebase-passwordless.vercel.app/confirm',
        handleCodeInApp: true,
      })
      .then(() => {
        return true;
      });
  };

  const signInWithEmailLink = (email, code) => {
    return firebase
      .auth()
      .signInWithEmailLink(email, code)
      .then(result => {
        setUser(result.user);
        return true;
      });
  };

  const logout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      setIsAuthenticating(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const values = {
    user,
    isAuthenticating,
    sendSignInLinkToEmail,
    signInWithEmailLink,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};