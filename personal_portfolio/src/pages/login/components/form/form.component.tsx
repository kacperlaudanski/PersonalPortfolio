import React from 'react';

import { Button, Input } from '../../../../components';
import { ButtonTheme, ButtonVariant } from '../../../../enums';

import { FormWrapper } from './form.styled';

export const Form: React.FC = (): JSX.Element => {



  const handleLogin = () => {
    console.log('')
  }


  return (
    <FormWrapper onSubmit={handleLogin}>
      <Input placeholder='Email' type='text' onChange={handleLogin} />
      <Input placeholder='Hasło' type='text' onChange={handleLogin} />
      <Button fullWidth={true} label='Zaloguj się' theme={ButtonTheme.Default} variant={ButtonVariant.Medium} />
    </FormWrapper>
  );
};
