import { zodResolver } from '@hookform/resolvers/zod';
import { UserCredential } from 'firebase/auth';
import React from 'react'
import { Controller, useForm, UseFormReturn } from 'react-hook-form';
import { NavigateFunction, redirect, useNavigate } from 'react-router';

import { Button, Input } from '../../../../components'
import { ButtonTheme, ButtonVariant, Path } from '../../../../enums'
import { doCreateUserWithEmailAndPassword, doSendEmailVerification } from '../../../../firebase';

import { userSchema } from "./form.schema";
import { AgreementContainer, FlexWrapper, FormContainer, FormWrapper, Headline, Subheader, Wrapper } from './form.styled'
import { Answers, ControllerRender } from './form.types';

export const Form: React.FC = () => {

  const { control, formState: { errors }, handleSubmit }: UseFormReturn<Answers> = useForm({
    defaultValues: {
      user_name: '',
      user_surname: '',
      user_email: '',
      user_password: '',
      user_password_repeat: '',
    },
    resolver: zodResolver(userSchema),
  });
  const navigate: NavigateFunction = useNavigate();

  const onSubmit: (data: Answers) => Promise<void> = async (data: Answers): Promise<void> => {
    const response: UserCredential = await doCreateUserWithEmailAndPassword(data.user_email, data.user_password);
    
    if (response) {
      await doSendEmailVerification();
      navigate(Path.EmailVerification);
    } else {
      navigate(Path.Error);
    }
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Headline>
          Utwórz konto
        </Headline>
        <Subheader>
          Wypełnij formularz, aby utworzyć konto.
        </Subheader>
        <FormContainer>
          <FlexWrapper>
            <Controller
              control={control}
              name='user_name'
              render={({ field }: ControllerRender<'user_name'>): JSX.Element => (
                <Input
                  {...field}
                  errorMessage={errors.user_name?.message}
                  placeholder='Imię'
                  type='text'
                  withError={!!errors.user_name}
                />
              )}
            />
            <Controller
              control={control}
              name='user_surname'
              render={({ field }: ControllerRender<'user_surname'>): JSX.Element => (
                <Input
                  {...field}
                  errorMessage={errors.user_surname?.message}
                  placeholder='Nazwisko'
                  type='text'
                  withError={!!errors.user_surname}
                />
              )}
            />
          </FlexWrapper>
          <Controller
            control={control}
            name='user_email'
            render={({ field }: ControllerRender<'user_email'>): JSX.Element => (
              <Input
                {...field}
                errorMessage={errors.user_email?.message}
                placeholder='Email'
                type='text'
                withError={!!errors.user_email}
              />
            )}
          />
          <FlexWrapper>
            <Controller
              control={control}
              name='user_password'
              render={({ field }: ControllerRender<'user_password'>): JSX.Element => (
                <Input
                  {...field}
                  errorMessage={errors.user_password?.message}
                  placeholder='Hasło'
                  type='password'
                  withError={!!errors.user_password}
                />
              )}
            />
            <Controller
              control={control}
              name='user_password_repeat'
              render={({ field }: ControllerRender<'user_password_repeat'>): JSX.Element => (
                <Input
                  {...field}
                  errorMessage={errors.user_password_repeat?.message}
                  placeholder='Potwierdź hasło'
                  type='password'
                  withError={!!errors.user_password_repeat}
                />
              )}
            />
          </FlexWrapper>
        </FormContainer>
        <AgreementContainer>
          <Subheader>
            Przetwarzanie danych odbywa się na podstawie zgody udzielonej przez Państwa podczas rejestracji/zakupu/kontaktu z nami. Mają Państwo prawo do wycofania zgody w dowolnym momencie, co nie wpływa na legalność przetwarzania danych przed jej wycofaniem.
          </Subheader>
        </AgreementContainer>
        <Button label='Zarejestruj się' theme={ButtonTheme.Default} variant={ButtonVariant.Medium} />
      </FormWrapper>
    </Wrapper>
  )
}
