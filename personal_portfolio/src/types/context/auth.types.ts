import { User } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';

export interface UseAuth {
  isUserLoggedIn: boolean;
  isEmailUser: boolean;
  isGoogleUser: boolean;
  isAppleUser: boolean;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
  currentUser?: User;
}
