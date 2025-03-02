import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../pages/login/redux/login.slice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
  }
}) 

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;