import { onAuthStateChanged, Unsubscribe, User } from 'firebase/auth';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.config';
import { UseAuth } from '../../types';

const defaultContext = {
  isUserLoggedIn: false,
  isEmailUser: false,
  isGoogleUser: false,
  isAppleUser: false,
  currentUser: undefined,
  setCurrentUser: () => {},
}

const AuthContext: React.Context<UseAuth> = React.createContext<UseAuth>(defaultContext);

export const useAuth: () => UseAuth = (): UseAuth => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [isUserLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [isEmailUser, setIsEmailUser] = useState<boolean>(false);
  const [isGoogleUser, setIsGoogleUser] = useState<boolean>(false);
  const [isAppleUser, setIsAppleUser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);

    return unsubscribe;
  }, []);

  const initializeUser: (user: any) => void = (user: any): void => {
    if (user) {
      setCurrentUser({ ...user });

      const isEmail = user.providerData.some(
        (provider) => provider.providerId === 'password'
      );
      setIsEmailUser(isEmail);
      setUserLoggedIn(true);
    } else {
      setCurrentUser(undefined);
      setUserLoggedIn(false);
    }

    setLoading(false);
  }

  const value = {
    isUserLoggedIn,
    isEmailUser,
    isGoogleUser,
    isAppleUser,
    currentUser,
    setCurrentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
