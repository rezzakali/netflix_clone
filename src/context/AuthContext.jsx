import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import auth, { db } from '../../FirebaseSetup';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const SignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, 'users', email), {
      savedShows: [],
    });
  };
  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const SignOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const checkUserLoggedInOrNot = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      checkUserLoggedInOrNot();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ user, SignIn, SignOut, SignUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
