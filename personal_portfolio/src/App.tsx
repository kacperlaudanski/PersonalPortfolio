import { createBrowserRouter, RouterProvider } from 'react-router'
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
      <RouterProvider router={routes} />
    </>
  )
}

export default App
