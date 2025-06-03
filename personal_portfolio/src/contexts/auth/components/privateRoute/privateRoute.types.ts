import { User } from 'firebase/auth';

export interface PrivateRouteProps {
  user?: User;
  children: JSX.Element; 
}
