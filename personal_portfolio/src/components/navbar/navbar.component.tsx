import { Avatar, AvatarContainer, EnLanguageButton, ItemsContainer, LanguagePanel, LogoutButton, LogoutContainer, Wrapper } from './navbar.styled';
import { NavbarProps } from './navbar.types';

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps): React.JSX.Element => {
  const { avatar, onLogout }: NavbarProps = props;

  return (
    <Wrapper>
      <ItemsContainer>
        <LanguagePanel>
          <EnLanguageButton />
        </LanguagePanel>
        <AvatarContainer>
          <Avatar alt='avatar' src={avatar} />
        </AvatarContainer>
        <LogoutContainer>
          <LogoutButton onClick={onLogout} />
        </LogoutContainer>
      </ItemsContainer>
    </Wrapper>
  );
};
