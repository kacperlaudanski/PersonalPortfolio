import { IconName, Path } from '../../enums';
import { SideMenuItem } from './components/sideMenuItem/sideMenuItem.component';
import { Wrapper } from './sidebar.styled';

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <SideMenuItem icon={IconName.Main} name='Books' path={Path.Books} />
      <SideMenuItem icon={IconName.Main} name='Books' path={Path.AddBook} />
      <SideMenuItem icon={IconName.Main} name='Books' path={Path.AddBook} />
    </Wrapper>
  )
}
