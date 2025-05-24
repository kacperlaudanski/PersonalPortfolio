import {
  createUserWithEmailAndPassword,
  UserCredential,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';

import { auth } from './firebase.config';

export const doCreateUserWithEmailAndPassword: (email: string, password: string)
=> Promise<UserCredential> = async (email: string, password: string): Promise<UserCredential> => (
  createUserWithEmailAndPassword(auth, email, password)
);

export const doSignInWithEmailAndPassword: (email: string, password: string)
=> Promise<UserCredential> = (email: string, password: string): Promise<UserCredential> => (
  signInWithEmailAndPassword(auth, email, password)
);

export const signInWithGoogle: () => Promise<UserCredential> = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  return result;
};

export const signOut: () => Promise<void> = (): Promise<void> => auth.signOut();

export const resetPassword = (email: string): Promise<void> => sendPasswordResetEmail(auth, email);

// export const doUpdatePassword: (password: string) => Promise<void> = (password: string): Promise<void> => {
//     return updatePassword(auth.currentUser, password);
//   }

// export const deSendEmailVerification = () => sendEmailVerification(auth.currentUser, {
//   url: `${window.location.origin}/home`
// })
