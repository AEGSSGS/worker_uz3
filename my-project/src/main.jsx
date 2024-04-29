import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Ishlar from './pages/Ishlar.jsx';
import Login_page from './pages/Login_page.jsx';
import Saqlangan_ishlar from './pages/Saqlangan_ishlar.jsx';
import Profile from './pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Royxat",
    element: <Ishlar />,
  },
  {
    path: "Login",
    element: <Login_page />,
  },
  {
    path: "Tarix",
    element: <Saqlangan_ishlar />
  },
  {
    path: "Profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
)


