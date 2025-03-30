import { Location, useLocation } from 'react-router';

import ExampleIcon from './images/library.svg';
import { Icon, IconContainer, Wrapper } from './sideMenuItem.styled';
import { SideMenuItemProps } from './sideMenuItem.types';

export const SideMenuItem: React.FC<SideMenuItemProps> = (props: SideMenuItemProps): JSX.Element => {
  const { icon, name, path }: SideMenuItemProps = props;
  const { pathname }: Location<string> = useLocation();

  return (
    <Wrapper>
      <IconContainer $active={pathname === path}>
        {/* TODO: Add custom Icon compoennt */}
        <Icon src={ExampleIcon} />
      </IconContainer>
    </Wrapper>
  );
};
