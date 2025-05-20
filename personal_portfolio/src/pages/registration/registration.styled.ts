import { styled } from 'styled-components';

import { Breakpoint, Color } from '../../enums';

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${Breakpoint.DesktopXL};
  height: 100svh;
  display: flex;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Color.Blue300};
  border-radius: 15px;
`;

