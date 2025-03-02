import { createSlice, Slice } from '@reduxjs/toolkit';

import { LoginCredentials } from '../login.types';

export interface LoginState {
  login: LoginCredentials;
}

const initialState: LoginCredentials = {
  username: null,
  password: null,
}

const loginSlice: Slice<LoginCredentials> = createSlice({
  name: "login",
  initialState,
  reducers: {  
    setUsername: (state: LoginCredentials, action): void => {
      state.username = action.payload
    },
    setPassword: (state: LoginCredentials, action): void => {
      state.password = action.payload
    },
  },
});

export const { setPassword, setUsername } = loginSlice.actions;

export default loginSlice.reducer;
