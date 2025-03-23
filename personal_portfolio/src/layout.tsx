import { Outlet } from 'react-router';
import { GlobalWrapper } from './app.styled';

import { Navbar } from './components';

export const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <GlobalWrapper>
        <Outlet />
      </GlobalWrapper>
    </>
  );
};
