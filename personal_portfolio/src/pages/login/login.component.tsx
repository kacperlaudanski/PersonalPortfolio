import { Form } from './components/form/form.component';
import { Container, ContentContainer, Header, LeftBottomShape, RightBottomShape, TopLeftShape, Wrapper } from './login.styled';

import ShapeImage from './images/books.svg';
import ShapeRoomImage from './images/room.svg';
import Shape1 from './images/shape.svg';


export const Login: React.FC = (): JSX.Element => {

  return (
    <Wrapper>
      <TopLeftShape src={ShapeRoomImage} />
      <LeftBottomShape src={Shape1} />
      <Container>
        <ContentContainer>
          <Header>
            {/* TODO: add translation system */}
            Zaloguj się
          </Header>
          <Form />
        </ContentContainer>
      </Container>
      <RightBottomShape src={ShapeImage} />
    </Wrapper>
  );
};
