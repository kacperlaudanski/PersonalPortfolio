import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1SYsY1A_KHcgBYuIm3ECHx9n0Q3_R3Vk",
  authDomain: "homelibrary-ed9cf.firebaseapp.com",
  projectId: "homelibrary-ed9cf",
  storageBucket: "homelibrary-ed9cf.firebasestorage.app",
  messagingSenderId: "1094870426632",
  appId: "1:1094870426632:web:f152c23289940a3b109dbd"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth =  getAuth(app);

export { app, auth };