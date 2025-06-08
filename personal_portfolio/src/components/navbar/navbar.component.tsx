import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router';

import { IconName, Path } from '../../enums';
import { signOut } from '../../firebase';
import { Icon } from '../icon/icon.component';

import { Avatar, AvatarContainer, EnLanguageButton, ItemsContainer, LanguagePanel, LogoutButton, LogoutContainer, TileContainer, Wrapper } from './navbar.styled';
import { NavbarProps } from './navbar.types';

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps): React.JSX.Element => {
  const { avatar }: NavbarProps = props;
  const redirect: NavigateFunction = useNavigate();

  const handleLogout: () => void = (): void => {
    signOut()
      .then(() => redirect(Path.Login))
      .catch(() => redirect(Path.Error))
  };

  return (
    <Wrapper>
      <ItemsContainer>
        <TileContainer>
          <EnLanguageButton />
        </TileContainer>
        <TileContainer>
          <Avatar alt='avatar' src={avatar} />
        </TileContainer>
        <TileContainer>
          <LogoutButton onClick={handleLogout}>
            <Icon name={IconName.Logout} />
          </LogoutButton>
        </TileContainer>
      </ItemsContainer>
    </Wrapper>
  );
};
