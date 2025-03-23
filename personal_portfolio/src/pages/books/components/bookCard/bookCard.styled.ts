import styled from 'styled-components';

import { Color } from '../../../../enums';

export const Wrapper = styled.div`
  width: 250px;
  min-height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img``;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
`;

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: ${Color.Gray400};
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Detail = styled.h3`
  font-size: 14px;
  color: ${Color.Gray400};
  font-weight: 500;
`;
