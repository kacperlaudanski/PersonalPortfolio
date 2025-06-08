import { IconName } from '../../enums';

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export interface IconSettings {
  width: string;
  height: string;
}
