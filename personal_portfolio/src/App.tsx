import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { Path } from './enums';
import { GlobalStyles } from './globalStyles';
import { Layout } from './layout';
import { BooksPage } from './pages/books/booksPage.component';
import { Login } from './pages/login/login.component';
import { Main } from './pages/main/main';
import { Registration } from './pages/registration/registration';

function App() {

  const routes = createBrowserRouter([
    {
      path: Path.Default,
      element: <Layout />,
      children: [
        {
          index: true,
          path: Path.Main,
          element: <Main />,
        },
        {
          path: Path.Books,
          element: <BooksPage />,
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
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
