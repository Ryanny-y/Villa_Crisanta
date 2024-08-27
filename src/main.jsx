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

register();
const router = createBrowserRouter([
  {
    path: '/Villa_Crisanta/',
    element: <App />,
    children: [
      {
        path: '',
        element: <LandingPage />
      },
      {
        path: 'villa',
        element: <Villa />
      }
    ]
  },
  {
    path: '/Villa_Crisanta/admin',
    element: <Admin />
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router}/>
  // </StrictMode>,
)