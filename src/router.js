import { createBrowserRouter } from 'react-router-dom'

import { MainPage, SigninPage, NotFoundPage } from './pages'

const routes = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/signin',
    element: <SigninPage />,
  },
  {
    path: '/*',
    element: <NotFoundPage />,
  },
]

const router = createBrowserRouter(routes)

export default router
