import { styled } from 'styled-components';

import { Color, FontWeight } from '../../enums';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 99px;
  background-color: ${Color.Teal700};
`;

export const Counter = styled.div`
  color: ${Color.Teal700};
  font-size: 20px;
`;

export const HeadlineText = styled.h2`
  font-size: 24px;
  line-height: 32px;
  font-weight: ${FontWeight.SemiBold};
`;