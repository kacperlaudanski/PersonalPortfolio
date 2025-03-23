import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { LoginState, setUsername, setPassword } from '../../redux/login.slice';

import { FormWrapper } from './form.styled';

export const Form: React.FC = (): JSX.Element => {

  const username: string | null = useSelector((state: LoginState) => state.login.username);
  const password: string | null = useSelector((state: LoginState) => state.login.password);
  const dispatch: Dispatch = useDispatch();

  const handleLogin = (e: Event) => {
    e.preventDefault();
    console.log(username, password);
  }


  return (
    <FormWrapper onSubmit={handleLogin}>
      {/* <Input type='text' onChange={(e: React.SyntheticEvent<HTMLInputElement, Event>) => dispatch(setUsername(e.target.value))} />
      <Input type='text' onChange={(e: React.SyntheticEvent<HTMLInputElement, Event>) => dispatch(setPassword(e.target.value))} /> */}
      <button>Login</button>
    </FormWrapper>
  );
};
