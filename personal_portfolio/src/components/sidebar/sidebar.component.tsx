import React from 'react';

import { IconName, Path } from '../../enums';

import { SideMenuItem } from './components/sideMenuItem/sideMenuItem.component';
import { Wrapper } from './sidebar.styled';

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <SideMenuItem icon={IconName.Books} name='books' path={Path.Books} />
      <SideMenuItem icon={IconName.AddBook} name='addBooks' path={Path.AddBook} />
      <SideMenuItem icon={IconName.Search} name='search' path={Path.AddBook} />
    </Wrapper>
  )
}
