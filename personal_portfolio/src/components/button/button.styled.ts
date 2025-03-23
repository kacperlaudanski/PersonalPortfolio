import { styled, RuleSet, css } from 'styled-components';

import { ButtonTheme, ButtonVariant } from '../../enums';

import { BaseButtonProps } from './button.types';

const buttonVariant: { [variant in ButtonVariant]: RuleSet<BaseButtonProps> } = {
  [ButtonVariant.Small]: css`
  
  `,
  [ButtonVariant.Medium]: css`
  
  `,
};

const buttonTheme: { [theme in ButtonTheme]: RuleSet<BaseButtonProps> } = {
  [ButtonTheme.Default]: css`
    
  `,
}

export const BaseButton = styled.button``;
