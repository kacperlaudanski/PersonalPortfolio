import { Form } from './components/form/form.component';
import { Container, ContentContainer, Header, Wrapper } from './login.styled';

export const Login: React.FC = (): JSX.Element => {

  return (
    <Wrapper>
      <Container>
        <ContentContainer>
          <Header>
            {/* TODO: add translation system */}
            Zaloguj się
          </Header>
          <Form />
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};
