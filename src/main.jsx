import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { register } from 'swiper/element/bundle';
import './index.css'
import './style.css'
import App from './App'
import LandingPage from './components/pages/LandingPage';
import Villa from './components/pages/Villa';
import Admin from './components/pages/Admin'
import Verify from './components/auth/Verify';
import NotFound from './components/pages/NotFound'

register();
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <LandingPage />
      },
      {
        path: ':token',
        element: <Verify />
      },
      {
        path: 'villa',
        element: <Villa />
      },
    ]
  },
  {
    path: '/admin',
    element: <Admin />
  }, 
  {
    path: '*',
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router}/>
  // </StrictMode>,
)