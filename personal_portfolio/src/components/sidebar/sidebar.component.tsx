import React from 'react';
import { IconName, Path } from '../../enums';
import { SideMenuItem } from './components/sideMenuItem/sideMenuItem.component';
import { Wrapper } from './sidebar.styled';

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <SideMenuItem icon={IconName.Logout} name='Books' path={Path.Books} />
      <SideMenuItem icon={IconName.Logout} name='Books' path={Path.AddBook} />
      <SideMenuItem icon={IconName.Logout} name='Books' path={Path.AddBook} />
    </Wrapper>
  )
}
