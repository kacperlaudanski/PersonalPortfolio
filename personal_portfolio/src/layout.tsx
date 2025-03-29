import { Outlet } from 'react-router';
import { GlobalWrapper } from './app.styled';

import { Navbar } from './components';

import Avatar from './components/navbar/images/avatar.jpeg';

export const Layout: React.FC = (): JSX.Element => {

  const handleLogout: () => void = (): void => {
    console.log('logged out');
  }

  return (
    <>
      <Navbar avatar={Avatar} onLogout={handleLogout} />
      <GlobalWrapper>
        <Outlet />
      </GlobalWrapper>
    </>
  );
};
