import { BaseButton } from './button.styled';
import { ButtonProps } from './button.types';

export const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const { label, onClick, theme, variant, className, disabled, reversed }: ButtonProps = props;

  return (
    <BaseButton>
      
    </BaseButton>
  )
}
