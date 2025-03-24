import { BaseButton } from './button.styled';
import { ButtonProps } from './button.types';

export const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const { fullWidth, label, onClick, theme, variant, className, disabled, reversed }: ButtonProps = props;

  return (
    <BaseButton
      $fullWidth={fullWidth}
      $theme={theme}
      $variant={variant}
      className={className}
      disabled={disabled}
      onClick={onClick}
      reversed={reversed}
    >
      {label}
    </BaseButton>
  )
}
