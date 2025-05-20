import { ButtonTheme, ButtonVariant } from '../../enums';

export interface ButtonProps {
  label: string;
  theme: ButtonTheme;
  variant: ButtonVariant;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  reversed?: boolean;
}

export interface BaseButtonProps {
  $fullWidth: boolean;
  $reversed: boolean;
  $theme: ButtonTheme;
  $variant: ButtonVariant;
}