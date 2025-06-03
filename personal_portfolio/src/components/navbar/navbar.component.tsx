import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router';

import { Path } from '../../enums';
import { signOut } from '../../firebase';

import { Avatar, AvatarContainer, EnLanguageButton, ItemsContainer, LanguagePanel, LogoutButton, LogoutContainer, Wrapper } from './navbar.styled';
import { NavbarProps } from './navbar.types';

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps): React.JSX.Element => {
  const { avatar, onLogout }: NavbarProps = props;
  const navigate: NavigateFunction = useNavigate();

  const handleLogout: () => void = (): void => {
    signOut();
    navigate(Path.Login);
  };

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
          <LogoutButton onClick={handleLogout} />
        </LogoutContainer>
      </ItemsContainer>
    </Wrapper>
  );
};
