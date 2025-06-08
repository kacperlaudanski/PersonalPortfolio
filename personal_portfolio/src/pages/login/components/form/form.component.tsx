import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { Controller, useForm, UseFormReturn } from 'react-hook-form';
import { NavigateFunction, useNavigate } from 'react-router';

import { Button, Input } from '../../../../components';
import { ButtonTheme, ButtonVariant, Path } from '../../../../enums';
import { doSignInWithEmailAndPassword } from '../../../../firebase';
import { Answers, ControllerRender } from '../../login.types';

import { loginSchema } from './form.schema';
import { FormWrapper, StyledChip } from './form.styled';

export const Form: React.FC = (): JSX.Element => {
  const redirect: NavigateFunction = useNavigate();
  const [isLoginError, setLoginError] = useState<boolean>(false);

  const { control, formState: { errors }, handleSubmit }: UseFormReturn<Answers> = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: (data: Answers) => void = (data: Answers): void => {
    doSignInWithEmailAndPassword(data.login, data.password)
    .then(() => redirect(Path.Books))
    .catch(() => setLoginError(true));
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name='login'
        render={({ field }: ControllerRender<'login'>): JSX.Element => (
          <Input
            {...field}
            errorMessage={errors.login?.message}
            placeholder='E-mail'
            type='text'
            withError={!!errors.login}
          />
        )}
      />
      <Controller
        control={control}
        name='password'
        render={({ field }: ControllerRender<'password'>): JSX.Element => (
          <Input
            {...field}
            errorMessage={errors.password?.message}
            placeholder='Hasło'
            type='password'
            withError={!!errors.password}
          />  
        )}
      />
      <Button fullWidth={true} label='Zaloguj się' theme={ButtonTheme.Default} variant={ButtonVariant.Medium} />
      {!!isLoginError && <StyledChip color='error' label='Nieprawidłowy email lub hasło' />} 
    </FormWrapper>
  );
};
