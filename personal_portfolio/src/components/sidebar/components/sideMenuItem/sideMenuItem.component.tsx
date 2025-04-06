import React from 'react';
import { Location, useLocation } from 'react-router';
import { IconName } from '../../../../enums';
import { Icon } from '../../../icon/icon.component';

import { IconContainer, Wrapper } from './sideMenuItem.styled';
import { SideMenuItemProps } from './sideMenuItem.types';

export const SideMenuItem: React.FC<SideMenuItemProps> = (props: SideMenuItemProps): JSX.Element => {
  const { path }: SideMenuItemProps = props;
  const { pathname }: Location<string> = useLocation();

  return (
    <Wrapper>
      <IconContainer $active={pathname === path}>
        {/* <Icon name={IconName.Logout} size={20} /> */}
      </IconContainer>
    </Wrapper>
  );
};
