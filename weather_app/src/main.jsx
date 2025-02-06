import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider, BrowserRouter } from "react-router-dom";


import Info from './routes/Info.jsx';
import Weather from './routes/Weather.jsx'
import Home from './routes/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
      
    children: [
      {
        path: "/weather",
        element: <Weather/>
      },
      {
        path: "/info",
        element: <Info/>
      },{
        path: "/Home",
        element: <Home/>
      }
    ],
    },
  ], 
{
   basename: "/weather-app"
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
