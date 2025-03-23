import { ButtonTheme, ButtonVariant } from '../../enums';

export interface ButtonProps {
  label: string;
  onClick: void;
  theme: ButtonTheme;
  variant: ButtonVariant;
  className?: string;
  disabled?: boolean;
  reversed?: boolean;
}

export interface BaseButtonProps {
  $theme: ButtonTheme;
  $variant: ButtonVariant;
}