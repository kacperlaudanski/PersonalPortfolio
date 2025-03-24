import { styled, RuleSet, css } from 'styled-components';

import { ButtonTheme, ButtonVariant, Color } from '../../enums';

import { BaseButtonProps } from './button.types';

const buttonVariant: { [variant in ButtonVariant]: RuleSet<BaseButtonProps> } = {
  [ButtonVariant.Large]: css`
    padding: 16px 20px;
  `,
  [ButtonVariant.Medium]: css`
    padding: 12px 16px;
  `,
};

const buttonTheme: { [theme in ButtonTheme]: RuleSet<BaseButtonProps> } = {
  [ButtonTheme.Default]: css`
    background-color: ${Color.Pink300};
    color: ${Color.White};

    &:hover {
      background-color: ${Color.Pink600};
    }
  `,
}

const baseButtonStyles: RuleSet<BaseButtonProps> = css<BaseButtonProps>`
  width: ${({ $fullWidth }: BaseButtonProps): string => $fullWidth ? '100%' : 'fit-content'};
  border: none;
  border-radius: 100px;
  outline: none;
  display: flex;
  flex-direction: ${({ $reversed }: BaseButtonProps): string | false => $reversed && 'row-reversed'};
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const BaseButton = styled.button<BaseButtonProps>`
  ${baseButtonStyles};
  ${({ $theme }: BaseButtonProps): RuleSet<BaseButtonProps> => buttonTheme[$theme]};
  ${({ $variant }: BaseButtonProps): RuleSet<BaseButtonProps> => buttonVariant[$variant]};
`;
