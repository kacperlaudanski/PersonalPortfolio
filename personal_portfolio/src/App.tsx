import { createBrowserRouter, RouterProvider } from 'react-router'
import { GlobalStyles } from './globalStyles';
import Login from './pages/login/login.component';
import { Main } from './pages/main/main'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <Main />,
    }
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
