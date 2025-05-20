import React from 'react'
import { Form } from './components/form/form.component';
import { ImageContainer, Wrapper } from './registration.styled';

export const Registration: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <ImageContainer />
      <Form />
    </Wrapper>
  );
};
