import { Navbar } from "../../components/navbar/navbar.component";
import { Container } from "./main.styled";

export const Main: React.FC = (): React.JSX.Element => {
  return (
    <Container>
      <Navbar />
    </Container>
  )
};