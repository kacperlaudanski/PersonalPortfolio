import React from 'react';

import { Path } from '../../enums';

import { Form } from './components';
import { Container, ContentContainer, Header, RegisterContainer, RegisterText, StyledLink, Wrapper } from './login.styled';

export const Login: React.FC = (): JSX.Element => {

  return (
    <Wrapper>
      <Container>
        <ContentContainer>
          <Header>
            Zaloguj się
          </Header>
          <Form />
          <RegisterContainer>
            <RegisterText>Nie masz konta ?</RegisterText>
            <StyledLink to={Path.Registration}>Zarejestruj się</StyledLink>
          </RegisterContainer>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};
