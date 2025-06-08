import { css, RuleSet, styled } from 'styled-components';

import { Color } from '../../../../enums';

import { SideMenuItemBaseProps } from './sideMenuItem.types';

export const IconContainer = styled.div<SideMenuItemBaseProps>`
  width: 40px;
  height: 40px;
  border-radius: 99px;
  border: 1px solid ${Color.Black};
  ${({ $active }: SideMenuItemBaseProps): RuleSet<object> | false => $active && activeItemStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s linear;
`;

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    ${IconContainer} {
      background-color: ${Color.Pink600};
    }
  }
`;

const activeItemStyles: RuleSet = css`
  background-color: ${Color.Pink300};
  border: none;
  fill: ${Color.White};
`;
