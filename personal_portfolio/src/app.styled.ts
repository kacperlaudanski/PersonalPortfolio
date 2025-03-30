import { Outlet } from 'react-router';
import { styled } from 'styled-components';

export const GlobalWrapper = styled.main`
  width: 100%;
  padding: 40px 40px 40px 120px;
`;

export const StyledOutlet = styled(Outlet)`
  margin-left: 80px;
`;