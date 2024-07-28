import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import Villa from './Villa.jsx'
register();

const router = createBrowserRouter([
  {
    path: '/Villa_Crisanta',
    element: <App/>
  },
  {
    path: '/Villa_Crisanta/Villa',
    element: <Villa/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
