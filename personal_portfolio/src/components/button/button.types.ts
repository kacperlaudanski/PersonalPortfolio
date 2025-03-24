import { ButtonTheme, ButtonVariant } from '../../enums';

export interface ButtonProps {
  label: string;
  onClick: void;
  theme: ButtonTheme;
  variant: ButtonVariant;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  reversed?: boolean;
}

export interface BaseButtonProps {
  $fullWidth: boolean;
  $reversed: boolean;
  $theme: ButtonTheme;
  $variant: ButtonVariant;
}