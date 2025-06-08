import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { useAuth } from './contexts';
import { PrivateRoute } from './contexts/auth/components';
import { Path } from './enums';
import { GlobalStyles } from './globalStyles';
import { Layout } from './layout';
import { BooksPage } from './pages/books/booksPage.component';
import { EmailVerification } from './pages/emailVerification/emailVerification.component';
import { Login } from './pages/login/login.component';
import { Main } from './pages/main/main';
import { Registration } from './pages/registration/registration';
import { UseAuth } from './types';

function App() {
  const { currentUser }: UseAuth = useAuth();

  const routes = createBrowserRouter([
    {
      path: Path.Default,
      element: <Layout />,
      children: [
        {
          index: true,
          path: Path.Main,
          element: (
            <PrivateRoute user={currentUser}>
              <Main />
            </PrivateRoute>
          ),
        },
        {
          path: Path.Books,
          element: (
            <PrivateRoute user={currentUser}>
              <BooksPage />
            </PrivateRoute>
          ),
        }
      ],
    },
    {
      path: Path.Login,
      element: <Login />,
    },
    {
      path: Path.Registration,
      element: <Registration />,
    },
    {
      path: Path.EmailVerification,
      element: <EmailVerification />,
    }
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
