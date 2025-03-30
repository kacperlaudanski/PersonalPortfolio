import { styled } from 'styled-components';
import { Color } from '../../enums';

export const Wrapper = styled.aside`
  width: 80px;
  height: 100vh;
  border-right: 1px solid ${Color.Gray200};
  position: fixed;
  z-index: 2;
  background-color: ${Color.Gray100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: width linear .3s;

  &:hover {
    width: 300px;
  }
`;
