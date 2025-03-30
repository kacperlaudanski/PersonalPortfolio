import { IconName, Path } from '../../../../enums';

export interface SideMenuItemProps {
  name: string;
  icon: IconName;
  path: Path;
}

export interface SideMenuItemBaseProps {
  $active: boolean;
}
