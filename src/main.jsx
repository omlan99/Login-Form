import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Layout/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Registration from './Components/Registration.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path: 'registration',
        element:<Registration></Registration>
      }

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Imported the component named AuthProvider which has the context authContext */}
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
