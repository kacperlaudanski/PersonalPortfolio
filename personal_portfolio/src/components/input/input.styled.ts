import { css, RuleSet, styled } from 'styled-components';
import { Color } from '../../enums';

export const InputElement = styled.input`
  flex: 1;
  height: 100%;
  outline: none;
  border: none;
  background-color: inherit;
  border-radius: 5px;
  margin: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: ${Color.Gray200};

  &:has(${InputElement}:focus) {
    outline: 2px solid ${Color.Teal700};
  }
`;

const sideElementsStyles: RuleSet<object> = css`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  color: ${Color.Gray400};
`;

export const LeftElement = styled.div`
  ${sideElementsStyles};
`;

export const RightElement = styled.div`
  ${sideElementsStyles};
`;
