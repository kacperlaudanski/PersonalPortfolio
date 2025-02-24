import { Container, LanguageButton, LanguagePanel, Logo, NavItem, NavLink, NavList } from "./navbar.styled";

export const Navbar: React.FC = (): React.JSX.Element => {
  return (
    <Container>
      <Logo />
      <NavList>
        <NavItem>
          <NavLink href=''>Books</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href=''>Add book</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href=''>Log Out</NavLink>
        </NavItem>
      </NavList>
      <LanguagePanel>
        <LanguageButton>EN</LanguageButton>
        <LanguageButton>PL</LanguageButton>
      </LanguagePanel>
    </Container>
  );
};
