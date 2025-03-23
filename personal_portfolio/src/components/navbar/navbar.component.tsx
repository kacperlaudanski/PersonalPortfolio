import { Link } from "react-router";
import { Path } from "../../enums";
import { Container, LanguageButton, LanguagePanel, Logo, NavItem, NavList } from "./navbar.styled";

export const Navbar: React.FC = (): React.JSX.Element => {
  return (
    <Container>
      <Logo />
      <NavList>
        <NavItem>
          <Link to={Path.Books}>Books</Link>
        </NavItem>
        <NavItem>
          <Link to=''>Add book</Link>
        </NavItem>
        <NavItem>
          <Link to=''>Log Out</Link>
        </NavItem>
      </NavList>
      <LanguagePanel>
        <LanguageButton>EN</LanguageButton>
        <LanguageButton>PL</LanguageButton>
      </LanguagePanel>
    </Container>
  );
};
